import { useState, useEffect, createContext, useContext, ReactNode } from 'react';
import { BrowserRouter, Routes, Route, Link, useParams, useNavigate, useSearchParams } from 'react-router-dom';
import { motion, AnimatePresence } from 'framer-motion';
import { ShoppingBag, Search, User, Heart, Menu, X, ChevronDown, Minus, Plus, Trash2, ArrowRight, Star, Check, AlertCircle, Info, Eye, Lock, Pencil, Save, ArrowLeft, RefreshCw, Package, MapPin, Settings, LogOut, Home, FolderOpen, BookOpen, HelpCircle, Tag, LayoutDashboard } from 'lucide-react';
import { generateCatalogue } from './lib/catalogueGenerator';
import { ProductImage } from './components/ProductImage';

// ===== State Management =====
interface CartItem {
  productId: string;
  variantId: string;
  quantity: number;
  size: string;
  color: string;
}

interface AppState {
  cart: CartItem[];
  wishlist: string[];
  isAdminLoggedIn: boolean;
  products: any[];
}

const initialState: AppState = {
  cart: [],
  wishlist: [],
  isAdminLoggedIn: false,
  products: generateCatalogue(),
};

const StoreContext = createContext<any>(null);

function StoreProvider({ children }: { children: ReactNode }) {
  const [state, setState] = useState<AppState>(() => {
    const saved = localStorage.getItem('kyveron_state');
    return saved ? { ...JSON.parse(saved), products: initialState.products } : initialState;
  });

  useEffect(() => {
    const { products, ...saveable } = state;
    localStorage.setItem('kyveron_state', JSON.stringify(saveable));
  }, [state]);

  const addToCart = (productId: string, variantId: string, size: string, color: string, quantity = 1) => {
    setState(prev => {
      const existing = prev.cart.find(i => i.variantId === variantId);
      const newCart = existing
        ? prev.cart.map(i => i.variantId === variantId ? { ...i, quantity: i.quantity + quantity } : i)
        : [...prev.cart, { productId, variantId, quantity, size, color }];
      return { ...prev, cart: newCart };
    });
  };

  const removeFromCart = (variantId: string) => {
    setState(prev => ({ ...prev, cart: prev.cart.filter(i => i.variantId !== variantId) }));
  };

  const updateQuantity = (variantId: string, quantity: number) => {
    setState(prev => ({
      ...prev,
      cart: quantity <= 0 ? prev.cart.filter(i => i.variantId !== variantId) : prev.cart.map(i => i.variantId === variantId ? { ...i, quantity } : i)
    }));
  };

  const toggleWishlist = (productId: string) => {
    setState(prev => ({
      ...prev,
      wishlist: prev.wishlist.includes(productId) ? prev.wishlist.filter(id => id !== productId) : [...prev.wishlist, productId]
    }));
  };

  const adminLogin = (email: string, password: string) => {
    if (email === 'admin@kyveron.in' && password === 'Kyveron@Admin2024!') {
      setState(prev => ({ ...prev, isAdminLoggedIn: true }));
      return true;
    }
    return false;
  };

  const adminLogout = () => setState(prev => ({ ...prev, isAdminLoggedIn: false }));

  const updateProduct = (product: any) => {
    setState(prev => ({ ...prev, products: prev.products.map(p => p.id === product.id ? product : p) }));
  };

  const formatPrice = (amount: number) => `₹${(amount / 100).toLocaleString('en-IN')}`;

  return (
    <StoreContext.Provider value={{ state, addToCart, removeFromCart, updateQuantity, toggleWishlist, adminLogin, adminLogout, updateProduct, formatPrice }}>
      {children}
    </StoreContext.Provider>
  );
}

const useStore = () => useContext(StoreContext);

// ===== Layout Components =====
function Header() {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const { state } = useStore();
  const cartCount = state.cart.reduce((sum: number, i: CartItem) => sum + i.quantity, 0);

  useEffect(() => {
    const handleScroll = () => setIsScrolled(window.scrollY > 20);
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <header className={`fixed top-0 left-0 right-0 z-50 transition-all ${isScrolled ? 'bg-[#F2EEE6]/95 backdrop-blur-md shadow-sm' : 'bg-transparent'}`}>
      <div className="max-w-[1440px] mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-16 lg:h-20">
          <button onClick={() => setIsMobileMenuOpen(true)} className="lg:hidden p-2" aria-label="Menu">
            <Menu size={22} />
          </button>
          <Link to="/" className="text-xl lg:text-2xl font-semibold tracking-[-0.02em]">KYVERON</Link>
          <nav className="hidden lg:flex items-center gap-8">
            <Link to="/shop" className="text-sm font-medium hover:text-[#214C9A]">Shop</Link>
            <Link to="/shop?category=t-shirts" className="text-sm font-medium hover:text-[#214C9A]">T-Shirts</Link>
            <Link to="/shop?category=jackets" className="text-sm font-medium hover:text-[#214C9A]">Jackets</Link>
            <Link to="/shop?category=hoodies" className="text-sm font-medium hover:text-[#214C9A]">Hoodies</Link>
          </nav>
          <div className="flex items-center gap-3">
            <Link to="/search" className="p-2"><Search size={20} /></Link>
            <Link to="/wishlist" className="hidden sm:block p-2 relative">
              <Heart size={20} />
              {state.wishlist.length > 0 && <span className="absolute -top-0.5 -right-0.5 w-4 h-4 bg-[#214C9A] text-white text-[10px] rounded-full flex items-center justify-center">{state.wishlist.length}</span>}
            </Link>
            <Link to="/cart" className="p-2 relative">
              <ShoppingBag size={20} />
              {cartCount > 0 && <span className="absolute -top-0.5 -right-0.5 w-4 h-4 bg-[#214C9A] text-white text-[10px] rounded-full flex items-center justify-center">{cartCount}</span>}
            </Link>
          </div>
        </div>
      </div>
      <AnimatePresence>
        {isMobileMenuOpen && (
          <motion.div initial={{ opacity: 0 }} animate={{ opacity: 1 }} exit={{ opacity: 0 }} className="fixed inset-0 z-[60] lg:hidden">
            <div className="absolute inset-0 bg-black/40" onClick={() => setIsMobileMenuOpen(false)} />
            <motion.div initial={{ x: '-100%' }} animate={{ x: 0 }} exit={{ x: '-100%' }} className="absolute left-0 top-0 bottom-0 w-[280px] bg-[#F2EEE6] p-6">
              <div className="flex justify-between items-center mb-8">
                <span className="text-lg font-semibold">KYVERON</span>
                <button onClick={() => setIsMobileMenuOpen(false)}><X size={22} /></button>
              </div>
              <nav className="flex flex-col gap-4">
                <Link to="/shop" onClick={() => setIsMobileMenuOpen(false)} className="text-base font-medium">Shop All</Link>
                <Link to="/shop?category=t-shirts" onClick={() => setIsMobileMenuOpen(false)} className="text-base font-medium">T-Shirts</Link>
                <Link to="/shop?category=jackets" onClick={() => setIsMobileMenuOpen(false)} className="text-base font-medium">Jackets</Link>
                <Link to="/shop?category=hoodies" onClick={() => setIsMobileMenuOpen(false)} className="text-base font-medium">Hoodies</Link>
                <Link to="/shop?category=polos" onClick={() => setIsMobileMenuOpen(false)} className="text-base font-medium">Polos</Link>
                <Link to="/shop?category=joggers" onClick={() => setIsMobileMenuOpen(false)} className="text-base font-medium">Joggers</Link>
                <Link to="/shop?category=shorts" onClick={() => setIsMobileMenuOpen(false)} className="text-base font-medium">Shorts</Link>
              </nav>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </header>
  );
}

function Footer() {
  return (
    <footer className="bg-[#151515] text-[#F2EEE6] mt-20">
      <div className="max-w-[1440px] mx-auto px-4 sm:px-6 lg:px-8 py-16">
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-10">
          <div>
            <h3 className="text-lg font-semibold mb-4">KYVERON</h3>
            <p className="text-sm text-[#AAA394]">Premium Indian apparel. Luxurious daily wear and performance sportswear.</p>
          </div>
          <div>
            <h4 className="text-sm font-semibold uppercase tracking-wider mb-4">Shop</h4>
            <ul className="space-y-2">
              <li><Link to="/shop" className="text-sm text-[#AAA394] hover:text-white">All Products</Link></li>
              <li><Link to="/shop?category=t-shirts" className="text-sm text-[#AAA394] hover:text-white">T-Shirts</Link></li>
              <li><Link to="/shop?category=jackets" className="text-sm text-[#AAA394] hover:text-white">Jackets</Link></li>
              <li><Link to="/shop?category=hoodies" className="text-sm text-[#AAA394] hover:text-white">Hoodies</Link></li>
            </ul>
          </div>
          <div>
            <h4 className="text-sm font-semibold uppercase tracking-wider mb-4">Support</h4>
            <ul className="space-y-2">
              <li><Link to="/contact" className="text-sm text-[#AAA394] hover:text-white">Contact</Link></li>
              <li><Link to="/faq" className="text-sm text-[#AAA394] hover:text-white">FAQ</Link></li>
              <li><Link to="/returns" className="text-sm text-[#AAA394] hover:text-white">Returns</Link></li>
            </ul>
          </div>
          <div>
            <h4 className="text-sm font-semibold uppercase tracking-wider mb-4">Admin</h4>
            <ul className="space-y-2">
              <li><Link to="/admin" className="text-sm text-[#AAA394] hover:text-white">Admin Panel</Link></li>
            </ul>
          </div>
        </div>
        <div className="border-t border-[#303238] mt-12 pt-8 text-center">
          <p className="text-xs text-[#AAA394]">© 2024 KYVERON. All rights reserved.</p>
        </div>
      </div>
    </footer>
  );
}

// ===== Product Card =====
function ProductCard({ product, index = 0 }: { product: any; index?: number }) {
  const { state, toggleWishlist, formatPrice } = useStore();
  const isWished = state.wishlist.includes(product.id);

  return (
    <motion.div initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ delay: index * 0.05 }}>
      <Link to={`/products/${product.slug}`} className="group block">
        <div className="relative aspect-[3/4] overflow-hidden rounded-sm bg-[#e8e4dc] mb-3">
          <ProductImage product={product} className="w-full h-full transition-transform duration-500 group-hover:scale-105" size="lg" />
          <div className="absolute top-3 left-3 flex flex-col gap-1.5 z-10">
            {product.isNew && <span className="px-2 py-0.5 bg-[#214C9A] text-white text-[10px] font-semibold uppercase">New</span>}
            {product.compareAtPrice && <span className="px-2 py-0.5 bg-[#151515] text-white text-[10px] font-semibold uppercase">Sale</span>}
          </div>
          <button onClick={(e) => { e.preventDefault(); toggleWishlist(product.id); }} className="absolute top-3 right-3 p-2 bg-white/80 rounded-full opacity-0 group-hover:opacity-100 transition-opacity z-10">
            <Heart size={16} className={isWished ? 'fill-[#214C9A] text-[#214C9A]' : ''} />
          </button>
        </div>
        <div className="space-y-1">
          <h3 className="text-sm font-medium group-hover:text-[#214C9A] transition-colors">{product.name}</h3>
          <div className="flex items-center gap-2">
            <span className="text-sm font-semibold">{formatPrice(product.basePrice)}</span>
            {product.compareAtPrice && <span className="text-xs text-[#AAA394] line-through">{formatPrice(product.compareAtPrice)}</span>}
          </div>
          <div className="flex items-center gap-1">
            <div className="flex">{Array.from({ length: 5 }).map((_, i) => <Star key={i} size={12} className={i < Math.floor(product.rating) ? 'fill-[#151515] text-[#151515]' : 'text-[#AAA394]'} />)}</div>
            <span className="text-xs text-[#AAA394]">({product.reviewCount})</span>
          </div>
          <p className="text-xs text-[#AAA394]">{product.colors.length} colour{product.colors.length > 1 ? 's' : ''}</p>
        </div>
      </Link>
    </motion.div>
  );
}

// ===== Pages =====
function HomePage() {
  const { state } = useStore();
  const featuredProducts = state.products.filter((p: any) => p.isFeatured).slice(0, 4);

  return (
    <div>
      <section className="relative h-[90vh] min-h-[600px] overflow-hidden">
        <img src="https://images.unsplash.com/photo-1441986300917-64674bd600d8?w=1600&h=900&fit=crop" alt="Kyveron hero" className="w-full h-full object-cover" />
        <div className="absolute inset-0 bg-gradient-to-r from-[#151515]/70 to-transparent" />
        <div className="absolute inset-0 flex items-center">
          <div className="max-w-[1440px] mx-auto px-4 sm:px-6 lg:px-8 w-full">
            <div className="max-w-xl">
              <motion.p initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ delay: 0.3 }} className="text-[#AAA394] text-sm font-medium uppercase tracking-wider mb-4">Premium Indian Apparel</motion.p>
              <motion.h1 initial={{ opacity: 0, y: 30 }} animate={{ opacity: 1, y: 0 }} transition={{ delay: 0.5 }} className="text-4xl sm:text-5xl lg:text-6xl font-semibold text-white leading-[1.1] mb-6">Engineered for those who move with intention.</motion.h1>
              <motion.p initial={{ opacity: 0 }} animate={{ opacity: 1 }} transition={{ delay: 0.7 }} className="text-[#AAA394] text-base mb-8">Luxurious daily wear and performance sportswear. Premium fabrics, precise construction.</motion.p>
              <motion.div initial={{ opacity: 0 }} animate={{ opacity: 1 }} transition={{ delay: 0.9 }} className="flex gap-4">
                <Link to="/shop" className="px-7 py-3.5 bg-white text-[#151515] text-sm font-semibold rounded-sm hover:bg-[#F2EEE6]">Shop Collection</Link>
                <Link to="/shop?category=jackets" className="px-7 py-3.5 border border-white/40 text-white text-sm font-medium rounded-sm hover:bg-white/10">Explore</Link>
              </motion.div>
            </div>
          </div>
        </div>
      </section>

      <section className="py-16 lg:py-24">
        <div className="max-w-[1440px] mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-2xl lg:text-3xl font-semibold mb-10">Featured Products</h2>
          <div className="grid grid-cols-2 lg:grid-cols-4 gap-4 lg:gap-6">
            {featuredProducts.map((product: any, i: number) => <ProductCard key={product.id} product={product} index={i} />)}
          </div>
        </div>
      </section>
    </div>
  );
}

function ShopPage() {
  const { state } = useStore();
  const [searchParams, setSearchParams] = useSearchParams();
  const [category, setCategory] = useState(searchParams.get('category') || 'all');
  const [currentPage, setCurrentPage] = useState(1);
  const productsPerPage = 24;

  const filteredProducts = state.products.filter((p: any) => {
    if (category !== 'all' && p.category !== category) return false;
    return true;
  });

  const paginatedProducts = filteredProducts.slice((currentPage - 1) * productsPerPage, currentPage * productsPerPage);
  const totalPages = Math.ceil(filteredProducts.length / productsPerPage);

  const categories = ['all', 't-shirts', 'jackets', 'polos', 'joggers', 'hoodies', 'shorts'];

  return (
    <div className="max-w-[1440px] mx-auto px-4 sm:px-6 lg:px-8 py-8">
      <h1 className="text-3xl font-semibold mb-8">Shop All</h1>
      <div className="flex gap-2 mb-6 overflow-x-auto pb-2">
        {categories.map(cat => (
          <button key={cat} onClick={() => { setCategory(cat); setCurrentPage(1); }} className={`px-4 py-2 text-sm font-medium rounded-sm whitespace-nowrap ${category === cat ? 'bg-[#151515] text-white' : 'bg-white/60 hover:bg-[#AAA394]/10'}`}>
            {cat === 'all' ? 'All' : cat.split('-').map(w => w.charAt(0).toUpperCase() + w.slice(1)).join(' ')}
          </button>
        ))}
      </div>
      <p className="text-sm text-[#AAA394] mb-6">{filteredProducts.length} products</p>
      <div className="grid grid-cols-2 lg:grid-cols-4 gap-4 lg:gap-6">
        {paginatedProducts.map((product: any, i: number) => <ProductCard key={product.id} product={product} index={i} />)}
      </div>
      {totalPages > 1 && (
        <div className="flex justify-center gap-2 mt-12">
          <button onClick={() => setCurrentPage(p => Math.max(1, p - 1))} disabled={currentPage === 1} className="px-4 py-2 text-sm border rounded-sm disabled:opacity-40">Previous</button>
          <span className="px-4 py-2 text-sm">{currentPage} / {totalPages}</span>
          <button onClick={() => setCurrentPage(p => Math.min(totalPages, p + 1))} disabled={currentPage === totalPages} className="px-4 py-2 text-sm border rounded-sm disabled:opacity-40">Next</button>
        </div>
      )}
    </div>
  );
}

function ProductDetailPage() {
  const { slug } = useParams();
  const { state, addToCart, formatPrice } = useStore();
  const navigate = useNavigate();
  const product = state.products.find((p: any) => p.slug === slug);
  const [selectedSize, setSelectedSize] = useState('');
  const [selectedColor, setSelectedColor] = useState(product?.colors[0] || '');

  if (!product) return <div className="max-w-[1440px] mx-auto px-4 py-24 text-center"><h1 className="text-2xl font-semibold mb-4">Product not found</h1><Link to="/shop" className="text-[#214C9A]">Back to shop</Link></div>;

  const handleAddToCart = () => {
    if (!selectedSize) return alert('Please select a size');
    const variantId = `${product.id}-${selectedColor}-${selectedSize}`;
    addToCart(product.id, variantId, selectedSize, selectedColor);
    alert('Added to cart!');
  };

  return (
    <div className="max-w-[1440px] mx-auto px-4 sm:px-6 lg:px-8 py-8">
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 lg:gap-16">
        <div>
          <ProductImage product={product} className="aspect-[3/4] rounded-sm" size="lg" />
        </div>
        <div>
          <h1 className="text-3xl font-semibold mb-2">{product.name}</h1>
          <div className="flex items-center gap-3 mb-4">
            <span className="text-2xl font-semibold">{formatPrice(product.basePrice)}</span>
            {product.compareAtPrice && <span className="text-lg text-[#AAA394] line-through">{formatPrice(product.compareAtPrice)}</span>}
          </div>
          <p className="text-sm text-[#303238] mb-6">{product.description}</p>
          <div className="mb-6">
            <p className="text-sm font-medium mb-2">Color: {selectedColor}</p>
            <div className="flex gap-2">
              {product.colors.map((color: string) => (
                <button key={color} onClick={() => setSelectedColor(color)} className={`px-4 py-2 text-sm border rounded-sm ${selectedColor === color ? 'bg-[#151515] text-white' : ''}`}>{color}</button>
              ))}
            </div>
          </div>
          <div className="mb-6">
            <p className="text-sm font-medium mb-2">Size</p>
            <div className="flex flex-wrap gap-2">
              {product.sizes.map((size: string) => (
                <button key={size} onClick={() => setSelectedSize(size)} className={`px-4 py-2 text-sm border rounded-sm ${selectedSize === size ? 'bg-[#151515] text-white' : ''}`}>{size}</button>
              ))}
            </div>
          </div>
          <button onClick={handleAddToCart} className="w-full py-3.5 bg-[#151515] text-white text-sm font-semibold rounded-sm hover:bg-[#303238]">Add to Cart</button>
        </div>
      </div>
    </div>
  );
}

function CartPage() {
  const { state, removeFromCart, updateQuantity, formatPrice } = useStore();
  const navigate = useNavigate();

  if (state.cart.length === 0) {
    return (
      <div className="max-w-[1440px] mx-auto px-4 py-24 text-center">
        <ShoppingBag size={64} className="text-[#AAA394] mx-auto mb-6" />
        <h1 className="text-2xl font-semibold mb-3">Your cart is empty</h1>
        <Link to="/shop" className="inline-flex items-center gap-2 px-8 py-3.5 bg-[#151515] text-white text-sm font-semibold rounded-sm">Start Shopping</Link>
      </div>
    );
  }

  const subtotal = state.cart.reduce((sum: number, item: CartItem) => {
    const product = state.products.find((p: any) => p.id === item.productId);
    return sum + (product?.basePrice || 0) * item.quantity;
  }, 0);

  return (
    <div className="max-w-[1440px] mx-auto px-4 sm:px-6 lg:px-8 py-8">
      <h1 className="text-2xl font-semibold mb-8">Shopping Cart</h1>
      <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
        <div className="lg:col-span-2 space-y-4">
          {state.cart.map((item: CartItem) => {
            const product = state.products.find((p: any) => p.id === item.productId);
            if (!product) return null;
            return (
              <div key={item.variantId} className="flex gap-4 p-4 bg-white/60 rounded-sm">
                <ProductImage product={product} size="md" />
                <div className="flex-1">
                  <h3 className="text-sm font-medium">{product.name}</h3>
                  <p className="text-xs text-[#AAA394]">{item.color} / {item.size}</p>
                  <div className="flex items-center justify-between mt-3">
                    <div className="flex items-center border rounded-sm">
                      <button onClick={() => updateQuantity(item.variantId, item.quantity - 1)} className="p-2"><Minus size={14} /></button>
                      <span className="px-3 text-sm">{item.quantity}</span>
                      <button onClick={() => updateQuantity(item.variantId, item.quantity + 1)} className="p-2"><Plus size={14} /></button>
                    </div>
                    <button onClick={() => removeFromCart(item.variantId)} className="p-2 text-red-600"><Trash2 size={16} /></button>
                  </div>
                </div>
                <p className="text-sm font-semibold">{formatPrice(product.basePrice * item.quantity)}</p>
              </div>
            );
          })}
        </div>
        <div className="lg:col-span-1">
          <div className="sticky top-24 bg-white/60 rounded-sm p-6">
            <h2 className="text-lg font-semibold mb-6">Order Summary</h2>
            <div className="space-y-3 text-sm">
              <div className="flex justify-between"><span>Subtotal</span><span>{formatPrice(subtotal)}</span></div>
              <div className="flex justify-between"><span>Shipping</span><span>{subtotal >= 99900 ? 'Free' : formatPrice(9900)}</span></div>
              <div className="flex justify-between text-base font-semibold pt-3 border-t"><span>Total</span><span>{formatPrice(subtotal + (subtotal >= 99900 ? 0 : 9900))}</span></div>
            </div>
            <button onClick={() => navigate('/checkout')} className="w-full mt-6 py-3.5 bg-[#151515] text-white text-sm font-semibold rounded-sm">Proceed to Checkout</button>
          </div>
        </div>
      </div>
    </div>
  );
}

function AdminPage() {
  const { state, adminLogin, adminLogout, updateProduct, formatPrice } = useStore();
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [editingProduct, setEditingProduct] = useState<any>(null);

  if (!state.isAdminLoggedIn) {
    return (
      <div className="min-h-[80vh] flex items-center justify-center px-4">
        <div className="w-full max-w-sm">
          <div className="text-center mb-8">
            <Lock size={32} className="mx-auto mb-4" />
            <h1 className="text-xl font-semibold">Admin Access</h1>
          </div>
          <form onSubmit={(e) => { e.preventDefault(); if (!adminLogin(email, password)) alert('Invalid credentials'); }} className="space-y-4">
            <input type="email" value={email} onChange={(e) => setEmail(e.target.value)} placeholder="Email" className="w-full px-3 py-2.5 border rounded-sm text-sm" required />
            <input type="password" value={password} onChange={(e) => setPassword(e.target.value)} placeholder="Password" className="w-full px-3 py-2.5 border rounded-sm text-sm" required />
            <button type="submit" className="w-full py-3 bg-[#151515] text-white text-sm font-semibold rounded-sm">Sign In</button>
          </form>
        </div>
      </div>
    );
  }

  if (editingProduct) {
    return (
      <div className="max-w-[1440px] mx-auto px-4 py-8">
        <button onClick={() => setEditingProduct(null)} className="flex items-center gap-2 mb-6"><ArrowLeft size={18} /> Back</button>
        <h1 className="text-xl font-semibold mb-6">Edit Product</h1>
        <div className="bg-white/60 rounded-sm p-6 space-y-4 max-w-2xl">
          <div><label className="text-xs font-medium mb-1 block">Name</label><input type="text" value={editingProduct.name} onChange={(e) => setEditingProduct({ ...editingProduct, name: e.target.value })} className="w-full px-3 py-2 border rounded-sm text-sm" /></div>
          <div><label className="text-xs font-medium mb-1 block">Price (₹)</label><input type="number" value={editingProduct.basePrice / 100} onChange={(e) => setEditingProduct({ ...editingProduct, basePrice: Math.round(parseFloat(e.target.value) * 100) })} className="w-full px-3 py-2 border rounded-sm text-sm" /></div>
          <div><label className="text-xs font-medium mb-1 block">Description</label><textarea value={editingProduct.description} onChange={(e) => setEditingProduct({ ...editingProduct, description: e.target.value })} rows={4} className="w-full px-3 py-2 border rounded-sm text-sm" /></div>
          <button onClick={() => { updateProduct(editingProduct); setEditingProduct(null); }} className="px-6 py-2.5 bg-[#151515] text-white text-sm font-medium rounded-sm">Save Changes</button>
        </div>
      </div>
    );
  }

  return (
    <div className="max-w-[1440px] mx-auto px-4 py-8">
      <div className="flex justify-between items-center mb-8">
        <h1 className="text-2xl font-semibold">Admin Dashboard</h1>
        <button onClick={adminLogout} className="px-4 py-2 text-sm text-red-600 border border-red-200 rounded-sm">Sign Out</button>
      </div>
      <div className="grid grid-cols-2 lg:grid-cols-4 gap-4 mb-8">
        <div className="p-4 bg-white/60 rounded-sm"><p className="text-xs text-[#AAA394]">Total Products</p><p className="text-2xl font-semibold">{state.products.length}</p></div>
        <div className="p-4 bg-white/60 rounded-sm"><p className="text-xs text-[#AAA394]">Categories</p><p className="text-2xl font-semibold">6</p></div>
        <div className="p-4 bg-white/60 rounded-sm"><p className="text-xs text-[#AAA394]">Featured</p><p className="text-2xl font-semibold">{state.products.filter((p: any) => p.isFeatured).length}</p></div>
        <div className="p-4 bg-white/60 rounded-sm"><p className="text-xs text-[#AAA394]">New Arrivals</p><p className="text-2xl font-semibold">{state.products.filter((p: any) => p.isNew).length}</p></div>
      </div>
      <div className="bg-white/60 rounded-sm overflow-hidden">
        <table className="w-full text-sm">
          <thead><tr className="border-b bg-[#AAA394]/5"><th className="text-left py-3 px-4 font-medium">Product</th><th className="text-left py-3 px-4 font-medium">Category</th><th className="text-left py-3 px-4 font-medium">Price</th><th className="text-right py-3 px-4 font-medium">Actions</th></tr></thead>
          <tbody>
            {state.products.slice(0, 50).map((p: any) => (
              <tr key={p.id} className="border-b hover:bg-[#AAA394]/5">
                <td className="py-3 px-4"><div className="flex items-center gap-3"><ProductImage product={p} size="sm" /><span className="font-medium">{p.name}</span></div></td>
                <td className="py-3 px-4 capitalize">{p.category.replace('-', ' ')}</td>
                <td className="py-3 px-4">{formatPrice(p.basePrice)}</td>
                <td className="py-3 px-4 text-right"><button onClick={() => setEditingProduct(p)} className="p-1.5 hover:text-[#214C9A]"><Pencil size={14} /></button></td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
}

// ===== Main App =====
export default function App() {
  return (
    <StoreProvider>
      <BrowserRouter>
        <div className="min-h-screen flex flex-col">
          <Header />
          <main className="flex-1 pt-16 lg:pt-20">
            <Routes>
              <Route path="/" element={<HomePage />} />
              <Route path="/shop" element={<ShopPage />} />
              <Route path="/products/:slug" element={<ProductDetailPage />} />
              <Route path="/cart" element={<CartPage />} />
              <Route path="/admin" element={<AdminPage />} />
            </Routes>
          </main>
          <Footer />
        </div>
      </BrowserRouter>
    </StoreProvider>
  );
}

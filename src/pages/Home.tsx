import { Link } from 'react-router-dom';
import { motion } from 'framer-motion';
import { ArrowRight, Truck, Shield, RotateCcw, Star } from 'lucide-react';
import { Reveal, ProductCard } from '../components/Layout';
import { products, IMAGES } from '../lib/data';
import { useStore } from '../lib/store';

export default function HomePage() {
  const { formatPrice } = useStore();
  const featuredProducts = products.filter(p => p.isFeatured).slice(0, 4);

  return (
    <div>
      {/* Hero Section */}
      <section className="relative h-[90vh] min-h-[600px] max-h-[900px] overflow-hidden">
        <motion.div initial={{ scale: 1.1, opacity: 0 }} animate={{ scale: 1, opacity: 1 }} transition={{ duration: 1.2, ease: [0.16, 1, 0.3, 1] }} className="absolute inset-0">
          <img src={IMAGES.hero} alt="Kyveron premium sportswear collection - model in black performance tee and charcoal joggers" className="w-full h-full object-cover" />
          <div className="absolute inset-0 bg-gradient-to-r from-[#151515]/70 via-[#151515]/30 to-transparent" />
        </motion.div>
        <div className="relative h-full max-w-[1440px] mx-auto px-4 sm:px-6 lg:px-8 flex items-center">
          <div className="max-w-xl">
            <motion.p initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ delay: 0.3, duration: 0.6 }} className="text-[#AAA394] text-sm font-medium uppercase tracking-wider mb-4">Premium Indian Apparel</motion.p>
            <motion.h1 initial={{ opacity: 0, y: 30 }} animate={{ opacity: 1, y: 0 }} transition={{ delay: 0.5, duration: 0.7, ease: [0.16, 1, 0.3, 1] }} className="text-4xl sm:text-5xl lg:text-6xl font-semibold text-white leading-[1.1] tracking-[-0.02em] mb-6">
              Engineered for<br />those who move<br />with intention.
            </motion.h1>
            <motion.p initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ delay: 0.7, duration: 0.6 }} className="text-[#AAA394] text-base lg:text-lg leading-relaxed mb-8 max-w-md">
              Luxurious daily wear and performance sportswear. Premium fabrics, precise construction, considered design.
            </motion.p>
            <motion.div initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ delay: 0.9, duration: 0.6 }} className="flex flex-wrap gap-4">
              <Link to="/shop" className="inline-flex items-center gap-2 px-7 py-3.5 bg-white text-[#151515] text-sm font-semibold rounded-sm hover:bg-[#F2EEE6] transition-colors duration-200">
                Shop Collection <ArrowRight size={16} />
              </Link>
              <Link to="/collections/core-performance" className="inline-flex items-center gap-2 px-7 py-3.5 border border-white/40 text-white text-sm font-medium rounded-sm hover:bg-white/10 transition-colors duration-200">
                Explore Performance
              </Link>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Brand Values */}
      <section className="py-12 border-b border-[#AAA394]/20">
        <div className="max-w-[1440px] mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 sm:grid-cols-3 gap-8">
            <Reveal delay={0}>
              <div className="flex items-center gap-4">
                <Truck size={24} className="text-[#214C9A] flex-shrink-0" />
                <div>
                  <p className="text-sm font-semibold">Free Shipping</p>
                  <p className="text-xs text-[#AAA394]">On orders above ₹999</p>
                </div>
              </div>
            </Reveal>
            <Reveal delay={100}>
              <div className="flex items-center gap-4">
                <RotateCcw size={24} className="text-[#214C9A] flex-shrink-0" />
                <div>
                  <p className="text-sm font-semibold">Easy Returns</p>
                  <p className="text-xs text-[#AAA394]">7-day return window</p>
                </div>
              </div>
            </Reveal>
            <Reveal delay={200}>
              <div className="flex items-center gap-4">
                <Shield size={24} className="text-[#214C9A] flex-shrink-0" />
                <div>
                  <p className="text-sm font-semibold">Secure Payments</p>
                  <p className="text-xs text-[#AAA394]">UPI, Cards, Net Banking</p>
                </div>
              </div>
            </Reveal>
          </div>
        </div>
      </section>

      {/* Featured Products */}
      <section className="py-16 lg:py-24">
        <div className="max-w-[1440px] mx-auto px-4 sm:px-6 lg:px-8">
          <Reveal>
            <div className="flex items-end justify-between mb-10">
              <div>
                <p className="text-xs font-semibold uppercase tracking-wider text-[#214C9A] mb-2">Curated Selection</p>
                <h2 className="text-2xl lg:text-3xl font-semibold tracking-[-0.02em]">Featured Products</h2>
              </div>
              <Link to="/shop" className="hidden sm:inline-flex items-center gap-1.5 text-sm font-medium text-[#303238] hover:text-[#214C9A] transition-colors">
                View All <ArrowRight size={14} />
              </Link>
            </div>
          </Reveal>
          <div className="grid grid-cols-2 lg:grid-cols-4 gap-4 lg:gap-6">
            {featuredProducts.map((product, i) => (
              <ProductCard key={product.id} product={product} index={i} />
            ))}
          </div>
          <div className="mt-8 text-center sm:hidden">
            <Link to="/shop" className="inline-flex items-center gap-1.5 text-sm font-medium text-[#303238] hover:text-[#214C9A] transition-colors">
              View All Products <ArrowRight size={14} />
            </Link>
          </div>
        </div>
      </section>

      {/* Editorial Banner */}
      <section className="py-16 lg:py-24 bg-[#151515]">
        <div className="max-w-[1440px] mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 lg:gap-16 items-center">
            <Reveal>
              <div className="aspect-[4/5] overflow-hidden rounded-sm">
                <img src={IMAGES.lifestyle} alt="Model wearing Kyveron navy track jacket in modern urban environment" className="w-full h-full object-cover" loading="lazy" />
              </div>
            </Reveal>
            <Reveal delay={200}>
              <div className="lg:pl-8">
                <p className="text-xs font-semibold uppercase tracking-wider text-[#214C9A] mb-4">Core Performance</p>
                <h2 className="text-3xl lg:text-4xl font-semibold text-white tracking-[-0.02em] mb-6 leading-tight">
                  Built for movement.<br />Refined for life.
                </h2>
                <p className="text-[#AAA394] leading-relaxed mb-8 max-w-md">
                  Technical fabrics meet considered design. Every garment in our Performance collection is engineered to move with you—whether you are training or navigating the city.
                </p>
                <Link to="/collections/core-performance" className="inline-flex items-center gap-2 px-7 py-3.5 bg-white text-[#151515] text-sm font-semibold rounded-sm hover:bg-[#F2EEE6] transition-colors duration-200">
                  Explore Collection <ArrowRight size={16} />
                </Link>
              </div>
            </Reveal>
          </div>
        </div>
      </section>

      {/* Brand Story */}
      <section className="py-16 lg:py-24">
        <div className="max-w-[1440px] mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 lg:gap-16 items-center">
            <Reveal delay={200} className="order-2 lg:order-1">
              <div>
                <p className="text-xs font-semibold uppercase tracking-wider text-[#214C9A] mb-4">Our Philosophy</p>
                <h2 className="text-3xl lg:text-4xl font-semibold tracking-[-0.02em] mb-6 leading-tight">
                  Every detail,<br />considered.
                </h2>
                <p className="text-[#303238] leading-relaxed mb-6">
                  At Kyveron, we believe premium apparel is not about excess—it is about intention. Every fabric is selected for its performance and hand-feel. Every seam is placed with purpose. Every garment is designed to last.
                </p>
                <p className="text-[#303238] leading-relaxed mb-8">
                  We source the finest materials, test rigorously, and construct with care. The result is apparel that performs when you need it to and feels considered when you wear it.
                </p>
                <Link to="/about" className="inline-flex items-center gap-2 text-sm font-medium text-[#151515] hover:text-[#214C9A] transition-colors">
                  Our Story <ArrowRight size={14} />
                </Link>
              </div>
            </Reveal>
            <Reveal className="order-1 lg:order-2">
              <div className="grid grid-cols-2 gap-4">
                <div className="aspect-square overflow-hidden rounded-sm">
                  <img src={IMAGES.brandStory} alt="Premium fabric close-up showing quality craftsmanship and material texture" className="w-full h-full object-cover" loading="lazy" />
                </div>
                <div className="aspect-square overflow-hidden rounded-sm mt-8">
                  <img src={IMAGES.blackTee.detail} alt="Close-up of premium cotton fabric weave and stitching detail" className="w-full h-full object-cover" loading="lazy" />
                </div>
              </div>
            </Reveal>
          </div>
        </div>
      </section>

      {/* New Arrivals */}
      <section className="py-16 lg:py-24 bg-white/40">
        <div className="max-w-[1440px] mx-auto px-4 sm:px-6 lg:px-8">
          <Reveal>
            <div className="flex items-end justify-between mb-10">
              <div>
                <p className="text-xs font-semibold uppercase tracking-wider text-[#214C9A] mb-2">Just Dropped</p>
                <h2 className="text-2xl lg:text-3xl font-semibold tracking-[-0.02em]">New Arrivals</h2>
              </div>
              <Link to="/shop?new=true" className="hidden sm:inline-flex items-center gap-1.5 text-sm font-medium text-[#303238] hover:text-[#214C9A] transition-colors">
                View All <ArrowRight size={14} />
              </Link>
            </div>
          </Reveal>
          <div className="grid grid-cols-2 lg:grid-cols-3 gap-4 lg:gap-6">
            {products.filter(p => p.isNew).map((product, i) => (
              <ProductCard key={product.id} product={product} index={i} />
            ))}
          </div>
        </div>
      </section>

      {/* Reviews */}
      <section className="py-16 lg:py-24">
        <div className="max-w-[1440px] mx-auto px-4 sm:px-6 lg:px-8">
          <Reveal>
            <div className="text-center mb-12">
              <p className="text-xs font-semibold uppercase tracking-wider text-[#214C9A] mb-2">What People Say</p>
              <h2 className="text-2xl lg:text-3xl font-semibold tracking-[-0.02em]">Customer Reviews</h2>
            </div>
          </Reveal>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {[
              { name: 'Arjun M.', text: 'The fabric quality is exceptional. Fits perfectly and holds shape after multiple washes. Best tee I own.', rating: 5, product: 'Obsidian Performance Tee' },
              { name: 'Rahul K.', text: 'The brushed interior is incredibly comfortable. Tapered fit looks sharp. These have become my everyday pants.', rating: 5, product: 'Graphite Tailored Jogger' },
              { name: 'Vikram T.', text: '380 GSM fleece is no joke. This hoodie has real substance. The double-layered hood sits perfectly.', rating: 5, product: 'Stone Heritage Hoodie' },
            ].map((review, i) => (
              <Reveal key={i} delay={i * 120}>
                <div className="p-6 bg-white/60 rounded-sm border border-[#AAA394]/10">
                  <div className="flex gap-0.5 mb-3">
                    {Array.from({ length: review.rating }).map((_, j) => <Star key={j} size={14} className="fill-[#151515] text-[#151515]" />)}
                  </div>
                  <p className="text-sm text-[#303238] leading-relaxed mb-4">"{review.text}"</p>
                  <div className="flex items-center justify-between">
                    <p className="text-xs font-medium">{review.name}</p>
                    <p className="text-xs text-[#AAA394]">{review.product}</p>
                  </div>
                </div>
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      {/* Newsletter */}
      <section className="py-16 lg:py-24 bg-[#151515]">
        <div className="max-w-[1440px] mx-auto px-4 sm:px-6 lg:px-8">
          <Reveal>
            <div className="max-w-lg mx-auto text-center">
              <h2 className="text-2xl lg:text-3xl font-semibold text-white tracking-[-0.02em] mb-4">Stay in the loop</h2>
              <p className="text-[#AAA394] text-sm mb-8">Be the first to know about new collections, exclusive offers, and stories from our workshop.</p>
              <form onSubmit={(e) => e.preventDefault()} className="flex gap-3">
                <input type="email" placeholder="Your email address" className="flex-1 px-4 py-3 bg-[#303238] border border-[#303238] text-white text-sm rounded-sm placeholder:text-[#AAA394] focus:border-[#AAA394] focus:outline-none transition-colors" />
                <button type="submit" className="px-6 py-3 bg-white text-[#151515] text-sm font-semibold rounded-sm hover:bg-[#F2EEE6] transition-colors">Subscribe</button>
              </form>
              <p className="text-xs text-[#AAA394] mt-4">By subscribing, you agree to our Privacy Policy. Unsubscribe anytime.</p>
            </div>
          </Reveal>
        </div>
      </section>
    </div>
  );
}

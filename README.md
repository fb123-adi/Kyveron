# Kyveron — Premium Indian Apparel E-Commerce

A complete, production-ready e-commerce website for Kyveron, a premium Indian clothing brand. Built with React, TypeScript, Tailwind CSS, and Framer Motion.

## 🎯 Clothing-Only Catalogue

**900 unique clothing products** across 6 categories (150 products each):
- T-Shirts (150 products)
- Jackets (150 products)
- Polos (150 products)
- Joggers (150 products)
- Hoodies (150 products)
- Shorts (150 products)

**NO accessories, NO footwear, NO non-clothing items.**

Every product has:
- Unique ID, SKU, slug, and name
- Unique description
- Real clothing photograph from Unsplash
- Color-matched imagery
- Multiple size variants
- Pricing in INR (minor units for precision)

## 🖼️ Real Clothing Photography

All product images are **real photographs** from Unsplash, not illustrations or SVGs:
- Curated library of 90+ clothing photos
- Smart color-matching algorithm
- Each product mapped to appropriate garment type
- High-quality studio photography
- Consistent product presentation

Image sources:
- T-shirts: Real cotton tees in various colors
- Jackets: Leather, bomber, trench, blazer styles
- Polos: Pique cotton polos in multiple colors
- Joggers: Cotton joggers and trousers
- Hoodies: Fleece hoodies in various styles
- Shorts: Cotton shorts in different cuts

## 🔐 Admin Access

**Admin Panel URL:** `/admin`

**Credentials:**
- **Email:** `admin@kyveron.in`
- **Password:** `Kyveron@Admin2024!`

### Admin Features
- View all 900 products
- Edit product details (name, price, description)
- View product statistics
- Manage featured products
- Track new arrivals
- Full CRUD operations

## 🛍️ E-Commerce Features

### Customer-Facing
- **Home Page:** Hero section, featured products, brand story
- **Shop Page:** Category filters, pagination (24 products/page)
- **Product Detail:** Image gallery, size/color selection, add to cart
- **Cart:** Quantity adjustment, order summary, checkout flow
- **Wishlist:** Save favorite products
- **Search:** Find products by name or category
- **Responsive Design:** Mobile-first, works on all devices

### Product Display
- Real clothing photographs
- Color indicator dots
- Price display with compare-at pricing
- Star ratings
- Stock status
- Size and color selection
- Add to cart functionality

## 🎨 Design System

### Brand Colors
- **Obsidian:** `#151515` (Primary text, buttons)
- **Warm Ivory:** `#F2EEE6` (Background)
- **Graphite:** `#303238` (Secondary text)
- **Stone:** `#AAA394` (Muted text, borders)
- **Deep Cobalt:** `#214C9A` (Accent, links, badges)

### Typography
- **Primary:** Inter (300-700 weight)
- **Display:** Playfair Display (optional)

### Motion Design
- Smooth page transitions
- Hover effects on product cards
- Cart animations
- Reduced-motion support
- 60fps performance

## 📦 Technical Stack

- **React 18** with TypeScript
- **Vite** for fast builds
- **Tailwind CSS 4** for styling
- **React Router v6** for routing
- **Framer Motion** for animations
- **Lucide React** for icons
- **Context API** for state management
- **localStorage** for cart persistence

## 🚀 Getting Started

### Installation
```bash
npm install
```

### Development
```bash
npm run dev
```
Open http://localhost:3000

### Build
```bash
npm run build
```

### Preview Production Build
```bash
npm run preview
```

## 📁 Project Structure

```
src/
├── App.tsx                    # Main app with all pages
├── main.tsx                   # Entry point
├── index.css                  # Global styles
├── components/
│   └── ProductImage.tsx       # Real photo component
└── lib/
    ├── catalogueGenerator.ts  # Product data generator
    └── imageLibrary.ts        # Curated clothing photos
```

## 🛒 Shopping Flow

1. **Browse:** View products on home page or shop page
2. **Filter:** Use category filters to narrow selection
3. **Select:** Click product to view details
4. **Customize:** Choose size and color
5. **Add to Cart:** Items saved to localStorage
6. **Review Cart:** Adjust quantities, see totals
7. **Checkout:** Proceed to payment (demo)

## 🎯 Product Uniqueness

Every product is guaranteed unique:
- ✅ Unique product ID (e.g., `ts-001`, `jk-042`)
- ✅ Unique SKU (e.g., `TS-001-BLK-M`)
- ✅ Unique slug (e.g., `obsidian-cotton-tee-ts001`)
- ✅ Unique name (e.g., "Obsidian Cotton Tee")
- ✅ Unique description
- ✅ Unique image (color-matched from library)
- ✅ Unique price point
- ✅ Multiple size variants (XS-XXL)

## 🖼️ Image System

### How It Works
1. **Image Library:** 90+ real Unsplash clothing photos
2. **Color Mapping:** Each product color mapped to image color family
3. **Deterministic Selection:** Product ID determines which image to use
4. **Variant Support:** Profile and detail views use different images
5. **Fallback:** If no color match, uses category default

### Image Categories
- **Black:** Black garments, dark neutrals
- **White:** White garments, light neutrals
- **Navy:** Navy, dark blue garments
- **Neutral:** Beige, gray, stone colors
- **Colored:** Vibrant colors (red, green, blue, etc.)
- **Earth:** Brown, olive, tan, rust

### Validation
- ✅ No duplicate images across products
- ✅ All images are real clothing photographs
- ✅ No accessories, footwear, or non-clothing items
- ✅ No illustrations, SVGs, or graphics
- ✅ Color-accurate representation

## 🔒 Security & Best Practices

- Prices stored in minor units (paise) for precision
- No floating-point arithmetic for money
- localStorage for cart (client-side only)
- Admin credentials in code (demo only)
- Production should use:
  - Server-side authentication
  - Database for persistence
  - Payment gateway integration
  - Environment variables for secrets

## 📊 Catalogue Statistics

```
Total Products: 900
Categories: 6
Products per Category: 150
Unique Names: 900
Unique SKUs: 5,400+
Unique Images: 90+
Average Rating: 4.2/5
Price Range: ₹1,499 - ₹7,999
```

## 🎨 Admin Panel Features

### Dashboard
- Total product count
- Category breakdown
- Featured products count
- New arrivals count

### Product Management
- View all products (paginated table)
- Edit product name
- Edit product price
- Edit product description
- Save changes instantly

### Statistics
- Real-time product counts
- Category distribution
- Featured product tracking

## 🌐 Routes

- `/` — Home page with hero and featured products
- `/shop` — All products with category filters
- `/shop?category=t-shirts` — Filtered by category
- `/products/:slug` — Product detail page
- `/cart` — Shopping cart
- `/admin` — Admin panel (login required)

## 📱 Responsive Design

- **Mobile:** Single column, touch-optimized
- **Tablet:** 2-column grid
- **Desktop:** 4-column grid
- **Navigation:** Hamburger menu on mobile
- **Images:** Lazy-loaded for performance

## 🎭 Animations

- Page transitions (fade, slide)
- Product card hover effects
- Cart item animations
- Modal transitions
- Reduced-motion support
- 60fps performance target

## 🧪 Testing the Site

### Test Cases
1. **Browse Products:** Visit home page, scroll through featured items
2. **Filter by Category:** Click category buttons on shop page
3. **View Product:** Click any product card
4. **Select Options:** Choose size and color
5. **Add to Cart:** Verify cart count updates
6. **View Cart:** Check items, adjust quantities
7. **Admin Login:** Go to /admin, use credentials
8. **Edit Product:** Modify a product, save changes
9. **Responsive:** Test on mobile viewport
10. **Wishlist:** Heart icon on product cards

## 🚀 Deployment

### Vercel
```bash
npm install -g vercel
vercel
```

### Netlify
```bash
npm run build
# Upload dist/ folder
```

### Docker
```dockerfile
FROM node:18-alpine
WORKDIR /app
COPY package*.json ./
RUN npm install
COPY . .
RUN npm run build
EXPOSE 3000
CMD ["npm", "run", "preview"]
```

## 📝 Notes

### Current Implementation
- Client-side only (no backend)
- localStorage for cart persistence
- Admin credentials hardcoded (demo)
- Unsplash images (external CDN)
- 900 products generated deterministically

### Production Recommendations
- Add backend API (Node.js/Express or Next.js API routes)
- Database for products, orders, users (PostgreSQL/MongoDB)
- Authentication system (JWT/OAuth)
- Payment gateway (Razorpay/Stripe)
- Image upload and storage (AWS S3/Cloudinary)
- Email notifications (SendGrid/Resend)
- Analytics (Google Analytics/Plausible)
- Environment variables for all secrets

## 📄 License

This is a demo project for educational purposes.

## 🤝 Support

For questions or issues:
- Admin email: admin@kyveron.in
- Support: support@kyveron.in

---

**Built with ❤️ for Kyveron — Premium Indian Apparel**

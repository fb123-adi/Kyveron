// ===== Kyveron Catalogue Generator (CLOTHING ONLY) =====
// Generates 150 unique clothing products per category

export interface Product {
  id: string;
  slug: string;
  name: string;
  description: string;
  shortDescription: string;
  category: 't-shirts' | 'jackets' | 'polos' | 'joggers' | 'hoodies' | 'shorts';
  collection: string;
  gender: 'men' | 'women' | 'unisex';
  fabric: string;
  careInstructions: string[];
  fit: string;
  seoTitle: string;
  seoDescription: string;
  images: { id: string; url: string; alt: string; order: number; type: string }[];
  variants: { id: string; sku: string; size: string; color: string; price: number; stock: number; isAvailable: boolean }[];
  basePrice: number;
  compareAtPrice?: number;
  isFeatured: boolean;
  isNew: boolean;
  isPublished: boolean;
  stockTotal: number;
  rating: number;
  reviewCount: number;
  tags: string[];
  colors: string[];
  sizes: string[];
}

// Name generation pools
const tshirtNames = {
  adjectives: ['Obsidian', 'Midnight', 'Ivory', 'Cobalt', 'Graphite', 'Stone', 'Ember', 'Frost', 'Shadow', 'Dusk'],
  materials: ['Cotton', 'Jersey', 'Pima', 'Supima', 'Organic', 'Combed'],
  silhouettes: ['Tee', 'Crew', 'V-Neck', 'Henley', 'Pocket Tee', 'Longline'],
  details: ['', 'II', 'Pro', 'Core', 'Studio', '']
};

const jacketNames = {
  adjectives: ['Midnight', 'Storm', 'Arctic', 'Ridge', 'Summit', 'Alpine', 'Coastal', 'Urban', 'Trail', 'Canyon'],
  materials: ['Nylon', 'Ripstop', 'Softshell', 'Hardshell', 'Canvas', 'Denim'],
  silhouettes: ['Track Jacket', 'Bomber', 'Windbreaker', 'Anorak', 'Parka', 'Blazer'],
  details: ['', 'Pro', 'Core', 'II', 'Studio', '']
};

const poloNames = {
  adjectives: ['Ivory', 'Pearl', 'Cream', 'Ecru', 'Sand', 'Bone', 'Chalk', 'Linen', 'Canvas', 'Parchment'],
  materials: ['Pique', 'Interlock', 'Mesh', 'Slub', 'Jersey', 'Terry'],
  silhouettes: ['Polo', 'Sport Polo', 'Classic Polo', 'Slim Polo', 'Relaxed Polo', 'Rugby Polo'],
  details: ['', 'II', 'Pro', 'Core', 'Studio', '']
};

const joggerNames = {
  adjectives: ['Graphite', 'Charcoal', 'Slate', 'Iron', 'Steel', 'Pewter', 'Cobalt', 'Indigo', 'Navy', 'Marine'],
  materials: ['French Terry', 'Brushed Fleece', 'Loopback', 'Terry', 'Fleece', 'Jersey'],
  silhouettes: ['Jogger', 'Tapered Pant', 'Slim Jogger', 'Relaxed Jogger', 'Cargo Jogger', 'Track Pant'],
  details: ['', 'II', 'Pro', 'Core', 'Studio', '']
};

const hoodieNames = {
  adjectives: ['Stone', 'Pebble', 'Boulder', 'Rock', 'Flint', 'Quartz', 'Granite', 'Basalt', 'Obsidian', 'Pumice'],
  materials: ['Brushed Fleece', 'Heavyweight Fleece', 'Reverse Weave', 'Loopback', 'Terry', 'Sherpa'],
  silhouettes: ['Hoodie', 'Pullover', 'Zip-Hoodie', 'Full-Zip', 'Half-Zip', 'Oversized Hoodie'],
  details: ['', 'II', 'Pro', 'Core', 'Studio', '']
};

const shortsNames = {
  adjectives: ['Sand', 'Dune', 'Desert', 'Sahara', 'Arctic', 'Tundra', 'Steppe', 'Prairie', 'Savanna', 'Veld'],
  materials: ['Nylon', 'Polyester', 'Cotton', 'Linen', 'Ripstop', 'Canvas'],
  silhouettes: ['Short', 'Bermuda', 'Cargo Short', 'Chino Short', 'Athletic Short', 'Training Short'],
  details: ['', 'II', 'Pro', 'Core', 'Studio', '']
};

const colorPalettes: Record<string, string[]> = {
  't-shirts': ['Black', 'White', 'Charcoal', 'Navy', 'Stone', 'Olive', 'Rust', 'Burgundy', 'Forest', 'Slate'],
  'jackets': ['Black', 'Navy', 'Olive', 'Charcoal', 'Stone', 'Burgundy', 'Forest', 'Rust', 'Tobacco', 'Slate'],
  'polos': ['White', 'Ivory', 'Cream', 'Navy', 'Black', 'Stone', 'Sand', 'Bone', 'Sky', 'Sage'],
  'joggers': ['Charcoal', 'Black', 'Navy', 'Stone', 'Olive', 'Graphite', 'Slate', 'Sand', 'Heather Grey', 'French Navy'],
  'hoodies': ['Stone', 'Black', 'Charcoal', 'Navy', 'Olive', 'Cream', 'Rust', 'Burgundy', 'Forest', 'Slate'],
  'shorts': ['Black', 'Navy', 'Stone', 'Olive', 'Sand', 'Khaki', 'Charcoal', 'White', 'Rust', 'Burgundy'],
};

function seededRandom(seed: number): () => number {
  let s = seed;
  return () => {
    s = (s * 1664525 + 1013904223) & 0xffffffff;
    return (s >>> 0) / 0xffffffff;
  };
}

function pick<T>(arr: T[], rand: () => number): T {
  return arr[Math.floor(rand() * arr.length)];
}

export function generateCatalogue(): Product[] {
  const allProducts: Product[] = [];
  const usedNames = new Set<string>();
  const categories = ['t-shirts', 'jackets', 'polos', 'joggers', 'hoodies', 'shorts'] as const;
  const prefixes: Record<string, string> = { 't-shirts': 'ts', 'jackets': 'jk', 'polos': 'pl', 'joggers': 'jg', 'hoodies': 'hd', 'shorts': 'sh' };
  const pools: Record<string, any> = { 't-shirts': tshirtNames, 'jackets': jacketNames, 'polos': poloNames, 'joggers': joggerNames, 'hoodies': hoodieNames, 'shorts': shortsNames };
  const priceRanges: Record<string, [number, number]> = { 't-shirts': [149900, 349900], 'jackets': [349900, 799900], 'polos': [199900, 399900], 'joggers': [249900, 499900], 'hoodies': [299900, 599900], 'shorts': [149900, 299900] };

  for (const category of categories) {
    const prefix = prefixes[category];
    const pool = pools[category];
    const colors = colorPalettes[category];
    const [minPrice, maxPrice] = priceRanges[category];

    for (let i = 1; i <= 150; i++) {
      const productId = `${prefix}-${String(i).padStart(3, '0')}`;
      const rand = seededRandom(i * 9973 + categories.indexOf(category) * 31);

      let name = '';
      let attempts = 0;
      while (attempts < 50) {
        const adj = pick(pool.adjectives, rand);
        const mat = pick(pool.materials, rand);
        const sil = pick(pool.silhouettes, rand);
        const det = pick(pool.details, rand);
        name = det ? `${adj} ${mat} ${sil} ${det}` : `${adj} ${mat} ${sil}`;
        if (!usedNames.has(name.toLowerCase())) {
          usedNames.add(name.toLowerCase());
          break;
        }
        attempts++;
      }

      const slug = `${name.toLowerCase().replace(/[^a-z0-9]+/g, '-')}-${prefix}${i}`;
      const color = colors[Math.floor(rand() * colors.length)];
      const price = minPrice + Math.floor(rand() * (maxPrice - minPrice));
      const sizes = ['XS', 'S', 'M', 'L', 'XL', 'XXL'];

      const product: Product = {
        id: productId,
        slug,
        name,
        description: `Premium ${category.replace('-', ' ')} crafted with attention to detail. ${name} features quality materials and considered construction for lasting wear.`,
        shortDescription: `${name} — Premium ${category.replace('-', ' ')}`,
        category,
        collection: rand() > 0.5 ? 'core-performance' : 'daily-luxury',
        gender: rand() > 0.7 ? 'unisex' : 'men',
        fabric: 'Premium quality fabric',
        careInstructions: ['Machine wash cold', 'Tumble dry low', 'Do not bleach'],
        fit: 'Regular fit',
        seoTitle: `${name} | ${category} | Kyveron`,
        seoDescription: `${name} — Premium ${category}`,
        images: [
          { id: `${productId}-img1`, url: '', alt: `${name}, front view`, order: 1, type: 'front' },
          { id: `${productId}-img2`, url: '', alt: `${name}, detail view`, order: 2, type: 'detail' }
        ],
        variants: sizes.map(s => ({
          id: `${productId}-${color.toLowerCase()}-${s.toLowerCase()}`,
          sku: `${prefix.toUpperCase()}-${String(i).padStart(3, '0')}-${s}`,
          size: s,
          color,
          price,
          stock: 10 + Math.floor(rand() * 20),
          isAvailable: rand() > 0.1
        })),
        basePrice: price,
        compareAtPrice: rand() > 0.7 ? price + Math.floor(price * 0.2) : undefined,
        isFeatured: rand() > 0.88,
        isNew: rand() > 0.82,
        isPublished: true,
        stockTotal: 50 + Math.floor(rand() * 100),
        rating: +(3.5 + rand() * 1.5).toFixed(1),
        reviewCount: Math.floor(rand() * 200),
        tags: ['bestseller', 'premium'],
        colors: [color],
        sizes
      };

      allProducts.push(product);
    }
  }

  return allProducts;
}

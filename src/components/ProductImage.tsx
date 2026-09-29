import { getProductImage } from '../lib/imageLibrary';

interface ProductImageProps {
  product: {
    id: string;
    category: string;
    colors: string[];
    name: string;
  };
  className?: string;
  variant?: 'profile' | 'detail';
  size?: 'sm' | 'md' | 'lg';
}

export function ProductImage({ product, className = '', variant = 'profile', size = 'md' }: ProductImageProps) {
  const image = getProductImage(product, variant);
  
  const sizeClasses = {
    sm: 'w-12 h-14',
    md: 'w-20 h-24',
    lg: 'w-full h-full',
  };

  return (
    <div className={`relative overflow-hidden bg-[#e8e4dc] ${sizeClasses[size]} ${className}`}>
      <img
        src={image.url}
        alt={image.alt}
        className="w-full h-full object-cover"
        loading="lazy"
      />
      {/* Color indicator dot */}
      <div className="absolute bottom-2 right-2 w-3 h-3 rounded-full border border-white/80 shadow-sm" 
           style={{ backgroundColor: getColorHex(product.colors[0]) }}
           title={product.colors[0]} />
    </div>
  );
}

function getColorHex(color: string): string {
  const colorMap: Record<string, string> = {
    'Black': '#1a1a1a', 'White': '#f5f5f0', 'Charcoal': '#36454F', 'Navy': '#1B2A4A',
    'Stone': '#AAA394', 'Olive': '#556B2F', 'Rust': '#B7410E', 'Burgundy': '#800020',
    'Forest': '#228B22', 'Slate': '#708090', 'Sand': '#C2B280', 'Clay': '#B66A50',
    'Moss': '#8A9A5B', 'Pepper': '#51484F', 'Ash': '#B2BEB5', 'Bone': '#E3DAC9',
    'Ivory': '#FFFFF0', 'Graphite': '#383838', 'Cobalt': '#0047AB', 'Sage': '#BCB88A',
    'Cocoa': '#D2691E', 'Tobacco': '#7B5B3A', 'Slate Blue': '#6A7B8B', 'Dusty Rose': '#DCAE96',
    'Mauve': '#E0B0FF', 'Teal': '#008080', 'Pine': '#01796F', 'Ember': '#E25822',
    'Fog': '#C8C8C8', 'Pumice': '#B0B0A0', 'Cream': '#FFFDD0', 'Ecru': '#C2B280',
    'Sky': '#87CEEB', 'Blush': '#DE5D83', 'Lilac': '#C8A2C8', 'Mint': '#98FB98',
    'Peach': '#FFE5B4', 'Coral': '#FF7F50', 'Lavender': '#E6E6FA', 'Powder': '#B0E0E6',
    'Pearl': '#F0EAD6', 'Fawn': '#E5AA70', 'Tawny': '#CD5700', 'Amber': '#FFBF00',
    'Honey': '#EB9605', 'Wheat': '#F5DEB3', 'Oat': '#D4BE8D', 'Barley': '#F8F3D6',
    'Flax': '#EEDC82', 'Parchment': '#F0EAD6', 'Khaki': '#C3B091', 'Heather Grey': '#B6B6B4',
    'French Navy': '#001146', 'Dark Olive': '#3F4A2F', 'Cognac': '#9A463E', 'Brown': '#6B4423',
    'Tan': '#D2B48C', 'One Size': '#AAA394', 'Cobalt Blue': '#0047AB',
  };
  return colorMap[color] || '#36454F';
}

export default ProductImage;

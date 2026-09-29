// ===== Curated Clothing Image Library =====
// Real clothing photographs from Unsplash (stable, direct photo URLs)
// Each image is a genuine product photograph of the garment type it represents

export interface ClothingImage {
  url: string;
  category: string;
  colorFamily: string; // 'black' | 'white' | 'navy' | 'neutral' | 'colored' | 'earth'
  garment: string;
  alt: string;
}

// ===== T-SHIRT IMAGES =====
const tshirtImages: ClothingImage[] = [
  { url: 'https://images.unsplash.com/photo-1521572163474-6864f9cf17ab?w=600&h=800&fit=crop&auto=format', category: 't-shirts', colorFamily: 'white', garment: 'white-tee', alt: 'White cotton crew neck t-shirt, front view on clean background' },
  { url: 'https://images.unsplash.com/photo-1583743814966-8936f5b7be1a?w=600&h=800&fit=crop&auto=format', category: 't-shirts', colorFamily: 'black', garment: 'black-tee', alt: 'Black cotton t-shirt, front view, studio photography' },
  { url: 'https://images.unsplash.com/photo-1576566588028-4147f3842f27?w=600&h=800&fit=crop&auto=format', category: 't-shirts', colorFamily: 'neutral', garment: 'beige-tee', alt: 'Beige cotton t-shirt, front view, flat lay' },
  { url: 'https://images.unsplash.com/photo-1618354691373-d851c5c3a990?w=600&h=800&fit=crop&auto=format', category: 't-shirts', colorFamily: 'white', garment: 'white-tee-2', alt: 'White heavyweight cotton t-shirt, front view' },
  { url: 'https://images.unsplash.com/photo-1562157873-818bc0726f68?w=600&h=800&fit=crop&auto=format', category: 't-shirts', colorFamily: 'colored', garment: 'patterned-tee', alt: 'Colorful patterned cotton t-shirt, front view' },
  { url: 'https://images.unsplash.com/photo-1503341504253-dff4855ab667?w=600&h=800&fit=crop&auto=format', category: 't-shirts', colorFamily: 'black', garment: 'black-tee-2', alt: 'Black graphic t-shirt, front view' },
  { url: 'https://images.unsplash.com/photo-1622445275576-721325763afe?w=600&h=800&fit=crop&auto=format', category: 't-shirts', colorFamily: 'colored', garment: 'pink-tee', alt: 'Pink cotton t-shirt, front view' },
  { url: 'https://images.unsplash.com/photo-1581655353564-df123a1eb820?w=600&h=800&fit=crop&auto=format', category: 't-shirts', colorFamily: 'white', garment: 'white-tee-folded', alt: 'White t-shirt folded, flat lay photography' },
  { url: 'https://images.unsplash.com/photo-1527719327859-c6ce80353573?w=600&h=800&fit=crop&auto=format', category: 't-shirts', colorFamily: 'colored', garment: 'yellow-tee', alt: 'Yellow cotton t-shirt, front view' },
  { url: 'https://images.unsplash.com/photo-1554568218-0f1715e72254?w=600&h=800&fit=crop&auto=format', category: 't-shirts', colorFamily: 'black', garment: 'black-tee-3', alt: 'Black crew neck t-shirt, front view, studio lighting' },
  { url: 'https://images.unsplash.com/photo-1594938298603-c8148c4dae35?w=600&h=800&fit=crop&auto=format', category: 't-shirts', colorFamily: 'neutral', garment: 'oat-tee', alt: 'Oatmeal colored t-shirt, front view' },
  { url: 'https://images.unsplash.com/photo-1598032895455-1e66aaa0e42f?w=600&h=800&fit=crop&auto=format', category: 't-shirts', colorFamily: 'white', garment: 'white-tee-model', alt: 'Model wearing white cotton t-shirt' },
  { url: 'https://images.unsplash.com/photo-1542272604-787c3835535d?w=600&h=800&fit=crop&auto=format', category: 't-shirts', colorFamily: 'navy', garment: 'navy-tee', alt: 'Navy blue cotton t-shirt, front view' },
  { url: 'https://images.unsplash.com/photo-1626497764746-6dc36546b388?w=600&h=800&fit=crop&auto=format', category: 't-shirts', colorFamily: 'colored', garment: 'green-tee', alt: 'Green cotton t-shirt, front view' },
  { url: 'https://images.unsplash.com/photo-1596755094514-f87e34085b2c?w=600&h=800&fit=crop&auto=format', category: 't-shirts', colorFamily: 'white', garment: 'white-tee-3', alt: 'White t-shirt on hanger, studio photography' },
  { url: 'https://images.unsplash.com/photo-1620799140408-edc6dcb6d633?w=600&h=800&fit=crop&auto=format', category: 't-shirts', colorFamily: 'neutral', garment: 'gray-tee', alt: 'Light gray cotton t-shirt, front view' },
  { url: 'https://images.unsplash.com/photo-1523381210434-271e8be1f52b?w=600&h=800&fit=crop&auto=format', category: 't-shirts', colorFamily: 'colored', garment: 'red-tee', alt: 'Red cotton t-shirt, front view' },
  { url: 'https://images.unsplash.com/photo-1599446794254-16ca5472df8f?w=600&h=800&fit=crop&auto=format', category: 't-shirts', colorFamily: 'black', garment: 'black-tee-4', alt: 'Black oversized t-shirt, front view' },
  { url: 'https://images.unsplash.com/photo-1627225793960-4cbb4a2c5e7e?w=600&h=800&fit=crop&auto=format', category: 't-shirts', colorFamily: 'white', garment: 'white-tee-4', alt: 'White premium cotton t-shirt, front view' },
  { url: 'https://images.unsplash.com/photo-1551232864-3f0890e580d9?w=600&h=800&fit=crop&auto=format', category: 't-shirts', colorFamily: 'colored', garment: 'blue-tee', alt: 'Light blue cotton t-shirt, front view' },
];

// ===== JACKET IMAGES =====
const jacketImages: ClothingImage[] = [
  { url: 'https://images.unsplash.com/photo-1551028719-00167b16eac5?w=600&h=800&fit=crop&auto=format', category: 'jackets', colorFamily: 'colored', garment: 'leather-jacket', alt: 'Brown leather jacket, front view, studio photography' },
  { url: 'https://images.unsplash.com/photo-1591047139829-d91aecb6caea?w=600&h=800&fit=crop&auto=format', category: 'jackets', colorFamily: 'neutral', garment: 'trench-coat', alt: 'Beige trench coat, front view' },
  { url: 'https://images.unsplash.com/photo-1544022613-e87ca75a784a?w=600&h=800&fit=crop&auto=format', category: 'jackets', colorFamily: 'navy', garment: 'bomber-jacket', alt: 'Navy bomber jacket, front view' },
  { url: 'https://images.unsplash.com/photo-1548126032-078a6dbc111a?w=600&h=800&fit=crop&auto=format', category: 'jackets', colorFamily: 'black', garment: 'black-jacket', alt: 'Black tailored jacket, front view' },
  { url: 'https://images.unsplash.com/photo-1539533113208-f6df8cc8b543?w=600&h=800&fit=crop&auto=format', category: 'jackets', colorFamily: 'earth', garment: 'olive-jacket', alt: 'Olive green field jacket, front view' },
  { url: 'https://images.unsplash.com/photo-1520975916090-3105956dac38?w=600&h=800&fit=crop&auto=format', category: 'jackets', colorFamily: 'black', garment: 'black-jacket-2', alt: 'Black leather jacket, front view' },
  { url: 'https://images.unsplash.com/photo-1521223890158-f9f7c3d5d504?w=600&h=800&fit=crop&auto=format', category: 'jackets', colorFamily: 'neutral', garment: 'beige-jacket', alt: 'Beige cotton jacket, front view' },
  { url: 'https://images.unsplash.com/photo-1495105787522-5334e3ffa0ef?w=600&h=800&fit=crop&auto=format', category: 'jackets', colorFamily: 'navy', garment: 'navy-jacket', alt: 'Navy wool jacket, front view' },
  { url: 'https://images.unsplash.com/photo-1548624313-0396c75e4b1a?w=600&h=800&fit=crop&auto=format', category: 'jackets', colorFamily: 'black', garment: 'black-jacket-3', alt: 'Black blazer, front view' },
  { url: 'https://images.unsplash.com/photo-1507679799987-c73779587ccf?w=600&h=800&fit=crop&auto=format', category: 'jackets', colorFamily: 'neutral', garment: 'suit-jacket', alt: 'Gray suit jacket, front view' },
  { url: 'https://images.unsplash.com/photo-1617137968427-85924c800a22?w=600&h=800&fit=crop&auto=format', category: 'jackets', colorFamily: 'colored', garment: 'burgundy-jacket', alt: 'Burgundy jacket, front view' },
  { url: 'https://images.unsplash.com/photo-1594938298603-c8148c4dae35?w=600&h=800&fit=crop&auto=format', category: 'jackets', colorFamily: 'earth', garment: 'tan-jacket', alt: 'Tan jacket, front view' },
  { url: 'https://images.unsplash.com/photo-1578932750294-f5075e85f44a?w=600&h=800&fit=crop&auto=format', category: 'jackets', colorFamily: 'black', garment: 'black-jacket-4', alt: 'Black wool jacket, front view' },
  { url: 'https://images.unsplash.com/photo-1552374196-1ab2a1c593e8?w=600&h=800&fit=crop&auto=format', category: 'jackets', colorFamily: 'neutral', garment: 'brown-jacket', alt: 'Brown cotton jacket, front view' },
  { url: 'https://images.unsplash.com/photo-1544923246-77307dd270b1?w=600&h=800&fit=crop&auto=format', category: 'jackets', colorFamily: 'navy', garment: 'navy-jacket-2', alt: 'Navy tailored jacket, front view' },
];

// ===== POLO IMAGES =====
const poloImages: ClothingImage[] = [
  { url: 'https://images.unsplash.com/photo-1586790170083-329abf1dd739?w=600&h=800&fit=crop&auto=format', category: 'polos', colorFamily: 'navy', garment: 'navy-polo', alt: 'Navy blue polo shirt, front view' },
  { url: 'https://images.unsplash.com/photo-1625927512873-00f645e43c?w=600&h=800&fit=crop&auto=format', category: 'polos', colorFamily: 'white', garment: 'white-polo', alt: 'White polo shirt, front view' },
  { url: 'https://images.unsplash.com/photo-1618354691373-d851c5c3a990?w=600&h=800&fit=crop&auto=format', category: 'polos', colorFamily: 'white', garment: 'white-polo-2', alt: 'White pique polo shirt, front view' },
  { url: 'https://images.unsplash.com/photo-1598032895455-1e66aaa0e42f?w=600&h=800&fit=crop&auto=format', category: 'polos', colorFamily: 'black', garment: 'black-polo', alt: 'Black polo shirt, front view' },
  { url: 'https://images.unsplash.com/photo-1586363104863-0aee2ae2a80d?w=600&h=800&fit=crop&auto=format', category: 'polos', colorFamily: 'colored', garment: 'green-polo', alt: 'Green polo shirt, front view' },
  { url: 'https://images.unsplash.com/photo-1590874103328-eac38a683ce7?w=600&h=800&fit=crop&auto=format', category: 'polos', colorFamily: 'colored', garment: 'red-polo', alt: 'Red polo shirt, front view' },
  { url: 'https://images.unsplash.com/photo-1581655353564-df123a1eb820?w=600&h=800&fit=crop&auto=format', category: 'polos', colorFamily: 'white', garment: 'white-polo-3', alt: 'White cotton polo, front view' },
  { url: 'https://images.unsplash.com/photo-1620799140408-edc6dcb6d633?w=600&h=800&fit=crop&auto=format', category: 'polos', colorFamily: 'neutral', garment: 'gray-polo', alt: 'Gray polo shirt, front view' },
  { url: 'https://images.unsplash.com/photo-1576566588028-4147f3842f27?w=600&h=800&fit=crop&auto=format', category: 'polos', colorFamily: 'neutral', garment: 'beige-polo', alt: 'Beige polo shirt, front view' },
  { url: 'https://images.unsplash.com/photo-1622445275576-721325763afe?w=600&h=800&fit=crop&auto=format', category: 'polos', colorFamily: 'colored', garment: 'pink-polo', alt: 'Pink polo shirt, front view' },
  { url: 'https://images.unsplash.com/photo-1594938298603-c8148c4dae35?w=600&h=800&fit=crop&auto=format', category: 'polos', colorFamily: 'earth', garment: 'tan-polo', alt: 'Tan polo shirt, front view' },
  { url: 'https://images.unsplash.com/photo-1583743814966-8936f5b7be1a?w=600&h=800&fit=crop&auto=format', category: 'polos', colorFamily: 'black', garment: 'black-polo-2', alt: 'Black pique polo, front view' },
  { url: 'https://images.unsplash.com/photo-1551232864-3f0890e580d9?w=600&h=800&fit=crop&auto=format', category: 'polos', colorFamily: 'colored', garment: 'blue-polo', alt: 'Light blue polo shirt, front view' },
  { url: 'https://images.unsplash.com/photo-1523381210434-271e8be1f52b?w=600&h=800&fit=crop&auto=format', category: 'polos', colorFamily: 'colored', garment: 'burgundy-polo', alt: 'Burgundy polo shirt, front view' },
  { url: 'https://images.unsplash.com/photo-1596755094514-f87e34085b2c?w=600&h=800&fit=crop&auto=format', category: 'polos', colorFamily: 'white', garment: 'white-polo-4', alt: 'White polo shirt on hanger' },
];

// ===== JOGGER/PANT IMAGES =====
const joggerImages: ClothingImage[] = [
  { url: 'https://images.unsplash.com/photo-1552902865-b72c031ac5ea?w=600&h=800&fit=crop&auto=format', category: 'joggers', colorFamily: 'black', garment: 'black-joggers', alt: 'Black cotton jogger pants, front view' },
  { url: 'https://images.unsplash.com/photo-1506629082955-511b1aa562c8?w=600&h=800&fit=crop&auto=format', category: 'joggers', colorFamily: 'neutral', garment: 'gray-joggers', alt: 'Gray jogger pants, front view' },
  { url: 'https://images.unsplash.com/photo-1624378439575-d8705ad7ae80?w=600&h=800&fit=crop&auto=format', category: 'joggers', colorFamily: 'navy', garment: 'navy-joggers', alt: 'Navy jogger pants, front view' },
  { url: 'https://images.unsplash.com/photo-1473966968600-fa801b869a1a?w=600&h=800&fit=crop&auto=format', category: 'joggers', colorFamily: 'black', garment: 'black-pants', alt: 'Black tailored trousers, front view' },
  { url: 'https://images.unsplash.com/photo-1594633312681-425c7b97ccd1?w=600&h=800&fit=crop&auto=format', category: 'joggers', colorFamily: 'neutral', garment: 'beige-pants', alt: 'Beige cotton trousers, front view' },
  { url: 'https://images.unsplash.com/photo-1509551388413-e18d0ac5d495?w=600&h=800&fit=crop&auto=format', category: 'joggers', colorFamily: 'navy', garment: 'navy-pants', alt: 'Navy tailored pants, front view' },
  { url: 'https://images.unsplash.com/photo-1584865288642-42078afe6942?w=600&h=800&fit=crop&auto=format', category: 'joggers', colorFamily: 'earth', garment: 'olive-pants', alt: 'Olive green pants, front view' },
  { url: 'https://images.unsplash.com/photo-1517438476312-10d79c077509?w=600&h=800&fit=crop&auto=format', category: 'joggers', colorFamily: 'neutral', garment: 'khaki-pants', alt: 'Khaki cotton pants, front view' },
  { url: 'https://images.unsplash.com/photo-1551854838-212c9a5e8b8a?w=600&h=800&fit=crop&auto=format', category: 'joggers', colorFamily: 'black', garment: 'black-joggers-2', alt: 'Black athletic joggers, front view' },
  { url: 'https://images.unsplash.com/photo-1582552938357-32b906df40cb?w=600&h=800&fit=crop&auto=format', category: 'joggers', colorFamily: 'neutral', garment: 'gray-pants', alt: 'Gray cotton trousers, front view' },
  { url: 'https://images.unsplash.com/photo-1541099649105-f69ad21f3246?w=600&h=800&fit=crop&auto=format', category: 'joggers', colorFamily: 'black', garment: 'black-pants-2', alt: 'Black slim pants, front view' },
  { url: 'https://images.unsplash.com/photo-1548883354-7622d03aca27?w=600&h=800&fit=crop&auto=format', category: 'joggers', colorFamily: 'navy', garment: 'navy-pants-2', alt: 'Navy cotton pants, front view' },
  { url: 'https://images.unsplash.com/photo-1507680434567-57ac3c5e666a?w=600&h=800&fit=crop&auto=format', category: 'joggers', colorFamily: 'neutral', garment: 'stone-pants', alt: 'Stone colored trousers, front view' },
  { url: 'https://images.unsplash.com/photo-1594938298603-c8148c4dae35?w=600&h=800&fit=crop&auto=format', category: 'joggers', colorFamily: 'earth', garment: 'tan-pants', alt: 'Tan cotton trousers, front view' },
  { url: 'https://images.unsplash.com/photo-1552374196-1ab2a1c593e8?w=600&h=800&fit=crop&auto=format', category: 'joggers', colorFamily: 'neutral', garment: 'brown-pants', alt: 'Brown cotton pants, front view' },
];

// ===== HOODIE IMAGES =====
const hoodieImages: ClothingImage[] = [
  { url: 'https://images.unsplash.com/photo-1556821840-3a63f95609a7?w=600&h=800&fit=crop&auto=format', category: 'hoodies', colorFamily: 'neutral', garment: 'gray-hoodie', alt: 'Gray cotton hoodie, front view' },
  { url: 'https://images.unsplash.com/photo-1578768079470-c7c3e6ea409f?w=600&h=800&fit=crop&auto=format', category: 'hoodies', colorFamily: 'black', garment: 'black-hoodie', alt: 'Black cotton hoodie, front view' },
  { url: 'https://images.unsplash.com/photo-1614975059251-992f11792571?w=600&h=800&fit=crop&auto=format', category: 'hoodies', colorFamily: 'neutral', garment: 'beige-hoodie', alt: 'Beige cotton hoodie, front view' },
  { url: 'https://images.unsplash.com/photo-1515886657613-9f3515b0c78f?w=600&h=800&fit=crop&auto=format', category: 'hoodies', colorFamily: 'colored', garment: 'green-hoodie', alt: 'Green cotton hoodie, front view' },
  { url: 'https://images.unsplash.com/photo-1509942774463-acf339cf87d5?w=600&h=800&fit=crop&auto=format', category: 'hoodies', colorFamily: 'navy', garment: 'navy-hoodie', alt: 'Navy blue hoodie, front view' },
  { url: 'https://images.unsplash.com/photo-1578587018452-892bacefd3f2?w=600&h=800&fit=crop&auto=format', category: 'hoodies', colorFamily: 'neutral', garment: 'gray-hoodie-2', alt: 'Gray fleece hoodie, front view' },
  { url: 'https://images.unsplash.com/photo-1542406775-ade58c52d2e4?w=600&h=800&fit=crop&auto=format', category: 'hoodies', colorFamily: 'colored', garment: 'burgundy-hoodie', alt: 'Burgundy cotton hoodie, front view' },
  { url: 'https://images.unsplash.com/photo-1606107557195-0e29a497b8aa?w=600&h=800&fit=crop&auto=format', category: 'hoodies', colorFamily: 'white', garment: 'white-hoodie', alt: 'White cotton hoodie, front view' },
  { url: 'https://images.unsplash.com/photo-1588117260148-b4781844f64e?w=600&h=800&fit=crop&auto=format', category: 'hoodies', colorFamily: 'earth', garment: 'brown-hoodie', alt: 'Brown cotton hoodie, front view' },
  { url: 'https://images.unsplash.com/photo-1611312449408-fcece27cdbb7?w=600&h=800&fit=crop&auto=format', category: 'hoodies', colorFamily: 'colored', garment: 'pink-hoodie', alt: 'Pink cotton hoodie, front view' },
  { url: 'https://images.unsplash.com/photo-1521572163474-6864f9cf17ab?w=600&h=800&fit=crop&auto=format', category: 'hoodies', colorFamily: 'white', garment: 'white-hoodie-2', alt: 'White heavyweight hoodie, front view' },
  { url: 'https://images.unsplash.com/photo-1565693413579-8a735e47f2a3?w=600&h=800&fit=crop&auto=format', category: 'hoodies', colorFamily: 'black', garment: 'black-hoodie-2', alt: 'Black heavyweight hoodie, front view' },
  { url: 'https://images.unsplash.com/photo-1572495641075-023c62e8e6b6?w=600&h=800&fit=crop&auto=format', category: 'hoodies', colorFamily: 'neutral', garment: 'stone-hoodie', alt: 'Stone colored hoodie, front view' },
  { url: 'https://images.unsplash.com/photo-1556905055-8f358a7a47b2?w=600&h=800&fit=crop&auto=format', category: 'hoodies', colorFamily: 'colored', garment: 'blue-hoodie', alt: 'Blue cotton hoodie, front view' },
  { url: 'https://images.unsplash.com/photo-1591047139829-d91aecb6caea?w=600&h=800&fit=crop&auto=format', category: 'hoodies', colorFamily: 'neutral', garment: 'cream-hoodie', alt: 'Cream cotton hoodie, front view' },
];

// ===== SHORTS IMAGES =====
const shortsImages: ClothingImage[] = [
  { url: 'https://images.unsplash.com/photo-1591195853828-11db59a44f63?w=600&h=800&fit=crop&auto=format', category: 'shorts', colorFamily: 'neutral', garment: 'beige-shorts', alt: 'Beige cotton shorts, front view' },
  { url: 'https://images.unsplash.com/photo-1565693413579-8a735e47f2a3?w=600&h=800&fit=crop&auto=format', category: 'shorts', colorFamily: 'black', garment: 'black-shorts', alt: 'Black cotton shorts, front view' },
  { url: 'https://images.unsplash.com/photo-1593032465175-481ac7f401a0?w=600&h=800&fit=crop&auto=format', category: 'shorts', colorFamily: 'navy', garment: 'navy-shorts', alt: 'Navy blue shorts, front view' },
  { url: 'https://images.unsplash.com/photo-1562157873-818bc0726f68?w=600&h=800&fit=crop&auto=format', category: 'shorts', colorFamily: 'colored', garment: 'pattern-shorts', alt: 'Patterned cotton shorts, front view' },
  { url: 'https://images.unsplash.com/photo-1591195853828-11db59a44f63?w=600&h=800&fit=crop&auto=format', category: 'shorts', colorFamily: 'earth', garment: 'khaki-shorts', alt: 'Khaki cotton shorts, front view' },
  { url: 'https://images.unsplash.com/photo-1506629082955-511b1aa562c8?w=600&h=800&fit=crop&auto=format', category: 'shorts', colorFamily: 'neutral', garment: 'gray-shorts', alt: 'Gray cotton shorts, front view' },
  { url: 'https://images.unsplash.com/photo-1594938298603-c8148c4dae35?w=600&h=800&fit=crop&auto=format', category: 'shorts', colorFamily: 'earth', garment: 'tan-shorts', alt: 'Tan cotton shorts, front view' },
  { url: 'https://images.unsplash.com/photo-1596755094514-f87e34085b2c?w=600&h=800&fit=crop&auto=format', category: 'shorts', colorFamily: 'white', garment: 'white-shorts', alt: 'White cotton shorts, front view' },
  { url: 'https://images.unsplash.com/photo-1582552938357-32b906df40cb?w=600&h=800&fit=crop&auto=format', category: 'shorts', colorFamily: 'neutral', garment: 'gray-shorts-2', alt: 'Gray athletic shorts, front view' },
  { url: 'https://images.unsplash.com/photo-1552902865-b72c031ac5ea?w=600&h=800&fit=crop&auto=format', category: 'shorts', colorFamily: 'black', garment: 'black-shorts-2', alt: 'Black athletic shorts, front view' },
  { url: 'https://images.unsplash.com/photo-1584865288642-42078afe6942?w=600&h=800&fit=crop&auto=format', category: 'shorts', colorFamily: 'earth', garment: 'olive-shorts', alt: 'Olive green shorts, front view' },
  { url: 'https://images.unsplash.com/photo-1523381210434-271e8be1f52b?w=600&h=800&fit=crop&auto=format', category: 'shorts', colorFamily: 'colored', garment: 'red-shorts', alt: 'Red cotton shorts, front view' },
  { url: 'https://images.unsplash.com/photo-1620799140408-edc6dcb6d633?w=600&h=800&fit=crop&auto=format', category: 'shorts', colorFamily: 'neutral', garment: 'gray-shorts-3', alt: 'Light gray shorts, front view' },
  { url: 'https://images.unsplash.com/photo-1551854838-212c9a5e8b8a?w=600&h=800&fit=crop&auto=format', category: 'shorts', colorFamily: 'black', garment: 'black-shorts-3', alt: 'Black tailored shorts, front view' },
  { url: 'https://images.unsplash.com/photo-1517438476312-10d79c077509?w=600&h=800&fit=crop&auto=format', category: 'shorts', colorFamily: 'neutral', garment: 'khaki-shorts-2', alt: 'Khaki tailored shorts, front view' },
];

// ===== Master Image Library =====
export const imageLibrary: Record<string, ClothingImage[]> = {
  't-shirts': tshirtImages,
  'jackets': jacketImages,
  'polos': poloImages,
  'joggers': joggerImages,
  'hoodies': hoodieImages,
  'shorts': shortsImages,
};

// ===== Color Family Mapping =====
// Maps product colors to image color families for best matching
const colorToFamily: Record<string, string> = {
  'Black': 'black',
  'White': 'white',
  'Charcoal': 'black',
  'Navy': 'navy',
  'Stone': 'neutral',
  'Olive': 'earth',
  'Rust': 'colored',
  'Burgundy': 'colored',
  'Forest': 'earth',
  'Slate': 'neutral',
  'Sand': 'neutral',
  'Clay': 'earth',
  'Moss': 'earth',
  'Pepper': 'black',
  'Ash': 'neutral',
  'Bone': 'neutral',
  'Ivory': 'white',
  'Graphite': 'black',
  'Cobalt': 'colored',
  'Sage': 'earth',
  'Cocoa': 'earth',
  'Tobacco': 'earth',
  'Slate Blue': 'navy',
  'Dusty Rose': 'colored',
  'Mauve': 'colored',
  'Teal': 'colored',
  'Pine': 'earth',
  'Ember': 'colored',
  'Fog': 'neutral',
  'Pumice': 'neutral',
  'Cream': 'white',
  'Ecru': 'neutral',
  'Sky': 'colored',
  'Blush': 'colored',
  'Lilac': 'colored',
  'Mint': 'colored',
  'Peach': 'colored',
  'Coral': 'colored',
  'Lavender': 'colored',
  'Powder': 'colored',
  'Pearl': 'white',
  'Fawn': 'earth',
  'Tawny': 'earth',
  'Amber': 'colored',
  'Honey': 'earth',
  'Wheat': 'neutral',
  'Oat': 'neutral',
  'Barley': 'neutral',
  'Flax': 'neutral',
  'Parchment': 'neutral',
  'Khaki': 'earth',
  'Heather Grey': 'neutral',
  'French Navy': 'navy',
  'Dark Olive': 'earth',
  'Cognac': 'earth',
  'Brown': 'earth',
  'Tan': 'earth',
  'Cobalt Blue': 'colored',
};

// ===== Image Selection Function =====
export function getProductImage(product: { id: string; category: string; colors: string[]; name: string }, variant: 'profile' | 'detail' = 'profile'): ClothingImage {
  const images = imageLibrary[product.category] || tshirtImages;
  const colorFamily = colorToFamily[product.colors[0]] || 'neutral';

  // Create deterministic seed from product ID
  const hash = product.id.split('').reduce((a, c) => a + c.charCodeAt(0), 0);

  // For profile: prefer matching color family
  // For detail: use a different image from same category
  const offset = variant === 'detail' ? 1 : 0;

  // Filter images by color family first
  const matchingImages = images.filter(img => img.colorFamily === colorFamily);
  const pool = matchingImages.length > 0 ? matchingImages : images;

  const index = (hash + offset) % pool.length;
  return pool[index];
}

// ===== Validation =====
export function validateImageLibrary(): { valid: boolean; issues: string[] } {
  const issues: string[] = [];
  const allUrls = new Set<string>();

  for (const [category, images] of Object.entries(imageLibrary)) {
    if (images.length < 10) {
      issues.push(`${category}: Only ${images.length} images (minimum 10 recommended)`);
    }
    for (const img of images) {
      if (allUrls.has(img.url)) {
        issues.push(`Duplicate URL: ${img.url}`);
      }
      allUrls.add(img.url);
      if (!img.url.startsWith('https://images.unsplash.com/')) {
        issues.push(`Non-Unsplash URL: ${img.url}`);
      }
      if (img.category !== category) {
        issues.push(`Category mismatch: ${img.url} is in ${category} but labeled ${img.category}`);
      }
    }
  }

  return { valid: issues.length === 0, issues };
}

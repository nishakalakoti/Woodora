export type Product = {
  id: string;
  category: string;
  name: string;
  price: string;
  oldPrice: string;
  discount: string;
  location: string;
  rating: string;
  reviews: string;
  stock: number;
  image: string;
  description: string;
  material: string;
  color: string;
  dimensions: string;
  warranty: string;
  seller: string;
};

export const products: Product[] = [
  // ---------------- POPULAR FURNITURE ----------------

  {
    id: "popular-bed-kafni",
    category: "beds",
    name: "Kafni Low Bed",
    price: "₹54,200",
    oldPrice: "₹66,000",
    discount: "18% OFF",
    location: "Bageshwar Hub",
    rating: "4.9",
    reviews: "34",
    stock: 8,
    image:
      "https://images.unsplash.com/photo-1505693416388-ac5ce068fe85?auto=format&fit=crop&w=1200&q=80",
    description:
      "A beautifully crafted wooden bed designed for modern homes. Made with strong materials and a comfortable finish for everyday use.",
    material: "Premium Solid Wood",
    color: "Natural Wood",
    dimensions: "78 × 60 × 36 inches",
    warranty: "1 Year",
    seller: "Bageshwar Furniture House",
  },

  {
    id: "popular-table-saryu",
    category: "tables",
    name: "Saryu Refectory Table",
    price: "₹42,800",
    oldPrice: "₹48,900",
    discount: "12% OFF",
    location: "Bageshwar",
    rating: "4.8",
    reviews: "21",
    stock: 7,
    image:
      "https://images.unsplash.com/photo-1595435365588-ca1839c60b14?auto=format&fit=crop&w=1200&q=80",
    description:
      "A premium dining table with a natural wooden finish. Spacious enough for family meals and gatherings.",
    material: "Solid Oak Wood",
    color: "Natural Brown",
    dimensions: "72 × 36 × 30 inches",
    warranty: "1 Year",
    seller: "Saryu Furniture Works",
  },

  {
    id: "popular-mandir-bagnath",
    category: "mandir",
    name: "Bagnath Sanctum",
    price: "₹28,500",
    oldPrice: "₹32,000",
    discount: "NEW CRAFT",
    location: "Local Guild",
    rating: "5.0",
    reviews: "12",
    stock: 4,
    image:
      "https://images.unsplash.com/photo-1631556373338-52e31188effc?auto=format&fit=crop&w=1200&q=80",
    description:
      "A beautifully designed home temple with traditional inspiration and a premium wooden finish.",
    material: "Solid Wood",
    color: "Natural Brown",
    dimensions: "30 × 18 × 48 inches",
    warranty: "1 Year",
    seller: "Local Guild Furniture",
  },

  {
    id: "popular-chair-trishul",
    category: "chairs",
    name: "Trishul Lounge Chair",
    price: "₹16,900",
    oldPrice: "₹19,800",
    discount: "15% OFF",
    location: "Kanda Depot",
    rating: "4.7",
    reviews: "19",
    stock: 6,
    image:
      "https://images.unsplash.com/photo-1761914572005-153d4f018290?auto=format&fit=crop&w=1200&q=80",
    description:
      "A stylish lounge chair designed for comfortable seating and modern interiors.",
    material: "Wood + Premium Fabric",
    color: "Brown",
    dimensions: "30 × 30 × 34 inches",
    warranty: "1 Year",
    seller: "Kanda Furniture Depot",
  },

  // ---------------- CATEGORY PRODUCTS ----------------

  {
    id: "category-bed-premium",
    category: "beds",
    name: "Premium Wooden Bed",
    price: "₹48,500",
    oldPrice: "₹57,000",
    discount: "15% OFF",
    location: "Bageshwar",
    rating: "4.8",
    reviews: "26",
    stock: 5,
    image:
      "https://images.unsplash.com/photo-1505693416388-ac5ce068fe85?auto=format&fit=crop&w=1200&q=80",
    description:
      "Elegant wooden bed with a clean modern design. Perfect for bedrooms that need a premium and comfortable look.",
    material: "Solid Wood",
    color: "Walnut",
    dimensions: "78 × 60 × 36 inches",
    warranty: "1 Year",
    seller: "Bageshwar Furniture House",
  },

  {
    id: "category-sofa-modern",
    category: "sofas",
    name: "Modern Comfort Sofa",
    price: "₹32,500",
    oldPrice: "₹39,000",
    discount: "16% OFF",
    location: "Bageshwar",
    rating: "4.8",
    reviews: "28",
    stock: 6,
    image:
      "https://images.unsplash.com/photo-1555041469-a586c61ea9bc?auto=format&fit=crop&w=1200&q=80",
    description:
      "A comfortable modern sofa with a premium finish. Designed for relaxing, entertaining guests, and everyday family use.",
    material: "Fabric + Solid Wood",
    color: "Forest Green",
    dimensions: "78 × 34 × 32 inches",
    warranty: "1 Year",
    seller: "Bageshwar Home Furniture",
  },

  {
    id: "category-sofa-classic",
    category: "sofas",
    name: "Classic Lounge Sofa",
    price: "₹41,800",
    oldPrice: "₹48,500",
    discount: "14% OFF",
    location: "Almora",
    rating: "4.7",
    reviews: "21",
    stock: 4,
    image:
      "https://images.unsplash.com/photo-1550226891-ef816aed4a98?auto=format&fit=crop&w=1200&q=80",
    description:
      "Classic lounge sofa combining comfort and timeless design. Suitable for living rooms and premium interiors.",
    material: "Premium Fabric",
    color: "Cream",
    dimensions: "82 × 35 × 32 inches",
    warranty: "1 Year",
    seller: "Almora Furniture Studio",
  },

  {
    id: "category-table-dining",
    category: "tables",
    name: "Modern Dining Table",
    price: "₹36,500",
    oldPrice: "₹43,000",
    discount: "15% OFF",
    location: "Haldwani",
    rating: "4.7",
    reviews: "18",
    stock: 9,
    image:
      "https://images.unsplash.com/photo-1577140917170-285929fb55b7?auto=format&fit=crop&w=1200&q=80",
    description:
      "Modern dining table designed with a simple and elegant look for contemporary dining spaces.",
    material: "Engineered Wood",
    color: "Oak Brown",
    dimensions: "60 × 36 × 30 inches",
    warranty: "1 Year",
    seller: "Haldwani Home Store",
  },

  // ---------------- RECOMMENDED ----------------

  {
    id: "recommended-sofa",
    category: "sofas",
    name: "Luxury Green Sofa",
    price: "₹38,900",
    oldPrice: "₹45,000",
    discount: "14% OFF",
    location: "Bageshwar",
    rating: "4.8",
    reviews: "31",
    stock: 5,
    image:
      "https://images.unsplash.com/photo-1555041469-a586c61ea9bc?auto=format&fit=crop&w=1200&q=80",
    description:
      "Luxury sofa with comfortable cushioning and an elegant finish.",
    material: "Premium Fabric",
    color: "Green",
    dimensions: "80 × 35 × 32 inches",
    warranty: "1 Year",
    seller: "Bageshwar Home Furniture",
  },

  {
    id: "recommended-bed",
    category: "beds",
    name: "Modern King Bed",
    price: "₹59,500",
    oldPrice: "₹68,000",
    discount: "13% OFF",
    location: "Almora",
    rating: "4.9",
    reviews: "42",
    stock: 3,
    image:
      "https://images.unsplash.com/photo-1505693416388-ac5ce068fe85?auto=format&fit=crop&w=1200&q=80",
    description: "Premium king-size bed designed for modern bedrooms.",
    material: "Solid Wood",
    color: "Dark Walnut",
    dimensions: "80 × 72 × 36 inches",
    warranty: "2 Years",
    seller: "Almora Furniture Studio",
  },
  {
    id: "recommended-table",
    category: "tables",
    name: "Elegant Dining Table",
    price: "₹44,500",
    oldPrice: "₹52,000",
    discount: "14% OFF",
    location: "Haldwani",
    rating: "4.8",
    reviews: "24",
    stock: 6,
    image:
      "https://images.unsplash.com/photo-1617806118233-18e1de247200?auto=format&fit=crop&w=1200&q=80",
    description:
      "Elegant wooden dining table designed for comfortable family dining and modern interiors.",
    material: "Solid Wood",
    color: "Natural Brown",
    dimensions: "72 × 36 × 30 inches",
    warranty: "1 Year",
    seller: "Haldwani Furniture House",
  },

  {
    id: "recommended-chair",
    category: "chairs",
    name: "Premium Lounge Chair",
    price: "₹18,500",
    oldPrice: "₹22,000",
    discount: "16% OFF",
    location: "Bageshwar",
    rating: "4.7",
    reviews: "20",
    stock: 8,
    image:
      "https://images.unsplash.com/photo-1503602642458-232111445657?auto=format&fit=crop&w=1200&q=80",
    description:
      "Premium lounge chair designed for comfortable seating and stylish modern interiors.",
    material: "Wood + Premium Fabric",
    color: "Beige",
    dimensions: "30 × 30 × 34 inches",
    warranty: "1 Year",
    seller: "Bageshwar Furniture House",
  },

  {
    id: "recommended-wardrobe",
    category: "wardrobes",
    name: "Modern Wooden Wardrobe",
    price: "₹46,900",
    oldPrice: "₹55,000",
    discount: "15% OFF",
    location: "Almora",
    rating: "4.8",
    reviews: "27",
    stock: 4,
    image:
      "https://images.unsplash.com/photo-1595428774223-ef52624120d2?auto=format&fit=crop&w=1200&q=80",
    description:
      "Spacious wooden wardrobe with a modern design and practical storage space.",
    material: "Engineered Wood",
    color: "Walnut Brown",
    dimensions: "72 × 24 × 78 inches",
    warranty: "1 Year",
    seller: "Almora Home Furniture",
  },

  {
    id: "recommended-desk",
    category: "desks",
    name: "Modern Work Desk",
    price: "₹21,500",
    oldPrice: "₹26,000",
    discount: "17% OFF",
    location: "Haldwani",
    rating: "4.7",
    reviews: "18",
    stock: 7,
    image:
      "https://images.unsplash.com/photo-1518455027359-f3f8164ba6b1?auto=format&fit=crop&w=1200&q=80",
    description:
      "Modern wooden work desk designed for comfortable home office and study spaces.",
    material: "Engineered Wood",
    color: "Natural Oak",
    dimensions: "48 × 24 × 30 inches",
    warranty: "1 Year",
    seller: "Haldwani Home Store",
  },

  // ---------------- RECENTLY VIEWED ----------------

  {
    id: "recent-chair",
    category: "chairs",
    name: "Comfort Lounge Chair",
    price: "₹14,500",
    oldPrice: "₹18,000",
    discount: "19% OFF",
    location: "Bageshwar",
    rating: "4.7",
    reviews: "17",
    stock: 7,
    image:
      "https://images.unsplash.com/photo-1503602642458-232111445657?auto=format&fit=crop&w=1200&q=80",
    description:
      "Comfortable lounge chair suitable for living rooms and reading corners.",
    material: "Wood + Fabric",
    color: "Beige",
    dimensions: "28 × 28 × 32 inches",
    warranty: "1 Year",
    seller: "Bageshwar Furniture House",
  },

  {
    id: "recent-table",
    category: "tables",
    name: "Wooden Side Table",
    price: "₹9,800",
    oldPrice: "₹12,000",
    discount: "18% OFF",
    location: "Bageshwar",
    rating: "4.6",
    reviews: "14",
    stock: 10,
    image:
      "https://images.unsplash.com/photo-1617806118233-18e1de247200?auto=format&fit=crop&w=1200&q=80",
    description: "Compact wooden side table for bedrooms and living rooms.",
    material: "Solid Wood",
    color: "Natural Wood",
    dimensions: "24 × 18 × 22 inches",
    warranty: "1 Year",
    seller: "Saryu Furniture Works",
  },

  {
    id: "recent-sofa",
    category: "sofas",
    name: "Modern Comfort Sofa",
    price: "₹32,500",
    oldPrice: "₹39,000",
    discount: "16% OFF",
    location: "Bageshwar",
    rating: "4.8",
    reviews: "28",
    stock: 6,
    image:
      "https://images.unsplash.com/photo-1555041469-a586c61ea9bc?auto=format&fit=crop&w=1200&q=80",
    description:
      "A comfortable modern sofa with a premium finish for relaxing and everyday family use.",
    material: "Fabric + Solid Wood",
    color: "Forest Green",
    dimensions: "78 × 34 × 32 inches",
    warranty: "1 Year",
    seller: "Bageshwar Home Furniture",
  },

  {
    id: "recent-bed",
    category: "beds",
    name: "Premium Wooden Bed",
    price: "₹48,500",
    oldPrice: "₹57,000",
    discount: "15% OFF",
    location: "Bageshwar",
    rating: "4.8",
    reviews: "26",
    stock: 5,
    image:
      "https://images.unsplash.com/photo-1505693416388-ac5ce068fe85?auto=format&fit=crop&w=1200&q=80",
    description:
      "Elegant wooden bed with a clean modern design and comfortable finish.",
    material: "Solid Wood",
    color: "Walnut",
    dimensions: "78 × 60 × 36 inches",
    warranty: "1 Year",
    seller: "Bageshwar Furniture House",
  },

  {
    id: "recent-wardrobe",
    category: "wardrobes",
    name: "Modern Wooden Wardrobe",
    price: "₹46,900",
    oldPrice: "₹55,000",
    discount: "15% OFF",
    location: "Almora",
    rating: "4.8",
    reviews: "27",
    stock: 4,
    image:
      "https://images.unsplash.com/photo-1595428774223-ef52624120d2?auto=format&fit=crop&w=1200&q=80",
    description:
      "Spacious wooden wardrobe with modern design and practical storage space.",
    material: "Engineered Wood",
    color: "Walnut Brown",
    dimensions: "72 × 24 × 78 inches",
    warranty: "1 Year",
    seller: "Almora Home Furniture",
  },

  {
    id: "recent-desk",
    category: "desks",
    name: "Modern Work Desk",
    price: "₹21,500",
    oldPrice: "₹26,000",
    discount: "17% OFF",
    location: "Haldwani",
    rating: "4.7",
    reviews: "18",
    stock: 7,
    image:
      "https://images.unsplash.com/photo-1518455027359-f3f8164ba6b1?auto=format&fit=crop&w=1200&q=80",
    description:
      "Modern wooden work desk designed for home office and study spaces.",
    material: "Engineered Wood",
    color: "Natural Oak",
    dimensions: "48 × 24 × 30 inches",
    warranty: "1 Year",
    seller: "Haldwani Home Store",
  },
];

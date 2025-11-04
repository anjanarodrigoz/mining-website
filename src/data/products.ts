import { ProductImages } from './images';
export interface Product {
  id: string;
  name: string;
  category: 'copper' | 'gold' | 'graphite' | 'rare-earth' | 'silver' | 'other';
  description: string;
  detailedDescription: string;
  specifications: {
    label: string;
    value: string;
  }[];
  applications: string[];
  image: string;
  gallery?: string[];
  grade?: string;
  purity?: string;
  available: boolean;
  packaging?: string;
  minimumOrder?: string;
}

export const products: Product[] = [
  {
    id: 'copper-concentrate',
    name: 'Copper Concentrate',
    category: 'copper',
    description: 'High-grade copper concentrate from our flagship Highland Valley operation, suitable for smelting and refining.',
    detailedDescription: 'Our copper concentrate is produced through advanced flotation processes, ensuring consistent quality and high copper content. Sourced from our world-class Highland Valley operation, this product meets international standards for smelter feed.',
    specifications: [
      { label: 'Copper Content', value: '25-30%' },
      { label: 'Moisture', value: 'Max 8%' },
      { label: 'Size', value: '-100 mesh (90%)' },
      { label: 'Iron Content', value: '25-30%' },
      { label: 'Sulfur Content', value: '28-32%' },
    ],
    applications: [
      'Copper smelting',
      'Refined copper production',
      'Wire and cable manufacturing',
      'Electrical components',
      'Construction materials',
    ],
    image: ProductImages.copper,
    gallery: [
      'https://images.unsplash.com/photo-1611348524140-53c9a25263d6?w=800&h=600&fit=crop',
      'https://images.unsplash.com/photo-1592422546486-fb80ec694548?w=800&h=600&fit=crop',
    ],
    grade: 'Premium',
    purity: '25-30% Cu',
    available: true,
    packaging: 'Bulk shipping in specialized containers',
    minimumOrder: '500 MT',
  },
  {
    id: 'gold-dore-bars',
    name: 'Gold Doré Bars',
    category: 'gold',
    description: 'Semi-pure alloy of gold and silver produced at our Australian operations, ready for final refining.',
    detailedDescription: 'Gold doré bars are produced through our state-of-the-art processing facilities at Golden Ridge Mine. Each bar is individually numbered and assayed, with certificates provided for gold and silver content.',
    specifications: [
      { label: 'Gold Content', value: '85-95%' },
      { label: 'Silver Content', value: '5-15%' },
      { label: 'Bar Weight', value: '12.5 kg (400 oz troy) standard' },
      { label: 'Purity', value: '900-950 fineness' },
      { label: 'Form', value: 'Cast bars with serial numbers' },
    ],
    applications: [
      'Gold refining',
      'Jewelry manufacturing',
      'Investment products',
      'Electronics industry',
      'Dental applications',
    ],
    image: ProductImages.gold,
    gallery: [
      'https://images.unsplash.com/photo-1541888946425-d81bb19240f5?w=800&h=600&fit=crop',
      'https://images.unsplash.com/photo-1610375461246-83df859d849d?w=800&h=600&fit=crop',
    ],
    grade: 'Standard Doré',
    purity: '85-95% Au',
    available: true,
    packaging: 'Secure vault packaging with full insurance',
    minimumOrder: '50 kg',
  },
  {
    id: 'flake-graphite',
    name: 'Flake Graphite',
    category: 'graphite',
    description: 'High-quality natural flake graphite suitable for batteries, lubricants, and refractory applications.',
    detailedDescription: 'Our flake graphite is carefully processed to preserve crystal structure and maximize carbon content. Available in multiple size grades to meet diverse industrial requirements.',
    specifications: [
      { label: 'Carbon Content', value: '94-99%' },
      { label: 'Moisture', value: 'Max 0.5%' },
      { label: 'Ash Content', value: 'Max 5%' },
      { label: 'Volatile Matter', value: 'Max 1%' },
      { label: 'Particle Size', value: 'Multiple grades available' },
    ],
    applications: [
      'Lithium-ion battery anodes',
      'Lubricants and greases',
      'Refractories',
      'Brake linings',
      'Foundry coatings',
    ],
    image: ProductImages.graphite,
    grade: 'High Carbon',
    purity: '94-99% C',
    available: true,
    packaging: '1 MT jumbo bags or bulk',
    minimumOrder: '20 MT',
  },
  {
    id: 'rare-earth-concentrate',
    name: 'Rare Earth Concentrate',
    category: 'rare-earth',
    description: 'Mixed rare earth oxide concentrate containing neodymium, praseodymium, and dysprosium.',
    detailedDescription: 'Extracted from our Inner Mongolia operation, this rare earth concentrate contains critical elements essential for permanent magnets, renewable energy technologies, and advanced electronics.',
    specifications: [
      { label: 'Total REO', value: '55-65%' },
      { label: 'Neodymium Oxide', value: '18-22%' },
      { label: 'Praseodymium Oxide', value: '5-7%' },
      { label: 'Dysprosium Oxide', value: '1-2%' },
      { label: 'Moisture', value: 'Max 1%' },
    ],
    applications: [
      'Permanent magnet production',
      'Electric vehicle motors',
      'Wind turbine generators',
      'Electronic devices',
      'Catalysts',
    ],
    image: ProductImages.rareEarth,
    grade: 'Premium Mixed REO',
    purity: '55-65% REO',
    available: true,
    packaging: 'Steel drums or bulk containers',
    minimumOrder: '10 MT',
  },
  {
    id: 'silver-bullion',
    name: 'Silver Bullion',
    category: 'silver',
    description: 'High-purity silver bullion bars produced as a byproduct of our gold and copper operations.',
    detailedDescription: 'Our silver bullion meets international standards for purity and quality. Each bar is stamped with weight, purity, and serial number, with full certification provided.',
    specifications: [
      { label: 'Purity', value: '99.9% Ag (999 fineness)' },
      { label: 'Bar Weight', value: '1 kg standard' },
      { label: 'Form', value: 'Cast bars with hallmark' },
      { label: 'Compliance', value: 'LBMA Good Delivery' },
    ],
    applications: [
      'Jewelry manufacturing',
      'Solar panels',
      'Electronics',
      'Photography',
      'Investment products',
    ],
    image: ProductImages.copper,
    grade: 'Investment Grade',
    purity: '99.9% Ag',
    available: true,
    packaging: 'Secure vault packaging',
    minimumOrder: '100 kg',
  },
  {
    id: 'molybdenum-concentrate',
    name: 'Molybdenum Concentrate',
    category: 'other',
    description: 'High-grade molybdenum concentrate recovered as a byproduct from copper operations.',
    detailedDescription: 'Molybdenum concentrate produced through selective flotation at our Highland Valley operation. Suitable for ferromolybdenum production and chemical processing.',
    specifications: [
      { label: 'Molybdenum Content', value: '54-58%' },
      { label: 'Moisture', value: 'Max 2%' },
      { label: 'Copper', value: 'Max 1.5%' },
      { label: 'Lead', value: 'Max 0.1%' },
      { label: 'Phosphorus', value: 'Max 0.05%' },
    ],
    applications: [
      'Steel alloy production',
      'Catalysts',
      'Lubricants',
      'Corrosion-resistant coatings',
      'Chemical industry',
    ],
    image: ProductImages.molybdenum,
    grade: 'Technical Grade',
    purity: '54-58% Mo',
    available: true,
    packaging: 'Steel drums or bulk',
    minimumOrder: '50 MT',
  },
  {
    id: 'lithium-carbonate',
    name: 'Lithium Carbonate',
    category: 'other',
    description: 'Battery-grade lithium carbonate from our Andean brine operation.',
    detailedDescription: 'High-purity lithium carbonate produced through solar evaporation and chemical processing of lithium-rich brines. Specifically processed to meet the stringent requirements of lithium-ion battery manufacturers.',
    specifications: [
      { label: 'Li2CO3 Content', value: 'Min 99.5%' },
      { label: 'Sodium', value: 'Max 0.02%' },
      { label: 'Potassium', value: 'Max 0.01%' },
      { label: 'Calcium', value: 'Max 0.02%' },
      { label: 'Magnetic Substances', value: 'Max 0.0005%' },
    ],
    applications: [
      'Lithium-ion batteries',
      'Electric vehicle batteries',
      'Energy storage systems',
      'Ceramics and glass',
      'Pharmaceuticals',
    ],
    image: ProductImages.lithium,
    grade: 'Battery Grade',
    purity: '99.5% Li2CO3',
    available: true,
    packaging: '25 kg bags or 1 MT jumbo bags',
    minimumOrder: '20 MT',
  },
  {
    id: 'zinc-concentrate',
    name: 'Zinc Concentrate',
    category: 'other',
    description: 'High-quality zinc concentrate from our Silverstone operation.',
    detailedDescription: 'Zinc concentrate produced through selective flotation, delivering consistent quality for zinc smelters worldwide.',
    specifications: [
      { label: 'Zinc Content', value: '50-55%' },
      { label: 'Lead', value: '2-4%' },
      { label: 'Iron', value: 'Max 8%' },
      { label: 'Moisture', value: 'Max 8%' },
      { label: 'Cadmium', value: '0.2-0.3%' },
    ],
    applications: [
      'Zinc smelting',
      'Galvanizing',
      'Die casting',
      'Brass production',
      'Chemical manufacturing',
    ],
    image: ProductImages.copper,
    grade: 'Smelter Grade',
    purity: '50-55% Zn',
    available: true,
    packaging: 'Bulk shipping',
    minimumOrder: '500 MT',
  },
];

export const productCategories = [
  { value: 'all', label: 'All Products' },
  { value: 'copper', label: 'Copper' },
  { value: 'gold', label: 'Gold' },
  { value: 'graphite', label: 'Graphite' },
  { value: 'rare-earth', label: 'Rare Earth' },
  { value: 'silver', label: 'Silver' },
  { value: 'other', label: 'Other Minerals' },
];

export const getProductById = (id: string) => products.find(p => p.id === id);
export const getProductsByCategory = (category: string) =>
  category === 'all' ? products : products.filter(p => p.category === category);

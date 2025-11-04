import { FinancialData, Document } from '@/types';

export const financialData: FinancialData[] = [
  {
    year: 2024,
    revenue: 2850000000,
    ebitda: 985000000,
    netIncome: 625000000,
    totalAssets: 8500000000,
    production: [
      { mineral: 'Copper', volume: 385000000, unit: 'lbs' },
      { mineral: 'Gold', volume: 425000, unit: 'oz' },
      { mineral: 'Rare Earth Oxides', volume: 12000, unit: 'tonnes' },
    ],
  },
  {
    year: 2023,
    revenue: 2650000000,
    ebitda: 890000000,
    netIncome: 550000000,
    totalAssets: 8200000000,
    production: [
      { mineral: 'Copper', volume: 365000000, unit: 'lbs' },
      { mineral: 'Gold', volume: 405000, unit: 'oz' },
      { mineral: 'Rare Earth Oxides', volume: 10500, unit: 'tonnes' },
    ],
  },
  {
    year: 2022,
    revenue: 2480000000,
    ebitda: 825000000,
    netIncome: 495000000,
    totalAssets: 7800000000,
    production: [
      { mineral: 'Copper', volume: 348000000, unit: 'lbs' },
      { mineral: 'Gold', volume: 385000, unit: 'oz' },
      { mineral: 'Rare Earth Oxides', volume: 8500, unit: 'tonnes' },
    ],
  },
  {
    year: 2021,
    revenue: 2350000000,
    ebitda: 765000000,
    netIncome: 445000000,
    totalAssets: 7500000000,
    production: [
      { mineral: 'Copper', volume: 335000000, unit: 'lbs' },
      { mineral: 'Gold', volume: 375000, unit: 'oz' },
      { mineral: 'Rare Earth Oxides', volume: 6200, unit: 'tonnes' },
    ],
  },
  {
    year: 2020,
    revenue: 2100000000,
    ebitda: 685000000,
    netIncome: 385000000,
    totalAssets: 7200000000,
    production: [
      { mineral: 'Copper', volume: 315000000, unit: 'lbs' },
      { mineral: 'Gold', volume: 355000, unit: 'oz' },
      { mineral: 'Rare Earth Oxides', volume: 4500, unit: 'tonnes' },
    ],
  },
];

export const documents: Document[] = [
  {
    id: '1',
    title: '2024 Annual Report',
    description: 'Comprehensive overview of financial performance, operations, and strategic initiatives.',
    type: 'annual-report',
    date: '2024-03-15',
    fileUrl: '#',
    fileSize: '12.5 MB',
  },
  {
    id: '2',
    title: '2024 Sustainability Report',
    description: 'Detailed review of environmental, social, and governance performance.',
    type: 'sustainability-report',
    date: '2024-08-15',
    fileUrl: '#',
    fileSize: '8.3 MB',
  },
  {
    id: '3',
    title: 'Q4 2024 Investor Presentation',
    description: 'Quarterly results and outlook presentation for investors and analysts.',
    type: 'presentation',
    date: '2024-11-01',
    fileUrl: '#',
    fileSize: '5.2 MB',
  },
  {
    id: '4',
    title: '2023 Annual Report',
    description: 'Previous year financial and operational review.',
    type: 'annual-report',
    date: '2023-03-15',
    fileUrl: '#',
    fileSize: '11.8 MB',
  },
  {
    id: '5',
    title: 'Mineral Reserves & Resources Statement',
    description: 'Technical report on proven and probable reserves across all operations.',
    type: 'fact-sheet',
    date: '2024-02-01',
    fileUrl: '#',
    fileSize: '3.7 MB',
  },
  {
    id: '6',
    title: 'Corporate Governance Guidelines',
    description: 'Board structure, policies, and governance framework.',
    type: 'policy',
    date: '2024-01-15',
    fileUrl: '#',
    fileSize: '1.2 MB',
  },
  {
    id: '7',
    title: 'Environmental Policy Statement',
    description: 'Company-wide environmental management and sustainability commitments.',
    type: 'policy',
    date: '2023-12-01',
    fileUrl: '#',
    fileSize: '850 KB',
  },
  {
    id: '8',
    title: 'Q3 2024 Investor Presentation',
    description: 'Third quarter financial results and operational update.',
    type: 'presentation',
    date: '2024-08-10',
    fileUrl: '#',
    fileSize: '4.8 MB',
  },
];

export const investorHighlights = [
  {
    title: 'Strong Financial Performance',
    description: 'Revenue up 15% YoY with robust EBITDA margins',
    icon: 'TrendingUp',
  },
  {
    title: 'Diversified Portfolio',
    description: 'Balanced exposure across copper, gold, and critical minerals',
    icon: 'PieChart',
  },
  {
    title: 'Sustainable Growth',
    description: 'Industry-leading ESG practices with carbon neutral target',
    icon: 'Leaf',
  },
  {
    title: 'Operational Excellence',
    description: 'Consistent production growth and cost optimization',
    icon: 'Target',
  },
];

export const shareholderInfo = {
  stockSymbol: 'TRM',
  exchange: 'NYSE',
  currentPrice: 45.82,
  marketCap: '12.5B',
  dividendYield: '2.8%',
  peRatio: 14.2,
  analystRating: 'Buy',
};

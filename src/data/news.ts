import { NewsImages } from './images';
import { NewsArticle } from '@/types';

export const newsArticles: NewsArticle[] = [
  {
    id: '1',
    title: 'TerraMin Achieves Record Q4 Production',
    excerpt: 'Fourth quarter 2024 results exceed expectations with copper production up 15% year-over-year.',
    content: 'TerraMin Resources reported record production for Q4 2024, with copper output reaching 95 million pounds across all operations. The strong performance was driven by operational improvements at Highland Valley and Los Andes mines.',
    category: 'company-update',
    date: '2024-11-01',
    author: 'TerraMin Communications',
    image: NewsImages.production,
    featured: true,
  },
  {
    id: '2',
    title: 'New Partnership for Electric Vehicle Battery Materials',
    excerpt: 'Strategic agreement signed to supply rare earth elements and lithium to major EV manufacturers.',
    content: 'TerraMin has entered into a five-year supply agreement with leading electric vehicle manufacturers, positioning the company at the forefront of the clean energy transition.',
    category: 'press-release',
    date: '2024-10-28',
    author: 'TerraMin Communications',
    image: NewsImages.partnership,
    featured: true,
  },
  {
    id: '3',
    title: 'Community Education Center Opens in Zambia',
    excerpt: '$5M investment in local education infrastructure supports sustainable community development.',
    content: 'TerraMin celebrated the opening of the Zambezi Education Center, providing vocational training and educational resources to communities near our Zambian operations.',
    category: 'sustainability',
    date: '2024-10-15',
    author: 'Community Relations Team',
    image: 'https://images.unsplash.com/photo-1503676260728-1c00da094a0b?w=800&h=600&fit=crop',
    featured: true,
  },
  {
    id: '4',
    title: 'Advanced Mining Technology Reduces Energy Consumption',
    excerpt: 'AI-powered optimization systems cut energy use by 22% at flagship operations.',
    content: 'Implementation of artificial intelligence and machine learning systems across TerraMin operations has resulted in significant energy savings and reduced environmental impact.',
    category: 'industry-news',
    date: '2024-10-08',
    author: 'Technology Division',
    image: NewsImages.technology,
  },
  {
    id: '5',
    title: 'Zero Lost Time Injuries Milestone Achieved',
    excerpt: 'Highland Valley operation completes 1,000 days without a lost time injury.',
    content: 'TerraMin\'s flagship Highland Valley mine has reached a significant safety milestone, demonstrating the company\'s unwavering commitment to worker safety.',
    category: 'company-update',
    date: '2024-09-22',
    author: 'Safety Department',
    image: NewsImages.safety,
  },
  {
    id: '6',
    title: 'Water Recycling Program Exceeds Targets',
    excerpt: '95% of water recycled at all operations, surpassing industry benchmarks.',
    content: 'TerraMin\'s comprehensive water management strategy has achieved exceptional results, with water recycling rates exceeding 95% across all operational sites.',
    category: 'sustainability',
    date: '2024-09-10',
    author: 'Environmental Team',
    image: NewsImages.water,
  },
  {
    id: '7',
    title: 'Exploration Discovers High-Grade Gold Deposit',
    excerpt: 'Nordic Gold Exploration project identifies significant mineralization in Finland.',
    content: 'Recent drilling results from our Finnish exploration project have revealed high-grade gold mineralization, potentially expanding our European operations.',
    category: 'company-update',
    date: '2024-08-28',
    author: 'Exploration Team',
    image: NewsImages.exploration,
  },
  {
    id: '8',
    title: 'Annual Sustainability Report Published',
    excerpt: 'Comprehensive review of environmental and social performance demonstrates industry leadership.',
    content: 'TerraMin\'s 2024 Sustainability Report showcases continued progress toward environmental goals and community development initiatives across all operations.',
    category: 'sustainability',
    date: '2024-08-15',
    author: 'Sustainability Division',
    image: NewsImages.sustainability,
  },
];

export const featuredNews = newsArticles.filter(article => article.featured);

export const newsByCategory = (category: NewsArticle['category']) =>
  newsArticles.filter(article => article.category === category);

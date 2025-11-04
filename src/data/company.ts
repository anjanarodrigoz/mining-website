import { Company, Milestone, Stats, NavItem } from '@/types';

export const companyInfo: Company = {
  name: 'TerraMin Resources',
  tagline: 'Building Tomorrow Through Responsible Mining',
  description: 'TerraMin Resources is a leading global mining company committed to sustainable resource extraction and community development. With operations across five continents, we specialize in copper, gold, and rare earth minerals, delivering value to shareholders while maintaining the highest environmental and social standards.',
  founded: 1985,
  headquarters: 'Vancouver, Canada',
  employees: 8500,
  annualProduction: '$2.8B',
};

export const companyStats: Stats[] = [
  {
    label: 'Years of Experience',
    value: '38+',
    description: 'Leading the mining industry since 1985',
  },
  {
    label: 'Active Operations',
    value: '12',
    description: 'Mining sites across 5 continents',
  },
  {
    label: 'Annual Production',
    value: '$2.8B',
    description: 'Revenue generated in 2024',
  },
  {
    label: 'Team Members',
    value: '8,500+',
    description: 'Skilled professionals worldwide',
  },
  {
    label: 'Safety Record',
    value: '0.42',
    description: 'LTIFR - Industry leading safety',
  },
  {
    label: 'Community Investment',
    value: '$45M',
    description: 'Annual community development spending',
  },
];

export const milestones: Milestone[] = [
  {
    year: 1985,
    title: 'Foundation',
    description: 'TerraMin Resources founded in Vancouver, Canada, with first copper mine in British Columbia.',
  },
  {
    year: 1992,
    title: 'International Expansion',
    description: 'Established first international operation in Chile, marking expansion into South America.',
  },
  {
    year: 1998,
    title: 'Gold Mining Division',
    description: 'Launched gold mining operations with acquisition of Australian gold fields.',
  },
  {
    year: 2005,
    title: 'Sustainability Commitment',
    description: 'Pioneered ISO 14001 certification across all operations, setting new industry standards.',
  },
  {
    year: 2012,
    title: 'Technology Innovation',
    description: 'Introduced autonomous mining equipment and AI-powered resource optimization.',
  },
  {
    year: 2018,
    title: 'Rare Earth Minerals',
    description: 'Expanded portfolio with strategic rare earth mineral operations for renewable energy.',
  },
  {
    year: 2022,
    title: 'Carbon Neutral Operations',
    description: 'Achieved carbon neutral status at three major operations ahead of 2030 target.',
  },
  {
    year: 2024,
    title: 'Industry Leadership',
    description: 'Recognized as industry leader in sustainable mining practices and community development.',
  },
];

export const coreValues = [
  {
    title: 'Safety First',
    description: 'The safety and wellbeing of our people is our top priority. We maintain rigorous safety standards and invest in continuous training.',
    icon: 'Shield',
  },
  {
    title: 'Environmental Stewardship',
    description: 'We are committed to minimizing our environmental impact through innovative practices and responsible resource management.',
    icon: 'Leaf',
  },
  {
    title: 'Community Partnership',
    description: 'We build lasting relationships with local communities, creating opportunities and supporting sustainable development.',
    icon: 'Users',
  },
  {
    title: 'Integrity & Transparency',
    description: 'We operate with the highest ethical standards, maintaining open communication with all stakeholders.',
    icon: 'Eye',
  },
  {
    title: 'Innovation',
    description: 'We embrace technology and innovation to improve efficiency, safety, and sustainability in our operations.',
    icon: 'Lightbulb',
  },
  {
    title: 'Excellence',
    description: 'We strive for operational excellence in everything we do, continuously improving our processes and outcomes.',
    icon: 'Award',
  },
];

export const navigationItems: NavItem[] = [
  {
    label: 'Home',
    href: '/',
  },
  {
    label: 'About',
    href: '/about',
    children: [
      { label: 'Company Overview', href: '/about' },
      { label: 'Leadership Team', href: '/about#team' },
      { label: 'Our Values', href: '/about#values' },
      { label: 'History', href: '/about#history' },
    ],
  },
  {
    label: 'Operations',
    href: '/operations',
    children: [
      { label: 'All Projects', href: '/operations' },
      { label: 'Copper Mining', href: '/operations?type=copper' },
      { label: 'Gold Mining', href: '/operations?type=gold' },
      { label: 'Rare Earth Minerals', href: '/operations?type=rare-earth' },
    ],
  },
  {
    label: 'Sustainability',
    href: '/sustainability',
    children: [
      { label: 'Environmental Impact', href: '/sustainability#environment' },
      { label: 'Community Engagement', href: '/sustainability#community' },
      { label: 'Safety Standards', href: '/sustainability#safety' },
    ],
  },
  {
    label: 'Investors',
    href: '/investors',
    children: [
      { label: 'Financial Overview', href: '/investors' },
      { label: 'Reports & Presentations', href: '/investors#reports' },
      { label: 'Corporate Governance', href: '/investors#governance' },
    ],
  },
  {
    label: 'News',
    href: '/news',
  },
  {
    label: 'Contact',
    href: '/contact',
  },
];

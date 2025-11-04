import { ContactInfo, Office } from '@/types';

export const contactDepartments: ContactInfo[] = [
  {
    department: 'General Inquiries',
    email: 'info@terramin.com',
    phone: '+1 (604) 555-0100',
  },
  {
    department: 'Investor Relations',
    email: 'investors@terramin.com',
    phone: '+1 (604) 555-0150',
  },
  {
    department: 'Media & Press',
    email: 'media@terramin.com',
    phone: '+1 (604) 555-0175',
  },
  {
    department: 'Career Opportunities',
    email: 'careers@terramin.com',
    phone: '+1 (604) 555-0125',
  },
  {
    department: 'Sustainability',
    email: 'sustainability@terramin.com',
    phone: '+1 (604) 555-0180',
  },
  {
    department: 'Community Relations',
    email: 'community@terramin.com',
    phone: '+1 (604) 555-0190',
  },
];

export const offices: Office[] = [
  {
    id: '1',
    name: 'Global Headquarters',
    address: '1055 West Hastings Street, Suite 1500',
    city: 'Vancouver, BC V6E 2E9',
    country: 'Canada',
    coordinates: { lat: 49.2827, lng: -123.1207 },
    phone: '+1 (604) 555-0100',
    email: 'vancouver@terramin.com',
    type: 'headquarters',
  },
  {
    id: '2',
    name: 'South American Regional Office',
    address: 'Av. El Golf 150, Piso 12',
    city: 'Santiago',
    country: 'Chile',
    coordinates: { lat: -33.4489, lng: -70.6693 },
    phone: '+56 2 2555 0200',
    email: 'santiago@terramin.com',
    type: 'regional',
  },
  {
    id: '3',
    name: 'Australian Regional Office',
    address: '225 St Georges Terrace, Level 10',
    city: 'Perth, WA 6000',
    country: 'Australia',
    coordinates: { lat: -31.9505, lng: 115.8605 },
    phone: '+61 8 5555 0300',
    email: 'perth@terramin.com',
    type: 'regional',
  },
  {
    id: '4',
    name: 'African Regional Office',
    address: 'Addis Ababa Road, Plot 3750',
    city: 'Lusaka',
    country: 'Zambia',
    coordinates: { lat: -15.3875, lng: 28.3228 },
    phone: '+260 211 555 400',
    email: 'lusaka@terramin.com',
    type: 'regional',
  },
  {
    id: '5',
    name: 'Highland Valley Site Office',
    address: 'Highland Valley Road',
    city: 'Logan Lake, BC',
    country: 'Canada',
    coordinates: { lat: 50.4785, lng: -120.9522 },
    phone: '+1 (250) 555-0500',
    email: 'highlandvalley@terramin.com',
    type: 'site-office',
  },
  {
    id: '6',
    name: 'Golden Ridge Site Office',
    address: 'Goldfields Highway',
    city: 'Kalgoorlie, WA',
    country: 'Australia',
    coordinates: { lat: -30.7494, lng: 121.4689 },
    phone: '+61 8 5555 0600',
    email: 'goldenridge@terramin.com',
    type: 'site-office',
  },
];

export const socialMedia = [
  {
    platform: 'LinkedIn',
    url: 'https://linkedin.com/company/terramin',
    icon: 'Linkedin',
  },
  {
    platform: 'Twitter',
    url: 'https://twitter.com/terramin',
    icon: 'Twitter',
  },
  {
    platform: 'Facebook',
    url: 'https://facebook.com/terramin',
    icon: 'Facebook',
  },
  {
    platform: 'YouTube',
    url: 'https://youtube.com/terramin',
    icon: 'Youtube',
  },
];

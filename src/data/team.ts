import { TeamImages } from './images';
import { TeamMember } from '@/types';

export const leadershipTeam: TeamMember[] = [
  {
    id: '1',
    name: 'Sarah Mitchell',
    position: 'Chief Executive Officer',
    bio: 'Sarah brings over 25 years of mining industry experience, having led major operations across four continents. Her vision for sustainable mining has transformed TerraMin into an industry leader.',
    image: TeamImages.ceo,
    linkedin: 'https://linkedin.com',
    email: 's.mitchell@terramin.com',
  },
  {
    id: '2',
    name: 'Dr. James Chen',
    position: 'Chief Operating Officer',
    bio: 'James oversees all mining operations globally, implementing cutting-edge technology and safety protocols. His PhD in Mining Engineering drives operational excellence.',
    image: TeamImages.coo,
    linkedin: 'https://linkedin.com',
    email: 'j.chen@terramin.com',
  },
  {
    id: '3',
    name: 'Maria Rodriguez',
    position: 'Chief Financial Officer',
    bio: 'Maria leads financial strategy with expertise in mining finance and investor relations. She has successfully guided TerraMin through major expansions and market cycles.',
    image: TeamImages.cfo,
    linkedin: 'https://linkedin.com',
    email: 'm.rodriguez@terramin.com',
  },
  {
    id: '4',
    name: 'David Thompson',
    position: 'VP of Sustainability',
    bio: 'David champions environmental stewardship and community relations. Under his leadership, TerraMin has achieved industry-leading sustainability metrics.',
    image: TeamImages.vpSustainability,
    linkedin: 'https://linkedin.com',
    email: 'd.thompson@terramin.com',
  },
  {
    id: '5',
    name: 'Dr. Aisha Patel',
    position: 'Chief Technology Officer',
    bio: 'Aisha drives technological innovation in mining operations, specializing in automation, AI, and predictive analytics to enhance safety and efficiency.',
    image: TeamImages.cto,
    linkedin: 'https://linkedin.com',
    email: 'a.patel@terramin.com',
  },
  {
    id: '6',
    name: 'Robert Anderson',
    position: 'VP of Safety & Compliance',
    bio: 'Robert ensures world-class safety standards across all operations. His 30 years in mine safety have established TerraMin as an industry safety leader.',
    image: TeamImages.vpSafety,
    linkedin: 'https://linkedin.com',
    email: 'r.anderson@terramin.com',
  },
];

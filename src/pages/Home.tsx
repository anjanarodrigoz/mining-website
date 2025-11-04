import { HeroSection } from '@/components/home/HeroSection';
import { StatsSection } from '@/components/home/StatsSection';
import { AboutPreview } from '@/components/home/AboutPreview';
import { FeaturedProjects } from '@/components/home/FeaturedProjects';
import { NewsSection } from '@/components/home/NewsSection';
import { CTASection } from '@/components/home/CTASection';

export function Home() {
  return (
    <div>
      <HeroSection />
      <StatsSection />
      <AboutPreview />
      <FeaturedProjects />
      <NewsSection />
      <CTASection />
    </div>
  );
}

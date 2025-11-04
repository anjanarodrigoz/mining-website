import { ReactNode } from 'react';

interface PageHeroProps {
  title: string;
  description?: string;
  children?: ReactNode;
  imagePlaceholder?: string;
}

export function PageHero({ title, description, children, imagePlaceholder = 'Mining operations' }: PageHeroProps) {
  return (
    <section className="relative pt-32 pb-20 md:pt-40 md:pb-28 bg-gradient-to-br from-gray-900 via-gray-800 to-gray-900 overflow-hidden">
      {/* Background Pattern */}
      <div className="absolute inset-0 opacity-10">
        <div className="absolute inset-0" style={{
          backgroundImage: 'linear-gradient(30deg, #0ea5e9 12%, transparent 12.5%, transparent 87%, #0ea5e9 87.5%, #0ea5e9), linear-gradient(150deg, #0ea5e9 12%, transparent 12.5%, transparent 87%, #0ea5e9 87.5%, #0ea5e9), linear-gradient(30deg, #0ea5e9 12%, transparent 12.5%, transparent 87%, #0ea5e9 87.5%, #0ea5e9), linear-gradient(150deg, #0ea5e9 12%, transparent 12.5%, transparent 87%, #0ea5e9 87.5%, #0ea5e9)',
          backgroundSize: '80px 140px',
          backgroundPosition: '0 0, 0 0, 40px 70px, 40px 70px, 0 0, 40px 70px'
        }} />
      </div>

      {/* Content Overlay for Image Placeholder */}
      <div className="absolute inset-0 bg-gray-900/40" />
      <div className="absolute inset-0 flex items-center justify-center opacity-5">
        <div className="text-9xl font-bold text-white">
          {imagePlaceholder}
        </div>
      </div>

      {/* Actual Content */}
      <div className="relative z-10 container-custom text-white">
        <h1 className="text-4xl md:text-5xl lg:text-6xl font-display font-bold mb-6 animate-fade-in-up">
          {title}
        </h1>
        {description && (
          <p className="text-xl md:text-2xl text-gray-200 max-w-3xl mb-8 animate-fade-in-up leading-relaxed" style={{ animationDelay: '0.1s' }}>
            {description}
          </p>
        )}
        {children}
      </div>
    </section>
  );
}

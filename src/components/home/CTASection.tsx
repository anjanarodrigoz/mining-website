import { MiningImages } from '@/data/images';
import { Link } from 'react-router-dom';
import { ArrowRight, Mail } from 'lucide-react';
import { Button } from '@/components/ui/button';

export function CTASection() {
  return (
    <section className="relative py-24 overflow-hidden">
      {/* Background */}
      <div className="absolute inset-0">
        <img
          src={MiningImages.operations}
          alt="Mining operations"
          className="w-full h-full object-cover"
        />
        <div className="absolute inset-0 bg-gradient-to-r from-sky-900/95 to-blue-900/90" />
      </div>

      {/* Content */}
      <div className="relative z-10 container-custom text-center text-white">
        <h2 className="text-4xl md:text-5xl font-display font-bold mb-6">
          Ready to Partner with Us?
        </h2>
        <p className="text-xl text-gray-200 mb-8 max-w-2xl mx-auto">
          Whether you're an investor, supplier, or community stakeholder, we'd love to hear from you.
        </p>
        <div className="flex flex-col sm:flex-row gap-4 justify-center">
          <Button asChild size="lg" variant="outline" className="bg-white text-sky-900 hover:bg-gray-100">
            <Link to="/contact">
              <Mail className="mr-2 h-5 w-5" />
              Get in Touch
            </Link>
          </Button>
          <Button asChild size="lg" className="bg-white/10 backdrop-blur-sm border-white/30 text-white hover:bg-white/20">
            <Link to="/investors">
              Investor Information
              <ArrowRight className="ml-2 h-5 w-5" />
            </Link>
          </Button>
        </div>
      </div>
    </section>
  );
}

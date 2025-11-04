import { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import { Menu, X } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { companyInfo } from '@/data/company';
import { cn } from '@/lib/utils';

const mainNavigationItems = [
  { label: 'Home', href: '/' },
  { label: 'About', href: '/about' },
  { label: 'Products', href: '/products' },
  { label: 'Operations', href: '/operations' },
  { label: 'Sustainability', href: '/sustainability' },
  { label: 'Investors', href: '/investors' },
  { label: 'News', href: '/news' },
  { label: 'Contact', href: '/contact' },
];

export function Header() {
  const [isScrolled, setIsScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <header
      className={cn(
        'fixed top-0 left-0 right-0 z-50 transition-all duration-300',
        isScrolled
          ? 'bg-gray-900/95 backdrop-blur-md shadow-lg'
          : 'bg-transparent'
      )}
    >
      <nav className="container-custom">
        <div className="flex items-center justify-between h-20">
          {/* Logo */}
          <Link to="/" className="flex items-center space-x-3">
            <div className="w-10 h-10 bg-gradient-to-br from-sky-500 to-blue-600 rounded-lg flex items-center justify-center shadow-lg">
              <span className="text-white font-bold text-xl">T</span>
            </div>
            <span className="font-display font-bold text-xl text-white">
              {companyInfo.name}
            </span>
          </Link>

          {/* Desktop Navigation */}
          <div className="hidden lg:flex items-center space-x-1">
            {mainNavigationItems.map((item) => (
              <Link
                key={item.href}
                to={item.href}
                className="px-4 py-2 rounded-md text-sm font-medium text-white/90 hover:text-white hover:bg-white/10 transition-colors"
              >
                {item.label}
              </Link>
            ))}
          </div>

          {/* CTA Button */}
          <div className="hidden lg:block">
            <Button
              asChild
              className="bg-sky-600 hover:bg-sky-700 text-white shadow-lg"
            >
              <Link to="/contact">Get in Touch</Link>
            </Button>
          </div>

          {/* Mobile Menu Button */}
          <button
            className="lg:hidden"
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
          >
            {mobileMenuOpen ? (
              <X className="h-6 w-6 text-white" />
            ) : (
              <Menu className="h-6 w-6 text-white" />
            )}
          </button>
        </div>

        {/* Mobile Menu */}
        {mobileMenuOpen && (
          <div className="lg:hidden bg-gray-900 border-t border-gray-700">
            <div className="py-4 space-y-1">
              {mainNavigationItems.map((item) => (
                <Link
                  key={item.href}
                  to={item.href}
                  className="block px-4 py-2 text-white hover:bg-gray-800 font-medium"
                  onClick={() => setMobileMenuOpen(false)}
                >
                  {item.label}
                </Link>
              ))}
              <div className="px-4 pt-2">
                <Button asChild className="w-full bg-sky-600 hover:bg-sky-700">
                  <Link to="/contact" onClick={() => setMobileMenuOpen(false)}>
                    Get in Touch
                  </Link>
                </Button>
              </div>
            </div>
          </div>
        )}
      </nav>
    </header>
  );
}

import { Link } from 'react-router-dom';
import { MapPin, Phone, Mail, Linkedin, Twitter, Facebook, Youtube } from 'lucide-react';
import { companyInfo, navigationItems } from '@/data/company';
import { socialMedia } from '@/data/contact';

const iconMap = {
  Linkedin,
  Twitter,
  Facebook,
  Youtube,
};

export function Footer() {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="bg-gray-900 text-gray-300">
      <div className="container-custom py-12">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 mb-8">
          {/* Company Info */}
          <div>
            <div className="flex items-center space-x-3 mb-4">
              <div className="w-10 h-10 bg-gradient-to-br from-sky-600 to-blue-700 rounded-lg flex items-center justify-center">
                <span className="text-white font-bold text-xl">T</span>
              </div>
              <span className="font-display font-bold text-xl text-white">
                {companyInfo.name}
              </span>
            </div>
            <p className="text-sm text-gray-400 mb-4">
              {companyInfo.tagline}
            </p>
            <div className="space-y-2 text-sm">
              <div className="flex items-start space-x-2">
                <MapPin className="h-4 w-4 mt-0.5 flex-shrink-0" />
                <span>{companyInfo.headquarters}</span>
              </div>
              <div className="flex items-center space-x-2">
                <Phone className="h-4 w-4 flex-shrink-0" />
                <span>+1 (604) 555-0100</span>
              </div>
              <div className="flex items-center space-x-2">
                <Mail className="h-4 w-4 flex-shrink-0" />
                <span>info@terramin.com</span>
              </div>
            </div>
          </div>

          {/* Quick Links */}
          <div>
            <h3 className="font-semibold text-white mb-4">Quick Links</h3>
            <ul className="space-y-2 text-sm">
              {navigationItems.slice(0, 4).map((item) => (
                <li key={item.href}>
                  <Link
                    to={item.href}
                    className="hover:text-sky-400 transition-colors"
                  >
                    {item.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Resources */}
          <div>
            <h3 className="font-semibold text-white mb-4">Resources</h3>
            <ul className="space-y-2 text-sm">
              <li>
                <Link to="/investors" className="hover:text-sky-400 transition-colors">
                  Annual Reports
                </Link>
              </li>
              <li>
                <Link to="/sustainability" className="hover:text-sky-400 transition-colors">
                  Sustainability Report
                </Link>
              </li>
              <li>
                <Link to="/news" className="hover:text-sky-400 transition-colors">
                  Press Releases
                </Link>
              </li>
              <li>
                <Link to="/contact" className="hover:text-sky-400 transition-colors">
                  Media Kit
                </Link>
              </li>
            </ul>
          </div>

          {/* Connect */}
          <div>
            <h3 className="font-semibold text-white mb-4">Connect With Us</h3>
            <p className="text-sm text-gray-400 mb-4">
              Follow our journey towards sustainable mining excellence.
            </p>
            <div className="flex space-x-3">
              {socialMedia.map((social) => {
                const Icon = iconMap[social.icon as keyof typeof iconMap];
                return (
                  <a
                    key={social.platform}
                    href={social.url}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="w-9 h-9 rounded-full bg-gray-800 hover:bg-sky-600 flex items-center justify-center transition-colors"
                    aria-label={social.platform}
                  >
                    <Icon className="h-4 w-4" />
                  </a>
                );
              })}
            </div>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="border-t border-gray-800 pt-8 flex flex-col md:flex-row justify-between items-center space-y-4 md:space-y-0">
          <p className="text-sm text-gray-400">
            © {currentYear} {companyInfo.name}. All rights reserved.
          </p>
          <div className="flex space-x-6 text-sm">
            <Link to="/privacy" className="hover:text-sky-400 transition-colors">
              Privacy Policy
            </Link>
            <Link to="/terms" className="hover:text-sky-400 transition-colors">
              Terms of Service
            </Link>
            <Link to="/cookies" className="hover:text-sky-400 transition-colors">
              Cookie Policy
            </Link>
          </div>
        </div>
      </div>
    </footer>
  );
}

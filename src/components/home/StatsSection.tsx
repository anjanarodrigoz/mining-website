import { companyStats } from '@/data/company';
import { TrendingUp, MapPin, DollarSign, Users, Shield, Heart } from 'lucide-react';

const iconMap = {
  'Years of Experience': TrendingUp,
  'Active Operations': MapPin,
  'Annual Production': DollarSign,
  'Team Members': Users,
  'Safety Record': Shield,
  'Community Investment': Heart,
};

export function StatsSection() {
  return (
    <section className="py-20 bg-gradient-to-br from-gray-50 to-gray-100">
      <div className="container-custom">
        <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-8">
          {companyStats.map((stat, index) => {
            const Icon = iconMap[stat.label as keyof typeof iconMap] || TrendingUp;
            return (
              <div
                key={stat.label}
                className="text-center animate-fade-in-up"
                style={{ animationDelay: `${index * 0.1}s` }}
              >
                <div className="inline-flex items-center justify-center w-12 h-12 rounded-full bg-sky-100 text-sky-600 mb-4">
                  <Icon className="h-6 w-6" />
                </div>
                <div className="text-3xl md:text-4xl font-bold text-gray-900 mb-2">
                  {stat.value}
                </div>
                <div className="text-sm font-medium text-gray-600 mb-1">
                  {stat.label}
                </div>
                <div className="text-xs text-gray-500">
                  {stat.description}
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}

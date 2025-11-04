import { Link } from 'react-router-dom';
import { ArrowRight, Shield, Leaf, Users, Eye, Lightbulb, Award } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { Card, CardContent } from '@/components/ui/card';
import { companyInfo, coreValues } from '@/data/company';

const iconMap = {
  Shield,
  Leaf,
  Users,
  Eye,
  Lightbulb,
  Award,
};

export function AboutPreview() {
  return (
    <section className="py-20">
      <div className="container-custom">
        {/* Section Header */}
        <div className="max-w-3xl mb-16">
          <h2 className="text-4xl md:text-5xl font-display font-bold text-gray-900 mb-6">
            Who We Are
          </h2>
          <p className="text-lg text-gray-600 leading-relaxed">
            {companyInfo.description}
          </p>
        </div>

        {/* Core Values Grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6 mb-12">
          {coreValues.map((value, index) => {
            const Icon = iconMap[value.icon as keyof typeof iconMap];
            return (
              <Card
                key={value.title}
                className="border-2 hover:border-sky-600 transition-all duration-300 hover:shadow-lg animate-fade-in-up"
                style={{ animationDelay: `${index * 0.1}s` }}
              >
                <CardContent className="p-6">
                  <div className="inline-flex items-center justify-center w-12 h-12 rounded-full bg-sky-100 text-sky-600 mb-4">
                    <Icon className="h-6 w-6" />
                  </div>
                  <h3 className="text-xl font-semibold text-gray-900 mb-3">
                    {value.title}
                  </h3>
                  <p className="text-gray-600">
                    {value.description}
                  </p>
                </CardContent>
              </Card>
            );
          })}
        </div>

        {/* CTA */}
        <div className="text-center">
          <Button asChild size="lg">
            <Link to="/about">
              Learn More About Us
              <ArrowRight className="ml-2 h-5 w-5" />
            </Link>
          </Button>
        </div>
      </div>
    </section>
  );
}

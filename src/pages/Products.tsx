import { useState } from 'react';
import { Link } from 'react-router-dom';
import { ArrowRight, CheckCircle } from 'lucide-react';
import { Card, CardContent } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Badge } from '@/components/ui/badge';
import { products, productCategories } from '@/data/products';

export function Products() {
  const [selectedCategory, setSelectedCategory] = useState('all');

  const filteredProducts =
    selectedCategory === 'all'
      ? products
      : products.filter((p) => p.category === selectedCategory);

  return (
    <div className="pt-20">
      {/* Hero Section */}
      <section className="relative py-24 bg-gradient-to-br from-gray-900 to-gray-800 overflow-hidden">
        <div className="absolute inset-0">
          <img
            src="https://images.unsplash.com/photo-1611348524140-53c9a25263d6?w=1920&h=600&fit=crop"
            alt="Mining products"
            className="w-full h-full object-cover opacity-20"
          />
        </div>
        <div className="relative z-10 container-custom text-white">
          <h1 className="text-5xl md:text-6xl font-display font-bold mb-6">
            Our Products
          </h1>
          <p className="text-xl text-gray-200 max-w-3xl">
            Premium quality minerals and concentrates from our world-class operations.
            We deliver consistent quality products that meet international standards.
          </p>
        </div>
      </section>

      {/* Category Filter */}
      <section className="py-8 bg-gray-50 border-b sticky top-20 z-10">
        <div className="container-custom">
          <div className="flex flex-wrap gap-3">
            {productCategories.map((category) => (
              <Button
                key={category.value}
                variant={selectedCategory === category.value ? 'default' : 'outline'}
                onClick={() => setSelectedCategory(category.value)}
                className="capitalize"
              >
                {category.label}
              </Button>
            ))}
          </div>
        </div>
      </section>

      {/* Products Grid */}
      <section className="py-20">
        <div className="container-custom">
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {filteredProducts.map((product, index) => (
              <Card
                key={product.id}
                className="overflow-hidden hover:shadow-2xl transition-all duration-300 group animate-fade-in-up"
                style={{ animationDelay: `${index * 0.05}s` }}
              >
                <div className="relative h-64 overflow-hidden">
                  <img
                    src={product.image}
                    alt={product.name}
                    className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500"
                  />
                  <div className="absolute top-4 right-4">
                    {product.available ? (
                      <Badge variant="success" className="shadow-lg">
                        <CheckCircle className="h-3 w-3 mr-1" />
                        Available
                      </Badge>
                    ) : (
                      <Badge variant="secondary" className="shadow-lg">
                        Contact Us
                      </Badge>
                    )}
                  </div>
                  <div className="absolute top-4 left-4">
                    <Badge variant="outline" className="bg-white/90 backdrop-blur-sm capitalize shadow-lg">
                      {product.category}
                    </Badge>
                  </div>
                </div>
                <CardContent className="p-6">
                  <h3 className="text-2xl font-semibold text-gray-900 mb-2 group-hover:text-sky-600 transition-colors">
                    {product.name}
                  </h3>
                  {product.grade && (
                    <p className="text-sm font-medium text-sky-600 mb-3">
                      {product.grade} • {product.purity}
                    </p>
                  )}
                  <p className="text-gray-600 mb-4 line-clamp-3">
                    {product.description}
                  </p>

                  {/* Key Specifications */}
                  <div className="mb-4 pb-4 border-b">
                    <h4 className="text-sm font-semibold text-gray-700 mb-2">
                      Key Specifications
                    </h4>
                    <div className="space-y-1">
                      {product.specifications.slice(0, 3).map((spec, idx) => (
                        <div key={idx} className="flex justify-between text-sm">
                          <span className="text-gray-600">{spec.label}:</span>
                          <span className="font-medium text-gray-900">{spec.value}</span>
                        </div>
                      ))}
                    </div>
                  </div>

                  {/* Applications Preview */}
                  {product.applications && product.applications.length > 0 && (
                    <div className="mb-4">
                      <h4 className="text-sm font-semibold text-gray-700 mb-2">
                        Applications
                      </h4>
                      <div className="flex flex-wrap gap-1">
                        {product.applications.slice(0, 3).map((app, idx) => (
                          <Badge key={idx} variant="secondary" className="text-xs">
                            {app}
                          </Badge>
                        ))}
                        {product.applications.length > 3 && (
                          <Badge variant="outline" className="text-xs">
                            +{product.applications.length - 3} more
                          </Badge>
                        )}
                      </div>
                    </div>
                  )}

                  <Button asChild className="w-full" size="lg">
                    <Link to={`/products/${product.id}`}>
                      View Details
                      <ArrowRight className="ml-2 h-5 w-5" />
                    </Link>
                  </Button>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-16 bg-gradient-to-br from-sky-900 to-blue-900">
        <div className="container-custom text-center text-white">
          <h2 className="text-3xl md:text-4xl font-display font-bold mb-4">
            Need Custom Specifications?
          </h2>
          <p className="text-xl text-gray-200 mb-8 max-w-2xl mx-auto">
            We can customize our products to meet your specific requirements.
            Contact our sales team to discuss your needs.
          </p>
          <Button
            asChild
            size="lg"
            className="bg-white text-sky-900 hover:bg-gray-100"
          >
            <Link to="/contact">Contact Sales Team</Link>
          </Button>
        </div>
      </section>
    </div>
  );
}

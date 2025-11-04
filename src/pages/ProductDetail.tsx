import { useParams, Link } from 'react-router-dom';
import { ArrowLeft, CheckCircle, Package, Truck, FileText } from 'lucide-react';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Badge } from '@/components/ui/badge';
import { getProductById } from '@/data/products';

export function ProductDetail() {
  const { id } = useParams<{ id: string }>();
  const product = id ? getProductById(id) : null;

  if (!product) {
    return (
      <div className="pt-20 min-h-screen flex items-center justify-center">
        <div className="text-center">
          <h1 className="text-4xl font-bold text-gray-900 mb-4">Product Not Found</h1>
          <Button asChild>
            <Link to="/products">
              <ArrowLeft className="mr-2 h-5 w-5" />
              Back to Products
            </Link>
          </Button>
        </div>
      </div>
    );
  }

  return (
    <div className="pt-20">
      {/* Breadcrumb */}
      <section className="py-6 bg-gray-50 border-b">
        <div className="container-custom">
          <div className="flex items-center space-x-2 text-sm">
            <Link to="/" className="text-gray-600 hover:text-sky-600">
              Home
            </Link>
            <span className="text-gray-400">/</span>
            <Link to="/products" className="text-gray-600 hover:text-sky-600">
              Products
            </Link>
            <span className="text-gray-400">/</span>
            <span className="text-gray-900 font-medium">{product.name}</span>
          </div>
        </div>
      </section>

      {/* Product Header */}
      <section className="py-12">
        <div className="container-custom">
          <div className="grid lg:grid-cols-2 gap-12">
            {/* Product Image */}
            <div>
              <div className="relative rounded-2xl overflow-hidden shadow-2xl mb-4">
                <img
                  src={product.image}
                  alt={product.name}
                  className="w-full h-96 object-cover"
                />
                <div className="absolute top-6 right-6">
                  {product.available ? (
                    <Badge variant="success" className="shadow-lg text-base px-4 py-2">
                      <CheckCircle className="h-4 w-4 mr-2" />
                      Available Now
                    </Badge>
                  ) : (
                    <Badge variant="secondary" className="shadow-lg text-base px-4 py-2">
                      Contact for Availability
                    </Badge>
                  )}
                </div>
              </div>
              {/* Gallery */}
              {product.gallery && product.gallery.length > 1 && (
                <div className="grid grid-cols-4 gap-4">
                  {product.gallery.map((img, idx) => (
                    <div
                      key={idx}
                      className="rounded-lg overflow-hidden shadow-md cursor-pointer hover:shadow-xl transition-shadow"
                    >
                      <img
                        src={img}
                        alt={`${product.name} ${idx + 1}`}
                        className="w-full h-24 object-cover"
                      />
                    </div>
                  ))}
                </div>
              )}
            </div>

            {/* Product Info */}
            <div>
              <Badge variant="outline" className="mb-4 capitalize">
                {product.category}
              </Badge>
              <h1 className="text-4xl md:text-5xl font-display font-bold text-gray-900 mb-4">
                {product.name}
              </h1>
              {product.grade && (
                <div className="flex items-center gap-4 mb-6">
                  <Badge variant="default" className="text-base px-4 py-2">
                    {product.grade}
                  </Badge>
                  <span className="text-xl font-semibold text-sky-600">
                    {product.purity}
                  </span>
                </div>
              )}
              <p className="text-lg text-gray-700 mb-6 leading-relaxed">
                {product.detailedDescription}
              </p>

              {/* Quick Info */}
              <div className="grid grid-cols-2 gap-4 mb-8">
                {product.packaging && (
                  <Card>
                    <CardContent className="p-4 flex items-start space-x-3">
                      <Package className="h-6 w-6 text-sky-600 mt-1" />
                      <div>
                        <div className="font-semibold text-gray-900 mb-1">Packaging</div>
                        <div className="text-sm text-gray-600">{product.packaging}</div>
                      </div>
                    </CardContent>
                  </Card>
                )}
                {product.minimumOrder && (
                  <Card>
                    <CardContent className="p-4 flex items-start space-x-3">
                      <Truck className="h-6 w-6 text-sky-600 mt-1" />
                      <div>
                        <div className="font-semibold text-gray-900 mb-1">Minimum Order</div>
                        <div className="text-sm text-gray-600">{product.minimumOrder}</div>
                      </div>
                    </CardContent>
                  </Card>
                )}
              </div>

              {/* CTA Buttons */}
              <div className="flex flex-col sm:flex-row gap-4">
                <Button asChild size="lg" className="flex-1">
                  <Link to="/contact">Request Quote</Link>
                </Button>
                <Button asChild size="lg" variant="outline" className="flex-1">
                  <Link to="/contact">
                    <FileText className="mr-2 h-5 w-5" />
                    Download Specs
                  </Link>
                </Button>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Detailed Information */}
      <section className="py-12 bg-gray-50">
        <div className="container-custom">
          <div className="grid lg:grid-cols-2 gap-8">
            {/* Specifications */}
            <Card>
              <CardHeader>
                <CardTitle className="text-2xl">Technical Specifications</CardTitle>
              </CardHeader>
              <CardContent>
                <div className="space-y-4">
                  {product.specifications.map((spec, idx) => (
                    <div
                      key={idx}
                      className="flex justify-between items-start pb-4 border-b last:border-b-0"
                    >
                      <span className="font-medium text-gray-700">{spec.label}</span>
                      <span className="text-gray-900 font-semibold text-right">
                        {spec.value}
                      </span>
                    </div>
                  ))}
                </div>
              </CardContent>
            </Card>

            {/* Applications */}
            <Card>
              <CardHeader>
                <CardTitle className="text-2xl">Applications & Uses</CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-gray-600 mb-4">
                  This product is ideal for the following industrial applications:
                </p>
                <ul className="space-y-3">
                  {product.applications.map((app, idx) => (
                    <li key={idx} className="flex items-start">
                      <CheckCircle className="h-5 w-5 text-green-600 mr-3 mt-0.5 flex-shrink-0" />
                      <span className="text-gray-700">{app}</span>
                    </li>
                  ))}
                </ul>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* Quality Assurance */}
      <section className="py-16">
        <div className="container-custom">
          <Card className="bg-gradient-to-br from-sky-50 to-blue-50 border-sky-200">
            <CardContent className="p-8 md:p-12">
              <div className="flex flex-col md:flex-row items-center gap-8">
                <div className="flex-1">
                  <h2 className="text-3xl font-display font-bold text-gray-900 mb-4">
                    Quality Assurance
                  </h2>
                  <p className="text-lg text-gray-700 mb-4">
                    All our products undergo rigorous quality control testing and comply with
                    international standards. Each shipment is accompanied by detailed
                    certificates of analysis.
                  </p>
                  <ul className="space-y-2">
                    <li className="flex items-center text-gray-700">
                      <CheckCircle className="h-5 w-5 text-green-600 mr-2" />
                      ISO 9001:2015 Certified
                    </li>
                    <li className="flex items-center text-gray-700">
                      <CheckCircle className="h-5 w-5 text-green-600 mr-2" />
                      Third-party laboratory verification
                    </li>
                    <li className="flex items-center text-gray-700">
                      <CheckCircle className="h-5 w-5 text-green-600 mr-2" />
                      Complete traceability from mine to shipment
                    </li>
                  </ul>
                </div>
                <div className="flex-shrink-0">
                  <Button asChild size="lg" className="text-lg px-8 py-6">
                    <Link to="/contact">Contact Our Team</Link>
                  </Button>
                </div>
              </div>
            </CardContent>
          </Card>
        </div>
      </section>

      {/* Back to Products */}
      <section className="py-8 border-t">
        <div className="container-custom">
          <Button asChild variant="outline">
            <Link to="/products">
              <ArrowLeft className="mr-2 h-5 w-5" />
              Back to All Products
            </Link>
          </Button>
        </div>
      </section>
    </div>
  );
}

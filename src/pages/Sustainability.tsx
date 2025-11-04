import { TrendingUp, TrendingDown } from 'lucide-react';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import {
  sustainabilityMetrics,
  communityInitiatives,
  environmentalCommitments,
} from '@/data/sustainability';

export function Sustainability() {
  return (
    <div className="pt-20">
      {/* Hero Section */}
      <section className="relative py-24 bg-gradient-to-br from-green-900 to-emerald-900">
        <div className="container-custom text-white">
          <h1 className="text-5xl md:text-6xl font-display font-bold mb-6">
            Sustainability
          </h1>
          <p className="text-xl text-gray-200 max-w-3xl">
            We are committed to responsible mining practices that protect the environment, support communities, and ensure the safety of our people.
          </p>
        </div>
      </section>

      {/* Sustainability Metrics */}
      <section id="environment" className="py-20">
        <div className="container-custom">
          <h2 className="text-4xl font-display font-bold text-gray-900 mb-4">
            Our Environmental Impact
          </h2>
          <p className="text-lg text-gray-600 mb-12 max-w-3xl">
            We measure and report our environmental performance transparently, driving continuous improvement across all operations.
          </p>
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {sustainabilityMetrics.map((metric, index) => (
              <Card
                key={metric.id}
                className="hover:shadow-lg transition-all duration-300 animate-fade-in-up"
                style={{ animationDelay: `${index * 0.1}s` }}
              >
                <CardContent className="p-6">
                  <div className="flex items-start justify-between mb-4">
                    <div className="text-5xl">
                      {metric.icon === 'Droplets' && '💧'}
                      {metric.icon === 'Zap' && '⚡'}
                      {metric.icon === 'CloudOff' && '☁️'}
                      {metric.icon === 'Trees' && '🌲'}
                      {metric.icon === 'Users' && '👥'}
                      {metric.icon === 'Heart' && '❤️'}
                    </div>
                    {metric.trend && (
                      <Badge variant={metric.trend === 'up' ? 'success' : metric.trend === 'down' ? 'destructive' : 'secondary'}>
                        {metric.trend === 'up' ? (
                          <TrendingUp className="h-3 w-3 mr-1" />
                        ) : metric.trend === 'down' ? (
                          <TrendingDown className="h-3 w-3 mr-1" />
                        ) : null}
                        {metric.changePercent && `${metric.changePercent}%`}
                      </Badge>
                    )}
                  </div>
                  <div className="text-4xl font-bold text-gray-900 mb-2">
                    {metric.value}
                    {metric.unit && <span className="text-2xl text-gray-600 ml-1">{metric.unit}</span>}
                  </div>
                  <h3 className="text-lg font-semibold text-gray-900 mb-2">
                    {metric.title}
                  </h3>
                  <p className="text-gray-600 text-sm">
                    {metric.description}
                  </p>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Environmental Commitments */}
      <section className="py-20 bg-gray-50">
        <div className="container-custom">
          <h2 className="text-4xl font-display font-bold text-gray-900 mb-12">
            Environmental Commitments
          </h2>
          <div className="grid md:grid-cols-2 gap-8">
            {environmentalCommitments.map((commitment, index) => (
              <Card
                key={commitment.title}
                className="animate-fade-in-up"
                style={{ animationDelay: `${index * 0.1}s` }}
              >
                <CardHeader>
                  <CardTitle>{commitment.title}</CardTitle>
                </CardHeader>
                <CardContent>
                  <p className="text-gray-600 mb-4">
                    {commitment.description}
                  </p>
                  <div className="space-y-2">
                    <div className="flex items-center justify-between text-sm">
                      <span className="text-gray-600">Progress</span>
                      <span className="font-semibold">{commitment.progress}%</span>
                    </div>
                    <div className="w-full bg-gray-200 rounded-full h-3">
                      <div
                        className="bg-green-600 h-3 rounded-full transition-all duration-500"
                        style={{ width: `${commitment.progress}%` }}
                      />
                    </div>
                    <div className="text-sm text-gray-500">
                      Target: {commitment.target}
                    </div>
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Community Initiatives */}
      <section id="community" className="py-20">
        <div className="container-custom">
          <h2 className="text-4xl font-display font-bold text-gray-900 mb-4">
            Community Engagement
          </h2>
          <p className="text-lg text-gray-600 mb-12 max-w-3xl">
            We invest in the communities where we operate, creating lasting positive impact through education, healthcare, and economic development.
          </p>
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {communityInitiatives.map((initiative, index) => (
              <Card
                key={initiative.id}
                className="overflow-hidden hover:shadow-xl transition-all duration-300 group animate-fade-in-up"
                style={{ animationDelay: `${index * 0.1}s` }}
              >
                <div className="relative h-48 overflow-hidden">
                  <img
                    src={initiative.image}
                    alt={initiative.title}
                    className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500"
                  />
                  <div className="absolute top-4 right-4">
                    <Badge variant="outline" className="bg-white/90 backdrop-blur-sm capitalize">
                      {initiative.category}
                    </Badge>
                  </div>
                </div>
                <CardContent className="p-6">
                  <h3 className="text-xl font-semibold text-gray-900 mb-2 group-hover:text-green-600 transition-colors">
                    {initiative.title}
                  </h3>
                  <p className="text-sm text-gray-500 mb-3">
                    {initiative.location} • Since {initiative.startDate}
                  </p>
                  <p className="text-gray-600 mb-4">
                    {initiative.description}
                  </p>
                  <div className="pt-4 border-t">
                    <div className="text-sm font-semibold text-gray-700 mb-1">
                      Impact
                    </div>
                    <p className="text-sm text-green-600 font-medium">
                      {initiative.impact}
                    </p>
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Safety Section */}
      <section id="safety" className="py-20 bg-gradient-to-br from-sky-900 to-blue-900 text-white">
        <div className="container-custom">
          <h2 className="text-4xl font-display font-bold mb-6">
            Safety: Our Top Priority
          </h2>
          <p className="text-xl text-gray-200 mb-12 max-w-3xl">
            We maintain world-class safety standards across all operations, with continuous training and investment in safety technology.
          </p>
          <div className="grid md:grid-cols-4 gap-8">
            <Card className="bg-white/10 backdrop-blur-sm border-white/20 text-white">
              <CardContent className="p-6 text-center">
                <div className="text-4xl font-bold mb-2">0.42</div>
                <div className="text-sm">LTIFR (2024)</div>
              </CardContent>
            </Card>
            <Card className="bg-white/10 backdrop-blur-sm border-white/20 text-white">
              <CardContent className="p-6 text-center">
                <div className="text-4xl font-bold mb-2">1.85</div>
                <div className="text-sm">TRIFR (2024)</div>
              </CardContent>
            </Card>
            <Card className="bg-white/10 backdrop-blur-sm border-white/20 text-white">
              <CardContent className="p-6 text-center">
                <div className="text-4xl font-bold mb-2">156K</div>
                <div className="text-sm">Training Hours (2024)</div>
              </CardContent>
            </Card>
            <Card className="bg-white/10 backdrop-blur-sm border-white/20 text-white">
              <CardContent className="p-6 text-center">
                <div className="text-4xl font-bold mb-2">0</div>
                <div className="text-sm">Fatalities (2024)</div>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>
    </div>
  );
}

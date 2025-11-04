import { TrendingUp, PieChart, Leaf, Target, Download, FileText } from 'lucide-react';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import { Button } from '@/components/ui/button';
import { financialData, documents, investorHighlights, shareholderInfo } from '@/data/investors';
import { formatCurrency, formatNumber } from '@/lib/utils';

const iconMap = {
  TrendingUp,
  PieChart,
  Leaf,
  Target,
};

export function Investors() {
  const latestFinancials = financialData[0];

  return (
    <div className="pt-20">
      {/* Hero Section */}
      <section className="relative py-24 bg-gradient-to-br from-sky-900 to-blue-900">
        <div className="container-custom text-white">
          <h1 className="text-5xl md:text-6xl font-display font-bold mb-6">
            Investor Relations
          </h1>
          <p className="text-xl text-gray-200 max-w-3xl">
            Delivering sustainable value to shareholders through operational excellence and responsible growth.
          </p>
        </div>
      </section>

      {/* Shareholder Info */}
      <section className="py-12 bg-white border-b">
        <div className="container-custom">
          <div className="grid grid-cols-2 md:grid-cols-6 gap-6">
            <div>
              <div className="text-sm text-gray-500 mb-1">Stock Symbol</div>
              <div className="text-2xl font-bold text-gray-900">{shareholderInfo.stockSymbol}</div>
            </div>
            <div>
              <div className="text-sm text-gray-500 mb-1">Exchange</div>
              <div className="text-2xl font-bold text-gray-900">{shareholderInfo.exchange}</div>
            </div>
            <div>
              <div className="text-sm text-gray-500 mb-1">Current Price</div>
              <div className="text-2xl font-bold text-green-600">${shareholderInfo.currentPrice}</div>
            </div>
            <div>
              <div className="text-sm text-gray-500 mb-1">Market Cap</div>
              <div className="text-2xl font-bold text-gray-900">${shareholderInfo.marketCap}</div>
            </div>
            <div>
              <div className="text-sm text-gray-500 mb-1">Dividend Yield</div>
              <div className="text-2xl font-bold text-gray-900">{shareholderInfo.dividendYield}</div>
            </div>
            <div>
              <div className="text-sm text-gray-500 mb-1">P/E Ratio</div>
              <div className="text-2xl font-bold text-gray-900">{shareholderInfo.peRatio}</div>
            </div>
          </div>
        </div>
      </section>

      {/* Financial Highlights */}
      <section className="py-20">
        <div className="container-custom">
          <h2 className="text-4xl font-display font-bold text-gray-900 mb-12">
            Financial Highlights ({latestFinancials.year})
          </h2>
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6 mb-12">
            <Card>
              <CardContent className="p-6">
                <div className="text-sm text-gray-500 mb-2">Revenue</div>
                <div className="text-3xl font-bold text-gray-900">
                  {formatCurrency(latestFinancials.revenue)}
                </div>
              </CardContent>
            </Card>
            <Card>
              <CardContent className="p-6">
                <div className="text-sm text-gray-500 mb-2">EBITDA</div>
                <div className="text-3xl font-bold text-gray-900">
                  {formatCurrency(latestFinancials.ebitda)}
                </div>
              </CardContent>
            </Card>
            <Card>
              <CardContent className="p-6">
                <div className="text-sm text-gray-500 mb-2">Net Income</div>
                <div className="text-3xl font-bold text-green-600">
                  {formatCurrency(latestFinancials.netIncome)}
                </div>
              </CardContent>
            </Card>
            <Card>
              <CardContent className="p-6">
                <div className="text-sm text-gray-500 mb-2">Total Assets</div>
                <div className="text-3xl font-bold text-gray-900">
                  {formatCurrency(latestFinancials.totalAssets)}
                </div>
              </CardContent>
            </Card>
          </div>

          {/* Production Data */}
          <Card>
            <CardHeader>
              <CardTitle>Production Overview ({latestFinancials.year})</CardTitle>
            </CardHeader>
            <CardContent>
              <div className="grid md:grid-cols-3 gap-6">
                {latestFinancials.production.map((item) => (
                  <div key={item.mineral} className="text-center p-4 bg-gray-50 rounded-lg">
                    <div className="text-sm text-gray-500 mb-2">{item.mineral}</div>
                    <div className="text-2xl font-bold text-gray-900">
                      {formatNumber(item.volume)}
                    </div>
                    <div className="text-sm text-gray-600">{item.unit}</div>
                  </div>
                ))}
              </div>
            </CardContent>
          </Card>
        </div>
      </section>

      {/* Investment Highlights */}
      <section className="py-20 bg-gray-50">
        <div className="container-custom">
          <h2 className="text-4xl font-display font-bold text-gray-900 mb-12">
            Why Invest in TerraMin
          </h2>
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            {investorHighlights.map((highlight, index) => {
              const Icon = iconMap[highlight.icon as keyof typeof iconMap];
              return (
                <Card
                  key={highlight.title}
                  className="text-center animate-fade-in-up"
                  style={{ animationDelay: `${index * 0.1}s` }}
                >
                  <CardContent className="p-6">
                    <div className="inline-flex items-center justify-center w-12 h-12 rounded-full bg-sky-100 text-sky-600 mb-4">
                      <Icon className="h-6 w-6" />
                    </div>
                    <h3 className="text-lg font-semibold text-gray-900 mb-2">
                      {highlight.title}
                    </h3>
                    <p className="text-gray-600 text-sm">
                      {highlight.description}
                    </p>
                  </CardContent>
                </Card>
              );
            })}
          </div>
        </div>
      </section>

      {/* Reports & Documents */}
      <section id="reports" className="py-20">
        <div className="container-custom">
          <h2 className="text-4xl font-display font-bold text-gray-900 mb-12">
            Reports & Presentations
          </h2>
          <div className="grid md:grid-cols-2 gap-6">
            {documents.map((doc, index) => (
              <Card
                key={doc.id}
                className="hover:shadow-lg transition-all duration-300 animate-fade-in-up"
                style={{ animationDelay: `${index * 0.05}s` }}
              >
                <CardContent className="p-6 flex items-start gap-4">
                  <div className="flex-shrink-0 w-12 h-12 rounded-lg bg-sky-100 flex items-center justify-center">
                    <FileText className="h-6 w-6 text-sky-600" />
                  </div>
                  <div className="flex-grow">
                    <div className="flex items-start justify-between mb-2">
                      <h3 className="text-lg font-semibold text-gray-900">
                        {doc.title}
                      </h3>
                      <Badge variant="outline" className="ml-2">
                        {doc.type.replace('-', ' ')}
                      </Badge>
                    </div>
                    <p className="text-gray-600 text-sm mb-3">
                      {doc.description}
                    </p>
                    <div className="flex items-center justify-between">
                      <div className="text-sm text-gray-500">
                        {doc.date} • {doc.fileSize}
                      </div>
                      <Button size="sm" variant="outline">
                        <Download className="h-4 w-4 mr-2" />
                        Download
                      </Button>
                    </div>
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Corporate Governance */}
      <section id="governance" className="py-20 bg-gray-50">
        <div className="container-custom">
          <h2 className="text-4xl font-display font-bold text-gray-900 mb-6">
            Corporate Governance
          </h2>
          <p className="text-lg text-gray-600 mb-8 max-w-3xl">
            We maintain the highest standards of corporate governance, transparency, and ethical business practices.
          </p>
          <div className="grid md:grid-cols-3 gap-6">
            <Card>
              <CardHeader>
                <CardTitle>Board of Directors</CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-gray-600 mb-4">
                  Our independent board provides strategic oversight and ensures accountability to shareholders.
                </p>
                <Button variant="outline" size="sm">Learn More</Button>
              </CardContent>
            </Card>
            <Card>
              <CardHeader>
                <CardTitle>Governance Policies</CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-gray-600 mb-4">
                  Comprehensive policies governing board operations, ethics, and compliance.
                </p>
                <Button variant="outline" size="sm">View Policies</Button>
              </CardContent>
            </Card>
            <Card>
              <CardHeader>
                <CardTitle>Shareholder Rights</CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-gray-600 mb-4">
                  We protect and respect the rights of all shareholders in accordance with best practices.
                </p>
                <Button variant="outline" size="sm">Learn More</Button>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>
    </div>
  );
}

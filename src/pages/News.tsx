import { useState } from 'react';
import { Link } from 'react-router-dom';
import { Calendar, Tag, ArrowRight } from 'lucide-react';
import { Card, CardContent } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import { Button } from '@/components/ui/button';
import { newsArticles } from '@/data/news';
import { formatDate } from '@/lib/utils';
import type { NewsArticle } from '@/types';

const categories: NewsArticle['category'][] = [
  'press-release',
  'industry-news',
  'company-update',
  'sustainability',
];

export function News() {
  const [filter, setFilter] = useState<NewsArticle['category'] | 'all'>('all');

  const filteredArticles = filter === 'all'
    ? newsArticles
    : newsArticles.filter(article => article.category === filter);

  const featuredArticle = newsArticles.find(a => a.featured);

  return (
    <div className="pt-20">
      {/* Hero Section */}
      <section className="relative py-24 bg-gradient-to-br from-sky-900 to-blue-900">
        <div className="container-custom text-white">
          <h1 className="text-5xl md:text-6xl font-display font-bold mb-6">
            News & Media
          </h1>
          <p className="text-xl text-gray-200 max-w-3xl">
            Stay informed about our latest developments, achievements, and industry insights.
          </p>
        </div>
      </section>

      {/* Featured Article */}
      {featuredArticle && (
        <section className="py-12 bg-white border-b">
          <div className="container-custom">
            <div className="bg-gradient-to-br from-gray-50 to-gray-100 rounded-2xl overflow-hidden">
              <div className="grid md:grid-cols-2 gap-8 items-center">
                {featuredArticle.image && (
                  <div className="relative h-96 md:h-full">
                    <img
                      src={featuredArticle.image}
                      alt={featuredArticle.title}
                      className="w-full h-full object-cover"
                    />
                  </div>
                )}
                <div className="p-8 md:p-12">
                  <Badge className="mb-4">Featured Story</Badge>
                  <h2 className="text-3xl md:text-4xl font-display font-bold text-gray-900 mb-4">
                    {featuredArticle.title}
                  </h2>
                  <div className="flex items-center gap-4 mb-4 text-gray-600">
                    <div className="flex items-center">
                      <Calendar className="h-4 w-4 mr-2" />
                      {formatDate(featuredArticle.date)}
                    </div>
                    <div className="flex items-center">
                      <Tag className="h-4 w-4 mr-2" />
                      {featuredArticle.category.replace('-', ' ')}
                    </div>
                  </div>
                  <p className="text-lg text-gray-600 mb-6">
                    {featuredArticle.excerpt}
                  </p>
                  <Button asChild size="lg">
                    <Link to={`/news/${featuredArticle.id}`}>
                      Read Full Story
                      <ArrowRight className="ml-2 h-5 w-5" />
                    </Link>
                  </Button>
                </div>
              </div>
            </div>
          </div>
        </section>
      )}

      {/* Filter Buttons */}
      <section className="py-8 bg-gray-50 border-b sticky top-20 z-10">
        <div className="container-custom">
          <div className="flex flex-wrap gap-3">
            <Button
              variant={filter === 'all' ? 'default' : 'outline'}
              onClick={() => setFilter('all')}
            >
              All News
            </Button>
            {categories.map((category) => (
              <Button
                key={category}
                variant={filter === category ? 'default' : 'outline'}
                onClick={() => setFilter(category)}
                className="capitalize"
              >
                {category.replace('-', ' ')}
              </Button>
            ))}
          </div>
        </div>
      </section>

      {/* News Grid */}
      <section className="py-20">
        <div className="container-custom">
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {filteredArticles.map((article, index) => (
              <Card
                key={article.id}
                className="overflow-hidden hover:shadow-xl transition-all duration-300 group animate-fade-in-up"
                style={{ animationDelay: `${index * 0.05}s` }}
              >
                {article.image && (
                  <div className="relative h-48 overflow-hidden">
                    <img
                      src={article.image}
                      alt={article.title}
                      className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500"
                    />
                  </div>
                )}
                <CardContent className="p-6">
                  <div className="flex items-center gap-2 mb-3">
                    <Badge variant="outline" className="capitalize">
                      {article.category.replace('-', ' ')}
                    </Badge>
                    <span className="flex items-center text-sm text-gray-500">
                      <Calendar className="h-3 w-3 mr-1" />
                      {formatDate(article.date)}
                    </span>
                  </div>
                  <h3 className="text-xl font-semibold text-gray-900 mb-3 group-hover:text-sky-600 transition-colors line-clamp-2">
                    {article.title}
                  </h3>
                  <p className="text-gray-600 mb-4 line-clamp-3">
                    {article.excerpt}
                  </p>
                  {article.author && (
                    <p className="text-sm text-gray-500 mb-4">
                      By {article.author}
                    </p>
                  )}
                  <Link
                    to={`/news/${article.id}`}
                    className="text-sky-600 hover:text-sky-700 font-medium text-sm inline-flex items-center"
                  >
                    Read More
                    <ArrowRight className="ml-1 h-4 w-4" />
                  </Link>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>
    </div>
  );
}

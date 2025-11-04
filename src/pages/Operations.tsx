import { useState } from 'react';
import { MapPin, Users, Calendar, TrendingUp } from 'lucide-react';
import { Card, CardContent } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import { Button } from '@/components/ui/button';
import { projects, projectStats } from '@/data/projects';

const statusColors = {
  active: 'success',
  development: 'warning',
  exploration: 'secondary',
  closed: 'destructive',
} as const;

export function Operations() {
  const [filter, setFilter] = useState<string>('all');

  const filteredProjects = filter === 'all'
    ? projects
    : projects.filter(p => p.status === filter);

  return (
    <div className="pt-20">
      {/* Hero Section */}
      <section className="relative py-24 bg-gradient-to-br from-sky-900 to-blue-900">
        <div className="container-custom text-white">
          <h1 className="text-5xl md:text-6xl font-display font-bold mb-6">
            Our Operations
          </h1>
          <p className="text-xl text-gray-200 max-w-3xl">
            Discover our world-class mining operations across five continents, each committed to operational excellence, safety, and sustainability.
          </p>
        </div>
      </section>

      {/* Stats Overview */}
      <section className="py-12 bg-white border-b">
        <div className="container-custom">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
            <div className="text-center">
              <div className="text-4xl font-bold text-sky-600 mb-2">
                {projectStats.totalProjects}
              </div>
              <div className="text-gray-600 font-medium">Total Projects</div>
            </div>
            <div className="text-center">
              <div className="text-4xl font-bold text-green-600 mb-2">
                {projectStats.activeOperations}
              </div>
              <div className="text-gray-600 font-medium">Active Operations</div>
            </div>
            <div className="text-center">
              <div className="text-4xl font-bold text-amber-600 mb-2">
                {projectStats.inDevelopment}
              </div>
              <div className="text-gray-600 font-medium">In Development</div>
            </div>
            <div className="text-center">
              <div className="text-4xl font-bold text-gray-700 mb-2">
                {projectStats.totalEmployees.toLocaleString()}
              </div>
              <div className="text-gray-600 font-medium">Total Employees</div>
            </div>
          </div>
        </div>
      </section>

      {/* Filters */}
      <section className="py-8 bg-gray-50 border-b">
        <div className="container-custom">
          <div className="flex flex-wrap gap-3">
            <Button
              variant={filter === 'all' ? 'default' : 'outline'}
              onClick={() => setFilter('all')}
            >
              All Projects
            </Button>
            <Button
              variant={filter === 'active' ? 'default' : 'outline'}
              onClick={() => setFilter('active')}
            >
              Active
            </Button>
            <Button
              variant={filter === 'development' ? 'default' : 'outline'}
              onClick={() => setFilter('development')}
            >
              Development
            </Button>
            <Button
              variant={filter === 'exploration' ? 'default' : 'outline'}
              onClick={() => setFilter('exploration')}
            >
              Exploration
            </Button>
          </div>
        </div>
      </section>

      {/* Projects Grid */}
      <section className="py-20">
        <div className="container-custom">
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {filteredProjects.map((project, index) => (
              <Card
                key={project.id}
                className="overflow-hidden hover:shadow-xl transition-all duration-300 group animate-fade-in-up"
                style={{ animationDelay: `${index * 0.05}s` }}
              >
                <div className="relative h-48 overflow-hidden">
                  <img
                    src={project.image}
                    alt={project.name}
                    className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500"
                  />
                  <div className="absolute top-4 right-4">
                    <Badge variant={statusColors[project.status]}>
                      {project.status}
                    </Badge>
                  </div>
                  <div className="absolute top-4 left-4">
                    <Badge variant="outline" className="bg-white/90 backdrop-blur-sm">
                      {project.type}
                    </Badge>
                  </div>
                </div>
                <CardContent className="p-6">
                  <h3 className="text-xl font-semibold text-gray-900 mb-2 group-hover:text-sky-600 transition-colors">
                    {project.name}
                  </h3>
                  <div className="flex items-center text-gray-600 text-sm mb-3">
                    <MapPin className="h-4 w-4 mr-1" />
                    {project.location}
                  </div>
                  <p className="text-gray-600 mb-4">
                    {project.description}
                  </p>

                  {project.annualProduction && (
                    <div className="flex items-center text-sm text-gray-500 mb-2">
                      <TrendingUp className="h-4 w-4 mr-2 text-green-600" />
                      <span className="font-medium">Production:</span>
                      <span className="ml-1">{project.annualProduction}</span>
                    </div>
                  )}

                  <div className="flex items-center justify-between text-sm text-gray-500 mb-4">
                    {project.employees && (
                      <div className="flex items-center">
                        <Users className="h-4 w-4 mr-1" />
                        {project.employees} employees
                      </div>
                    )}
                    <div className="flex items-center">
                      <Calendar className="h-4 w-4 mr-1" />
                      Since {project.startDate}
                    </div>
                  </div>

                  <div className="flex flex-wrap gap-2 mb-4">
                    {project.minerals.map((mineral) => (
                      <Badge key={mineral} variant="outline">
                        {mineral}
                      </Badge>
                    ))}
                  </div>

                  {project.environmentalCertifications && project.environmentalCertifications.length > 0 && (
                    <div className="pt-4 border-t">
                      <div className="text-xs font-medium text-gray-500 mb-2">
                        Environmental Certifications
                      </div>
                      <div className="flex flex-wrap gap-1">
                        {project.environmentalCertifications.map((cert) => (
                          <Badge key={cert} variant="secondary" className="text-xs">
                            {cert}
                          </Badge>
                        ))}
                      </div>
                    </div>
                  )}
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>
    </div>
  );
}

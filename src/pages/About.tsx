import { Mail, Linkedin } from 'lucide-react';
import { Card, CardContent } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { companyInfo, milestones, coreValues } from '@/data/company';
import { leadershipTeam } from '@/data/team';

export function About() {
  return (
    <div className="pt-20">
      {/* Hero Section */}
      <section className="relative py-24 bg-gradient-to-br from-sky-900 to-blue-900">
        <div className="container-custom text-white">
          <h1 className="text-5xl md:text-6xl font-display font-bold mb-6">
            About {companyInfo.name}
          </h1>
          <p className="text-xl text-gray-200 max-w-3xl">
            {companyInfo.description}
          </p>
        </div>
      </section>

      {/* Company History */}
      <section id="history" className="py-20">
        <div className="container-custom">
          <h2 className="text-4xl font-display font-bold text-gray-900 mb-12">
            Our Journey
          </h2>
          <div className="space-y-8">
            {milestones.map((milestone, index) => (
              <div
                key={milestone.year}
                className="flex gap-8 items-start animate-fade-in-up"
                style={{ animationDelay: `${index * 0.1}s` }}
              >
                <div className="flex-shrink-0 w-32">
                  <div className="text-3xl font-bold text-sky-600">
                    {milestone.year}
                  </div>
                </div>
                <div className="flex-grow">
                  <h3 className="text-2xl font-semibold text-gray-900 mb-2">
                    {milestone.title}
                  </h3>
                  <p className="text-gray-600 text-lg">
                    {milestone.description}
                  </p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Leadership Team */}
      <section id="team" className="py-20 bg-gray-50">
        <div className="container-custom">
          <h2 className="text-4xl font-display font-bold text-gray-900 mb-4">
            Leadership Team
          </h2>
          <p className="text-lg text-gray-600 mb-12 max-w-3xl">
            Our experienced leadership team brings decades of mining industry expertise, driving innovation and sustainable growth.
          </p>
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {leadershipTeam.map((member, index) => (
              <Card
                key={member.id}
                className="overflow-hidden hover:shadow-xl transition-all duration-300 animate-fade-in-up"
                style={{ animationDelay: `${index * 0.1}s` }}
              >
                <div className="relative h-64 overflow-hidden bg-gray-200">
                  <img
                    src={member.image}
                    alt={member.name}
                    className="w-full h-full object-cover"
                  />
                </div>
                <CardContent className="p-6">
                  <h3 className="text-xl font-semibold text-gray-900 mb-1">
                    {member.name}
                  </h3>
                  <p className="text-sky-600 font-medium mb-3">
                    {member.position}
                  </p>
                  <p className="text-gray-600 text-sm mb-4">
                    {member.bio}
                  </p>
                  <div className="flex gap-2">
                    {member.email && (
                      <Button size="sm" variant="outline" asChild>
                        <a href={`mailto:${member.email}`}>
                          <Mail className="h-4 w-4" />
                        </a>
                      </Button>
                    )}
                    {member.linkedin && (
                      <Button size="sm" variant="outline" asChild>
                        <a href={member.linkedin} target="_blank" rel="noopener noreferrer">
                          <Linkedin className="h-4 w-4" />
                        </a>
                      </Button>
                    )}
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Core Values */}
      <section id="values" className="py-20">
        <div className="container-custom">
          <h2 className="text-4xl font-display font-bold text-gray-900 mb-4">
            Our Core Values
          </h2>
          <p className="text-lg text-gray-600 mb-12 max-w-3xl">
            These principles guide every decision we make and define who we are as a company.
          </p>
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {coreValues.map((value, index) => (
              <Card
                key={value.title}
                className="border-2 hover:border-sky-600 transition-all duration-300 hover:shadow-lg animate-fade-in-up"
                style={{ animationDelay: `${index * 0.1}s` }}
              >
                <CardContent className="p-6">
                  <div className="text-4xl mb-4">
                    {value.icon === 'Shield' && '🛡️'}
                    {value.icon === 'Leaf' && '🌿'}
                    {value.icon === 'Users' && '👥'}
                    {value.icon === 'Eye' && '👁️'}
                    {value.icon === 'Lightbulb' && '💡'}
                    {value.icon === 'Award' && '🏆'}
                  </div>
                  <h3 className="text-2xl font-semibold text-gray-900 mb-3">
                    {value.title}
                  </h3>
                  <p className="text-gray-600">
                    {value.description}
                  </p>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>
    </div>
  );
}

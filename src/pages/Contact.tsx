import { useState } from 'react';
import { MapPin, Phone, Mail, Send } from 'lucide-react';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Textarea } from '@/components/ui/textarea';
import { Label } from '@/components/ui/label';
import { Badge } from '@/components/ui/badge';
import { contactDepartments, offices } from '@/data/contact';

export function Contact() {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    subject: '',
    message: '',
  });

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    // Handle form submission
    console.log('Form submitted:', formData);
    alert('Thank you for your message. We will get back to you soon!');
    setFormData({ name: '', email: '', subject: '', message: '' });
  };

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    setFormData(prev => ({
      ...prev,
      [e.target.name]: e.target.value,
    }));
  };

  return (
    <div className="pt-20">
      {/* Hero Section */}
      <section className="relative py-24 bg-gradient-to-br from-sky-900 to-blue-900">
        <div className="container-custom text-white">
          <h1 className="text-5xl md:text-6xl font-display font-bold mb-6">
            Get in Touch
          </h1>
          <p className="text-xl text-gray-200 max-w-3xl">
            We'd love to hear from you. Whether you have a question about our operations, partnerships, or anything else, our team is ready to answer all your questions.
          </p>
        </div>
      </section>

      {/* Contact Form & Info */}
      <section className="py-20">
        <div className="container-custom">
          <div className="grid lg:grid-cols-3 gap-8">
            {/* Contact Form */}
            <div className="lg:col-span-2">
              <Card>
                <CardHeader>
                  <CardTitle className="text-2xl">Send us a Message</CardTitle>
                </CardHeader>
                <CardContent>
                  <form onSubmit={handleSubmit} className="space-y-6">
                    <div className="grid md:grid-cols-2 gap-6">
                      <div className="space-y-2">
                        <Label htmlFor="name">Full Name *</Label>
                        <Input
                          id="name"
                          name="name"
                          value={formData.name}
                          onChange={handleChange}
                          required
                          placeholder="John Doe"
                        />
                      </div>
                      <div className="space-y-2">
                        <Label htmlFor="email">Email Address *</Label>
                        <Input
                          id="email"
                          name="email"
                          type="email"
                          value={formData.email}
                          onChange={handleChange}
                          required
                          placeholder="john@example.com"
                        />
                      </div>
                    </div>
                    <div className="space-y-2">
                      <Label htmlFor="subject">Subject *</Label>
                      <Input
                        id="subject"
                        name="subject"
                        value={formData.subject}
                        onChange={handleChange}
                        required
                        placeholder="How can we help you?"
                      />
                    </div>
                    <div className="space-y-2">
                      <Label htmlFor="message">Message *</Label>
                      <Textarea
                        id="message"
                        name="message"
                        value={formData.message}
                        onChange={handleChange}
                        required
                        placeholder="Tell us more about your inquiry..."
                        rows={6}
                      />
                    </div>
                    <Button type="submit" size="lg" className="w-full md:w-auto">
                      <Send className="mr-2 h-5 w-5" />
                      Send Message
                    </Button>
                  </form>
                </CardContent>
              </Card>
            </div>

            {/* Contact Departments */}
            <div className="space-y-6">
              <Card>
                <CardHeader>
                  <CardTitle>Contact Departments</CardTitle>
                </CardHeader>
                <CardContent className="space-y-4">
                  {contactDepartments.map((dept) => (
                    <div key={dept.department} className="pb-4 border-b last:border-b-0 last:pb-0">
                      <h4 className="font-semibold text-gray-900 mb-2">
                        {dept.department}
                      </h4>
                      <div className="space-y-1 text-sm">
                        <a
                          href={`mailto:${dept.email}`}
                          className="flex items-center text-sky-600 hover:text-sky-700"
                        >
                          <Mail className="h-4 w-4 mr-2" />
                          {dept.email}
                        </a>
                        {dept.phone && (
                          <a
                            href={`tel:${dept.phone}`}
                            className="flex items-center text-gray-600 hover:text-gray-700"
                          >
                            <Phone className="h-4 w-4 mr-2" />
                            {dept.phone}
                          </a>
                        )}
                      </div>
                    </div>
                  ))}
                </CardContent>
              </Card>
            </div>
          </div>
        </div>
      </section>

      {/* Office Locations */}
      <section className="py-20 bg-gray-50">
        <div className="container-custom">
          <h2 className="text-4xl font-display font-bold text-gray-900 mb-12">
            Our Locations
          </h2>
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            {offices.map((office, index) => (
              <Card
                key={office.id}
                className="hover:shadow-lg transition-all duration-300 animate-fade-in-up"
                style={{ animationDelay: `${index * 0.1}s` }}
              >
                <CardContent className="p-6">
                  <div className="flex items-start justify-between mb-3">
                    <h3 className="text-lg font-semibold text-gray-900">
                      {office.name}
                    </h3>
                    <Badge variant={office.type === 'headquarters' ? 'default' : 'secondary'} className="capitalize">
                      {office.type.replace('-', ' ')}
                    </Badge>
                  </div>
                  <div className="space-y-2 text-sm text-gray-600">
                    <div className="flex items-start">
                      <MapPin className="h-4 w-4 mr-2 mt-0.5 flex-shrink-0" />
                      <div>
                        <div>{office.address}</div>
                        <div>{office.city}, {office.country}</div>
                      </div>
                    </div>
                    <a
                      href={`tel:${office.phone}`}
                      className="flex items-center hover:text-sky-600 transition-colors"
                    >
                      <Phone className="h-4 w-4 mr-2" />
                      {office.phone}
                    </a>
                    <a
                      href={`mailto:${office.email}`}
                      className="flex items-center text-sky-600 hover:text-sky-700 transition-colors"
                    >
                      <Mail className="h-4 w-4 mr-2" />
                      {office.email}
                    </a>
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Map Placeholder */}
      <section className="h-96 bg-gray-300">
        <div className="w-full h-full flex items-center justify-center text-gray-600">
          <div className="text-center">
            <MapPin className="h-16 w-16 mx-auto mb-4" />
            <p className="text-lg">Interactive Map Would Be Here</p>
            <p className="text-sm">Integrate with Google Maps or Mapbox</p>
          </div>
        </div>
      </section>
    </div>
  );
}

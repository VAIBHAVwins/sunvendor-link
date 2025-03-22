
import React from 'react';
import { Link } from 'react-router-dom';
import { Wrench, Activity, Settings2, Clipboard, Plus } from 'lucide-react';
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from '@/components/ui/card';
import { Button } from '@/components/ui/button';

const services = [
  {
    id: 'panel-cleaning',
    title: 'Manual Panel Cleaning',
    description: 'Professional cleaning service to maximize solar panel efficiency',
    icon: <Wrench className="h-10 w-10" />
  },
  {
    id: 'circuit-repair',
    title: 'Circuit Repair',
    description: 'Expert diagnosis and repair of solar system electrical issues',
    icon: <Activity className="h-10 w-10" />
  },
  {
    id: 'meter-replacement',
    title: 'Meter Replacement',
    description: 'Upgrade or replace your existing solar meter with newer models',
    icon: <Settings2 className="h-10 w-10" />
  },
  {
    id: 'others',
    title: 'Other Services',
    description: "Can't find what you need? Request a custom service",
    icon: <Plus className="h-10 w-10" />
  }
];

interface ServicesSectionProps {
  isConsumer?: boolean;
}

const ServicesSection: React.FC<ServicesSectionProps> = ({ isConsumer = true }) => {
  const themeClass = isConsumer ? 'consumer-theme' : 'vendor-theme';
  const serviceCardClass = isConsumer ? 'service-card-consumer' : 'service-card-vendor';
  const ctaButtonClass = isConsumer ? 'consumer-cta-button' : 'vendor-cta-button';
  
  return (
    <section className={`py-12 ${themeClass}`}>
      <div className="container mx-auto px-4">
        <h2 className="text-2xl md:text-3xl font-bold mb-2">Solar Maintenance Services</h2>
        <p className="text-muted-foreground mb-8">Keep your solar installation running at peak efficiency</p>
        
        <div className="grid grid-cols-1 md:grid-cols-4 gap-6">
          {services.map(service => (
            <Card key={service.id} className={`service-card ${serviceCardClass}`}>
              <CardHeader className="pb-2 text-center">
                <div className="mx-auto my-4">
                  {service.icon}
                </div>
                <CardTitle>{service.title}</CardTitle>
              </CardHeader>
              <CardContent className="text-center flex-grow">
                <CardDescription>
                  {service.description}
                </CardDescription>
              </CardContent>
              <CardFooter className="pt-4 flex justify-center">
                <Button asChild className={ctaButtonClass}>
                  <Link to={`/consumer/service-request/${service.id}`}>
                    Book Service
                  </Link>
                </Button>
              </CardFooter>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
};

export default ServicesSection;

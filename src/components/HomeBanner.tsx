
import React, { useEffect, useRef } from 'react';
import { Carousel, CarouselContent, CarouselItem, CarouselPrevious, CarouselNext } from '@/components/ui/carousel';
import { Card, CardContent } from '@/components/ui/card';
import { type CarouselApi } from '@/components/ui/carousel';

interface Banner {
  id: string;
  imageUrl: string;
  title: string;
  description: string;
}

const banners: Banner[] = [
  {
    id: "1",
    imageUrl: "https://images.unsplash.com/photo-1590242454071-9f1ceeb89dbb?q=80&w=1000",
    title: "Solar Power Solutions",
    description: "Efficient and cost-effective solar installations for your home"
  },
  {
    id: "2",
    imageUrl: "https://images.unsplash.com/photo-1509391366360-2e959784a276?q=80&w=1000",
    title: "Government Subsidies",
    description: "Special schemes available for residential solar installations"
  },
  {
    id: "3",
    imageUrl: "https://images.unsplash.com/photo-1586339949216-35c2747cc36d?q=80&w=1000",
    title: "Commercial Solutions",
    description: "Reduce operational costs with our commercial solar systems"
  },
  {
    id: "4",
    imageUrl: "https://images.unsplash.com/photo-1522337360788-8b13dee7a37e?q=80&w=1000",
    title: "Expert Consultation",
    description: "Our solar experts guide you through every step of the process"
  }
];

const HomeBanner = () => {
  const [api, setApi] = React.useState<CarouselApi>();
  const intervalRef = useRef<number | null>(null);

  useEffect(() => {
    if (!api) return;

    // Start autoplay
    const startAutoplay = () => {
      intervalRef.current = window.setInterval(() => {
        api.scrollNext();
      }, 5000); // Change slide every 5 seconds
    };

    // Clear interval when unmounting or when api changes
    const stopAutoplay = () => {
      if (intervalRef.current !== null) {
        clearInterval(intervalRef.current);
        intervalRef.current = null;
      }
    };

    startAutoplay();

    // Clean up on unmount
    return () => stopAutoplay();
  }, [api]);

  return (
    <section className="py-10 bg-gray-50">
      <div className="container mx-auto px-4">
        <h2 className="text-2xl font-bold mb-6 text-center">Featured Solar Solutions</h2>
        
        <Carousel 
          className="w-full max-w-5xl mx-auto" 
          opts={{ loop: true, align: "center" }}
          setApi={setApi}
        >
          <CarouselContent>
            {banners.map((banner) => (
              <CarouselItem key={banner.id} className="md:basis-2/3 lg:basis-3/4">
                <div className="p-1">
                  <Card className="overflow-hidden border-0 shadow-lg">
                    <CardContent className="p-0 relative">
                      <img 
                        src={banner.imageUrl} 
                        alt={banner.title}
                        className="w-full h-64 object-cover" 
                      />
                      <div className="absolute bottom-0 left-0 right-0 bg-gradient-to-t from-black/80 to-transparent p-6">
                        <h3 className="text-xl font-semibold text-white">{banner.title}</h3>
                        <p className="text-white/80 mt-2">{banner.description}</p>
                      </div>
                    </CardContent>
                  </Card>
                </div>
              </CarouselItem>
            ))}
          </CarouselContent>
          <CarouselPrevious className="left-4" />
          <CarouselNext className="right-4" />
        </Carousel>
      </div>
    </section>
  );
};

export default HomeBanner;

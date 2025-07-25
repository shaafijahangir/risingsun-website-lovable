
import React from "react";
import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselPrevious,
  CarouselNext,
} from "@/components/ui/carousel";
import { Card, CardContent } from "@/components/ui/card";
import { Star, Quote } from "lucide-react";
import { useMediaQuery } from "@/hooks/use-media-query";

// Testimonial data
const testimonials = [
  {
    id: 1,
    name: "Sarah Johnson",
    location: "United States",
    text: "My trip to Bangkok was absolutely incredible thanks to Rising Sun! Md Salim's local knowledge gave us access to hidden gems we would have never found on our own. The personalized itinerary was perfect.",
    rating: 5,
    image: "https://images.unsplash.com/photo-1494790108377-be9c29b29330?w=200&h=200&auto=format&fit=crop&q=80"
  },
  {
    id: 2,
    name: "David Chen",
    location: "Canada",
    text: "The Thailand island hopping package exceeded all expectations. Our guide knew exactly when to visit each spot to avoid crowds, and the accommodations were spectacular. Will definitely book again!",
    rating: 5,
    image: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=200&h=200&auto=format&fit=crop&q=80"
  },
  {
    id: 3,
    name: "Emma Wilson",
    location: "Australia",
    text: "Chiang Mai's temples and elephant sanctuaries were the highlight of our trip. Rising Sun arranged everything flawlessly, and their attention to detail made our honeymoon truly special.",
    rating: 5,
    image: "https://images.unsplash.com/photo-1438761681033-6461ffad8d80?w=200&h=200&auto=format&fit=crop&q=80"
  },
  {
    id: 4,
    name: "Hiroshi Tanaka",
    location: "Japan",
    text: "As a solo traveler, I was amazed by how comfortable and safe I felt throughout my journey. The cultural experiences were authentic and the local food recommendations were outstanding.",
    rating: 5,
    image: "https://images.unsplash.com/photo-1500648767791-00dcc994a43e?w=200&h=200&auto=format&fit=crop&q=80"
  },
  {
    id: 5,
    name: "Maria Rodriguez",
    location: "Spain",
    text: "From jungle trekking to riverside dining, every moment was carefully planned yet felt spontaneous. Salim's 35 years of experience truly shows in the quality of service provided.",
    rating: 5,
    image: "https://images.unsplash.com/photo-1534528741775-53994a69daeb?w=200&h=200&auto=format&fit=crop&q=80"
  }
];

const TestimonialsSection = () => {
  
  // Responsive breakpoints
  const isDesktop = useMediaQuery("(min-width: 1024px)");
  const isTablet = useMediaQuery("(min-width: 640px)");
  
  // Determine how many items to show based on screen size
  const getItemsToShow = () => {
    if (isDesktop) return 3; // Desktop: 3 items
    if (isTablet) return 2; // Tablet: 2 items
    return 1; // Mobile: 1 item
  };

  // Style items based on how many are showing
  const getItemWidth = () => {
    const itemsToShow = getItemsToShow();
    return `${100 / itemsToShow}%`;
  };

  return (
    <section 
      id="testimonials"
      className="py-16 bg-gradient-to-b from-sky-50 to-white"
      aria-labelledby="testimonials-heading"
    >
      <div className="container mx-auto px-4">
        <div className="text-center mb-12">
          <h2 
            id="testimonials-heading"
            className="text-3xl md:text-4xl font-bold text-thai-blue mb-4"
          >
            What Our Travelers Say
          </h2>
          <p className="text-gray-600 max-w-2xl mx-auto">
            Authentic reviews from travelers who have experienced the Rising Sun difference.
          </p>
        </div>

        <div className="relative max-w-7xl mx-auto">
          <Carousel
            opts={{
              align: "start",
              loop: true,
            }}
            className="w-full"
            role="region"
            aria-roledescription="testimonials carousel"
            aria-live="polite"
          >
            <CarouselContent>
              {testimonials.map((testimonial) => (
                <CarouselItem 
                  key={testimonial.id} 
                  className="md:basis-1/2 lg:basis-1/3"
                  style={{ minWidth: getItemWidth() }}
                  role="group"
                  aria-roledescription="testimonial"
                >
                  <Card className="border border-gray-100 shadow-lg hover:shadow-xl transition-shadow duration-300 h-full">
                    <CardContent className="p-6 flex flex-col h-full">
                      <div className="flex items-center mb-4">
                        <div className="mr-4">
                          <img 
                            src={testimonial.image} 
                            alt={`${testimonial.name}`}
                            className="w-12 h-12 rounded-full object-cover border-2 border-thai-gold"
                            loading="lazy"
                          />
                        </div>
                        <div>
                          <h3 className="font-semibold text-thai-blue">
                            {testimonial.name}
                          </h3>
                          <p className="text-sm text-gray-500">
                            {testimonial.location}
                          </p>
                        </div>
                      </div>
                      
                      <div className="flex mb-4">
                        {[...Array(testimonial.rating)].map((_, i) => (
                          <Star 
                            key={i}
                            className="text-thai-gold fill-thai-gold" 
                            size={18}
                          />
                        ))}
                      </div>
                      
                      <div className="relative flex-grow">
                        <Quote 
                          className="absolute -top-2 -left-1 text-thai-gold opacity-20" 
                          size={32}
                        />
                        <p className="text-gray-700 italic pt-3 px-2">
                          "{testimonial.text}"
                        </p>
                      </div>
                    </CardContent>
                  </Card>
                </CarouselItem>
              ))}
            </CarouselContent>
            
            <div className="flex items-center justify-center mt-8">
              <CarouselPrevious className="relative static transform-none mx-2" />
              <div className="flex items-center space-x-2">
                {testimonials.map((_, index) => (
                  <button
                    key={index}
                    className="w-3 h-3 rounded-full bg-gray-300 hover:bg-thai-gold transition-colors"
                    aria-label={`Go to slide ${index + 1}`}
                  />
                ))}
              </div>
              <CarouselNext className="relative static transform-none mx-2" />
            </div>
          </Carousel>
        </div>
      </div>
    </section>
  );
};

export default TestimonialsSection;

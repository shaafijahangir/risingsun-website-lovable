
import React, { useEffect, useState } from "react";
import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselPrevious,
  CarouselNext,
} from "@/components/ui/carousel";
import { Card, CardContent } from "@/components/ui/card";
import { Star, Quote } from "lucide-react";
import Autoplay from "embla-carousel-autoplay";

const TestimonialCard = ({
  content,
  author,
  location,
  rating,
}: {
  content: string;
  author: string;
  location: string;
  rating: number;
}) => {
  return (
    <Card className="border-none shadow-lg h-full">
      <CardContent className="p-6 flex flex-col items-center text-center">
        <div className="bg-gray-100 rounded-full w-16 h-16 flex items-center justify-center mb-4">
          <Quote className="text-thai-gold" size={24} />
        </div>
        <div className="flex mb-4">
          {Array(5)
            .fill(0)
            .map((_, i) => (
              <Star
                key={i}
                size={16}
                className={i < rating ? "text-thai-gold fill-thai-gold" : "text-gray-300"}
              />
            ))}
        </div>
        <p className="text-gray-700 mb-6 italic">{content}</p>
        <div className="flex flex-col items-center mt-auto">
          <p className="font-semibold">{author}</p>
          <p className="text-sm text-gray-500">{location}</p>
        </div>
      </CardContent>
    </Card>
  );
};

const TestimonialsSection = () => {
  const [api, setApi] = useState<any>(null);
  const [current, setCurrent] = useState(0);
  
  const plugin = React.useRef(
    Autoplay({ delay: 5000, stopOnInteraction: true })
  );

  const testimonials = [
    {
      content:
        "Our family trip to Thailand was absolutely magical! The tour guides were knowledgeable and friendly, and the itinerary was perfectly balanced between cultural experiences and relaxation. We'll definitely be booking with them again!",
      author: "Sarah Johnson",
      location: "United States",
      rating: 5,
    },
    {
      content:
        "As a solo traveler, I was concerned about navigating Thailand on my own. The Rising Sun team created a perfect balance of guided experiences and free time. Their local connections gave me authentic experiences I could have never found on my own.",
      author: "James Wilson",
      location: "Australia",
      rating: 5,
    },
    {
      content:
        "My husband and I had always wanted to visit Thailand. The customized honeymoon package was perfect - luxurious yet authentic. Our guide even helped us communicate with locals to have a truly immersive experience.",
      author: "Emma and David",
      location: "United Kingdom",
      rating: 5,
    },
    {
      content:
        "As someone who's visited Thailand multiple times, I can say that the hidden gems and local experiences provided by Rising Sun were extraordinary. They showed me a side of Thailand I hadn't seen before.",
      author: "Michael Chen",
      location: "Canada",
      rating: 5,
    },
  ];

  useEffect(() => {
    if (!api) return;
    
    const onSelect = () => {
      setCurrent(api.selectedScrollSnap());
    };
    
    api.on("select", onSelect);
    return () => {
      api.off("select", onSelect);
    };
  }, [api]);

  return (
    <section id="testimonials" className="section-padding bg-thai-cream">
      <div className="container-custom">
        <div className="text-center mb-12">
          <div className="inline-block bg-black text-white px-4 py-1 rounded-full text-sm font-medium mb-4">
            Testimonials
          </div>
          <h2 className="text-3xl md:text-4xl font-bold mb-4">
            What Our Travelers Say
          </h2>
          <p className="text-gray-600 max-w-2xl mx-auto">
            Hear from travelers who have experienced the magic of Thailand with our expert guidance.
          </p>
        </div>

        <Carousel 
          className="w-full max-w-4xl mx-auto" 
          opts={{
            align: "center",
            loop: true,
          }}
          plugins={[plugin.current]}
          setApi={setApi}
        >
          <CarouselContent>
            {testimonials.map((testimonial, index) => (
              <CarouselItem key={index} className="md:basis-full p-4">
                <TestimonialCard
                  content={testimonial.content}
                  author={testimonial.author}
                  location={testimonial.location}
                  rating={testimonial.rating}
                />
              </CarouselItem>
            ))}
          </CarouselContent>
          
          <div className="hidden md:flex justify-center mt-8 gap-2">
            <CarouselPrevious className="relative static" />
            <CarouselNext className="relative static" />
          </div>
          
          <div className="flex justify-center mt-6 gap-2">
            {testimonials.map((_, index) => (
              <button 
                key={index} 
                onClick={() => api?.scrollTo(index)}
                className={`w-2.5 h-2.5 rounded-full transition-all ${
                  current === index ? "bg-thai-gold w-5" : "bg-gray-300"
                }`}
                aria-label={`Go to slide ${index + 1}`}
              />
            ))}
          </div>
        </Carousel>
      </div>
    </section>
  );
};

export default TestimonialsSection;

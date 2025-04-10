
import React from "react";
import {
  Carousel,
  CarouselContent,
  CarouselItem,
} from "@/components/ui/carousel";
import { Card, CardContent } from "@/components/ui/card";
import { Star } from "lucide-react";

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
    <Card className="border-none shadow-lg">
      <CardContent className="p-6">
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
        <div className="flex items-center">
          <div className="bg-gray-200 w-10 h-10 rounded-full mr-3" />
          <div>
            <p className="font-semibold">{author}</p>
            <p className="text-sm text-gray-500">{location}</p>
          </div>
        </div>
      </CardContent>
    </Card>
  );
};

const TestimonialsSection = () => {
  const testimonials = [
    {
      content:
        "Our family trip to Thailand exceeded all expectations. The personal touches, insider access to less crowded spots, and seamless logistics made it our best vacation ever. Having a local expert arrange everything made such a difference.",
      author: "Sarah Johnson",
      location: "United States",
      rating: 5,
    },
    {
      content:
        "As a solo traveler, I was concerned about navigating Thailand on my own. The team created a perfect balance of guided experiences and free time. Their local connections gave me authentic experiences I could have never found on my own.",
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
        "As someone who's visited Thailand multiple times, I can say that the hidden gems and local experiences provided by Thai Travel Tales were extraordinary. They showed me a side of Thailand I hadn't seen before.",
      author: "Michael Chen",
      location: "Canada",
      rating: 5,
    },
  ];

  return (
    <section id="testimonials" className="section-padding">
      <div className="container-custom">
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-bold mb-4">
            What Our Travelers Say
          </h2>
          <p className="text-gray-600 max-w-2xl mx-auto">
            Don't just take our word for it. Hear from travelers who have experienced
            our personalized approach to Thai travel.
          </p>
        </div>

        <Carousel className="w-full max-w-5xl mx-auto">
          <CarouselContent>
            {testimonials.map((testimonial, index) => (
              <CarouselItem key={index} className="md:basis-1/2 lg:basis-1/2 p-2">
                <TestimonialCard
                  content={testimonial.content}
                  author={testimonial.author}
                  location={testimonial.location}
                  rating={testimonial.rating}
                />
              </CarouselItem>
            ))}
          </CarouselContent>
        </Carousel>
      </div>
    </section>
  );
};

export default TestimonialsSection;

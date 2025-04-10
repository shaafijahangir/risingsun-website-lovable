
import React, { useState, useEffect } from "react";
import { Button } from "@/components/ui/button";
import { ArrowRight, Calendar } from "lucide-react";

// Array of background images for the carousel
const backgroundImages = [
  "/lovable-uploads/d28117b8-d8c1-4be8-b6ab-aa30e14c4b3d.png", // The uploaded image
  "https://images.unsplash.com/photo-1552465011-b4e21bf6e79a?q=80&w=1920&auto=format&fit=crop", // Thailand beach
  "https://images.unsplash.com/photo-1528181304800-259b08848526?q=80&w=1920&auto=format&fit=crop", // Temple
  "https://images.unsplash.com/photo-1490077476659-095159692ab5?q=80&w=1920&auto=format&fit=crop", // Boat in water
  "https://images.unsplash.com/photo-1504214208698-ea1916a2195a?q=80&w=1920&auto=format&fit=crop", // Island view
];

const Hero = () => {
  const [currentImageIndex, setCurrentImageIndex] = useState(0);

  // Auto rotate background images every 5 seconds
  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentImageIndex((prevIndex) => 
        (prevIndex + 1) % backgroundImages.length
      );
    }, 5000);

    return () => clearInterval(interval);
  }, []);

  const handleDotClick = (index: number) => {
    setCurrentImageIndex(index);
  };

  return (
    <section className="relative min-h-screen flex items-center overflow-hidden">
      {/* Background images */}
      {backgroundImages.map((image, index) => (
        <div
          key={index}
          className={`absolute inset-0 bg-cover bg-center transition-opacity duration-1000 ${
            index === currentImageIndex ? "opacity-100" : "opacity-0"
          }`}
          style={{
            backgroundImage: `linear-gradient(rgba(0, 0, 0, 0.5), rgba(0, 0, 0, 0.4)), url(${image})`,
          }}
        />
      ))}

      {/* Content */}
      <div className="container-custom text-center md:text-left relative z-10">
        <div className="max-w-3xl mx-auto md:mx-0">
          <div className="inline-block bg-thai-gold text-white px-4 py-2 rounded-full mb-4">
            Trusted for over 35 years
          </div>
          <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold text-white mb-6 leading-tight">
            Experience Thailand Through The Eyes of a Local
          </h1>
          <p className="text-xl text-white/90 mb-8 max-w-2xl mx-auto md:mx-0">
            Personalized travel experiences, expert local knowledge, and unforgettable memories. Let us plan your perfect Thai adventure.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center md:justify-start">
            <Button asChild size="lg" className="bg-thai-gold hover:bg-thai-gold/90 text-white">
              <a href="#packages">
                Explore Packages
                <ArrowRight className="ml-2" size={16} />
              </a>
            </Button>
            <Button asChild variant="outline" size="lg" className="bg-white hover:bg-white/90 text-thai-gold border-thai-gold">
              <a href="#book-call">
                <Calendar className="mr-2" size={16} />
                Book a Free Call
              </a>
            </Button>
          </div>
        </div>
      </div>

      {/* Navigation dots */}
      <div className="absolute bottom-6 left-0 right-0 flex justify-center gap-2 z-10">
        {backgroundImages.map((_, index) => (
          <button
            key={index}
            onClick={() => handleDotClick(index)}
            className={`w-2.5 h-2.5 rounded-full transition-all ${
              currentImageIndex === index ? "bg-white w-5" : "bg-white/50"
            }`}
            aria-label={`Go to slide ${index + 1}`}
          />
        ))}
      </div>
    </section>
  );
};

export default Hero;

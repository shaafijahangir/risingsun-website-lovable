
import React, { useState, useEffect } from "react";
import { Button } from "@/components/ui/button";
import { ArrowRight, Calendar } from "lucide-react";
import { useI18n } from "@/i18n/context";

// Array of high-quality background images for the carousel
const backgroundImages = [
  "https://images.unsplash.com/photo-1504214208698-ea1916a2195a?q=80&w=1920&auto=format&fit=crop", // Island view
  "https://images.unsplash.com/photo-1490077476659-095159692ab5?q=80&w=1920&auto=format&fit=crop", // Boat in water
  "https://images.unsplash.com/photo-1506665531195-3566af2b4dfa?q=80&w=1920&auto=format&fit=crop", // Sunrise over mountains
  "https://images.unsplash.com/photo-1586902197503-e71026292412?q=80&w=1920&auto=format&fit=crop", // Beach sunset
  "https://images.unsplash.com/photo-1552465011-b4e21bf6e79a?q=80&w=1920&auto=format&fit=crop", // Thailand beach
  "https://images.unsplash.com/photo-1528181304800-259b08848526?q=80&w=1920&auto=format&fit=crop", // Temple
];

const Hero = () => {
  const [currentImageIndex, setCurrentImageIndex] = useState(0);
  const { t } = useI18n();

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
      {/* Background images with enhanced overlay gradient */}
      {backgroundImages.map((image, index) => (
        <div
          key={index}
          className={`absolute inset-0 bg-cover bg-center transition-opacity duration-1000 ${
            index === currentImageIndex ? "opacity-100" : "opacity-0"
          }`}
          style={{
            backgroundImage: `linear-gradient(rgba(0, 60, 120, 0.4), rgba(0, 0, 0, 0.45)), url(${image})`,
          }}
        />
      ))}

      {/* Content with improved typography */}
      <div className="container-custom text-center md:text-left relative z-10">
        <div className="max-w-3xl mx-auto md:mx-0">
          <div 
            className="inline-block bg-gradient-to-r from-yellow-500 to-thai-gold text-white px-4 py-2 rounded-full mb-4 shadow-md"
          >
            {t('hero.badge')}
          </div>
          <h1 className="text-4xl md:text-5xl lg:text-6xl font-heading font-bold text-white mb-6 leading-tight drop-shadow-md">
            {t('hero.title')}
          </h1>
          <p className="text-xl text-white/95 mb-8 max-w-2xl mx-auto md:mx-0 drop-shadow-sm">
            {t('hero.subtitle')}
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center md:justify-start">
            <Button asChild size="lg" className="bg-thai-gold hover:bg-thai-gold/90 text-white shadow-lg">
              <a href="#packages">
                {t('common.explorePackages')}
                <ArrowRight className="ml-2" size={16} />
              </a>
            </Button>
            <Button asChild variant="outline" size="lg" className="bg-white hover:bg-white/90 text-thai-blue border-thai-blue shadow-md">
              <a href="#book-call">
                <Calendar className="mr-2" size={16} />
                {t('common.bookFreeCall')}
              </a>
            </Button>
          </div>
        </div>
      </div>

      {/* Enhanced navigation dots */}
      <div className="absolute bottom-8 left-0 right-0 flex justify-center gap-3 z-10">
        {backgroundImages.map((_, index) => (
          <button
            key={index}
            onClick={() => handleDotClick(index)}
            className={`w-3 h-3 rounded-full transition-all ${
              currentImageIndex === index 
                ? "bg-white w-6" 
                : "bg-white/50 hover:bg-white/70"
            }`}
            aria-label={`Go to slide ${index + 1}`}
          />
        ))}
      </div>
    </section>
  );
};

export default Hero;

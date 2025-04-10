
import React from "react";
import { Button } from "@/components/ui/button";
import { ArrowRight, Calendar } from "lucide-react";

const Hero = () => {
  return (
    <section className="relative min-h-screen bg-hero-pattern bg-cover bg-center flex items-center">
      <div className="container-custom text-center md:text-left">
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
    </section>
  );
};

export default Hero;

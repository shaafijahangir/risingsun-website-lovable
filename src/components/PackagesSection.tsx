
import React from "react";
import { Card, CardContent } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Calendar, Check } from "lucide-react";
import { getOptimizedImageUrl, generateSrcSet } from "@/utils/imageUtils";

const TravelPackage = ({
  title,
  description,
  days,
  features,
  imageKey,
  price,
}: {
  title: string;
  description: string;
  days: string;
  features: string[];
  imageKey: string;
  price: string;
}) => {
  return (
    <Card className="overflow-hidden border-0 shadow-lg transition-all duration-300 hover:-translate-y-1 hover:scale-[1.02] hover:shadow-xl cursor-pointer">
      <div className="relative h-64">
        <picture>
          <source srcSet={generateSrcSet(imageKey, 'webp')} type="image/webp" />
          <source srcSet={generateSrcSet(imageKey, 'avif')} type="image/avif" />
          <img 
            src={getOptimizedImageUrl(imageKey)} 
            alt={`View of ${title} destination in Thailand`} 
            className="object-cover w-full h-full"
            loading="lazy"
          />
        </picture>
        <div className="absolute inset-0 bg-gradient-to-t from-black/80 to-transparent flex items-end p-4">
          <div className="text-primary-foreground">
            <div className="bg-thai-gold text-primary-foreground rounded-full py-1 px-3 text-xs inline-block mb-2">
              {days}
            </div>
            <h3 className="text-xl font-bold">{title}</h3>
            <p className="text-primary-foreground/90 text-sm mt-1">{price}</p>
          </div>
        </div>
      </div>
      <CardContent className="p-6">
        <p className="text-muted-foreground mb-4">{description}</p>
        <div className="mb-6">
          <div className="font-medium mb-2">Package includes:</div>
          <ul className="space-y-2">
            {features.map((feature, index) => (
              <li key={index} className="flex items-start">
                <Check className="text-thai-gold mr-2 h-5 w-5 mt-0.5 shrink-0" />
                <span className="text-sm text-muted-foreground">{feature}</span>
              </li>
            ))}
          </ul>
        </div>
        <Button asChild className="w-full bg-thai-gold hover:bg-thai-gold/90 transition-colors">
          <a href="#book-call" className="flex items-center justify-center" aria-label={`Book ${title} package`}>
            <Calendar className="mr-2 h-4 w-4" />
            Book This Package
          </a>
        </Button>
      </CardContent>
    </Card>
  );
};

const PackagesSection = () => {
  const packages = [
    {
      title: "Bangkok & Beyond",
      description:
        "Experience the perfect balance of city exploration and cultural immersion in Thailand's capital and surrounding areas.",
      days: "5-7 Days",
      price: "From $899 per person",
      features: [
        "Guided tour of Grand Palace & temples",
        "Floating markets excursion",
        "Authentic food experiences",
        "Luxury accommodations",
        "Private transportation",
      ],
      imageKey: "bangkok",
    },
    {
      title: "Northern Thailand Explorer",
      description:
        "Discover Chiang Mai's temples, mountain landscapes, and authentic hill tribe communities.",
      days: "7-10 Days",
      price: "From $1,199 per person",
      features: [
        "Doi Suthep temple visit",
        "Elephant sanctuary experience",
        "Hill tribe village homestay",
        "Thai cooking class",
        "Handcrafted souvenir workshop",
      ],
      imageKey: "chiang-mai",
    },
    {
      title: "Southern Island Hopping",
      description:
        "Relax on pristine beaches and explore hidden coves across Thailand's beautiful southern islands.",
      days: "10-14 Days",
      price: "From $1,499 per person",
      features: [
        "Private speedboat tours",
        "Snorkeling & diving excursions",
        "Beachfront accommodation",
        "Island-to-island transfers",
        "Sunset dinner cruises",
      ],
      imageKey: "islands",
    },
  ];

  return (
    <section id="packages" className="section-padding">
      <div className="container-custom">
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-bold mb-4">
            Popular Travel Packages
          </h2>
          <p className="text-muted-foreground max-w-2xl mx-auto">
            Our most sought-after experiences, fully customizable to suit your preferences, 
            timeline, and budget. Each package can be tailored to your needs.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {packages.map((pkg, index) => (
            <TravelPackage
              key={index}
              title={pkg.title}
              description={pkg.description}
              days={pkg.days}
              features={pkg.features}
              imageKey={pkg.imageKey}
              price={pkg.price}
            />
          ))}
        </div>

        <div className="text-center mt-12">
          <p className="text-muted-foreground mb-4">
            Don't see what you're looking for? We specialize in creating custom itineraries!
          </p>
          <Button asChild className="bg-thai-blue hover:bg-thai-blue/90 transition-colors">
            <a href="#book-call" aria-label="Create a custom travel package">Create a Custom Package</a>
          </Button>
        </div>
      </div>
    </section>
  );
};

export default PackagesSection;


import React from "react";
import { Card, CardContent } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Calendar, Check } from "lucide-react";

const TravelPackage = ({
  title,
  description,
  days,
  features,
  imagePlaceholder,
}: {
  title: string;
  description: string;
  days: string;
  features: string[];
  imagePlaceholder: string;
}) => {
  return (
    <Card className="overflow-hidden border-0 shadow-lg transition-transform duration-300 hover:-translate-y-1">
      <div className="relative h-64 bg-gray-200">
        <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent flex items-end p-4">
          <div className="text-white">
            <div className="bg-thai-gold text-white rounded-full py-1 px-3 text-xs inline-block mb-2">
              {days}
            </div>
            <h3 className="text-xl font-bold">{title}</h3>
          </div>
        </div>
      </div>
      <CardContent className="p-6">
        <p className="text-gray-600 mb-4">{description}</p>
        <div className="mb-6">
          <div className="font-medium mb-2">Package includes:</div>
          <ul className="space-y-2">
            {features.map((feature, index) => (
              <li key={index} className="flex items-start">
                <Check className="text-thai-gold mr-2 h-5 w-5 mt-0.5 shrink-0" />
                <span className="text-sm text-gray-600">{feature}</span>
              </li>
            ))}
          </ul>
        </div>
        <Button asChild className="w-full bg-thai-blue hover:bg-thai-blue/90">
          <a href="#book-call" className="flex items-center justify-center">
            <Calendar className="mr-2 h-4 w-4" />
            Discuss This Package
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
      features: [
        "Guided tour of Grand Palace & temples",
        "Floating markets excursion",
        "Authentic food experiences",
        "Luxury accommodations",
        "Private transportation",
      ],
      imagePlaceholder: "bangkok",
    },
    {
      title: "Northern Thailand Explorer",
      description:
        "Discover Chiang Mai's temples, mountain landscapes, and authentic hill tribe communities.",
      days: "7-10 Days",
      features: [
        "Doi Suthep temple visit",
        "Elephant sanctuary experience",
        "Hill tribe village homestay",
        "Thai cooking class",
        "Handcrafted souvenir workshop",
      ],
      imagePlaceholder: "chiang-mai",
    },
    {
      title: "Southern Island Hopping",
      description:
        "Relax on pristine beaches and explore hidden coves across Thailand's beautiful southern islands.",
      days: "10-14 Days",
      features: [
        "Private speedboat tours",
        "Snorkeling & diving excursions",
        "Beachfront accommodation",
        "Island-to-island transfers",
        "Sunset dinner cruises",
      ],
      imagePlaceholder: "islands",
    },
  ];

  return (
    <section id="packages" className="section-padding">
      <div className="container-custom">
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-bold mb-4">
            Popular Travel Packages
          </h2>
          <p className="text-gray-600 max-w-2xl mx-auto">
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
              imagePlaceholder={pkg.imagePlaceholder}
            />
          ))}
        </div>

        <div className="text-center mt-12">
          <p className="text-gray-600 mb-4">
            Don't see what you're looking for? We specialize in creating custom itineraries!
          </p>
          <Button asChild className="bg-thai-gold hover:bg-thai-gold/90">
            <a href="#book-call">Create a Custom Package</a>
          </Button>
        </div>
      </div>
    </section>
  );
};

export default PackagesSection;

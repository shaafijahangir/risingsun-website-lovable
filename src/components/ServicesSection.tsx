
import React from "react";
import { Plane, Hotel, Car, Map, Compass, Users } from "lucide-react";

const ServiceCard = ({ 
  icon: Icon, 
  title, 
  description 
}: { 
  icon: React.ElementType; 
  title: string; 
  description: string 
}) => {
  return (
    <div className="bg-white p-6 rounded-lg shadow-md transition-transform hover:-translate-y-1 duration-300 border border-gray-100">
      <div className="bg-thai-cream p-3 rounded-full w-14 h-14 flex items-center justify-center mb-4">
        <Icon className="text-thai-gold" size={24} />
      </div>
      <h3 className="text-xl font-semibold mb-2">{title}</h3>
      <p className="text-gray-600">{description}</p>
    </div>
  );
};

const ServicesSection = () => {
  const services = [
    {
      icon: Plane,
      title: "Flight Bookings",
      description:
        "International and domestic flights at competitive rates with trusted airlines.",
    },
    {
      icon: Hotel,
      title: "Accommodations",
      description:
        "From luxury resorts to boutique hotels and authentic homestays across Thailand.",
    },
    {
      icon: Car,
      title: "Transportation",
      description:
        "Private transfers, car rentals, and guided transportation throughout your journey.",
    },
    {
      icon: Map,
      title: "Local Attractions",
      description:
        "Skip-the-line tickets and exclusive access to Thailand's best attractions.",
    },
    {
      icon: Compass,
      title: "Custom Itineraries",
      description:
        "Personalized travel plans tailored to your preferences, budget, and schedule.",
    },
    {
      icon: Users,
      title: "Group Tours",
      description:
        "Join like-minded travelers on expertly guided small group experiences.",
    },
  ];

  return (
    <section id="services" className="section-padding bg-thai-cream">
      <div className="container-custom">
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-bold mb-4">
            Full-Service Travel Experience
          </h2>
          <p className="text-gray-600 max-w-2xl mx-auto">
            From the moment you land until your departure, we handle every aspect of your journey 
            with attention to detail and personalized service.
          </p>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
          {services.map((service, index) => (
            <ServiceCard
              key={index}
              icon={service.icon}
              title={service.title}
              description={service.description}
            />
          ))}
        </div>
      </div>
    </section>
  );
};

export default ServicesSection;

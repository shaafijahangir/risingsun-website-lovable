
import React from "react";
import { Plane, Hotel, Car, Map, Compass, Users } from "lucide-react";
import { useI18n } from "@/i18n/context";

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
  const { t } = useI18n();
  
  const services = [
    {
      icon: Plane,
      title: t('services.flight.title'),
      description: t('services.flight.description'),
    },
    {
      icon: Hotel,
      title: t('services.accommodation.title'),
      description: t('services.accommodation.description'),
    },
    {
      icon: Car,
      title: t('services.transportation.title'),
      description: t('services.transportation.description'),
    },
    {
      icon: Map,
      title: t('services.attractions.title'),
      description: t('services.attractions.description'),
    },
    {
      icon: Compass,
      title: t('services.itineraries.title'),
      description: t('services.itineraries.description'),
    },
    {
      icon: Users,
      title: t('services.groupTours.title'),
      description: t('services.groupTours.description'),
    },
  ];

  return (
    <section id="services" className="section-padding bg-thai-cream">
      <div className="container-custom">
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-bold mb-4">
            {t('services.title')}
          </h2>
          <p className="text-gray-600 max-w-2xl mx-auto">
            {t('services.subtitle')}
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

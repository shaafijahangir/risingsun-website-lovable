
import React from "react";
import { Card } from "@/components/ui/card";
import { Award, Calendar, Users } from "lucide-react";

const StatsCard = ({
  icon: Icon,
  number,
  label,
}: {
  icon: React.ElementType;
  number: string;
  label: string;
}) => (
  <Card className="p-6 text-center bg-white shadow-md">
    <div className="flex justify-center mb-2">
      <Icon size={28} className="text-thai-gold" />
    </div>
    <div className="text-3xl font-bold mb-1 text-thai-gold">{number}</div>
    <div className="text-gray-600">{label}</div>
  </Card>
);

const AboutSection = () => {
  return (
    <section id="about" className="section-padding bg-gray-50">
      <div className="container-custom">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          <div>
            <div className="inline-block bg-thai-gold/10 text-thai-gold px-4 py-2 rounded-full mb-4">
              About Us
            </div>
            <h2 className="text-3xl md:text-4xl font-bold mb-6">
              35+ Years of Creating Unforgettable Thai Experiences
            </h2>
            <p className="text-gray-600 mb-6">
              Thai Travel Tales was founded in 1988 by Somchai Wattana, who had a vision to share 
              the authentic beauty and culture of Thailand with travelers from around the world. 
              What started as a small local guide service has grown into a full-service travel 
              company with deep local connections throughout Thailand.
            </p>
            <p className="text-gray-600 mb-6">
              Our team consists of experienced local guides and travel experts who know Thailand 
              intimately - from the hidden temples of the north to the secret beaches of the south. 
              We pride ourselves on creating personalized experiences that go beyond typical 
              tourist attractions.
            </p>
            <p className="text-gray-600">
              Unlike large international agencies, we offer a personal touch with the insider 
              knowledge that only comes from decades of local experience. Every itinerary is 
              crafted with care, attention to detail, and a deep understanding of what makes 
              Thailand special.
            </p>
          </div>
          <div className="grid grid-cols-1 sm:grid-cols-3 gap-6">
            <StatsCard icon={Calendar} number="35+" label="Years Experience" />
            <StatsCard icon={Users} number="10k+" label="Happy Travelers" />
            <StatsCard icon={Award} number="100%" label="Satisfaction" />
          </div>
        </div>
      </div>
    </section>
  );
};

export default AboutSection;

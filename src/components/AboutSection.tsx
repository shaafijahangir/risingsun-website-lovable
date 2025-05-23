import React from "react";
import { Card } from "@/components/ui/card";
import { Award, Calendar, Users, Sun, Check, ChevronRight } from "lucide-react";
import { Button } from "@/components/ui/button";
import { getOptimizedImageUrl } from "@/utils/imageUtils";

const StatsCard = ({
  icon: Icon,
  number,
  label,
}: {
  icon: React.ElementType;
  number: string;
  label: string;
}) => (
  <Card className="p-6 text-center bg-[#FFFADD] shadow-lg border-t-4 border-t-[#FFCC70] transition-transform hover:-translate-y-1 duration-300">
    <div className="flex justify-center mb-3">
      <div className="p-3 rounded-full bg-gradient-to-br from-[#8ECDDD]/10 to-[#FFCC70]/10">
        <Icon size={28} className="text-[#22668D]" />
      </div>
    </div>
    <div className="text-3xl font-bold mb-1 text-[#22668D]">{number}</div>
    <div className="text-gray-600">{label}</div>
  </Card>
);

const TimelineItem = ({
  year,
  title,
  description,
}: {
  year: string;
  title: string;
  description: string;
}) => (
  <div className="relative pl-8 pb-8 border-l border-[#FFCC70] last:border-0 last:pb-0">
    <div className="absolute left-[-8px] top-0 w-4 h-4 rounded-full bg-[#FFCC70]"></div>
    <div className="bg-[#FFCC70]/10 text-[#22668D] px-3 py-1 rounded-full inline-block mb-2 text-sm font-medium">
      {year}
    </div>
    <h4 className="text-lg font-bold mb-1 text-[#22668D]">{title}</h4>
    <p className="text-gray-600">{description}</p>
  </div>
);

const PartnerLogo = ({
  name,
  logoUrl = "https://placehold.co/200x80/CCCCCC/969696?text=Partner+Logo",
}: {
  name: string;
  logoUrl?: string;
}) => (
  <div className="flex items-center justify-center p-4 bg-white rounded-lg shadow-sm hover:shadow-md transition-shadow">
    <img src={logoUrl} alt={`${name} logo`} className="h-12 max-w-[120px] object-contain" loading="lazy" />
  </div>
);

const AboutSection = () => {
  const timeline = [
    {
      year: "1988",
      title: "Humble Beginnings",
      description: "Rising Sun was founded as a small local guide service in Bangkok."
    },
    {
      year: "1995",
      title: "Expansion to Northern Thailand",
      description: "Opened our first office in Chiang Mai to provide services in Northern Thailand."
    },
    {
      year: "2005",
      title: "International Recognition",
      description: "Awarded 'Best Cultural Tour Operator' by Tourism Authority of Thailand."
    },
    {
      year: "2018",
      title: "Digital Transformation",
      description: "Launched online booking platform to serve international clients better."
    },
  ];
  
  // Use the imported utility function for optimizing image URLs
  const founderImageUrl = getOptimizedImageUrl('src/assets/images/salim_pic.jpg');
  
  return (
    <section id="about" className="section-padding bg-gradient-to-br from-[#FFFADD] to-[#8ECDDD]/10">
      <div className="container-custom">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center mb-16">
          <div>
            <div className="inline-flex items-center gap-2 bg-[#FFCC70]/10 text-[#22668D] px-4 py-2 rounded-full mb-4">
              <Sun size={18} className="text-[#22668D]" />
              <span className="font-medium">Our Story</span>
            </div>
            <h2 className="text-3xl md:text-4xl font-bold mb-6 font-heading text-[#22668D]">
              35+ Years of Creating Unforgettable Thai Experiences
            </h2>
            <p className="text-gray-600 mb-6 leading-relaxed">
              Rising Sun was founded in 1988 by Md Salim Jahangir, who had a vision to share 
              the authentic beauty and culture of Thailand with travelers from around the world. 
              What started as a small local guide service has grown into a full-service travel 
              company with deep local connections throughout Thailand.
            </p>
            <div className="flex items-center mb-6">
              <div className="mr-6">
                <div className="w-20 h-20 md:w-28 md:h-28 rounded-full overflow-hidden border-4 border-white shadow-lg">
                  <img 
                    src={getOptimizedImageUrl('founder')}
                    alt="Md Salim Jahangir, Managing Director" 
                    className="w-full h-full object-cover"
                    loading="lazy"
                  />
                </div>
              </div>
              <div>
                <h4 className="text-lg font-bold text-[#22668D]">Md Salim Jahangir</h4>
                <p className="text-[#8ECDDD]">Founder & Managing Director</p>
                <p className="text-sm text-gray-600 mt-1">"Our mission is to showcase the real Thailand through the eyes of locals."</p>
              </div>
            </div>
            <p className="text-gray-600 leading-relaxed">
              Unlike large international agencies, we offer a personal touch with the insider 
              knowledge that only comes from decades of local experience. Every itinerary is 
              crafted with care, attention to detail, and a deep understanding of what makes 
              Thailand special.
            </p>
          </div>
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
            <StatsCard icon={Sun} number="35+" label="Years Experience" />
            <StatsCard icon={Users} number="10k+" label="Happy Travelers" />
            <StatsCard icon={Award} number="100%" label="Satisfaction" />
            <StatsCard icon={Calendar} number="25+" label="Countries Served" />
          </div>
        </div>
        
        <div className="mb-16">
          <div className="text-center mb-8">
            <h3 className="text-2xl md:text-3xl font-bold">Our Journey</h3>
            <p className="text-gray-600 mt-2">Milestones from our 35+ years in Thai tourism</p>
          </div>
          <div className="max-w-3xl mx-auto">
            {timeline.map((item, index) => (
              <TimelineItem
                key={index}
                year={item.year}
                title={item.title}
                description={item.description}
              />
            ))}
          </div>
        </div>
        
        <div className="text-center">
          <Button asChild size="lg" className="bg-[#22668D] hover:bg-[#22668D]/90 text-white">
            <a href="https://calendly.com/salimjahangir67/15min" target="_blank" rel="noopener noreferrer" className="flex items-center">
              <Calendar className="mr-2" size={18} />
              Schedule a Free 10-Minute Call
            </a>
          </Button>
        </div>
      </div>
    </section>
  );
};

export default AboutSection;

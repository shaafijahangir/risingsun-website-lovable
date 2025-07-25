
import React from "react";
import { Button } from "@/components/ui/button";
import { Calendar, Clock, PhoneCall } from "lucide-react";
import { Card, CardContent } from "@/components/ui/card";

const CallToActionSection = () => {
  return (
    <section id="book-call" className="section-padding bg-thai-blue">
      <div className="container-custom">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          <div>
            <h2 className="text-3xl md:text-4xl font-bold mb-6 text-white">
              Let's Plan Your Perfect Thai Adventure Together
            </h2>
            <p className="text-white/90 mb-6 text-lg">
              Schedule a free 15-minute call to discuss your travel dreams. We'll
              listen to your preferences and start crafting your personalized
              Thai experience.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 mb-8">
              <div className="flex items-center text-white/90">
                <Clock className="mr-2" size={20} />
                <span>15 minute call</span>
              </div>
              <div className="flex items-center text-white/90">
                <Calendar className="mr-2" size={20} />
                <span>Flexible scheduling</span>
              </div>
              <div className="flex items-center text-white/90">
                <PhoneCall className="mr-2" size={20} />
                <span>Video or phone</span>
              </div>
            </div>
            <div className="hidden lg:block">
              <Button asChild size="lg" className="bg-white text-thai-blue hover:bg-white/90">
                <a href="https://calendly.com/salimjahangir67/15min" target="_blank" rel="noopener noreferrer">
                  <Calendar className="mr-2" size={18} />
                  Schedule Your Free Call
                </a>
              </Button>
            </div>
          </div>
          <div>
            <Card className="border-0 shadow-xl">
              <CardContent className="p-8">
                <h3 className="text-2xl font-semibold mb-6">Book Your Free Consultation</h3>
                <p className="text-gray-600 mb-6">
                  During this brief call, we'll discuss:
                </p>
                <ul className="space-y-3 mb-8">
                  <li className="flex items-start">
                    <div className="bg-thai-gold/10 rounded-full p-1 mr-3 mt-1">
                      <div className="bg-thai-gold text-white rounded-full w-4 h-4 flex items-center justify-center text-xs">
                        1
                      </div>
                    </div>
                    <span>Your dream destinations in Thailand</span>
                  </li>
                  <li className="flex items-start">
                    <div className="bg-thai-gold/10 rounded-full p-1 mr-3 mt-1">
                      <div className="bg-thai-gold text-white rounded-full w-4 h-4 flex items-center justify-center text-xs">
                        2
                      </div>
                    </div>
                    <span>Your travel preferences and interests</span>
                  </li>
                  <li className="flex items-start">
                    <div className="bg-thai-gold/10 rounded-full p-1 mr-3 mt-1">
                      <div className="bg-thai-gold text-white rounded-full w-4 h-4 flex items-center justify-center text-xs">
                        3
                      </div>
                    </div>
                    <span>Your budget and timeline considerations</span>
                  </li>
                  <li className="flex items-start">
                    <div className="bg-thai-gold/10 rounded-full p-1 mr-3 mt-1">
                      <div className="bg-thai-gold text-white rounded-full w-4 h-4 flex items-center justify-center text-xs">
                        4
                      </div>
                    </div>
                    <span>Initial recommendations for your journey</span>
                  </li>
                </ul>
                <Button asChild className="w-full bg-thai-gold hover:bg-thai-gold/90 text-lg">
                  <a href="https://calendly.com/salimjahangir67/15min" target="_blank" rel="noopener noreferrer">
                    <Calendar className="mr-2" size={18} />
                    Book a 10-Minute Call
                  </a>
                </Button>
              </CardContent>
            </Card>
          </div>
        </div>
      </div>
    </section>
  );
};

export default CallToActionSection;

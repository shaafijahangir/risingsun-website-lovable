import React from "react";
import Header from "@/app/Header";
import Footer from "@/components/Footer";
import MedicalConsultationForm from "@/components/MedicalConsultationForm";
import { ArrowLeft, Shield, Clock, Users } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";

const BenefitCard = ({
  icon: Icon,
  title,
  description,
}: {
  icon: React.ElementType;
  title: string;
  description: string;
}) => (
  <Card className="h-full">
    <CardContent className="p-6 text-center">
      <div className="flex justify-center mb-4">
        <div className="p-3 rounded-full bg-gradient-to-br from-accent/10 to-primary/10">
          <Icon size={32} className="text-secondary" />
        </div>
      </div>
      <h4 className="text-lg font-semibold mb-2 text-secondary">{title}</h4>
      <p className="text-muted-foreground text-sm">{description}</p>
    </CardContent>
  </Card>
);

const MedicalConsultation = () => {
  const benefits = [
    {
      icon: Shield,
      title: "JCI Accredited Hospitals",
      description: "Connect with internationally certified hospitals maintaining the highest standards of care"
    },
    {
      icon: Clock,
      title: "Fast Scheduling",
      description: "Get consultation appointments within 24-48 hours with our partner specialists"
    },
    {
      icon: Users,
      title: "Expert Specialists",
      description: "Access to Thailand's top medical specialists across all major medical fields"
    }
  ];

  return (
    <div className="min-h-screen bg-gradient-to-br from-brand-offwhite to-accent/10">
      <Header />
      
      {/* Header Section */}
      <section className="section-padding">
        <div className="container-custom">
          <div className="max-w-4xl mx-auto">
            <div className="flex items-center mb-6">
              <Button
                variant="ghost"
                size="sm"
                onClick={() => window.history.back()}
                className="text-secondary hover:bg-secondary/10"
              >
                <ArrowLeft size={18} className="mr-2" />
                Back to Home
              </Button>
            </div>
            
            <div className="text-center mb-12">
              <h1 className="text-4xl md:text-5xl font-bold mb-6 text-secondary">
                Book Your Medical Consultation
              </h1>
              <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
                Connect with world-class medical specialists at Thailand's top hospitals 
                through secure video consultations. Get expert medical opinions from the 
                comfort of your home.
              </p>
            </div>

            {/* Benefits */}
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-12">
              {benefits.map((benefit, index) => (
                <BenefitCard
                  key={index}
                  icon={benefit.icon}
                  title={benefit.title}
                  description={benefit.description}
                />
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Form Section */}
      <section className="pb-16">
        <div className="container-custom">
          <MedicalConsultationForm />
        </div>
      </section>

      {/* Information Section */}
      <section className="section-padding bg-brand-offwhite">
        <div className="container-custom max-w-4xl mx-auto">
          <div className="text-center mb-8">
            <h3 className="text-2xl font-bold mb-4 text-secondary">
              What to Expect
            </h3>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            <div>
              <h4 className="text-lg font-semibold mb-3 text-secondary">Before Your Consultation</h4>
              <ul className="space-y-2 text-muted-foreground">
                <li>• You'll receive a confirmation email with video call details</li>
                <li>• Our team will contact you to verify appointment details</li>
                <li>• Prepare any medical records or test results</li>
                <li>• Ensure stable internet connection for video call</li>
              </ul>
            </div>
            
            <div>
              <h4 className="text-lg font-semibold mb-3 text-secondary">During Your Consultation</h4>
              <ul className="space-y-2 text-muted-foreground">
                <li>• 30-45 minute video consultation with specialist</li>
                <li>• Discuss your medical condition and symptoms</li>
                <li>• Review treatment options and recommendations</li>
                <li>• Get detailed report and next steps</li>
              </ul>
            </div>
          </div>
          
          <div className="mt-8 p-6 bg-accent/10 rounded-lg">
            <h4 className="text-lg font-semibold mb-3 text-secondary">Important Notes</h4>
            <ul className="space-y-2 text-muted-foreground">
              <li>• Consultations are conducted in English with translation available</li>
              <li>• Emergency cases should contact local emergency services immediately</li>
              <li>• Follow-up appointments can be scheduled as needed</li>
              <li>• All consultations are HIPAA compliant and secure</li>
            </ul>
          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
};

export default MedicalConsultation;
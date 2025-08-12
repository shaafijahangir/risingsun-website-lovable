import React, { useState } from "react";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Label } from "@/components/ui/label";
import { Popover, PopoverTrigger, PopoverContent } from "@/components/ui/popover";
import { Calendar as DatePickerCalendar } from "@/components/ui/calendar";
import { useForm } from "react-hook-form";
import { useToast } from "@/hooks/use-toast";
import { 
  Stethoscope, 
  Heart, 
  Shield, 
  Clock, 
  Calendar, 
  CheckCircle,
  Phone,
  Video
} from "lucide-react";

const MedicalSpecialty = ({
  icon: Icon,
  title,
  description,
}: {
  icon: React.ElementType;
  title: string;
  description: string;
}) => (
  <Card className="h-full hover:shadow-lg transition-shadow duration-300">
    <CardContent className="p-6 text-center">
      <div className="flex justify-center mb-4">
        <div className="p-3 rounded-full bg-gradient-to-br from-[#8ECDDD]/10 to-[#FFCC70]/10">
          <Icon size={32} className="text-[#22668D]" />
        </div>
      </div>
      <h4 className="text-lg font-semibold mb-2 text-[#22668D]">{title}</h4>
      <p className="text-gray-600 text-sm">{description}</p>
    </CardContent>
  </Card>
);

const HospitalPartner = ({
  name,
  accreditation,
  specialties,
}: {
  name: string;
  accreditation: string;
  specialties: string;
}) => (
  <Card className="hover:shadow-lg transition-shadow duration-300">
    <CardContent className="p-6">
      <div className="flex items-start justify-between mb-3">
        <h4 className="font-semibold text-[#22668D]">{name}</h4>
        <div className="px-2 py-1 bg-[#FFCC70]/20 text-[#22668D] text-xs rounded-full">
          {accreditation}
        </div>
      </div>
      <p className="text-gray-600 text-sm">{specialties}</p>
    </CardContent>
  </Card>
);

const ProcessStep = ({
  step,
  title,
  description,
  icon: Icon,
}: {
  step: string;
  title: string;
  description: string;
  icon: React.ElementType;
}) => (
  <div className="flex items-start space-x-4">
    <div className="flex-shrink-0">
      <div className="w-12 h-12 rounded-full bg-[#22668D] text-white flex items-center justify-center font-bold">
        {step}
      </div>
    </div>
    <div className="flex-grow">
      <div className="flex items-center mb-2">
        <Icon size={20} className="text-[#22668D] mr-2" />
        <h4 className="font-semibold text-[#22668D]">{title}</h4>
      </div>
      <p className="text-gray-600 text-sm">{description}</p>
    </div>
  </div>
);

const MedicalTourismSection = () => {
  const specialties = [
    {
      icon: Heart,
      title: "Cardiology",
      description: "Heart procedures, cardiac surgery, and cardiovascular treatments"
    },
    {
      icon: Stethoscope,
      title: "Cosmetic Surgery",
      description: "Plastic surgery, dental procedures, and aesthetic treatments"
    },
    {
      icon: Shield,
      title: "Orthopedics",
      description: "Joint replacement, spine surgery, and sports medicine"
    }
  ];

  const hospitals = [
    {
      name: "Bumrungrad International Hospital",
      accreditation: "JCI Accredited",
      specialties: "Multi-specialty, Emergency Care, International Standards"
    },
    {
      name: "Samitivej Hospital",
      accreditation: "JCI Accredited", 
      specialties: "Heart Center, Cancer Treatment, Women's Health"
    },
    {
      name: "BangPakok 9 International Hospital",
      accreditation: "ISO 9001",
      specialties: "General Surgery, Pediatrics, Cardiothoracic Surgery"
    }
  ];

  const processSteps = [
    {
      step: "1",
      title: "Virtual Consultation",
      description: "Connect with top Thai medical specialists via video call",
      icon: Video
    },
    {
      step: "2", 
      title: "Treatment Planning",
      description: "Receive detailed treatment plan and cost estimates",
      icon: CheckCircle
    },
    {
      step: "3",
      title: "Travel Coordination",
      description: "We arrange your medical travel, accommodation, and logistics",
      icon: Calendar
    }
  ];

  // Simple in-section request form state and handlers
  const { register, handleSubmit, reset } = useForm();
  const { toast } = useToast();
  const [appointmentDate, setAppointmentDate] = useState<Date | undefined>();

  const onSubmit = (data: any) => {
    if (!appointmentDate) {
      toast({ title: "Select appointment date", description: "Please choose your preferred appointment date.", });
      return;
    }
    // In a real app, send to backend or Supabase storage.
    toast({
      title: "Teleconsultation request submitted",
      description: "We will contact you within 24 hours to confirm your appointment.",
    });
    reset();
    setAppointmentDate(undefined);
  };

  return (
    <section 
      id="medical-tourism" 
      className="section-padding bg-gradient-to-br from-[#8ECDDD]/10 to-[#FFFADD]"
    >
      <div className="container-custom">
        {/* Header */}
        <div className="text-center mb-16">
          <div className="inline-flex items-center gap-2 bg-[#FFCC70]/10 text-[#22668D] px-4 py-2 rounded-full mb-4">
            <Stethoscope size={18} className="text-[#22668D]" />
            <span className="font-medium">Medical Tourism</span>
          </div>
          <h2 className="text-3xl md:text-4xl font-bold mb-6 font-heading text-[#22668D]">
            Virtual Medical Consultations with Top Thai Hospitals
          </h2>
          <p className="text-gray-600 max-w-3xl mx-auto text-lg">
            Access world-class healthcare in Thailand through telemedicine consultations 
            with leading hospitals. Plan your medical treatment journey with confidence.
          </p>
        </div>

        {/* Medical Specialties */}
        <div className="mb-16">
          <h3 className="text-2xl font-bold text-center mb-8 text-[#22668D]">
            Available Medical Specialties
          </h3>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {specialties.map((specialty, index) => (
              <MedicalSpecialty
                key={index}
                icon={specialty.icon}
                title={specialty.title}
                description={specialty.description}
              />
            ))}
          </div>
        </div>

        {/* Partner Hospitals */}
        <div className="mb-16">
          <h3 className="text-2xl font-bold text-center mb-8 text-[#22668D]">
            Our Partner Hospitals
          </h3>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {hospitals.map((hospital, index) => (
              <HospitalPartner
                key={index}
                name={hospital.name}
                accreditation={hospital.accreditation}
                specialties={hospital.specialties}
              />
            ))}
          </div>
        </div>

        {/* Process */}
        <div className="mb-16">
          <h3 className="text-2xl font-bold text-center mb-8 text-[#22668D]">
            How It Works
          </h3>
          <div className="max-w-2xl mx-auto space-y-8">
            {processSteps.map((step, index) => (
              <ProcessStep
                key={index}
                step={step.step}
                title={step.title}
                description={step.description}
                icon={step.icon}
              />
            ))}
          </div>
        </div>

        {/* Teleconsultation Request (replaces CTA) */}
        <div className="bg-[#FFFADD] rounded-2xl p-8">
          <div className="max-w-3xl mx-auto">
            <h3 className="text-2xl font-bold mb-2 text-[#22668D] text-center">
              Request a Teleconsultation
            </h3>
            <p className="text-muted-foreground mb-8 text-center">
              Share your details to book a virtual appointment with top Thai specialists.
            </p>
            <form onSubmit={handleSubmit(onSubmit)} className="grid grid-cols-1 md:grid-cols-2 gap-6">
              {/* Passport Copy */}
              <div className="space-y-2">
                <Label htmlFor="passport">Passport copy</Label>
                <Input
                  id="passport"
                  type="file"
                  accept="image/*,application/pdf"
                  {...register("passport", { required: true })}
                  aria-required
                />
                <p className="text-xs text-muted-foreground">Accepted: PDF, JPG, PNG</p>
              </div>

              {/* Preferred Date */}
              <div className="space-y-2">
                <Label>Preferred appointment date</Label>
                <Popover>
                  <PopoverTrigger asChild>
                    <Button
                      type="button"
                      variant="outline"
                      className="justify-start font-normal"
                    >
                      {appointmentDate ? appointmentDate.toDateString() : "Pick a date"}
                      <Clock className="ml-auto" size={18} />
                    </Button>
                  </PopoverTrigger>
                  <PopoverContent className="w-auto p-0" align="start">
                    <DatePickerCalendar
                      mode="single"
                      selected={appointmentDate}
                      onSelect={setAppointmentDate}
                      initialFocus
                      className="p-3 pointer-events-auto"
                    />
                  </PopoverContent>
                </Popover>
              </div>

              {/* Issue */}
              <div className="space-y-2 md:col-span-2">
                <Label htmlFor="issue">Medical problem/issue to be discussed</Label>
                <Textarea
                  id="issue"
                  rows={4}
                  placeholder="Briefly describe your medical concern..."
                  {...register("issue", { required: true, minLength: 10 })}
                  aria-required
                />
              </div>

              <div className="md:col-span-2 flex flex-col sm:flex-row gap-3 justify-end">
                <Button type="submit" size="lg">
                  Request Teleconsultation
                </Button>
              </div>
            </form>
          </div>
        </div>
      </div>
    </section>
  );
};

export default MedicalTourismSection;
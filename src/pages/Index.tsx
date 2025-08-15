
import React from "react";
import { LocalizedMeta } from "@/components/LocalizedMeta";
import Navbar from "@/components/Navbar";
import Hero from "@/components/Hero";
import ServicesSection from "@/components/ServicesSection";
import MedicalTourismSection from "@/components/MedicalTourismSection";
import PackagesSection from "@/components/PackagesSection";
import AboutSection from "@/components/AboutSection";
import TestimonialsSection from "@/components/TestimonialsSection";
import CallToActionSection from "@/components/CallToActionSection";
import Footer from "@/components/Footer";

const Index = () => {
  return (
    <>
      <LocalizedMeta />
      <div className="min-h-screen">
        <Navbar />
        <Hero />
        <ServicesSection />
        <MedicalTourismSection />
        <PackagesSection />
        <AboutSection />
        <TestimonialsSection />
        <CallToActionSection />
        <Footer />
      </div>
    </>
  );
};

export default Index;

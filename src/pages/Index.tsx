
import React, { Suspense } from "react";
import Header from "@/app/Header";
import Hero from "@/components/Hero";
import ServicesSection from "@/components/ServicesSection";
import MedicalTourismSection from "@/components/MedicalTourismSection";
import PackagesSection from "@/components/PackagesSection";
import AboutSection from "@/components/AboutSection";
import TestimonialsSection from "@/components/TestimonialsSection";
import CallToActionSection from "@/components/CallToActionSection";
import Footer from "@/components/Footer";
import { ErrorBoundary } from "@/components/ErrorBoundary";
import { LoadingState } from "@/components/LoadingState";

const Index = () => {
  return (
    <ErrorBoundary>
      <div className="min-h-screen">
        <Header />
        <Hero />
        
        <Suspense fallback={<LoadingState text="Loading services..." />}>
          <ErrorBoundary>
            <ServicesSection />
          </ErrorBoundary>
        </Suspense>
        
        <Suspense fallback={<LoadingState text="Loading medical tourism info..." />}>
          <ErrorBoundary>
            <MedicalTourismSection />
          </ErrorBoundary>
        </Suspense>
        
        <Suspense fallback={<LoadingState text="Loading packages..." />}>
          <ErrorBoundary>
            <PackagesSection />
          </ErrorBoundary>
        </Suspense>
        
        <Suspense fallback={<LoadingState text="Loading about section..." />}>
          <ErrorBoundary>
            <AboutSection />
          </ErrorBoundary>
        </Suspense>
        
        <Suspense fallback={<LoadingState text="Loading testimonials..." />}>
          <ErrorBoundary>
            <TestimonialsSection />
          </ErrorBoundary>
        </Suspense>
        
        <Suspense fallback={<LoadingState text="Loading contact info..." />}>
          <ErrorBoundary>
            <CallToActionSection />
          </ErrorBoundary>
        </Suspense>
        
        <Footer />
      </div>
    </ErrorBoundary>
  );
};

export default Index;

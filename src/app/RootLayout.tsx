import React from "react";
import Header from "./Header";
import Footer from "@/components/Footer";
import MobileActionBar from "@/components/MobileActionBar";

interface RootLayoutProps {
  children: React.ReactNode;
}

const RootLayout: React.FC<RootLayoutProps> = ({ children }) => {
  return (
    <div className="min-h-screen bg-background text-foreground">
      <Header />
      <main className="py-8">
        <div className="max-w-7xl mx-auto px-4">{children}</div>
      </main>
      <Footer />
      <MobileActionBar />
    </div>
  );
};

export default RootLayout;

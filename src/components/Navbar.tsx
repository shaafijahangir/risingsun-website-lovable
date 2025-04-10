
import React, { useState, useEffect } from "react";
import { Button } from "@/components/ui/button";
import { Menu, X, Phone } from "lucide-react";
import { cn } from "@/lib/utils";

const Navbar = () => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 20) {
        setIsScrolled(true);
      } else {
        setIsScrolled(false);
      }
    };

    window.addEventListener("scroll", handleScroll);
    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  const toggleMobileMenu = () => {
    setMobileMenuOpen(!mobileMenuOpen);
  };

  return (
    <nav
      className={cn(
        "fixed w-full z-50 transition-all duration-300",
        isScrolled
          ? "bg-white shadow-md py-2"
          : "bg-transparent py-4"
      )}
    >
      <div className="container-custom flex justify-between items-center">
        <div className="flex items-center">
          <a href="/" className="text-2xl font-heading font-bold text-thai-gold">
            Rising Sun
          </a>
        </div>

        {/* Desktop Navigation */}
        <div className="hidden md:flex items-center space-x-8">
          <a href="#services" className="text-foreground hover:text-thai-gold transition-colors">Services</a>
          <a href="#packages" className="text-foreground hover:text-thai-gold transition-colors">Packages</a>
          <a href="#about" className="text-foreground hover:text-thai-gold transition-colors">About Us</a>
          <a href="#testimonials" className="text-foreground hover:text-thai-gold transition-colors">Testimonials</a>
          <Button asChild className="bg-thai-gold hover:bg-thai-gold/90 text-white flex items-center gap-2">
            <a href="#book-call">
              <Phone size={16} />
              <span>Book a Call</span>
            </a>
          </Button>
        </div>

        {/* Mobile Menu Button */}
        <Button
          variant="ghost"
          className="md:hidden"
          onClick={toggleMobileMenu}
        >
          {mobileMenuOpen ? <X size={24} /> : <Menu size={24} />}
        </Button>
      </div>

      {/* Mobile Navigation */}
      <div
        className={cn(
          "fixed inset-x-0 top-[60px] bg-white shadow-md md:hidden transition-all duration-300 overflow-hidden",
          mobileMenuOpen ? "max-h-[400px]" : "max-h-0"
        )}
      >
        <div className="container-custom py-4 flex flex-col space-y-4">
          <a href="#services" className="text-foreground hover:text-thai-gold transition-colors py-2 border-b border-gray-100" onClick={toggleMobileMenu}>Services</a>
          <a href="#packages" className="text-foreground hover:text-thai-gold transition-colors py-2 border-b border-gray-100" onClick={toggleMobileMenu}>Packages</a>
          <a href="#about" className="text-foreground hover:text-thai-gold transition-colors py-2 border-b border-gray-100" onClick={toggleMobileMenu}>About Us</a>
          <a href="#testimonials" className="text-foreground hover:text-thai-gold transition-colors py-2 border-b border-gray-100" onClick={toggleMobileMenu}>Testimonials</a>
          <Button asChild className="bg-thai-gold hover:bg-thai-gold/90 text-white w-full flex items-center justify-center gap-2">
            <a href="#book-call" onClick={toggleMobileMenu}>
              <Phone size={16} />
              <span>Book a Call</span>
            </a>
          </Button>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;

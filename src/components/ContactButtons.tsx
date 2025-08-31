import React from "react";
import { Button } from "@/components/ui/button";
import { Mail, MessageCircle, Phone } from "lucide-react";

interface ContactButtonsProps {
  className?: string;
  variant?: "default" | "outline" | "secondary";
  size?: "default" | "sm" | "lg";
}

const ContactButtons = ({ 
  className = "", 
  variant = "default", 
  size = "default" 
}: ContactButtonsProps) => {
  const handleWhatsAppClick = () => {
    const message = encodeURIComponent("Hi, I'm interested in medical consultation services in Thailand. Could you please provide more information?");
    window.open(`https://wa.me/66812052022?text=${message}`, "_blank");
  };

  const handleEmailClick = () => {
    const subject = encodeURIComponent("Medical Consultation Inquiry");
    const body = encodeURIComponent("Dear Salim,\n\nI am interested in learning more about your medical consultation services in Thailand.\n\nBest regards,");
    window.open(`mailto:salimjahangir67@gmail.com?subject=${subject}&body=${body}`, "_blank");
  };

  const handlePhoneClick = () => {
    window.open("tel:+66812052022", "_blank");
  };

  return (
    <div className={`flex flex-col sm:flex-row gap-3 ${className}`}>
      <Button 
        onClick={handleWhatsAppClick}
        variant={variant}
        size={size}
        className="flex items-center gap-2 bg-[#25D366] hover:bg-[#25D366]/90 text-white border-[#25D366]"
      >
        <MessageCircle size={18} />
        WhatsApp Consultation
      </Button>
      
      <Button 
        onClick={handleEmailClick}
        variant="outline"
        size={size}
        className="flex items-center gap-2"
      >
        <Mail size={18} />
        Email Inquiry
      </Button>
      
      <Button 
        onClick={handlePhoneClick}
        variant="outline"
        size={size}
        className="flex items-center gap-2"
      >
        <Phone size={18} />
        Call Now
      </Button>
    </div>
  );
};

export default ContactButtons;
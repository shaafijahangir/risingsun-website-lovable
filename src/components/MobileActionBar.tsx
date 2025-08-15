import React, { useState } from "react";
import { Phone, MessageCircle, Calendar } from "lucide-react";
import { Button } from "@/components/ui/button";
import {
  Dialog,
  DialogContent,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from "@/components/ui/dialog";
import MedicalConsultationForm from "./MedicalConsultationForm";

const MobileActionBar = () => {
  const [isDialogOpen, setIsDialogOpen] = useState(false);

  return (
    <>
      {/* Mobile Action Bar */}
      <div className="fixed bottom-0 left-0 right-0 z-50 md:hidden">
        <div className="bg-background/95 backdrop-blur-sm border-t border-border">
          <div className="grid grid-cols-3 gap-2 p-3 pb-safe">
            {/* Call */}
            <Button
              variant="ghost"
              size="lg"
              className="flex flex-col gap-1 h-auto py-3"
              asChild
            >
              <a href="tel:+66-XXX-XXX-XXX">
                <Phone className="h-5 w-5" />
                <span className="text-xs font-medium">Call</span>
              </a>
            </Button>

            {/* WhatsApp */}
            <Button
              variant="ghost"
              size="lg"
              className="flex flex-col gap-1 h-auto py-3"
              asChild
            >
              <a
                href="https://wa.me/66XXXXXXXXX"
                target="_blank"
                rel="noopener noreferrer"
              >
                <MessageCircle className="h-5 w-5" />
                <span className="text-xs font-medium">WhatsApp</span>
              </a>
            </Button>

            {/* Book a Call */}
            <Dialog open={isDialogOpen} onOpenChange={setIsDialogOpen}>
              <DialogTrigger asChild>
                <Button
                  variant="primary"
                  size="lg"
                  className="flex flex-col gap-1 h-auto py-3"
                >
                  <Calendar className="h-5 w-5" />
                  <span className="text-xs font-medium">Book</span>
                </Button>
              </DialogTrigger>
              <DialogContent className="max-w-[95vw] max-h-[90vh] overflow-auto">
                <DialogHeader>
                  <DialogTitle>Book Your Consultation</DialogTitle>
                </DialogHeader>
                <MedicalConsultationForm />
              </DialogContent>
            </Dialog>
          </div>
        </div>
      </div>

      {/* Spacer to prevent content from being hidden behind the action bar */}
      <div className="h-20 md:hidden" />
    </>
  );
};

export default MobileActionBar;
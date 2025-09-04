import { NavLink, Link } from "react-router-dom";
import CtaButton from "@/components/CtaButton";
import LanguageSwitcher from "@/components/LanguageSwitcher";
import { Sheet, SheetContent, SheetTrigger } from "@/components/ui/sheet";
import { Button } from "@/components/ui/button";
import { Menu } from "lucide-react";
import { useState, useEffect } from "react";
import { useI18n } from "@/i18n/context";

const Header = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);
  const { t } = useI18n();

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20);
    };

    // Check initial scroll position
    handleScroll();

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);
  
  const navCls = ({ isActive }: { isActive: boolean }) =>
    isActive 
      ? `text-primary font-medium ${!isScrolled ? 'drop-shadow-sm' : ''}`
      : `${!isScrolled ? 'text-white drop-shadow-sm hover:text-white/90' : 'text-foreground/80 hover:text-foreground'} transition-colors`;

  const navItems = [
    { name: t("common.services"), href: "#services" },
    { name: t("common.medicalTravel"), href: "#medical-tourism" },
    { name: t("common.packages"), href: "#packages" },
    { name: t("common.about"), href: "#about" },
    { name: t("common.testimonials"), href: "#testimonials" },
  ];

  return (
    <header className={`sticky top-0 z-50 transition-all duration-300 ${
      isScrolled 
        ? 'bg-background/98 backdrop-blur-md border-b border-border/20 shadow-sm' 
        : 'bg-black/20 backdrop-blur-sm border-transparent'
    }`}>
      <div className="max-w-7xl mx-auto px-4">
        <div className="h-16 flex items-center justify-between">
          {/* Logo */}
          <div className="flex items-center flex-shrink-0">
            <Link to="/" className="flex items-center gap-2">
              <img
                src="/risingsun-logo.png"
                alt="Rising Sun logo"
                className={`h-8 w-auto transition-all duration-300 ${!isScrolled ? 'drop-shadow-sm' : ''}`}
                loading="lazy"
              />
              <span className="sr-only">Home</span>
            </Link>
          </div>

          {/* Center Navigation */}
          <nav className="hidden lg:flex items-center justify-center gap-4 xl:gap-6 flex-1 mx-8">
            <NavLink to="/" end className={navCls}>
              {t("common.home")}
            </NavLink>
             {navItems.map((item) => (
               <a
                 key={item.name}
                 href={item.href}
                 className={`${!isScrolled ? 'text-white drop-shadow-sm hover:text-white/90' : 'text-foreground/80 hover:text-foreground'} transition-colors whitespace-nowrap`}
               >
                 {item.name}
               </a>
             ))}
          </nav>

          {/* Right Actions */}
          <div className="flex items-center gap-2 flex-shrink-0">
            <LanguageSwitcher />
            <CtaButton asChild className="hidden sm:flex ml-1">
              <Link to="/medical-consultation">{t("common.bookCall")}</Link>
            </CtaButton>
            
            {/* Mobile hamburger */}
            <Sheet open={isOpen} onOpenChange={setIsOpen}>
              <SheetTrigger asChild>
                <Button variant="ghost" size="icon" className={`lg:hidden ml-1 ${!isScrolled ? 'text-white hover:text-white/90 hover:bg-white/10' : ''}`}>
                  <Menu className="h-5 w-5" />
                  <span className="sr-only">Toggle navigation menu</span>
                </Button>
              </SheetTrigger>
              <SheetContent side="right" className="w-80">
                <div className="flex flex-col gap-6 mt-6">
                  <NavLink
                    to="/"
                    end
                    className={navCls}
                    onClick={() => setIsOpen(false)}
                  >
                    {t("common.home")}
                  </NavLink>
                  {navItems.map((item) => (
                    <a
                      key={item.name}
                      href={item.href}
                      className="text-foreground/80 hover:text-foreground transition-colors"
                      onClick={() => setIsOpen(false)}
                    >
                      {item.name}
                    </a>
                  ))}
                  <NavLink
                    to="/medical-consultation"
                    className={navCls}
                    onClick={() => setIsOpen(false)}
                  >
                    {t("common.medicalConsultation")}
                  </NavLink>
                  <div className="mt-4 space-y-3">
                    <LanguageSwitcher />
                    <CtaButton asChild>
                      <Link to="/medical-consultation" onClick={() => setIsOpen(false)}>
                        {t("common.bookCall")}
                      </Link>
                    </CtaButton>
                  </div>
                </div>
              </SheetContent>
            </Sheet>
          </div>
        </div>
      </div>
    </header>
  );
};

export default Header;

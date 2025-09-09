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
      ? `text-primary font-medium drop-shadow-sm`
      : `text-foreground/80 hover:text-foreground transition-colors drop-shadow-sm`;

  const navItems = [
    { name: t("common.services"), href: "#services" },
    { name: t("common.medicalTravel"), href: "#medical-tourism" },
    { name: t("common.packages"), href: "#packages" },
    { name: t("common.about"), href: "#about" },
    { name: t("common.testimonials"), href: "#testimonials" },
  ];

  return (
    <header className={`sticky top-0 z-50 transition-all duration-500 ease-out glass-morphism shadow-3d-md ${
      isScrolled 
        ? 'backdrop-blur-md border-b border-white/20 shadow-float' 
        : 'border-transparent shadow-3d-sm'
    }`}>
      <div className="max-w-7xl mx-auto px-4 h-18 lg:h-20 flex items-center justify-between">
        {/* Logo */}
        <div className="flex items-center flex-shrink-0">
            <Link to="/" className="flex items-center gap-2 hover-lift group">
              <img
                src="/risingsun-logo.png"
                alt="Rising Sun logo"
                className="h-8 lg:h-10 w-auto"
                loading="lazy"
              />
              <span className="sr-only">Home</span>
            </Link>
          </div>

          {/* Center Navigation */}
          <nav className="hidden lg:flex items-center justify-center gap-6 xl:gap-8 flex-1 mx-8">
            <NavLink to="/" end className={({ isActive }) => 
              `nav-link-3d font-medium px-3 py-2 rounded-lg transition-all duration-300 ${
                isActive 
                  ? 'text-primary text-shadow-lg bg-white/10 shadow-inner-glow' 
                  : 'text-foreground/80 hover:text-foreground hover:bg-white/5'
              }`
            }>
              {t("common.home")}
            </NavLink>
             {navItems.map((item, index) => (
                <a
                  key={item.name}
                  href={item.href}
                  className="nav-link-3d text-foreground/80 hover:text-foreground transition-all duration-300 whitespace-nowrap px-3 py-2 rounded-lg hover:bg-white/5 font-medium"
                  style={{ animationDelay: `${index * 100}ms` }}
                >
                  {item.name}
                </a>
              ))}
          </nav>

          {/* Right Actions */}
          <div className="flex items-center gap-3 flex-shrink-0">
            <LanguageSwitcher />
            <CtaButton asChild className="hidden sm:flex ml-1 btn-3d hover-glow">
              <Link to="/medical-consultation">{t("common.bookCall")}</Link>
            </CtaButton>
            
            {/* Mobile hamburger */}
            <Sheet open={isOpen} onOpenChange={setIsOpen}>
              <SheetTrigger asChild>
                <Button variant="ghost" size="icon" className="lg:hidden ml-1 text-foreground/80 hover:text-foreground shadow-3d-sm hover:shadow-3d-md transition-all duration-300 hover-lift">
                  <Menu className="h-5 w-5" />
                  <span className="sr-only">Toggle navigation menu</span>
                </Button>
              </SheetTrigger>
              <SheetContent side="right" className="w-80 glass-morphism shadow-3d-xl">
                <div className="flex flex-col gap-6 mt-6">
                  <NavLink
                    to="/"
                    end
                    className={({ isActive }) => 
                      `nav-link-3d font-medium px-4 py-3 rounded-lg transition-all duration-300 ${
                        isActive 
                          ? 'text-primary text-shadow-lg bg-white/10 shadow-inner-glow' 
                          : 'text-foreground/80 hover:text-foreground hover:bg-white/5'
                      }`
                    }
                    onClick={() => setIsOpen(false)}
                  >
                    {t("common.home")}
                  </NavLink>
                  {navItems.map((item, index) => (
                    <a
                      key={item.name}
                      href={item.href}
                      className="nav-link-3d text-foreground/80 hover:text-foreground transition-all duration-300 px-4 py-3 rounded-lg hover:bg-white/5 font-medium stagger-fade"
                      style={{ animationDelay: `${index * 100}ms` }}
                      onClick={() => setIsOpen(false)}
                    >
                      {item.name}
                    </a>
                  ))}
                  <NavLink
                    to="/medical-consultation"
                    className={({ isActive }) => 
                      `nav-link-3d font-medium px-4 py-3 rounded-lg transition-all duration-300 ${
                        isActive 
                          ? 'text-primary text-shadow-lg bg-white/10 shadow-inner-glow' 
                          : 'text-foreground/80 hover:text-foreground hover:bg-white/5'
                      }`
                    }
                    onClick={() => setIsOpen(false)}
                  >
                    {t("common.medicalConsultation")}
                  </NavLink>
                  <div className="mt-4 space-y-4">
                    <LanguageSwitcher />
                    <CtaButton asChild className="btn-3d hover-glow w-full">
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
    </header>
  );
};

export default Header;

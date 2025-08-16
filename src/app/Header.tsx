import { NavLink, Link } from "react-router-dom";
import CtaButton from "@/components/CtaButton";
import LanguageSwitcher from "@/components/LanguageSwitcher";
import { Sheet, SheetContent, SheetTrigger } from "@/components/ui/sheet";
import { Button } from "@/components/ui/button";
import { Menu } from "lucide-react";
import { useState } from "react";
import { useI18n } from "@/i18n/context";

const Header = () => {
  const [isOpen, setIsOpen] = useState(false);
  const { t } = useI18n();
  
  const navCls = ({ isActive }: { isActive: boolean }) =>
    isActive ? "text-primary font-medium" : "text-foreground/80 hover:text-foreground";

  const navItems = [
    { name: t("common.destinations"), href: "#destinations" },
    { name: t("common.packages"), href: "#packages" },
    { name: t("common.tripBuilder"), href: "#trip-builder" },
    { name: t("common.about"), href: "#about" },
    { name: t("common.testimonials"), href: "#testimonials" },
    { name: t("common.blogGuides"), href: "#blog" },
    { name: t("common.medicalTravel"), href: "/medical-consultation" },
    { name: t("common.contact"), href: "#contact" },
  ];

  return (
    <header className="sticky top-0 z-50 border-b bg-background/80 backdrop-blur">
      <div className="max-w-7xl mx-auto px-4">
        <div className="h-16 grid grid-cols-3 items-center gap-4">
          {/* Logo left */}
          <div className="flex items-center">
            <Link to="/" className="flex items-center gap-2">
              <img
                src="/risingsun-logo.png"
                alt="Rising Sun logo"
                className="h-8 w-auto"
                loading="lazy"
              />
              <span className="sr-only">Home</span>
            </Link>
          </div>

          {/* Nav center */}
          <nav className="hidden lg:flex items-center justify-center gap-6">
            <NavLink to="/" end className={navCls}>
              {t("common.home")}
            </NavLink>
            {navItems.map((item) => (
              item.href.startsWith("/") ? (
                <NavLink key={item.name} to={item.href} className={navCls}>
                  {item.name}
                </NavLink>
              ) : (
                <a
                  key={item.name}
                  href={item.href}
                  className="text-foreground/80 hover:text-foreground transition-colors"
                >
                  {item.name}
                </a>
              )
            ))}
          </nav>

          {/* CTA right */}
          <div className="flex items-center justify-end gap-2">
            <LanguageSwitcher />
            <CtaButton asChild className="hidden sm:flex">
              <Link to="/medical-consultation">{t("common.bookCall")}</Link>
            </CtaButton>
            
            {/* Mobile hamburger */}
            <Sheet open={isOpen} onOpenChange={setIsOpen}>
              <SheetTrigger asChild>
                <Button variant="ghost" size="icon" className="lg:hidden">
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
                    item.href.startsWith("/") ? (
                      <NavLink
                        key={item.name}
                        to={item.href}
                        className={navCls}
                        onClick={() => setIsOpen(false)}
                      >
                        {item.name}
                      </NavLink>
                    ) : (
                      <a
                        key={item.name}
                        href={item.href}
                        className="text-foreground/80 hover:text-foreground transition-colors"
                        onClick={() => setIsOpen(false)}
                      >
                        {item.name}
                      </a>
                    )
                  ))}
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

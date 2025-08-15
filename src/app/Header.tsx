import { NavLink, Link } from "react-router-dom";
import CtaButton from "@/components/CtaButton";
import { Sheet, SheetContent, SheetTrigger } from "@/components/ui/sheet";
import { Button } from "@/components/ui/button";
import { Menu } from "lucide-react";
import { useState } from "react";
import { LanguageSwitcher } from "@/components/LanguageSwitcher";
import { useI18n } from "@/i18n/context";

const Header = () => {
  const [isOpen, setIsOpen] = useState(false);
  const { t, locale } = useI18n();
  
  const navCls = ({ isActive }: { isActive: boolean }) =>
    isActive ? "text-primary font-medium" : "text-foreground/80 hover:text-foreground";

  const navItems = [
    { nameKey: "nav.destinations", href: "#destinations" },
    { nameKey: "nav.packages", href: "#packages" },
    { nameKey: "nav.tripBuilder", href: "#trip-builder" },
    { nameKey: "nav.about", href: "#about" },
    { nameKey: "nav.testimonials", href: "#testimonials" },
    { nameKey: "nav.blog", href: "#blog" },
    { nameKey: "nav.medicalTravel", href: `/${locale}/medical-consultation` },
    { nameKey: "nav.contact", href: "#contact" },
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
            <NavLink to={`/${locale}`} end className={navCls}>
              {t('nav.home')}
            </NavLink>
            {navItems.map((item) => (
              item.href.startsWith("/") ? (
                <NavLink key={item.nameKey} to={item.href} className={navCls}>
                  {t(item.nameKey)}
                </NavLink>
              ) : (
                <a
                  key={item.nameKey}
                  href={item.href}
                  className="text-foreground/80 hover:text-foreground transition-colors"
                >
                  {t(item.nameKey)}
                </a>
              )
            ))}
          </nav>

          {/* CTA right */}
          <div className="flex items-center justify-end gap-2">
            <CtaButton asChild className="hidden sm:flex">
              <Link to={`/${locale}/medical-consultation`}>{t('hero.primaryCta')}</Link>
            </CtaButton>
            
            <LanguageSwitcher variant="desktop" />
            
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
                    to={`/${locale}`}
                    end
                    className={navCls}
                    onClick={() => setIsOpen(false)}
                  >
                    {t('nav.home')}
                  </NavLink>
                  {navItems.map((item) => (
                    item.href.startsWith("/") ? (
                      <NavLink
                        key={item.nameKey}
                        to={item.href}
                        className={navCls}
                        onClick={() => setIsOpen(false)}
                      >
                        {t(item.nameKey)}
                      </NavLink>
                    ) : (
                      <a
                        key={item.nameKey}
                        href={item.href}
                        className="text-foreground/80 hover:text-foreground transition-colors"
                        onClick={() => setIsOpen(false)}
                      >
                        {t(item.nameKey)}
                      </a>
                    )
                  ))}
                  <div className="border-t pt-6 mt-6">
                    <LanguageSwitcher variant="mobile" />
                  </div>
                  <CtaButton asChild className="mt-4">
                    <Link to={`/${locale}/medical-consultation`} onClick={() => setIsOpen(false)}>
                      {t('hero.primaryCta')}
                    </Link>
                  </CtaButton>
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

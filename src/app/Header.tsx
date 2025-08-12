import { NavLink, Link } from "react-router-dom";
import CtaButton from "@/components/CtaButton";

const Header = () => {
  const navCls = ({ isActive }: { isActive: boolean }) =>
    isActive ? "text-primary font-medium" : "text-foreground/80 hover:text-foreground";

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
          <nav className="hidden md:flex items-center justify-center gap-6">
            <NavLink to="/" end className={navCls}>
              Home
            </NavLink>
            <NavLink to="/medical-consultation" className={navCls}>
              Teleconsultation
            </NavLink>
            <a href="#services" className="text-foreground/80 hover:text-foreground">
              Services
            </a>
          </nav>

          {/* CTA right */}
          <div className="flex items-center justify-end">
            <CtaButton asChild>
              <Link to="/medical-consultation">Book a Call</Link>
            </CtaButton>
          </div>
        </div>
      </div>
    </header>
  );
};

export default Header;

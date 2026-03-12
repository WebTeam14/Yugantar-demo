import { useState } from "react";
import { Link, useLocation } from "react-router-dom";
import { Menu, X, Phone } from "lucide-react";
import logo from "@/assets/logo.png";

const navLinks = [
  { label: "Home", path: "/" },
  { label: "About Us", path: "/about" },
  { label: "Services", path: "/services" },
  { label: "Gallery", path: "/gallery" },
  { label: "Contact Us", path: "/contact" },
];

const Navbar = () => {
  const [open, setOpen] = useState(false);
  const location = useLocation();

  return (
    <nav className="fixed top-0 left-0 right-0 z-50 bg-card/95 backdrop-blur-sm shadow-md">
      <div className="container mx-auto flex items-center justify-between py-3 px-4 lg:px-8">
        <Link to="/" className="flex items-center gap-3">
          <img src={logo} alt="युगांतर Logo" className="h-14 w-auto" />
        </Link>

        {/* Desktop nav */}
        <div className="hidden md:flex items-center gap-8">
          {navLinks.map((link) => (
            <Link
              key={link.path}
              to={link.path}
              className={`font-body text-sm font-semibold uppercase tracking-wider transition-colors hover:text-secondary ${
                location.pathname === link.path
                  ? "text-secondary border-b-2 border-secondary pb-1"
                  : "text-foreground"
              }`}
            >
              {link.label}
            </Link>
          ))}
        </div>

        <a
          href="tel:+919999999999"
          className="hidden lg:flex items-center gap-2 bg-gradient-brand text-primary-foreground px-5 py-2.5 rounded-md font-body font-semibold text-sm hover:opacity-90 transition-opacity"
        >
          <Phone className="w-4 h-4" />
          Call Us
        </a>

        {/* Mobile toggle */}
        <button
          onClick={() => setOpen(!open)}
          className="md:hidden text-foreground"
          aria-label="Toggle menu"
        >
          {open ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
        </button>
      </div>

      {/* Mobile menu */}
      {open && (
        <div className="md:hidden bg-card border-t border-border animate-fade-in">
          <div className="flex flex-col py-4 px-6 gap-4">
            {navLinks.map((link) => (
              <Link
                key={link.path}
                to={link.path}
                onClick={() => setOpen(false)}
                className={`font-body text-sm font-semibold uppercase tracking-wider py-2 ${
                  location.pathname === link.path ? "text-secondary" : "text-foreground"
                }`}
              >
                {link.label}
              </Link>
            ))}
            <a
              href="tel:+919999999999"
              className="flex items-center gap-2 bg-gradient-brand text-primary-foreground px-5 py-2.5 rounded-md font-body font-semibold text-sm justify-center mt-2"
            >
              <Phone className="w-4 h-4" />
              Call Us
            </a>
          </div>
        </div>
      )}
    </nav>
  );
};

export default Navbar;

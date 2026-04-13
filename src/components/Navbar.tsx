import { useState, useRef, useEffect } from "react";
import { Link, useLocation } from "react-router-dom";
import { Menu, X, Phone, ChevronDown } from "lucide-react";
import logo from "@/assets/LOGO-2.png";

const navLinks = [
  { label: "Home", path: "/" },
  {
    label: "About Us",
    path: "/about",
    subLinks: [
      { label: "Company Profile", path: "/about" },
      { label: "Our Team", path: "/team" },
    ],
  },
  { label: "Services", path: "/services" },
  { label: "Gallery", path: "/gallery" },
  { label: "Contact Us", path: "/contact" },
];

const Navbar = () => {
  const [open, setOpen] = useState(false);
  const [dropdownOpen, setDropdownOpen] = useState(false);
  const location = useLocation();
  const dropdownRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const handleClickOutside = (event: MouseEvent) => {
      if (dropdownRef.current && !dropdownRef.current.contains(event.target as Node)) {
        setDropdownOpen(false);
      }
    };
    document.addEventListener("mousedown", handleClickOutside);
    return () => document.removeEventListener("mousedown", handleClickOutside);
  }, []);

  return (
    <nav className="bg-card/95 backdrop-blur-sm shadow-md">
      <div className="container mx-auto flex items-center justify-between py-3 px-4 lg:px-8">
        <Link to="/" className="flex items-center gap-3">
          <img src={logo} alt="युगांतर Logo" className="h-20 w-auto" />
        </Link>

        {/* Desktop nav */}
        <div className="hidden md:flex items-center gap-8">
          {navLinks.map((link) => (
            <div key={link.label} className="relative group">
              {link.subLinks ? (
                <div
                  ref={dropdownRef}
                  className="relative"
                  onMouseEnter={() => setDropdownOpen(true)}
                  onMouseLeave={() => setDropdownOpen(false)}
                >
                  <button
                    className={`flex items-center gap-1 font-body text-sm font-semibold uppercase tracking-wider transition-colors hover:text-secondary ${location.pathname.startsWith(link.path)
                      ? "text-secondary border-b-2 border-secondary pb-1"
                      : "text-foreground"
                      }`}
                  >
                    {link.label}
                    <ChevronDown className={`w-4 h-4 transition-transform ${dropdownOpen ? "rotate-180" : ""}`} />
                  </button>

                  {/* Dropdown Menu */}
                  <div
                    className={`absolute left-0 mt-2 w-48 bg-card border border-border rounded-md shadow-xl transition-all duration-300 ${dropdownOpen ? "opacity-100 visible translate-y-0" : "opacity-0 invisible -translate-y-2"
                      }`}
                  >
                    <div className="py-2">
                      {link.subLinks.map((sub) => (
                        <Link
                          key={sub.path}
                          to={sub.path}
                          className={`block px-4 py-2 text-sm font-semibold transition-colors hover:bg-muted ${location.pathname === sub.path ? "text-secondary" : "text-foreground"
                            }`}
                        >
                          {sub.label}
                        </Link>
                      ))}
                    </div>
                  </div>
                </div>
              ) : (
                <Link
                  to={link.path}
                  className={`font-body text-sm font-semibold uppercase tracking-wider transition-colors hover:text-secondary ${location.pathname === link.path
                    ? "text-secondary border-b-2 border-secondary pb-1"
                    : "text-foreground"
                    }`}
                >
                  {link.label}
                </Link>
              )}
            </div>
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
              <div key={link.label}>
                {link.subLinks ? (
                  <div className="flex flex-col gap-2">
                    <span className="font-body text-sm font-bold uppercase tracking-wider text-muted-foreground">
                      {link.label}
                    </span>
                    <div className="pl-4 flex flex-col gap-3 border-l-2 border-border mt-1">
                      {link.subLinks.map((sub) => (
                        <Link
                          key={sub.path}
                          to={sub.path}
                          onClick={() => setOpen(false)}
                          className={`font-body text-sm font-semibold py-1 transition-colors ${location.pathname === sub.path ? "text-secondary" : "text-foreground"
                            }`}
                        >
                          {sub.label}
                        </Link>
                      ))}
                    </div>
                  </div>
                ) : (
                  <Link
                    to={link.path}
                    onClick={() => setOpen(false)}
                    className={`font-body text-sm font-semibold uppercase tracking-wider py-2 block ${location.pathname === link.path ? "text-secondary" : "text-foreground"
                      }`}
                  >
                    {link.label}
                  </Link>
                )}
              </div>
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

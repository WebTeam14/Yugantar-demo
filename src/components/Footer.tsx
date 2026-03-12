import { Link } from "react-router-dom";
import { Phone, Mail, MapPin } from "lucide-react";
import logo from "@/assets/logo.png";

const Footer = () => {
  return (
    <footer className="bg-gradient-brand text-primary-foreground">
      <div className="container mx-auto px-4 lg:px-8 py-12">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {/* Logo & About */}
          <div>
            <img src={logo} alt="युगांतर" className="h-16 w-auto mb-4 brightness-200" />
            <p className="text-primary-foreground/80 font-body text-sm leading-relaxed">
              Redevelopment · Acceleration · Movement. Transforming urban landscapes with quality construction and unwavering commitment.
            </p>
          </div>

          {/* Quick Links */}
          <div>
            <h4 className="font-display text-lg font-bold mb-4">Quick Links</h4>
            <div className="w-10 h-0.5 bg-secondary mb-4 rounded-full" />
            <ul className="space-y-2 font-body text-sm">
              {["Home", "About Us", "Services", "Gallery", "Contact Us"].map((label) => (
                <li key={label}>
                  <Link
                    to={label === "Home" ? "/" : `/${label.toLowerCase().replace(/\s+/g, "")}`}
                    className="text-primary-foreground/80 hover:text-secondary transition-colors"
                  >
                    {label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Services */}
          <div>
            <h4 className="font-display text-lg font-bold mb-4">Our Services</h4>
            <div className="w-10 h-0.5 bg-secondary mb-4 rounded-full" />
            <ul className="space-y-2 font-body text-sm text-primary-foreground/80">
              <li>Building Redevelopment</li>
              <li>Residential Construction</li>
              <li>Commercial Projects</li>
              <li>Project Management</li>
              <li>Interior Design</li>
            </ul>
          </div>

          {/* Contact */}
          <div>
            <h4 className="font-display text-lg font-bold mb-4">Contact Info</h4>
            <div className="w-10 h-0.5 bg-secondary mb-4 rounded-full" />
            <div className="space-y-3 font-body text-sm">
              <div className="flex items-start gap-3 text-primary-foreground/80">
                <MapPin className="w-4 h-4 mt-0.5 flex-shrink-0 text-secondary" />
                <span>Mumbai, Maharashtra, India</span>
              </div>
              <div className="flex items-center gap-3 text-primary-foreground/80">
                <Phone className="w-4 h-4 flex-shrink-0 text-secondary" />
                <span>+91 99999 99999</span>
              </div>
              <div className="flex items-center gap-3 text-primary-foreground/80">
                <Mail className="w-4 h-4 flex-shrink-0 text-secondary" />
                <span>info@yugantar.com</span>
              </div>
            </div>
          </div>
        </div>

        <div className="border-t border-primary-foreground/20 mt-10 pt-6 text-center font-body text-sm text-primary-foreground/60">
          © {new Date().getFullYear()} युगांतर (Yugantar). All Rights Reserved.
        </div>
      </div>
    </footer>
  );
};

export default Footer;

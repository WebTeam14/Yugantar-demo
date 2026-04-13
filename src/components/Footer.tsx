import { Link } from "react-router-dom";
import { Phone, Mail, MapPin } from "lucide-react";
import logo from "@/assets/LOGO-Footer-removebg-preview.png";

const Footer = () => {
  return (
    <footer className="bg-gradient-to-r from-[#7a1f1f] to-[#8b2c2c] text-white">
      <div className="container mx-auto px-4 lg:px-8 py-12">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-10">

          {/* Logo & About */}
          <div>
            <img
              src={logo}
              alt="Yugantar Services LLP"
              className="h-16 w-auto mb-4 object-contain"
            />
            <p className="text-white/80 text-sm leading-relaxed">
              Redevelopment · Acceleration · Movement. Transforming urban
              landscapes with quality construction and unwavering commitment.
            </p>
          </div>

          {/* Quick Links */}
          <div>
            <h4 className="text-lg font-semibold mb-3">Quick Links</h4>
            <div className="w-10 h-[2px] bg-yellow-500 mb-4 rounded-full" />
            <ul className="space-y-2 text-sm">
              {[
                { name: "Home", path: "/" },
                { name: "About Us", path: "/about" },
                { name: "Services", path: "/services" },
                { name: "Gallery", path: "/gallery" },
                { name: "Contact Us", path: "/contact" },
              ].map((link) => (
                <li key={link.name}>
                  <Link
                    to={link.path}
                    className="text-white/80 hover:text-yellow-400 transition-colors duration-300"
                  >
                    {link.name}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Services */}
          <div>
            <h4 className="text-lg font-semibold mb-3">Our Services</h4>
            <div className="w-10 h-[2px] bg-yellow-500 mb-4 rounded-full" />
            <ul className="space-y-2 text-sm text-white/80">
              <li>Building Redevelopment</li>
              <li>Residential Construction</li>
              <li>Commercial Projects</li>
              <li>Project Management</li>
              <li>Interior Design</li>
            </ul>
          </div>

          {/* Contact Info */}
          <div>
            <h4 className="text-lg font-semibold mb-3">Contact Info</h4>
            <div className="w-10 h-[2px] bg-yellow-500 mb-4 rounded-full" />
            <div className="space-y-3 text-sm">

              <div className="flex items-start gap-3 text-white/80">
                <MapPin className="w-4 h-4 mt-1 text-yellow-400 flex-shrink-0" />
                <span>
                  Office: 708, Shelton Cubix, Plot No. 87, Sector-15, C.B.D.
                  Belapur,<br />
                  Navi Mumbai, 400 614
                </span>
              </div>

              <div className="flex items-center gap-3 text-white/80">
                <Phone className="w-4 h-4 text-yellow-400 flex-shrink-0" />
                <span>+91 9320296221</span>
              </div>

              <div className="flex items-center gap-3 text-white/80">
                <Mail className="w-4 h-4 text-yellow-400 flex-shrink-0" />
                <span>yugantarservices@gmail.com</span>
              </div>
            </div>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="border-t border-white/20 mt-10 pt-6 text-center text-sm text-white/60">
          © {new Date().getFullYear()} युगांतर (Yugantar). All Rights Reserved.
        </div>
      </div>
    </footer>
  );
};

export default Footer;

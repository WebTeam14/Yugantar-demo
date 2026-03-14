import { Facebook, Instagram, Linkedin, Twitter, Phone, MapPin, Mail, Download } from "lucide-react";

const TopBar = () => {
    return (
        <div className="bg-[#800000] text-white text-xs py-2 border-b border-white/5">
            <div className="container mx-auto flex flex-col md:flex-row items-center justify-between px-4 lg:px-8">

                {/* Left: Contact Info */}
                <div className="flex items-center gap-5 mb-2 md:mb-0">
                    <a href="tel:+919320296221" className="flex items-center gap-2 hover:text-secondary transition-colors">
                        <Phone className="w-3.5 h-3.5 text-secondary" />
                        <span className="font-semibold">+91 9320296221</span>
                    </a>
                    <span className="hidden md:inline text-white/20">|</span>
                    <div className="hidden md:flex items-center gap-2 text-white/80">
                        <MapPin className="w-3.5 h-3.5 text-secondary font-semibold" />
                        <span>Navi Mumbai, 400 614</span>
                    </div>
                    <span className="hidden md:inline text-white/20">|</span>
                    <a href="mailto:yugantarservices@gmail.com" className="hidden md:flex items-center gap-2 text-white/80 hover:text-secondary transition-colors">
                        <Mail className="w-3.5 h-3.5 text-secondary font-semibold" />
                        <span>yugantarservices@gmail.com</span>
                    </a>
                </div>

                {/* Right: Actions & Social */}
                <div className="flex items-center gap-6">
                    {/* Profile Button */}
                    <a 
                      href="#" 
                      className="flex items-center gap-2 bg-secondary text-secondary-foreground px-3 py-1 rounded-md font-bold hover:opacity-90 transition-all text-[10px] uppercase tracking-wider shadow-sm"
                    >
                        <Download className="w-3 h-3" />
                        <span>Profile</span>
                    </a>

                    <div className="flex items-center gap-4">
                        <a href="#" className="hover:text-secondary transition-colors opacity-80 hover:opacity-100">
                            <Facebook className="w-3.5 h-3.5" />
                        </a>
                        <a href="#" className="hover:text-secondary transition-colors opacity-80 hover:opacity-100">
                            <Instagram className="w-3.5 h-3.5" />
                        </a>
                        <a href="#" className="hover:text-secondary transition-colors opacity-80 hover:opacity-100">
                            <Twitter className="w-3.5 h-3.5" />
                        </a>
                        <a href="#" className="hover:text-secondary transition-colors opacity-80 hover:opacity-100">
                            <Linkedin className="w-3.5 h-3.5" />
                        </a>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default TopBar;
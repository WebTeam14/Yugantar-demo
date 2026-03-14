import { Link } from "react-router-dom";
import { ArrowRight, CheckCircle } from "lucide-react";
// import { motion } from "framer-motion"; // Removed motion
import { Swiper, SwiperSlide } from "swiper/react";
import { Autoplay, EffectFade, Navigation } from "swiper/modules";

// Import Swiper styles
import "swiper/css";
import "swiper/css/effect-fade";
import "swiper/css/navigation";
import "swiper/css/pagination";

// Images
import aboutHero from "@/assets/about.jpg";

// Images
import gallery1 from "@/assets/gallery-1.jpg";
import gallery2 from "@/assets/gallery-2.jpg";
import gallery3 from "@/assets/gallery-3.jpg";
import gallery4 from "@/assets/gallery-4.jpg";
import gallery5 from "@/assets/gallery-5.jpg";
import gallery6 from "@/assets/gallery-6.jpg";
import TestimonialSection from "@/components/TestimonialSection";
const services = [
  {
    image: gallery1,
    title: "Building Redevelopment",
    desc: "Complete redevelopment of aging residential societies and buildings. We handle everything from tenant negotiations to final handover, ensuring a seamless transition from old to new.",
    features: ["Tenant rehabilitation planning", "Structural assessment", "Modern amenities integration", "RERA compliant process"],
  },
  {
    image: gallery2,
    title: "Residential Construction",
    desc: "Premium residential projects designed for modern living. From luxury apartments to affordable housing, we deliver homes that families love.",
    features: ["Earthquake-resistant structures", "Vastu-compliant designs", "Smart home integration", "Green building certification"],
  },
  {
    image: gallery3,
    title: "Commercial Construction",
    desc: "State-of-the-art commercial spaces including office complexes, retail centers, and mixed-use developments built for business success.",
    features: ["Modern office spaces", "Retail and commercial hubs", "IT park development", "Industrial facilities"],
  },
  {
    image: gallery4,
    title: "Project Management",
    desc: "End-to-end project management services ensuring your construction project stays on time, within budget, and meets the highest quality standards.",
    features: ["Timeline management", "Budget optimization", "Quality assurance", "Regular progress reports"],
  },
  {
    image: gallery5,
    title: "Interior Design",
    desc: "Transform your spaces with our expert interior design services. From concept to completion, we create interiors that reflect your style and enhance functionality.",
    features: ["Space planning", "Material selection", "Custom furniture", "Lighting design"],
  },
  {
    image: gallery6,
    title: "Liaison & Approvals",
    desc: "Navigate the complex world of construction approvals and permits with our experienced liaison team. We handle all government approvals and documentation.",
    features: ["BMC approvals", "Environmental clearances", "RERA registration", "Occupation certificates"],
  },
];

const heroSlides = [
  {
    image: aboutHero,
    title: "Our Services",
    subtitle: "What We Offer",
  },
  {
    image: gallery1,
    title: "Building Redevelopment",
    subtitle: "Modernizing Spaces",
  },
  {
    image: gallery2,
    title: "Quality Construction",
    subtitle: "Excellence Built-in",
  },
];

// Motion variants removed




const Services = () => {
  return (
    <div className="font-body">

      {/* Hero Section - Swiper Slider */}
      <section className="relative py-20 overflow-hidden">

        {/* Background Image */}
        <div className="absolute inset-0 bg-[url('assets/about.jpg')] bg-cover bg-center bg-no-repeat"></div>

        {/* Professional Balanced Gradient Overlay */}
        <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-black/20 to-transparent"></div>

        {/* Content */}
        <div className="relative container mx-auto px-4 text-center">
          <p className="text-secondary uppercase tracking-[0.3em] text-sm font-semibold mb-3">
            What We Offer
          </p>

          <h1 className="font-display text-4xl md:text-6xl font-bold text-white mb-4">
            Our Services
          </h1>

          <div className="w-20 h-1 bg-secondary mx-auto rounded-full"></div>
        </div>

      </section>


      {/* Services Grid */}
      <section className="section-padding bg-muted/20">
        <div className="container mx-auto px-4 lg:px-8 max-w-7xl">
          <div className="text-center mb-16">
            <h2 className="section-title">Explore Our Expertise</h2>
            <div className="decorative-line mx-auto" />
            <p className="section-subtitle mt-4">We offer comprehensive construction solutions tailored to your needs.</p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {services.map((service, idx) => (
              <div
                key={service.title}
                className="bg-card rounded-2xl shadow-sm hover:shadow-2xl hover:-translate-y-2 border border-border/40 overflow-hidden cursor-pointer transition-all duration-500 flex flex-col group"
              >
                <div className="w-full h-64 overflow-hidden relative">
                  <img
                    src={service.image}
                    alt={service.title}
                    className="w-full h-full object-cover group-hover:scale-[1.08] transition-transform duration-700 ease-out"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/20 to-transparent opacity-80" />
                  <div className="absolute bottom-6 left-6 right-6 text-white transform translate-y-2 group-hover:translate-y-0 transition-transform duration-500">
                    <h3 className="font-display text-2xl font-bold tracking-wide drop-shadow-md">
                      {service.title}
                    </h3>
                  </div>
                </div>
                <div className="p-8 flex flex-col flex-grow bg-card relative z-10">
                  <p className="text-sm text-muted-foreground mb-8 leading-relaxed flex-grow">{service.desc}</p>
                  <div className="h-px w-full bg-border/50 mb-6" />
                  <ul className="grid grid-cols-1 gap-3 mt-auto">
                    {service.features.map((f) => (
                      <li key={f} className="text-sm text-foreground/90 flex items-start gap-3">
                        <CheckCircle className="w-4 h-4 text-secondary mt-0.5 flex-shrink-0" />
                        <span className="font-medium">{f}</span>
                      </li>
                    ))}
                  </ul>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="relative section-padding bg-center bg-cover bg-no-repeat"
        style={{ backgroundImage: `url(${gallery1})` }}>
        {/* Overlay */}
        <div className="absolute inset-0 bg-black/40"></div>

        {/* Content */}
        <div className="relative z-10 container mx-auto text-center">
          <h2 className="section-title text-white">Need a Custom Solution?</h2>
          <div className="decorative-line mx-auto" />
          <p className="section-subtitle mb-8 text-white/90">
            Every project is unique. Contact us to discuss your specific requirements and get a tailored proposal.
          </p>
          <Link
            to="/contact"
            className="inline-flex items-center gap-2 bg-maroon 
                 text-white px-8 py-4 rounded-md font-body font-bold text-sm uppercase tracking-wider 
                 hover:opacity-90 transition-opacity"
          >
            Get a Free Quote <ArrowRight className="w-4 h-4" />
          </Link>
        </div>
      </section>

      <TestimonialSection />

    </div>

  );
};

export default Services;


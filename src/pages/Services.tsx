import { Link } from "react-router-dom";
import { ArrowRight, CheckCircle } from "lucide-react";
import { motion } from "framer-motion";
import "swiper/css";
import "swiper/css/effect-fade";
import "swiper/css/navigation";
import "swiper/css/pagination";

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

const Services = () => {
  return (
    <div className="font-body">

      {/* Hero Section */}
      <section className="relative py-20 overflow-hidden">
        {/* Background Image */}
        <div className="absolute inset-0 bg-[url('assets/about.jpg')] bg-cover bg-center bg-no-repeat"></div>
        {/* Professional Balanced Gradient Overlay */}
        <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/20 to-transparent"></div>

        <div className="relative container mx-auto px-4 text-center z-10">
          <motion.p
            initial={{ opacity: 0, y: 10 }}
            animate={{ opacity: 1, y: 0 }}
            className="text-secondary uppercase tracking-[0.3em] text-sm font-semibold mb-4"
          >
            What We Offer
          </motion.p>
          <motion.h1
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            className="font-display text-4xl md:text-6xl font-black text-white mb-6 uppercase tracking-tight"
          >
            Our Services
          </motion.h1>
          <div className="w-24 h-1 bg-secondary mx-auto rounded-full"></div>
        </div>
      </section>

      {/* Services Grid */}
      <section className="py-20 bg-[#fafafa]">
        <div className="container mx-auto px-4 lg:px-8 max-w-7xl">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-5xl font-display font-black text-gray-900 uppercase tracking-tight">
              Explore Our Expertise
            </h2>
            <div className="w-16 h-1 bg-[#cc5533] mx-auto mt-4 rounded-full"></div>
            <p className="text-gray-600 mt-6 text-lg max-w-2xl mx-auto font-medium">
              We offer comprehensive construction solutions tailored to the needs of cooperative housing societies.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-10">
            {services.map((service, idx) => (
              <motion.div
                key={service.title}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: idx * 0.1 }}
                className="bg-white rounded-2xl shadow-sm hover:shadow-2xl hover:-translate-y-2 border border-gray-100 overflow-hidden transition-all duration-500 flex flex-col group"
              >
                <div className="w-full h-72 overflow-hidden relative">
                  <img
                    src={service.image}
                    alt={service.title}
                    className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-1000 ease-out"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/20 to-transparent opacity-60" />
                  <div className="absolute bottom-6 left-6 right-6 text-white transform translate-y-2 group-hover:translate-y-0 transition-transform duration-500">
                    <h3 className="font-display text-2xl font-black tracking-wide uppercase drop-shadow-md">
                      {service.title}
                    </h3>
                  </div>
                </div>
                <div className="p-8 flex flex-col flex-grow relative z-10">
                  <p className="text-gray-600 mb-8 leading-relaxed flex-grow text-sm font-medium">
                    {service.desc}
                  </p>
                  <div className="h-px w-full bg-gray-100 mb-8" />
                  <ul className="grid grid-cols-1 gap-4 mt-auto">
                    {service.features.map((f) => (
                      <li key={f} className="text-sm text-gray-700 flex items-start gap-4">
                        <CheckCircle className="w-4 h-4 text-[#cc5533] mt-0.5 flex-shrink-0" />
                        <span className="font-semibold">{f}</span>
                      </li>
                    ))}
                  </ul>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section
        className="relative py-24 bg-center bg-cover bg-no-repeat"
        style={{ backgroundImage: `url(${gallery1})` }}
      >
        {/* Overlay */}
        <div className="absolute inset-0 bg-[#800000]/80"></div>

        {/* Content */}
        <div className="relative z-10 container mx-auto text-center px-4">
          <h2 className="text-3xl md:text-5xl font-display font-black text-white uppercase tracking-tight mb-6">
            Need a Custom Solution?
          </h2>
          <div className="w-20 h-1 bg-secondary mx-auto mb-8 rounded-full" />
          <p className="text-white/90 text-lg md:text-xl max-w-2xl mx-auto mb-12 font-medium leading-relaxed">
            Every project is unique. Contact us to discuss your specific requirements and get a tailored proposal from our experts.
          </p>
          <Link
            to="/contact"
            className="inline-flex items-center gap-3 bg-secondary 
                 text-white px-10 py-4 rounded-md font-body font-black text-sm uppercase tracking-widest 
                 hover:opacity-90 shadow-xl transition-all"
          >
            Get a Free Quote <ArrowRight className="w-5 h-5" />
          </Link>
        </div>
      </section>

      <TestimonialSection />

    </div>
  );
};

export default Services;

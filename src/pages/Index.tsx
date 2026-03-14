import { Link } from "react-router-dom";
import { ArrowRight, CheckCircle } from "lucide-react";
import { Swiper, SwiperSlide } from "swiper/react";
import { Autoplay, EffectFade, Navigation } from "swiper/modules";
import { motion, AnimatePresence } from "framer-motion";

// Import Swiper styles
import "swiper/css";
import "swiper/css/effect-fade";
import "swiper/css/navigation";
import "swiper/css/pagination";
import heroImg from "@/assets/hero-construction.jpg";
import aboutImg from "@/assets/about-redevelopment.jpg";
import gallery1 from "@/assets/gallery-1.jpg";
import gallery2 from "@/assets/gallery-2.jpg";
import gallery3 from "@/assets/gallery-3.jpg";

const stats = [
  { number: "25+", label: "Years Experience" },
  { number: "150+", label: "Projects Completed" },
  { number: "500+", label: "Happy Families" },
  { number: "50+", label: "Expert Team" },
];

const services = [
  {
    image: gallery1,
    title: "Building Redevelopment",
    desc: "Expert redevelopment of old structures into modern, safe and beautiful living spaces.",
  },
  {
    image: gallery2,
    title: "Quality Construction",
    desc: "Premium construction with top-grade materials and adherence to the highest safety standards.",
  },
  {
    image: gallery3,
    title: "Project Management",
    desc: "End-to-end project management ensuring timely delivery and transparent communication.",
  },
];
const heroSlides = [
  {
    image: heroImg,
    subtitle: "YUGANTAR DEVELOPERS",
    title: "Building the Future, Respecting the Past",
    description: "Transforming urban landscapes through quality redevelopment and unwavering commitment to excellence.",
  },
  {
    image: gallery1,
    subtitle: "REDEVELOPMENT SPECIALISTS",
    title: "Modern Homes for a Better Tomorrow",
    description: "Expert redevelopment of old structures into modern, safe, and beautiful living spaces.",
  },
  {
    image: gallery2,
    subtitle: "EXCELLENCE IN QUALITY",
    title: "Precision Engineering & Premium Materials",
    description: "Premium construction with top-grade materials and adherence to the highest safety standards.",
  },
];

import TestimonialSection from "@/components/TestimonialSection";
// import TabBar from "@/components/TabBar"; // Removed duplicate


const Index = () => {

  return (
    <div className="font-body">
      {/* <TabBar /> Removed duplicate */}
      {/* Hero Section */}
      <section className="relative h-screen overflow-hidden">
        <Swiper
          modules={[Autoplay, EffectFade, Navigation]}
          effect={"fade"}
          autoplay={{
            delay: 5000,
            disableOnInteraction: false,
          }}
          loop={true}
          className="h-full w-full"
        >
          {heroSlides.map((slide, index) => (
            <SwiperSlide key={index}>
              <div className="relative h-full w-full">
                {/* Background Image with Ken Burns Effect */}
                <motion.div
                  initial={{ scale: 1.1 }}
                  animate={{ scale: 1 }}
                  transition={{ duration: 10, ease: "linear" }}
                  className="absolute inset-0"
                >
                  <img
                    src={slide.image}
                    alt={slide.title}
                    className="h-full w-full object-cover"
                  />
                </motion.div>

                {/* Professional Balanced Gradient Overlay - Black contrast for visibility */}
                <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/20 to-transparent" />
                <div className="absolute inset-0 bg-gradient-to-r from-black/20 to-transparent" />

                {/* Content */}
                <div className="relative z-10 h-full flex items-center justify-center text-center px-4">
                  <div className="max-w-4xl mx-auto">
                    <motion.p
                      initial={{ opacity: 0, y: 30 }}
                      whileInView={{ opacity: 1, y: 0 }}
                      transition={{ duration: 0.8 }}
                      className="font-body text-secondary uppercase tracking-[0.4em] text-sm mb-6 font-bold drop-shadow-lg"
                    >
                      {slide.subtitle}
                    </motion.p>
                    <motion.h1
                      initial={{ opacity: 0, y: 30 }}
                      whileInView={{ opacity: 1, y: 0 }}
                      transition={{ duration: 1, delay: 0.2 }}
                      className="font-display text-5xl md:text-7xl lg:text-8xl font-black text-white mb-8 leading-[1.1] drop-shadow-2xl"
                    >
                      {slide.title.split(",").map((line, i) => (
                        <span key={i} className="block">
                          {line.trim()}
                          {i === 0 && slide.title.includes(",") && ","}
                        </span>
                      ))}
                    </motion.h1>
                    <motion.p
                      initial={{ opacity: 0, y: 30 }}
                      whileInView={{ opacity: 1, y: 0 }}
                      transition={{ duration: 1, delay: 0.4 }}
                      className="font-body text-white/90 text-lg md:text-2xl max-w-2xl mx-auto mb-10 leading-relaxed font-medium drop-shadow-md"
                    >
                      {slide.description}
                    </motion.p>
                    <motion.div
                      initial={{ opacity: 0, scale: 0.9 }}
                      whileInView={{ opacity: 1, scale: 1 }}
                      transition={{ duration: 0.8, delay: 0.6 }}
                      className="flex flex-col sm:flex-row gap-6 justify-center items-center"
                    >
                      <Link
                        to="/contact"
                        className="group relative inline-flex items-center gap-3 bg-gradient-warm text-secondary-foreground px-10 py-5 rounded-md font-body font-black text-sm uppercase tracking-widest hover:scale-105 transition-all duration-300 shadow-xl"
                      >
                        Get a Quote
                        <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
                      </Link>
                      <Link
                        to="/services"
                        className="inline-flex items-center gap-2 border-2 border-white/40 text-white px-10 py-5 rounded-md font-body font-black text-sm uppercase tracking-widest hover:bg-white/10 hover:border-white transition-all duration-300 backdrop-blur-sm"
                      >
                        Our Services
                      </Link>
                    </motion.div>
                  </div>
                </div>
              </div>
            </SwiperSlide>
          ))}
        </Swiper>
      </section>



      {/* About Preview */}
      <section className="section-padding">
        <div className="container mx-auto">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <div>
              <p className="font-body text-secondary uppercase tracking-[0.2em] text-sm font-semibold mb-2">
                About Us
              </p>
              <h2 className="section-title text-left">
                Pioneering Urban<br />Redevelopment
              </h2>
              <div className="w-20 h-1 bg-secondary my-4 rounded-full" />
              <p className="text-muted-foreground leading-relaxed mb-6">
                With over 25 years of experience in urban redevelopment, युगांतर has transformed countless aging structures into modern, safe, and beautiful living spaces. We believe in preserving the spirit of communities while building for the future.
              </p>
              <ul className="space-y-3 mb-8">
                {["RERA Registered Projects", "On-time Delivery Track Record", "Transparent Documentation", "Premium Quality Materials"].map((item) => (
                  <li key={item} className="flex items-center gap-3 font-body text-foreground">
                    <CheckCircle className="w-5 h-5 text-secondary flex-shrink-0" />
                    {item}
                  </li>
                ))}
              </ul>
              <Link
                to="/about"
                className="inline-flex items-center gap-2 bg-gradient-brand text-primary-foreground px-6 py-3 rounded-md font-body font-semibold text-sm hover:opacity-90 transition-opacity"
              >
                Learn More <ArrowRight className="w-4 h-4" />
              </Link>
            </div>
            <div className="relative">
              <img
                src={aboutImg}
                alt="Before and after redevelopment"
                className="rounded-lg shadow-2xl w-full"
              />
              <div className="absolute -bottom-6 -left-6 bg-gradient-brand text-primary-foreground p-6 rounded-lg shadow-lg hidden md:block">
                <div className="font-display text-3xl font-bold">25+</div>
                <div className="font-body text-sm">Years of Trust</div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Stats Bar */}
      <section className="bg-gradient-warm py-8">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-6 text-center">
            {stats.map((stat) => (
              <div key={stat.label}>
                <div className="font-display text-3xl md:text-4xl font-bold text-secondary-foreground">
                  {stat.number}
                </div>
                <div className="font-body text-sm text-secondary-foreground/80 mt-1">{stat.label}</div>
              </div>
            ))}
          </div>
        </div>
      </section>


      {/* Services Preview */}
      <section className="section-padding bg-muted">
        <div className="container mx-auto text-center">
          <p className="font-body text-secondary uppercase tracking-[0.2em] text-sm font-semibold mb-2">
            What We Do
          </p>
          <h2 className="section-title">Our Services</h2>
          <div className="decorative-line" />
          <p className="section-subtitle mb-12">
            Comprehensive construction and redevelopment solutions tailored to your needs.
          </p>

          <div className="grid md:grid-cols-3 gap-8">
            {services.map((service) => (
              <div
                key={service.title}
                className="bg-card rounded-lg shadow-lg hover:shadow-xl transition-shadow group overflow-hidden flex flex-col"
              >
                <div className="w-full h-48 overflow-hidden">
                  <img src={service.image} alt={service.title} className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500" />
                </div>
                <div className="p-8 flex-grow flex flex-col">
                  <h3 className="font-display text-xl font-bold text-foreground mb-3">{service.title}</h3>
                  <p className="text-muted-foreground font-body text-sm leading-relaxed flex-grow">{service.desc}</p>
                </div>
              </div>
            ))}
          </div>

          <Link
            to="/services"
            className="inline-flex items-center gap-2 mt-10 bg-gradient-brand text-primary-foreground px-6 py-3 rounded-md font-body font-semibold text-sm hover:opacity-90 transition-opacity"
          >
            View All Services <ArrowRight className="w-4 h-4" />
          </Link>
        </div>
      </section>

      {/* CTA */}
      <section className="relative py-20 overflow-hidden">
        <div className="absolute inset-0 bg-gradient-brand" />
        <div className="absolute inset-0 opacity-10" style={{ backgroundImage: "url('data:image/svg+xml,%3Csvg width=\"60\" height=\"60\" viewBox=\"0 0 60 60\" xmlns=\"http://www.w3.org/2000/svg\"%3E%3Cg fill=\"none\" fill-rule=\"evenodd\"%3E%3Cg fill=\"%23ffffff\" fill-opacity=\"0.4\"%3E%3Cpath d=\"M36 34v-4h-2v4h-4v2h4v4h2v-4h4v-2h-4zm0-30V0h-2v4h-4v2h4v4h2V6h4V4h-4zM6 34v-4H4v4H0v2h4v4h2v-4h4v-2H6zM6 4V0H4v4H0v2h4v4h2V6h4V4H6z\"/%3E%3C/g%3E%3C/g%3E%3C/svg%3E')" }} />
        <div className="relative container mx-auto px-4 text-center">
          <h2 className="font-display text-3xl md:text-5xl font-bold text-primary-foreground mb-4">
            Ready to Transform Your Property?
          </h2>
          <p className="font-body text-primary-foreground/80 text-lg max-w-xl mx-auto mb-8">
            Get in touch with us today for a free consultation and site assessment.
          </p>
          <Link
            to="/contact"
            className="inline-flex items-center gap-2 bg-gradient-warm text-secondary-foreground px-8 py-4 rounded-md font-body font-bold text-sm uppercase tracking-wider hover:opacity-90 transition-opacity"
          >
            Contact Us Today <ArrowRight className="w-4 h-4" />
          </Link>
        </div>
      </section>


      {/* Testimonials */}
      <TestimonialSection />


    </div >
  );
};

export default Index;

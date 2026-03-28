import { Link } from "react-router-dom";
import { ArrowRight, CheckCircle, Shield, BarChart, HardHat } from "lucide-react";
import { Swiper, SwiperSlide } from "swiper/react";
import { Autoplay, EffectFade, Navigation } from "swiper/modules";
import { motion, AnimatePresence } from "framer-motion";

// Import Swiper styles
import "swiper/css";
import "swiper/css/effect-fade";
import "swiper/css/navigation";
import "swiper/css/pagination";
import heroImg from "@/assets/hero-construction.png";
import aboutImg from "@/assets/Slider1.png";
import gallery1 from "@/assets/gallery-1.jpg";
import gallery2 from "@/assets/gallery-2.jpg";
import gallery3 from "@/assets/gallery-3.jpg";
import slider1 from "@/assets/Slider1.png";
import slider2 from "@/assets/Slider2.jpg"


const stats = [
  { number: "20+", label: "Years of Experience" },
  { number: "100%", label: "Society-Led Focus" },
  { number: "CIDCO", label: "Area Expertise" },
  { number: "Expert", label: "Advisory Panel" },
];

const services = [
  {
    image: gallery1,
    icon: <Shield className="w-6 h-6 text-secondary" />,
    title: "Self-Redevelopment Management",
    desc: "Empowering societies to take control. We manage the entire process from the first General Body Resolution to final possession.",
  },
  {
    image: gallery2,
    icon: <BarChart className="w-6 h-6 text-secondary" />,
    title: "Project Financial Discipline",
    desc: "Ensuring financial transparency and power remains with the society members, avoiding the risks of external builders.",
  },
  {
    image: gallery3,
    icon: <HardHat className="w-6 h-6 text-secondary" />,
    title: "Technical & Legal Advisory",
    desc: "Expert guidance on MCS Act 1960, 79A compliance, and Town Planning through our panel of retired CIDCO & NMMC officials.",
  },
];

const heroSlides = [
  {
    image: slider1,
    subtitle: "युगांतर - REDEVELOPMENT-ACCELERATION-MOVEMENT",
    title: "Empowering Societies for Self-Redevelopment",
    description: "Take Control. Redevelop Safely. Build Your Future with India's professional Development Management firm.",
  },
  {
    image: heroImg,
    subtitle: "TRANSPARENCY & TRUST",
    title: "We are not Builders, We are your Partners",
    description: "Acting exclusively for the society to ensure ownership and financial power remain with the members.",
  },
  {
    image: slider2,
    subtitle: "EXPERT LEADERSHIP",
    title: "Decades of Technical Excellence",
    description: "Led by former NMMC and CIDCO experts specializing in urban development and legal compliance.",
  },
];

import TestimonialSection from "@/components/TestimonialSection";

const Index = () => {
  return (
    <div className="font-body">
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

                <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/20 to-transparent" />
                <div className="absolute inset-0 bg-gradient-to-r from-black/20 to-transparent" />

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
                      className="font-display text-4xl md:text-6xl lg:text-7xl font-black text-white mb-8 leading-[1.1] drop-shadow-2xl"
                    >
                      {slide.title}
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
                        Start Your Project
                        <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
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
                About Yugantar
              </p>
              <h2 className="section-title text-left">
                Redevelopment is not just construction.<br />It affects generations.
              </h2>
              <div className="w-20 h-1 bg-secondary my-4 rounded-full" />
              <p className="text-muted-foreground leading-relaxed mb-6">
                Yugantar Services LLP is a professional Development Management firm focused on <strong>Self-Redevelopment</strong> for cooperative housing societies. We act exclusively for the society—not as builders, brokers, or contractors. This ensures that control, ownership, and financial power remain with your members.
              </p>
              <p className="text-muted-foreground leading-relaxed mb-6">
                With over 20 years of experience in Navi Mumbai and CIDCO-regulated areas, we guide you through the entire journey—from the first General Body Resolution to final possession—ensuring every step is legal, transparent, and technically sound.
              </p>

              <Link
                to="/about"
                className="inline-flex items-center gap-2 bg-gradient-brand text-primary-foreground px-6 py-3 rounded-md font-body font-semibold text-sm hover:opacity-90 transition-opacity"
              >
                Our Philosophy <ArrowRight className="w-4 h-4" />
              </Link>
            </div>
            <div className="relative">
              <img
                src={aboutImg}
                alt="Expert Team"
                className="rounded-lg shadow-2xl w-full"
              />
              <div className="absolute -bottom-6 -left-6 bg-gradient-brand text-primary-foreground p-6 rounded-lg shadow-lg hidden md:block text-center">
                <div className="font-display text-3xl font-bold">20+</div>
                <div className="font-body text-sm">Years of CIDCO Expertise</div>
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
            Our Expertise
          </p>
          <h2 className="section-title">Comprehensive Development Management</h2>
          <div className="decorative-line" />
          <p className="section-subtitle mb-12">
            We provide a trustworthy, technology-driven, and transparent framework to deliver high-value living spaces.
          </p>

          <div className="grid md:grid-cols-3 gap-8">
            {services.map((service) => (
              <div
                key={service.title}
                className="bg-card rounded-lg shadow-lg hover:shadow-xl transition-shadow group overflow-hidden flex flex-col"
              >
                <div className="w-full h-48 overflow-hidden relative">
                  <img src={service.image} alt={service.title} className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500" />
                  <div className="absolute top-4 left-4 bg-white p-2 rounded-full shadow-md">
                    {service.icon}
                  </div>
                </div>
                <div className="p-8 flex-grow flex flex-col">
                  <h3 className="font-display text-xl font-bold text-foreground mb-3">{service.title}</h3>
                  <p className="text-muted-foreground font-body text-sm leading-relaxed flex-grow">{service.desc}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="relative py-20 overflow-hidden">
        <div className="absolute inset-0 bg-gradient-brand" />
        <div className="relative container mx-auto px-4 text-center">
          <h2 className="font-display text-3xl md:text-5xl font-bold text-primary-foreground mb-4">
            Take Control of Your Society's Future
          </h2>
          <p className="font-body text-primary-foreground/80 text-lg max-w-xl mx-auto mb-8">
            Schedule a presentation with our expert advisory panel of retired CIDCO and NMMC officials.
          </p>
          <Link
            to="/contact"
            className="inline-flex items-center gap-2 bg-gradient-warm text-secondary-foreground px-8 py-4 rounded-md font-body font-bold text-sm uppercase tracking-wider hover:opacity-90 transition-opacity"
          >
            Request a Consultation <ArrowRight className="w-4 h-4" />
          </Link>
        </div>
      </section>

      {/* Testimonials */}
      <TestimonialSection />
    </div>
  );
};

export default Index;
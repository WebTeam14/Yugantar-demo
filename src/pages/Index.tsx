import { Link } from "react-router-dom";
import { ArrowRight, Shield, BarChart, HardHat, Calendar, ClipboardList, Users, Scale, TrendingUp } from "lucide-react";
import { Swiper, SwiperSlide } from "swiper/react";
import { Autoplay, EffectFade, Navigation } from "swiper/modules";
import { motion } from "framer-motion";

// Import Swiper styles
import "swiper/css";
import "swiper/css/effect-fade";
import "swiper/css/navigation";
import "swiper/css/pagination";
import heroImg from "@/assets/hero-construction.png";
import aboutImg from "@/assets/Slider1.png";
import slider1 from "@/assets/Slider1.png";
import slider2 from "@/assets/Slider2.jpg"
import redevlopment from "@/assets/Redevlopment.png"
import constructionfinance from "@/assets/constructionfinance.jpg"
import legal from "@/assets/legal.jpg"
import gallery1 from "@/assets/gallery-1.jpg";
import gallery2 from "@/assets/gallery-2.jpg";


const stats = [
  { number: "20+", label: "Years of Experience" },
  { number: "100%", label: "Society-Led Focus" },
  { number: "CIDCO", label: "Area Expertise" },
  { number: "Expert", label: "Advisory Panel" },
];

const services = [
  {
    image: redevlopment,
    icon: <Shield className="w-6 h-6 text-secondary" />,
    title: "Self-Redevelopment Management",
    desc: "Empowering societies to take control. We manage the entire process from the first General Body Resolution to final possession.",
  },
  {
    image: constructionfinance,
    icon: <BarChart className="w-6 h-6 text-secondary" />,
    title: "Project Financial Discipline",
    desc: "Ensuring financial transparency and power remains with the society members, avoiding the risks of external builders.",
  },
  {
    image: legal,
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
                Empowering Cooperative Housing Societies through Structured Self-Redevelopment
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

      {/* Flow Diagram Section: Enhanced */}
      <section className="section-padding bg-gradient-to-b from-white to-[#fcf7f3] relative overflow-hidden">
        <div className="absolute top-0 inset-x-0 h-px bg-gradient-to-r from-transparent via-[#cc5533]/20 to-transparent"></div>
        <div className="container mx-auto px-4 max-w-6xl">
          <div className="text-center mb-16">
            <h2 className="font-display text-4xl md:text-5xl font-black text-[#800000] uppercase tracking-wide title-shadow-sm mb-4">
              Redevelopment Strategy
            </h2>
            <p className="max-w-2xl mx-auto text-lg text-gray-600 font-medium leading-relaxed">
              Our proven top-down strategy guarantees total alignment between societies, professionals, and authorities.
            </p>
          </div>

          <div className="grid lg:grid-cols-5 gap-4 md:gap-6 relative max-w-5xl mx-auto">
            {/* Background connection line for large screens */}
            <div className="hidden lg:block absolute top-[80px] left-10 right-10 h-1 bg-[#cc5533]/10"></div>

            {/* Steps */}
            {[
              { icon: <Calendar />, title: "Co-ordination", desc: "Appointing the right experts" },
              { icon: <ClipboardList />, title: "PMCs", desc: "Progress tracking & timeline control." },
              { icon: <Users />, title: "Architects", desc: "Design & quality assurance." },
              { icon: <Scale />, title: "Legal & Tech", desc: "Due diligence & compliance." },
              { icon: <TrendingUp />, title: "Marketing", desc: "Sales & pricing coordination." },
            ].map((step, i) => (
              <div key={i} className="relative group perspective">
                <div className="bg-white rounded-2xl p-6 shadow-sm border border-gray-100 group-hover:bg-[hsl(var(--secondary))] group-hover:border-[hsl(var(--secondary))] group-hover:shadow-xl group-hover:-translate-y-2 transition-all duration-500 h-full flex flex-col items-center text-center">
                  <div className="w-14 h-14 rounded-full bg-orange-50 border-2 border-[#cc5533]/20 flex items-center justify-center mb-6 group-hover:bg-white transition-colors duration-500 z-10">
                    <div className="text-[#cc5533] w-6 h-6 transition-colors duration-500">
                      {step.icon}
                    </div>
                  </div>
                  <div className="absolute top-2 right-4 text-6xl font-black text-gray-100 opacity-60 select-none group-hover:text-white/20 group-hover:opacity-100 transition-colors duration-500">0{i + 1}</div>
                  <h3 className="font-bold text-lg text-gray-900 mb-3 z-10 group-hover:text-white transition-colors duration-500">{step.title}</h3>
                  <p className="text-gray-600 font-medium text-xs leading-relaxed z-10 group-hover:text-amber-50 transition-colors duration-500">{step.desc}</p>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Highlight Footer */}
        <div className="mt-20 max-w-4xl mx-auto px-4">
          <div className="bg-[#800000] border-4 border-white rounded-2xl p-6 md:p-10 text-center shadow-2xl relative overflow-hidden">
            <div className="absolute inset-0 bg-black/5"></div>
            <p className="relative font-bold text-xl md:text-2xl text-white uppercase tracking-wider title-shadow-sm">
              We do Not Replace Experts.<br />
              <span className="text-white/90 text-lg md:text-xl mt-3 block normal-case font-medium tracking-normal">We manage and coordinate them on behalf of the society.</span>
            </p>
          </div>
        </div>
      </section>

      {/* End to End Redevelopment Process: Enhanced */}
      <section className="py-20 bg-white relative">
        <div className="container mx-auto px-4 max-w-5xl">
          <div className="mb-16 md:text-center">
            <p className="font-body text-[#cc5533] uppercase tracking-[0.25em] text-sm font-black mb-3">
              Comprehensive Lifecycle
            </p>
            <h2 className="font-display text-3xl md:text-4xl lg:text-5xl font-black text-[#800000] uppercase">
              End to End Process
            </h2>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 lg:gap-10">
            {[
              { img: legal, title: "Society & Legal Process", items: ["79A compliance (4 July 2019 GR)", "Special General Body Meetings", "Registrar & statutory approvals", "Member consent management"] },
              { img: aboutImg, title: "Technical & Planning", items: ["Feasibility study & FSI optimisation", "Architect & consultant appointment", "Concept, planning & sanction drawings", "CIDCO/NMMC coordination"] },
              { img: constructionfinance, title: "Financial Structuring", items: ["Project cost estimation", "Bank finance structuring", "Escrow & fund flow mechanism", "Transparent cost monitoring"] },
              { img: gallery1, title: "Tendering & Execution", items: ["Contractor tendering", "BOQ-based contracts", "Quality control & site supervision", "Timeline & milestone tracking"] },
              { img: gallery2, title: "Possession & Closure", items: ["Occupancy & completion certificates", "Allotment & handover", "Defect liability monitoring"] },
            ].map((phase, i) => (
              <div key={i} className="relative group perspective h-full">
                <div className="bg-white rounded-2xl p-4 md:p-6 shadow-sm border border-gray-100 group-hover:border-[hsl(var(--secondary))] group-hover:shadow-[0_20px_40px_rgb(204,85,51,0.2)] group-hover:-translate-y-2 transition-all duration-500 h-full flex flex-col">
                  {/* Image Block */}
                  <div className="overflow-hidden rounded-xl relative mb-6 border-b-4 border-transparent group-hover:border-[hsl(var(--secondary))] transition-colors duration-500 shrink-0 bg-white">
                    <img src={phase.img} alt={phase.title} className="w-full h-[200px] md:h-[240px] object-cover group-hover:scale-105 transition-transform duration-700" />
                    <div className="absolute top-2 left-2 bg-white/95 backdrop-blur group-hover:bg-[hsl(var(--secondary))] shadow-lg px-3 py-1.5 rounded-lg z-20 transition-colors duration-500">
                      <div className="font-display font-black text-xl text-[hsl(var(--secondary))] group-hover:text-white transition-colors duration-500">0{i + 1}</div>
                    </div>
                  </div>

                  {/* Content Block */}
                  <div className="flex-1 flex flex-col">
                    <div className="inline-block px-3 py-1 bg-orange-50 text-[hsl(var(--secondary))] uppercase text-[10px] font-black tracking-widest rounded-full mb-3 self-start">Phase {i + 1}</div>
                    <h3 className="text-lg font-black text-gray-900 mb-4 leading-tight group-hover:text-[hsl(var(--secondary))] transition-colors duration-500">{phase.title}</h3>
                    <div className="grid gap-2.5 mt-auto">
                      {phase.items.map((item, j) => (
                        <div key={j} className="flex items-start gap-2.5">
                          <div className="w-4 h-4 rounded-full bg-[#cc5533]/10 flex items-center justify-center shrink-0 mt-0.5">
                            <div className="w-1.5 h-1.5 rounded-full bg-[hsl(var(--secondary))]"></div>
                          </div>
                          <span className="font-semibold text-gray-600 text-xs leading-snug">{item}</span>
                        </div>
                      ))}
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Ribbon Highlights */}
      <section className="bg-[#800000] py-16 overflow-hidden">
        <div className="container mx-auto px-4 text-center">
          <p className="font-display font-black text-3xl md:text-5xl text-white title-shadow-sm">
            Every Step is Planned. Every Risk is Managed.
          </p>
        </div>
      </section>
      {/* Testimonials */}
      <TestimonialSection />
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
          <div className="flex justify-center">
            <Link
              to="/contact"
              className="inline-flex items-center gap-2 bg-gradient-warm text-secondary-foreground px-8 py-4 rounded-md font-body font-bold text-sm uppercase tracking-wider hover:opacity-90 transition-opacity"
            >
              Request a Consultation <ArrowRight className="w-4 h-4" />
            </Link>
          </div>
        </div>
      </section>

      {/* Core Philosophy & We Do Not Section */}
      <section className="py-20 bg-[#f9f7f4] relative overflow-hidden">
        {/* Soft Background watermark */}
        <div className="absolute inset-0 flex items-center justify-center opacity-[0.03] pointer-events-none select-none">
          <span className="text-[20vw] font-black uppercase tracking-tighter">Yugantar</span>
        </div>

        <div className="container mx-auto px-4 relative z-10">
          <div className="max-w-6xl mx-auto">

            {/* Our Core Philosophy - Hanging Design */}
            <div className="mb-24 text-center">
              <h2 className="section-title">
                Our Core Philosophy
              </h2>
              <div className="decorative-line" />

              {/* Hanging Structure */}
              <div className="relative pt-1 border-t-4 border-[#800000]/30 mt-12">
                <div className="grid grid-cols-2 md:grid-cols-5 gap-4 md:gap-0 h-[300px] md:h-[400px]">
                  {[
                    { text: "SOCIETY FIRST, ALWAYS", color: "from-[#ef8d32] to-[#de6b1d]", delay: 0 },
                    { text: "NO CONFLICT OF INTEREST", color: "from-[#de6b1d] to-[#cc4b10]", delay: 0.2 },
                    { text: "PROFESSIONAL ACCOUNTABILITY", color: "from-[#cc4b10] to-[#b03a0d]", delay: 0.4 },
                    { text: "LEGAL & FINANCIAL INTEGRITY", color: "from-[#b03a0d] to-[#92290a]", delay: 0.6 },
                    { text: "ABSOLUTE TRANSPARENCY", color: "from-[#92290a] to-[#800000]", delay: 0.8 },
                  ].map((item, i) => (
                    <div key={i} className="flex flex-col items-center relative">
                      {/* Hanging String (Hidden on mobile for better layout) */}
                      <motion.div
                        initial={{ height: 0 }}
                        whileInView={{ height: i % 2 === 0 ? "100px" : "140px" }}
                        className="hidden md:block w-[2px] border-l-2 border-dashed border-[#800000]/40"
                      ></motion.div>

                      {/* Diamond Card */}
                      <motion.div
                        initial={{ opacity: 0, y: 50, rotate: 45 }}
                        whileInView={{ opacity: 1, y: 0, rotate: 45 }}
                        transition={{ delay: item.delay, duration: 0.6, type: "spring" }}
                        className={`w-32 h-32 md:w-36 md:h-36 bg-gradient-to-br ${item.color} shadow-2xl flex items-center justify-center p-3 text-center border-4 border-white/20 mt-4 md:mt-0`}
                      >
                        <div className="-rotate-45">
                          <span className="text-white font-black text-[10px] md:text-sm leading-tight tracking-wider uppercase">
                            {item.text}
                          </span>
                        </div>
                        {/* String hole detail */}
                        <div className="absolute top-1 left-1 w-3 h-3 rounded-full bg-white shadow-inner"></div>
                      </motion.div>
                    </div>
                  ))}
                </div>
              </div>
            </div>

            {/* We Do Not Section */}
            <div className="text-center">
              <h2 className="section-title">
                We Do Not
              </h2>
              <div className="decorative-line" />

              <div className="space-y-12">
                {[
                  { title: "ACT AS DEVELOPERS", desc: "We are not involved in construction, sales, or project development activities." },
                  { title: "TAKE COMMISSIONS FROM CONTRACTORS", desc: "All vendor selections are transparent and free from any commission or bias." },
                  { title: "CONTROL SOCIETY FUNDS", desc: "All financial decisions and fund management remain entirely with the society." }
                ].map((item, i) => (
                  <motion.div
                    key={i}
                    initial={{ opacity: 0, x: -20 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    transition={{ delay: i * 0.2 }}
                    className="group"
                  >
                    <h3 className="text-2xl md:text-3xl font-black text-[#cc5533] mb-2 group-hover:translate-x-2 transition-transform duration-300">
                      {item.title}
                    </h3>
                    <p className="text-gray-600 text-lg md:text-xl font-medium max-w-3xl leading-relaxed">
                      {item.desc}
                    </p>
                  </motion.div>
                ))}
              </div>
            </div>

          </div>
        </div>
      </section>
    </div>
  );
};

export default Index;
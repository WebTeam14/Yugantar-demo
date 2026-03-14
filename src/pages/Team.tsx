import { motion } from "framer-motion";
import RajivGurav from "@/assets/Team/RajivGurav.png";
import AbhijitPatil from "@/assets/Team/AbhijitPatil.png";
import PhoolchandGupta from "@/assets/Team/PhoolchandGupta.png";

const mainFounders = [
  {
    name: "Rajiv Gurav",
    role: "Director",
    image: RajivGurav,
    message: `Mr. Rajiv Shashikant Gurav, a Graduate in Civil Engineering, is a seasoned professional with an illustrious career spanning over 26 years in the field of civil engineering, planning, and urban development. With more than 23 years of service in the Navi Mumbai Municipal Corporation (NMMC), he has held key positions such as Deputy Engineer, and Executive Engineer (In-Charge). His vast experience has contributed immensely to Navi Mumbai's planned growth. He has over 8 years of specialized experience in the Town Planning Department of NMMC and has played a key role in the formation of various DCR policies, feasibility reports, and development proposals. Mr. Gurav is also the Founder & Proprietor of Urban Analysis and Solutions Consultancy Services, which is currently handling over 105 redevelopment projects across Navi Mumbai.`,
  },
  {
    name: "Abhijit Patil",
    role: "Managing Partner",
    image: AbhijitPatil,
    message: `Mr. Abhijit P. Patil, Founder and Managing Partner of Yugantar, is a Software Engineer by qualification and a Construction Management Professional by passion.
With over 20 years of experience in real estate and infrastructure, he has successfully
led numerous projects involving land development, acquisition, and redevelopment
management within CIDCO-regulated areas.
His expertise covers self-redevelopment under government guidelines, land
acquisition, contractor management, and project supervision. He has led strategic
redevelopment ventures under Tulsi HomeMakers and Peritum Developers.
Mr. Patil also serves as Advisor to Central Railway (Government of India) and as a
Member of the Central Board of Film Certification (CBFC). He is a National Rifle
Shooter and has participated in various national-level competitions`,
  },
  {
    name: "Phoolchand R. Gupta",
    role: "Chemical Engineer",
    image: PhoolchandGupta,
    message: `Mr. Phoolchand Gupta, a Chemical Engineer and Real Estate Professional, has
over 21 years of experience in sales and marketing in the real estate sector. As
a Partner at Peritum Developers, he brings proven expertise in project
identification, client relations, and execution management for redevelopment
projects in Navi Mumbai, Panvel, and Raigad.
He specializes in developing project proposals, managing stakeholder
communications, and ensuring timely project completion. His deep understanding
of real estate market and strong networking skills helped establish long-term
partnerships and deliver successful redevelopment outcomes`,
  },

];

const otherTeam = [
  {
    name: "Subhash Patil",
    role: "Retd. Joint Registrar CIDCO",
    image: "https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?q=80&w=200&h=200&auto=format&fit=crop",
  },
  {
    name: "Mahendra M. Sapre",
    role: "Retd. Assistant Commissioner NMMC",
    image: "https://images.unsplash.com/photo-1500648767791-00dcc994a43e?q=80&w=200&h=200&auto=format&fit=crop",
  },
  {
    name: "Mr. Harsh S. Trivedi",
    role: "Legal Advisor",
    image: "https://images.unsplash.com/photo-1519085360753-af0119f7cbe7?q=80&w=200&h=200&auto=format&fit=crop",
  },
  // {
  //   name: "Jitendra Ghate",
  //   role: "HR Admin",
  //   image: "https://images.unsplash.com/photo-1539571696357-5a69c17a67c6?q=80&w=200&h=200&auto=format&fit=crop",
  // },
];

const architecturalTeam = [
  // {
  //   name: "Minakshi Patil",
  //   role: "Senior Architect",
  //   image: "https://images.unsplash.com/photo-1494790108377-be9c29b29330?q=80&w=200&h=200&auto=format&fit=crop",
  // },

];

import { Swiper, SwiperSlide } from "swiper/react";
import { Autoplay, Pagination } from "swiper/modules";
import "swiper/css";
import "swiper/css/pagination";

const FounderPoster = ({ founder, index, isMain = false }: { founder: typeof mainFounders[0], index: number, isMain?: boolean }) => (
  <motion.div
    initial={{ opacity: 0, scale: 0.95 }}
    whileInView={{ opacity: 1, scale: 1 }}
    transition={{ duration: 0.5, delay: index * 0.1 }}
    viewport={{ once: true }}
    className={`relative bg-white shadow-2xl overflow-hidden group flex flex-col ${isMain ? "lg:flex-row" : ""} items-stretch h-full mx-2 my-4`}
  >
    {/* Decorative far-right gold bar (was hoverable) */}
    <div className="hidden md:block absolute right-0 top-0 bottom-0 w-4 bg-secondary/10 transition-colors" />

    {/* Content Area */}
    <div className="flex-1 p-8 md:p-10 flex flex-col justify-between z-10">
      <div>
        <div className="flex items-center gap-2 mb-6">
          <div className="w-1.5 h-6 bg-maroon" />
          <h4 className="font-display text-xs font-bold uppercase tracking-wider text-muted-foreground">
            Professional Profile
          </h4>
        </div>

        <h3 className="text-2xl md:text-3xl font-display font-bold leading-tight mb-6 text-foreground">
          Leadership at <br />
          <span className="text-maroon">Yugantar Group</span>
        </h3>

        <p className="text-sm md:text-base text-muted-foreground leading-relaxed border-l-2 border-border pl-6 mb-8">
          {founder.message}
        </p>
      </div>

      <div>
        <h5 className="text-xl font-bold font-display text-foreground">{founder.name}</h5>
        <p className="text-sm uppercase tracking-widest text-secondary font-semibold">{founder.role}</p>
      </div>
    </div>

    {/* Image Area */}
    <div className={`relative ${isMain ? "w-full lg:w-2/5 min-h-[400px]" : "w-full h-80"} overflow-hidden bg-muted/30`}>
      {/* Maroon Background Frame (Behind Photo - was hoverable) */}
      <div className="absolute top-10 right-0 bottom-0 left-10 bg-maroon/90 -z-0 transition-all duration-500" />

      {/* Framed Image Overlay (static image) */}
      <div className="absolute inset-6 md:inset-10 z-10 border-8 border-white shadow-2xl overflow-hidden">
        <img
          src={founder.image}
          alt={founder.name}
          className="w-full h-full object-cover transition-transform duration-700"
        />
      </div>
    </div>
  </motion.div>
);

const Team = () => {
  return (
    <div className="min-h-screen bg-background font-body">
      {/* Hero Section */}
      <section className="relative py-16 bg-brand-navy overflow-hidden">
        <div className="absolute inset-0 opacity-15 bg-[url('https://images.unsplash.com/photo-1486406146926-c627a92ad1ab?q=80&w=2000&auto=format&fit=crop')] bg-cover bg-center"></div>
        <div className="container relative z-10 mx-auto px-4 text-center">
          <motion.h1
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            className="text-4xl md:text-6xl font-display font-bold text-white mb-6"
          >
            Our Visionary Leadership
          </motion.h1>
          <div className="w-32 h-1.5 bg-secondary mx-auto rounded-full"></div>
        </div>
      </section>

      {/* Main Founders - Automatic Slider */}
      <section className="py-20 bg-muted/20">
        <div className="container mx-auto px-4 lg:px-12">
          <Swiper
            modules={[Autoplay, Pagination]}
            spaceBetween={30}
            slidesPerView={1}
            autoplay={{
              delay: 5000,
              disableOnInteraction: false,
            }}
            pagination={{
              clickable: true,
              dynamicBullets: true,
            }}
            className="pb-16 team-swiper"
          >
            {mainFounders.map((founder, index) => (
              <SwiperSlide key={founder.name}>
                <div className="max-w-6xl mx-auto h-full">
                  <FounderPoster founder={founder} index={index} isMain={true} />
                </div>
              </SwiperSlide>
            ))}
          </Swiper>
        </div>
      </section>

      {/* Other Core Advisors Section */}
      <section className="py-12">
        <div className="container mx-auto px-4">
          <h2 className="text-2xl font-display font-bold text-foreground mb-8 text-center uppercase tracking-widest border-b border-border pb-4 w-fit mx-auto">
            Advisors & Management
          </h2>
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
            {otherTeam.map((member, index) => (
              <motion.div
                key={member.name}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ delay: index * 0.1 }}
                viewport={{ once: true }}
                className="flex flex-col items-center text-center"
              >
                <div className="w-32 h-32 rounded-full overflow-hidden border-4 border-white shadow-md mb-4 group">
                  <img
                    src={member.image}
                    alt={member.name}
                    className="w-full h-full object-cover transition-transform duration-500"
                  />
                </div>
                <h3 className="text-lg font-bold font-display text-foreground leading-tight">
                  {member.name}
                </h3>
                <p className="text-xs text-secondary font-semibold mt-1 uppercase tracking-tighter">
                  {member.role}
                </p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Architectural Team Section */}
      <section className="py-12 bg-muted/10">
        <div className="container mx-auto px-4">
          <h2 className="text-2xl font-display font-bold text-foreground mb-8 text-center uppercase tracking-widest border-b border-border pb-4 w-fit mx-auto">
            Architectural Team
          </h2>
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
            {architecturalTeam.map((member, index) => (
              <motion.div
                key={member.name}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ delay: index * 0.1 }}
                viewport={{ once: true }}
                className="flex flex-col items-center text-center"
              >
                <div className="w-32 h-32 rounded-full overflow-hidden border-4 border-white shadow-md mb-4 group">
                  <img
                    src={member.image}
                    alt={member.name}
                    className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"
                  />
                </div>
                <h3 className="text-lg font-bold font-display text-foreground leading-tight">
                  {member.name}
                </h3>
                <p className="text-xs text-secondary font-semibold mt-1 uppercase tracking-tighter">
                  {member.role}
                </p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-16 bg-brand-navy text-maroon text-center">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl font-display font-bold mb-6">
            Partner with the Best in Redevelopment
          </h2>
          <p className="text-maroon/70 max-w-xl mx-auto mb-10">
            Let our experienced team guide you through a seamless redevelopment journey.
          </p>
          <a
            href="/contact"
            className="inline-block bg-secondary text-primary-foreground px-8 py-3 rounded-md font-bold uppercase tracking-widest transition-all text-sm"
          >
            Get Expert Consultation
          </a>
        </div>
      </section>
    </div>
  );
};

export default Team;

import { motion } from "framer-motion";
import { Link } from "react-router-dom";
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
  {
    name: "Ar. Piyush Tak",
    role: "Principal Architect",
    image: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?q=80&w=400&h=400&auto=format&fit=crop",
    message: "Design is not just what it looks like; it's how it works and how it shapes lives.",
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
    transition={{ duration: 0.6, delay: index * 0.1 }}
    viewport={{ once: true }}
    className={`relative bg-white shadow-xl rounded-2xl overflow-hidden group flex flex-col ${isMain ? "lg:flex-row" : ""} items-stretch h-full mb-12 border border-gray-100 hover:border-[#800000]/30 transition-all duration-500`}
  >
    {/* Decorative far-right brand bar */}
    <div className="hidden md:block absolute right-0 top-0 bottom-0 w-2 bg-[#800000]/10" />

    {/* Content Area */}
    <div className="flex-1 p-8 md:p-12 flex flex-col justify-between z-10">
      <div>
        <div className="flex items-center gap-3 mb-8">
          <div className="w-2 h-8 bg-[#800000]" />
          <h4 className="font-display text-[10px] font-black uppercase tracking-[0.3em] text-[#800000]">
            Leadership Profile
          </h4>
        </div>

        <h3 className="text-3xl md:text-4xl font-display font-black leading-tight mb-8 text-gray-900 uppercase">
          Driving Value at <br />
          <span className="text-[#800000]">Yugantar Group</span>
        </h3>

        <div className="relative">
          <p className="text-base md:text-lg text-gray-700 leading-relaxed font-medium pl-8 border-l-2 border-[#800000]/20 italic">
            "{founder.message}"
          </p>
        </div>
      </div>

      <div className="mt-12 pt-8 border-t border-gray-100">
        <h5 className="text-2xl font-black font-display text-gray-900 uppercase tracking-tight">{founder.name}</h5>
        <div className="flex items-center gap-3 mt-2">
          <div className="h-[2px] w-8 bg-[#cc5533]"></div>
          <p className="text-sm uppercase tracking-widest text-[#cc5533] font-black">{founder.role}</p>
        </div>
      </div>
    </div>

    {/* Image Area */}
    <div className={`relative ${isMain ? "w-full lg:w-2/5 min-h-[500px]" : "w-full h-96"} overflow-hidden bg-gray-50`}>
      {/* Brand Background Frame */}
      <div className="absolute top-12 right-0 bottom-0 left-12 bg-[#800000] -z-0 opacity-10 group-hover:opacity-20 transition-opacity duration-500" />

      {/* Framed Image Overlay */}
      <div className="absolute inset-8 md:inset-12 z-10 border-4 border-white shadow-2xl overflow-hidden rounded-xl">
        <img
          src={founder.image}
          alt={founder.name}
          className="w-full h-full object-cover transition-transform duration-1000 group-hover:scale-110"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-[#800000]/20 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>
      </div>
    </div>
  </motion.div>
);

const Team = () => {
  return (
    <div className="min-h-screen bg-[#fafafa] font-body">
      {/* Hero Section */}
      <section className="relative py-20 overflow-hidden">
        {/* Background Image */}
        <div className="absolute inset-0 bg-[url('https://images.unsplash.com/photo-1486406146926-c627a92ad1ab?q=80&w=2000&auto=format&fit=crop')] bg-cover bg-center"></div>
        {/* Professional Balanced Gradient Overlay */}
        <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/20 to-transparent"></div>

        <div className="container relative z-10 mx-auto px-4 text-center">
          <motion.p
            initial={{ opacity: 0, y: 10 }}
            animate={{ opacity: 1, y: 0 }}
            className="text-secondary uppercase tracking-[0.3em] text-sm font-semibold mb-4"
          >
            Experts Behind Yugantar
          </motion.p>
          <motion.h1
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            className="text-4xl md:text-6xl font-display font-black text-white mb-6 uppercase tracking-tight"
          >
            Visionary Leadership
          </motion.h1>
          <div className="w-24 h-1 bg-secondary mx-auto rounded-full"></div>
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
      <section className="py-20 bg-white">
        <div className="container mx-auto px-4 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-display font-black text-gray-900 uppercase tracking-tight">
              Advisors & Management
            </h2>
            <div className="w-16 h-1 bg-[#cc5533] mx-auto mt-4 rounded-full"></div>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-12 max-w-6xl mx-auto">
            {otherTeam.map((member, index) => (
              <motion.div
                key={member.name}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ delay: index * 0.1 }}
                viewport={{ once: true }}
                className="group relative"
              >
                <div className="bg-white rounded-2xl p-8 shadow-sm border border-gray-100 group-hover:border-[#800000] group-hover:shadow-[0_20px_40px_rgb(128,0,0,0.1)] transition-all duration-500 flex flex-col items-center text-center">
                  <div className="w-24 h-24 rounded-full overflow-hidden border-2 border-[#800000]/20 mb-6 group-hover:scale-110 transition-transform duration-500">
                    <img
                      src={member.image}
                      alt={member.name}
                      className="w-full h-full object-cover"
                    />
                  </div>
                  <h3 className="text-xl font-bold text-gray-900 group-hover:text-[#800000] transition-colors duration-500 uppercase tracking-tight">
                    {member.name}
                  </h3>
                  <p className="text-[#800000] text-[10px] uppercase font-black tracking-[0.2em] mt-2">
                    {member.role}
                  </p>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Architectural Team Section - if functional */}
      {architecturalTeam.length > 0 && (
        <section className="py-20 bg-gray-50">
          <div className="container mx-auto px-4 lg:px-8">
            <div className="text-center mb-16">
              <h2 className="text-3xl md:text-4xl font-display font-black text-gray-900 uppercase tracking-tight">
                Architectural Team
              </h2>
              <div className="w-16 h-1 bg-[#cc5533] mx-auto mt-4 rounded-full"></div>
            </div>

            <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
              {architecturalTeam.map((member, index) => (
                <motion.div
                  key={member.name}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ delay: index * 0.1 }}
                  viewport={{ once: true }}
                  className="flex flex-col items-center text-center group"
                >
                  <div className="w-32 h-32 rounded-full overflow-hidden border-4 border-white shadow-md mb-4 group-hover:scale-105 transition-transform duration-500">
                    <img
                      src={member.image}
                      alt={member.name}
                      className="w-full h-full object-cover"
                    />
                  </div>
                  <h3 className="text-lg font-bold font-display text-gray-900 uppercase tracking-tight translate-y-0 group-hover:-translate-y-1 transition-transform">
                    {member.name}
                  </h3>
                  <p className="text-xs text-[#cc5533] font-black uppercase tracking-widest mt-1">
                    {member.role}
                  </p>
                </motion.div>
              ))}
            </div>
          </div>
        </section>
      )}

      {/* CTA Section */}
      <section className="py-24 bg-[#800000] relative overflow-hidden text-center">
        <div className="absolute inset-0 bg-gradient-to-r from-black/20 to-transparent"></div>
        <div className="container relative z-10 mx-auto px-4">
          <h2 className="text-3xl md:text-4xl font-display font-black text-white mb-6 uppercase tracking-tight">
            Partner with the Best in Redevelopment
          </h2>
          <p className="text-white/80 max-w-2xl mx-auto mb-12 text-lg font-medium leading-relaxed">
            Let our experienced team guide you through a seamless redevelopment journey, where transparency and experts are at your service.
          </p>
          <Link
            to="/contact"
            className="inline-block bg-[#cc5533] text-white px-10 py-4 rounded-md font-bold uppercase tracking-[0.2em] transition-all text-sm hover:bg-[#cc5533]/90 shadow-xl"
          >
            Get Expert Consultation
          </Link>
        </div>
      </section>
    </div>
  );
};

export default Team;

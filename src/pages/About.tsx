import { CheckCircle, Target, Eye, Heart, ArrowRight } from "lucide-react";
import { Link } from "react-router-dom";
import { motion } from "framer-motion";
import aboutImg from "@/assets/about-redevelopment.jpg";
import RajivGurav from "@/assets/Team/RajivGurav.png";
import AbhijitPatil from "@/assets/Team/AbhijitPatil.png";
import PhoolchandGupta from "@/assets/Team/PhoolchandGupta.png";
import gallery1 from "@/assets/gallery-1.jpg";
import gallery2 from "@/assets/gallery-2.jpg";
import gallery3 from "@/assets/gallery-3.jpg";
import gallery4 from "@/assets/gallery-4.jpg";
import Img from "@/assets/image.png";

const values = [
  { icon: Target, title: "Our Mission", desc: "Our mission is to empower housing societies to redevelop their properties independently by providing transparent, compliant, and technically sound solutions that maximize value, enhance living standards, and ensure long-term sustainability" },
  { icon: Eye, title: "Our Vision", desc: "To redefine the self-redevelopment ecosystem by offering a trustworthy, technology-driven, and transparent management framework that delivers sustainable and high-value living spaces for urban communities." },
  { icon: Heart, title: "Our Values", desc: "Reliability, Innovation, and Client Satisfaction." },
];

const milestones = [
  { year: "1998", text: "Founded with a vision to transform urban living" },
  { year: "2005", text: "Completed first major redevelopment project" },
  { year: "2012", text: "Expanded to commercial construction" },
  { year: "2018", text: "Crossed 100+ successful projects milestone" },
  { year: "2024", text: "Launched sustainable green building initiative" },
];

import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";

const faqData = [
  {
    question: "Will redevelopment be delayed?",
    answer: "With proper planning, expert coordination, and clear accountability, delays can be controlled and avoided.",
  },
  {
    question: "Is self-redevelopment risky?",
    answer: "Risk comes from lack of guidance, not from self-redevelopment. With the right Development Manager, risks are identified early and managed professionally.",
  },
  {
    question: "Who will handle approvals and follow-ups?",
    answer: "Yugantar manages all approvals, coordination, and follow-ups with authorities through appointed experts.",
  },
  {
    question: "Will members have to run around offices?",
    answer: "No. The society's role is decision-making. Execution and coordination are our responsibility.",
  },
  {
    question: "How is self-redevelopment different from builder-led redevelopment?",
    answer: "In self-redevelopment, the society controls design, timelines, quality, and finances, and retains all additional benefits such as extra area and sale proceeds. In builder-led redevelopment, most decisions and profits are controlled by the developer.",
  },
];

const About = () => {
  return (
    <div className="font-body">
      {/* Hero Banner */}
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
            Who We Are
          </motion.p>
          <motion.h1
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            className="font-display text-4xl md:text-6xl font-black text-white mb-6 uppercase tracking-tight"
          >
            About Us
          </motion.h1>
          <div className="w-24 h-1 bg-secondary mx-auto rounded-full"></div>
        </div>
      </section>

      {/* Story */}
      <section className="py-12 md:py-16 px-4 lg:px-8 bg-white">
        <div className="container mx-auto">
          <div className="grid lg:grid-cols-2 gap-16 items-center">

            {/* Image Section */}
            <div className="relative">
              {/* Frame Background */}
              <div className="absolute -top-6 -left-6 w-full h-full border border-gray-200 rounded-lg"></div>

              {/* Image */}
              <img
                src={Img}
                alt="Our redevelopment work"
                className="relative rounded-lg shadow-xl w-full h-[520px] object-cover"
              />
            </div>

            {/* Content Section */}
            <div>
              <p className="text-secondary uppercase tracking-[0.2em] text-sm font-semibold mb-3">
                About Yugantar
              </p>

              <h2 className="text-3xl lg:text-4xl font-black text-[#800000] leading-snug uppercase tracking-tight">
                Redevelopment is not merely construction—it is a decision that shapes generations.
              </h2>

              <div className="w-20 h-1 bg-[#800000] my-6 rounded-full"></div>

              <p className="text-gray-600 leading-relaxed mb-4">
                Yugantar Services LLP is a professional Development Management firm specializing in Self-Redevelopment for cooperative housing societies. We operate with a singular commitment: to represent and protect the interests of the society. Unlike traditional models, we do not function as builders, brokers, or contractors—ensuring that complete control, ownership, and financial authority remain with the members themselves.
              </p>

              <p className="text-gray-600 leading-relaxed mb-4">
                With over 20 years of experience in Navi Mumbai and CIDCO-regulated regions, we bring deep domain expertise and a thorough understanding of regulatory frameworks. Our role is to guide societies through the entire redevelopment lifecycle—from the first General Body Resolution to final possession—with a strong emphasis on legal compliance, transparency, and technical excellence.
              </p>

              <p className="text-gray-600 leading-relaxed">
                At Yugantar, we don’t just manage projects—we enable societies to confidently take charge of their own redevelopment journey.
              </p>
            </div>

          </div>
        </div>
      </section>

      {/* Mission Vision Values */}
      <section className="relative py-12 md:py-16 px-4 lg:px-8">

        {/* Background Image */}
        <div className="absolute inset-0 bg-[url('assets/about-redevelopment.jpg')] bg-cover bg-center bg-no-repeat"></div>

        {/* Overlay for readability */}
        <div className="absolute inset-0 bg-black/60"></div>

        {/* Content */}
        <div className="relative container mx-auto text-center">
          <h2 className="section-title text-white">Our Foundation</h2>
          <div className="decorative-line mx-auto mb-8" />

          <div className="grid md:grid-cols-3 gap-8 mt-12">
            {values.map((v) => (
              <div
                key={v.title}
                className="bg-white/10 backdrop-blur-sm p-8 rounded-lg shadow-lg"
              >
                <div className="w-16 h-16 bg-gradient-warm rounded-full flex items-center justify-center mx-auto mb-6">
                  <v.icon className="w-8 h-8 text-secondary-foreground" />
                </div>
                <h3 className="font-display text-xl font-bold text-white mb-3">{v.title}</h3>
                <p className="text-white/80 text-sm leading-relaxed">{v.desc}</p>
              </div>
            ))}
          </div>
        </div>

      </section>

      {/* Timeline */}
      <section className="py-12 md:py-16 px-4 lg:px-8 bg-[#fafafa]">
        <div className="container mx-auto text-center">

          <h2 className="text-3xl lg:text-5xl font-black text-[#800000] uppercase tracking-wide">
            Our Journey
          </h2>
          <div className="w-20 h-1 bg-[#800000] mx-auto my-6 rounded-full"></div>

          <div className="relative max-w-4xl mx-auto mt-12">

            {/* Center Line */}
            <div className="absolute left-1/2 top-0 transform -translate-x-1/2 w-[2px] h-full bg-gray-200"></div>

            {milestones.map((m, i) => (
              <div
                key={m.year}
                className={`relative flex items-center mb-12 ${i % 2 === 0 ? "justify-start" : "justify-end"
                  }`}
              >
                {/* Content Card */}
                <div className="w-full md:w-1/2 px-4">
                  <div className="bg-white p-6 rounded-lg shadow-sm text-left transition-all duration-500 hover:shadow-xl hover:-translate-y-1">

                    {/* Year */}
                    <h3 className="text-[#800000] font-black text-xl mb-2 transition-colors duration-300 group-hover:text-primary">
                      {m.year}
                    </h3>

                    {/* Content (kept clean as per profile tone) */}
                    <p className="text-gray-600 text-sm leading-relaxed">
                      {m.text}
                    </p>

                  </div>
                </div>

                {/* Dot */}
                <div className="absolute left-1/2 transform -translate-x-1/2">
                  <div className="w-5 h-5 bg-[#800000] rounded-full border-4 border-white shadow-lg transition-all duration-300 hover:scale-125"></div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Founders */}
      <section className="py-12 md:py-16 px-4 lg:px-8 bg-[#fafafa]">
        <div className="container mx-auto text-center">

          <h2 className="text-3xl lg:text-4xl font-semibold text-gray-900">
            Our Founders
          </h2>
          <div className="w-16 h-[2px] bg-secondary mx-auto my-4"></div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mt-10">
            {[
              { img: RajivGurav, name: "Rajiv Gurav", role: "Director" },
              { img: AbhijitPatil, name: "Abhijit Patil", role: "Managing Partner" },
              { img: PhoolchandGupta, name: "Phoolchand R. Gupta", role: "Chemical Engineer" }
            ].map((founder, i) => (
              <Link key={i} to="/team" className="relative group perspective h-full block">
                <div className="bg-white rounded-2xl p-4 shadow-sm border border-gray-100 group-hover:border-[#800000] group-hover:shadow-[0_30px_60px_rgb(128,0,0,0.15)] group-hover:-translate-y-3 transition-all duration-500 h-full flex flex-col items-center overflow-hidden">

                  {/* Shiny Hover Effect Element */}
                  <div className="absolute inset-0 translate-x-[-100%] group-hover:translate-x-[100%] transition-transform duration-1000 bg-gradient-to-r from-transparent via-white/20 to-transparent skew-x-[-20deg] pointer-events-none"></div>

                  <div className="overflow-hidden rounded-xl w-full mb-6 relative">
                    <img
                      src={founder.img}
                      alt={founder.name}
                      className="w-full h-[380px] object-cover transition-transform duration-700 group-hover:scale-110"
                    />

                    {/* View Profile Overlay */}
                    <div className="absolute inset-0 bg-[#800000]/40 opacity-0 group-hover:opacity-100 transition-opacity duration-500 flex flex-col items-center justify-center">
                      <div className="bg-white text-[#800000] rounded-full p-3 transform translate-y-4 group-hover:translate-y-0 transition-transform duration-500 shadow-xl">
                        <ArrowRight className="w-6 h-6" />
                      </div>
                      <span className="text-white font-bold mt-3 tracking-widest uppercase text-xs transform translate-y-4 group-hover:translate-y-0 transition-transform duration-500 delay-75">View Bio</span>
                    </div>
                  </div>

                  <div className="text-center pb-2 relative z-10">
                    <h3 className="text-xl font-bold text-gray-900 transition-colors duration-500 group-hover:text-[#800000]">
                      {founder.name}
                    </h3>
                    <div className="w-8 h-[2px] bg-[#800000]/20 mx-auto my-3 group-hover:w-16 group-hover:bg-[#800000] transition-all duration-500"></div>
                    <p className="text-[#800000] font-semibold uppercase text-xs tracking-widest">
                      {founder.role}
                    </p>
                  </div>
                </div>
              </Link>
            ))}
          </div>

        </div>
      </section>

      {/* Our Experts Team */}
      <section className="py-12 md:py-16 px-4 lg:px-8 bg-white">
        <div className="container mx-auto">
          <div className="text-center mb-10">
            <h2 className="text-3xl lg:text-4xl font-semibold text-gray-900">
              Our Experts Team
            </h2>
            <div className="w-16 h-[2px] bg-secondary mx-auto my-4"></div>
          </div>

          <div className="max-w-7xl mx-auto grid grid-cols-1 md:grid-cols-3 gap-8 px-4">
            {[
              {
                name: "Mr. Subhash Patil",
                title: "Retired Joint Registrar, CIDCO",
                bio: [
                  "Mr. Subhash Patil has over 32 years of distinguished experience in the Co-operative Department, having served as Assistant Registrar, Deputy Registrar, and District Deputy Registrar across Mumbai and Maharashtra. He retired as Joint Registrar, Co-operative Societies, CIDCO.",
                  "He was also a member of the committee involved in drafting amendments to the Maharashtra Co-operative Societies Act, 1960 GR 4/7/19 particularly for housing societies. He has in-depth knowledge of the MCS Act, 1960, MOFA, 1963, and RERA."
                ]
              },
              {
                name: "Mr. Mahendra M. Sapre",
                title: "Retired Assistant Commissioner, NMMC",
                bio: [
                  "Mr. Mahendra M. Sapre has an illustrious career spanning 33 years in municipal administration. He retired as Assistant Commissioner from the Navi Mumbai Municipal Corporation (NMMC), with 29 years of dedicated service.",
                  "Prior to his tenure at NMMC, he also served for four years with CIDCO. His vast experience in municipal governance, approvals, and inter-departmental coordination makes him a key advisor in redevelopment projects."
                ]
              },
              {
                name: "Mr. Harsh S. Trivedi",
                title: "Legal Advisor",
                bio: [
                  "Adv. Harsh S. Trivedi is a practicing advocate before the Bombay High Court and the Founder of Harsh S. Trivedi Law Firm, dedicated to co-operative housing society laws, redevelopment, deemed conveyance, and real estate documentation.",
                  "Known for his transparent, structured, and member-first approach, Adv. Trivedi works closely with PMCs and architects to ensure legally robust and timely redevelopment outcomes."
                ]
              }
            ].map((expert, i) => (
              <div key={i} className="relative group perspective h-full">
                <div className="bg-white rounded-2xl p-6 shadow-sm border border-gray-100 group-hover:border-[#800000] group-hover:shadow-[0_20px_40px_rgb(128,0,0,0.1)] group-hover:-translate-y-2 transition-all duration-500 h-full flex flex-col">
                  <div className="flex items-center gap-4 mb-6">
                    <div className="w-16 h-16 rounded-full overflow-hidden bg-gray-100 border-2 border-[#800000]/20 flex-shrink-0">
                      <img src={aboutImg} alt={expert.name} className="w-full h-full object-cover" />
                    </div>
                    <div>
                      <h3 className="text-lg font-bold text-gray-900 group-hover:text-[#800000] transition-colors duration-500">{expert.name}</h3>
                      <p className="text-[#800000] text-[10px] uppercase font-black tracking-widest leading-tight mt-1">{expert.title}</p>
                    </div>
                  </div>
                  <div className="space-y-3 flex-1">
                    {expert.bio.map((p, j) => (
                      <p key={j} className="text-gray-600 text-xs leading-relaxed font-medium">
                        {p}
                      </p>
                    ))}
                  </div>
                </div>
              </div>
            ))}
          </div>

        </div>
      </section>

      {/* Architectural Associates */}
      <section className="py-12 md:py-16 px-4 lg:px-8 relative overflow-hidden bg-[#fbf9f6]">
        {/* Soft background texture effect */}
        <div className="absolute inset-0 opacity-[0.03] pointer-events-none" style={{ backgroundImage: "repeating-linear-gradient(45deg, #000 0, #000 1px, transparent 0, transparent 50%)", backgroundSize: "10px 10px" }}></div>

        <div className="container mx-auto relative z-10">
          <div className="text-center mb-10">
            <h2 className="font-display text-4xl md:text-5xl font-extrabold text-[#800000] uppercase tracking-wider">
              Architectural Associates
            </h2>
            <div className="mt-8 bg-[#800000] text-white py-3 px-8 inline-block shadow-lg rounded-full">
              <h3 className="text-xl md:text-2xl font-bold uppercase tracking-wider">
                Soyuz Talib Architects Private Limited (STAPL)
              </h3>
            </div>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 mt-10 max-w-7xl mx-auto px-4">
            {[
              { img: gallery1, title: "Principal Architect", desc: "Mr. Soyuz Talib, an alumnus of Rachna Sansad's Academy of Architecture, founded STAPL in 1999. Prior to this, he worked as an Associate Architect and taught at multiple architecture colleges between 1993 and 1999." },
              { img: gallery2, title: "The Organisation", desc: "From a two-member practice, STAPL has grown into a multidisciplinary firm with a team of approx 60 professionals, including architects, planners, interior designers, 3D visualizers, enabling end-to-end services." },
              { img: gallery3, title: "Regional Presence", desc: "Based in Navi Mumbai, nearly 80% of STAPL's work has been delivered in the region. The firm has also executed projects across Nashik, Goa, Nagpur, Washim, Yavatmal, Sindhudurg, Bilaspur, Raipur, and Udaipur." },
              { img: gallery4, title: "Experience & Expertise", desc: "With over 20 years of experience, STAPL offers strong expertise in local development practices, statutory approvals, and building regulations, supporting efficient design development." }
            ].map((block, i) => (
              <div key={i} className="relative group perspective h-full">
                <div className="bg-white rounded-2xl p-4 md:p-6 shadow-sm border border-gray-100 group-hover:border-[#800000] group-hover:shadow-[0_20px_40px_rgb(204,85,51,0.2)] group-hover:-translate-y-2 transition-all duration-500 h-full flex flex-col">
                  {/* Image Block */}
                  <div className="overflow-hidden rounded-xl relative mb-6 border-b-4 border-transparent group-hover:border-[#800000] transition-colors duration-500 shrink-0 bg-white">
                    <img src={block.img} alt={block.title} className="w-full h-[200px] object-cover group-hover:scale-105 transition-transform duration-700" />
                    <div className="absolute top-2 left-2 bg-white/95 backdrop-blur group-hover:bg-[#800000] shadow-lg px-3 py-1.5 rounded-lg z-20 transition-colors duration-500">
                      <div className="font-display font-black text-xl text-[#800000] group-hover:text-white transition-colors duration-500">0{i + 1}</div>
                    </div>
                  </div>

                  {/* Content Block */}
                  <div className="flex-1 flex flex-col">
                    <h3 className="text-xl font-black text-gray-900 mb-4 leading-tight group-hover:text-[#800000] transition-colors duration-500 uppercase tracking-wide">{block.title}</h3>
                    <p className="text-gray-700 leading-relaxed text-sm font-medium mt-auto">
                      {block.desc}
                    </p>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* FAQ Section */}
      <section className="py-12 md:py-16 px-4 lg:px-8 bg-background/50">
        <div className="container mx-auto px-4 lg:px-8 max-w-3xl">
          <div className="text-center mb-8">
            <h2 className="section-title text-3xl font-bold">Frequently Asked Questions</h2>
            <div className="decorative-line mx-auto" />
            <p className="text-muted-foreground mt-4 text-sm max-w-2xl mx-auto">Addressing common concerns of housing societies considering redevelopment.</p>
          </div>

          <Accordion type="single" collapsible className="w-full space-y-2">
            {faqData.map((item, index) => (
              <AccordionItem key={index} value={`item-${index}`} className="border rounded-lg px-4 bg-card shadow-sm hover:shadow-md transition-shadow">
                <AccordionTrigger className="text-left font-display text-base font-semibold py-4 hover:no-underline [&[data-state=open]]:text-secondary transition-colors">
                  {item.question}
                </AccordionTrigger>
                <AccordionContent className="text-muted-foreground text-sm leading-relaxed pb-4">
                  {item.answer}
                </AccordionContent>
              </AccordionItem>
            ))}
          </Accordion>
        </div>
      </section>

    </div>
  );
};

export default About;


import { CheckCircle, Target, Eye, Heart } from "lucide-react";
import aboutImg from "@/assets/about-redevelopment.jpg";
import RajivGurav from "@/assets/Team/RajivGurav.png";
import AbhijitPatil from "@/assets/Team/AbhijitPatil.png";
import PhoolchandGupta from "@/assets/Team/PhoolchandGupta.png";
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
        <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-black/20 to-transparent"></div>

        {/* Content */}
        <div className="relative container mx-auto px-4 text-center">
          <p className="text-secondary uppercase tracking-[0.3em] text-sm font-semibold mb-3">
            Who We Are
          </p>

          <h1 className="font-display text-4xl md:text-6xl font-bold text-white mb-4">
            About Us
          </h1>

          <div className="w-20 h-1 bg-secondary mx-auto rounded-full"></div>
        </div>

      </section>

      {/* Story */}
      <section className="section-padding">
        <div className="container mx-auto">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <div className="relative">
              <img src={aboutImg} alt="Our redevelopment work" className="rounded-lg shadow-2xl w-full" />
            </div>
            <div>
              <p className="text-secondary uppercase tracking-[0.2em] text-sm font-semibold mb-2">Our Story</p>
              <h2 className="section-title text-left">Building Trust Since 1998</h2>
              <div className="w-20 h-1 bg-secondary my-4 rounded-full" />
              <p className="text-muted-foreground leading-relaxed mb-4">
                Yugantar is a dedicated team of professionals focused on the redevelopment of old buildings. They emphasize transparency, quality construction, and timely delivery, aiming to provide homeowners with modern living spaces that offer a superior lifestyle.
              </p>
              <p className="text-muted-foreground leading-relaxed mb-6">
                Over two decades, we have grown from a small team of passionate engineers to a full-service construction and redevelopment company. Our projects span residential complexes, commercial spaces, and mixed-use developments across Maharashtra.
              </p>
              <div className="grid grid-cols-2 gap-4">
                {["RERA Certified", "ISO 9001:2015", "Green Building", "On-time Delivery"].map((item) => (
                  <div key={item} className="flex items-center gap-2">
                    <CheckCircle className="w-5 h-5 text-secondary flex-shrink-0" />
                    <span className="text-sm font-semibold text-foreground">{item}</span>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Mission Vision Values */}
      <section className="relative section-padding">

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
      <section className="section-padding">
        <div className="container mx-auto text-center">
          <h2 className="section-title">Our Journey</h2>
          <div className="decorative-line mb-12" />
          <div className="max-w-2xl mx-auto">
            {milestones.map((m, i) => (
              <div key={m.year} className="flex items-start gap-6 mb-8 last:mb-0">
                <div className="flex flex-col items-center">
                  <div className="w-12 h-12 bg-gradient-brand rounded-full flex items-center justify-center text-primary-foreground font-display font-bold text-sm">
                    {m.year}
                  </div>
                  {i < milestones.length - 1 && <div className="w-0.5 h-12 bg-border mt-2" />}
                </div>
                <p className="text-muted-foreground text-left pt-3">{m.text}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Founders */}
      <section className="section-padding bg-muted">
        <div className="container mx-auto text-center">

          <h2 className="section-title">Our Founders</h2>
          <div className="decorative-line mx-auto mb-10"></div>

          <div className="grid md:grid-cols-3 lg:grid-cols-4 gap-8">

            <div className="bg-white rounded-lg shadow-md p-4">
              <img src={RajivGurav} alt="Rajiv Gurav" className="rounded-md mb-4 w-full" />
              <h3 className="font-semibold text-lg">Rajiv Gurav</h3>
              <p className="text-sm text-muted-foreground">Director</p>
            </div>

            <div className="bg-white rounded-lg shadow-md p-4">
              <img src={AbhijitPatil} alt="Piyush Tak" className="rounded-md mb-4 w-full" />
              <h3 className="font-semibold text-lg">MR.ABHIJIT PATIL</h3>
              <p className="text-sm text-muted-foreground">Managing Partner</p>
            </div>

            <div className="bg-white rounded-lg shadow-md p-4">
              <img src={PhoolchandGupta} alt="Subhash Patil" className="rounded-md mb-4 w-full" />
              <h3 className="font-semibold text-lg">MR. PHOOLCHAND R. GUPTA</h3>
              <p className="text-sm text-muted-foreground">Chemical Eng</p>
            </div>



          </div>

        </div>
      </section>

      {/* FAQ Section */}
      <section className="section-padding bg-background/50">
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

    </div >
  );
};

export default About;


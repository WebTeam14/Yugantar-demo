import { CheckCircle, Target, Eye, Heart } from "lucide-react";
import aboutImg from "@/assets/about-redevelopment.jpg";
import galleryImg from "@/assets/gallery-3.jpg";

const values = [
  { icon: Target, title: "Our Mission", desc: "To accelerate urban transformation by delivering world-class redevelopment projects that elevate communities and create lasting value." },
  { icon: Eye, title: "Our Vision", desc: "To become the most trusted name in redevelopment construction, setting benchmarks for quality, transparency, and timely delivery." },
  { icon: Heart, title: "Our Values", desc: "Integrity, quality, transparency, and community-first approach guide every decision we make and every project we undertake." },
];

const milestones = [
  { year: "1998", text: "Founded with a vision to transform urban living" },
  { year: "2005", text: "Completed first major redevelopment project" },
  { year: "2012", text: "Expanded to commercial construction" },
  { year: "2018", text: "Crossed 100+ successful projects milestone" },
  { year: "2024", text: "Launched sustainable green building initiative" },
];

const About = () => {
  return (
    <div className="font-body pt-20">
      {/* Hero Banner */}
      <section className="relative py-20 overflow-hidden">
        <div className="absolute inset-0 bg-gradient-brand" />
        <div className="relative container mx-auto px-4 text-center">
          <p className="text-secondary uppercase tracking-[0.3em] text-sm font-semibold mb-3">Who We Are</p>
          <h1 className="font-display text-4xl md:text-6xl font-bold text-primary-foreground mb-4">About Us</h1>
          <div className="w-20 h-1 bg-secondary mx-auto rounded-full" />
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
                युगांतर was born from a deep understanding that India's urban landscape needs thoughtful redevelopment — not just demolition and reconstruction, but a careful balance of modern engineering with respect for existing communities.
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
      <section className="section-padding bg-muted">
        <div className="container mx-auto text-center">
          <h2 className="section-title">Our Foundation</h2>
          <div className="decorative-line" />
          <div className="grid md:grid-cols-3 gap-8 mt-12">
            {values.map((v) => (
              <div key={v.title} className="bg-card p-8 rounded-lg shadow-lg">
                <div className="w-16 h-16 bg-gradient-warm rounded-full flex items-center justify-center mx-auto mb-6">
                  <v.icon className="w-8 h-8 text-secondary-foreground" />
                </div>
                <h3 className="font-display text-xl font-bold text-foreground mb-3">{v.title}</h3>
                <p className="text-muted-foreground text-sm leading-relaxed">{v.desc}</p>
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

      {/* Team Image */}
      <section className="section-padding bg-muted">
        <div className="container mx-auto text-center">
          <h2 className="section-title">Our Team</h2>
          <div className="decorative-line" />
          <p className="section-subtitle mb-8">A dedicated team of engineers, architects, and project managers committed to excellence.</p>
          <img src={galleryImg} alt="Our team" className="rounded-lg shadow-2xl w-full max-w-4xl mx-auto" />
        </div>
      </section>
    </div>
  );
};

export default About;

import { Link } from "react-router-dom";
import { Building2, Award, Users, ArrowRight, CheckCircle } from "lucide-react";
import heroImg from "@/assets/hero-construction.jpg";
import aboutImg from "@/assets/about-redevelopment.jpg";

const stats = [
  { number: "25+", label: "Years Experience" },
  { number: "150+", label: "Projects Completed" },
  { number: "500+", label: "Happy Families" },
  { number: "50+", label: "Expert Team" },
];

const services = [
  {
    icon: Building2,
    title: "Building Redevelopment",
    desc: "Expert redevelopment of old structures into modern, safe and beautiful living spaces.",
  },
  {
    icon: Award,
    title: "Quality Construction",
    desc: "Premium construction with top-grade materials and adherence to the highest safety standards.",
  },
  {
    icon: Users,
    title: "Project Management",
    desc: "End-to-end project management ensuring timely delivery and transparent communication.",
  },
];

const Index = () => {
  return (
    <div className="font-body">
      {/* Hero Section */}
      <section className="relative min-h-screen flex items-center justify-center overflow-hidden">
        <div className="absolute inset-0">
          <img src={heroImg} alt="Construction site" className="w-full h-full object-cover" />
          <div className="absolute inset-0 bg-gradient-to-r from-maroon/90 via-maroon/70 to-maroon/40" />
        </div>
        <div className="relative z-10 container mx-auto px-4 lg:px-8 text-center animate-fade-in-up">
          <p className="font-body text-secondary uppercase tracking-[0.3em] text-sm mb-4 font-semibold">
            Redevelopment · Acceleration · Movement
          </p>
          <h1 className="font-display text-4xl md:text-6xl lg:text-7xl font-bold text-primary-foreground mb-6 leading-tight">
            Building the Future,<br />
            <span className="text-secondary">Respecting the Past</span>
          </h1>
          <p className="font-body text-primary-foreground/80 text-lg md:text-xl max-w-2xl mx-auto mb-8">
            Transforming urban landscapes through quality redevelopment, modern construction, and unwavering commitment to excellence.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link
              to="/contact"
              className="inline-flex items-center gap-2 bg-gradient-warm text-secondary-foreground px-8 py-4 rounded-md font-body font-bold text-sm uppercase tracking-wider hover:opacity-90 transition-opacity"
            >
              Get a Quote <ArrowRight className="w-4 h-4" />
            </Link>
            <Link
              to="/services"
              className="inline-flex items-center gap-2 border-2 border-primary-foreground/40 text-primary-foreground px-8 py-4 rounded-md font-body font-bold text-sm uppercase tracking-wider hover:bg-primary-foreground/10 transition-colors"
            >
              Our Services
            </Link>
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
                className="bg-card p-8 rounded-lg shadow-lg hover:shadow-xl transition-shadow group"
              >
                <div className="w-16 h-16 bg-gradient-warm rounded-full flex items-center justify-center mx-auto mb-6 group-hover:scale-110 transition-transform">
                  <service.icon className="w-8 h-8 text-secondary-foreground" />
                </div>
                <h3 className="font-display text-xl font-bold text-foreground mb-3">{service.title}</h3>
                <p className="text-muted-foreground font-body text-sm leading-relaxed">{service.desc}</p>
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
    </div>
  );
};

export default Index;

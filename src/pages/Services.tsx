import { Link } from "react-router-dom";
import { Building2, Home, Landmark, HardHat, Paintbrush, ClipboardList, ArrowRight } from "lucide-react";

const services = [
  {
    icon: Building2,
    title: "Building Redevelopment",
    desc: "Complete redevelopment of aging residential societies and buildings. We handle everything from tenant negotiations to final handover, ensuring a seamless transition from old to new.",
    features: ["Tenant rehabilitation planning", "Structural assessment", "Modern amenities integration", "RERA compliant process"],
  },
  {
    icon: Home,
    title: "Residential Construction",
    desc: "Premium residential projects designed for modern living. From luxury apartments to affordable housing, we deliver homes that families love.",
    features: ["Earthquake-resistant structures", "Vastu-compliant designs", "Smart home integration", "Green building certification"],
  },
  {
    icon: Landmark,
    title: "Commercial Construction",
    desc: "State-of-the-art commercial spaces including office complexes, retail centers, and mixed-use developments built for business success.",
    features: ["Modern office spaces", "Retail and commercial hubs", "IT park development", "Industrial facilities"],
  },
  {
    icon: HardHat,
    title: "Project Management",
    desc: "End-to-end project management services ensuring your construction project stays on time, within budget, and meets the highest quality standards.",
    features: ["Timeline management", "Budget optimization", "Quality assurance", "Regular progress reports"],
  },
  {
    icon: Paintbrush,
    title: "Interior Design",
    desc: "Transform your spaces with our expert interior design services. From concept to completion, we create interiors that reflect your style and enhance functionality.",
    features: ["Space planning", "Material selection", "Custom furniture", "Lighting design"],
  },
  {
    icon: ClipboardList,
    title: "Liaison & Approvals",
    desc: "Navigate the complex world of construction approvals and permits with our experienced liaison team. We handle all government approvals and documentation.",
    features: ["BMC approvals", "Environmental clearances", "RERA registration", "Occupation certificates"],
  },
];

const Services = () => {
  return (
    <div className="font-body pt-20">
      {/* Hero */}
      <section className="relative py-20 overflow-hidden">
        <div className="absolute inset-0 bg-gradient-brand" />
        <div className="relative container mx-auto px-4 text-center">
          <p className="text-secondary uppercase tracking-[0.3em] text-sm font-semibold mb-3">What We Offer</p>
          <h1 className="font-display text-4xl md:text-6xl font-bold text-primary-foreground mb-4">Our Services</h1>
          <div className="w-20 h-1 bg-secondary mx-auto rounded-full" />
        </div>
      </section>

      {/* Services Grid */}
      <section className="section-padding">
        <div className="container mx-auto">
          <div className="grid md:grid-cols-2 gap-8">
            {services.map((service) => (
              <div
                key={service.title}
                className="bg-card p-8 rounded-lg shadow-lg border border-border hover:shadow-xl transition-shadow group"
              >
                <div className="flex items-start gap-5">
                  <div className="w-14 h-14 bg-gradient-warm rounded-lg flex items-center justify-center flex-shrink-0 group-hover:scale-110 transition-transform">
                    <service.icon className="w-7 h-7 text-secondary-foreground" />
                  </div>
                  <div>
                    <h3 className="font-display text-xl font-bold text-foreground mb-2">{service.title}</h3>
                    <p className="text-muted-foreground text-sm leading-relaxed mb-4">{service.desc}</p>
                    <ul className="grid grid-cols-2 gap-2">
                      {service.features.map((f) => (
                        <li key={f} className="text-xs text-muted-foreground flex items-center gap-1.5">
                          <span className="w-1.5 h-1.5 bg-secondary rounded-full flex-shrink-0" />
                          {f}
                        </li>
                      ))}
                    </ul>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="section-padding bg-muted">
        <div className="container mx-auto text-center">
          <h2 className="section-title">Need a Custom Solution?</h2>
          <div className="decorative-line" />
          <p className="section-subtitle mb-8">
            Every project is unique. Contact us to discuss your specific requirements and get a tailored proposal.
          </p>
          <Link
            to="/contact"
            className="inline-flex items-center gap-2 bg-gradient-brand text-primary-foreground px-8 py-4 rounded-md font-body font-bold text-sm uppercase tracking-wider hover:opacity-90 transition-opacity"
          >
            Get a Free Quote <ArrowRight className="w-4 h-4" />
          </Link>
        </div>
      </section>
    </div>
  );
};

export default Services;

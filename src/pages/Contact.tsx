import { useState } from "react";
import { Phone, Mail, MapPin, Clock, Send } from "lucide-react";
import { toast } from "sonner";

const Contact = () => {
  const [form, setForm] = useState({ name: "", email: "", phone: "", subject: "", message: "" });

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    toast.success("Thank you! We'll get back to you soon.");
    setForm({ name: "", email: "", phone: "", subject: "", message: "" });
  };

  return (
    <div className="font-body pt-20">
      {/* Hero */}
      <section className="relative py-20 overflow-hidden">
        <div className="absolute inset-0 bg-gradient-brand" />
        <div className="relative container mx-auto px-4 text-center">
          <p className="text-secondary uppercase tracking-[0.3em] text-sm font-semibold mb-3">Get In Touch</p>
          <h1 className="font-display text-4xl md:text-6xl font-bold text-primary-foreground mb-4">Contact Us</h1>
          <div className="w-20 h-1 bg-secondary mx-auto rounded-full" />
        </div>
      </section>

      <section className="section-padding">
        <div className="container mx-auto">
          <div className="grid lg:grid-cols-3 gap-12">
            {/* Contact Info */}
            <div className="space-y-6">
              <h2 className="font-display text-2xl font-bold text-foreground">Let's Talk</h2>
              <div className="w-16 h-1 bg-secondary rounded-full" />
              <p className="text-muted-foreground text-sm leading-relaxed">
                Ready to start your redevelopment project? Reach out to us and our team will get back to you within 24 hours.
              </p>

              {[
                { icon: MapPin, label: "Visit Us", value: "123, Business Hub, Andheri West,\nMumbai 400053, Maharashtra" },
                { icon: Phone, label: "Call Us", value: "+91 99999 99999\n+91 88888 88888" },
                { icon: Mail, label: "Email Us", value: "info@yugantar.com\nprojects@yugantar.com" },
                { icon: Clock, label: "Working Hours", value: "Mon - Sat: 9:00 AM - 7:00 PM\nSunday: By Appointment" },
              ].map((item) => (
                <div key={item.label} className="flex items-start gap-4">
                  <div className="w-12 h-12 bg-gradient-warm rounded-lg flex items-center justify-center flex-shrink-0">
                    <item.icon className="w-5 h-5 text-secondary-foreground" />
                  </div>
                  <div>
                    <h4 className="font-semibold text-foreground text-sm">{item.label}</h4>
                    <p className="text-muted-foreground text-sm whitespace-pre-line">{item.value}</p>
                  </div>
                </div>
              ))}
            </div>

            {/* Form */}
            <div className="lg:col-span-2">
              <div className="bg-card p-8 rounded-lg shadow-lg border border-border">
                <h3 className="font-display text-2xl font-bold text-foreground mb-6">Send us a Message</h3>
                <form onSubmit={handleSubmit} className="space-y-5">
                  <div className="grid md:grid-cols-2 gap-5">
                    <div>
                      <label className="block text-sm font-semibold text-foreground mb-1.5">Full Name *</label>
                      <input
                        type="text"
                        required
                        value={form.name}
                        onChange={(e) => setForm({ ...form, name: e.target.value })}
                        className="w-full px-4 py-3 rounded-md border border-input bg-background text-foreground text-sm focus:outline-none focus:ring-2 focus:ring-secondary"
                        placeholder="Your name"
                      />
                    </div>
                    <div>
                      <label className="block text-sm font-semibold text-foreground mb-1.5">Email *</label>
                      <input
                        type="email"
                        required
                        value={form.email}
                        onChange={(e) => setForm({ ...form, email: e.target.value })}
                        className="w-full px-4 py-3 rounded-md border border-input bg-background text-foreground text-sm focus:outline-none focus:ring-2 focus:ring-secondary"
                        placeholder="your@email.com"
                      />
                    </div>
                  </div>
                  <div className="grid md:grid-cols-2 gap-5">
                    <div>
                      <label className="block text-sm font-semibold text-foreground mb-1.5">Phone</label>
                      <input
                        type="tel"
                        value={form.phone}
                        onChange={(e) => setForm({ ...form, phone: e.target.value })}
                        className="w-full px-4 py-3 rounded-md border border-input bg-background text-foreground text-sm focus:outline-none focus:ring-2 focus:ring-secondary"
                        placeholder="+91 XXXXX XXXXX"
                      />
                    </div>
                    <div>
                      <label className="block text-sm font-semibold text-foreground mb-1.5">Subject *</label>
                      <input
                        type="text"
                        required
                        value={form.subject}
                        onChange={(e) => setForm({ ...form, subject: e.target.value })}
                        className="w-full px-4 py-3 rounded-md border border-input bg-background text-foreground text-sm focus:outline-none focus:ring-2 focus:ring-secondary"
                        placeholder="Project enquiry"
                      />
                    </div>
                  </div>
                  <div>
                    <label className="block text-sm font-semibold text-foreground mb-1.5">Message *</label>
                    <textarea
                      required
                      rows={5}
                      value={form.message}
                      onChange={(e) => setForm({ ...form, message: e.target.value })}
                      className="w-full px-4 py-3 rounded-md border border-input bg-background text-foreground text-sm focus:outline-none focus:ring-2 focus:ring-secondary resize-none"
                      placeholder="Tell us about your project..."
                    />
                  </div>
                  <button
                    type="submit"
                    className="inline-flex items-center gap-2 bg-gradient-brand text-primary-foreground px-8 py-3.5 rounded-md font-body font-bold text-sm uppercase tracking-wider hover:opacity-90 transition-opacity"
                  >
                    <Send className="w-4 h-4" /> Send Message
                  </button>
                </form>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Map placeholder */}
      <section className="h-80 bg-muted flex items-center justify-center">
        <div className="text-center">
          <MapPin className="w-12 h-12 text-secondary mx-auto mb-3" />
          <p className="text-muted-foreground font-body">Mumbai, Maharashtra, India</p>
          <p className="text-muted-foreground/60 text-sm mt-1">Google Maps integration can be added here</p>
        </div>
      </section>
    </div>
  );
};

export default Contact;

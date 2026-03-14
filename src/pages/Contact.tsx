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
    <div className="font-body">
      {/* Hero */}
      <section className="relative h-[40vh] min-h-[300px] overflow-hidden">
        {/* Background Image */}
        <div className="absolute inset-0 bg-[url('assets/contactus.png')] bg-cover bg-center bg-no-repeat"></div>
        {/* Dark Overlay with Gradient */}
        <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/40 to-black/20"></div>
        
        {/* Content */}
        <div className="relative h-full container mx-auto px-4 flex flex-col justify-center items-center text-center">
          <p className="text-secondary uppercase tracking-[0.4em] text-xs font-bold mb-4 animate-fade-in">
            Get In Touch
          </p>
          <h1 className="font-display text-4xl md:text-6xl font-black text-white mb-6 drop-shadow-2xl">
            Contact Us
          </h1>
          <div className="w-24 h-1.5 bg-secondary rounded-full shadow-lg"></div>
        </div>
      </section>

      {/* Main Contact Section */}
      <section className="section-padding bg-background relative z-10">
        <div className="container mx-auto max-w-7xl">
          <div className="grid lg:grid-cols-5 gap-16 items-start">
            
            {/* Left Column: Contact Info */}
            <div className="lg:col-span-2 space-y-10">
              <div>
                <h2 className="font-display text-3xl font-bold text-foreground mb-4">Let's Build Together</h2>
                <div className="w-16 h-1 bg-secondary rounded-full mb-6" />
                <p className="text-muted-foreground leading-relaxed">
                  Ready to transform your property or start a new redevelopment project? 
                  Our team of experts is ready to assist you at every step.
                </p>
              </div>

              <div className="grid gap-8">
                {[
                  { 
                    icon: MapPin, 
                    label: "Our Office", 
                    value: "Office 708, Shelton Cubix, Plot No. 87,\nSector-15, CBD Belapur, Navi Mumbai 400614",
                    link: "https://maps.app.goo.gl/YourMapLink"
                  },
                  { 
                    icon: Phone, 
                    label: "Call Support", 
                    value: "+91 9320296221",
                    link: "tel:+919320296221"
                  },
                  { 
                    icon: Mail, 
                    label: "Email Query", 
                    value: "yugantarservices@gmail.com",
                    link: "mailto:yugantarservices@gmail.com"
                  },
                  { 
                    icon: Clock, 
                    label: "Business Hours", 
                    value: "Mon - Sat: 9:00 AM - 7:00 PM\nSunday: Closed" 
                  },
                ].map((item) => (
                  <div key={item.label} className="group flex items-start gap-5 p-4 rounded-xl hover:bg-muted/50 transition-all duration-300">
                    <div className="w-14 h-14 bg-gradient-to-br from-maroon/10 to-maroon/5 rounded-2xl flex items-center justify-center flex-shrink-0 group-hover:scale-110 transition-transform duration-300 shadow-sm border border-maroon/5">
                      <item.icon className="w-6 h-6 text-maroon" />
                    </div>
                    <div>
                      <h4 className="font-bold text-foreground text-sm uppercase tracking-wider mb-1">{item.label}</h4>
                      {item.link ? (
                        <a href={item.link} className="text-muted-foreground text-sm whitespace-pre-line hover:text-maroon transition-colors">
                          {item.value}
                        </a>
                      ) : (
                        <p className="text-muted-foreground text-sm whitespace-pre-line">{item.value}</p>
                      )}
                    </div>
                  </div>
                ))}
              </div>
            </div>

            {/* Right Column: Contact Form */}
            <div className="lg:col-span-3">
              <div className="bg-card p-8 md:p-12 rounded-3xl shadow-2xl border border-border/50 relative overflow-hidden">
                {/* Subtle Backdrop Glow */}
                <div className="absolute -top-24 -right-24 w-64 h-64 bg-maroon/5 blur-[100px] rounded-full pointer-events-none" />
                
                <h3 className="font-display text-2xl font-bold text-foreground mb-8">
                  Send us a Message
                </h3>

                <form onSubmit={handleSubmit} className="space-y-6 relative z-10">
                  <div className="grid md:grid-cols-2 gap-6">
                    <div className="space-y-2">
                      <label className="text-xs font-bold text-foreground/70 uppercase tracking-widest px-1">Full Name</label>
                      <input
                        type="text"
                        required
                        value={form.name}
                        onChange={(e) => setForm({ ...form, name: e.target.value })}
                        className="w-full px-5 py-4 rounded-xl border border-border bg-muted/30 text-foreground text-sm focus:outline-none focus:ring-2 focus:ring-maroon/20 focus:border-maroon transition-all"
                        placeholder="John Doe"
                      />
                    </div>
                    <div className="space-y-2">
                      <label className="text-xs font-bold text-foreground/70 uppercase tracking-widest px-1">Email Address</label>
                      <input
                        type="email"
                        required
                        value={form.email}
                        onChange={(e) => setForm({ ...form, email: e.target.value })}
                        className="w-full px-5 py-4 rounded-xl border border-border bg-muted/30 text-foreground text-sm focus:outline-none focus:ring-2 focus:ring-maroon/20 focus:border-maroon transition-all"
                        placeholder="john@example.com"
                      />
                    </div>
                  </div>

                  <div className="grid md:grid-cols-2 gap-6">
                    <div className="space-y-2">
                      <label className="text-xs font-bold text-foreground/70 uppercase tracking-widest px-1">Phone Number</label>
                      <input
                        type="tel"
                        value={form.phone}
                        onChange={(e) => setForm({ ...form, phone: e.target.value })}
                        className="w-full px-5 py-4 rounded-xl border border-border bg-muted/30 text-foreground text-sm focus:outline-none focus:ring-2 focus:ring-maroon/20 focus:border-maroon transition-all"
                        placeholder="+91 XXXXX XXXXX"
                      />
                    </div>
                    <div className="space-y-2">
                      <label className="text-xs font-bold text-foreground/70 uppercase tracking-widest px-1">Subject</label>
                      <input
                        type="text"
                        required
                        value={form.subject}
                        onChange={(e) => setForm({ ...form, subject: e.target.value })}
                        className="w-full px-5 py-4 rounded-xl border border-border bg-muted/30 text-foreground text-sm focus:outline-none focus:ring-2 focus:ring-maroon/20 focus:border-maroon transition-all"
                        placeholder="Enquiry for Redevelopment"
                      />
                    </div>
                  </div>

                  <div className="space-y-2">
                    <label className="text-xs font-bold text-foreground/70 uppercase tracking-widest px-1">Your Message</label>
                    <textarea
                      required
                      rows={5}
                      value={form.message}
                      onChange={(e) => setForm({ ...form, message: e.target.value })}
                      className="w-full px-5 py-4 rounded-xl border border-border bg-muted/30 text-foreground text-sm focus:outline-none focus:ring-2 focus:ring-maroon/20 focus:border-maroon transition-all resize-none"
                      placeholder="Tell us about your project or requirements..."
                    />
                  </div>

                  <button
                    type="submit"
                    className="w-full md:w-auto inline-flex items-center justify-center gap-3 bg-[#800000] text-white px-10 py-4 rounded-xl font-bold text-sm uppercase tracking-[0.2em] shadow-xl hover:shadow-maroon/20 hover:scale-[1.02] transition-all duration-300"
                  >
                    <Send className="w-5 h-5" />
                    <span>Send Message</span>
                  </button>
                </form>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Map Section */}
      <section className="bg-muted/30 py-20 border-t border-border/50">
        <div className="container mx-auto px-4">
          <div className="text-center mb-12">
            <h2 className="font-display text-2xl md:text-3xl font-bold text-foreground mb-4">Visit Us</h2>
            <p className="text-muted-foreground max-w-2xl mx-auto">
              Drop by our office to discuss your project in person. We're located in the heart of CBD Belapur.
            </p>
          </div>
          
          <div className="w-full h-[500px] rounded-3xl overflow-hidden shadow-2xl border-4 border-white">
            <iframe
              title="Location Map"
              src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3772.1925669423717!2d73.03457837502579!3d19.011234382180128!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3be7c3aa532c007b%3A0x4d776fef462c5f1e!2sShelton%20Cubix!5e0!3m2!1sen!2sin!4v1773398116390!5m2!1sen!2sin"
              width="100%"
              height="100%"
              style={{ border: 0 }}
              allowFullScreen
              loading="lazy"
              referrerPolicy="no-referrer-when-downgrade"
            />
          </div>
        </div>
      </section>
    </div>
  );
};

export default Contact;

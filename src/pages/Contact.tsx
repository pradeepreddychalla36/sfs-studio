import { motion } from 'motion/react';
import { Mail, Phone, MapPin, Send, MessageCircle } from 'lucide-react';
import { STUDIO_INFO } from '../constants/content';

export default function Contact() {
  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    // In a real app, this would send to a database or API
    alert("Thank you! Your inquiry has been received. Our team will contact you shortly.");
  };

  return (
    <div className="pt-32 pb-24 bg-black">
      <div className="max-w-7xl mx-auto px-6">
        <header className="mb-20 text-center max-w-3xl mx-auto">
          <span className="text-primary font-display uppercase tracking-[0.4em] text-xs font-bold mb-6 block">
            Say Hello
          </span>
          <h1 className="text-5xl md:text-7xl font-serif font-bold mb-8 leading-tight">
            Let's Make <br /> <span className="italic">Magic</span> Together
          </h1>
          <p className="text-gray-400 text-lg leading-relaxed">
            Ready to book your session or have questions about our packages? Fill out the form below or reach out via our direct channels.
          </p>
        </header>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-20 items-start">
          {/* Contact Details */}
          <div className="space-y-12">
            <div className="space-y-8">
              <h3 className="text-2xl font-serif font-bold text-white uppercase tracking-widest">Connect Directly</h3>
              <div className="space-y-6">
                <a href={`tel:${STUDIO_INFO.phone}`} className="flex items-center gap-6 group">
                  <div className="w-16 h-16 bg-white/5 flex items-center justify-center border border-white/10 group-hover:bg-primary transition-all">
                    <Phone className="w-6 h-6 text-primary group-hover:text-black" />
                  </div>
                  <div>
                    <p className="text-gray-500 text-xs uppercase tracking-widest font-bold mb-1">Call Us</p>
                    <p className="text-xl font-bold group-hover:text-primary transition-colors">{STUDIO_INFO.phone}</p>
                  </div>
                </a>
                <a href={`mailto:${STUDIO_INFO.email}`} className="flex items-center gap-6 group">
                  <div className="w-16 h-16 bg-white/5 flex items-center justify-center border border-white/10 group-hover:bg-primary transition-all">
                    <Mail className="w-6 h-6 text-primary group-hover:text-black" />
                  </div>
                  <div>
                    <p className="text-gray-500 text-xs uppercase tracking-widest font-bold mb-1">Email Us</p>
                    <p className="text-xl font-bold group-hover:text-primary transition-colors">{STUDIO_INFO.email}</p>
                  </div>
                </a>
                <div className="flex items-center gap-6 group">
                  <div className="w-16 h-16 bg-white/5 flex items-center justify-center border border-white/10 group-hover:bg-primary transition-all">
                    <MapPin className="w-6 h-6 text-primary group-hover:text-black" />
                  </div>
                  <div>
                    <p className="text-gray-500 text-xs uppercase tracking-widest font-bold mb-1">Visit Studio</p>
                    <p className="text-xl font-bold group-hover:text-primary transition-colors leading-tight">{STUDIO_INFO.address}</p>
                  </div>
                </div>
              </div>
            </div>

            <div className="pt-12 p-10 bg-primary text-black">
              <h4 className="text-2xl font-serif font-bold mb-4 flex items-center gap-3">
                <MessageCircle className="w-6 h-6" /> Faster Response?
              </h4>
              <p className="font-medium mb-8 leading-relaxed">
                Need an immediate quote? Our WhatsApp team is active 24/7 during wedding seasons. 
              </p>
              <a 
                href={`https://wa.me/${STUDIO_INFO.whatsapp}`} 
                target="_blank" 
                rel="noreferrer"
                className="inline-block bg-black text-white px-8 py-4 font-bold uppercase tracking-widest hover:bg-gray-900 transition-all"
              >
                Chat on WhatsApp
              </a>
            </div>
          </div>

          {/* Contact Form */}
          <motion.div
            initial={{ opacity: 0, x: 20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            className="bg-white/5 p-10 md:p-16 border border-white/10"
          >
            <form onSubmit={handleSubmit} className="space-y-8">
              <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                <div className="space-y-2">
                  <label className="text-xs uppercase tracking-widest text-gray-500 font-bold">Your Name</label>
                  <input
                    required
                    type="text"
                    className="w-full bg-transparent border-b border-white/20 py-3 text-white focus:outline-none focus:border-primary transition-all"
                    placeholder="Enter Full Name"
                  />
                </div>
                <div className="space-y-2">
                  <label className="text-xs uppercase tracking-widest text-gray-500 font-bold">Phone Number</label>
                  <input
                    required
                    type="tel"
                    className="w-full bg-transparent border-b border-white/20 py-3 text-white focus:outline-none focus:border-primary transition-all"
                    placeholder="Enter Contact Number"
                  />
                </div>
              </div>

              <div className="space-y-2">
                <label className="text-xs uppercase tracking-widest text-gray-500 font-bold">Select Event Type</label>
                <select className="w-full bg-transparent border-b border-white/20 py-3 text-white focus:outline-none focus:border-primary transition-all appearance-none cursor-pointer">
                  <option className="bg-black">Wedding Photography</option>
                  <option className="bg-black">Pre-Wedding Shoot</option>
                  <option className="bg-black">Baby Photoshoot</option>
                  <option className="bg-black">Event / Corporate</option>
                  <option className="bg-black">Fashion Photography</option>
                </select>
              </div>

              <div className="space-y-2">
                <label className="text-xs uppercase tracking-widest text-gray-500 font-bold">Event Details & Venue</label>
                <textarea
                  required
                  rows={4}
                  className="w-full bg-transparent border-b border-white/20 py-3 text-white focus:outline-none focus:border-primary transition-all resize-none"
                  placeholder="Tell us about your event, location, and preferred dates..."
                />
              </div>

              <button
                type="submit"
                className="w-full bg-primary text-black py-6 font-bold uppercase tracking-[0.2em] flex items-center justify-center gap-3 hover:bg-gold-light transition-all"
              >
                Send Inquiry <Send className="w-5 h-5" />
              </button>
            </form>
          </motion.div>
        </div>
      </div>
    </div>
  );
}

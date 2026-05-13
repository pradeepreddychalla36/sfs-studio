import { motion } from 'motion/react';
import { MessageCircle, PhoneCall } from 'lucide-react';
import { STUDIO_INFO } from '../../constants/content';

export default function CTASection() {
  return (
    <section className="py-32 bg-primary relative overflow-hidden">
      {/* Background Texture */}
      <div className="absolute inset-0 opacity-10 pointer-events-none">
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_center,_var(--tw-gradient-stops))] from-black via-transparent to-transparent scale-150" />
      </div>

      <div className="max-w-4xl mx-auto px-6 relative z-10 text-center">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="bg-black p-12 md:p-20 shadow-2xl skew-y-0"
        >
          <span className="text-primary font-display uppercase tracking-[0.4em] text-xs font-bold mb-6 block">
            Get Started
          </span>
          <h2 className="text-4xl md:text-6xl font-serif font-bold text-white mb-8">
            Let’s Capture Your <br /> <span className="italic">Beautiful</span> Story
          </h2>
          <p className="text-gray-400 text-lg mb-12 max-w-xl mx-auto leading-relaxed">
            Booking dates for 2024-25 weddings in Hyderabad are filling up fast. Get in touch for customized packages.
          </p>

          <div className="flex flex-col sm:flex-row justify-center items-center gap-6">
            <a
              href={`https://wa.me/${STUDIO_INFO.whatsapp}`}
              className="flex items-center gap-3 bg-[#25D366] text-white px-10 py-5 rounded-none font-bold uppercase tracking-widest hover:bg-opacity-90 transition-all w-full sm:w-auto justify-center"
            >
              <MessageCircle className="w-6 h-6" /> WhatsApp Now
            </a>
            <a
              href={`tel:${STUDIO_INFO.phone}`}
              className="flex items-center gap-3 bg-white text-black px-10 py-5 rounded-none font-bold uppercase tracking-widest hover:bg-primary transition-all w-full sm:w-auto justify-center"
            >
              <PhoneCall className="w-6 h-6" /> Call Us Now
            </a>
          </div>
        </motion.div>
      </div>
    </section>
  );
}

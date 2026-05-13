import { motion } from 'motion/react';
import { SERVICES } from '../constants/content';
import { ArrowRight, CheckCircle2 } from 'lucide-react';
import { Link } from 'react-router-dom';
import ImageComparison from '../components/ImageComparison';

const inclusions = [
  "4K Cinematic Video Coverage",
  "Professional Color Grading",
  "High-Resolution Edited Digital Copies",
  "Premium Photo Albums (Silk/Matte)",
  "Drone Aerial Cinematography",
  "Same-Day Edit Reels",
  "Candid & Traditional Mix",
  "Lifetime Cloud Storage Access"
];

export default function Services() {
  return (
    <div className="pt-32 pb-24 bg-black">
      <div className="max-w-7xl mx-auto px-6">
        <header className="mb-24 text-center max-w-3xl mx-auto">
          <span className="text-primary font-display uppercase tracking-[0.4em] text-xs font-bold mb-6 block">
            Our Expertise
          </span>
          <h1 className="text-5xl md:text-7xl font-serif font-bold mb-8">
            Premium <span className="italic">Visual</span> Solutions
          </h1>
          <p className="text-gray-400 text-lg leading-relaxed">
            From high-end wedding films to intimate portraits, we offer comprehensive photography and videography packages designed for excellence.
          </p>
        </header>

        <div className="space-y-32">
          {SERVICES.map((service, index) => (
            <motion.div
              key={service.id}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              className={`flex flex-col ${index % 2 === 0 ? 'lg:flex-row' : 'lg:flex-row-reverse'} gap-16 items-center`}
            >
              <div className="flex-1 w-full">
                <div className="aspect-video overflow-hidden relative group">
                  <img
                    src={service.image}
                    alt={service.title}
                    className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105"
                  />
                  <div className="absolute inset-0 bg-black/20 group-hover:bg-transparent transition-all" />
                </div>
              </div>
              <div className="flex-1 space-y-8">
                <h2 className="text-4xl md:text-5xl font-serif font-bold">{service.title}</h2>
                <p className="text-gray-400 text-lg leading-relaxed">
                  {service.description} Our approach to {service.title.toLowerCase()} is centered around deep emotional connection and cinematic storytelling. We use the latest mirrorless technology and high-end lighting to ensure every detail is perfect.
                </p>
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                  {inclusions.slice(0, 4).map((item) => (
                    <div key={item} className="flex items-center gap-3 text-sm text-gray-300">
                      <CheckCircle2 className="w-5 h-5 text-primary shrink-0" />
                      {item}
                    </div>
                  ))}
                </div>
                <div className="pt-6">
                  <Link
                    to="/contact"
                    className="inline-flex items-center gap-3 bg-primary text-black px-8 py-4 font-bold uppercase tracking-widest hover:bg-gold-light transition-all"
                  >
                    Inquire About This Service <ArrowRight className="w-5 h-5" />
                  </Link>
                </div>
              </div>
            </motion.div>
          ))}
        </div>

        {/* Pricing Teaser */}
        <div className="mt-32 p-12 md:p-20 bg-white/5 border border-white/10 text-center">
          <h2 className="text-3xl md:text-5xl font-serif font-bold mb-8">Custom Packages for Every Event</h2>
          <p className="text-gray-400 text-lg max-w-2xl mx-auto mb-10 leading-relaxed">
            We understand that no two events are the same. Contact us to receive a personalized quote based on your specific requirements and budget.
          </p>
          <Link
            to="/contact"
            className="inline-block border-2 border-primary text-primary px-12 py-5 font-bold uppercase tracking-widest hover:bg-primary hover:text-black transition-all"
          >
            Get Custom Quote
          </Link>
        </div>

        {/* Editing Section */}
        <div className="mt-32">
          <div className="text-center mb-16">
            <span className="text-primary font-display uppercase tracking-[0.4em] text-xs font-bold mb-6 block">The Alchemy</span>
            <h2 className="text-4xl md:text-6xl font-serif font-bold mb-6">Our Editing <br /><span className="italic">Process</span></h2>
            <p className="text-gray-400 max-w-2xl mx-auto">See the difference our professional cinematic color grading and retouching makes to raw moments. Drag the slider to compare.</p>
          </div>
          <ImageComparison 
            beforeImage="https://images.unsplash.com/photo-1519741497674-611481863552?q=80&w=2070&auto=format&fit=crop"
            afterImage="https://images.unsplash.com/photo-1511285560929-80b456fea0bc?q=80&w=2069&auto=format&fit=crop"
            className="aspect-video max-w-5xl mx-auto border border-white/10 shadow-2xl"
          />
        </div>
      </div>
    </div>
  );
}

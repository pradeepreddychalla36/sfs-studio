import { motion } from 'motion/react';
import { Smartphone, Zap, MessageSquare, ShieldCheck, HeartPulse, Clock } from 'lucide-react';

const reasons = [
  {
    title: "Cinematic Quality",
    description: "Highest-end gear and post-production for that million-dollar looks.",
    icon: Zap
  },
  {
    title: "Instant Deliverables",
    description: "Get your high-res photos within 7-10 working days, not months.",
    icon: Clock
  },
  {
    title: "Indian Soul",
    description: "Deep understanding of Telugu and Pan-Indian wedding traditions.",
    icon: HeartPulse
  },
  {
    title: "Mobile Optimization",
    description: "Perfectly edited shots optimized for your Reels and Social Stories.",
    icon: Smartphone
  },
  {
    title: "Real Emotions",
    description: "Minimal posing, maximum capturing of candid heartfelt moments.",
    icon: MessageSquare
  },
  {
    title: "Safe & Secure",
    description: "Redundant cloud backups for all your precious event data.",
    icon: ShieldCheck
  }
];

export default function WhyChooseUs() {
  return (
    <section className="py-24 bg-[#0a0a0a]">
      <div className="max-w-7xl mx-auto px-6">
        <div className="text-center mb-20">
          <h2 className="text-4xl md:text-6xl font-serif font-bold mb-6">
            The <span className="text-primary italic">SFS</span> Difference
          </h2>
          <p className="text-gray-400 max-w-2xl mx-auto text-lg leading-relaxed">
            Beyond just photos, we provide a premium experience that honors your memories with the respect they deserve.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-12">
          {reasons.map((reason, index) => (
            <motion.div
              key={reason.title}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.1 }}
              className="bg-white/5 p-10 border border-white/5 hover:border-primary/20 transition-all group"
            >
              <reason.icon className="w-12 h-12 text-primary mb-8 transition-transform group-hover:scale-110" />
              <h3 className="text-2xl font-serif font-bold mb-4">{reason.title}</h3>
              <p className="text-gray-400 leading-relaxed">
                {reason.description}
              </p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}

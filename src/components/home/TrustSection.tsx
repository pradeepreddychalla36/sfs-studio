import { motion } from 'motion/react';
import { Award, Camera, Heart, Users } from 'lucide-react';

const stats = [
  { label: 'Weddings Covered', value: '500+', icon: Heart },
  { label: 'Years Experience', value: '12+', icon: Camera },
  { label: 'Happy Clients', value: '1,200+', icon: Users },
  { label: 'Global Awards', value: '15+', icon: Award },
];

export default function TrustSection() {
  return (
    <section className="py-24 bg-background relative border-b border-white/5">
      <div className="max-w-7xl mx-auto px-6">
        <div className="grid grid-cols-2 lg:grid-cols-4 gap-12 text-center">
          {stats.map((stat, index) => (
            <motion.div
              key={stat.label}
              initial={{ opacity: 0, y: 10 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.1 }}
              className="flex flex-col items-center group"
            >
              <h3 className="text-4xl md:text-6xl font-serif italic text-primary mb-2 tracking-tighter">
                {stat.value}
              </h3>
              <p className="text-white/40 uppercase tracking-[0.3em] text-[10px] font-bold">
                {stat.label}
              </p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}

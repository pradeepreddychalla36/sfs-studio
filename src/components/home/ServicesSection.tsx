import { motion } from 'motion/react';
import { ArrowRight } from 'lucide-react';
import { Link } from 'react-router-dom';
import { SERVICES } from '../../constants/content';

export default function ServicesSection() {
  return (
    <section className="py-24 bg-background border-y border-white/5">
      <div className="max-w-7xl mx-auto px-6">
        <div className="flex flex-col md:flex-row justify-between items-end mb-16 gap-6">
          <div className="max-w-2xl">
            <div className="mb-4 inline-flex items-center gap-2">
              <span className="h-[1px] w-8 bg-primary"></span>
              <span className="text-[10px] uppercase tracking-[0.4em] text-primary font-bold">What We Do</span>
            </div>
            <h2 className="text-4xl md:text-6xl font-serif font-bold mb-6">
              Our <span className="italic">Cinematic</span> <br /> Excellence
            </h2>
            <p className="text-gray-400 text-lg leading-relaxed">
              We offer a wide range of photography and videography services tailored to capture every emotion of your life's significant moments.
            </p>
          </div>
          <Link to="/services" className="text-primary font-bold uppercase tracking-widest flex items-center gap-2 group border-b border-primary/20 pb-2 hover:border-primary transition-all">
            See All Services <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
          </Link>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {SERVICES.map((service, index) => (
            <motion.div
              key={service.id}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.1 }}
              className="group relative h-[500px] overflow-hidden cursor-pointer"
            >
              <img
                src={service.image}
                alt={service.title}
                className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black via-black/20 to-transparent p-8 flex flex-col justify-end">
                <h3 className="text-2xl font-serif font-bold text-white mb-2 group-hover:text-primary transition-colors">
                  {service.title}
                </h3>
                <p className="text-gray-300 text-sm mb-6 opacity-0 group-hover:opacity-100 transition-opacity duration-300 line-clamp-2">
                  {service.description}
                </p>
                <Link to={service.link} className="flex items-center gap-2 text-primary uppercase text-xs tracking-widest font-bold">
                  Learn More <ArrowRight className="w-4 h-4" />
                </Link>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}

import { motion } from 'motion/react';

const steps = [
  {
    number: '01',
    title: 'Consultation',
    description: 'We meet to understand your vision, style preferences, and event flow.'
  },
  {
    number: '02',
    title: 'Storyboarding',
    description: 'Our creative team plans the cinematic shots and narrative structure.'
  },
  {
    number: '03',
    title: 'The Session',
    description: 'Relaxed, professional execution using world-class equipment.'
  },
  {
    number: '04',
    title: 'Post-Production',
    description: 'Bespoke color grading and cinematic editing to bring out emotions.'
  }
];

export default function ProcessSection() {
  return (
    <section className="py-24 bg-black overflow-hidden">
      <div className="max-w-7xl mx-auto px-6">
        <div className="mb-20">
          <span className="text-primary font-display uppercase tracking-[0.4em] text-xs font-bold mb-4 block">
            Our Workflow
          </span>
          <h2 className="text-4xl md:text-6xl font-serif font-bold">
            The Journey to <br /> Perfection
          </h2>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-0 border-l border-white/10 md:border-l-0">
          {steps.map((step, index) => (
            <motion.div
              key={step.number}
              initial={{ opacity: 0, x: -20 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.2 }}
              className="relative pl-8 pb-12 md:pb-0 md:pr-12 md:border-l border-white/10"
            >
              <div className="absolute -left-[1px] md:left-0 top-0 w-[3px] h-full md:w-full md:h-[3px] bg-white/5" />
              <div className="absolute -left-[1px] md:left-0 top-0 w-[3px] h-20 md:w-20 md:h-[3px] bg-primary" />
              
              <span className="text-5xl font-display font-bold text-white/10 block mb-6">
                {step.number}
              </span>
              <h3 className="text-2xl font-serif font-bold mb-4 text-white">
                {step.title}
              </h3>
              <p className="text-gray-400 leading-relaxed md:text-sm">
                {step.description}
              </p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}

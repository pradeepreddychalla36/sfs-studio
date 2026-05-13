import { motion } from 'motion/react';
import { STUDIO_INFO } from '../constants/content';

export default function About() {
  return (
    <div className="pt-32 pb-24 bg-black">
      <div className="max-w-7xl mx-auto px-6">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          className="grid grid-cols-1 lg:grid-cols-2 gap-20 items-center mb-32"
        >
          <div>
            <span className="text-primary font-display uppercase tracking-[0.4em] text-xs font-bold mb-6 block">
              Our Story
            </span>
            <h1 className="text-5xl md:text-7xl font-serif font-bold mb-10 leading-tight">
              We Don't Just Take Photos, We <span className="italic">Preserve</span> History.
            </h1>
            <div className="space-y-6 text-gray-400 text-lg leading-relaxed">
              <p>
                Founded in the heart of Hyderabad, SFS Studio began with a simple mission: to elevate wedding photography into a cinematic art form. We believe every couple has a unique story that deserves to be told with elegance, passion, and technical perfection.
              </p>
              <p>
                Over the last decade, we have grown from a small passionate team into one of the most sought-after premium studios in Telangana and Andhra Pradesh. Our style is a blend of candid storytelling and high-fashion aesthetics, ensuring your memories look as grand as they felt.
              </p>
              <p>
                Whether it's a grand royal wedding or an intimate pre-wedding shoot, we bring the same level of dedication, creativity, and world-class technology to every frame.
              </p>
            </div>
          </div>
          <div className="relative">
            <div className="aspect-[4/5] overflow-hidden">
              <img
                src="https://images.unsplash.com/photo-1542038784456-1ea8e935640e?q=80&w=2070&auto=format&fit=crop"
                alt="Behind the scenes"
                className="w-full h-full object-cover"
              />
            </div>
            <div className="absolute -bottom-10 -left-10 w-64 h-64 border-8 border-primary/20 -z-10 hidden md:block" />
            <div className="absolute top-1/2 -right-10 bg-primary p-12 text-black hidden lg:block">
              <span className="text-6xl font-display font-bold block mb-2">12+</span>
              <span className="text-sm font-bold uppercase tracking-widest">Years of <br /> Storytelling</span>
            </div>
          </div>
        </motion.div>

        {/* Mission/Vision */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-12">
          <div className="bg-white/5 p-12 border border-white/10">
            <h3 className="text-2xl font-serif font-bold mb-6 text-primary">The Vision</h3>
            <p className="text-gray-400 leading-relaxed">
              To be the global benchmark for creative storytelling through visual media, starting right here in our vibrant city.
            </p>
          </div>
          <div className="bg-white/5 p-12 border border-white/10">
            <h3 className="text-2xl font-serif font-bold mb-6 text-primary">The Mission</h3>
            <p className="text-gray-400 leading-relaxed">
              To capture the raw, unfiltered emotions of life with cinematic precision and deliver memories that last for generations.
            </p>
          </div>
          <div className="bg-white/5 p-12 border border-white/10">
            <h3 className="text-2xl font-serif font-bold mb-6 text-primary">The Values</h3>
            <p className="text-gray-400 leading-relaxed">
              Integrity, Creativity, and Excellence. We treat every client like family and every event like our own masterpiece.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}

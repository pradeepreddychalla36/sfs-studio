import { motion } from 'motion/react';
import { MousePointer2, ChevronRight } from 'lucide-react';
import { Link } from 'react-router-dom';

export default function Hero() {
  return (
    <section className="relative h-screen w-full flex items-center justify-center overflow-hidden">
      {/* Background with Video Overlay Feel */}
      <div className="absolute inset-0 z-0">
        <img
          src="https://images.unsplash.com/photo-1519741497674-611481863552?q=80&w=2070&auto=format&fit=crop"
          className="w-full h-full object-cover opacity-60 scale-105"
          alt="Luxury Wedding"
        />
        <div className="absolute inset-0 bg-black/40 backdrop-blur-[2px]" />
        <div className="absolute inset-0 bg-gradient-to-b from-black/60 via-transparent to-black/90" />
      </div>

      <div className="relative z-10 text-center px-6 max-w-5xl">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, ease: "easeOut" }}
        >
          <div className="mb-6 inline-flex items-center gap-3 justify-center">
            <span className="h-[1px] w-8 bg-primary"></span>
            <span className="text-[10px] uppercase tracking-[0.4em] text-primary font-bold">
              Cinema • Emotion • Legacy
            </span>
            <span className="h-[1px] w-8 bg-primary"></span>
          </div>
          
          <h1 className="text-6xl md:text-8xl lg:text-9xl font-serif font-bold leading-[0.9] mb-8">
            Turning <span className="italic font-normal">Moments</span><br />
            Into Timeless <span className="text-primary italic font-normal">Memories.</span>
          </h1>
          
          <p className="text-white/70 text-lg md:text-xl max-w-xl mx-auto mb-12 font-serif italic leading-relaxed">
            Hyderabad’s premier luxury photography studio specializing in cinematic wedding storytelling and emotional legacies.
          </p>

          {/* Interactive Inquiry Bar Replacement */}
          <div className="glass-panel p-1 pl-8 flex flex-col md:flex-row items-center gap-6 rounded-none w-full max-w-2xl mx-auto accent-glow backdrop-blur-2xl">
            <div className="flex flex-col text-left py-2">
              <span className="text-[9px] uppercase tracking-widest opacity-40 mb-1">Event Type</span>
              <span className="text-xs font-bold tracking-wider">Wedding / Pre-Wedding</span>
            </div>
            <div className="hidden md:block w-[1px] h-10 bg-white/10"></div>
            <div className="flex flex-col text-left py-2">
              <span className="text-[9px] uppercase tracking-widest opacity-40 mb-1">Availability</span>
              <span className="text-xs font-bold tracking-wider">Hyderabad • 2024/25</span>
            </div>
            <Link
              to="/contact"
              className="ml-auto bg-white text-black px-8 py-4 text-[11px] uppercase tracking-widest font-bold hover:bg-primary transition-colors w-full md:w-auto"
            >
              Check Availability
            </Link>
          </div>
        </motion.div>
      </div>

      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 1, duration: 1 }}
        className="absolute bottom-10 left-1/2 -translate-x-1/2 flex flex-col items-center gap-2 opacity-50"
      >
        <span className="text-[10px] uppercase tracking-[0.3em]">Scroll</span>
        <motion.div
          animate={{ y: [0, 10, 0] }}
          transition={{ repeat: Infinity, duration: 2 }}
          className="w-[1px] h-12 bg-white/30"
        />
      </motion.div>
    </section>
  );
}

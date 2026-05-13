import { useState } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import { PORTFOLIO_CATEGORIES, PORTFOLIO_ITEMS } from '../constants/content';
import { cn } from '../lib/utils';
import { Maximize2, X } from 'lucide-react';

export default function Portfolio() {
  const [activeCategory, setActiveCategory] = useState("All");
  const [selectedImage, setSelectedImage] = useState<string | null>(null);

  const filteredItems = activeCategory === "All" 
    ? [...PORTFOLIO_ITEMS, ...PORTFOLIO_ITEMS] // Expand for the full page
    : PORTFOLIO_ITEMS.filter(item => item.category === activeCategory);

  return (
    <div className="pt-32 pb-24 bg-black min-h-screen">
      <div className="max-w-7xl mx-auto px-6 text-center mb-24">
        <span className="text-primary font-display uppercase tracking-[0.4em] text-xs font-bold mb-6 block">
          Visual Anthology
        </span>
        <h1 className="text-5xl md:text-7xl font-serif font-bold mb-8">
          The <span className="italic text-primary">Masterpiece</span> Collection
        </h1>
        
        <div className="flex flex-wrap justify-center gap-6 mt-12">
          {PORTFOLIO_CATEGORIES.map((cat) => (
            <button
              key={cat}
              onClick={() => setActiveCategory(cat)}
              className={cn(
                'px-8 py-3 uppercase tracking-widest text-[10px] font-bold border transition-all duration-300',
                activeCategory === cat 
                  ? 'bg-primary border-primary text-black' 
                  : 'bg-transparent border-white/20 text-gray-400 hover:border-white hover:text-white'
              )}
            >
              {cat}
            </button>
          ))}
        </div>
      </div>

      <div className="px-6">
        <motion.div 
          layout
          className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-4"
        >
          <AnimatePresence mode="popLayout">
            {filteredItems.map((item, idx) => (
              <motion.div
                key={`${item.id}-${idx}`}
                layout
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                exit={{ opacity: 0 }}
                transition={{ duration: 0.5 }}
                className="group relative h-[400px] overflow-hidden cursor-zoom-in"
                onClick={() => setSelectedImage(item.image)}
              >
                <img
                  src={item.image}
                  alt={item.title}
                  className="w-full h-full object-cover transition-transform duration-1000 group-hover:scale-110"
                />
                <div className="absolute inset-0 bg-black/60 opacity-0 group-hover:opacity-100 transition-opacity p-8 flex flex-col justify-end">
                  <p className="text-primary uppercase tracking-[0.3em] text-[10px] mb-2 font-bold">{item.category}</p>
                  <h3 className="text-xl font-serif font-bold text-white mb-4">{item.title}</h3>
                  <div className="flex items-center gap-2 text-white/60 text-xs uppercase tracking-widest">
                    <Maximize2 className="w-4 h-4" /> Expand
                  </div>
                </div>
              </motion.div>
            ))}
          </AnimatePresence>
        </motion.div>
      </div>

      {/* Lightbox */}
      <AnimatePresence>
        {selectedImage && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="fixed inset-0 z-[100] bg-black/95 flex items-center justify-center p-6 sm:p-20"
            onClick={() => setSelectedImage(null)}
          >
            <button 
              className="absolute top-10 right-10 text-white p-4 hover:bg-white/10 transition-all rounded-full"
              onClick={() => setSelectedImage(null)}
            >
              <X className="w-8 h-8" />
            </button>
            <motion.img
              initial={{ scale: 0.9, opacity: 0 }}
              animate={{ scale: 1, opacity: 1 }}
              src={selectedImage}
              className="max-w-full max-h-full object-contain shadow-2xl"
              alt="Gallery Preview"
            />
          </motion.div>
        )}
      </AnimatePresence>

      <div className="mt-32 text-center pb-12">
        <p className="text-gray-500 mb-8 uppercase tracking-[0.2em] text-xs">Want to see more of our cinematic films?</p>
        <a 
          href="https://youtube.com/sfsstudio" 
          target="_blank" 
          rel="noreferrer"
          className="bg-red-600 text-white px-12 py-5 font-bold uppercase tracking-widest hover:bg-opacity-90 transition-all inline-block"
        >
          Check Our YouTube Channel
        </a>
      </div>
    </div>
  );
}

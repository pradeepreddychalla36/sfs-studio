import { useState } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import { PORTFOLIO_CATEGORIES, PORTFOLIO_ITEMS } from '../../constants/content';
import { cn } from '../../lib/utils';

export default function PortfolioSection() {
  const [activeCategory, setActiveCategory] = useState("All");

  const filteredItems = activeCategory === "All" 
    ? PORTFOLIO_ITEMS 
    : PORTFOLIO_ITEMS.filter(item => item.category === activeCategory);

  return (
    <section className="py-24 bg-background">
      <div className="max-w-7xl mx-auto px-6">
        <div className="text-center mb-16">
          <div className="mb-4 inline-flex items-center gap-2 justify-center w-full">
            <span className="h-[1px] w-8 bg-primary"></span>
            <span className="text-[10px] uppercase tracking-[0.4em] text-primary font-bold">Gallery Exhibits</span>
            <span className="h-[1px] w-8 bg-primary"></span>
          </div>
          <h2 className="text-4xl md:text-6xl font-serif font-bold">
            Recent <span className="italic">Masterpieces</span>
          </h2>
        </div>

        {/* Categories Link-like buttons */}
        <div className="flex flex-wrap justify-center gap-8 mb-16">
          {PORTFOLIO_CATEGORIES.map((cat) => (
            <button
              key={cat}
              onClick={() => setActiveCategory(cat)}
              className={cn(
                'uppercase tracking-[0.2em] text-sm font-bold transition-all border-b-2',
                activeCategory === cat ? 'text-primary border-primary' : 'text-gray-500 border-transparent hover:text-white'
              )}
            >
              {cat}
            </button>
          ))}
        </div>

        <motion.div 
          layout
          className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8"
        >
          <AnimatePresence mode="popLayout">
            {filteredItems.map((item) => (
              <motion.div
                key={item.id}
                layout
                initial={{ opacity: 0, scale: 0.9 }}
                animate={{ opacity: 1, scale: 1 }}
                exit={{ opacity: 0, scale: 0.9 }}
                transition={{ duration: 0.4 }}
                className="group relative aspect-[4/5] overflow-hidden"
              >
                <img
                  src={item.image}
                  alt={item.title}
                  className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105"
                />
                <div className="absolute inset-0 bg-black/60 opacity-0 group-hover:opacity-100 transition-opacity flex flex-col items-center justify-center p-8 text-center">
                  <span className="text-primary text-[10px] uppercase tracking-[0.3em] mb-2">{item.category}</span>
                  <h3 className="text-2xl font-serif font-bold text-white mb-4">{item.title}</h3>
                  <button className="border border-white/20 px-6 py-2 text-xs uppercase tracking-widest hover:bg-white hover:text-black transition-colors">
                    View Details
                  </button>
                </div>
              </motion.div>
            ))}
          </AnimatePresence>
        </motion.div>

        <div className="mt-20 text-center">
          <button className="px-12 py-5 bg-white text-black font-bold uppercase tracking-widest hover:bg-primary transition-all">
            See Complete Gallery
          </button>
        </div>
      </div>
    </section>
  );
}

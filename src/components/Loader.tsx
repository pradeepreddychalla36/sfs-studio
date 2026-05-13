import { motion, AnimatePresence } from 'motion/react';
import { useEffect, useState } from 'react';
import { Camera } from 'lucide-react';

export default function Loader() {
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const timer = setTimeout(() => setLoading(false), 2000);
    return () => clearTimeout(timer);
  }, []);

  return (
    <AnimatePresence>
      {loading && (
        <motion.div
          initial={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          transition={{ duration: 0.8, ease: "easeInOut" }}
          className="fixed inset-0 z-[1000] bg-black flex flex-col items-center justify-center p-6"
        >
          <div className="relative">
            <motion.div
              initial={{ scale: 0.8, opacity: 0 }}
              animate={{ scale: 1, opacity: 1 }}
              className="mb-8"
            >
              <Camera className="w-16 h-16 text-primary animate-pulse" />
            </motion.div>
            
            <motion.div
              initial={{ width: 0 }}
              animate={{ width: "100%" }}
              transition={{ duration: 1.5, ease: "easeInOut" }}
              className="h-[1px] bg-primary absolute -bottom-4 left-0"
            />
          </div>
          
          <motion.div
            initial={{ opacity: 0, y: 10 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.5 }}
            className="mt-12 text-center"
          >
            <span className="text-white font-display text-xs uppercase tracking-[1em] mb-2 block">
              SFS Studio
            </span>
            <span className="text-gray-500 italic text-[10px] uppercase tracking-widest">
              Capturing Timelessness
            </span>
          </motion.div>
        </motion.div>
      )}
    </AnimatePresence>
  );
}

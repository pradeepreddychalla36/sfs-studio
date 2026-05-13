import { useState, useRef, useEffect } from 'react';
import { motion } from 'motion/react';
import { cn } from '../lib/utils';

interface ImageComparisonProps {
  beforeImage: string;
  afterImage: string;
  className?: string;
}

export default function ImageComparison({ beforeImage, afterImage, className }: ImageComparisonProps) {
  const [sliderPosition, setSliderPosition] = useState(50);
  const containerRef = useRef<HTMLDivElement>(null);

  const handleMove = (clientIndex: number) => {
    if (!containerRef.current) return;
    const rect = containerRef.current.getBoundingClientRect();
    const x = Math.max(0, Math.min(clientIndex - rect.left, rect.width));
    const percentage = (x / rect.width) * 100;
    setSliderPosition(percentage);
  };

  const handleMouseMove = (e: React.MouseEvent) => handleMove(e.clientX);
  const handleTouchMove = (e: React.TouchEvent) => handleMove(e.touches[0].clientX);

  return (
    <div 
      ref={containerRef}
      className={cn("relative overflow-hidden select-none cursor-ew-resize group", className)}
      onMouseMove={handleMouseMove}
      onTouchMove={handleTouchMove}
    >
      {/* After Image (Background) */}
      <img
        src={afterImage}
        alt="Post Editing"
        className="w-full h-full object-cover pointer-events-none"
      />

      {/* Before Image (Overlay) */}
      <div 
        className="absolute inset-0 pointer-events-none"
        style={{ clipPath: `inset(0 ${100 - sliderPosition}% 0 0)` }}
      >
        <img
          src={beforeImage}
          alt="Raw Footage"
          className="w-full h-full object-cover pointer-events-none"
        />
      </div>

      {/* Slider Bar */}
      <div 
        className="absolute inset-y-0 w-1 bg-primary cursor-ew-resize"
        style={{ left: `${sliderPosition}%` }}
      >
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-10 h-10 bg-primary rounded-full flex items-center justify-center shadow-2xl">
          <div className="flex gap-1">
            <div className="w-[2px] h-4 bg-black/50" />
            <div className="w-[2px] h-4 bg-black/50" />
          </div>
        </div>
      </div>

      {/* Labels */}
      <div className="absolute bottom-6 left-6 bg-black/50 backdrop-blur-md px-3 py-1 text-[10px] uppercase tracking-widest text-white border border-white/10 pointer-events-none opacity-0 group-hover:opacity-100 transition-opacity">
        Raw Capture
      </div>
      <div className="absolute bottom-6 right-6 bg-primary/80 backdrop-blur-md px-3 py-1 text-[10px] uppercase tracking-widest text-black font-bold pointer-events-none opacity-0 group-hover:opacity-100 transition-opacity">
        SFS Master Grade
      </div>
    </div>
  );
}

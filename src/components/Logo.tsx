import React from 'react';
import { cn } from '../lib/utils';

interface LogoProps {
  className?: string;
  size?: 'sm' | 'md' | 'lg';
}

export default function Logo({ className, size = 'md' }: LogoProps) {
  const sizes = {
    sm: 'w-12 h-12',
    md: 'w-24 h-24',
    lg: 'w-48 h-48',
  };

  return (
    <div className={cn('relative flex flex-col items-center justify-center', sizes[size], className)} id="sfs-logo">
      <svg viewBox="0 0 400 400" className="w-full h-full">
        {/* Outer Circular Ring */}
        <circle 
          cx="200" 
          cy="180" 
          r="160" 
          fill="none" 
          stroke="url(#goldGradient)" 
          strokeWidth="4" 
          strokeDasharray="800 200"
          className="animate-[spin_10s_linear_infinite]"
        />
        
        {/* Main Text: SFS */}
        <defs>
          <linearGradient id="goldGradient" x1="0%" y1="0%" x2="100%" y2="100%">
            <stop offset="0%" stopColor="#D4AF37" />
            <stop offset="50%" stopColor="#F1E5AC" />
            <stop offset="100%" stopColor="#A67C00" />
          </linearGradient>
          <linearGradient id="silverGradient" x1="0%" y1="0%" x2="100%" y2="100%">
            <stop offset="0%" stopColor="#C0C0C0" />
            <stop offset="50%" stopColor="#FFFFFF" />
            <stop offset="100%" stopColor="#808080" />
          </linearGradient>
        </defs>

        <text x="50%" y="200" textAnchor="middle" className="font-sans font-black italic">
          <tspan fill="url(#silverGradient)" fontSize="140">S</tspan>
          <tspan fill="url(#goldGradient)" fontSize="160" dy="-10">F</tspan>
          <tspan fill="url(#silverGradient)" fontSize="140" dy="10">S</tspan>
        </text>

        {/* Studio Text */}
        <line x1="100" y1="260" x2="300" y2="260" stroke="#D4AF37" strokeWidth="2" />
        <text 
          x="50%" 
          y="300" 
          textAnchor="middle" 
          fill="white" 
          fontSize="50" 
          className="font-sans font-bold tracking-[0.3em] uppercase"
        >
          STUDIO
        </text>
        <line x1="100" y1="315" x2="300" y2="315" stroke="#D4AF37" strokeWidth="2" />

        {/* Tagline */}
        <text 
          x="50%" 
          y="360" 
          textAnchor="middle" 
          fill="rgba(255,255,255,0.7)" 
          fontSize="18" 
          className="font-sans tracking-[0.4em] uppercase"
        >
          CREATE • INSPIRE • ELEVATE
        </text>
      </svg>
    </div>
  );
}

import { Link } from 'react-router-dom';
import { Instagram, Youtube, MessageCircle } from 'lucide-react';
import { STUDIO_INFO } from '../constants/content';
import Logo from './Logo';

export default function Footer() {
  return (
    <footer className="bg-black border-t border-white/10 pt-16 pb-8 px-6">
      <div className="max-w-7xl mx-auto grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12 mb-12">
        <div className="space-y-6">
          <Link to="/" className="flex items-center">
            <Logo size="sm" className="w-16 h-16" />
          </Link>
          <p className="text-white/40 text-sm leading-relaxed font-light italic">
            Hyderabad’s premier luxury photography studio specializing in cinematic wedding storytelling and emotional legacies.
          </p>
          <div className="flex gap-4">
            <a href={STUDIO_INFO.socials.instagram} target="_blank" rel="noreferrer" className="p-2 border border-white/10 hover:border-primary text-white/50 hover:text-primary transition-all rounded-full">
              <Instagram className="w-4 h-4" />
            </a>
            <a href={STUDIO_INFO.socials.youtube} target="_blank" rel="noreferrer" className="p-2 border border-white/10 hover:border-primary text-white/50 hover:text-primary transition-all rounded-full">
              <Youtube className="w-4 h-4" />
            </a>
          </div>
        </div>

        <div>
          <h4 className="text-[10px] uppercase tracking-[0.3em] font-bold mb-6 text-primary">Capabilities</h4>
          <ul className="space-y-4 text-white/50 text-[11px] uppercase tracking-widest font-medium">
            <li><Link to="/services" className="hover:text-white transition-colors">Portraits</Link></li>
            <li><Link to="/services" className="hover:text-white transition-colors">Cinematography</Link></li>
            <li><Link to="/services" className="hover:text-white transition-colors">Drone Arts</Link></li>
            <li><Link to="/portfolio" className="hover:text-white transition-colors">Exhibits</Link></li>
          </ul>
        </div>

        <div>
          <h4 className="text-[10px] uppercase tracking-[0.3em] font-bold mb-6 text-primary">Journal</h4>
          <ul className="space-y-4 text-white/50 text-[11px] uppercase tracking-widest font-medium">
            <li><Link to="/blog" className="hover:text-white transition-colors">Storytelling</Link></li>
            <li><Link to="/about" className="hover:text-white transition-colors">Our Ethos</Link></li>
            <li><Link to="/faq" className="hover:text-white transition-colors">Queries</Link></li>
          </ul>
        </div>

        <div className="flex flex-col items-start lg:items-end lg:text-right">
          <h4 className="text-[10px] uppercase tracking-[0.3em] font-bold mb-6 text-primary">Hotline</h4>
          <div className="flex items-center gap-4 group cursor-pointer lg:justify-end">
            <div className="flex flex-col">
              <span className="text-[10px] uppercase tracking-widest text-primary mb-1">WhatsApp</span>
              <span className="text-sm font-bold tracking-wider">{STUDIO_INFO.phone}</span>
            </div>
            <div className="w-10 h-10 rounded-full bg-[#25D366] flex items-center justify-center accent-glow group-hover:scale-110 transition-transform">
              <MessageCircle className="w-5 h-5 text-white" />
            </div>
          </div>
          <div className="mt-8">
            <span className="text-[9px] uppercase tracking-widest opacity-40 mb-2 block">Recognized by</span>
            <span className="text-[11px] font-bold opacity-70 italic font-serif">Vogue Weddings • WedMeGood</span>
          </div>
        </div>
      </div>

      <div className="max-w-7xl mx-auto pt-8 border-t border-white/5 text-center text-gray-500 text-sm">
        <p>&copy; {new Date().getFullYear()} {STUDIO_INFO.name}. All Rights Reserved.</p>
        <div className="mt-2 flex justify-center gap-6">
          <Link to="/privacy" className="hover:text-white">Privacy Policy</Link>
          <Link to="/terms" className="hover:text-white">Terms & Conditions</Link>
        </div>
      </div>
    </footer>
  );
}

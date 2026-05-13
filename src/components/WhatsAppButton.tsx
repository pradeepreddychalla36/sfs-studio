import { motion } from 'motion/react';
import { MessageCircle } from 'lucide-react';
import { STUDIO_INFO } from '../constants/content';

export default function WhatsAppButton() {
  const message = encodeURIComponent("Hi SFS Studio, I'm interested in booking a photoshoot. Could you share more details?");
  const whatsappUrl = `https://wa.me/${STUDIO_INFO.whatsapp}?text=${message}`;

  return (
    <motion.a
      href={whatsappUrl}
      target="_blank"
      rel="noreferrer"
      initial={{ scale: 0, opacity: 0 }}
      animate={{ scale: 1, opacity: 1 }}
      whileHover={{ scale: 1.1 }}
      whileTap={{ scale: 0.9 }}
      className="fixed bottom-6 right-6 z-50 bg-[#25D366] text-white p-4 rounded-full shadow-2xl flex items-center gap-2 group overflow-hidden"
    >
      <MessageCircle className="w-6 h-6" />
      <span className="max-w-0 group-hover:max-w-xs transition-all duration-300 overflow-hidden font-bold whitespace-nowrap">
        WhatsApp Us
      </span>
    </motion.a>
  );
}

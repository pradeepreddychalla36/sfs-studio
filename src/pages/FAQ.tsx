import { motion } from 'motion/react';
import { HelpCircle, ChevronDown } from 'lucide-react';
import { useState } from 'react';
import { cn } from '../lib/utils';

const faqs = [
  {
    question: "Do you travel outside of Hyderabad for weddings?",
    answer: "Absolutely! While we are based in Hyderabad, we love destination weddings. We have covered events in Goa, Jaipur, Vizag, and even international locations. Travel and accommodation are typically handled by the client."
  },
  {
    question: "How soon should we book our wedding photography?",
    answer: "The popular wedding dates in the 'muhurtham' season get booked 12-18 months in advance. We recommend booking as soon as your dates are finalized to ensure availability."
  },
  {
    question: "What is your turnaround time for photos and videos?",
    answer: "We provide 'Highlights' (20-30 teaser photos) within 48 hours. The complete set of edited high-resolution photos are delivered in 10-15 working days, and cinematic films are delivered within 45-60 days."
  },
  {
    question: "Do you provide cinematic drone coverage?",
    answer: "Yes, we use the latest DJI 4K drones to capture stunning aerial visuals of your venue and processions. It is included in most of our premium wedding packages."
  },
  {
    question: "Can we customize the photography packages?",
    answer: "Yes! Every wedding is different. We offer flexible packages that can be customized based on the number of days, events, and specific creative requirements you have."
  }
];

export default function FAQ() {
  const [openIndex, setOpenIndex] = useState<number | null>(null);

  return (
    <div className="pt-32 pb-24 bg-black">
      <div className="max-w-3xl mx-auto px-6">
        <header className="mb-20 text-center">
          <HelpCircle className="w-12 h-12 text-primary mx-auto mb-6" />
          <h1 className="text-4xl md:text-6xl font-serif font-bold mb-6">Frequently Asked <span className="italic text-primary">Questions</span></h1>
          <p className="text-gray-400">Everything you need to know about our process, pricing, and services.</p>
        </header>

        <div className="space-y-4">
          {faqs.map((faq, index) => (
            <div key={index} className="border border-white/10 bg-white/5">
              <button
                onClick={() => setOpenIndex(openIndex === index ? null : index)}
                className="w-full flex items-center justify-between p-6 text-left"
              >
                <span className="text-lg font-bold">{faq.question}</span>
                <ChevronDown className={cn("w-5 h-5 text-primary transition-transform", openIndex === index && "rotate-180")} />
              </button>
              <div 
                className={cn(
                  "overflow-hidden transition-all duration-300", 
                  openIndex === index ? "max-h-96 opacity-100" : "max-h-0 opacity-0"
                )}
              >
                <div className="p-6 pt-0 text-gray-400 leading-relaxed border-t border-white/5">
                  {faq.answer}
                </div>
              </div>
            </div>
          ))}
        </div>

        <div className="mt-20 p-10 bg-white/5 border border-white/10 text-center">
          <h4 className="text-xl font-bold mb-4">Still have questions?</h4>
          <p className="text-gray-500 mb-8">We're happy to help. Connect with us on WhatsApp or Call for personal consultation.</p>
          <div className="flex justify-center gap-6">
            <a href="/contact" className="text-primary font-bold uppercase tracking-widest text-sm border-b border-primary hover:text-white transition-colors">Contact Form</a>
            <span className="text-gray-600">|</span>
            <a href="https://wa.me/919999999999" className="text-primary font-bold uppercase tracking-widest text-sm border-b border-primary hover:text-white transition-colors">Direct Chat</a>
          </div>
        </div>
      </div>
    </div>
  );
}

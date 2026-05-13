import { motion } from 'motion/react';
import Hero from '../components/home/Hero';
import TrustSection from '../components/home/TrustSection';
import ServicesSection from '../components/home/ServicesSection';
import PortfolioSection from '../components/home/PortfolioSection';
import WhyChooseUs from '../components/home/WhyChooseUs';
import ProcessSection from '../components/home/ProcessSection';
import CTASection from '../components/home/CTASection';

export default function Home() {
  return (
    <div className="overflow-hidden">
      <Hero />
      <TrustSection />
      <ServicesSection />
      <PortfolioSection />
      <WhyChooseUs />
      <ProcessSection />
      <CTASection />
    </div>
  );
}

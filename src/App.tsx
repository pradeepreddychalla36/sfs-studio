import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import { Analytics } from '@vercel/analytics/react';
import Navbar from './components/Navbar';
import Footer from './components/Footer';
import Home from './pages/Home';
import About from './pages/About';
import Services from './pages/Services';
import Portfolio from './pages/Portfolio';
import Contact from './pages/Contact';
import FAQ from './pages/FAQ';
import Blog from './pages/Blog';
import WhatsAppButton from './components/WhatsAppButton';
import ScrollToTop from './components/ScrollToTop';
import Loader from './components/Loader';
import CustomCursor from './components/CustomCursor';
import SEO from './components/SEO';

export default function App() {
  return (
    <Router>
      <div className="flex flex-col min-h-screen">
        <Loader />
        <CustomCursor />
        <ScrollToTop />
        <Navbar />
        <main className="flex-grow">
          <Routes>
            <Route path="/" element={<><SEO title="sfsstudio | Elite Wedding Photography Hyderabad" /><Home /></>} />
            <Route path="/about" element={<><SEO title="Our Ethos | sfsstudio" description="Learn about sfsstudio's approach to cinematic storytelling and fine-art photography." /><About /></>} />
            <Route path="/services" element={<><SEO title="Cinematic Services | sfsstudio" description="Wedding, Pre-Wedding, Baby, and Maternity photography services in Hyderabad." /><Services /></>} />
            <Route path="/portfolio" element={<><SEO title="Masterpieces | sfsstudio Photo Gallery" description="Explore our gallery of cinematic wedding masterpieces and emotional stories." /><Portfolio /></>} />
            <Route path="/contact" element={<><SEO title="Book Your Story | sfsstudio" description="Contact sfsstudio for elite photography and videography bookings in Hyderabad." /><Contact /></>} />
            <Route path="/faq" element={<><SEO title="Queries | sfsstudio FAQ" /><FAQ /></>} />
            <Route path="/blog" element={<><SEO title="The Journal | Cinematic Wedding Stories" /><Blog /></>} />
          </Routes>
        </main>
        <Footer />
        <WhatsAppButton />
        <Analytics />
      </div>
    </Router>
  );
}

import { useEffect, useState } from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import './styles/portfolio.css';

import Navbar from './Components/Navbar';
import Hero from './Components/Hero';
import Pricing from './Components/Pricing';
import Projects from './Components/Projects';
import Skillset from './Components/Skillset';
import About from './Components/About';
import Contact from './Components/Contact';
import Footer from './Components/Footer';
import ScrollToTop from './Components/ScrollToTop';

export default function PortfolioWebsite() {
  const [showScrollTop, setShowScrollTop] = useState(false);
  const [showNavbar, setShowNavbar] = useState(true);

  useEffect(() => {
    let lastScrollY = window.scrollY;

    const handleScroll = () => {
      const currentScrollY = window.scrollY;
      const scrollBottom = currentScrollY + window.innerHeight;
      const documentHeight = document.documentElement.scrollHeight;
      const isNearBottom = scrollBottom >= documentHeight - 220;
      const isAtTop = currentScrollY < 80;
      const isScrollingUp = currentScrollY < lastScrollY;

      setShowScrollTop(isNearBottom);
      setShowNavbar(isAtTop || isScrollingUp);
      lastScrollY = currentScrollY;
    };

    window.addEventListener('scroll', handleScroll, { passive: true });
    handleScroll();
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <div className="bg-dark text-light min-vh-100">
      <Navbar showNavbar={showNavbar} />
      <Hero />
      <Pricing />
      <Projects />
      <Skillset />
      <About />
      <Contact />
      <Footer />
      <ScrollToTop showScrollTop={showScrollTop} />
    </div>
  );
}

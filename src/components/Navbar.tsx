import { useState, useEffect } from 'react';
import { Menu, X } from 'lucide-react';
import { NAVIGATION } from '../data';
import { motion, AnimatePresence } from 'motion/react';

export default function Navbar() {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <header
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 border-b border-transparent ${
        isScrolled ? 'glass' : 'bg-transparent'
      }`}
    >
      <div className="max-w-7xl mx-auto px-6 h-20 flex items-center justify-between">
        {/* Logo */}
        <a href="#home" className="flex items-start font-sans text-white hover:opacity-80 transition-opacity select-none">
          <span className="text-xl md:text-2xl tracking-[0.25em] mt-1 md:mt-2">PΛRK</span>
          <span className="text-5xl md:text-6xl tracking-tighter ml-1 leading-[0.75] font-thin" style={{ letterSpacing: '-0.05em' }}>27</span>
        </a>

        {/* Desktop Nav */}
        <nav className="hidden lg:flex items-center space-x-8">
          {NAVIGATION.map((item) => (
            <a
              key={item.name}
              href={item.href}
              className="text-xs uppercase tracking-widest font-semibold transition-colors hover:text-mustard text-white/90"
            >
              {item.name}
            </a>
          ))}
          <a
            href="#reserve"
            className="bg-mustard text-forest px-6 py-2.5 rounded-full font-bold uppercase tracking-widest text-xs transition-all hover:scale-105 mustard-glow"
          >
            Reserve a Table
          </a>
        </nav>

        {/* Mobile Menu Toggle */}
        <button
          className="lg:hidden p-2 text-white"
          onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
        >
          {isMobileMenuOpen ? <X size={24} /> : <Menu size={24} />}
        </button>
      </div>

      {/* Mobile Nav */}
      <AnimatePresence>
        {isMobileMenuOpen && (
          <motion.div
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -20 }}
            className="absolute top-full left-0 right-0 glass shadow-lg lg:hidden border-t-0"
          >
            <div className="flex flex-col py-4 px-6 space-y-4">
              {NAVIGATION.map((item) => (
                <a
                  key={item.name}
                  href={item.href}
                  className="text-white text-lg font-medium hover:text-mustard transition-colors uppercase tracking-widest text-sm"
                  onClick={() => setIsMobileMenuOpen(false)}
                >
                  {item.name}
                </a>
              ))}
              <a
                href="#reserve"
                className="bg-mustard text-forest text-center px-6 py-3 font-bold uppercase tracking-widest rounded-full w-full mt-4 mustard-glow"
                onClick={() => setIsMobileMenuOpen(false)}
              >
                Reserve a Table
              </a>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </header>
  );
}

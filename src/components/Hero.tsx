import { motion } from 'motion/react';

export default function Hero() {
  return (
    <section id="home" className="relative h-screen w-full flex items-center justify-center overflow-hidden">
      {/* Background Image - Placeholder for 'hero-1.jpg' */}
      <div 
        className="absolute inset-0 bg-cover bg-center bg-no-repeat"
        style={{ backgroundImage: 'url("https://images.unsplash.com/photo-1544148103-0773bf10d330?q=80&w=2070&auto=format&fit=crop")' }}
      >
        <div className="absolute inset-0 gradient-overlay"></div>
      </div>

      <div className="relative z-10 max-w-4xl mx-auto px-6 text-center text-white mt-16">
        <motion.h1 
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.2 }}
          className="text-5xl md:text-7xl font-serif font-bold leading-tight mb-6 italic"
        >
          An Unforgettable <span className="text-mustard">Feast</span> for the Senses
        </motion.h1>
        
        <motion.p 
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.4 }}
          className="text-lg md:text-xl font-light max-w-2xl mx-auto mb-10 text-white/90 opacity-80 leading-relaxed"
        >
          Escape to Park 27, Gaborone’s premier outdoor lifestyle restaurant. Indulge in extraordinary flavors, vibrant atmosphere, and unparalleled service under the Botswana sky. Your table awaits.
        </motion.p>
        
        <motion.div 
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.6 }}
          className="flex flex-col sm:flex-row items-center justify-center gap-4"
        >
          <a 
            href="#reserve"
            className="bg-mustard hover:brightness-110 text-forest px-8 py-4 rounded-full font-bold transition-all w-full sm:w-auto text-center mustard-glow text-xs uppercase tracking-widest"
          >
            Reserve Your Table
          </a>
          <a 
            href="#experiences"
            className="border border-white hover:bg-white hover:text-forest text-white px-8 py-4 rounded-full font-bold transition-colors w-full sm:w-auto text-center text-xs uppercase tracking-widest"
          >
            Explore the Experience
          </a>
        </motion.div>
      </div>
    </section>
  );
}

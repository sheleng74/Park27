import React, { useState } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import { X, ChevronLeft, ChevronRight } from 'lucide-react';

const GALLERY_IMAGES = [
  // In House
  { id: 'gallery-inhouse-1', src: 'https://images.unsplash.com/photo-1514933651103-005eec06c04b?q=80&w=1974&auto=format&fit=crop', category: 'inhouse', alt: 'In House interior dining' },
  { id: 'gallery-inhouse-2', src: 'https://images.unsplash.com/photo-1550966871-3ed3cdb5ed0c?q=80&w=2070&auto=format&fit=crop', category: 'inhouse', alt: 'Wine and whiskey selection' },
  // Lounge
  { id: 'gallery-lounge-1', src: 'https://images.unsplash.com/photo-1505826759037-1a6973507c11?q=80&w=2070&auto=format&fit=crop', category: 'lounge', alt: 'Lounge seating area' },
  { id: 'gallery-lounge-2', src: 'https://images.unsplash.com/photo-1473093295043-cdd812d0e601?q=80&w=2070&auto=format&fit=crop', category: 'lounge', alt: 'Lounge greenery details' },
  { id: 'gallery-lounge-3', src: 'https://images.unsplash.com/photo-1498654896293-37aacf113fd9?q=80&w=2070&auto=format&fit=crop', category: 'lounge', alt: 'Lounge ambience at dusk' },
  // Bencher
  { id: 'gallery-bencher-1', src: 'https://images.unsplash.com/photo-1520625390740-108bb68c07e0?q=80&w=2070&auto=format&fit=crop', category: 'bencher', alt: 'Park Bencher seating' },
];

export default function Gallery() {
  const [lightboxIndex, setLightboxIndex] = useState<number | null>(null);

  const openLightbox = (index: number) => setLightboxIndex(index);
  const closeLightbox = () => setLightboxIndex(null);
  
  const showNext = (e: React.MouseEvent) => {
    e.stopPropagation();
    if (lightboxIndex !== null) {
      setLightboxIndex((lightboxIndex + 1) % GALLERY_IMAGES.length);
    }
  };
  
  const showPrev = (e: React.MouseEvent) => {
    e.stopPropagation();
    if (lightboxIndex !== null) {
      setLightboxIndex((lightboxIndex - 1 + GALLERY_IMAGES.length) % GALLERY_IMAGES.length);
    }
  };

  return (
    <section id="gallery" className="py-24 relative border-b border-white/5">
      <div className="max-w-7xl mx-auto px-6">
        <div className="text-center mb-12">
          <motion.h2 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-3xl md:text-4xl font-serif text-cream mb-4"
          >
            A Glimpse Into Park 27.
          </motion.h2>
        </div>

        <div className="grid grid-cols-2 md:grid-cols-3 gap-4 md:gap-6">
          {GALLERY_IMAGES.map((img, index) => (
            <motion.div
              key={img.id}
              initial={{ opacity: 0, scale: 0.95 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.1, duration: 0.5 }}
              className={`relative overflow-hidden cursor-pointer aspect-square rounded-2xl glass ${index === 0 || index === 3 ? 'md:col-span-2 md:aspect-[2/1]' : ''}`}
              onClick={() => openLightbox(index)}
            >
              <div className="absolute inset-0 bg-forest/40 opacity-0 hover:opacity-100 transition-opacity z-10 flex items-center justify-center">
                <span className="text-white bg-forest/80 px-6 py-2 text-xs font-bold uppercase tracking-widest rounded-full backdrop-blur-md">View</span>
              </div>
              <img 
                src={img.src} 
                alt={img.alt} 
                className="w-full h-full object-cover transform hover:scale-110 transition-transform duration-700"
              />
            </motion.div>
          ))}
        </div>
      </div>

      {/* Lightbox */}
      <AnimatePresence>
        {lightboxIndex !== null && (
          <motion.div 
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="fixed inset-0 z-[100] bg-black/95 flex items-center justify-center backdrop-blur-sm"
            onClick={closeLightbox}
          >
            <button 
              className="absolute top-6 right-6 text-white/70 hover:text-white z-50 p-2"
              onClick={closeLightbox}
            >
              <X size={32} />
            </button>
            
            <button 
              className="absolute left-4 md:left-12 top-1/2 -translate-y-1/2 text-white/50 hover:text-white p-4"
              onClick={showPrev}
            >
              <ChevronLeft size={40} />
            </button>

            <motion.img 
              key={lightboxIndex}
              initial={{ opacity: 0, scale: 0.9 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ type: 'spring', damping: 20, stiffness: 100 }}
              src={GALLERY_IMAGES[lightboxIndex].src}
              alt={GALLERY_IMAGES[lightboxIndex].alt}
              className="max-h-[85vh] max-w-[90vw] object-contain select-none"
              onClick={(e) => e.stopPropagation()}
            />

            <button 
              className="absolute right-4 md:right-12 top-1/2 -translate-y-1/2 text-white/50 hover:text-white p-4"
              onClick={showNext}
            >
              <ChevronRight size={40} />
            </button>
            
            <div className="absolute bottom-8 left-1/2 -translate-x-1/2 text-white/70 font-sans tracking-widest text-sm">
              {lightboxIndex + 1} / {GALLERY_IMAGES.length}
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </section>
  );
}

import { motion } from 'motion/react';
import { Star } from 'lucide-react';
import { TESTIMONIALS } from '../data';

export default function SocialProof() {
  return (
    <section className="py-24 relative border-b border-white/5">
      <div className="max-w-7xl mx-auto px-6">
        <div className="text-center mb-16">
          <motion.h2 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-3xl md:text-4xl font-serif text-cream mb-4 italic"
          >
            Words from Our Guests
          </motion.h2>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {TESTIMONIALS.map((testimonial, index) => (
            <motion.div 
              key={index}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-50px" }}
              transition={{ delay: index * 0.2, duration: 0.6 }}
              className="glass p-8 rounded-2xl flex flex-col h-full hover:bg-white/10 transition-colors"
            >
              <div className="flex gap-1 mb-6 text-mustard">
                {[...Array(5)].map((_, i) => (
                  <Star key={i} size={16} fill={i < testimonial.rating ? "currentColor" : "none"} className={i >= testimonial.rating ? "text-white/20" : ""} />
                ))}
              </div>
              <p className="text-cream/80 font-serif italic mb-8 flex-grow leading-relaxed">
                "{testimonial.quote}"
              </p>
              <div className="text-xs font-bold tracking-widest uppercase text-mustard">
                — {testimonial.name}
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}

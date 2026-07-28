import { motion } from 'motion/react';
import { menuData } from '../data/menuData';

export default function MenuHighlights() {
  return (
    <section id="menu" className="py-24 relative border-b border-white/5 bg-forest">
      <div className="max-w-7xl mx-auto px-6">
        <div className="text-center mb-16">
          <motion.h2 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-4xl md:text-5xl font-serif text-mustard mb-4 italic"
          >
            The Full Menu
          </motion.h2>
          <motion.p 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.1 }}
            className="text-cream/70 text-lg font-light"
          >
            A symphony of authentic flavors crafted from the freshest ingredients.
          </motion.p>
        </div>

        <div className="columns-1 md:columns-2 lg:columns-3 gap-8 space-y-8">
          {menuData.categories.map((category, index) => (
            <motion.div 
              key={index}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-50px" }}
              transition={{ delay: index * 0.05, duration: 0.5 }}
              className="glass rounded-3xl p-8 break-inside-avoid shadow-lg shadow-black/20 hover:bg-white/5 transition-colors border border-white/10"
            >
              <h3 className="text-2xl font-serif tracking-wide text-mustard mb-6 border-b border-white/10 pb-4">{category.name}</h3>
              <ul className="space-y-6">
                {category.items.map((item, itemIdx) => (
                  <li key={itemIdx} className="flex flex-col">
                    <div className="flex justify-between items-baseline gap-4">
                      <span className="text-cream font-medium tracking-wide text-lg">{item.name}</span>
                    </div>
                    {item.description && (
                      <p className="text-cream/60 font-light text-sm mt-1 leading-relaxed">
                        {item.description}
                      </p>
                    )}
                  </li>
                ))}
              </ul>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}

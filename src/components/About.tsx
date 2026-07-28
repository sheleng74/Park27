import { motion } from 'motion/react';

export default function About() {
  return (
    <section className="py-24 relative border-b border-white/5">
      <div className="max-w-7xl mx-auto px-6">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
          <motion.div 
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, margin: "-100px" }}
            transition={{ duration: 0.8 }}
            className="order-2 lg:order-1 glass p-8 md:p-12 rounded-3xl relative overflow-hidden"
          >
            <div className="absolute inset-0 bg-white/5"></div>
            <div className="relative z-10">
              <h2 className="text-4xl md:text-5xl font-serif text-mustard mb-8 leading-tight italic">
                A Noteworthy Lifestyle Experience
              </h2>
              <div className="space-y-6 text-cream/80 text-lg font-light leading-relaxed">
                <p>
                  Park 27 conceptualizes a new era of dining — one that transcends food and beverage to curate a larger, community-oriented experience. 
                </p>
                <p>
                  We are a fusion of flavors, colors, people, and aesthetics. Every detail, from the ambient golden-hour lighting to our textured natural furnishings, has been crafted to help you unwind and discover something truly special.
                </p>
              </div>
              <div className="mt-10">
                <a href="#experiences" className="text-cream hover:text-mustard transition-colors font-semibold uppercase tracking-widest text-xs border-b border-cream hover:border-mustard pb-1">
                  Discover Our Spaces
                </a>
              </div>
            </div>
          </motion.div>

          <motion.div 
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, margin: "-100px" }}
            transition={{ duration: 0.8 }}
            className="order-1 lg:order-2 relative"
          >
            {/* Image Placeholder for brand statement photo */}
            <div className="aspect-[4/5] overflow-hidden rounded-3xl border border-white/10 shadow-2xl shadow-black/50">
              <img 
                src="https://images.unsplash.com/photo-1517248135467-4c7edcad34c4?q=80&w=2070&auto=format&fit=crop" 
                alt="People dining in a warm, ambient restaurant setting"
                className="w-full h-full object-cover object-center"
              />
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}

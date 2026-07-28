import { motion } from 'motion/react';

const EXPERIENCES = [
  {
    id: 'inhouse',
    title: 'In House',
    description: 'Dine beneath a beautifully structured thatched roof, where modern design meets warmth — complemented by our curated whiskey and wine selection.',
    image: 'https://images.unsplash.com/photo-1559339352-11d035aa65de?q=80&w=1974&auto=format&fit=crop', // Placeholder for experience-inhouse-1.jpg
    alt: 'Thatched-roof interior dining area'
  },
  {
    id: 'lounge',
    title: 'The Lounge',
    description: 'Step into an outdoor sanctuary framed by exotic greenery — the depth of a forest, with a touch of luxury.',
    image: 'https://images.unsplash.com/photo-1499933374294-458eb8a2041b?q=80&w=2070&auto=format&fit=crop', // Placeholder for experience-lounge-1.jpg
    alt: 'Outdoor lounge seating in mustard velvet among greenery'
  },
  {
    id: 'bencher',
    title: 'Park Bencher',
    description: 'For the comfort lovers — our park picnic benches invite you to relax under the open Botswana sky.',
    image: 'https://images.unsplash.com/photo-1522165078649-823cf4dbaf46?q=80&w=2070&auto=format&fit=crop', // Placeholder for experience-bencher-1.jpg
    alt: 'Casual bench and picnic-style seating'
  }
];

export default function Experiences() {
  return (
    <section id="experiences" className="py-24 relative">
      <div className="max-w-7xl mx-auto px-6">
        <div className="text-center mb-16">
          <motion.h2 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-4xl md:text-5xl font-serif text-cream mb-4"
          >
            The Three Experiences
          </motion.h2>
          <motion.p 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.1 }}
            className="text-cream/60 text-lg"
          >
            Choose your perfect setting.
          </motion.p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {EXPERIENCES.map((exp, index) => (
            <motion.div 
              key={exp.id}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-50px" }}
              transition={{ duration: 0.6, delay: index * 0.2 }}
              className="group cursor-pointer flex flex-col h-full glass rounded-2xl p-6 hover:bg-white/10 transition-all"
            >
              <div className="overflow-hidden aspect-[3/4] mb-6 relative rounded-xl">
                <div className="absolute inset-0 bg-black/10 group-hover:bg-transparent transition-colors z-10" />
                <img 
                  src={exp.image} 
                  alt={exp.alt} 
                  className="w-full h-full object-cover transform group-hover:scale-105 transition-transform duration-700 ease-out"
                />
              </div>
              <h3 className="text-2xl font-serif text-mustard mb-3">{exp.title}</h3>
              <p className="text-cream/70 font-light mb-6 flex-grow leading-relaxed text-sm">
                {exp.description}
              </p>
              <a href={`#gallery-${exp.id}`} className="text-cream hover:text-mustard font-semibold uppercase tracking-widest text-xs transition-colors flex items-center gap-2">
                See the space <span className="text-lg">→</span>
              </a>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}

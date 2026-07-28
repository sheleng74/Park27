import { motion } from 'motion/react';
import { MapPin, Clock, Instagram, Facebook } from 'lucide-react';

export default function VisitUs() {
  return (
    <section id="visit-us" className="py-24 relative border-b border-white/5 bg-forest-light">
      <div className="max-w-7xl mx-auto px-6">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16">
          
          <motion.div 
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
            className="glass p-8 md:p-12 rounded-3xl"
          >
            <div className="flex items-start font-sans text-cream mb-12 select-none">
              <span className="text-3xl md:text-4xl tracking-[0.25em] mt-2 md:mt-3">PΛRK</span>
              <span className="text-7xl md:text-[7rem] tracking-tighter ml-2 leading-[0.75] font-thin" style={{ letterSpacing: '-0.05em' }}>27</span>
            </div>

            <div className="space-y-10">
              {/* Address */}
              <div className="flex items-start gap-4">
                <MapPin className="text-mustard shrink-0 mt-1" />
                <div>
                  <h3 className="text-[10px] font-bold uppercase tracking-widest text-cream/50 mb-2">Location</h3>
                  <p className="text-cream/90 text-lg font-light leading-relaxed">
                    [INSERT ADDRESS LINE 1]<br />
                    [INSERT ADDRESS LINE 2], Gaborone<br />
                    Botswana
                  </p>
                </div>
              </div>

              {/* Hours */}
              <div className="flex items-start gap-4">
                <Clock className="text-mustard shrink-0 mt-1" />
                <div className="w-full">
                  <h3 className="text-[10px] font-bold uppercase tracking-widest text-cream/50 mb-4">Hours</h3>
                  <ul className="space-y-3 text-cream/90 font-light">
                    <li className="flex justify-between border-b border-white/10 pb-2">
                      <span>Mon - Thu</span>
                      <span>11:00 AM - 10:00 PM</span>
                    </li>
                    <li className="flex justify-between border-b border-white/10 pb-2">
                      <span>Fri - Sat</span>
                      <span>11:00 AM - 12:00 AM</span>
                    </li>
                    <li className="flex justify-between">
                      <span>Sunday</span>
                      <span>11:00 AM - 9:00 PM</span>
                    </li>
                  </ul>
                </div>
              </div>

              {/* Socials */}
              <div className="pt-4">
                <h3 className="text-[10px] font-bold uppercase tracking-widest text-cream/50 mb-4">Follow Us</h3>
                <div className="flex gap-4">
                  <a href="#[INSERT_IG]" className="text-cream hover:text-mustard transition-colors p-3 rounded-full border border-white/20 hover:border-mustard">
                    <Instagram size={20} />
                  </a>
                  <a href="#[INSERT_FB]" className="text-cream hover:text-mustard transition-colors p-3 rounded-full border border-white/20 hover:border-mustard">
                    <Facebook size={20} />
                  </a>
                </div>
              </div>
            </div>
          </motion.div>

          {/* Map Placeholder */}
          <motion.div 
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
            className="bg-forest-dark border border-white/10 aspect-square lg:aspect-auto h-full min-h-[400px] flex items-center justify-center text-cream/40 rounded-3xl overflow-hidden"
          >
            <iframe 
              src="https://maps.google.com/maps?q=-24.63193045569909,25.926153751934926&hl=en&z=15&output=embed" 
              width="100%" 
              height="100%" 
              style={{ border: 0 }} 
              allowFullScreen={true} 
              loading="lazy" 
              referrerPolicy="no-referrer-when-downgrade"
              className="w-full h-full grayscale opacity-80 hover:grayscale-0 hover:opacity-100 transition-all duration-500"
            ></iframe>
          </motion.div>

        </div>
      </div>
    </section>
  );
}

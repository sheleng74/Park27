import { motion } from 'motion/react';
import { MessageCircle, Phone } from 'lucide-react';

export default function Reserve() {
  const handleWhatsApp = () => {
    const message = encodeURIComponent("Hi Park 27, I'd like to reserve a table for [date] at [time] for [X] people.");
    window.open(`https://wa.me/[INSERT_PHONE_NUMBER]?text=${message}`, '_blank');
  };

  return (
    <section id="reserve" className="py-24 relative border-b border-white/5 bg-forest-dark">
      <div className="max-w-6xl mx-auto px-6">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16">
          
          {/* Info & WhatsApp */}
          <motion.div 
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
            className="flex flex-col justify-center"
          >
            <h2 className="text-4xl md:text-5xl font-serif text-cream mb-6 leading-tight italic">
              Reserve Your Experience
            </h2>
            <p className="text-cream/70 text-lg font-light mb-10 max-w-md leading-relaxed">
              Join us under the Botswana sky. Secure your table using our online form or contact us directly via WhatsApp for a quicker response.
            </p>
            
            <div className="space-y-4">
              <button 
                onClick={handleWhatsApp}
                className="w-full sm:w-auto flex items-center justify-center gap-3 bg-mustard hover:brightness-110 text-forest px-8 py-4 rounded-full font-bold uppercase tracking-widest text-xs transition-all mustard-glow"
              >
                <MessageCircle size={20} />
                Book via WhatsApp
              </button>
              
              <a 
                href="tel:[INSERT_PHONE_NUMBER]"
                className="w-full sm:w-auto flex items-center justify-center gap-3 border border-white/20 hover:border-white hover:bg-white hover:text-forest text-cream px-8 py-4 rounded-full font-bold uppercase tracking-widest text-xs transition-all"
              >
                <Phone size={20} />
                Call Us Directly
              </a>
            </div>
          </motion.div>

          {/* Form */}
          <motion.div 
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
            className="glass p-8 md:p-10 rounded-3xl"
          >
            <form className="space-y-6" onSubmit={(e) => e.preventDefault()}>
              <div>
                <label htmlFor="name" className="block text-[10px] font-bold text-cream/70 mb-2 uppercase tracking-[0.2em]">Name</label>
                <input 
                  type="text" 
                  id="name" 
                  className="w-full border-b border-white/20 bg-transparent py-3 focus:outline-none focus:border-mustard transition-colors text-cream"
                  placeholder="John Doe"
                  required
                />
              </div>
              <div>
                <label htmlFor="phone" className="block text-[10px] font-bold text-cream/70 mb-2 uppercase tracking-[0.2em]">Phone</label>
                <input 
                  type="tel" 
                  id="phone" 
                  className="w-full border-b border-white/20 bg-transparent py-3 focus:outline-none focus:border-mustard transition-colors text-cream"
                  placeholder="+267 00 000 000"
                  required
                />
              </div>
              <div className="grid grid-cols-2 gap-6">
                <div>
                  <label htmlFor="date" className="block text-[10px] font-bold text-cream/70 mb-2 uppercase tracking-[0.2em]">Date</label>
                  <input 
                    type="date" 
                    id="date" 
                    className="w-full border-b border-white/20 bg-transparent py-3 focus:outline-none focus:border-mustard transition-colors text-cream"
                    required
                  />
                </div>
                <div>
                  <label htmlFor="time" className="block text-[10px] font-bold text-cream/70 mb-2 uppercase tracking-[0.2em]">Time</label>
                  <input 
                    type="time" 
                    id="time" 
                    className="w-full border-b border-white/20 bg-transparent py-3 focus:outline-none focus:border-mustard transition-colors text-cream"
                    required
                  />
                </div>
              </div>
              <div>
                <label htmlFor="party" className="block text-[10px] font-bold text-cream/70 mb-2 uppercase tracking-[0.2em]">Party Size</label>
                <select 
                  id="party" 
                  className="w-full border-b border-white/20 bg-transparent py-3 focus:outline-none focus:border-mustard transition-colors text-cream appearance-none"
                >
                  {[1,2,3,4,5,6,7,8,9,10, '10+'].map(num => (
                    <option key={num} value={num} className="bg-forest text-cream">{num} {num === 1 ? 'Person' : 'People'}</option>
                  ))}
                </select>
              </div>
              <button 
                type="submit"
                className="w-full bg-mustard hover:brightness-110 text-forest px-8 py-4 rounded-full font-bold uppercase tracking-widest text-xs transition-all mt-6 mustard-glow"
              >
                Request Reservation
              </button>
            </form>
          </motion.div>
          
        </div>
      </div>
    </section>
  );
}

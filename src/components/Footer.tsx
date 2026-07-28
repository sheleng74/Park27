import { Instagram, Facebook } from 'lucide-react';
import { NAVIGATION } from '../data';

export default function Footer() {
  return (
    <footer className="bg-forest-dark text-cream py-16 border-t border-white/5 relative">
      <div className="absolute inset-0 bg-gradient-to-t from-forest to-transparent pointer-events-none"></div>
      <div className="max-w-7xl mx-auto px-6 relative z-10">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-12 mb-16">
          <div className="md:col-span-2">
            <div className="flex items-start font-sans text-cream mb-6 select-none">
              <span className="text-2xl md:text-3xl tracking-[0.25em] mt-2">PΛRK</span>
              <span className="text-7xl tracking-tighter ml-2 leading-[0.75] font-thin" style={{ letterSpacing: '-0.05em' }}>27</span>
            </div>
            <p className="text-cream/60 max-w-sm font-light text-sm">
              Where flavor, color, and community meet. An outdoor lifestyle restaurant and lounge in Botswana.
            </p>
          </div>
          
          <div>
            <h3 className="text-[10px] font-bold tracking-widest uppercase text-mustard mb-6">Explore</h3>
            <ul className="space-y-3">
              {NAVIGATION.map(item => (
                <li key={item.name}>
                  <a href={item.href} className="text-cream/70 hover:text-white transition-colors font-light text-sm uppercase tracking-widest">
                    {item.name}
                  </a>
                </li>
              ))}
            </ul>
          </div>
          
          <div>
            <h3 className="text-[10px] font-bold tracking-widest uppercase text-mustard mb-6">Connect</h3>
            <div className="flex gap-4 mb-6">
              <a href="#[INSERT_IG]" className="text-cream/70 hover:text-mustard transition-colors">
                <Instagram size={20} />
              </a>
              <a href="#[INSERT_FB]" className="text-cream/70 hover:text-mustard transition-colors">
                <Facebook size={20} />
              </a>
            </div>
            <a href="mailto:info@park27.com" className="block text-cream/70 hover:text-white transition-colors font-light text-sm">
              [INSERT EMAIL]
            </a>
            <a href="tel:[INSERT_PHONE]" className="block text-cream/70 hover:text-white transition-colors font-light mt-2 text-sm">
              [INSERT PHONE]
            </a>
          </div>
        </div>
        
        <div className="border-t border-white/10 pt-8 flex flex-col md:flex-row items-center justify-between gap-4 text-xs text-cream/40 font-light uppercase tracking-widest">
          <p>&copy; {new Date().getFullYear()} Park 27. All rights reserved.</p>
          <div className="flex gap-6">
            <a href="#" className="hover:text-cream transition-colors">Privacy Policy</a>
            <a href="#" className="hover:text-cream transition-colors">Terms of Service</a>
          </div>
        </div>
      </div>
    </footer>
  );
}

import { MessageCircle, Phone } from 'lucide-react';

export default function MobileBottomBar() {
  const handleWhatsApp = () => {
    const message = encodeURIComponent("Hi Park 27, I'd like to reserve a table for [date] at [time] for [X] people.");
    window.open(`https://wa.me/[INSERT_PHONE_NUMBER]?text=${message}`, '_blank');
  };

  return (
    <div className="fixed bottom-0 left-0 right-0 z-50 glass border-t border-white/10 lg:hidden flex">
      <a 
        href="tel:[INSERT_PHONE_NUMBER]"
        className="flex-1 flex flex-col items-center justify-center py-3 text-cream border-r border-white/10 hover:bg-white/10 active:bg-white/20 transition-colors"
      >
        <Phone size={20} className="mb-1" />
        <span className="text-[10px] font-bold uppercase tracking-widest">Call</span>
      </a>
      <button 
        onClick={handleWhatsApp}
        className="flex-1 flex flex-col items-center justify-center py-3 bg-mustard text-forest hover:brightness-110 transition-all mustard-glow"
      >
        <MessageCircle size={20} className="mb-1" />
        <span className="text-[10px] font-bold uppercase tracking-widest">WhatsApp</span>
      </button>
    </div>
  );
}

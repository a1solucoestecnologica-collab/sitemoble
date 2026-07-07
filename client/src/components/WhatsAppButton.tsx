import { MessageCircle } from 'lucide-react';
import { whatsappLink } from '@/config';

export default function WhatsAppButton() {
  return (
    <a
      href={whatsappLink()}
      target="_blank"
      rel="noopener noreferrer"
      aria-label="Falar no WhatsApp"
      className="fixed bottom-6 right-6 z-50 flex items-center gap-2 rounded-full bg-[#25D366] text-white shadow-lg hover:shadow-xl hover:scale-105 active:scale-95 transition-all px-4 py-4 md:px-5"
    >
      <MessageCircle size={24} className="shrink-0" />
      <span className="hidden md:inline font-semibold pr-1">Fale conosco</span>
    </a>
  );
}

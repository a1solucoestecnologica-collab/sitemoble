import { Instagram, Linkedin, Share2, MessageCircle, Mail, MapPin, Phone } from 'lucide-react';
import {
  SOCIAL,
  whatsappLink,
  mailtoLink,
  telLink,
  CONTACT_EMAIL,
  CONTACT_PHONE,
  BUSINESS_NAME,
  CITY,
  ADDRESS,
  GOOGLE_MAPS_URL,
} from '@/config';

export default function Footer() {
  return (
    <footer className="bg-foreground text-background py-12 md:py-16">
      <div className="container">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8 mb-8">
          {/* Brand */}
          <div>
            <div className="flex items-center gap-2 mb-4">
              <div className="w-6 h-6 bg-background rounded-sm flex items-center justify-center">
                <span className="text-foreground text-xs font-bold">M</span>
              </div>
              <span className="font-bold">{BUSINESS_NAME}</span>
            </div>
            <p className="text-sm opacity-70">
              Marcenaria personalizada — {CITY}
            </p>
          </div>

          {/* Links */}
          <div>
            <h4 className="font-semibold mb-4">Navegação</h4>
            <ul className="space-y-2 text-sm">
              <li>
                <a href="#ambientes" className="opacity-70 hover:opacity-100 transition-opacity">
                  Ambientes
                </a>
              </li>
              <li>
                <a href="#processo" className="opacity-70 hover:opacity-100 transition-opacity">
                  Processo
                </a>
              </li>
              <li>
                <a href="#portfolio" className="opacity-70 hover:opacity-100 transition-opacity">
                  Portfólio
                </a>
              </li>
              <li>
                <a href="#contato" className="opacity-70 hover:opacity-100 transition-opacity">
                  Contato
                </a>
              </li>
            </ul>
          </div>

          {/* Contact */}
          <div>
            <h4 className="font-semibold mb-4">Contato</h4>
            <ul className="space-y-3 text-sm">
              <li>
                <a
                  href={whatsappLink()}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="opacity-70 hover:opacity-100 transition-opacity inline-flex items-start gap-2"
                >
                  <MessageCircle size={16} className="shrink-0 mt-0.5" />
                  WhatsApp: {CONTACT_PHONE}
                </a>
              </li>
              <li>
                <a
                  href={telLink()}
                  className="opacity-70 hover:opacity-100 transition-opacity inline-flex items-start gap-2"
                >
                  <Phone size={16} className="shrink-0 mt-0.5" />
                  Ligar: {CONTACT_PHONE}
                </a>
              </li>
              <li>
                <a
                  href={mailtoLink()}
                  className="opacity-70 hover:opacity-100 transition-opacity inline-flex items-start gap-2"
                >
                  <Mail size={16} className="shrink-0 mt-0.5" />
                  {CONTACT_EMAIL}
                </a>
              </li>
              <li>
                <a
                  href={GOOGLE_MAPS_URL}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="opacity-70 hover:opacity-100 transition-opacity inline-flex items-start gap-2"
                >
                  <MapPin size={16} className="shrink-0 mt-0.5" />
                  {ADDRESS}
                </a>
              </li>
            </ul>
          </div>

          {/* Social */}
          <div>
            <h4 className="font-semibold mb-4">Redes Sociais</h4>
            <div className="flex gap-4">
              {SOCIAL.instagram && (
                <a
                  href={SOCIAL.instagram}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="opacity-70 hover:opacity-100 transition-opacity"
                  aria-label="Instagram"
                >
                  <Instagram size={20} />
                </a>
              )}
              {SOCIAL.linkedin && (
                <a
                  href={SOCIAL.linkedin}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="opacity-70 hover:opacity-100 transition-opacity"
                  aria-label="LinkedIn"
                >
                  <Linkedin size={20} />
                </a>
              )}
              {SOCIAL.pinterest && (
                <a
                  href={SOCIAL.pinterest}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="opacity-70 hover:opacity-100 transition-opacity"
                  aria-label="Pinterest"
                >
                  <Share2 size={20} />
                </a>
              )}
              {!SOCIAL.instagram && !SOCIAL.linkedin && !SOCIAL.pinterest && (
                <p className="text-sm opacity-70">Em breve</p>
              )}
            </div>
          </div>
        </div>

        <div className="border-t border-background/20 pt-8">
          <p className="text-sm opacity-70 text-center">
            © 2026 {BUSINESS_NAME}. Todos os direitos reservados.
          </p>
        </div>
      </div>
    </footer>
  );
}

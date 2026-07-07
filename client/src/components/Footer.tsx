import {
  SOCIAL,
  whatsappLink,
  mailtoLink,
  BUSINESS_NAME,
  CITY,
} from '@/config';

export default function Footer() {
  return (
    <footer className="border-t border-zinc-900/5 bg-zinc-50 py-12">
      <div className="mx-auto flex max-w-7xl flex-col items-center justify-between gap-8 px-6 md:flex-row">
        <div className="flex flex-col gap-2 text-center md:text-left">
          <span className="text-sm font-medium tracking-tight">{BUSINESS_NAME}</span>
          <span className="font-mono text-[10px] text-zinc-400">
            Marcenaria de alto padrão — {CITY}
          </span>
        </div>

        <div className="flex gap-8 font-mono text-[10px] uppercase tracking-widest text-zinc-500">
          {SOCIAL.instagram && (
            <a
              href={SOCIAL.instagram}
              target="_blank"
              rel="noopener noreferrer"
              className="hover:text-zinc-900"
            >
              Instagram
            </a>
          )}
          <a
            href={whatsappLink()}
            target="_blank"
            rel="noopener noreferrer"
            className="hover:text-zinc-900"
          >
            WhatsApp
          </a>
          <a href={mailtoLink()} className="hover:text-zinc-900">
            E-mail
          </a>
        </div>

        <span className="font-mono text-[10px] text-zinc-400">
          © {new Date().getFullYear()} {BUSINESS_NAME}
        </span>
      </div>
    </footer>
  );
}

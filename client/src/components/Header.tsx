import { useState } from 'react';
import { Menu, X } from 'lucide-react';
import { BUSINESS_SHORT_NAME } from '@/config';

const navItems = [
  { label: 'Ambientes', href: '#ambientes' },
  { label: 'Processo', href: '#processo' },
  { label: 'Portfólio', href: '#portfolio' },
];

export default function Header() {
  const [open, setOpen] = useState(false);

  return (
    <nav className="fixed top-0 z-50 w-full border-b border-zinc-900/5 bg-background/80 backdrop-blur-md">
      <div className="mx-auto flex h-16 max-w-7xl items-center justify-between px-6">
        <div className="flex items-center gap-8">
          <a
            href="#top"
            className="text-lg font-medium tracking-tighter"
          >
            {BUSINESS_SHORT_NAME}
          </a>
          <div className="hidden gap-6 text-sm font-medium text-zinc-500 md:flex">
            {navItems.map((item) => (
              <a
                key={item.label}
                href={item.href}
                className="transition-colors hover:text-foreground"
              >
                {item.label}
              </a>
            ))}
          </div>
        </div>

        <div className="flex items-center gap-3">
          <a
            href="#contato"
            className="rounded-sm bg-zinc-900 px-4 py-2 text-sm font-medium text-zinc-50 shadow-sm ring-1 ring-zinc-900 transition-colors hover:bg-zinc-800"
          >
            Solicitar Orçamento
          </a>
          <button
            className="p-1 text-zinc-700 md:hidden"
            onClick={() => setOpen(!open)}
            aria-label="Abrir menu"
          >
            {open ? <X size={22} /> : <Menu size={22} />}
          </button>
        </div>
      </div>

      {open && (
        <div className="border-t border-zinc-900/5 bg-background md:hidden">
          <div className="mx-auto flex max-w-7xl flex-col gap-4 px-6 py-4 text-sm font-medium text-zinc-600">
            {navItems.map((item) => (
              <a
                key={item.label}
                href={item.href}
                className="transition-colors hover:text-foreground"
                onClick={() => setOpen(false)}
              >
                {item.label}
              </a>
            ))}
          </div>
        </div>
      )}
    </nav>
  );
}

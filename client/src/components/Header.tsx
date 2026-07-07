import { useState, useEffect } from 'react';
import { Menu, X } from 'lucide-react';
import { BUSINESS_SHORT_NAME } from '@/config';

export default function Header() {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 10);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const navItems = [
    { label: 'Ambientes', href: '#ambientes' },
    { label: 'Processo', href: '#processo' },
    { label: 'Portfólio', href: '#portfolio' },
    { label: 'Solicitar Orçamento', href: '#contato', highlight: true },
  ];

  return (
    <header
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        scrolled
          ? 'bg-background/98 backdrop-blur-md border-b border-border shadow-md'
          : 'bg-background/95 backdrop-blur-sm border-b border-border'
      }`}
    >
      <div className="container flex items-center justify-between h-20">
        {/* Logo */}
        <a
          href="#top"
          onClick={(e) => {
            e.preventDefault();
            window.scrollTo({ top: 0, behavior: 'smooth' });
          }}
          className="flex items-center gap-2 font-bold text-xl hover:opacity-70 transition-opacity"
        >
          <div className="w-8 h-8 bg-foreground rounded-sm flex items-center justify-center">
            <span className="text-background text-sm font-bold">M</span>
          </div>
          <span className="hidden sm:inline">{BUSINESS_SHORT_NAME}</span>
        </a>

        {/* Desktop Navigation */}
        <nav className="hidden md:flex items-center gap-8">
          {navItems.map((item) => (
            <a
              key={item.label}
              href={item.href}
              className={`text-sm font-medium transition-all ${
                item.highlight
                  ? 'bg-foreground text-background px-4 py-2 rounded-sm hover:bg-foreground/90 hover:shadow-md active:scale-95'
                  : 'text-foreground hover:opacity-70 relative after:absolute after:bottom-0 after:left-0 after:w-0 after:h-0.5 after:bg-foreground after:transition-all hover:after:w-full'
              }`}
            >
              {item.label}
            </a>
          ))}
        </nav>

        {/* Mobile Menu Button */}
        <button
          className="md:hidden p-2 hover:opacity-70 transition-opacity"
          onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
          aria-label="Toggle menu"
        >
          {mobileMenuOpen ? <X size={24} /> : <Menu size={24} />}
        </button>
      </div>

      {/* Mobile Navigation */}
      {mobileMenuOpen && (
        <nav className="md:hidden border-t border-border bg-background animate-in slide-in-from-top-2 duration-200">
          <div className="container py-4 flex flex-col gap-4">
            {navItems.map((item) => (
              <a
                key={item.label}
                href={item.href}
                className={`text-sm font-medium transition-all ${
                  item.highlight
                    ? 'bg-foreground text-background px-4 py-2 rounded-sm hover:bg-foreground/90 active:scale-95 block'
                    : 'text-foreground hover:opacity-70'
                }`}
                onClick={() => setMobileMenuOpen(false)}
              >
                {item.label}
              </a>
            ))}
          </div>
        </nav>
      )}
    </header>
  );
}

import Header from '@/components/Header';
import Footer from '@/components/Footer';
import Divider from '@/components/Divider';
import WhatsAppButton from '@/components/WhatsAppButton';
import { Button } from '@/components/ui/button';
import { MessageCircle, Mail, Phone } from 'lucide-react';
import { whatsappLink, mailtoLink, telLink, CITY, ADDRESS, CONTACT_PHONE, GOOGLE_MAPS_URL } from '@/config';

const ambientes = [
  { num: '01', label: 'Cozinhas' },
  { num: '02', label: 'Dormitórios' },
  { num: '03', label: 'Home Office' },
  { num: '04', label: 'Banheiros' },
  { num: '05', label: 'Closets' },
  { num: '06', label: 'Living' },
];

export default function Home() {
  return (
    <div className="min-h-screen flex flex-col">
      <Header />

      {/* Hero Section */}
      <section className="pt-32 pb-12 md:pb-20 px-4 scroll-mt-20">
        <div className="container">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
            {/* Left: Text */}
            <div>
              <p className="text-xs font-semibold uppercase tracking-widest text-muted-foreground mb-6">
                Engenharia de Interiores
              </p>
              <h1 className="mb-6">
                A forma segue a <em className="italic font-normal">precisão.</em>
              </h1>
              <p className="text-lg mb-8 max-w-md">
                Mobiliário planejado com rigor técnico e estética arquitetônica. Transformamos espaços em estruturas de alta performance onde o silêncio é o padrão.
              </p>

              {/* Info Grid */}
              <div className="grid grid-cols-2 gap-8 mb-8">
                <div>
                  <p className="text-xs uppercase tracking-widest text-muted-foreground mb-2">
                    Localização
                  </p>
                  <p className="font-semibold">{CITY}</p>
                </div>
                <div>
                  <p className="text-xs uppercase tracking-widest text-muted-foreground mb-2">
                    Especialidade
                  </p>
                  <p className="font-semibold">Marcenaria de Alto Padrão</p>
                </div>
              </div>
            </div>

            {/* Right: Image */}
            <div className="rounded-lg overflow-hidden aspect-square shadow-lg hover:shadow-2xl transition-shadow group">
              <img
                src="/images/hero-kitchen.png"
                alt="Cozinha planejada em carvalho com bancada preta e detalhes em latão"
                loading="eager"
                className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
              />
            </div>
          </div>

          {/* Technical Detail Badge */}
          <div className="mt-12 bg-background border border-border rounded-lg p-6 max-w-xs shadow-sm hover:shadow-md transition-shadow">
            <p className="text-xs uppercase tracking-widest text-muted-foreground mb-3">
              Detalhe Técnico
            </p>
            <p className="font-semibold">Sistema Soft-Close 45º</p>
          </div>
        </div>
      </section>

      <Divider />

      {/* Categories Section — letreiro rolando */}
      <section id="ambientes" className="bg-foreground text-background py-14 md:py-20 overflow-hidden">
        <div className="container mb-8 md:mb-10">
          <p className="text-xs uppercase tracking-[0.3em] text-background/60 text-center">
            Ambientes que projetamos
          </p>
        </div>

        <div className="marquee-viewport relative">
          {/* Bordas com fade para elegância */}
          <div className="pointer-events-none absolute inset-y-0 left-0 w-16 md:w-32 z-10 bg-gradient-to-r from-foreground to-transparent" />
          <div className="pointer-events-none absolute inset-y-0 right-0 w-16 md:w-32 z-10 bg-gradient-to-l from-foreground to-transparent" />

          <div className="marquee-track">
            {[...ambientes, ...ambientes].map((cat, i) => (
              <button
                key={`${cat.label}-${i}`}
                onClick={() => document.getElementById('portfolio')?.scrollIntoView({ behavior: 'smooth' })}
                className="group flex items-baseline gap-3 md:gap-5 whitespace-nowrap px-8 md:px-12 py-2"
                aria-label={`Ver projetos de ${cat.label}`}
              >
                <span className="font-elegant italic text-xl md:text-3xl text-[#d4af37]">
                  {cat.num}
                </span>
                <span className="font-elegant text-4xl md:text-6xl tracking-wide text-background transition-colors duration-300 group-hover:text-[#d4af37]">
                  {cat.label}
                </span>
                <span className="font-elegant text-3xl md:text-5xl text-background/25 pl-3 md:pl-6">
                  /
                </span>
              </button>
            ))}
          </div>
        </div>
      </section>

      {/* Portfolio Section */}
      <section id="portfolio" className="py-16 md:py-24 px-4 scroll-mt-20">
        <div className="container">
          <h2 className="mb-12">Residência Pinheiros: um estudo em carvalho e aço escovado.</h2>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-12">
            {/* Project Images */}
            <div className="rounded-lg overflow-hidden aspect-video shadow-lg hover:shadow-xl transition-shadow group cursor-pointer">
              <img
                src="/images/project-closet.png"
                alt="Closet planejado com iluminação integrada e portas de vidro"
                loading="lazy"
                className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-300"
              />
            </div>
            <div className="rounded-lg overflow-hidden aspect-video shadow-lg hover:shadow-xl transition-shadow group cursor-pointer">
              <img
                src="/images/detail-joinery.png"
                alt="Detalhe de encaixe de gaveta em madeira"
                loading="lazy"
                className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-300"
              />
            </div>
          </div>

          {/* Specifications */}
          <div className="bg-muted rounded-lg p-8 mb-8 border border-border/50">
            <h3 className="mb-6">Especificações</h3>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
              <div className="bg-background/50 rounded p-4 hover:bg-background transition-colors">
                <p className="text-xs uppercase tracking-widest text-muted-foreground mb-2">
                  Estrutura
                </p>
                <p className="font-semibold">MDF Hidrófugo 18mm</p>
              </div>
              <div className="bg-background/50 rounded p-4 hover:bg-background transition-colors">
                <p className="text-xs uppercase tracking-widest text-muted-foreground mb-2">
                  Acabamento
                </p>
                <p className="font-semibold">Laca Fosca Microtexturizada</p>
              </div>
              <div className="bg-background/50 rounded p-4 hover:bg-background transition-colors">
                <p className="text-xs uppercase tracking-widest text-muted-foreground mb-2">
                  Ferragens
                </p>
                <p className="font-semibold">Blum Legrabox</p>
              </div>
            </div>
          </div>

          <Button
            className="bg-foreground text-background hover:bg-foreground/90 px-8 py-3 font-semibold rounded-sm transition-all active:scale-95 shadow-md hover:shadow-lg"
            onClick={() => document.getElementById('contato')?.scrollIntoView({ behavior: 'smooth' })}
          >
            Ver projeto completo
          </Button>
        </div>
      </section>

      <Divider />

      {/* Process Section */}
      <section id="processo" className="bg-muted py-16 md:py-24 px-4 scroll-mt-20">
        <div className="container">
          <h2 className="mb-12">O Manifesto</h2>
          <h3 className="mb-12">Rigor técnico em cada milímetro.</h3>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-12">
            {[
              {
                num: '01',
                title: 'Mapeamento Digital',
                desc: 'Capturamos a volumetria exata do ambiente com medição a laser, eliminando margens de erro estruturais antes do primeiro corte.',
              },
              {
                num: '02',
                title: 'Engenharia de Materiais',
                desc: 'Seleção rigorosa de substratos, lâminas e ferragens europeias com certificação de origem e resistência técnica comprovada.',
              },
              {
                num: '03',
                title: 'Montagem de Precisão',
                desc: 'Equipe própria treinada em sistemas Blum de fixação oculta e ajustes milimétricos. Sem folgas. Sem ruídos.',
              },
            ].map((step) => (
              <div key={step.num}>
                <p className="text-4xl font-bold opacity-20 mb-4">{step.num}</p>
                <h4 className="font-semibold mb-3">{step.title}</h4>
                <p className="text-sm opacity-70">{step.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <Divider />

      {/* CTA Section */}
      <section id="contato" className="py-16 md:py-24 px-4 scroll-mt-20 bg-gradient-to-b from-background to-muted">
        <div className="container max-w-2xl text-center">
          <h2 className="mb-8">Pronto para projetar seu próximo ambiente?</h2>
          <p className="text-lg mb-6 opacity-70">
            Fale diretamente com nossa equipe técnica para uma consultoria inicial sobre seu projeto.
          </p>

          <div className="mb-10 space-y-2 text-sm opacity-80">
            <p>
              <a
                href={GOOGLE_MAPS_URL}
                target="_blank"
                rel="noopener noreferrer"
                className="hover:opacity-100 transition-opacity underline-offset-4 hover:underline"
              >
                {ADDRESS}
              </a>
            </p>
            <p>
              <a href={telLink()} className="hover:opacity-100 transition-opacity">
                {CONTACT_PHONE}
              </a>
            </p>
          </div>

          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Button
              className="bg-foreground text-background hover:bg-foreground/90 gap-2 px-8 py-3 font-semibold rounded-sm transition-all active:scale-95"
              onClick={() => window.open(whatsappLink(), '_blank', 'noopener,noreferrer')}
            >
              <MessageCircle size={18} />
              Solicitar via WhatsApp
            </Button>
            <Button
              className="border-2 border-foreground text-foreground hover:bg-foreground hover:text-background gap-2 px-8 py-3 font-semibold rounded-sm transition-all active:scale-95 bg-transparent"
              onClick={() => { window.location.href = telLink(); }}
            >
              <Phone size={18} />
              Ligar agora
            </Button>
            <Button
              className="border-2 border-foreground text-foreground hover:bg-foreground hover:text-background gap-2 px-8 py-3 font-semibold rounded-sm transition-all active:scale-95 bg-transparent"
              onClick={() => { window.location.href = mailtoLink(); }}
            >
              <Mail size={18} />
              Enviar E-mail
            </Button>
          </div>
        </div>
      </section>

      <Footer />
      <WhatsAppButton />
    </div>
  );
}

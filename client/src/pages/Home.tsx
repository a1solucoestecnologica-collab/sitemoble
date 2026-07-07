import Header from '@/components/Header';
import Footer from '@/components/Footer';
import WhatsAppButton from '@/components/WhatsAppButton';
import {
  whatsappLink,
  mailtoLink,
  telLink,
  CITY,
  ADDRESS,
  CONTACT_PHONE,
  GOOGLE_MAPS_URL,
} from '@/config';

const ambientes = [
  { n: '01', nome: 'Cozinhas' },
  { n: '02', nome: 'Dormitórios' },
  { n: '03', nome: 'Home Office' },
  { n: '04', nome: 'Banheiros' },
  { n: '05', nome: 'Closets' },
  { n: '06', nome: 'Living' },
];

const processo = [
  {
    n: '01',
    titulo: 'Mapeamento Digital',
    texto:
      'Capturamos a volumetria exata do ambiente com medição a laser, eliminando margens de erro estruturais antes do primeiro corte.',
  },
  {
    n: '02',
    titulo: 'Engenharia de Materiais',
    texto:
      'Seleção rigorosa de substratos, lâminas e ferragens europeias com certificação de origem e resistência técnica comprovada.',
  },
  {
    n: '03',
    titulo: 'Montagem de Precisão',
    texto:
      'Equipe própria treinada em sistemas Blum de fixação oculta e ajustes milimétricos. Sem folgas. Sem ruídos.',
  },
];

export default function Home() {
  return (
    <div className="min-h-screen bg-background text-foreground selection:bg-zinc-200">
      <Header />

      <main id="top" className="pt-16">
        {/* Hero */}
        <section className="relative border-b border-zinc-900/5">
          <div className="mx-auto grid max-w-7xl grid-cols-1 gap-0 px-6 lg:grid-cols-12">
            <div className="py-16 pr-0 md:py-24 lg:col-span-7 lg:border-r lg:border-zinc-900/5 lg:pr-12">
              <div className="mb-8 inline-flex items-center gap-2 rounded bg-zinc-100 px-2 py-1 font-mono text-[10px] uppercase tracking-wider text-zinc-500">
                <span className="relative flex h-2 w-2">
                  <span className="absolute inline-flex h-full w-full animate-ping rounded-full bg-zinc-400 opacity-75" />
                  <span className="relative inline-flex h-2 w-2 rounded-full bg-zinc-500" />
                </span>
                Engenharia de Interiores
              </div>

              <h1 className="mb-8 text-5xl font-medium leading-none tracking-tight text-balance lg:text-7xl">
                A forma segue a <span className="italic">precisão</span>.
              </h1>

              <p className="max-w-[48ch] text-lg leading-relaxed text-pretty text-zinc-600">
                Mobiliário planejado com rigor técnico e estética arquitetônica.
                Transformamos espaços em estruturas de alta performance onde o
                silêncio é o padrão.
              </p>

              <div className="mt-12 flex items-center gap-6">
                <div className="flex flex-col">
                  <span className="font-mono text-[10px] uppercase text-zinc-400">
                    Localização
                  </span>
                  <span className="text-sm font-medium">{CITY}</span>
                </div>
                <div className="h-8 w-px bg-zinc-900/10" />
                <div className="flex flex-col">
                  <span className="font-mono text-[10px] uppercase text-zinc-400">
                    Especialidade
                  </span>
                  <span className="text-sm font-medium">Marcenaria de Alto Padrão</span>
                </div>
              </div>
            </div>

            <div className="relative bg-zinc-50 lg:col-span-5">
              <img
                src="/images/hero-kitchen.png"
                alt="Cozinha planejada em carvalho com bancada preta e detalhes em latão"
                width={800}
                height={1200}
                className="h-full max-h-[520px] w-full object-cover outline outline-1 -outline-offset-1 outline-black/5 lg:max-h-none"
              />
              <div className="absolute bottom-8 left-8 rounded-sm bg-background p-4 shadow-xl ring-1 ring-black/5">
                <div className="mb-1 font-mono text-[10px] uppercase text-zinc-400">
                  Detalhe Técnico
                </div>
                <div className="text-xs font-medium uppercase tracking-widest">
                  Sistema Soft-Close 45º
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Ambientes — faixa estreita com scroll horizontal */}
        <section id="ambientes" className="bg-zinc-900 py-12 text-zinc-100">
          <div className="no-scrollbar mx-auto max-w-7xl overflow-x-auto px-6">
            <div className="flex min-w-max items-center gap-16">
              {ambientes.map((a) => (
                <a
                  key={a.n}
                  href="#portfolio"
                  className="group flex items-center gap-4"
                >
                  <span className="font-mono text-xs tracking-tighter text-zinc-600">
                    {a.n}
                  </span>
                  <span className="text-xl font-medium text-zinc-400 transition-colors group-hover:text-white">
                    {a.nome}
                  </span>
                </a>
              ))}
            </div>
          </div>
        </section>

        {/* Portfolio */}
        <section id="portfolio" className="border-b border-zinc-900/5 py-24">
          <div className="mx-auto max-w-7xl px-6">
            <div className="mb-16 grid grid-cols-1 items-end gap-12 lg:grid-cols-2">
              <h2 className="text-4xl font-medium leading-tight tracking-tight text-balance">
                Residência Pinheiros: um estudo em carvalho e aço escovado.
              </h2>
              <div className="lg:text-right">
                <a
                  href="#contato"
                  className="inline-flex items-center gap-2 border-b border-zinc-900/20 pb-1 text-sm font-medium transition-colors hover:border-zinc-900"
                >
                  Ver projeto completo
                  <svg
                    className="size-4"
                    fill="none"
                    viewBox="0 0 24 24"
                    stroke="currentColor"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth={2}
                      d="M17 8l4 4m0 0l-4 4m4-4H3"
                    />
                  </svg>
                </a>
              </div>
            </div>

            <div className="grid grid-cols-1 gap-6 md:grid-cols-3">
              <div className="md:col-span-2">
                <img
                  src="/images/project-closet.png"
                  alt="Closet planejado com iluminação integrada e portas de vidro"
                  width={1200}
                  height={800}
                  loading="lazy"
                  className="aspect-[16/10] w-full rounded-[min(1vw,12px)] object-cover outline outline-1 -outline-offset-1 outline-black/5"
                />
              </div>
              <div className="flex flex-col gap-6">
                <img
                  src="/images/detail-mdf.png"
                  alt="Detalhe de gaveta em MDF 18mm com corrediça metálica"
                  width={600}
                  height={600}
                  loading="lazy"
                  className="aspect-square w-full rounded-[min(1vw,12px)] object-cover outline outline-1 -outline-offset-1 outline-black/5"
                />
                <div className="flex-1 rounded-[min(1vw,12px)] border border-zinc-900/5 bg-zinc-50 p-8">
                  <span className="font-mono text-[10px] uppercase text-zinc-400">
                    Especificações
                  </span>
                  <ul className="mt-4 space-y-3">
                    <li className="flex justify-between text-xs">
                      <span className="text-zinc-500">Estrutura</span>
                      <span className="font-medium">MDF 18mm</span>
                    </li>
                    <li className="flex justify-between text-xs">
                      <span className="text-zinc-500">Acabamento</span>
                      <span className="font-medium">Laca Fosca Microtexturizada</span>
                    </li>
                    <li className="flex justify-between text-xs">
                      <span className="text-zinc-500">Ferragens</span>
                      <span className="font-medium">Blum Legrabox</span>
                    </li>
                  </ul>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Processo */}
        <section id="processo" className="py-24">
          <div className="mx-auto max-w-7xl px-6">
            <div className="mb-16">
              <span className="font-mono text-[10px] uppercase tracking-widest text-zinc-400">
                O Manifesto
              </span>
              <h2 className="mt-4 text-3xl font-medium tracking-tight">
                Rigor técnico em cada milímetro.
              </h2>
            </div>
            <div className="grid grid-cols-1 gap-12 md:grid-cols-3 md:divide-x md:divide-zinc-900/5">
              {processo.map((p, i) => (
                <div key={p.n} className={i === 0 ? 'pl-0' : 'md:pl-8'}>
                  <span className="font-mono text-xs text-zinc-400">{p.n}</span>
                  <h3 className="mt-4 mb-3 text-lg font-medium">{p.titulo}</h3>
                  <p className="max-w-[35ch] text-sm leading-relaxed text-pretty text-zinc-600">
                    {p.texto}
                  </p>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Contato */}
        <section
          id="contato"
          className="border-t border-zinc-900/5 bg-zinc-50 py-32"
        >
          <div className="mx-auto max-w-3xl px-6 text-center">
            <h2 className="mb-8 text-4xl font-medium tracking-tight text-balance">
              Pronto para projetar seu próximo ambiente?
            </h2>
            <p className="mb-12 text-pretty text-zinc-600">
              Fale diretamente com nossa equipe técnica para uma consultoria
              inicial sobre seu projeto.
            </p>

            <div className="flex flex-col items-center justify-center gap-4 sm:flex-row">
              <a
                href={whatsappLink()}
                target="_blank"
                rel="noopener noreferrer"
                className="flex w-full items-center justify-center gap-3 rounded-sm bg-zinc-900 px-8 py-4 font-medium text-zinc-50 shadow-lg transition-colors hover:bg-zinc-800 sm:w-auto"
              >
                <svg className="size-5" fill="currentColor" viewBox="0 0 24 24">
                  <path d="M.057 24l1.687-6.163c-1.041-1.804-1.588-3.849-1.587-5.946.003-6.556 5.338-11.891 11.893-11.891 3.181.001 6.167 1.24 8.413 3.488 2.245 2.248 3.481 5.236 3.48 8.414-.003 6.557-5.338 11.892-11.893 11.892-1.99-.001-3.951-.5-5.688-1.448l-6.305 1.654zm6.597-3.807c1.676.995 3.276 1.591 5.392 1.592 5.448 0 9.886-4.438 9.889-9.886.002-5.462-4.415-9.89-9.881-9.892-5.452 0-9.89 4.44-9.894 9.886-.002 2.225.561 4.398 1.582 6.03l-1.032 3.777 3.944-1.035zm11.387-5.464c-.074-.124-.272-.198-.57-.347-.297-.149-1.758-.868-2.031-.967-.272-.099-.47-.149-.669.149-.198.297-.768.967-.941 1.165-.173.198-.347.223-.644.074-.297-.149-1.255-.462-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.297-.347.446-.521.151-.172.2-.296.3-.495.099-.198.05-.372-.025-.521-.075-.148-.669-1.611-.916-2.206-.242-.579-.487-.501-.669-.51l-.57-.01c-.198 0-.52.074-.792.372s-1.04 1.016-1.04 2.479 1.065 2.876 1.213 3.074c.149.198 2.095 3.2 5.076 4.487.71.306 1.263.489 1.694.626.712.226 1.36.194 1.872.118.571-.085 1.758-.719 2.006-1.413.248-.695.248-1.29.173-1.414z" />
                </svg>
                Solicitar via WhatsApp
              </a>
              <a
                href={mailtoLink()}
                className="w-full rounded-sm border border-zinc-900/10 bg-transparent px-8 py-4 font-medium text-zinc-900 transition-colors hover:bg-zinc-100 sm:w-auto"
              >
                Enviar E-mail
              </a>
            </div>

            <div className="mt-12 flex flex-col items-center gap-2 font-mono text-[11px] uppercase tracking-wider text-zinc-500">
              <a href={telLink()} className="hover:text-zinc-900">
                {CONTACT_PHONE}
              </a>
              <a
                href={GOOGLE_MAPS_URL}
                target="_blank"
                rel="noopener noreferrer"
                className="max-w-xs text-pretty hover:text-zinc-900"
              >
                {ADDRESS}
              </a>
            </div>
          </div>
        </section>
      </main>

      <Footer />
      <WhatsAppButton />
    </div>
  );
}

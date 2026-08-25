import { createFileRoute } from "@tanstack/react-router";
import { useState } from "react";
import heroApps from "@/assets/hero-apps.jpg";
import appShowcase from "@/assets/app-showcase.jpg";
import { Reveal } from "@/components/Reveal";
import { PhoneShowcase } from "@/components/PhoneShowcase";
import { MobileNav } from "@/components/MobileNav";
import { StickyWhatsApp } from "@/components/StickyWhatsApp";
import { ScrollProgress } from "@/components/ScrollProgress";
import { ComparisonMobile } from "@/components/ComparisonMobile";
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";

const OG_IMAGE =
  "https://project--52727ae6-8cd6-44f4-b582-2bcb61daaa24.lovable.app/og-image.jpg";

export const Route = createFileRoute("/")({
  head: () => ({
    meta: [
      { title: "TechBarbershop — Aplicativo próprio para sua barbearia" },
      {
        name: "description",
        content:
          "Planos APP ESSENCIAL (R$50) e APP PRO (R$150): aplicativo próprio, serviços, galeria, WhatsApp, agenda e automação.",
      },
      {
        property: "og:title",
        content: "TechBarbershop — Aplicativo próprio para sua barbearia",
      },
      {
        property: "og:description",
        content:
          "Escolha entre APP ESSENCIAL e APP PRO. Pagamento único, prazos claros e processo transparente.",
      },
      { property: "og:image", content: OG_IMAGE },
      { name: "twitter:image", content: OG_IMAGE },
    ],
  }),
  component: Index,
});

const WHATSAPP =
  "https://wa.me/5534993357833?text=" +
  encodeURIComponent("Olá! Gostaria de falar com a TechBarbershop sobre os planos de aplicativo.");

const waFor = (plano: string) =>
  "https://wa.me/5534993357833?text=" +
  encodeURIComponent(`Olá! Tenho interesse no plano ${plano} da TechBarbershop.`);

function Check() {
  return (
    <svg viewBox="0 0 20 20" className="mt-0.5 size-4 shrink-0 text-primary" aria-hidden="true">
      <path
        fill="currentColor"
        d="M8.1 14.6 4.3 10.8l1.3-1.3 2.5 2.5 6.3-6.3 1.3 1.3z"
      />
    </svg>
  );
}

const essencialInclui = [
  "Aplicativo próprio da sua barbearia",
  "Identidade da sua barbearia",
  "Nome e informações do negócio",
  "Lista de serviços",
  "Preços dos serviços",
  "Galeria de fotos/cortes",
  "Localização",
  "Informações de contato",
  "Botão de WhatsApp da sua barbearia",
];

const comparacao: Array<[string, boolean, boolean]> = [
  ["App próprio", true, true],
  ["Sua marca", true, true],
  ["Serviços", true, true],
  ["Preços", true, true],
  ["Galeria", true, true],
  ["Localização", true, true],
  ["WhatsApp", true, true],
  ["Agenda", false, true],
  ["Automação WhatsApp", false, true],
];

const etapas = [
  {
    n: "01",
    t: "CONTRATAÇÃO",
    d: "Você escolhe o plano que faz mais sentido para sua barbearia.",
  },
  {
    n: "02",
    t: "INFORMAÇÕES",
    d: "Você envia logo, nome, serviços, preços, fotos e demais informações necessárias.",
  },
  { n: "03", t: "DESENVOLVIMENTO", d: "Nossa equipe cria e personaliza seu aplicativo." },
  {
    n: "04",
    t: "ENTREGA",
    d: "Seu aplicativo fica pronto dentro do prazo estimado do plano escolhido. No APP PRO, também realizamos a configuração da agenda e automação de WhatsApp.",
  },
];

const faq = [
  {
    q: "Preciso entender de tecnologia?",
    a: "Não. Você envia as informações da sua barbearia (logo, serviços, preços, fotos, localização) e nossa equipe cuida de toda a parte técnica.",
  },
  {
    q: "Posso trocar de plano depois?",
    a: "Sim. Se você começar no APP ESSENCIAL e depois quiser agenda e automação de WhatsApp, é possível evoluir para o APP PRO. Fale com a gente pelo WhatsApp para combinar os detalhes.",
  },
  {
    q: "Como funciona o pagamento?",
    a: "Os dois planos são de pagamento único: R$50 no APP ESSENCIAL e R$150 no APP PRO. O prazo de desenvolvimento começa após o recebimento das informações e materiais.",
  },
  {
    q: "Existe fidelidade ou contrato?",
    a: "Não há fidelidade. A contratação é do desenvolvimento do aplicativo, com o escopo do plano escolhido combinado antes de começar.",
  },
];

function Index() {
  const [menuOpen, setMenuOpen] = useState(false);

  return (
    <div className="bg-background">
      <ScrollProgress />
      <header className="sticky top-0 z-50 border-b border-border bg-background/80 backdrop-blur-xl">
        <nav className="mx-auto flex h-14 max-w-5xl items-center justify-between px-5 sm:h-12 sm:px-6">
          <span className="text-sm font-semibold tracking-tight">TechBarbershop</span>
          <div className="hidden items-center gap-8 text-xs text-muted-foreground sm:flex">
            <a href="#exemplo" className="transition-colors hover:text-foreground">
              Exemplo
            </a>
            <a href="#planos" className="transition-colors hover:text-foreground">
              Planos
            </a>
            <a href="#comparacao" className="transition-colors hover:text-foreground">
              Comparação
            </a>
            <a href="#processo" className="transition-colors hover:text-foreground">
              Processo
            </a>
          </div>
          <div className="flex items-center gap-1">
            <a
              href={WHATSAPP}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex min-h-[40px] items-center rounded-full bg-primary px-4 text-xs font-medium text-primary-foreground transition-opacity hover:opacity-85 sm:min-h-0 sm:px-3.5 sm:py-1.5"
            >
              Falar conosco
            </a>
            <MobileNav open={menuOpen} onOpenChange={setMenuOpen} whatsappHref={WHATSAPP} />
          </div>
        </nav>
      </header>

      <main className="pb-24 sm:pb-0">
        {/* HERO */}
        <section className="bg-surface px-5 pt-12 pb-0 text-center sm:px-6 sm:pt-20">
          <div className="mx-auto max-w-3xl">
            <p className="eyebrow">TechBarbershop</p>
            <h1 className="mt-3 text-[2.1rem] leading-[1.1] font-semibold tracking-tight sm:text-6xl">
              O aplicativo da sua barbearia.
            </h1>
            <p className="mt-4 text-base text-muted-foreground sm:mt-5 sm:text-2xl">
              Presença digital própria, com as informações, os serviços e o WhatsApp da sua
              barbearia. Pagamento único, prazos claros.
            </p>
            <div className="mt-7 flex flex-col items-stretch justify-center gap-3 sm:mt-8 sm:flex-row sm:flex-wrap sm:items-center sm:gap-x-6 sm:gap-y-3">
              <a
                href="#planos"
                className="inline-flex min-h-[52px] items-center justify-center rounded-full bg-primary px-6 text-base font-medium text-primary-foreground transition-opacity hover:opacity-85 sm:min-h-0 sm:py-3"
              >
                Ver planos
              </a>
              <a
                href="#exemplo"
                className="inline-flex min-h-[48px] items-center justify-center text-base font-medium text-primary hover:underline"
              >
                Ver um app pronto ›
              </a>
            </div>

            {/* PROVA SOCIAL */}
            <a
              href="#exemplo"
              className="mt-6 inline-flex min-h-[44px] items-center gap-2 rounded-full border border-border bg-background px-4 text-sm font-medium"
            >
              <span className="size-2 rounded-full bg-whatsapp" aria-hidden="true" />
              Veja um app real que entregamos
            </a>
          </div>
          <Reveal className="mt-10 sm:mt-12">
            <img
              src={heroApps}
              alt="Telas de um aplicativo de barbearia desenvolvido pela TechBarbershop"
              width={1600}
              height={1008}
              className="mx-auto w-full max-w-4xl"
            />
          </Reveal>
        </section>

        {/* EXEMPLO — APP FEITO PELA MARCA */}
        <section id="exemplo" className="scroll-mt-16 px-5 py-14 sm:px-6 sm:py-24">
          <div className="mx-auto grid max-w-5xl items-center gap-10 sm:gap-12 md:grid-cols-2">
            <div>
              <p className="eyebrow">Feito pela TechBarbershop</p>
              <h2 className="mt-3 text-3xl font-semibold tracking-tight sm:text-5xl">
                Dom Barbearia
              </h2>
              <p className="mt-4 text-base text-muted-foreground sm:mt-5 sm:text-lg">
                Um aplicativo real desenvolvido por nós: identidade da barbearia, lista de
                serviços com preços, galeria de cortes, localização, contato e agendamento
                direto pelo WhatsApp.
              </p>
              <ul className="mt-6 space-y-2.5 text-base">
                {[
                  "Identidade e marca da barbearia",
                  "Serviços e preços (Corte Social, Degradê, Barba)",
                  "Galeria de fotos e página Sobre",
                  "Localização e horários de atendimento",
                ].map((i) => (
                  <li key={i} className="flex gap-2.5">
                    <Check />
                    <span>{i}</span>
                  </li>
                ))}
              </ul>
              <a
                href="https://the-gentleman-rouge.vercel.app/"
                target="_blank"
                rel="noopener noreferrer"
                className="mt-7 inline-flex min-h-[44px] items-center text-base font-medium text-primary hover:underline sm:mt-8"
              >
                Abrir o aplicativo da Dom Barbearia ›
              </a>
            </div>
            <PhoneShowcase className="rounded-3xl bg-surface p-4 sm:p-6">
              <img
                src={appShowcase}
                alt="Aplicativo de barbearia desenvolvido pela TechBarbershop em um smartphone"
                width={1200}
                height={1200}
                loading="lazy"
                className="mx-auto w-full max-w-sm"
              />
            </PhoneShowcase>
          </div>
        </section>

        {/* PLANOS */}
        <section id="planos" className="scroll-mt-16 bg-surface px-5 py-14 sm:px-6 sm:py-24">
          <div className="mx-auto max-w-5xl">
            <div className="text-center">
              <p className="eyebrow">Pacotes</p>
              <h2 className="mt-3 text-3xl font-semibold tracking-tight sm:text-5xl">
                Qual é o próximo passo da sua barbearia?
              </h2>
              <p className="mx-auto mt-4 max-w-xl text-base text-muted-foreground sm:text-lg">
                Escolha o nível de aplicativo que faz sentido para o seu negócio.
              </p>
            </div>

            <div className="mt-10 grid gap-6 sm:mt-14 lg:grid-cols-2">
              {/* ESSENCIAL */}
              <article className="surface-card flex flex-col p-6 sm:p-8">
                <span className="self-start rounded-full bg-accent px-3 py-1 text-xs font-semibold tracking-wide text-accent-foreground">
                  PARA COMEÇAR
                </span>
                <h3 className="mt-5 text-2xl font-semibold">APP ESSENCIAL</h3>
                <p className="mt-2 text-4xl font-semibold tracking-tight">R$ 50</p>
                <p className="mt-1 text-sm font-semibold text-primary">PAGAMENTO ÚNICO</p>

                <p className="mt-6 text-xl font-semibold tracking-tight sm:text-2xl">
                  Quero ter meu próprio app.
                </p>
                <p className="mt-3 text-base text-muted-foreground">
                  Para o barbeiro que quer transformar a presença digital da sua barbearia em algo
                  mais profissional e próprio.
                </p>
                <p className="mt-4 text-base text-muted-foreground">
                  Seu cliente entra no app, conhece sua barbearia, vê seus serviços, preços, fotos,
                  localização e encontra seu WhatsApp.
                </p>

                <div className="mt-6 rounded-2xl bg-surface px-5 py-4">
                  <p className="text-sm font-semibold">ENTREGA ESTIMADA EM 1 A 4 DIAS</p>
                  <p className="mt-1 text-sm text-muted-foreground">
                    O prazo começa após o recebimento das informações e materiais necessários para
                    a criação do aplicativo.
                  </p>
                </div>

                <p className="mt-7 eyebrow">O que está incluído</p>
                <ul className="mt-3 space-y-2.5 text-base">
                  {essencialInclui.map((i) => (
                    <li key={i} className="flex gap-2.5">
                      <Check />
                      <span>{i}</span>
                    </li>
                  ))}
                </ul>

                <p className="mt-7 eyebrow">Para quem é</p>
                <p className="mt-2 text-base text-muted-foreground">
                  Para o barbeiro que quer começar a profissionalizar a presença digital da sua
                  barbearia de forma simples e rápida.
                </p>

                <div className="mt-8">
                  <a
                    href={waFor("APP ESSENCIAL")}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex min-h-[52px] w-full items-center justify-center rounded-full border border-primary px-6 text-center text-base font-medium text-primary transition-colors hover:bg-primary hover:text-primary-foreground"
                  >
                    QUERO MEU APP
                  </a>
                  <p className="mt-3 text-center text-sm text-muted-foreground">
                    R$50 • pagamento único
                  </p>
                </div>
              </article>

              {/* PRO */}
              <article className="surface-card relative flex flex-col overflow-hidden p-6 ring-1 ring-primary/40 sm:p-8">
                <div className="absolute inset-x-0 top-0 h-1 bg-primary" aria-hidden="true" />
                <span className="self-start rounded-full bg-primary px-3 py-1 text-xs font-semibold tracking-wide text-primary-foreground">
                  MAIS COMPLETO
                </span>
                <h3 className="mt-5 text-2xl font-semibold">APP PRO</h3>
                <p className="mt-2 text-4xl font-semibold tracking-tight sm:text-6xl">R$ 150</p>
                <p className="mt-1 text-sm font-semibold text-primary">PAGAMENTO ÚNICO</p>

                <p className="mt-6 text-xl font-semibold tracking-tight leading-snug sm:text-2xl">
                  SEU CLIENTE GANHA PRATICIDADE.
                  <br />
                  VOCÊ GANHA TEMPO.
                </p>
                <p className="mt-3 text-base text-muted-foreground">
                  Um app pensado para facilitar o atendimento da sua barbearia, com agenda e
                  automação de WhatsApp.
                </p>

                <p className="mt-7 eyebrow">O QUE VEM NO APP PRO</p>
                <ul className="mt-3 space-y-2.5 text-base">
                  {[
                    "Aplicativo personalizado da sua barbearia",
                    "Agenda e agendamento",
                    "Automação de WhatsApp",
                    "Serviços, preços e galeria",
                    "Localização e informações da barbearia",
                    "WhatsApp integrado",
                  ].map((i) => (
                    <li key={i} className="flex gap-2.5">
                      <Check />
                      <span>{i}</span>
                    </li>
                  ))}
                </ul>

                <p className="mt-7 text-lg font-semibold tracking-tight leading-snug sm:text-xl">
                  MENOS MENSAGENS.
                  <br />
                  MENOS INTERRUPÇÕES.
                  <br />
                  MAIS TEMPO PARA ATENDER.
                </p>
                <p className="mt-3 text-base text-muted-foreground">
                  Seu cliente encontra as informações e pode agendar com mais facilidade, enquanto
                  você reduz parte das tarefas repetitivas do dia a dia.
                </p>

                <div className="mt-6 rounded-2xl bg-surface px-5 py-4">
                  <p className="text-sm font-semibold">ENTREGA ESTIMADA EM 1 A 3 SEMANAS</p>
                  <p className="mt-1 text-sm text-muted-foreground">
                    O prazo começa após o recebimento das informações e materiais necessários.
                  </p>
                </div>

                <p className="mt-7 eyebrow">PARA QUEM É</p>
                <p className="mt-2 text-base text-muted-foreground">
                  Para barbeiros que querem uma experiência mais completa para seus clientes e uma
                  rotina mais prática.
                </p>

                <div className="mt-8">
                  <a
                    href={waFor("APP PRO")}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex min-h-[52px] w-full items-center justify-center rounded-full bg-primary px-6 text-center text-base font-medium text-primary-foreground transition-opacity hover:opacity-85"
                  >
                    QUERO FACILITAR MINHA ROTINA
                  </a>
                  <p className="mt-3 text-center text-sm text-muted-foreground">
                    R$150 • pagamento único
                  </p>
                </div>
              </article>
            </div>
          </div>
        </section>

        {/* COMPARAÇÃO */}
        <section id="comparacao" className="scroll-mt-16 px-5 py-14 sm:px-6 sm:py-24">
          <div className="mx-auto max-w-3xl">
            <h2 className="text-center text-3xl font-semibold tracking-tight sm:text-4xl">
              Comparação
            </h2>

            {/* Mobile */}
            <div className="mt-8">
              <ComparisonMobile rows={comparacao} />
            </div>

            {/* Desktop */}
            <div className="surface-card mt-10 hidden overflow-hidden sm:block">
              <table className="w-full text-left text-base">
                <thead>
                  <tr className="border-b border-border bg-surface">
                    <th className="px-5 py-4 font-medium text-muted-foreground">Recurso</th>
                    <th className="px-5 py-4 text-center font-semibold">ESSENCIAL</th>
                    <th className="px-5 py-4 text-center font-semibold">PRO</th>
                  </tr>
                </thead>
                <tbody>
                  {comparacao.map(([label, e, p]) => (
                    <tr key={label} className="border-b border-border">
                      <td className="px-5 py-3.5">{label}</td>
                      <td className="px-5 py-3.5 text-center">
                        {e ? (
                          <span className="text-primary">✓</span>
                        ) : (
                          <span className="text-muted-foreground">—</span>
                        )}
                      </td>
                      <td className="px-5 py-3.5 text-center">
                        {p ? (
                          <span className="text-primary">✓</span>
                        ) : (
                          <span className="text-muted-foreground">—</span>
                        )}
                      </td>
                    </tr>
                  ))}
                  <tr className="border-b border-border bg-surface">
                    <td className="px-5 py-3.5 text-muted-foreground">Prazo estimado</td>
                    <td className="px-5 py-3.5 text-center font-medium">1–4 dias</td>
                    <td className="px-5 py-3.5 text-center font-medium">1–3 semanas</td>
                  </tr>
                  <tr className="bg-surface">
                    <td className="px-5 py-3.5 text-muted-foreground">Preço</td>
                    <td className="px-5 py-3.5 text-center font-medium">R$ 50</td>
                    <td className="px-5 py-3.5 text-center font-medium">R$ 150</td>
                  </tr>
                </tbody>
              </table>
            </div>

            {/* DIFERENÇA */}
            <h3 className="mt-12 text-center text-2xl font-semibold tracking-tight sm:mt-16 sm:text-3xl">
              Qual é a diferença?
            </h3>
            <div className="mt-6 grid gap-4 sm:mt-8 sm:grid-cols-2">
              <div className="rounded-2xl bg-surface p-6">
                <p className="text-sm font-semibold">APP ESSENCIAL</p>
                <p className="mt-2 text-base text-muted-foreground">
                  Uma presença digital própria para sua barbearia.
                </p>
              </div>
              <div className="rounded-2xl bg-surface p-6">
                <p className="text-sm font-semibold">APP PRO</p>
                <p className="mt-2 text-base text-muted-foreground">
                  Uma presença digital própria + agenda + automação de WhatsApp.
                </p>
              </div>
            </div>
            <div className="mt-6 rounded-2xl bg-ink p-6 text-ink-foreground sm:p-8">
              <p className="text-lg font-medium sm:text-xl">
                Se você quer começar com seu próprio app, o ESSENCIAL resolve.
              </p>
              <p className="mt-3 text-lg font-medium sm:text-xl">
                Se você quer uma experiência mais completa para seus clientes, o PRO é para você.
              </p>
            </div>
          </div>
        </section>

        {/* PRAZOS */}
        <section className="bg-surface px-5 py-14 sm:px-6 sm:py-24">
          <div className="mx-auto max-w-3xl text-center">
            <h2 className="text-3xl font-semibold tracking-tight sm:text-4xl">
              Prazo de desenvolvimento
            </h2>
            <p className="mx-auto mt-4 max-w-xl text-base text-muted-foreground sm:text-lg">
              Os prazos são diferentes porque os projetos têm níveis diferentes de
              personalização.
            </p>
            <div className="mt-8 grid gap-4 sm:mt-10 sm:grid-cols-2">
              <div className="surface-card p-6 sm:p-8">
                <p className="eyebrow">App Essencial</p>
                <p className="mt-2 text-2xl font-semibold tracking-tight sm:text-3xl">
                  1 a 4 dias
                </p>
                <p className="mt-2 text-sm text-muted-foreground">Prazo estimado.</p>
              </div>
              <div className="surface-card p-6 sm:p-8">
                <p className="eyebrow">App Pro</p>
                <p className="mt-2 text-2xl font-semibold tracking-tight sm:text-3xl">
                  1 a 3 semanas
                </p>
                <p className="mt-2 text-sm text-muted-foreground">Prazo estimado.</p>
              </div>
            </div>
            <p className="mt-7 text-base text-muted-foreground sm:mt-8">
              O prazo começa após o recebimento das informações e materiais necessários para a
              criação do aplicativo. Todos os prazos informados são estimados e podem variar
              conforme o envio das informações e a personalização necessária.
            </p>
          </div>
        </section>

        {/* PROCESSO */}
        <section id="processo" className="scroll-mt-16 px-5 py-14 sm:px-6 sm:py-24">
          <div className="mx-auto max-w-3xl">
            <h2 className="text-center text-3xl font-semibold tracking-tight sm:text-4xl">
              O que acontece depois da contratação
            </h2>
            <ol className="mt-8 space-y-4 sm:mt-12">
              {etapas.map((e, i) => (
                <li key={e.n}>
                  <div className="surface-card p-6 sm:p-7">
                    <p className="eyebrow">
                      {e.n} — {e.t}
                    </p>
                    <p className="mt-2 text-base text-muted-foreground">{e.d}</p>
                  </div>
                  {i < etapas.length - 1 && (
                    <p aria-hidden="true" className="py-2 text-center text-xl text-border">
                      ↓
                    </p>
                  )}
                </li>
              ))}
            </ol>
          </div>
        </section>

        {/* FAQ */}
        <section id="faq" className="scroll-mt-16 bg-surface px-5 py-14 sm:px-6 sm:py-24">
          <div className="mx-auto max-w-3xl">
            <h2 className="text-center text-3xl font-semibold tracking-tight sm:text-4xl">
              Dúvidas comuns
            </h2>
            <Accordion type="single" collapsible className="mt-8 w-full">
              {faq.map((f) => (
                <AccordionItem key={f.q} value={f.q}>
                  <AccordionTrigger className="text-left text-base font-medium">
                    {f.q}
                  </AccordionTrigger>
                  <AccordionContent className="text-base text-muted-foreground">
                    {f.a}
                  </AccordionContent>
                </AccordionItem>
              ))}
            </Accordion>
          </div>
        </section>
      </main>

      <footer className="border-t border-border px-5 py-8 sm:px-6 sm:py-10">
        <div className="mx-auto flex max-w-5xl flex-col items-center justify-between gap-3 text-xs text-muted-foreground sm:flex-row">
          <p>© {new Date().getFullYear()} TechBarbershop.</p>
          <p>Pagamento único. Prazos estimados.</p>
        </div>
      </footer>

      <StickyWhatsApp href={WHATSAPP} hidden={menuOpen} />
    </div>
  );
}

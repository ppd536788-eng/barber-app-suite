import { Menu } from "lucide-react";
import {
  Sheet,
  SheetContent,
  SheetHeader,
  SheetTitle,
  SheetTrigger,
} from "@/components/ui/sheet";

const links = [
  { href: "#exemplo", label: "Exemplo" },
  { href: "#planos", label: "Planos" },
  { href: "#comparacao", label: "Comparação" },
  { href: "#processo", label: "Processo" },
  { href: "#faq", label: "Dúvidas" },
];

export function MobileNav({
  open,
  onOpenChange,
  whatsappHref,
}: {
  open: boolean;
  onOpenChange: (v: boolean) => void;
  whatsappHref: string;
}) {
  const go = (href: string) => {
    onOpenChange(false);
    setTimeout(() => {
      document.querySelector(href)?.scrollIntoView({ behavior: "smooth", block: "start" });
    }, 220);
  };

  return (
    <Sheet open={open} onOpenChange={onOpenChange}>
      <SheetTrigger
        aria-label="Abrir menu"
        className="inline-flex size-11 items-center justify-center rounded-full text-foreground sm:hidden"
      >
        <Menu className="size-5" aria-hidden="true" />
      </SheetTrigger>
      <SheetContent side="right" className="w-[82vw] max-w-xs">
        <SheetHeader>
          <SheetTitle className="text-left text-base">TechBarbershop</SheetTitle>
        </SheetHeader>
        <nav className="mt-2 flex flex-col px-4">
          {links.map((l) => (
            <button
              key={l.href}
              type="button"
              onClick={() => go(l.href)}
              className="flex min-h-[48px] items-center border-b border-border text-left text-base font-medium"
            >
              {l.label}
            </button>
          ))}
          <a
            href={whatsappHref}
            target="_blank"
            rel="noopener noreferrer"
            onClick={() => onOpenChange(false)}
            className="mt-6 flex min-h-[48px] items-center justify-center rounded-full bg-whatsapp px-6 text-base font-medium text-whatsapp-foreground"
          >
            Falar no WhatsApp
          </a>
        </nav>
      </SheetContent>
    </Sheet>
  );
}

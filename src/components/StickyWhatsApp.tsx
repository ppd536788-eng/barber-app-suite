import { useEffect, useState } from "react";
import { MessageCircle } from "lucide-react";

export function StickyWhatsApp({ href, hidden }: { href: string; hidden?: boolean }) {
  const [show, setShow] = useState(false);

  useEffect(() => {
    const onScroll = () => setShow(window.scrollY > window.innerHeight * 0.7);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  return (
    <div
      className={`fixed inset-x-0 bottom-0 z-40 border-t border-border bg-background/85 px-4 pb-[calc(env(safe-area-inset-bottom)+0.75rem)] pt-3 backdrop-blur-xl shadow-[0_-6px_24px_rgba(0,0,0,0.08)] transition-all duration-300 sm:hidden ${
        show && !hidden
          ? "translate-y-0 opacity-100"
          : "pointer-events-none translate-y-full opacity-0"
      }`}
    >
      <a
        href={href}
        target="_blank"
        rel="noopener noreferrer"
        className="flex min-h-[52px] items-center justify-center gap-2 rounded-full bg-whatsapp px-6 text-base font-medium text-whatsapp-foreground"
      >
        <MessageCircle className="size-5" aria-hidden="true" />
        Falar no WhatsApp
      </a>
    </div>
  );
}

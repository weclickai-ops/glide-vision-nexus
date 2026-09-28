import { Link, useRouterState } from "@tanstack/react-router";
import { ArrowUpRight, Menu, X } from "lucide-react";
import { useEffect, useRef, useState, type ReactNode } from "react";
import logoAsset from "../../assets/jomolab-logo.png.asset.json";
import { nav } from "./data";

export function SiteChrome({ children }: { children: ReactNode }) {
  const pathname = useRouterState({ select: (s) => s.location.pathname });
  const [open, setOpen] = useState(false);
  const [progress, setProgress] = useState(0);
  const [scrolled, setScrolled] = useState(false);
  const glow = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const onScroll = () => {
      const a = document.documentElement.scrollHeight - window.innerHeight;
      setProgress(a > 0 ? window.scrollY / a : 0);
      setScrolled(window.scrollY > 40);
    };
    const onMove = (e: PointerEvent) => { if (glow.current) glow.current.style.transform = `translate(${e.clientX - 200}px, ${e.clientY - 200}px)`; };
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    window.addEventListener("pointermove", onMove);
    return () => { window.removeEventListener("scroll", onScroll); window.removeEventListener("pointermove", onMove); };
  }, []);

  useEffect(() => { setOpen(false); window.scrollTo(0, 0); }, [pathname]);

  return (
    <div className="min-h-screen overflow-x-hidden bg-background font-body text-foreground selection:bg-primary selection:text-background">
      <div ref={glow} className="cursor-glow" aria-hidden="true" />
      <div className="scanline" aria-hidden="true" />
      <div className="fixed left-0 top-0 z-[60] h-px bg-accent shadow-signal" style={{ width: `${progress * 100}%` }} />

      <header className={`fixed inset-x-0 top-0 z-50 border-b transition-all duration-500 ${scrolled ? "border-border bg-background/80 backdrop-blur-xl" : "border-transparent"}`}>
        <div className="mx-auto flex h-18 max-w-screen-2xl items-center justify-between px-5 md:px-8">
          <Link to="/" aria-label="JomoLab home"><img src={logoAsset.url} alt="JomoLab" className="h-7 w-auto md:h-8" /></Link>
          <nav className="hidden items-center gap-8 text-[11px] font-medium uppercase tracking-[0.18em] text-muted-foreground md:flex">
            {nav.map(([to, label]) => (
              <Link key={to} to={to} className="nav-link" activeProps={{ className: "nav-link text-accent is-active" }}>{label}</Link>
            ))}
            <Link to="/contact" className="btn-sweep border border-primary px-4 py-2 text-accent">Join the mission</Link>
          </nav>
          <button type="button" className="grid size-10 place-items-center border border-border text-accent md:hidden" onClick={() => setOpen((o) => !o)} aria-expanded={open} aria-label={open ? "Close menu" : "Open menu"}>
            {open ? <X className="size-5" /> : <Menu className="size-5" />}
          </button>
        </div>
        {open && (
          <nav className="grid border-t border-border bg-background px-5 py-5 text-sm uppercase tracking-[0.16em] md:hidden">
            {[...nav, ["/contact", "Join the mission"] as const].map(([to, label], i) => (
              <Link key={to} to={to} className="reveal-up border-b border-border py-4 text-muted-foreground last:border-0" style={{ animationDelay: `${i * 60}ms` }}>{label}</Link>
            ))}
          </nav>
        )}
      </header>

      <main key={pathname} className="page-enter">{children}</main>

      <footer className="relative overflow-hidden border-t border-border px-5 py-14 md:px-8">
        <div className="mx-auto flex max-w-screen-2xl flex-col items-center justify-between gap-6 text-[10px] uppercase tracking-[0.16em] text-muted-foreground md:flex-row">
          <span>JomoLab® · Future Technology R&amp;D</span>
          <a href="mailto:team@jomolab.co" className="inline-flex items-center gap-2 hover:text-accent">team@jomolab.co <ArrowUpRight className="size-3" /></a>
          <span>© 2026 JomoLab</span>
        </div>
      </footer>
    </div>
  );
}

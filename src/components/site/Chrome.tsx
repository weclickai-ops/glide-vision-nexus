import { Link, useRouterState } from "@tanstack/react-router";
import { ArrowUpRight, Menu, X } from "lucide-react";
import { useEffect, useState, type ReactNode } from "react";
import logoAsset from "../../assets/jomolab-logo.png.asset.json";
import { nav } from "./data";

export function SiteChrome({ children }: { children: ReactNode }) {
  const pathname = useRouterState({ select: (state) => state.location.pathname });
  const [open, setOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 24);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);
  useEffect(() => { setOpen(false); window.scrollTo(0, 0); }, [pathname]);

  return (
    <div className="min-h-screen overflow-x-hidden bg-background font-body text-foreground">
      <header className={`fixed inset-x-0 top-0 z-50 border-b transition-colors duration-300 ${scrolled ? "border-border bg-background/95 backdrop-blur-md" : "border-transparent bg-background/80"}`}>
        <div className="mx-auto flex h-20 max-w-screen-2xl items-center justify-between px-5 md:px-8">
          <Link to="/" aria-label="JomoLab home"><img src={logoAsset.url} alt="JomoLab" className="h-7 w-auto md:h-8" /></Link>
          <nav className="hidden items-center gap-8 text-[11px] font-semibold uppercase text-muted-foreground md:flex">
            {nav.map(([to, label]) => <Link key={to} to={to} className="nav-link" activeProps={{ className: "nav-link is-active" }}>{label}</Link>)}
            <Link to="/contact" className="border border-primary px-4 py-2.5 text-primary transition-colors hover:bg-primary hover:text-primary-foreground">Join us</Link>
          </nav>
          <button type="button" className="grid size-10 place-items-center border border-border text-foreground md:hidden" onClick={() => setOpen((value) => !value)} aria-expanded={open} aria-label={open ? "Close menu" : "Open menu"}>{open ? <X className="size-5" /> : <Menu className="size-5" />}</button>
        </div>
        {open && <nav className="grid border-t border-border bg-background px-5 py-4 text-sm font-semibold uppercase text-muted-foreground md:hidden">{[...nav, ["/contact", "Join us"] as const].map(([to, label]) => <Link key={to} to={to} className="border-b border-border py-4 last:border-0">{label}</Link>)}</nav>}
      </header>
      <main key={pathname} className="page-enter">{children}</main>
      <footer className="border-t border-border px-5 py-12 md:px-8">
        <div className="mx-auto grid max-w-screen-2xl gap-8 text-sm md:grid-cols-3 md:items-end">
          <div><img src={logoAsset.url} alt="JomoLab" className="h-7 w-auto" /><p className="mt-4 max-w-xs text-muted-foreground">Future Technology R&amp;D Confederation for a sustainable Earth.</p></div>
          <div className="font-mono text-[10px] uppercase text-muted-foreground md:text-center">Research · Ventures · 2035</div>
          <a href="mailto:team@jomolab.co" className="inline-flex items-center gap-2 text-primary md:justify-self-end">team@jomolab.co <ArrowUpRight className="size-4" /></a>
        </div>
      </footer>
    </div>
  );
}
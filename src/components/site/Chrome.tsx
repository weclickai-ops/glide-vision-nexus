import { Link, useRouterState } from "@tanstack/react-router";
import { ArrowUpRight, Menu, X } from "lucide-react";
import { useEffect, useState, type ReactNode } from "react";
import logoAsset from "../../assets/jomolab-logo.png.asset.json";
import { Button } from "../ui/button";
import { nav } from "./data";

export function SiteChrome({ children }: { children: ReactNode }) {
  const pathname = useRouterState({ select: (state) => state.location.pathname });
  const [open, setOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const [hidden, setHidden] = useState(false);

  useEffect(() => {
    let lastY = window.scrollY;
    const onScroll = () => {
      const y = window.scrollY;
      setScrolled(y > 28);
      if (y > lastY + 4 && y > 140) setHidden(true);
      else if (y < lastY - 4 || y <= 140) setHidden(false);
      lastY = y;
    };
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);
  useEffect(() => { setOpen(false); setHidden(false); window.scrollTo(0, 0); }, [pathname]);

  const home = pathname === "/";
  return (
    <div className="min-h-screen overflow-x-hidden bg-background font-body text-foreground">
      <header className={`site-header ${hidden ? "is-solid is-hidden" : home && !scrolled ? "is-overlay" : "is-solid"}`}>
        <div className="site-container flex h-[5.4rem] items-center justify-between gap-6">
          <Link to="/" aria-label="JomoLab home" className="brand-lockup">
            <img src={logoAsset.url} alt="JomoLab" className="h-8 w-auto lg:h-9" />
            <span>Global Fu-Tech R&amp;D Confederation</span>
          </Link>
          <nav className="hidden items-center gap-7 text-[10px] font-medium uppercase lg:flex">
            {nav.map(([to, label]) => <Link key={to} to={to} className="nav-link" activeProps={{ className: "nav-link is-active" }}>{label}</Link>)}
            <Link to="/contact" className="nav-cta">Join Us <ArrowUpRight className="size-3.5" /></Link>
          </nav>
          <Button type="button" variant="ghost" size="icon" className="menu-button lg:hidden" onClick={() => setOpen((value) => !value)} aria-expanded={open} aria-label={open ? "Close menu" : "Open menu"}>{open ? <X /> : <Menu />}</Button>
        </div>
        {open && <nav className="mobile-menu">{[...nav, ["/contact", "Join Us"] as const].map(([to, label], index) => <Link key={to} to={to}><span>{String(index + 1).padStart(2, "0")}</span>{label}<ArrowUpRight className="ml-auto size-4" /></Link>)}</nav>}
      </header>
      <main key={pathname} className="page-enter">{children}</main>
      <footer className="site-footer">
        <div className="site-container grid gap-14 py-16 lg:grid-cols-12 lg:py-20">
          <div className="lg:col-span-6">
            <img src={logoAsset.url} alt="JomoLab" className="footer-logo h-9 w-auto" />
            <h2 className="mt-10 max-w-lg text-3xl font-light leading-tight md:text-5xl">Future Begins Here.</h2>
            <Link to="/contact" className="footer-action mt-8 inline-flex items-center gap-3">Join The Confederation <ArrowUpRight className="size-5" /></Link>
          </div>
          <div className="grid gap-10 sm:grid-cols-2 lg:col-span-6">
            <div><p className="footer-label">Explore</p><nav className="mt-5 grid gap-3 text-sm">{nav.map(([to, label]) => <Link key={to} to={to}>{label}</Link>)}</nav></div>
            <div><p className="footer-label">Connect</p><div className="mt-5 grid gap-3 text-sm"><a href="https://jomolab.co">jomolab.co</a><a href="mailto:ratnesh@jomolab.in">ratnesh@jomolab.in</a><p className="mt-6 text-footer-muted">Global Fu-Tech R&amp;D Confederation</p></div></div>
          </div>
        </div>
        <div className="site-container flex flex-wrap justify-between gap-4 border-t border-footer-line py-6 text-[10px] uppercase text-footer-muted"><span>JomoLab®</span><span>Pioneering Tomorrow&apos;s Innovations for a Sustainable Earth</span></div>
      </footer>
    </div>
  );
}
import { useEffect, useRef, useState, type CSSProperties, type ReactNode } from "react";

export function Reveal({ children, className = "", delay = 0, as: Tag = "div" }: { children: ReactNode; className?: string; delay?: number; as?: "div" | "section" | "article" | "li" }) {
  const ref = useRef<HTMLElement | null>(null);
  const [shown, setShown] = useState(false);
  useEffect(() => {
    const el = ref.current;
    if (!el) return;
    const io = new IntersectionObserver(([entry]) => {
      if (entry?.isIntersecting) { setShown(true); io.disconnect(); }
    }, { threshold: 0.12 });
    io.observe(el);
    return () => io.disconnect();
  }, []);
  const Comp = Tag as "div";
  return <Comp ref={ref as never} className={`reveal ${shown ? "is-in" : ""} ${className}`} style={{ transitionDelay: `${delay}ms` } as CSSProperties}>{children}</Comp>;
}

export function PageHero({ label, title, copy }: { label: string; title: string; copy: string }) {
  return (
    <section className="border-b border-border px-5 pb-14 pt-32 md:px-8 md:pb-20 md:pt-40">
      <div className="mx-auto max-w-screen-2xl border-t border-foreground pt-8">
        <div className="grid gap-10 lg:grid-cols-12 lg:items-end">
          <div className="lg:col-span-8">
            <p className="section-label reveal-up">{label}</p>
            <h1 className="reveal-up max-w-5xl font-display text-[clamp(2.8rem,6vw,6rem)] font-normal leading-[1.02] text-foreground">{title}</h1>
          </div>
          <p className="reveal-up max-w-md border-l border-border pl-5 text-base leading-7 text-muted-foreground lg:col-span-4">{copy}</p>
        </div>
      </div>
    </section>
  );
}

export function ResearchDiagram({ index = 0, className = "" }: { index?: number; className?: string }) {
  const variant = index % 4;
  return (
    <svg className={`h-full w-full text-border ${className}`} viewBox="0 0 100 100" fill="none" aria-hidden="true">
      {variant === 0 && <><path d="M10 10L90 90M90 10L10 90" stroke="currentColor" strokeWidth=".55" /><circle cx="50" cy="50" r="30" stroke="currentColor" strokeWidth=".55" /><rect x="20" y="20" width="60" height="60" stroke="currentColor" strokeWidth=".55" /></>}
      {variant === 1 && <><path d="M0 42Q25 8 50 42T100 42M0 52Q25 18 50 52T100 52M0 62Q25 28 50 62T100 62" stroke="currentColor" strokeWidth=".55" /><line x1="50" y1="8" x2="50" y2="92" stroke="currentColor" strokeWidth=".4" /></>}
      {variant === 2 && <><path d="M50 10L85 30V70L50 90L15 70V30L50 10Z" stroke="currentColor" strokeWidth=".55" /><path d="M50 10V50M85 30L50 50M85 70L50 50M50 90V50M15 70L50 50M15 30L50 50" stroke="currentColor" strokeWidth=".55" /><circle cx="50" cy="50" r="5" stroke="currentColor" strokeWidth=".55" /></>}
      {variant === 3 && <><circle cx="50" cy="50" r="10" stroke="currentColor" strokeWidth=".55" /><circle cx="50" cy="50" r="22" stroke="currentColor" strokeWidth=".55" /><circle cx="50" cy="50" r="34" stroke="currentColor" strokeWidth=".55" /><line x1="8" y1="50" x2="92" y2="50" stroke="currentColor" strokeWidth=".4" /></>}
    </svg>
  );
}

export function ResearchTrace({ className = "" }: { className?: string }) {
  return (
    <svg className={`research-trace pointer-events-none absolute ${className}`} viewBox="0 0 620 280" fill="none" aria-hidden="true">
      <path className="trace-base" d="M14 196C84 195 99 126 167 126C235 126 253 206 321 206C389 206 414 72 484 72C537 72 566 122 607 122" />
      <path className="trace-live" pathLength="1" d="M14 196C84 195 99 126 167 126C235 126 253 206 321 206C389 206 414 72 484 72C537 72 566 122 607 122" />
      {[['14','196'],['167','126'],['321','206'],['484','72'],['607','122']].map(([cx, cy], index) => <circle key={index} cx={cx} cy={cy} r="4" className="trace-node" style={{ animationDelay: `${index * 360}ms` }} />)}
      <line x1="14" y1="244" x2="607" y2="244" className="trace-axis" />
      <text x="14" y="266">OBSERVE</text><text x="273" y="266">TEST</text><text x="550" y="266">APPLY</text>
    </svg>
  );
}
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
    <section className="relative overflow-hidden border-b border-border px-5 pb-16 pt-36 md:px-8 md:pb-24 md:pt-44">
      <div className="editorial-grid absolute inset-0 opacity-25" aria-hidden="true" />
      <ResearchTrace className="right-[4%] top-[18%] hidden w-[34%] md:block" />
      <div className="relative mx-auto grid max-w-screen-2xl gap-10 lg:grid-cols-12">
        <div className="lg:col-span-3"><p className="section-label reveal-up">{label}</p></div>
        <div className="lg:col-span-8">
          <h1 className="reveal-up max-w-5xl font-display text-[clamp(3rem,7vw,7rem)] font-medium leading-[0.98] text-foreground">{title}</h1>
          <p className="reveal-up mt-8 max-w-2xl text-base leading-8 text-muted-foreground md:text-lg">{copy}</p>
        </div>
      </div>
    </section>
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
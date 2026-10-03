import { useEffect, useRef, useState, type CSSProperties, type ReactNode } from "react";

export function Reveal({ children, className = "", delay = 0, as: Tag = "div" }: { children: ReactNode; className?: string; delay?: number; as?: "div" | "section" | "article" | "li" }) {
  const ref = useRef<HTMLElement | null>(null);
  const [shown, setShown] = useState(false);

  useEffect(() => {
    const element = ref.current;
    if (!element) return;
    const observer = new IntersectionObserver(([entry]) => {
      if (entry?.isIntersecting) {
        setShown(true);
        observer.disconnect();
      }
    }, { threshold: 0.1, rootMargin: "0px 0px -5%" });
    observer.observe(element);
    return () => observer.disconnect();
  }, []);

  const Component = Tag as "div";
  return <Component ref={ref as never} className={`reveal ${shown ? "is-in" : ""} ${className}`} style={{ transitionDelay: `${delay}ms` } as CSSProperties}>{children}</Component>;
}

export function PageHero({ label, title, copy }: { label?: string; title: ReactNode; copy?: string }) {
  return (
    <section className="inner-hero">
      <div className="inner-hero-orbit" aria-hidden="true"><ResearchDiagram index={3} /></div>
      <div className="site-container relative z-10 grid gap-10 pb-16 pt-36 md:pb-24 md:pt-44 lg:grid-cols-12 lg:items-end">
        <div className={copy ? "lg:col-span-8" : "lg:col-span-12"}>
          {label && <p className="section-label reveal-up">{label}</p>}
          <h1 className="reveal-up display-title max-w-5xl lg:max-w-none">{title}</h1>
        </div>
        {copy && <p className="reveal-up max-w-md text-base leading-7 text-muted-foreground lg:col-span-4 lg:border-l lg:border-border lg:pl-7">{copy}</p>}
      </div>
    </section>
  );
}

export function SectionHeading({ eyebrow, title, action }: { eyebrow: string; title: ReactNode; action?: ReactNode }) {
  return <div className="section-heading"><div>{eyebrow && <p className="section-label">{eyebrow}</p>}<h2 className="section-title">{title}</h2></div>{action}</div>;
}

export function ResearchDiagram({ index = 0, className = "" }: { index?: number; className?: string }) {
  const variant = index % 4;
  return (
    <svg className={`h-full w-full ${className}`} viewBox="0 0 100 100" fill="none" aria-hidden="true">
      {variant === 0 && <><path d="M10 10L90 90M90 10L10 90" stroke="currentColor" strokeWidth=".55" /><circle cx="50" cy="50" r="30" stroke="currentColor" strokeWidth=".55" /><rect x="20" y="20" width="60" height="60" rx="16" stroke="currentColor" strokeWidth=".55" /></>}
      {variant === 1 && <><path d="M0 42Q25 8 50 42T100 42M0 52Q25 18 50 52T100 52M0 62Q25 28 50 62T100 62" stroke="currentColor" strokeWidth=".55" /><line x1="50" y1="8" x2="50" y2="92" stroke="currentColor" strokeWidth=".4" /></>}
      {variant === 2 && <><path d="M50 10L85 30V70L50 90L15 70V30L50 10Z" stroke="currentColor" strokeWidth=".55" /><path d="M50 10V50M85 30L50 50M85 70L50 50M50 90V50M15 70L50 50M15 30L50 50" stroke="currentColor" strokeWidth=".55" /><circle cx="50" cy="50" r="5" stroke="currentColor" strokeWidth=".55" /></>}
      {variant === 3 && <><circle cx="50" cy="50" r="10" stroke="currentColor" strokeWidth=".55" /><circle cx="50" cy="50" r="22" stroke="currentColor" strokeWidth=".55" /><circle cx="50" cy="50" r="34" stroke="currentColor" strokeWidth=".55" /><line x1="8" y1="50" x2="92" y2="50" stroke="currentColor" strokeWidth=".4" /></>}
    </svg>
  );
}
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
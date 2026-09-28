import { useEffect, useRef, useState, type ReactNode, type CSSProperties } from "react";

/** Reveals children when scrolled into view. */
export function Reveal({ children, className = "", delay = 0, as: Tag = "div" }: { children: ReactNode; className?: string; delay?: number; as?: "div" | "section" | "article" | "li" }) {
  const ref = useRef<HTMLElement | null>(null);
  const [shown, setShown] = useState(false);
  useEffect(() => {
    const el = ref.current;
    if (!el) return;
    const io = new IntersectionObserver(([e]) => { if (e?.isIntersecting) { setShown(true); io.disconnect(); } }, { threshold: 0.15 });
    io.observe(el);
    return () => io.disconnect();
  }, []);
  const Comp = Tag as "div";
  return (
    <Comp ref={ref as never} className={`reveal ${shown ? "is-in" : ""} ${className}`} style={{ transitionDelay: `${delay}ms` } as CSSProperties}>
      {children}
    </Comp>
  );
}

/** Splits a headline into letters that rise in sequence. */
export function SplitText({ text, className = "", start = 0 }: { text: string; className?: string; start?: number }) {
  let i = 0;
  return (
    <span aria-label={text}>
      {text.split(" ").map((word, w) => (
        <span key={w} className="inline-block whitespace-nowrap" aria-hidden="true">
          {word.split("").map((ch) => {
            const d = start + i++ * 28;
            return <span key={i} className={`split-char ${className}`} style={{ animationDelay: `${d}ms` }}>{ch}</span>;
          })}
          {"\u00A0"}
        </span>
      ))}
    </span>
  );
}

/** Animated number counter. */
export function Counter({ to, suffix = "" }: { to: number; suffix?: string }) {
  const ref = useRef<HTMLSpanElement>(null);
  const [val, setVal] = useState(0);
  useEffect(() => {
    const el = ref.current;
    if (!el) return;
    const io = new IntersectionObserver(([e]) => {
      if (!e?.isIntersecting) return;
      io.disconnect();
      const t0 = performance.now();
      const tick = (t: number) => {
        const p = Math.min(1, (t - t0) / 1600);
        setVal(Math.round(to * (1 - Math.pow(1 - p, 3))));
        if (p < 1) requestAnimationFrame(tick);
      };
      requestAnimationFrame(tick);
    });
    io.observe(el);
    return () => io.disconnect();
  }, [to]);
  return <span ref={ref}>{val}{suffix}</span>;
}

/** 3D tilt card following the pointer. */
export function Tilt({ children, className = "" }: { children: ReactNode; className?: string }) {
  const ref = useRef<HTMLDivElement>(null);
  const move = (e: React.PointerEvent) => {
    const el = ref.current!;
    const r = el.getBoundingClientRect();
    const x = (e.clientX - r.left) / r.width - 0.5;
    const y = (e.clientY - r.top) / r.height - 0.5;
    el.style.transform = `perspective(900px) rotateX(${-y * 10}deg) rotateY(${x * 10}deg)`;
    el.style.setProperty("--mx", `${(x + 0.5) * 100}%`);
    el.style.setProperty("--my", `${(y + 0.5) * 100}%`);
  };
  const leave = () => { if (ref.current) ref.current.style.transform = ""; };
  return <div ref={ref} onPointerMove={move} onPointerLeave={leave} className={`tilt ${className}`}>{children}</div>;
}

export function Marquee({ items }: { items: string[] }) {
  const row = [...items, ...items];
  return (
    <div className="marquee border-y border-border py-6" aria-hidden="true">
      <div className="marquee-track">
        {row.map((t, i) => (
          <span key={i} className="mx-8 inline-flex items-center gap-8 font-display text-3xl font-bold uppercase text-foreground/80 md:text-5xl">
            {t}<span className="size-2 rotate-45 bg-primary" />
          </span>
        ))}
      </div>
    </div>
  );
}

/** Interactive constellation network drawn on canvas. */
export function ParticleField({ className = "" }: { className?: string }) {
  const ref = useRef<HTMLCanvasElement>(null);
  useEffect(() => {
    const canvas = ref.current!;
    const ctx = canvas.getContext("2d")!;
    const styles = getComputedStyle(document.documentElement);
    const color = styles.getPropertyValue("--primary").trim() || "teal";
    const accent = styles.getPropertyValue("--accent").trim() || "white";
    let w = 0, h = 0, raf = 0;
    const mouse = { x: -999, y: -999 };
    const dpr = Math.min(2, window.devicePixelRatio || 1);
    type P = { x: number; y: number; vx: number; vy: number };
    let pts: P[] = [];
    const resize = () => {
      w = canvas.clientWidth; h = canvas.clientHeight;
      canvas.width = w * dpr; canvas.height = h * dpr;
      ctx.setTransform(dpr, 0, 0, dpr, 0, 0);
      const n = Math.min(110, Math.floor((w * h) / 14000));
      pts = Array.from({ length: n }, () => ({ x: Math.random() * w, y: Math.random() * h, vx: (Math.random() - 0.5) * 0.4, vy: (Math.random() - 0.5) * 0.4 }));
    };
    const onMove = (e: PointerEvent) => { const r = canvas.getBoundingClientRect(); mouse.x = e.clientX - r.left; mouse.y = e.clientY - r.top; };
    const draw = () => {
      ctx.clearRect(0, 0, w, h);
      for (const p of pts) {
        p.x += p.vx; p.y += p.vy;
        if (p.x < 0 || p.x > w) p.vx *= -1;
        if (p.y < 0 || p.y > h) p.vy *= -1;
        const dx = p.x - mouse.x, dy = p.y - mouse.y, d = Math.hypot(dx, dy);
        if (d < 120) { p.x += dx / d; p.y += dy / d; }
      }
      for (let i = 0; i < pts.length; i++) {
        for (let j = i + 1; j < pts.length; j++) {
          const a = pts[i]!, b = pts[j]!, d = Math.hypot(a.x - b.x, a.y - b.y);
          if (d < 130) {
            ctx.globalAlpha = (1 - d / 130) * 0.5;
            ctx.strokeStyle = color; ctx.lineWidth = 0.6;
            ctx.beginPath(); ctx.moveTo(a.x, a.y); ctx.lineTo(b.x, b.y); ctx.stroke();
          }
        }
      }
      ctx.globalAlpha = 1;
      for (const p of pts) { ctx.fillStyle = accent; ctx.fillRect(p.x - 1, p.y - 1, 2, 2); }
      raf = requestAnimationFrame(draw);
    };
    resize();
    const reduce = window.matchMedia("(prefers-reduced-motion: reduce)").matches;
    if (reduce) { draw(); cancelAnimationFrame(raf); } else draw();
    window.addEventListener("resize", resize);
    window.addEventListener("pointermove", onMove);
    return () => { cancelAnimationFrame(raf); window.removeEventListener("resize", resize); window.removeEventListener("pointermove", onMove); };
  }, []);
  return <canvas ref={ref} className={`pointer-events-none absolute inset-0 h-full w-full ${className}`} aria-hidden="true" />;
}

/** Concentric rotating orbital rings. */
export function OrbitRings({ className = "" }: { className?: string }) {
  return (
    <div className={`pointer-events-none absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2 ${className}`} aria-hidden="true">
      <div className="ring-spin absolute inset-0 rounded-full border border-primary/20"><span className="absolute -top-1 left-1/2 size-2 -translate-x-1/2 rounded-full bg-accent shadow-signal" /></div>
      <div className="ring-spin-rev absolute inset-[14%] rounded-full border border-dashed border-primary/25"><span className="absolute -bottom-1 left-1/2 size-1.5 -translate-x-1/2 rounded-full bg-primary" /></div>
      <div className="ring-spin absolute inset-[30%] rounded-full border border-primary/15 [animation-duration:18s]" />
      <div className="ring-pulse absolute inset-[42%] rounded-full bg-primary/10 blur-2xl" />
    </div>
  );
}

export function PageHero({ label, title, copy }: { label: string; title: string; copy: string }) {
  return (
    <section className="relative flex min-h-[70svh] items-end overflow-hidden border-b border-border px-5 pb-20 pt-36 md:px-8">
      <div className="hero-grid absolute inset-0 opacity-60" aria-hidden="true" />
      <ParticleField className="opacity-70" />
      <OrbitRings className="size-[min(90vw,640px)] left-[80%]" />
      <div className="planet absolute right-[8%] top-[22%] hidden size-40 md:block" aria-hidden="true"><div className="planet-ring" /></div>
      <div className="relative z-10 mx-auto w-full max-w-screen-2xl">
        <p className="section-label reveal-up">{label}</p>
        <h1 className="font-display text-[clamp(3rem,8vw,8rem)] font-bold leading-[0.9]"><SplitText text={title} /></h1>
        <p className="reveal-up delay-2 mt-8 max-w-2xl text-lg leading-relaxed text-muted-foreground">{copy}</p>
      </div>
    </section>
  );
}

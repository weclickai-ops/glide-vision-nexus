import { useEffect, useRef, useState } from "react";
import astronaut from "../../assets/astronaut.png";

/** Custom cursor: dot + trailing ring that stretches with scroll speed and reacts to links. */
export function SpaceCursor() {
  const dot = useRef<HTMLDivElement>(null);
  const ring = useRef<HTMLDivElement>(null);
  const label = useRef<HTMLSpanElement>(null);
  useEffect(() => {
    if (!window.matchMedia("(pointer: fine)").matches) return;
    document.documentElement.classList.add("has-space-cursor");
    const m = { x: innerWidth / 2, y: innerHeight / 2 }, r = { ...m };
    let vel = 0, lastY = scrollY, hover = false, scrolling = 0, raf = 0;
    const move = (e: PointerEvent) => {
      m.x = e.clientX; m.y = e.clientY;
      hover = !!(e.target as HTMLElement).closest("a,button");
    };
    const loop = () => {
      const dy = scrollY - lastY; lastY = scrollY;
      vel += (dy - vel) * 0.2;
      if (Math.abs(dy) > 0.5) scrolling = 30; else if (scrolling > 0) scrolling--;
      r.x += (m.x - r.x) * 0.15; r.y += (m.y - r.y) * 0.15;
      const stretch = Math.min(2.2, 1 + Math.abs(vel) / 25);
      const scale = hover ? 1.8 : 1;
      if (dot.current) dot.current.style.transform = `translate(${m.x}px, ${m.y}px)`;
      if (ring.current) {
        ring.current.style.transform = `translate(${r.x}px, ${r.y}px) scale(${scale / Math.sqrt(stretch)}, ${scale * stretch}) rotate(${vel * 0.3}deg)`;
        ring.current.classList.toggle("is-hover", hover);
      }
      if (label.current) label.current.style.opacity = scrolling > 0 && !hover ? "1" : "0";
      if (label.current) label.current.style.transform = `translate(${r.x + 28}px, ${r.y - 6}px)`;
      raf = requestAnimationFrame(loop);
    };
    window.addEventListener("pointermove", move);
    loop();
    return () => { cancelAnimationFrame(raf); window.removeEventListener("pointermove", move); document.documentElement.classList.remove("has-space-cursor"); };
  }, []);
  return (
    <div className="space-cursor" aria-hidden="true">
      <div ref={ring} className="sc-ring" />
      <div ref={dot} className="sc-dot" />
      <span ref={label} className="sc-label">{"◂ scanning"}</span>
    </div>
  );
}

/** Astronaut drifting across the viewport as you scroll, leaning toward the cursor. */
export function DriftingAstronaut() {
  const el = useRef<HTMLDivElement>(null);
  useEffect(() => {
    const m = { x: 0, y: 0 }; let raf = 0; let cur = { x: 0, y: 0 };
    const move = (e: PointerEvent) => { m.x = e.clientX / innerWidth - 0.5; m.y = e.clientY / innerHeight - 0.5; };
    const loop = (t: number) => {
      const max = document.documentElement.scrollHeight - innerHeight;
      const p = max > 0 ? scrollY / max : 0;
      cur.x += (m.x - cur.x) * 0.05; cur.y += (m.y - cur.y) * 0.05;
      const x = (0.78 - p * 0.62) * innerWidth + cur.x * 60;
      const y = innerHeight * (0.2 + Math.sin(p * Math.PI * 2) * 0.18) + Math.sin(t / 1400) * 14 + cur.y * 40;
      const rot = p * 540 + cur.x * 20;
      if (el.current) el.current.style.transform = `translate(${x}px, ${y}px) rotate(${rot}deg)`;
      raf = requestAnimationFrame(loop);
    };
    window.addEventListener("pointermove", move);
    raf = requestAnimationFrame(loop);
    return () => { cancelAnimationFrame(raf); window.removeEventListener("pointermove", move); };
  }, []);
  return (
    <div ref={el} className="drifter pointer-events-none fixed left-0 top-0 z-[2] hidden -translate-x-1/2 md:block" aria-hidden="true">
      <img src={astronaut} alt="" width={1024} height={1024} className="w-[150px] drop-shadow-[0_0_30px_var(--primary)] opacity-80" />
      <span className="tether" />
    </div>
  );
}

/** Large hero astronaut with parallax + cursor tilt. */
export function HeroAstronaut({ className = "" }: { className?: string }) {
  const el = useRef<HTMLDivElement>(null);
  useEffect(() => {
    let raf = 0; const m = { x: 0, y: 0 }, c = { x: 0, y: 0 };
    const move = (e: PointerEvent) => { m.x = e.clientX / innerWidth - 0.5; m.y = e.clientY / innerHeight - 0.5; };
    const loop = () => {
      c.x += (m.x - c.x) * 0.06; c.y += (m.y - c.y) * 0.06;
      if (el.current) el.current.style.transform = `translate3d(${c.x * -40}px, ${scrollY * 0.35 + c.y * -30}px, 0) rotate(${c.x * 12 - scrollY * 0.03}deg)`;
      raf = requestAnimationFrame(loop);
    };
    window.addEventListener("pointermove", move); loop();
    return () => { cancelAnimationFrame(raf); window.removeEventListener("pointermove", move); };
  }, []);
  return (
    <div ref={el} className={`pointer-events-none absolute ${className}`} aria-hidden="true">
      <img src={astronaut} alt="" width={1024} height={1024} className="float-y w-full drop-shadow-[0_0_60px_var(--primary)]" />
    </div>
  );
}

const lines = [
  "> problem.detect('climate · health · cities')",
  "> ai.model.train(dataset: 'planet-scale')",
  "> generating 1,248 solution paths…",
  "> simulating 2035 outcomes ████████ 100%",
  "> product.deploy('for humanity') ✓",
];

/** Terminal that types out an AI problem-solving sequence. */
export function AITerminal() {
  const ref = useRef<HTMLDivElement>(null);
  const [text, setText] = useState<string[]>([""]);
  useEffect(() => {
    let started = false, timer = 0;
    const io = new IntersectionObserver(([e]) => {
      if (!e?.isIntersecting || started) return; started = true;
      let li = 0, ci = 0; const out: string[] = [""];
      const tick = () => {
        const line = lines[li]!;
        out[li] = line.slice(0, ++ci); setText([...out]);
        if (ci >= line.length) { li++; ci = 0; if (li >= lines.length) { li = 0; out.length = 0; timer = window.setTimeout(tick, 2200); out.push(""); return; } out.push(""); timer = window.setTimeout(tick, 350); return; }
        timer = window.setTimeout(tick, 28);
      };
      tick();
    });
    if (ref.current) io.observe(ref.current);
    return () => { io.disconnect(); clearTimeout(timer); };
  }, []);
  return (
    <div ref={ref} className="glass-card overflow-hidden font-mono text-xs md:text-sm">
      <div className="flex items-center gap-2 border-b border-border px-4 py-3">
        <span className="size-2 rounded-full bg-primary" /><span className="size-2 rounded-full bg-primary/50" /><span className="size-2 rounded-full bg-primary/25" />
        <span className="ml-3 text-[10px] uppercase tracking-[0.2em] text-muted-foreground">jomolab.ai — core</span>
      </div>
      <div className="min-h-[220px] space-y-2 p-6 text-accent">
        {text.map((t, i) => <p key={i}>{t}{i === text.length - 1 && <span className="caret">▍</span>}</p>)}
      </div>
    </div>
  );
}

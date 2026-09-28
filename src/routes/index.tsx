import { createFileRoute } from "@tanstack/react-router";
import { ArrowDown, ArrowUpRight, Menu, X } from "lucide-react";
import { useEffect, useState } from "react";
import orbitalResearch from "../assets/orbital-research.jpg";
import logoAsset from "../assets/jomolab-logo.png.asset.json";

export const Route = createFileRoute("/")({
  head: () => ({
    meta: [
      { title: "JomoLab® | Future Technology R&D Confederation" },
      {
        name: "description",
        content:
          "JomoLab unites entrepreneurs, scientists, researchers, and industry leaders to build future technologies for 2035 and beyond.",
      },
      { property: "og:title", content: "JomoLab® | Future Technology R&D Confederation" },
      {
        property: "og:description",
        content: "Pioneering tomorrow's innovations for a sustainable Earth.",
      },
      { property: "og:type", content: "website" },
      { name: "twitter:card", content: "summary_large_image" },
    ],
  }),
  component: Index,
});

const domains = [
  ["01", "Artificial Intelligence", "Intelligence systems that help organizations create, decide, and scale with purpose."],
  ["02", "Extended Reality", "Immersive environments for learning, training, entertainment, and new human experiences."],
  ["03", "Sustainable Systems", "Climate, food, mobility, and infrastructure innovation designed for long-term impact."],
  ["04", "Human Futures", "Healthcare, education, biotechnology, space, and technologies that expand human potential."],
];

const ventures = [
  ["JB", "JomoBit AI", "AI-powered content creation, distribution, analytics, and digital growth."],
  ["JS", "JomoSet XR", "Next-generation immersive experiences, training environments, and XR applications."],
  ["ES", "ESG Advocacy", "Technology and strategic storytelling for measurable environmental and social impact."],
  ["FS", "Global Fu-Tech Summit", "Where innovators, researchers, policymakers, and investors shape the world of 2035."],
  ["DD", "Dazzel Digital", "AI-first growth and digital transformation for organizations building what comes next."],
];

const advisors = [
  ["Vinay Singhal", "Co-Founder & CEO, STAGE OTT"],
  ["Ankur Dinesh Garg", "AI Advisor · IIT Bombay · Founder, Hotify AI"],
  ["Senthil Narasimhan", "Global Program Manager, Cognizant Switzerland"],
  ["Dinesh Murlidharan", "Strategic Advisor, UAE Trade Commission"],
];

function Index() {
  const [menuOpen, setMenuOpen] = useState(false);
  const [progress, setProgress] = useState(0);

  useEffect(() => {
    const updateProgress = () => {
      const available = document.documentElement.scrollHeight - window.innerHeight;
      setProgress(available > 0 ? window.scrollY / available : 0);
    };
    updateProgress();
    window.addEventListener("scroll", updateProgress, { passive: true });
    return () => window.removeEventListener("scroll", updateProgress);
  }, []);

  const closeMenu = () => setMenuOpen(false);

  return (
    <main className="min-h-screen overflow-x-hidden bg-background font-body text-foreground selection:bg-primary selection:text-background">
      <div className="scanline" aria-hidden="true" />
      <div className="fixed left-0 top-0 z-[60] h-px bg-accent shadow-signal transition-[width] duration-150" style={{ width: `${progress * 100}%` }} />

      <header className="fixed inset-x-0 top-0 z-50 border-b border-border bg-background/80 backdrop-blur-xl">
        <div className="mx-auto flex h-18 max-w-screen-2xl items-center justify-between px-5 md:px-8">
          <a href="#top" aria-label="JomoLab home" className="block">
            <img src={logoAsset.url} alt="JomoLab" className="h-7 w-auto md:h-8" />
          </a>
          <nav className="hidden items-center gap-8 text-[11px] font-medium uppercase tracking-[0.18em] text-muted-foreground md:flex">
            <a href="#philosophy" className="transition-colors hover:text-accent">Philosophy</a>
            <a href="#domains" className="transition-colors hover:text-accent">Domains</a>
            <a href="#ecosystem" className="transition-colors hover:text-accent">Ecosystem</a>
            <a href="#leadership" className="transition-colors hover:text-accent">Leadership</a>
            <a href="#contact" className="border border-primary bg-primary px-4 py-2 text-background transition-colors hover:bg-accent">Join the mission</a>
          </nav>
          <button type="button" className="grid size-10 place-items-center border border-border text-accent md:hidden" onClick={() => setMenuOpen((open) => !open)} aria-expanded={menuOpen} aria-label={menuOpen ? "Close menu" : "Open menu"}>
            {menuOpen ? <X className="size-5" /> : <Menu className="size-5" />}
          </button>
        </div>
        {menuOpen && (
          <nav className="grid border-t border-border bg-background px-5 py-5 text-sm uppercase tracking-[0.16em] md:hidden">
            {[["Philosophy", "#philosophy"], ["Domains", "#domains"], ["Ecosystem", "#ecosystem"], ["Leadership", "#leadership"], ["Join the mission", "#contact"]].map(([label, href]) => (
              <a key={href} href={href} onClick={closeMenu} className="border-b border-border py-4 text-muted-foreground last:border-0 hover:text-accent">{label}</a>
            ))}
          </nav>
        )}
      </header>

      <section id="top" className="relative flex min-h-[92svh] items-center justify-center overflow-hidden border-b border-border px-5 pb-24 pt-28">
        <div className="hero-grid absolute inset-0 opacity-50" aria-hidden="true" />
        <div className="orbital-rig absolute left-1/2 top-1/2 size-[min(92vw,820px)] -translate-x-1/2 -translate-y-1/2 rounded-full border border-primary/15" aria-hidden="true">
          <div className="orbit-dot absolute -top-1 left-1/2 size-2 rounded-full bg-accent shadow-signal" />
          <div className="absolute inset-[16%] rounded-full border border-primary/10" />
          <div className="absolute inset-[34%] rounded-full border border-primary/15" />
          <div className="absolute left-1/2 top-0 h-full w-px bg-primary/10" />
          <div className="absolute left-0 top-1/2 h-px w-full bg-primary/10" />
        </div>
        <div className="relative z-10 mx-auto max-w-5xl text-center">
          <p className="reveal-up mb-7 inline-flex border border-primary/30 bg-background/70 px-3 py-1.5 text-[10px] font-medium uppercase tracking-[0.28em] text-accent">
            Future Technology · R&amp;D Confederation
          </p>
          <h1 className="reveal-up delay-1 font-display text-[clamp(3.25rem,8vw,7.8rem)] font-bold leading-[0.88] tracking-normal">
            The future is built by <span className="text-primary">visionaries.</span>
          </h1>
          <p className="reveal-up delay-2 mx-auto mt-8 max-w-2xl text-base leading-relaxed text-muted-foreground md:text-xl">
            JomoLab unites entrepreneurs, scientists, researchers, and industry leaders to create technologies for 2035 and beyond.
          </p>
        </div>
        <a href="#philosophy" aria-label="Explore JomoLab" className="absolute bottom-7 left-1/2 z-10 flex -translate-x-1/2 flex-col items-center gap-3 text-[9px] uppercase tracking-[0.3em] text-primary/70">
          <ArrowDown className="size-4 animate-bounce" /><span>Initiate scan</span>
        </a>
      </section>

      <section id="philosophy" className="border-b border-border px-5 py-24 md:px-8 md:py-36">
        <div className="mx-auto grid max-w-screen-2xl items-center gap-16 lg:grid-cols-2 lg:gap-24">
          <div>
            <p className="section-label">[ 01 / Philosophy ]</p>
            <h2 className="section-title">From FOMO<br />to JOMO</h2>
            <p className="mt-8 max-w-xl text-lg leading-relaxed text-muted-foreground">The modern world is driven by fear, distraction, and information overload. JOMO represents clarity, purpose, and meaningful innovation.</p>
            <p className="mt-6 max-w-xl leading-relaxed text-foreground/85">We believe technology should simplify life, empower people, and create sustainable progress—not more digital chaos.</p>
          </div>
          <figure className="relative">
            <div className="absolute -left-3 -top-3 size-10 border-l border-t border-accent" />
            <img src={orbitalResearch} alt="Technical orbital visualization representing purposeful future research" loading="lazy" width={1600} height={1200} className="aspect-[4/3] w-full border border-border object-cover grayscale-[20%]" />
            <figcaption className="absolute bottom-4 left-4 border border-border bg-background/80 px-3 py-2 font-mono text-[9px] uppercase tracking-[0.15em] text-primary backdrop-blur">Research geometry / JOMO-2035</figcaption>
            <div className="absolute -bottom-3 -right-3 size-10 border-b border-r border-accent" />
          </figure>
        </div>
      </section>

      <section id="domains" className="border-b border-border bg-primary/[0.018] px-5 py-24 md:px-8 md:py-36">
        <div className="mx-auto max-w-screen-2xl">
          <div className="mb-14 flex items-end justify-between gap-8">
            <div><p className="section-label">[ 02 / R&amp;D Core ]</p><h2 className="section-title">Fu-Tech Domains</h2></div>
            <p className="hidden font-mono text-[9px] uppercase tracking-[0.16em] text-primary/60 md:block">Horizon 2035 · System active</p>
          </div>
          <div className="grid border border-border sm:grid-cols-2 lg:grid-cols-4">
            {domains.map(([id, title, copy]) => (
              <article key={id} className="domain-cell group border-b border-border p-7 sm:border-r lg:border-b-0 lg:p-9">
                <span className="font-mono text-xs text-primary">DMN-{id}</span>
                <h3 className="mt-16 min-h-16 font-display text-2xl font-bold">{title}</h3>
                <p className="mt-5 text-sm leading-relaxed text-muted-foreground">{copy}</p>
                <div className="mt-10 h-px w-10 bg-primary transition-all duration-500 group-hover:w-full group-hover:bg-accent" />
              </article>
            ))}
          </div>
          <p className="mt-8 max-w-3xl text-sm leading-relaxed text-muted-foreground">Our wider horizon spans smart cities, finance, consumer technology, sustainable food, mobility, climate innovation, and human enhancement.</p>
        </div>
      </section>

      <section className="border-b border-border px-5 py-24 md:px-8 md:py-36">
        <div className="mx-auto grid max-w-screen-2xl gap-14 lg:grid-cols-[0.8fr_1.2fr]">
          <div><p className="section-label">[ Vision / 2035 ]</p><h2 className="section-title">Building the future together.</h2></div>
          <div className="grid gap-px bg-border sm:grid-cols-2">
            {["Build globally impactful ventures", "Foster world-class research", "Advance sustainable innovation", "Bridge ideas and implementation"].map((item, index) => (
              <div key={item} className="bg-background p-7"><span className="font-mono text-xs text-primary">0{index + 1}</span><p className="mt-8 font-display text-xl font-medium">{item}</p></div>
            ))}
          </div>
        </div>
      </section>

      <section id="ecosystem" className="border-b border-border px-5 py-24 md:px-8 md:py-36">
        <div className="mx-auto max-w-screen-2xl">
          <p className="section-label">[ 03 / Ecosystem ]</p><h2 className="section-title mb-14">Ideas into impact.</h2>
          <div className="divide-y divide-border border-y border-border">
            {ventures.map(([code, name, copy], index) => (
              <article key={name} className="venture-row group grid gap-5 py-7 md:grid-cols-[64px_0.55fr_1fr_32px] md:items-center">
                <div className="grid size-12 place-items-center border border-primary/30 font-display font-bold text-primary transition-colors group-hover:bg-primary group-hover:text-background">{code}</div>
                <h3 className="font-display text-xl font-bold md:text-2xl">{name}</h3>
                <p className="max-w-2xl text-sm leading-relaxed text-muted-foreground">{copy}</p>
                <span className="font-mono text-xs text-primary/60">0{index + 1}</span>
              </article>
            ))}
          </div>
        </div>
      </section>

      <section id="leadership" className="border-b border-border px-5 py-24 md:px-8 md:py-36">
        <div className="mx-auto max-w-screen-2xl">
          <div className="grid gap-14 lg:grid-cols-2 lg:gap-24">
            <div>
              <p className="section-label">[ 04 / Leadership ]</p>
              <h2 className="section-title">Extraordinary minds. Shared vision.</h2>
              <blockquote className="mt-10 border-l border-primary pl-6 text-lg leading-relaxed text-muted-foreground">“Technology should not only make life smarter—it should make life better.”</blockquote>
              <p className="mt-5 font-display font-bold">Ratnesh Dwivedi</p><p className="mt-1 text-sm text-primary">Chief Thinker, JomoLab®</p>
            </div>
            <div>
              <p className="mb-8 text-[10px] uppercase tracking-[0.24em] text-primary">Selected advisory board</p>
              <div className="divide-y divide-border border-y border-border">
                {advisors.map(([name, role], index) => (
                  <div key={name} className="grid grid-cols-[40px_1fr] gap-5 py-6"><span className="font-mono text-xs text-primary/60">A{index + 1}</span><div><h3 className="font-display text-lg font-bold">{name}</h3><p className="mt-1 text-sm text-muted-foreground">{role}</p></div></div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>

      <footer id="contact" className="relative overflow-hidden bg-primary px-5 py-24 text-background md:px-8 md:py-36">
        <div className="footer-grid absolute inset-0 opacity-20" aria-hidden="true" />
        <div className="relative mx-auto max-w-screen-2xl text-center">
          <p className="mb-7 text-[10px] font-medium uppercase tracking-[0.28em]">Confederation channel open</p>
          <h2 className="font-display text-[clamp(3rem,7vw,7rem)] font-bold leading-[0.92] tracking-normal">Architect the<br />next decade.</h2>
          <p className="mx-auto mt-8 max-w-2xl text-lg text-background/75">Entrepreneurs, researchers, scientists, investors, leaders, and innovators—the future has a place for you.</p>
          <a href="mailto:team@jomolab.co" className="group mt-12 inline-flex items-center gap-4 bg-background px-7 py-4 font-display font-bold text-primary transition-colors hover:bg-accent hover:text-background">Join the confederation <ArrowUpRight className="size-5 transition-transform group-hover:-translate-y-1 group-hover:translate-x-1" /></a>
          <div className="mt-24 flex flex-col items-center justify-between gap-6 border-t border-background/20 pt-8 text-[10px] uppercase tracking-[0.16em] text-background/65 md:flex-row">
            <span>JomoLab® · Future Technology R&amp;D</span><a href="mailto:team@jomolab.co" className="hover:text-background">team@jomolab.co</a><span>© 2026 JomoLab</span>
          </div>
        </div>
      </footer>
    </main>
  );
}
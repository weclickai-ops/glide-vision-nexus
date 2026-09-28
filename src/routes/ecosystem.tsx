import { createFileRoute } from "@tanstack/react-router";
import { PageHero, Reveal, Tilt } from "../components/site/motion";
import { ventures } from "../components/site/data";
import { CtaBand } from "../components/site/CtaBand";

export const Route = createFileRoute("/ecosystem")({
  head: () => ({
    meta: [
      { title: "Ecosystem & Ventures | JomoLab®" },
      { name: "description", content: "JomoBit AI, JomoSet XR, ESG Advocacy, Global Fu-Tech Summit, and Dazzel Digital — the JomoLab ecosystem." },
      { property: "og:title", content: "Ecosystem & Ventures | JomoLab®" },
      { property: "og:description", content: "Turning ideas into impact across AI, XR, ESG, and digital growth." },
      { property: "og:type", content: "website" },
      { name: "twitter:card", content: "summary_large_image" },
    ],
  }),
  component: Ecosystem,
});

function Ecosystem() {
  return (
    <>
      <PageHero label="[ 03 / Ecosystem ]" title="Ideas into impact." copy="A connected family of ventures turning research into products, platforms, and global conversations." />
      <section className="px-5 py-24 md:px-8 md:py-32">
        <div className="mx-auto grid max-w-screen-2xl gap-6 md:grid-cols-2 lg:grid-cols-3">
          {ventures.map(([code, name, copy], i) => (
            <Reveal key={name} delay={(i % 3) * 120} className={i === 3 ? "lg:col-span-2" : ""}>
              <Tilt className="glass-card group h-full p-9">
                <div className="grid size-14 place-items-center border border-primary/40 font-display text-lg font-bold text-primary transition-all duration-500 group-hover:rotate-[360deg] group-hover:bg-primary group-hover:text-background">{code}</div>
                <h2 className="mt-12 font-display text-3xl font-bold">{name}</h2>
                <p className="mt-4 leading-relaxed text-muted-foreground">{copy}</p>
                <span className="mt-8 block font-mono text-[10px] uppercase tracking-[0.2em] text-primary/60">Venture 0{i + 1}</span>
              </Tilt>
            </Reveal>
          ))}
        </div>
      </section>
      <CtaBand />
    </>
  );
}

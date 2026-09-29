import { createFileRoute } from "@tanstack/react-router";
import { CtaBand } from "../components/site/CtaBand";
import { PageHero, ResearchDiagram, Reveal } from "../components/site/motion";

export const Route = createFileRoute("/about")({ head: () => ({ meta: [
  { title: "About the Confederation | JomoLab®" },
  { name: "description", content: "JomoLab is a global Fu-Tech R&D Confederation building technologies that shape the next decade of human evolution." },
  { property: "og:title", content: "About the Confederation | JomoLab®" },
  { property: "og:description", content: "A research confederation built to turn purposeful inquiry into sustainable progress." },
  { property: "og:type", content: "website" }, { name: "twitter:card", content: "summary_large_image" },
] }), component: About });

const futechIncludes = [
  "Artificial Intelligence",
  "Virtual & Extended Reality",
  "Healthcare & Biotechnology",
  "Education & Learning Systems",
  "Space Technology",
  "Smart Cities",
  "Finance & Digital Currency",
  "Sustainable Food Systems",
  "Mobility & Transportation",
  "Consumer Technology",
  "Climate Innovation",
  "Human Enhancement Technologies",
];

function About() { return <>
  <PageHero label="01 / Institutional mandate" title="Clarity over noise." copy="JomoLab® is a global Fu-Tech (Future Technology) R&D Confederation bringing together entrepreneurs, scientists, researchers, innovators, and industry leaders to create technologies that shape the next decade of human evolution." />

  {/* About Us */}
  <section className="px-5 py-20 md:px-8 md:py-24"><div className="mx-auto grid max-w-screen-2xl gap-12 lg:grid-cols-12">
    <Reveal className="lg:col-span-5"><p className="section-label">About us</p><h2 className="section-title">From FOMO to JOMO.</h2></Reveal>
    <Reveal delay={80} className="lg:col-span-6 lg:col-start-7">
      <p className="text-2xl leading-[1.5] text-muted-foreground">From Artificial Intelligence and Extended Reality to Sustainability, Healthcare, Education, Space Technology, and Smart Infrastructure, we are building solutions for a better tomorrow. Founded with a vision for 2033 and beyond, JomoLab stands for a shift from FOMO (Fear of Missing Out) to JOMO (Joy of Missing Out).</p>
      <p className="mt-6 leading-7 text-muted-foreground">JOMO represents clarity, purpose, and meaningful innovation. We envision a future where technology simplifies life, empowers people, and creates sustainable progress rather than digital chaos.</p>
      <div className="mt-10 border-l-2 border-primary pl-6">
        <p className="font-display text-xl font-medium leading-8">Our mission is not merely to build products.</p>
        <p className="mt-2 font-display text-xl font-medium leading-8 text-primary">Our mission is to create technologies that improve the quality of life for future generations.</p>
      </div>
    </Reveal>
  </div></section>

  {/* What is Fu-Tech */}
  <section className="border-t border-foreground px-5 py-20 md:px-8 md:py-24"><div className="mx-auto max-w-screen-2xl">
    <Reveal className="grid gap-8 border-b border-border pb-9 lg:grid-cols-12">
      <div className="lg:col-span-5"><p className="section-label">02 / Why Fu-Tech</p><h2 className="section-title">What is Fu-Tech?</h2></div>
      <div className="lg:col-span-4 lg:col-start-8">
        <p className="font-display text-xl font-medium">Future Technology Beyond AI</p>
        <p className="mt-3 leading-7 text-muted-foreground">The future is not limited to Artificial Intelligence or Virtual Reality. True innovation requires breakthroughs across every aspect of human life.</p>
      </div>
    </Reveal>
    <div className="grid gap-12 py-14 lg:grid-cols-12">
      <Reveal className="lg:col-span-4"><div className="aspect-square border border-border bg-card p-8"><ResearchDiagram index={1} /></div><p className="mt-3 font-mono text-[9px] uppercase text-muted-foreground">Study framework / Signal to application</p></Reveal>
      <div className="lg:col-span-7 lg:col-start-6">
        <Reveal><p className="section-label">Fu-Tech includes</p></Reveal>
        <div className="mt-6 grid bg-border sm:grid-cols-2 sm:gap-px">
          {futechIncludes.map((item, index) => <Reveal key={item} delay={index * 40} className="research-card grid grid-cols-[2.5rem_1fr] items-baseline gap-4 p-5"><span className="font-mono text-xs text-primary">{String(index + 1).padStart(2, "0")}</span><p className="font-display text-lg font-medium">{item}</p></Reveal>)}
        </div>
        <Reveal delay={120} className="mt-10 max-w-2xl">
          <p className="text-xl leading-[1.55] text-muted-foreground">We believe every industry will undergo transformation before 2035.</p>
          <p className="mt-3 font-display text-xl font-medium">JomoLab exists to accelerate that transformation through research, collaboration, and innovation.</p>
        </Reveal>
      </div>
    </div>
    <Reveal className="technical-rule pt-8"><p className="section-label">Our Vision 2035</p><p className="mt-2 font-display text-2xl font-medium">Building the Future Together</p></Reveal>
  </div></section>

  <CtaBand />
</>; }

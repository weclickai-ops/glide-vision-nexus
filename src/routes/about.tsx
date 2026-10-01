// ============= Full file contents =============
import { createFileRoute } from "@tanstack/react-router";
import { PageHero, Reveal, SectionHeading } from "../components/site/motion";

export const Route = createFileRoute("/about")({ head: () => ({ meta: [
  { title: "About JomoLab® | Fu-Tech R&D Confederation" },
  { name: "description", content: "JomoLab is a global Fu-Tech R&D Confederation building technologies that shape the next decade of human evolution — from FOMO to JOMO." },
  { property: "og:title", content: "About JomoLab® | Fu-Tech R&D Confederation" },
  { property: "og:description", content: "Where extraordinary minds collaborate to solve extraordinary challenges." },
  { property: "og:type", content: "website" }, { name: "twitter:card", content: "summary_large_image" },
] }), component: About });

function About() { return <>
  <PageHero title="About Jomolab" />
  <section className="px-5 py-20 md:px-8 md:py-28"><div className="site-container">
    <Reveal><SectionHeading eyebrow="" title="About Jomolab" /></Reveal>
    <Reveal className="mt-10 max-w-4xl"><p className="text-xl leading-[1.75] text-muted-foreground">JomoLab® is a global Fu-Tech (Future Technology) R&amp;D Confederation bringing together entrepreneurs, scientists, researchers, innovators, and industry leaders to create technologies that shape the next decade of human evolution. From Artificial Intelligence and Extended Reality to Sustainability, Healthcare, Education, Space Technology, and Smart Infrastructure, we are building solutions for a better tomorrow. Founded with a vision for 2035 and beyond, JomoLab is where extraordinary minds collaborate to solve extraordinary challenges.</p></Reveal>
  </div></section>
  <section className="bg-muted px-5 py-20 md:px-8 md:py-28"><div className="site-container">
    <Reveal><SectionHeading eyebrow="" title="Our Vision" /></Reveal>
    <Reveal className="mt-10 max-w-4xl"><p className="text-xl leading-[1.75] text-muted-foreground">From FOMO to JOMO The modern world is driven by fear, distraction, and information overload. At JomoLab, we believe humanity needs a transition from FOMO (Fear of Missing Out) to JOMO (Joy of Missing Out). JOMO represents clarity, purpose, and meaningful innovation. We envision a future where technology simplifies life, empowers people, and creates sustainable progress rather than digital chaos. Our Vision is not merely to build products. Our Vision is to create technologies that improve the quality of life for future generations</p></Reveal>
  </div></section>
  <section className="px-5 py-20 md:px-8 md:py-28"><div className="site-container grid gap-12 lg:grid-cols-12"><Reveal className="lg:col-span-5"><SectionHeading eyebrow="Our Mission 2035" title="Building the Future Together" /></Reveal><Reveal delay={80} className="lg:col-span-6 lg:col-start-7"><p className="text-xl leading-[1.75] text-muted-foreground">Building the Future Together We stand at one of the most significant turning points in human history. The coming decade will redefine how we live, learn, work, communicate, travel, and create value. JomoLab&apos;s mission is to become a globally recognized innovation confederation that brings together exceptional minds and breakthrough technologies under one ecosystem.</p></Reveal></div></section>
  <section className="bg-muted px-5 py-20 md:px-8 md:py-28"><div className="site-container"><Reveal><SectionHeading eyebrow="" title="By 2035 We Aim To" /></Reveal><ul className="mt-10 grid gap-4 md:grid-cols-2">{["Build globally impactful technology ventures", "Foster world-class research collaborations", "Support sustainable innovation initiatives", "Create products that positively impact millions", "Develop future-ready solutions across industries", "Bridge the gap between innovation and implementation"].map((item, index) => <Reveal key={item} delay={(index % 2) * 60} as="li" className="soft-panel flex min-h-32 items-end p-7"><span className="mr-5 text-xs text-primary">{String(index + 1).padStart(2, "0")}</span><span className="text-lg">{item}</span></Reveal>)}</ul></div></section>
  </>; }

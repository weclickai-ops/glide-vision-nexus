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
  <PageHero label="About Us" title="About Jomolab" copy="Where extraordinary minds collaborate to solve extraordinary challenges." />
  <section className="px-5 py-20 md:px-8 md:py-28"><div className="site-container">
    <Reveal><SectionHeading eyebrow="About Us" title="A global Fu-Tech R&D Confederation" /></Reveal>
    <Reveal className="mt-10 max-w-4xl"><p className="text-xl leading-[1.75] text-muted-foreground">JomoLab® is a global Fu-Tech (Future Technology) R&amp;D Confederation bringing together entrepreneurs, scientists, researchers, innovators, and industry leaders to create technologies that shape the next decade of human evolution. From Artificial Intelligence and Extended Reality to Sustainability, Healthcare, Education, Space Technology, and Smart Infrastructure, we are building solutions for a better tomorrow. Founded with a vision for 2033 and beyond, JomoLab is where extraordinary minds collaborate to solve extraordinary challenges.</p></Reveal>
  </div></section>
  <section className="bg-muted px-5 py-20 md:px-8 md:py-28"><div className="site-container">
    <Reveal><SectionHeading eyebrow="Vision &amp; Mission" title="From FOMO to JOMO" /></Reveal>
    <Reveal className="mt-10 max-w-4xl"><p className="text-xl leading-[1.75] text-muted-foreground">The modern world is driven by fear, distraction, and information overload. At JomoLab, we believe humanity needs a transition from FOMO (Fear of Missing Out) to JOMO (Joy of Missing Out). JOMO represents clarity, purpose, and meaningful innovation. We envision a future where technology simplifies life, empowers people, and creates sustainable progress rather than digital chaos.</p></Reveal>
    <Reveal delay={100} className="mt-8 max-w-4xl"><p className="soft-panel p-8 text-xl leading-[1.75] text-foreground md:p-12">Our mission is not merely to build products. <span className="text-primary">Our mission is to create technologies that improve the quality of life for future generations.</span></p></Reveal>
  </div></section>
  </>; }

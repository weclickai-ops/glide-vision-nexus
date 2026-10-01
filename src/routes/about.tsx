import { createFileRoute } from "@tanstack/react-router";
import { PageHero, Reveal } from "../components/site/motion";

export const Route = createFileRoute("/about")({ head: () => ({ meta: [
  { title: "About the Confederation | JomoLab®" },
  { name: "description", content: "JomoLab is a global Fu-Tech R&D Confederation building technologies that shape the next decade of human evolution." },
  { property: "og:title", content: "About the Confederation | JomoLab®" },
  { property: "og:description", content: "A research confederation built to turn purposeful inquiry into sustainable progress." },
  { property: "og:type", content: "website" }, { name: "twitter:card", content: "summary_large_image" },
] }), component: About });

const aims = ["Build globally impactful technology ventures", "Foster world-class research collaborations", "Support sustainable innovation initiatives", "Create products that positively impact millions", "Develop future-ready solutions across industries", "Bridge the gap between innovation and implementation"];

function About() { return <>
  <PageHero label="Page 1" title="About Jomolab" copy="JomoLab® is a global Fu-Tech (Future Technology) R&D Confederation bringing together entrepreneurs, scientists, researchers, innovators, and industry leaders to create technologies that shape the next decade of human evolution." />

  {/* About Us */}
  <section className="px-5 py-20 md:px-8 md:py-24"><div className="mx-auto grid max-w-screen-2xl gap-12 lg:grid-cols-12">
    <Reveal className="lg:col-span-5"><p className="section-label">About Jomolab</p></Reveal>
    <Reveal delay={80} className="lg:col-span-6 lg:col-start-7">
      <p className="text-xl leading-[1.65] text-muted-foreground">JomoLab® is a global Fu-Tech (Future Technology) R&amp;D Confederation bringing together entrepreneurs, scientists, researchers, innovators, and industry leaders to create technologies that shape the next decade of human evolution. From Artificial Intelligence and Extended Reality to Sustainability, Healthcare, Education, Space Technology, and Smart Infrastructure, we are building solutions for a better tomorrow. Founded with a vision for 2035 and beyond, JomoLab is where extraordinary minds collaborate to solve extraordinary challenges.</p>
    </Reveal>
  </div></section>
  <section className="border-t border-foreground px-5 py-20 md:px-8 md:py-24"><div className="mx-auto max-w-screen-2xl">
    <div className="grid gap-12 lg:grid-cols-12"><Reveal className="lg:col-span-4"><p className="section-label">Our Vision</p><h2 className="section-title">From FOMO to JOMO</h2></Reveal><Reveal delay={80} className="lg:col-span-7 lg:col-start-6"><p className="text-xl leading-[1.65] text-muted-foreground">The modern world is driven by fear, distraction, and information overload. At JomoLab, we believe humanity needs a transition from FOMO (Fear of Missing Out) to JOMO (Joy of Missing Out). JOMO represents clarity, purpose, and meaningful innovation. We envision a future where technology simplifies life, empowers people, and creates sustainable progress rather than digital chaos. Our Vision is not merely to build products. Our Vision is to create technologies that improve the quality of life for future generations</p></Reveal></div>
  </div></section>
  <section className="border-t border-foreground bg-wash px-5 py-20 md:px-8 md:py-24"><div className="mx-auto max-w-screen-2xl"><Reveal className="grid gap-12 lg:grid-cols-12"><div className="lg:col-span-4"><p className="section-label">Our Mission 2035</p><h2 className="section-title">Building the Future Together</h2></div><p className="text-xl leading-[1.65] text-muted-foreground lg:col-span-7 lg:col-start-6">We stand at one of the most significant turning points in human history. The coming decade will redefine how we live, learn, work, communicate, travel, and create value. JomoLab&apos;s mission is to become a globally recognized innovation confederation that brings together exceptional minds and breakthrough technologies under one ecosystem.</p></Reveal><Reveal className="mt-16"><p className="section-label">By 2035 We Aim To</p><div className="grid border-l border-t border-border md:grid-cols-2 lg:grid-cols-3">{aims.map((aim, index) => <div key={aim} className="min-h-40 border-b border-r border-border bg-background p-6"><span className="font-mono text-xs text-primary">{String(index + 1).padStart(2, "0")}</span><p className="mt-8 text-lg font-medium">{aim}</p></div>)}</div></Reveal></div></section>
</>; }

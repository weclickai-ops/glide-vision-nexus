import { createFileRoute } from "@tanstack/react-router";
import { PageHero, ResearchDiagram, Reveal } from "../components/site/motion";

export const Route = createFileRoute("/ecosystem")({ head: () => ({ meta: [
  { title: "Ecosystem & Ventures | JomoLab®" },
  { name: "description", content: "Explore the ventures and initiatives that turn JomoLab research into products, platforms, and global conversations." },
  { property: "og:title", content: "Ecosystem & Ventures | JomoLab®" },
  { property: "og:description", content: "A connected family of ventures turning ideas into impact." },
  { property: "og:type", content: "website" }, { name: "twitter:card", content: "summary_large_image" },
] }), component: Ecosystem });

function Ecosystem() { return <>
  <PageHero label="Page 3 / Ecosystem" title="R&D Confederation" copy="A Network of Extraordinary Minds" />
  <section className="px-5 py-20 md:px-8 md:py-24"><div className="mx-auto grid max-w-screen-2xl gap-12 lg:grid-cols-12"><Reveal className="lg:col-span-7"><p className="text-2xl leading-[1.6] text-muted-foreground">JomoLab is an exclusive innovation confederation formed by entrepreneurs, scientists, researchers, technologists, advisors, and business leaders. Together, we identify future opportunities, conduct research, build products, and solve real-world challenges.</p><h2 className="mt-12 font-display text-3xl font-medium">Why a Confederation?</h2><p className="mt-5 text-xl leading-[1.6] text-muted-foreground">Because the future cannot be built in silos. The most impactful innovations emerge when diverse expertise comes together under a shared vision.</p></Reveal><Reveal delay={80} className="lg:col-span-4 lg:col-start-9"><div className="aspect-square border border-border p-8"><ResearchDiagram index={2} /></div></Reveal></div></section>
  <section className="border-t border-foreground bg-wash px-5 py-20 md:px-8 md:py-24"><Reveal className="mx-auto grid max-w-screen-2xl gap-12 lg:grid-cols-12"><div className="lg:col-span-4"><p className="section-label">Ratnesh Dwivedi</p><h2 className="font-display text-3xl font-medium">Chief Thinker, JomoLab®</h2><p className="mt-4 text-muted-foreground">Serial Entrepreneur | TEDx Speaker | Growth Strategist</p></div><div className="lg:col-span-7 lg:col-start-6"><blockquote className="font-display text-3xl leading-snug">“Technology should not only make life smarter—it should make life better.</blockquote><p className="mt-8 text-lg leading-8 text-muted-foreground">JomoLab was founded with a vision to unite exceptional minds and create innovations that positively impact humanity. We are building an ecosystem where researchers, creators, entrepreneurs, and industry leaders collaborate to transform ambitious ideas into meaningful solutions. The future belongs to those who build it.</p></div></Reveal></section>
</>; }
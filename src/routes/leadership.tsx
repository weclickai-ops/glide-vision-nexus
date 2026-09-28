import { createFileRoute } from "@tanstack/react-router";
import { CtaBand } from "../components/site/CtaBand";
import { advisors, members } from "../components/site/data";
import { PageHero, Reveal } from "../components/site/motion";
import vinay from "../assets/people/vinay-singhal.jpg.asset.json";
import ankur from "../assets/people/ankur-garg.jpg.asset.json";
import senthil from "../assets/people/senthil-narasimhan.jpg.asset.json";
import dinesh from "../assets/people/dinesh-murlidharan.jpg.asset.json";
import vivek from "../assets/people/vivek-dangi.jpg.asset.json";
import aakash from "../assets/people/aakash-porwal.jpg.asset.json";
import manoj from "../assets/people/manoj-pachauri.jpg.asset.json";
import aayush from "../assets/people/aayush-gorani.jpg.asset.json";
import mayank from "../assets/people/mayank-srivastava.jpg.asset.json";
import lalit from "../assets/people/lalit-barman.jpg.asset.json";
import nikhil from "../assets/people/nikhil-bhatnagar.jpg.asset.json";
import saurabh from "../assets/people/saurabh-tiwari.jpg.asset.json";

export const Route = createFileRoute("/leadership")({ head: () => ({ meta: [
  { title: "Leadership, Advisors & Members | JomoLab®" },
  { name: "description", content: "Meet Chief Thinker Ratnesh Dwivedi, JomoLab's advisory board, and confederation members." },
  { property: "og:title", content: "Leadership, Advisors & Members | JomoLab®" },
  { property: "og:description", content: "Researchers, entrepreneurs, and experienced industry leaders united by a shared vision for 2035." },
  { property: "og:type", content: "website" }, { name: "twitter:card", content: "summary_large_image" },
] }), component: Leadership });

const advisorImages = [vinay, ankur, senthil, dinesh];
const memberImages = [vivek, aakash, manoj, aayush, mayank, lalit, nikhil, saurabh];

function Leadership() { return <>
  <PageHero label="04 / Leadership" title="Research is a collective practice." copy="Founders, researchers, technologists, and industry leaders bringing depth, scrutiny, and practical experience to JomoLab." />

  <section className="px-5 py-20 md:px-8 md:py-28"><Reveal className="mx-auto grid max-w-screen-2xl gap-10 lg:grid-cols-12"><p className="section-label lg:col-span-3">Chief Thinker</p><div className="lg:col-span-8"><blockquote className="font-display text-[clamp(2rem,4vw,4.5rem)] font-medium leading-[1.15]">“Technology should not only make life smarter—it should make life better.”</blockquote><p className="mt-9 font-semibold">Ratnesh Dwivedi</p><p className="mt-1 text-sm text-muted-foreground">Chief Thinker, JomoLab®</p></div></Reveal></section>

  <section className="border-t border-border px-5 py-20 md:px-8 md:py-28"><div className="mx-auto max-w-screen-2xl">
    <Reveal className="grid gap-6 border-b border-border pb-9 lg:grid-cols-12"><div className="lg:col-span-4"><p className="section-label">Advisory board</p><h2 className="font-display text-3xl font-medium md:text-4xl">Guidance across disciplines.</h2></div><p className="max-w-xl leading-7 text-muted-foreground lg:col-span-6 lg:col-start-7">Advisors from diverse industries help shape rigorous inquiry and practical solutions.</p></Reveal>
    <div className="grid gap-x-6 gap-y-12 pt-10 sm:grid-cols-2 lg:grid-cols-4">{advisors.map(([name, role], index) => <Reveal key={name} delay={index * 70}><article><div className="portrait-reveal aspect-square overflow-hidden rounded-full border border-border"><img src={advisorImages[index]?.url} alt={name} loading="lazy" width={560} height={560} className="h-full w-full object-cover" /></div><p className="mt-5 font-mono text-[10px] text-primary">ADVISOR 0{index + 1}</p><h3 className="mt-2 font-display text-xl font-medium">{name}</h3><p className="mt-2 text-sm leading-6 text-muted-foreground">{role}</p></article></Reveal>)}</div>
  </div></section>

  <section className="bg-wash px-5 py-20 md:px-8 md:py-28"><div className="mx-auto max-w-screen-2xl">
    <Reveal className="grid gap-6 lg:grid-cols-12"><div className="lg:col-span-4"><p className="section-label">Confederation members</p><h2 className="section-title">Many minds, one horizon.</h2></div><p className="max-w-xl leading-7 text-muted-foreground lg:col-span-6 lg:col-start-7">Members contribute specialist knowledge across international collaboration, space, growth, design, education, and immersive technology.</p></Reveal>
    <div className="mt-12 grid gap-px bg-border sm:grid-cols-2 lg:grid-cols-4">{members.map(([name, role, location], index) => <Reveal key={name} delay={(index % 4) * 60} className="bg-background"><article className="h-full p-6"><div className="portrait-reveal aspect-square overflow-hidden rounded-full border border-border"><img src={memberImages[index]?.url} alt={name} loading="lazy" width={500} height={500} className="h-full w-full object-cover" /></div><h3 className="mt-5 font-display text-lg font-medium">{name}</h3><p className="mt-2 text-sm leading-6 text-primary">{role}</p><p className="mt-3 font-mono text-[9px] uppercase text-muted-foreground">{location}</p></article></Reveal>)}</div>
  </div></section>
  <CtaBand />
</>; }
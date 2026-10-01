import { Link, createFileRoute } from "@tanstack/react-router";
import { ArrowRight } from "lucide-react";
import futureCity from "../assets/future-city-hero.jpg";
import futureCityMobile from "../assets/future-city-hero-mobile.jpg";
import futureCityWide from "../assets/future-city-hero-wide.jpg";
import materialsLab from "../assets/future-materials-lab.jpg";
import networkImage from "../assets/research-network.jpg";
import collaborationImage from "../assets/research-collaboration.jpg";
import { ResearchDiagram, Reveal, SectionHeading } from "../components/site/motion";

export const Route = createFileRoute("/")({
  head: () => ({ meta: [
    { title: "JomoLab® | Fu-Tech R&D Confederation" },
    { name: "description", content: "Pioneering Tomorrow's Innovations for a Sustainable Earth" },
    { property: "og:title", content: "JomoLab® | Fu-Tech R&D Confederation" },
    { property: "og:description", content: "Pioneering Tomorrow's Innovations for a Sustainable Earth" },
    { property: "og:type", content: "website" },
    { name: "twitter:card", content: "summary_large_image" },
  ] }),
  component: Index,
});

const pageLinks = [
  ["/domains", "Fu-Tech Research", materialsLab],
  ["/ecosystem", "Ecosystem", collaborationImage],
  ["/products", "Products & IPs", networkImage],
] as const;

function Index() {
  return <>
    <section className="relative isolate min-h-[min(900px,100svh)] overflow-hidden">
      <picture className="absolute inset-0 -z-20 block size-full">
        <source media="(max-width: 520px)" srcSet={futureCityMobile} />
        <source media="(min-aspect-ratio: 3/2)" srcSet={futureCityWide} />
        <img src={futureCity} alt="A sustainable future city beneath a glass biosphere" width={1600} height={1104} fetchPriority="high" className="home-cover-image size-full object-cover" />
      </picture>
      <div className="home-shade absolute inset-0 -z-10" />
      <div className="site-container flex min-h-[min(900px,100svh)] items-center pb-20 pt-32">
        <div className="max-w-3xl">
          <p className="section-label reveal-up text-foreground">Global Fu-Tech R&amp;D Confederation</p>
          <h1 className="reveal-up display-title text-primary">JomoLab<sup className="ml-1 align-top text-[.28em] font-normal">®</sup></h1>
          <p className="reveal-up mt-7 max-w-xl text-xl font-light leading-relaxed text-foreground md:text-3xl">Pioneering Tomorrow&apos;s Innovations for a Sustainable Earth</p>
          <Link to="/about" className="reveal-up story-link mt-10 pb-2 text-sm font-medium">About Jomolab <ArrowRight className="size-4" /></Link>
        </div>
      </div>
      <div className="absolute bottom-0 left-0 hidden rounded-tr-[24px] bg-background px-10 py-5 text-[10px] font-medium uppercase md:block">Research · Collaboration · Innovation</div>
    </section>

    <section className="px-5 py-20 md:px-8 md:py-28">
      <div className="site-container">
        <Reveal><SectionHeading eyebrow="Explore" title="Future Technology Beyond AI" /></Reveal>
        <div className="mt-10 grid gap-4 md:grid-cols-3">
          {pageLinks.map(([to, title, image], index) => <Reveal key={to} delay={index * 80}>
            <Link to={to} className="group block">
              <div className="image-panel aspect-[4/3]"><img src={image} alt="" width={1600} height={1200} loading="lazy" /></div>
              <div className="flex items-center justify-between gap-4 py-5"><div><span className="text-[10px] text-muted-foreground">0{index + 1}</span><h2 className="mt-1 text-lg font-medium">{title}</h2></div><ArrowRight className="size-4 transition-transform group-hover:translate-x-1" /></div>
            </Link>
          </Reveal>)}
        </div>
      </div>
    </section>

    <section className="bg-muted px-5 py-20 md:px-8 md:py-28">
      <div className="site-container grid gap-4 lg:grid-cols-2">
        <Reveal className="soft-panel p-8 md:p-12"><span className="number-chip">01</span><h2 className="mt-16 max-w-lg text-3xl font-normal leading-tight md:text-5xl">Global Fu-Tech R&amp;D Confederation</h2></Reveal>
        <Reveal delay={100} className="blue-panel relative min-h-96 p-8 md:p-12"><ResearchDiagram index={2} className="absolute -bottom-16 -right-10 size-80 text-primary/20" /><p className="relative max-w-md text-xl leading-8">Pioneering Tomorrow&apos;s Innovations for a Sustainable Earth</p><Link to="/contact" className="story-link absolute bottom-10 left-8 pb-2 text-sm font-medium md:left-12">Join Us <ArrowRight className="size-4" /></Link></Reveal>
      </div>
    </section>
  </>;
}
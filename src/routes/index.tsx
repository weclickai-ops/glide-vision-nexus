import { createFileRoute } from "@tanstack/react-router";
import futureCity from "../assets/future-city-hero.jpg";
import futureCityMobile from "../assets/future-city-hero-mobile.jpg";
import futureCityWide from "../assets/future-city-hero-wide.jpg";

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

function Index() {
  return <>
    <section className="relative isolate min-h-[min(900px,100svh)] overflow-hidden">
      <picture className="absolute inset-0 -z-20 block size-full">
        <source media="(max-width: 520px)" srcSet={futureCityMobile} />
        <source media="(min-aspect-ratio: 3/2)" srcSet={futureCityWide} />
        <img src={futureCity} alt="A sustainable future city beneath a glass biosphere" width={1600} height={1104} fetchPriority="high" className="home-cover-image size-full object-cover" />
      </picture>
      <div className="home-shade absolute inset-0 -z-10" />
      <svg className="home-research-trace" viewBox="0 0 1000 520" fill="none" aria-hidden="true">
        <path className="home-trace-path" d="M70 366C212 366 224 266 348 266C470 266 486 344 606 344C736 344 750 208 914 208" />
        <circle className="home-trace-node home-trace-node-one" cx="348" cy="266" r="5" />
        <circle className="home-trace-node home-trace-node-two" cx="606" cy="344" r="5" />
        <circle className="home-trace-node home-trace-node-three" cx="914" cy="208" r="5" />
      </svg>
      <div className="site-container flex min-h-[min(900px,100svh)] items-center pb-20 pt-32">
        <div className="home-hero-copy max-w-3xl">
          <p className="section-label home-hero-label text-foreground">Global</p>
          <h1 className="home-hero-title max-w-2xl text-primary">Fu-Tech R&amp;D<br className="hidden sm:block" /> Confederation</h1>
          <p className="home-hero-tagline mt-7 max-w-xl text-xl font-light leading-relaxed text-foreground md:text-3xl">Pioneering Tomorrow&apos;s Innovations for a Sustainable Earth</p>
        </div>
      </div>
    </section>
  </>;
}
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
      <div className="site-container flex min-h-[min(900px,100svh)] items-center pb-20 pt-32">
        <div className="max-w-3xl">
          <p className="section-label reveal-up text-foreground">Global Fu-Tech R&amp;D Confederation</p>
          <h1 className="reveal-up display-title text-primary">JomoLab<sup className="ml-1 align-top text-[.28em] font-normal">®</sup></h1>
          <p className="reveal-up mt-7 max-w-xl text-xl font-light leading-relaxed text-foreground md:text-3xl">Pioneering Tomorrow&apos;s Innovations for a Sustainable Earth</p>
        </div>
      </div>
    </section>
  </>;
}
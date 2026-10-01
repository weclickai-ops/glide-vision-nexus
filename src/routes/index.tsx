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
    <section className="home-cover relative isolate flex min-h-[min(900px,100svh)] overflow-hidden border-b-4 border-primary pt-20">
      <picture className="absolute inset-0 -z-10 block size-full">
        <source media="(max-width: 520px)" srcSet={futureCityMobile} />
        <source media="(min-aspect-ratio: 3/2)" srcSet={futureCityWide} />
        <img src={futureCity} alt="A sustainable future city beneath a glass biosphere" width={1600} height={1104} fetchPriority="high" className="home-cover-image size-full object-cover" />
      </picture>
      <div className="mx-auto flex w-full max-w-screen-2xl items-center px-5 py-20 md:px-8 lg:px-16">
        <div className="home-cover-copy max-w-[42rem]">
          <h1 className="reveal-up font-display text-[clamp(3.65rem,8vw,7.6rem)] font-semibold leading-none text-primary">JomoLab<sup className="ml-1 align-top text-[.34em] font-normal">®</sup></h1>
          <p className="reveal-up mt-4 font-display text-[clamp(1.35rem,2.8vw,2.4rem)] font-light leading-tight text-foreground">Global Fu-Tech R&amp;D Confederation</p>
          <div className="mt-8 h-px w-56 bg-primary/40" />
          <p className="reveal-up mt-7 max-w-lg font-display text-[clamp(1.15rem,2vw,1.65rem)] font-light leading-relaxed text-foreground">Pioneering Tomorrow&apos;s Innovations<br className="hidden sm:block" /> for a Sustainable Earth</p>
        </div>
      </div>
    </section>

  </>;
}
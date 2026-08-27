import Image from "next/image"

import {
  ArrowDown01Icon,
  ArrowUpRight01Icon,
  InstagramIcon,
  Linkedin02Icon,
  Mail01Icon,
} from "@hugeicons/core-free-icons"
import { HugeiconsIcon } from "@hugeicons/react"

const heroImage = {
  image:
    "https://images.unsplash.com/photo-1494783367193-149034c05e8f?auto=format&fit=crop&w=1800&q=90",
  alt: "A person walking on a sunlit road between rolling hills",
}

const aboutPortrait = {
  image:
    "https://images.unsplash.com/photo-1534528741775-53994a69daeb?auto=format&fit=crop&w=1200&q=88",
  alt: "Portrait of Alex Morgan in warm natural light",
}

const projects = [
  {
    title: "Salt / wind",
    category: "Place",
    location: "Algarve, Portugal",
    year: "2024",
    image:
      "https://images.unsplash.com/photo-1500534623283-312aade485b7?auto=format&fit=crop&w=1800&q=88",
    alt: "A hazy mountain range behind a quiet body of water",
    frame: "aspect-[4/5] md:aspect-[16/10]",
    layout: "md:col-span-7",
  },
  {
    title: "Soft structures",
    category: "Interior",
    location: "Lisbon, Portugal",
    year: "2023",
    image:
      "https://images.unsplash.com/photo-1497366754035-f200968a6e72?auto=format&fit=crop&w=1200&q=88",
    alt: "Sunlight falling across a quiet modern interior",
    frame: "aspect-[4/5]",
    layout: "md:col-span-5 md:pt-20",
  },
  {
    title: "The long afternoon",
    category: "Portrait",
    location: "London, United Kingdom",
    year: "2023",
    image:
      "https://images.unsplash.com/photo-1515886657613-9f3515b0c78f?auto=format&fit=crop&w=1600&q=88",
    alt: "A portrait of a woman in a bright room",
    frame: "aspect-[4/5]",
    layout: "md:col-span-5",
  },
  {
    title: "After the rain",
    category: "Story",
    location: "Sintra, Portugal",
    year: "2022",
    image:
      "https://images.unsplash.com/photo-1470770841072-f978cf4d019e?auto=format&fit=crop&w=1600&q=88",
    alt: "A green valley and lake under a soft cloudy sky",
    frame: "aspect-[4/5] md:aspect-[16/10]",
    layout: "md:col-span-7 md:pt-20",
  },
]

const packages = [
  {
    name: "Story",
    detail: "A considered half-day for people, spaces, or a small editorial.",
    price: "from €1,200",
    features: [
      "Up to 4 hours on location",
      "30 edited photographs",
      "Personal usage license",
    ],
  },
  {
    name: "Campaign",
    detail: "A full visual system for a launch, collection, or brand story.",
    price: "from €2,400",
    features: [
      "Up to 8 hours on location",
      "60 edited photographs",
      "Web + social usage license",
    ],
    featured: true,
  },
  {
    name: "Commission",
    detail: "A custom rhythm for multi-day work, travel, and larger teams.",
    price: "Let’s talk",
    features: ["Location scouting", "Bespoke shot list", "Tailored licensing"],
  },
]

function ArrowLink({
  children,
  href,
  inverse = false,
}: {
  children: React.ReactNode
  href: string
  inverse?: boolean
}) {
  return (
    <a
      href={href}
      className={`focus-ring group/link inline-flex items-center gap-3 text-xs font-semibold tracking-[0.18em] uppercase transition-colors ${
        inverse
          ? "text-[var(--paper)] hover:text-white"
          : "text-[var(--ink)] hover:text-[var(--terracotta)]"
      }`}
    >
      <span>{children}</span>
      <span className="grid size-8 place-items-center rounded-full border border-current transition-transform duration-300 group-hover/link:translate-x-1">
        <HugeiconsIcon
          icon={ArrowUpRight01Icon}
          size={15}
          strokeWidth={1.5}
          aria-hidden="true"
        />
      </span>
    </a>
  )
}

export default function Page() {
  return (
    <main className="overflow-hidden bg-background">
      <header className="hairline border-b">
        <div className="mx-auto flex w-full max-w-[1440px] items-center justify-between gap-6 px-6 py-5 sm:px-10 lg:px-14">
          <a
            href="#top"
            className="focus-ring inline-flex items-center gap-3"
            aria-label="Alex Morgan home"
          >
            <span className="grid size-9 place-items-center rounded-full bg-[var(--ink)] text-[var(--paper)]">
              <span className="display-font text-xl leading-none italic">
                a
              </span>
            </span>
            <span className="text-[0.67rem] leading-tight font-semibold tracking-[0.18em] text-[var(--ink)] uppercase">
              Alex Morgan
              <span className="block font-normal tracking-[0.12em] text-[var(--muted-foreground)]">
                Photographer
              </span>
            </span>
          </a>

          <nav
            className="hidden items-center gap-8 md:flex"
            aria-label="Main navigation"
          >
            <a
              className="focus-ring eyebrow transition-colors hover:text-[var(--ink)]"
              href="#work"
            >
              Work
            </a>
            <a
              className="focus-ring eyebrow transition-colors hover:text-[var(--ink)]"
              href="#about"
            >
              About
            </a>
            <a
              className="focus-ring eyebrow transition-colors hover:text-[var(--ink)]"
              href="#rates"
            >
              Rates
            </a>
            <a
              className="focus-ring eyebrow transition-colors hover:text-[var(--ink)]"
              href="#contact"
            >
              Contact
            </a>
          </nav>

          <a
            href="#contact"
            className="focus-ring hidden items-center gap-2 border-b border-[var(--ink)] pb-1 text-[0.68rem] font-semibold tracking-[0.16em] text-[var(--ink)] uppercase transition-colors hover:border-[var(--terracotta)] hover:text-[var(--terracotta)] sm:flex"
          >
            Start a project
            <HugeiconsIcon
              icon={ArrowUpRight01Icon}
              size={14}
              strokeWidth={1.5}
              aria-hidden="true"
            />
          </a>
          <a
            href="#work"
            className="focus-ring text-xs font-semibold tracking-[0.14em] text-[var(--ink)] uppercase sm:hidden"
          >
            View work
          </a>
        </div>
      </header>

      <section
        id="top"
        className="mx-auto grid w-full max-w-[1440px] gap-12 px-6 py-12 sm:px-10 sm:py-16 lg:grid-cols-[minmax(0,0.9fr)_minmax(420px,1.1fr)] lg:gap-20 lg:px-14 lg:py-20"
      >
        <div className="flex min-h-[560px] flex-col justify-between lg:py-4">
          <div className="flex items-center gap-3">
            <span className="size-2 rounded-full bg-[var(--terracotta)]" />
            <p className="eyebrow">Lisbon / Worldwide · 2024</p>
          </div>

          <div className="max-w-2xl py-16 lg:py-20">
            <p className="eyebrow mb-7">Portraits · Places · Quiet stories</p>
            <h1 className="display-font max-w-[700px] text-[clamp(4.5rem,10vw,9.5rem)] leading-[0.78] tracking-[-0.06em] text-[var(--ink)]">
              Quiet
              <br />
              <span className="text-[var(--terracotta)] italic">stories,</span>
              <br />
              held in light.
            </h1>
            <p className="mt-10 max-w-md text-base leading-7 text-[var(--muted-foreground)] sm:text-lg">
              I photograph the space between people, place, and light — the
              details that make a story stay with you.
            </p>
            <div className="mt-10">
              <ArrowLink href="#work">View selected work</ArrowLink>
            </div>
          </div>

          <div className="hairline flex items-end justify-between border-t pt-5">
            <p className="max-w-[220px] text-xs leading-5 text-[var(--muted-foreground)]">
              Available for editorial, hospitality, and thoughtful brands.
            </p>
            <span className="display-font text-4xl text-[var(--terracotta)] italic">
              01 / 04
            </span>
          </div>
        </div>

        <div className="relative min-h-[520px] overflow-hidden bg-[var(--paper-deep)] sm:min-h-[680px] lg:min-h-[760px]">
          <Image
            src={heroImage.image}
            alt={heroImage.alt}
            fill
            priority
            unoptimized
            sizes="(max-width: 1024px) 100vw, 55vw"
            className="object-cover object-center grayscale-[12%] transition-transform duration-700 hover:scale-[1.02]"
          />
          <div className="image-wash absolute inset-0" />
          <div className="absolute inset-x-0 bottom-0 flex items-end justify-between p-5 text-[var(--paper)] sm:p-7">
            <div>
              <p className="mb-2 text-[0.65rem] font-semibold tracking-[0.18em] uppercase opacity-75">
                Featured frame
              </p>
              <p className="display-font text-2xl italic sm:text-3xl">
                A road out of the ordinary
              </p>
            </div>
            <p className="text-right text-[0.65rem] font-medium tracking-[0.14em] uppercase opacity-75">
              41°09&apos; N
              <br />
              8°36&apos; W
            </p>
          </div>
          <span className="absolute top-5 right-5 grid size-12 place-items-center rounded-full border border-white/50 text-[var(--paper)] sm:top-7 sm:right-7">
            <HugeiconsIcon
              icon={ArrowDown01Icon}
              size={18}
              strokeWidth={1.4}
              aria-hidden="true"
            />
          </span>
        </div>
      </section>

      <section id="work" className="hairline border-t bg-[var(--paper-deep)]">
        <div className="mx-auto w-full max-w-[1440px] px-6 py-20 sm:px-10 sm:py-28 lg:px-14">
          <div className="flex flex-col justify-between gap-8 md:flex-row md:items-end">
            <div>
              <p className="eyebrow mb-5">Selected work / 2022—2024</p>
              <h2 className="display-font max-w-2xl text-5xl leading-[0.9] tracking-[-0.04em] text-[var(--ink)] sm:text-7xl">
                A visual diary
                <br />
                in four chapters.
              </h2>
            </div>
            <p className="max-w-xs text-sm leading-6 text-[var(--muted-foreground)]">
              A collection of portraits, spaces, and landscapes made with a
              little more time and a lot of attention.
            </p>
          </div>

          <div className="mt-16 grid gap-x-5 gap-y-16 md:grid-cols-12 md:gap-x-7 md:gap-y-24 lg:mt-24">
            {projects.map((project, index) => (
              <article key={project.title} className={project.layout}>
                <a href="#contact" className="focus-ring group block">
                  <div
                    className={`relative overflow-hidden bg-[var(--paper)] ${project.frame}`}
                  >
                    <Image
                      src={project.image}
                      alt={project.alt}
                      fill
                      unoptimized
                      sizes="(max-width: 768px) 100vw, 58vw"
                      className="object-cover transition-transform duration-700 ease-out group-hover:scale-[1.035]"
                    />
                    <div className="absolute inset-0 bg-black/0 transition-colors duration-500 group-hover:bg-black/10" />
                    <span className="absolute top-4 right-4 grid size-10 translate-y-2 place-items-center rounded-full bg-[var(--paper)] text-[var(--ink)] opacity-0 shadow-sm transition-all duration-500 group-hover:translate-y-0 group-hover:opacity-100">
                      <HugeiconsIcon
                        icon={ArrowUpRight01Icon}
                        size={16}
                        strokeWidth={1.5}
                        aria-hidden="true"
                      />
                    </span>
                  </div>
                  <div className="hairline mt-4 flex items-start justify-between gap-4 border-t pt-4">
                    <div>
                      <h3 className="display-font text-2xl leading-none text-[var(--ink)] sm:text-3xl">
                        {project.title}
                      </h3>
                      <p className="mt-2 text-xs tracking-[0.12em] text-[var(--muted-foreground)] uppercase">
                        {project.category} · {project.location}
                      </p>
                    </div>
                    <span className="text-xs font-medium tracking-[0.12em] text-[var(--muted-foreground)]">
                      {project.year}
                    </span>
                  </div>
                  <p className="mt-3 text-[0.65rem] font-medium tracking-[0.13em] text-[var(--terracotta)] uppercase">
                    Placeholder image · replace with your work
                  </p>
                </a>
                <span className="mt-3 block text-[0.62rem] tracking-[0.16em] text-[var(--muted-foreground)] uppercase">
                  0{index + 1} / 04
                </span>
              </article>
            ))}
          </div>

          <div className="hairline mt-20 flex flex-col gap-5 border-t pt-5 text-xs leading-5 text-[var(--muted-foreground)] sm:flex-row sm:items-center sm:justify-between">
            <p>
              Image placeholders are sourced from Unsplash. To feature your own
              photographs, replace the image URLs in
              <code className="mx-1 rounded bg-background px-1.5 py-0.5 text-[0.7rem] text-[var(--ink)]">
                app/page.tsx
              </code>
              inside the{" "}
              <code className="rounded bg-background px-1.5 py-0.5 text-[0.7rem] text-[var(--ink)]">
                projects
              </code>{" "}
              list, the{" "}
              <code className="rounded bg-background px-1.5 py-0.5 text-[0.7rem] text-[var(--ink)]">
                heroImage
              </code>{" "}
              object, and the{" "}
              <code className="rounded bg-background px-1.5 py-0.5 text-[0.7rem] text-[var(--ink)]">
                aboutPortrait
              </code>{" "}
              object.
            </p>
            <a
              href="#contact"
              className="focus-ring shrink-0 font-semibold tracking-[0.15em] text-[var(--ink)] uppercase hover:text-[var(--terracotta)]"
            >
              See the full archive <span aria-hidden="true">↗</span>
            </a>
          </div>
        </div>
      </section>

      <section id="about" className="bg-[var(--ink)] text-[var(--paper)]">
        <div className="mx-auto grid w-full max-w-[1440px] gap-12 px-6 py-20 sm:px-10 sm:py-28 lg:grid-cols-12 lg:gap-16 lg:px-14 lg:py-36">
          <div className="lg:col-span-5">
            <div className="relative aspect-[4/5] overflow-hidden bg-[var(--paper-deep)]">
              <Image
                src={aboutPortrait.image}
                alt={aboutPortrait.alt}
                fill
                unoptimized
                sizes="(max-width: 1024px) 100vw, 40vw"
                className="object-cover grayscale-[15%]"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/45 via-transparent to-transparent" />
              <p className="absolute top-5 left-5 text-[0.6rem] font-semibold tracking-[0.15em] uppercase opacity-80 sm:top-7 sm:left-7">
                Placeholder portrait · replace with your headshot
              </p>
              <p className="absolute bottom-5 left-5 text-[0.65rem] font-semibold tracking-[0.17em] uppercase opacity-80 sm:bottom-7 sm:left-7">
                Alex / behind the camera
              </p>
            </div>
          </div>

          <div className="flex flex-col justify-between lg:col-span-7 lg:py-1">
            <div>
              <p className="eyebrow mb-6 text-[var(--paper)]/60">
                A little about me
              </p>
              <h2 className="display-font max-w-3xl text-5xl leading-[0.9] tracking-[-0.04em] sm:text-7xl">
                A camera can be
                <br />a way of{" "}
                <span className="text-[var(--accent)] italic">
                  paying attention.
                </span>
              </h2>
              <div className="mt-10 grid gap-8 text-sm leading-7 text-[var(--paper)]/70 sm:grid-cols-2 sm:gap-12 sm:text-base">
                <p>
                  I&apos;m Alex, a photographer based in Lisbon. My work follows
                  the honest, in-between moments — a hand on a doorway, the
                  quiet of a room before everyone arrives, light moving across a
                  face.
                </p>
                <p>
                  I work with editors, founders, and people who care about
                  making something with a point of view. Come for the pictures;
                  stay for the conversation.
                </p>
              </div>
            </div>

            <div className="mt-16 grid grid-cols-3 border-y border-white/20 py-6 sm:mt-24 sm:py-8">
              <div>
                <p className="display-font text-4xl sm:text-5xl">12</p>
                <p className="mt-2 text-[0.62rem] font-semibold tracking-[0.15em] uppercase opacity-55">
                  Years working
                </p>
              </div>
              <div className="border-l border-white/20 pl-4 sm:pl-8">
                <p className="display-font text-4xl sm:text-5xl">24</p>
                <p className="mt-2 text-[0.62rem] font-semibold tracking-[0.15em] uppercase opacity-55">
                  Cities visited
                </p>
              </div>
              <div className="border-l border-white/20 pl-4 sm:pl-8">
                <p className="display-font text-4xl sm:text-5xl">08</p>
                <p className="mt-2 text-[0.62rem] font-semibold tracking-[0.15em] uppercase opacity-55">
                  Publications
                </p>
              </div>
            </div>

            <div className="mt-7 flex items-center justify-between gap-5 text-[0.65rem] font-semibold tracking-[0.16em] uppercase opacity-65">
              <span>Based in Lisbon</span>
              <span className="h-px flex-1 bg-white/20" />
              <span>Available worldwide</span>
            </div>
          </div>
        </div>
      </section>

      <section id="rates" className="bg-background">
        <div className="mx-auto w-full max-w-[1440px] px-6 py-20 sm:px-10 sm:py-28 lg:px-14 lg:py-36">
          <div className="flex flex-col gap-8 md:flex-row md:items-end md:justify-between">
            <div>
              <p className="eyebrow mb-5">Ways to work together</p>
              <h2 className="display-font max-w-2xl text-5xl leading-[0.9] tracking-[-0.04em] text-[var(--ink)] sm:text-7xl">
                A clear frame
                <br />
                for every brief.
              </h2>
            </div>
            <p className="max-w-sm text-sm leading-6 text-[var(--muted-foreground)]">
              Simple starting points, shaped around what your story needs.
              Travel, production, and licensing are quoted clearly before we
              begin.
            </p>
          </div>

          <div className="hairline mt-14 grid border-y lg:grid-cols-3">
            {packages.map((pack, index) => (
              <article
                key={pack.name}
                className={`hairline relative flex min-h-[390px] flex-col border-b p-6 sm:p-8 lg:border-r lg:border-b-0 lg:last:border-r-0 ${
                  pack.featured ? "bg-[var(--paper-deep)]" : "bg-background"
                }`}
              >
                {pack.featured && (
                  <span className="absolute top-0 right-0 bg-[var(--terracotta)] px-3 py-2 text-[0.6rem] font-semibold tracking-[0.16em] text-[var(--paper)] uppercase">
                    Most requested
                  </span>
                )}
                <div className="flex items-start justify-between">
                  <span className="display-font text-4xl text-[var(--terracotta)] italic">
                    0{index + 1}
                  </span>
                  <span className="text-[0.65rem] font-semibold tracking-[0.16em] text-[var(--muted-foreground)] uppercase">
                    {pack.name}
                  </span>
                </div>
                <div className="mt-14">
                  <h3 className="display-font text-4xl leading-none text-[var(--ink)]">
                    {pack.name}
                  </h3>
                  <p className="mt-4 max-w-xs text-sm leading-6 text-[var(--muted-foreground)]">
                    {pack.detail}
                  </p>
                </div>
                <div className="hairline mt-auto border-t pt-5">
                  <p className="text-lg font-semibold tracking-[-0.02em] text-[var(--ink)]">
                    {pack.price}
                  </p>
                  <ul className="mt-4 space-y-2 text-xs leading-5 text-[var(--muted-foreground)]">
                    {pack.features.map((feature) => (
                      <li key={feature} className="flex items-start gap-2">
                        <span className="mt-2 size-1 shrink-0 rounded-full bg-[var(--terracotta)]" />
                        <span>{feature}</span>
                      </li>
                    ))}
                  </ul>
                </div>
              </article>
            ))}
          </div>

          <div className="mt-8 flex flex-col gap-5 sm:flex-row sm:items-center sm:justify-between">
            <p className="max-w-xl text-xs leading-5 text-[var(--muted-foreground)]">
              Every project starts with a short, no-pressure call. Tell me what
              you&apos;re making and I&apos;ll send a considered proposal within
              two working days.
            </p>
            <ArrowLink href="#contact">Ask about a date</ArrowLink>
          </div>
        </div>
      </section>

      <section
        id="contact"
        className="bg-[var(--terracotta)] text-[var(--paper)]"
      >
        <div className="mx-auto w-full max-w-[1440px] px-6 py-20 sm:px-10 sm:py-28 lg:px-14 lg:py-36">
          <div className="flex flex-col gap-14 lg:flex-row lg:items-end lg:justify-between">
            <div>
              <p className="eyebrow mb-6 text-[var(--paper)]/70">
                Have a story in mind?
              </p>
              <h2 className="display-font max-w-4xl text-[clamp(4rem,9vw,8.5rem)] leading-[0.8] tracking-[-0.06em]">
                Let&apos;s make
                <br />
                <span className="italic">something felt.</span>
              </h2>
            </div>
            <div className="max-w-sm lg:pb-2">
              <p className="text-sm leading-6 text-[var(--paper)]/75 sm:text-base">
                Share a few details about your project, your dates, or simply
                what you&apos;re drawn to. I&apos;d love to hear it.
              </p>
              <a
                href="mailto:hello@example.com"
                className="focus-ring group mt-8 flex items-center justify-between border-b border-[var(--paper)]/55 pb-3 text-lg font-medium tracking-[-0.02em] transition-colors hover:border-[var(--paper)] sm:text-xl"
              >
                <span>hello@example.com</span>
                <HugeiconsIcon
                  icon={Mail01Icon}
                  size={21}
                  strokeWidth={1.35}
                  aria-hidden="true"
                  className="transition-transform duration-300 group-hover:-translate-y-1"
                />
              </a>
            </div>
          </div>
          <div className="mt-20 flex flex-col gap-4 border-t border-[var(--paper)]/30 pt-5 text-[0.65rem] font-semibold tracking-[0.16em] uppercase sm:flex-row sm:items-center sm:justify-between">
            <span>New commissions / autumn 2024</span>
            <span className="hidden h-px flex-1 bg-[var(--paper)]/30 sm:mx-8 sm:block" />
            <span>Lisbon · Portugal</span>
          </div>
        </div>
      </section>

      <footer className="bg-[var(--ink)] text-[var(--paper)]">
        <div className="mx-auto flex w-full max-w-[1440px] flex-col gap-10 px-6 py-10 sm:px-10 lg:flex-row lg:items-end lg:justify-between lg:px-14">
          <div>
            <p className="display-font text-4xl leading-none italic">
              Alex Morgan
            </p>
            <p className="mt-3 max-w-xs text-xs leading-5 text-[var(--paper)]/55">
              Photographer for people, places, and the light between them.
            </p>
          </div>
          <div className="flex flex-col gap-8 sm:flex-row sm:items-end sm:gap-14">
            <nav
              className="flex flex-wrap gap-x-6 gap-y-3 text-[0.65rem] font-semibold tracking-[0.16em] uppercase"
              aria-label="Footer navigation"
            >
              <a
                href="#work"
                className="focus-ring transition-colors hover:text-[var(--accent)]"
              >
                Work
              </a>
              <a
                href="#about"
                className="focus-ring transition-colors hover:text-[var(--accent)]"
              >
                About
              </a>
              <a
                href="#rates"
                className="focus-ring transition-colors hover:text-[var(--accent)]"
              >
                Rates
              </a>
              <a
                href="#contact"
                className="focus-ring transition-colors hover:text-[var(--accent)]"
              >
                Contact
              </a>
            </nav>
            <div className="flex items-center gap-4">
              <a
                href="https://www.instagram.com"
                aria-label="Instagram"
                className="focus-ring grid size-9 place-items-center rounded-full border border-white/25 transition-colors hover:border-[var(--accent)] hover:text-[var(--accent)]"
              >
                <HugeiconsIcon
                  icon={InstagramIcon}
                  size={16}
                  strokeWidth={1.4}
                  aria-hidden="true"
                />
              </a>
              <a
                href="https://www.linkedin.com"
                aria-label="LinkedIn"
                className="focus-ring grid size-9 place-items-center rounded-full border border-white/25 transition-colors hover:border-[var(--accent)] hover:text-[var(--accent)]"
              >
                <HugeiconsIcon
                  icon={Linkedin02Icon}
                  size={16}
                  strokeWidth={1.4}
                  aria-hidden="true"
                />
              </a>
              <a
                href="mailto:hello@example.com"
                aria-label="Email Alex"
                className="focus-ring grid size-9 place-items-center rounded-full border border-white/25 transition-colors hover:border-[var(--accent)] hover:text-[var(--accent)]"
              >
                <HugeiconsIcon
                  icon={Mail01Icon}
                  size={16}
                  strokeWidth={1.4}
                  aria-hidden="true"
                />
              </a>
            </div>
          </div>
        </div>
        <div className="mx-auto flex w-full max-w-[1440px] flex-col gap-2 border-t border-white/15 px-6 py-5 text-[0.6rem] tracking-[0.15em] text-[var(--paper)]/45 uppercase sm:flex-row sm:items-center sm:justify-between sm:px-10 lg:px-14">
          <span>© 2024 Alex Morgan Studio</span>
          <span>Made with intention</span>
        </div>
      </footer>
    </main>
  )
}

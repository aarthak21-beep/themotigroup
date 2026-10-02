import Link from "next/link";

const ventures = [
  {
    title: "MOTI Diagnostics",
    category: "Healthcare",
    description:
      "Trusted diagnostic services focused on accurate, accessible and reliable healthcare.",
    href: "https://diagnostics.themotigroup.co.in/",
  },
  {
    title: "Health",
    category: "Wellness",
    description:
      "Useful health information, wellness resources and everyday guidance.",
    href: "#",
  },
  {
    title: "TechLab",
    category: "Technology",
    description:
      "Technology ideas, digital tools, innovation and practical tech content.",
    href: "#",
  },
  {
    title: "Dealz",
    category: "Deals & Offers",
    description:
      "Discover useful deals, offers and value-focused opportunities.",
    href: "#",
  },
  {
    title: "Finance",
    category: "Finance",
    description:
      "Simple and useful financial information for everyday decisions.",
    href: "#",
  },
];

export default function Home() {
  return (
    <main className="min-h-screen bg-white text-zinc-900">
      {/* HEADER */}
            <header className="sticky top-0 z-50 border-b border-gray-200 bg-white/90 backdrop-blur">
        <div className="mx-auto flex max-w-7xl items-center justify-between px-6 py-5">

          <Link href="/" className="group flex items-center gap-3">
            <span className="flex h-10 w-10 items-center justify-center rounded-xl bg-black text-lg font-bold text-white transition group-hover:scale-105">
              m
            </span>

            <span className="text-xl font-semibold tracking-tight">
              the moti group<span className="text-cyan-500">.</span>
            </span>
          </Link>

          {/* DESKTOP NAV */}
          <nav className="hidden gap-8 text-sm font-medium text-zinc-600 md:flex">
            <a href="#about" className="transition hover:text-black">
              About
            </a>

            <a href="#ventures" className="transition hover:text-black">
              Ventures
            </a>

            <a href="#insights" className="transition hover:text-black">
              Insights
            </a>

            <a href="#contact" className="transition hover:text-black">
              Contact
            </a>
          </nav>

          {/* DESKTOP BUTTON */}
          <a
            href="#ventures"
            className="hidden rounded-full bg-black px-5 py-2.5 text-sm font-medium text-white transition hover:bg-zinc-800 md:block"
          >
            Explore
          </a>

          {/* MOBILE MENU */}
                    {/* MOBILE MENU */}
          <div className="relative md:hidden">
            <input
              type="checkbox"
              id="mobile-menu"
              className="peer hidden"
            />

            <label
              htmlFor="mobile-menu"
              className="flex h-10 w-10 cursor-pointer items-center justify-center rounded-xl border border-gray-200 bg-white text-xl text-black"
            >
              ☰
            </label>

            <div className="absolute right-0 top-14 hidden w-52 rounded-2xl border border-gray-200 bg-white p-3 shadow-xl peer-checked:block">

              <a
                href="#about"
                className="block rounded-xl px-4 py-3 text-sm font-medium text-zinc-700 hover:bg-gray-100"
              >
                About
              </a>

              <a
                href="#ventures"
                className="block rounded-xl px-4 py-3 text-sm font-medium text-zinc-700 hover:bg-gray-100"
              >
                Ventures
              </a>

              <a
                href="#insights"
                className="block rounded-xl px-4 py-3 text-sm font-medium text-zinc-700 hover:bg-gray-100"
              >
                Insights
              </a>

              <a
                href="#contact"
                className="block rounded-xl px-4 py-3 text-sm font-medium text-zinc-700 hover:bg-gray-100"
              >
                Contact
              </a>

              <a
                href="#ventures"
                className="mt-2 block rounded-xl bg-black px-4 py-3 text-center text-sm font-medium text-white"
              >
                Explore
              </a>

            </div>
          </div>

        </div>
      </header>

      {/* HERO */}
      <section className="relative overflow-hidden bg-black px-6 py-24 text-white sm:px-10 sm:py-32">
  <div className="absolute -right-20 -top-20 h-72 w-72 animate-pulse rounded-full bg-cyan-500/20 blur-3xl" />
<div className="absolute -bottom-20 -left-20 h-72 w-72 animate-pulse rounded-full bg-blue-500/10 blur-3xl" />

  <div className="relative mx-auto max-w-6xl">
    <p className="mb-5 text-sm font-medium uppercase tracking-[0.3em] text-cyan-400">
      the moti group
    </p>

    <h1 className="max-w-4xl text-5xl font-semibold tracking-tight sm:text-7xl">
      One group.
      <br />
      Multiple possibilities.
    </h1>

    <p className="mt-7 max-w-2xl text-lg leading-8 text-gray-300">
      Building meaningful ventures across healthcare, technology,
      finance, content and digital experiences.
    </p>

    <div className="mt-10 flex flex-wrap gap-4">
      <a
        href="#ventures"
        className="rounded-full bg-white px-6 py-3 text-sm font-semibold text-black transition hover:bg-cyan-400"
      >
        Explore our ventures
      </a>

      <a
        href="#contact"
        className="rounded-full border border-white/20 px-6 py-3 text-sm font-semibold text-white transition hover:bg-white/10"
      >
        Get in touch
      </a>
    </div>
  </div>
</section>
      {/* ABOUT */}
           <section
        id="about"
        className="bg-gray-50 px-6 py-24 sm:px-10 sm:py-32"
      >
        <div className="mx-auto max-w-6xl">

          <div className="grid gap-12 lg:grid-cols-2 lg:items-center">

            <div>
              <p className="text-sm font-medium uppercase tracking-[0.3em] text-cyan-600">
                About the group
              </p>

              <h2 className="mt-4 text-4xl font-semibold tracking-tight text-gray-950 sm:text-5xl">
                Built around
                <br />
                ideas that matter.
              </h2>
            </div>

            <div>
              <p className="text-lg leading-8 text-gray-600">
                the moti group is an evolving digital ecosystem bringing
                together ventures, content and services across different
                areas of everyday life.
              </p>

              <p className="mt-6 text-lg leading-8 text-gray-600">
                From healthcare and technology to finance, deals and
                useful information, our goal is simple — create things
                that people can discover, use and trust.
              </p>
            </div>

          </div>

          <div className="mt-20 grid gap-4 sm:grid-cols-2 lg:grid-cols-4">

            <div className="rounded-3xl border border-gray-200 bg-white p-6 transition duration-300 hover:-translate-y-1 hover:shadow-lg">
              <div className="flex h-11 w-11 items-center justify-center rounded-2xl bg-cyan-100 text-sm font-bold text-cyan-700">
                01
              </div>

              <h3 className="mt-6 text-lg font-semibold text-gray-950">
                Healthcare
              </h3>

              <p className="mt-2 text-sm leading-6 text-gray-500">
                Services and information focused on everyday health.
              </p>
            </div>

            <div className="rounded-3xl border border-gray-200 bg-white p-6 transition duration-300 hover:-translate-y-1 hover:shadow-lg">
              <div className="flex h-11 w-11 items-center justify-center rounded-2xl bg-blue-100 text-sm font-bold text-blue-700">
                02
              </div>

              <h3 className="mt-6 text-lg font-semibold text-gray-950">
                Technology
              </h3>

              <p className="mt-2 text-sm leading-6 text-gray-500">
                Digital ideas, tools and technology-focused content.
              </p>
            </div>

            <div className="rounded-3xl border border-gray-200 bg-white p-6 transition duration-300 hover:-translate-y-1 hover:shadow-lg">
              <div className="flex h-11 w-11 items-center justify-center rounded-2xl bg-emerald-100 text-sm font-bold text-emerald-700">
                03
              </div>

              <h3 className="mt-6 text-lg font-semibold text-gray-950">
                Finance
              </h3>

              <p className="mt-2 text-sm leading-6 text-gray-500">
                Practical information and insights around finance.
              </p>
            </div>

            <div className="rounded-3xl border border-gray-200 bg-white p-6 transition duration-300 hover:-translate-y-1 hover:shadow-lg">
              <div className="flex h-11 w-11 items-center justify-center rounded-2xl bg-amber-100 text-sm font-bold text-amber-700">
                04
              </div>

              <h3 className="mt-6 text-lg font-semibold text-gray-950">
                Digital
              </h3>

              <p className="mt-2 text-sm leading-6 text-gray-500">
                Useful digital experiences built around everyday needs.
              </p>
            </div>

          </div>

        </div>
      </section>
<section className="bg-black px-6 py-20 text-white sm:px-10">
  <div className="mx-auto max-w-6xl">
    <div className="grid gap-10 sm:grid-cols-2 lg:grid-cols-4">

      <div>
        <p className="text-4xl font-semibold tracking-tight sm:text-5xl">
          01
        </p>
        <p className="mt-3 text-sm text-gray-400">
          Growing ecosystem
        </p>
      </div>

      <div>
        <p className="text-4xl font-semibold tracking-tight sm:text-5xl">
          05
        </p>
        <p className="mt-3 text-sm text-gray-400">
          Venture areas
        </p>
      </div>

      <div>
        <p className="text-4xl font-semibold tracking-tight sm:text-5xl">
          01
        </p>
        <p className="mt-3 text-sm text-gray-400">
          Group vision
        </p>
      </div>

      <div>
        <p className="text-4xl font-semibold tracking-tight sm:text-5xl">
          ∞
        </p>
        <p className="mt-3 text-sm text-gray-400">
          Possibilities ahead
        </p>
      </div>

    </div>
  </div>
</section>

      {/* VENTURES */}
      <section id="ventures" className="bg-white px-6 py-24 sm:px-10 sm:py-32">
  <div className="mx-auto max-w-6xl">
    <div className="max-w-2xl">
      <p className="text-sm font-medium uppercase tracking-[0.3em] text-cyan-600">
        Our Ventures
      </p>

      <h2 className="mt-4 text-4xl font-semibold tracking-tight text-gray-950 sm:text-5xl">
        Different ideas.
        <br />
        One ecosystem.
      </h2>

      <p className="mt-6 text-lg leading-8 text-gray-600">
        A growing collection of ventures built around useful ideas,
        digital experiences and everyday needs.
      </p>
    </div>

    <div className="mt-14 grid gap-5 sm:grid-cols-2 lg:grid-cols-3">

      <a
        href="https://diagnostics.themotigroup.co.in/"
        className="group rounded-3xl border border-gray-200 bg-gray-50 p-7 transition duration-300 hover:-translate-y-1 hover:border-cyan-200 hover:bg-white hover:shadow-xl"
      >
        <div className="flex h-12 w-12 items-center justify-center rounded-2xl bg-black text-lg font-bold text-white">
          M
        </div>

        <h3 className="mt-8 text-2xl font-semibold text-gray-950">
          MOTI Diagnostics
        </h3>

        <p className="mt-3 leading-7 text-gray-600">
          Diagnostic healthcare services focused on accessible and
          reliable testing.
        </p>

        <span className="mt-6 inline-block text-sm font-semibold text-gray-950">
          Visit website →
        </span>
      </a>

      <div className="group rounded-3xl border border-gray-200 bg-gray-50 p-7 transition duration-300 hover:-translate-y-1 hover:bg-white hover:shadow-xl">
        <div className="flex h-12 w-12 items-center justify-center rounded-2xl bg-cyan-100 text-lg font-bold text-cyan-700">
          H
        </div>

        <h3 className="mt-8 text-2xl font-semibold text-gray-950">
          Health
        </h3>

        <p className="mt-3 leading-7 text-gray-600">
          Practical health information, wellness ideas and useful
          everyday knowledge.
        </p>

        <span className="mt-6 inline-block text-sm font-semibold text-gray-400">
          Coming soon
        </span>
      </div>

      <div className="group rounded-3xl border border-gray-200 bg-gray-50 p-7 transition duration-300 hover:-translate-y-1 hover:bg-white hover:shadow-xl">
        <div className="flex h-12 w-12 items-center justify-center rounded-2xl bg-blue-100 text-lg font-bold text-blue-700">
          T
        </div>

        <h3 className="mt-8 text-2xl font-semibold text-gray-950">
          TechLab
        </h3>

        <p className="mt-3 leading-7 text-gray-600">
          Technology, digital tools, ideas and content for the
          connected world.
        </p>

        <span className="mt-6 inline-block text-sm font-semibold text-gray-400">
          Coming soon
        </span>
      </div>

      <div className="group rounded-3xl border border-gray-200 bg-gray-50 p-7 transition duration-300 hover:-translate-y-1 hover:bg-white hover:shadow-xl">
        <div className="flex h-12 w-12 items-center justify-center rounded-2xl bg-amber-100 text-lg font-bold text-amber-700">
          D
        </div>

        <h3 className="mt-8 text-2xl font-semibold text-gray-950">
          Dealz
        </h3>

        <p className="mt-3 leading-7 text-gray-600">
          Deals, offers and useful discoveries brought together
          in one place.
        </p>

        <span className="mt-6 inline-block text-sm font-semibold text-gray-400">
          Coming soon
        </span>
      </div>

      <div className="group rounded-3xl border border-gray-200 bg-gray-50 p-7 transition duration-300 hover:-translate-y-1 hover:bg-white hover:shadow-xl">
        <div className="flex h-12 w-12 items-center justify-center rounded-2xl bg-emerald-100 text-lg font-bold text-emerald-700">
          F
        </div>

        <h3 className="mt-8 text-2xl font-semibold text-gray-950">
          Finance
        </h3>

        <p className="mt-3 leading-7 text-gray-600">
          Finance-focused information, insights and practical
          knowledge.
        </p>

        <span className="mt-6 inline-block text-sm font-semibold text-gray-400">
          Coming soon
        </span>
      </div>

    </div>
  </div>
</section>
      {/* INSIGHTS */}
      <section id="insights" className="bg-white px-6 py-24 sm:px-10 sm:py-32">
        <div className="mx-auto max-w-6xl">

          <div className="max-w-2xl">
            <p className="text-sm font-medium uppercase tracking-[0.3em] text-cyan-600">
              Insights
            </p>

            <h2 className="mt-4 text-4xl font-semibold tracking-tight text-gray-950 sm:text-5xl">
              Ideas worth
              <br />
              exploring.
            </h2>

            <p className="mt-6 text-lg leading-8 text-gray-600">
              Useful information, ideas and perspectives across the
              different areas of the moti group.
            </p>
          </div>

          <div className="mt-14 grid gap-5 sm:grid-cols-2 lg:grid-cols-3">

            <div className="rounded-3xl border border-gray-200 bg-gray-50 p-7 transition duration-300 hover:-translate-y-1 hover:bg-white hover:shadow-xl">
              <p className="text-sm font-medium text-cyan-600">
                HEALTH
              </p>

              <h3 className="mt-4 text-2xl font-semibold text-gray-950">
                Health & Wellness
              </h3>

              <p className="mt-3 leading-7 text-gray-600">
                Practical health information, wellness ideas and
                everyday knowledge.
              </p>

              <span className="mt-6 inline-block text-sm font-semibold text-gray-400">
                Coming soon →
              </span>
            </div>

            <div className="rounded-3xl border border-gray-200 bg-gray-50 p-7 transition duration-300 hover:-translate-y-1 hover:bg-white hover:shadow-xl">
              <p className="text-sm font-medium text-blue-600">
                TECHLAB
              </p>

              <h3 className="mt-4 text-2xl font-semibold text-gray-950">
                Technology
              </h3>

              <p className="mt-3 leading-7 text-gray-600">
                Technology, digital tools, trends and useful ideas
                for the connected world.
              </p>

              <span className="mt-6 inline-block text-sm font-semibold text-gray-400">
                Coming soon →
              </span>
            </div>

            <div className="rounded-3xl border border-gray-200 bg-gray-50 p-7 transition duration-300 hover:-translate-y-1 hover:bg-white hover:shadow-xl">
              <p className="text-sm font-medium text-emerald-600">
                FINANCE
              </p>

              <h3 className="mt-4 text-2xl font-semibold text-gray-950">
                Finance & Money
              </h3>

              <p className="mt-3 leading-7 text-gray-600">
                Finance-focused information, practical knowledge and
                useful insights.
              </p>

              <span className="mt-6 inline-block text-sm font-semibold text-gray-400">
                Coming soon →
              </span>
            </div>

          </div>
        </div>
      </section>

      {/* CONTACT */}
      <section id="contact" className="bg-black text-white">
        <div className="mx-auto max-w-7xl px-6 py-28">
          <p className="text-sm font-semibold uppercase tracking-[0.2em] text-cyan-400">
            Connect with us
          </p>

          <h2 className="mt-5 max-w-4xl text-5xl font-semibold tracking-tight sm:text-7xl">
            Let&apos;s build
            <br />
            what&apos;s next.
          </h2>

          <p className="mt-6 max-w-xl text-lg leading-8 text-zinc-400">
            Interested in our ventures, collaborations or new
            opportunities? Get in touch with the moti group.
          </p>

          <div className="mt-10 flex flex-col gap-3 sm:flex-row">
            <a
              href="mailto:info@themotigroup.co.in"
              className="rounded-full bg-white px-7 py-4 text-center text-sm font-semibold text-black hover:bg-zinc-200"
            >
              Email us
            </a>

            <a
              href="https://wa.me/919867242848"
              target="_blank"
              rel="noreferrer"
              className="rounded-full border border-zinc-700 px-7 py-4 text-center text-sm font-semibold hover:bg-zinc-900"
            >
              WhatsApp
            </a>
          </div>
        </div>
      </section>

      {/* FOOTER */}
           <footer className="border-t border-white/10 bg-black text-zinc-400">
        <div className="mx-auto max-w-7xl px-6 py-14 sm:px-10">

          <div className="flex flex-col gap-10 md:flex-row md:items-start md:justify-between">

            <div>
              <p className="text-xl font-semibold tracking-tight text-white">
                the moti group<span className="text-cyan-500">.</span>
              </p>

              <p className="mt-3 max-w-sm text-sm leading-6 text-zinc-500">
                One group. Multiple possibilities.
              </p>
            </div>

            <div className="grid grid-cols-2 gap-x-16 gap-y-8 text-sm sm:grid-cols-3">

              <div>
                <p className="mb-4 font-medium text-white">
                  Explore
                </p>

                <div className="space-y-3">
                  <a href="#about" className="block transition hover:text-white">
                    About
                  </a>

                  <a href="#ventures" className="block transition hover:text-white">
                    Ventures
                  </a>

                  <a href="#insights" className="block transition hover:text-white">
                    Insights
                  </a>
                </div>
              </div>

              <div>
                <p className="mb-4 font-medium text-white">
                  Ventures
                </p>

                <div className="space-y-3">
                  <a
                    href="https://diagnostics.themotigroup.co.in/"
                    className="block transition hover:text-white"
                  >
                    MOTI Diagnostics
                  </a>

                  <span className="block text-zinc-600">
                    Health
                  </span>

                  <span className="block text-zinc-600">
                    TechLab
                  </span>
                </div>
              </div>

              <div>
                <p className="mb-4 font-medium text-white">
                  Connect
                </p>

                <div className="space-y-3">
                  <a
                    href="mailto:info@themotigroup.co.in"
                    className="block transition hover:text-white"
                  >
                    Email us
                  </a>

                  <a
                    href="#contact"
                    className="block transition hover:text-white"
                  >
                    Contact
                  </a>
                </div>
              </div>

            </div>
          </div>

          <div className="mt-12 border-t border-white/10 pt-6">
            <p className="text-xs text-zinc-600">
              © {new Date().getFullYear()} the moti group. All rights reserved.
            </p>
          </div>

        </div>
      </footer>

      {/* FLOATING CONTACT BUTTONS */}
      <div className="fixed bottom-5 right-5 z-50 flex flex-col gap-3">
        <a
          href="https://wa.me/919867242848"
          target="_blank"
          rel="noreferrer"
          className="flex h-12 w-12 items-center justify-center rounded-full bg-green-500 text-sm font-bold text-white shadow-lg hover:scale-105"
          aria-label="WhatsApp"
        >
          W
        </a>

        <a
          href="tel:+918286289143"
          className="flex h-12 w-12 items-center justify-center rounded-full bg-black text-lg text-white shadow-lg hover:scale-105"
          aria-label="Call"
        >
          ☎
        </a>
      </div>
    </main>
  );
}
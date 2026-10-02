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
      <header className="sticky top-0 z-50 border-b border-zinc-200 bg-white/90 backdrop-blur">
        <div className="mx-auto flex max-w-7xl items-center justify-between px-6 py-5">
          <Link href="/" className="group flex items-center gap-3">
  <span className="flex h-10 w-10 items-center justify-center rounded-xl bg-black text-lg font-bold text-white transition group-hover:scale-105">
    m
  </span>

  <span className="text-xl font-semibold tracking-tight">
    THE MOTI GROUP<span className="text-cyan-500">.</span>
  </span>
</Link>

          <nav className="hidden gap-8 text-sm font-medium text-zinc-600 md:flex">
            <a href="#about" className="hover:text-black">
              About
            </a>
            <a href="#ventures" className="hover:text-black">
              Ventures
            </a>
            <a href="#insights" className="hover:text-black">
              Insights
            </a>
            <a href="#contact" className="hover:text-black">
              Contact
            </a>
          </nav>

          <a
            href="#ventures"
            className="rounded-full bg-black px-5 py-2.5 text-sm font-medium text-white hover:bg-zinc-800"
          >
            Explore
          </a>
        </div>
      </header>

      {/* HERO */}
      <section className="relative overflow-hidden bg-black px-6 py-24 text-white sm:px-10 sm:py-32">
  <div className="absolute -right-20 -top-20 h-72 w-72 rounded-full bg-cyan-500/20 blur-3xl" />
  <div className="absolute -bottom-20 -left-20 h-72 w-72 rounded-full bg-blue-500/10 blur-3xl" />

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
      <section id="about" className="bg-zinc-950 text-white">
        <div className="mx-auto grid max-w-7xl gap-14 px-6 py-28 lg:grid-cols-2">
          <div>
            <p className="text-sm font-semibold uppercase tracking-[0.2em] text-cyan-400">
              About us
            </p>

            <h2 className="mt-5 text-4xl font-semibold tracking-tight sm:text-6xl">
              Built around
              <br />
              ideas that matter.
            </h2>
          </div>

          <div className="text-lg leading-8 text-zinc-400">
            <p>
              the moti group is an umbrella platform bringing together
              different businesses, digital initiatives and content
              verticals.
            </p>

            <p className="mt-6">
              Our approach is simple: create useful platforms, build
              trusted experiences and explore opportunities across
              industries.
            </p>

            <p className="mt-6">
              Each venture has its own purpose while remaining connected
              to a larger ecosystem.
            </p>
          </div>
        </div>
      </section>

      {/* VENTURES */}
      <section id="ventures" className="mx-auto max-w-7xl px-6 py-28">
        <div className="max-w-2xl">
          <p className="text-sm font-semibold uppercase tracking-[0.2em] text-cyan-600">
            Our ventures
          </p>

          <h2 className="mt-4 text-4xl font-semibold tracking-tight sm:text-6xl">
            Different verticals.
            <br />
            One ecosystem.
          </h2>

          <p className="mt-6 text-lg leading-8 text-zinc-600">
            Explore the platforms and ideas that form the growing
            the moti group ecosystem.
          </p>
        </div>

        <div className="mt-14 grid gap-5 md:grid-cols-2 lg:grid-cols-3">
          {ventures.map((venture, index) => (
            <a
              key={venture.title}
              href={venture.href}
              target={venture.href.startsWith("http") ? "_blank" : undefined}
              rel={
                venture.href.startsWith("http")
                  ? "noreferrer"
                  : undefined
              }
              className={`group rounded-3xl border p-8 transition duration-300 hover:-translate-y-1 hover:shadow-xl ${
                index === 0
                  ? "border-cyan-200 bg-cyan-50"
                  : "border-zinc-200 bg-white"
              }`}
            >
              <div className="flex items-start justify-between">
                <span className="rounded-full bg-white px-3 py-1 text-xs font-medium text-zinc-600 shadow-sm">
                  {venture.category}
                </span>

                <span className="text-xl text-zinc-400 group-hover:text-black">
                  ↗
                </span>
              </div>

              <h3 className="mt-20 text-2xl font-semibold">
                {venture.title}
              </h3>

              <p className="mt-3 leading-7 text-zinc-600">
                {venture.description}
              </p>

              <p className="mt-8 text-sm font-semibold">
                Explore venture →
              </p>
            </a>
          ))}
        </div>
      </section>

      {/* INSIGHTS */}
      <section id="insights" className="border-y border-zinc-200 bg-zinc-50">
        <div className="mx-auto max-w-7xl px-6 py-28">
          <div className="max-w-3xl">
            <p className="text-sm font-semibold uppercase tracking-[0.2em] text-cyan-600">
              Insights
            </p>

            <h2 className="mt-4 text-4xl font-semibold tracking-tight sm:text-6xl">
              Ideas, information
              <br />
              & useful discoveries.
            </h2>

            <p className="mt-6 text-lg leading-8 text-zinc-600">
              Explore content across health, technology, finance and
              deals — created to be useful, simple and accessible.
            </p>
          </div>

          <div className="mt-14 grid gap-4 md:grid-cols-2">
            {[
              ["01", "Health", "Health, wellness and lifestyle information."],
              ["02", "Technology", "Technology, digital trends and useful tools."],
              ["03", "Finance", "Financial knowledge explained simply."],
              ["04", "Deals", "Offers, savings and value-focused discoveries."],
            ].map(([number, title, text]) => (
              <div
                key={number}
                className="flex gap-6 rounded-3xl border border-zinc-200 bg-white p-7 hover:border-zinc-400"
              >
                <span className="text-sm font-semibold text-cyan-600">
                  {number}
                </span>

                <div>
                  <h3 className="text-xl font-semibold">{title}</h3>
                  <p className="mt-2 leading-7 text-zinc-500">
                    {text}
                  </p>
                </div>
              </div>
            ))}
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
      <footer className="bg-zinc-950 text-zinc-500">
        <div className="mx-auto flex max-w-7xl flex-col gap-6 px-6 py-10 sm:flex-row sm:items-center sm:justify-between">
          <div>
            <p className="text-lg font-semibold text-white">
              the moti group<span className="text-cyan-500">.</span>
            </p>

            <p className="mt-1 text-sm">
              One group. Multiple possibilities.
            </p>
          </div>

          <p className="text-xs">
            © {new Date().getFullYear()} the moti group. All rights reserved.
          </p>
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
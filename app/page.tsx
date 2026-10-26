
"use client";

import Link from "next/link";
import { useState } from "react";

const ventures = [
  {
    name: "MOTI Diagnostics",
    category: "Healthcare",
    description: "Reliable diagnostic services for better-informed healthcare.",
    href: "https://diagnostics.themotigroup.co.in/",
    image:
      "https://images.unsplash.com/photo-1579684385127-1ef15d508118?auto=format&fit=crop&w=900&q=85",
    tag: "Healthcare",
  },
  {
    name: "Health",
    category: "Health & Wellness",
    description: "Health articles, wellness tips and useful everyday guidance.",
    href: "https://health.themotigroup.co.in/",
    image:
      "https://images.unsplash.com/photo-1505751172876-fa1923c5c528?auto=format&fit=crop&w=900&q=85",
    tag: "Health",
  },
  {
    name: "TechLab",
    category: "Technology",
    description: "Technology news, digital tools and practical tech guides.",
    href: "https://techlab.themotigroup.co.in/",
    image:
      "https://images.unsplash.com/photo-1498050108023-c5249f4df085?auto=format&fit=crop&w=900&q=85",
    tag: "Technology",
  },
  {
    name: "Finance",
    category: "Money & Finance",
    description: "Financial knowledge and useful insights for everyday decisions.",
    href: "https://financial.themotigroup.co.in/",
    image:
      "https://images.unsplash.com/photo-1460925895917-afdab827c52f?auto=format&fit=crop&w=900&q=85",
    tag: "Finance",
  },
  {
    name: "Dealz",
    category: "Deals & Offers",
    description: "Discover useful deals, offers and smart shopping opportunities.",
    href: "https://dealz.themotigroup.co.in/",
    image:
      "https://images.unsplash.com/photo-1556742049-0cfed4f6a45d?auto=format&fit=crop&w=900&q=85",
    tag: "Deals",
  },
];

const featuredArticle = {
  title: "Diabetes Test – Mira Road: Complete Guide",
  description:
    "Learn about diabetes testing, available tests, preparation and what to expect.",
  href: "https://health.themotigroup.co.in/2026/07/diabetes-test-mira-road.html",
  image:
    "https://images.unsplash.com/photo-1576091160399-112ba8d25d1d?auto=format&fit=crop&w=1400&q=90",
};

const trending = [
  {
    category: "Health",
    title: "Diabetes Test – Mira Road",
    href: featuredArticle.href,
    image:
      "https://images.unsplash.com/photo-1576091160399-112ba8d25d1d?auto=format&fit=crop&w=300&q=80",
    time: "Health guide",
  },
  {
    category: "TechLab",
    title: "Explore Technology & Digital Tools",
    href: "https://techlab.themotigroup.co.in/",
    image:
      "https://images.unsplash.com/photo-1498050108023-c5249f4df085?auto=format&fit=crop&w=300&q=80",
    time: "Technology",
  },
  {
    category: "Finance",
    title: "Discover Finance Insights",
    href: "https://financial.themotigroup.co.in/",
    image:
      "https://images.unsplash.com/photo-1460925895917-afdab827c52f?auto=format&fit=crop&w=300&q=80",
    time: "Money",
  },
  {
    category: "Dealz",
    title: "Explore Deals & Offers",
    href: "https://dealz.themotigroup.co.in/",
    image:
      "https://images.unsplash.com/photo-1556742049-0cfed4f6a45d?auto=format&fit=crop&w=900&q=85",
    time: "Shopping",
  },
];

const translations = {
  en: {
    nav: ["About", "Ventures", "Insights", "Contact"],
    explore: "Explore ventures",
    eyebrow: "A connected ecosystem",
    hero: "One group.",
    hero2: "Multiple possibilities.",
    heroText:
      "Meaningful digital experiences across healthcare, technology, finance and everyday discoveries.",
    aboutLabel: "ABOUT THE MOTI GROUP",
    aboutTitle: "Ideas that make everyday life better.",
    aboutText:
      "The Moti Group brings together a growing ecosystem of digital ventures and services built around everyday needs.",
    aboutText2:
      "From healthcare and technology to finance and useful deals, our goal is to make trusted information and helpful services easier to discover.",
    ventureLabel: "EXPLORE OUR ECOSYSTEM",
    ventureTitle: "Different ventures. One vision.",
    ventureText:
      "Discover the specialist platforms that make up The Moti Group.",
    visit: "Visit website",
    insightLabel: "DISCOVER MORE",
    insightTitle: "Useful ideas for everyday decisions.",
    contactLabel: "LET'S CONNECT",
    contactTitle: "Have an idea? Let's talk.",
    contactText:
      "For questions, partnerships or new opportunities, we'd love to hear from you.",
    email: "Email us",
    whatsapp: "WhatsApp us",
    footer: "One group. Multiple possibilities.",
  },
  mr: {
    nav: ["आमच्याबद्दल", "उपक्रम", "माहिती", "संपर्क"],
    explore: "उपक्रम पहा",
    eyebrow: "एक जोडलेले व्यासपीठ",
    hero: "एक समूह.",
    hero2: "अनेक शक्यता.",
    heroText:
      "आरोग्य, तंत्रज्ञान, आर्थिक माहिती आणि दैनंदिन गरजांसाठी उपयुक्त डिजिटल अनुभव.",
    aboutLabel: "मोटी ग्रुपबद्दल",
    aboutTitle: "दैनंदिन जीवनासाठी उपयुक्त कल्पना.",
    aboutText:
      "मोटी ग्रुप विविध डिजिटल उपक्रम आणि सेवांना एका व्यासपीठावर आणतो.",
    aboutText2:
      "आरोग्यसेवा, तंत्रज्ञान, आर्थिक माहिती आणि उपयुक्त ऑफर्स सहज उपलब्ध करून देणे हे आमचे ध्येय आहे.",
    ventureLabel: "आमचे उपक्रम",
    ventureTitle: "वेगवेगळे उपक्रम. एकच दृष्टीकोन.",
    ventureText:
      "मोटी ग्रुपमधील विविध डिजिटल प्लॅटफॉर्मची ओळख करून घ्या.",
    visit: "वेबसाइट पहा",
    insightLabel: "अधिक जाणून घ्या",
    insightTitle: "दैनंदिन निर्णयांसाठी उपयुक्त माहिती.",
    contactLabel: "चला, जोडले जाऊया",
    contactTitle: "नवीन कल्पना? चला बोलूया.",
    contactText:
      "प्रश्न, भागीदारी किंवा नवीन संधींसाठी आमच्याशी संपर्क साधा.",
    email: "ईमेल करा",
    whatsapp: "WhatsApp वर संपर्क",
    footer: "एक समूह. अनेक शक्यता.",
  },
};

export default function Home() {
  return (
    <main className="min-h-screen bg-[#f5f6f8] text-slate-900">
      {/* HEADER */}
      <header className="sticky top-0 z-50 border-b border-white/10 bg-[#08111c]/95 text-white shadow-lg backdrop-blur-xl">
        <div className="mx-auto flex max-w-[1440px] items-center justify-between gap-5 px-4 py-4 sm:px-7">
          <Link href="/" className="flex shrink-0 items-center gap-3">
            <span className="flex h-11 w-11 items-center justify-center rounded-xl bg-white text-2xl font-black text-[#08111c]">
              m.
            </span>
            <span className="text-lg font-bold tracking-tight sm:text-2xl">
              the moti group<span className="text-orange-500">.</span>
            </span>
          </Link>

          <nav className="hidden items-center gap-7 text-sm font-semibold lg:flex">
            <a className="text-orange-400" href="#home">Home</a>
            <a className="transition hover:text-orange-400" href="#ventures">Ventures</a>
            <a className="transition hover:text-orange-400" href="#articles">Blog</a>
            <a className="transition hover:text-orange-400" href="#about">About</a>
            <a className="transition hover:text-orange-400" href="#contact">Contact</a>
          </nav>

          <div className="flex items-center gap-3">
            <div className="hidden rounded-lg border border-white/15 p-1 text-xs font-semibold sm:flex">
              <span className="rounded-md bg-white/15 px-3 py-2">EN</span>
              <a
                href="https://health.themotigroup.co.in/2026/08/Diabetes%20Test%20When%20Should%20You%20Get%20Tested.html"
                className="rounded-md px-3 py-2 text-white/75 hover:bg-white/10"
              >
                मराठी
              </a>
            </div>
            <a
              href="#ventures"
              className="rounded-full bg-orange-500 px-4 py-2.5 text-sm font-bold text-white transition hover:bg-orange-600 sm:px-5"
            >
              Explore
            </a>
          </div>
        </div>
      </header>

      {/* HERO + TRENDING */}
      <section id="home" className="mx-auto max-w-[1440px] px-4 pt-5 sm:px-7">
        <div className="grid gap-5 lg:grid-cols-[1.9fr_0.9fr]">
          <div className="relative isolate flex min-h-[420px] overflow-hidden rounded-3xl bg-[#07111e] text-white sm:min-h-[490px]">
            <img
              src="https://images.unsplash.com/photo-1498050108023-c5249f4df085?auto=format&fit=crop&w=1800&q=90"
              alt="Modern technology workspace"
              className="absolute inset-0 -z-20 h-full w-full object-cover"
            />
            <div className="absolute inset-0 -z-10 bg-gradient-to-r from-[#06101c] via-[#06101c]/90 to-[#06101c]/20" />
            <div className="absolute inset-0 -z-10 bg-gradient-to-t from-[#06101c]/60 to-transparent" />

            <div className="flex max-w-2xl flex-col items-start justify-center p-7 sm:p-12 lg:p-14">
              <span className="rounded-full bg-orange-500 px-4 py-1.5 text-xs font-extrabold uppercase tracking-wider">
                One group. Many possibilities.
              </span>
              <h1 className="mt-6 text-4xl font-black leading-[1.08] tracking-tight sm:text-6xl">
                Discover ideas.
                <br />
                Explore what&apos;s next.
              </h1>
              <p className="mt-5 max-w-lg text-base leading-7 text-white/80 sm:text-lg">
                Healthcare, technology, finance and digital discoveries —
                all connected through the MOTI Group ecosystem.
              </p>
              <div className="mt-8 flex flex-wrap gap-3">
                <a
                  href="#ventures"
                  className="rounded-xl bg-orange-500 px-6 py-3.5 text-sm font-bold text-white transition hover:bg-orange-600"
                >
                  Explore our ventures →
                </a>
                <a
                  href="#articles"
                  className="rounded-xl border border-white/40 bg-white/10 px-6 py-3.5 text-sm font-bold text-white backdrop-blur transition hover:bg-white/20"
                >
                  Latest article
                </a>
              </div>
            </div>
          </div>

          {/* TRENDING */}
          <aside className="rounded-3xl border border-slate-200 bg-white p-5 shadow-sm sm:p-6">
            <div className="mb-5 flex items-center gap-2">
              <span className="text-xl text-orange-500">🔥</span>
              <h2 className="text-xl font-extrabold">Trending Now</h2>
            </div>
            <div className="space-y-5">
              {trending.map((item, index) => (
                <a
                  key={item.title}
                  href={item.href}
                  className="group flex items-center gap-3"
                >
                  <span className="w-4 shrink-0 text-lg font-extrabold text-slate-400">
                    {index + 1}
                  </span>
                  <img
                    src={item.image}
                    alt=""
                    className="h-[68px] w-[82px] shrink-0 rounded-xl object-cover"
                  />
                  <span className="min-w-0">
                    <span className="block text-sm font-bold leading-5 transition group-hover:text-orange-600">
                      {item.title}
                    </span>
                    <span className="mt-1 block text-xs text-slate-500">
                      {item.category} · {item.time}
                    </span>
                  </span>
                </a>
              ))}
            </div>
          </aside>
        </div>
      </section>

      {/* CATEGORY SHORTCUTS */}
      <section className="mx-auto max-w-[1440px] px-4 pt-5 sm:px-7">
        <div className="grid grid-cols-2 gap-3 sm:grid-cols-3 lg:grid-cols-5">
          {[
            { icon: "♡", title: "Health", color: "bg-emerald-500", href: ventures[1].href },
            { icon: "▦", title: "Technology", color: "bg-indigo-600", href: ventures[2].href },
            { icon: "₹", title: "Finance", color: "bg-pink-500", href: ventures[3].href },
            { icon: "◇", title: "Deals & Offers", color: "bg-orange-500", href: ventures[4].href },
            { icon: "✚", title: "Diagnostics", color: "bg-sky-600", href: ventures[0].href },
          ].map((item) => (
            <a
              key={item.title}
              href={item.href}
              className="group flex items-center gap-3 rounded-2xl border border-slate-200 bg-white p-4 shadow-sm transition hover:-translate-y-1 hover:shadow-md sm:flex-col sm:justify-center sm:gap-2 sm:py-5"
            >
              <span className={`flex h-11 w-11 items-center justify-center rounded-xl ${item.color} text-xl font-bold text-white`}>
                {item.icon}
              </span>
              <span className="text-sm font-bold">{item.title}</span>
            </a>
          ))}
        </div>
      </section>

      {/* ARTICLE + SIDEBAR */}
      <section id="articles" className="mx-auto max-w-[1440px] px-4 py-12 sm:px-7 sm:py-16">
        <div className="grid gap-7 lg:grid-cols-[1.9fr_0.9fr]">
          <div>
            <div className="mb-6 flex items-end justify-between gap-3">
              <div>
                <p className="text-xs font-extrabold uppercase tracking-[0.2em] text-orange-600">
                  Fresh from MOTI Health
                </p>
                <h2 className="mt-2 text-3xl font-black tracking-tight sm:text-4xl">
                  Latest Article
                </h2>
              </div>
              <a
                href="https://health.themotigroup.co.in/"
                className="shrink-0 text-sm font-bold text-orange-600 hover:text-orange-700"
              >
                Visit Health →
              </a>
            </div>

            {/* ONE BLOG CARD ONLY */}
            <article className="overflow-hidden rounded-3xl border border-slate-200 bg-white shadow-sm transition hover:shadow-xl">
              <a href={featuredArticle.href} className="group block">
                <div className="relative h-56 overflow-hidden sm:h-[360px]">
                  <img
                    src={featuredArticle.image}
                    alt="Healthcare professional in a clinical setting"
                    className="h-full w-full object-cover transition duration-500 group-hover:scale-105"
                  />
                  <span className="absolute left-5 top-5 rounded-full bg-emerald-500 px-4 py-2 text-xs font-extrabold text-white shadow">
                    HEALTH
                  </span>
                </div>
                <div className="p-5 sm:p-8">
                  <p className="text-xs font-semibold uppercase tracking-wider text-slate-400">
                    Featured health guide
                  </p>
                  <h3 className="mt-3 text-2xl font-extrabold leading-tight sm:text-3xl">
                    {featuredArticle.title}
                  </h3>
                  <p className="mt-3 max-w-2xl leading-7 text-slate-600">
                    {featuredArticle.description}
                  </p>
                  <span className="mt-6 inline-flex items-center gap-2 rounded-xl bg-orange-500 px-5 py-3 text-sm font-bold text-white transition group-hover:bg-orange-600">
                    Read Article <span aria-hidden="true">→</span>
                  </span>
                </div>
              </a>
            </article>
            <p className="mt-3 text-xs leading-5 text-slate-500">
              The article includes its own English–Marathi language switch.
              Open it to choose your preferred language.
            </p>
          </div>

          {/* NEWSLETTER / VENTURE PROMO */}
          <aside className="space-y-5">
            <div className="rounded-3xl bg-[#e5f9fc] p-6 sm:p-7">
              <div className="flex items-center gap-3">
                <span className="flex h-11 w-11 items-center justify-center rounded-xl bg-white text-xl">
                  ✉
                </span>
                <h3 className="text-xl font-extrabold">Stay Connected</h3>
              </div>
              <p className="mt-4 text-sm leading-6 text-slate-600">
                Explore updates, useful articles and services across our
                digital ventures.
              </p>
              <a
                href="mailto:info@themotigroup.co.in"
                className="mt-5 block rounded-xl bg-[#08111c] px-5 py-3.5 text-center text-sm font-bold text-white transition hover:bg-slate-800"
              >
                Contact the MOTI Group
              </a>
            </div>

            <a
              href="#ventures"
              className="group relative block min-h-[260px] overflow-hidden rounded-3xl bg-[#08243b] text-white"
            >
              <img
                src="https://images.unsplash.com/photo-1519389950473-47ba0277781c?auto=format&fit=crop&w=900&q=85"
                alt="Team collaborating with digital technology"
                className="absolute inset-0 h-full w-full object-cover opacity-50 transition duration-500 group-hover:scale-105"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-[#06111d] via-[#06111d]/65 to-transparent" />
              <div className="relative flex min-h-[260px] flex-col items-start justify-end p-6">
                <p className="text-xs font-extrabold uppercase tracking-[0.2em] text-cyan-300">
                  One ecosystem
                </p>
                <h3 className="mt-3 text-3xl font-black">
                  Explore Our
                  <br />
                  Digital Ventures
                </h3>
                <p className="mt-3 text-sm leading-6 text-white/80">
                  Healthcare · Technology · Finance · Deals
                </p>
                <span className="mt-5 rounded-xl border border-white/40 px-4 py-2.5 text-sm font-bold transition group-hover:bg-white group-hover:text-slate-950">
                  Learn More →
                </span>
              </div>
            </a>
          </aside>
        </div>
      </section>

      {/* VENTURES */}
      <section id="ventures" className="border-y border-slate-200 bg-white py-14 sm:py-20">
        <div className="mx-auto max-w-[1440px] px-4 sm:px-7">
          <div className="mb-8 flex flex-col justify-between gap-4 sm:flex-row sm:items-end">
            <div>
              <p className="text-xs font-extrabold uppercase tracking-[0.2em] text-orange-600">
                Discover our ecosystem
              </p>
              <h2 className="mt-2 text-3xl font-black tracking-tight sm:text-4xl">
                More from Our Ventures
              </h2>
            </div>
            <p className="max-w-lg text-sm leading-6 text-slate-500">
              Different areas of everyday life, brought together under
              the MOTI Group.
            </p>
          </div>

          <div className="grid gap-5 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-5">
            {ventures.map((venture) => (
              <a
                key={venture.name}
                href={venture.href}
                className="group overflow-hidden rounded-2xl border border-slate-200 bg-white transition duration-300 hover:-translate-y-1 hover:shadow-xl"
              >
                <div className="h-40 overflow-hidden">
                  <img
                    src={venture.image}
                    alt={venture.name}
                    className="h-full w-full object-cover transition duration-500 group-hover:scale-105"
                  />
                </div>
                <div className="p-5">
                  <span className="rounded-full bg-orange-50 px-3 py-1 text-[11px] font-extrabold uppercase tracking-wide text-orange-700">
                    {venture.tag}
                  </span>
                  <h3 className="mt-4 text-lg font-extrabold">
                    {venture.name}
                  </h3>
                  <p className="mt-2 text-sm leading-6 text-slate-600">
                    {venture.description}
                  </p>
                  <span className="mt-5 inline-block text-sm font-bold text-orange-600">
                    Explore venture →
                  </span>
                </div>
              </a>
            ))}
          </div>
        </div>
      </section>

      {/* ABOUT */}
      <section id="about" className="mx-auto grid max-w-[1440px] gap-10 px-4 py-16 sm:px-7 sm:py-24 lg:grid-cols-2 lg:items-center">
        <div>
          <p className="text-xs font-extrabold uppercase tracking-[0.2em] text-orange-600">
            About the group
          </p>
          <h2 className="mt-3 text-4xl font-black leading-tight tracking-tight sm:text-5xl">
            One group.
            <br />
            Multiple possibilities.
          </h2>
        </div>
        <div>
          <p className="text-lg leading-8 text-slate-600">
            The MOTI Group brings together healthcare, technology,
            finance, deals and digital content in one growing ecosystem.
            Our aim is to make useful services and information easier to
            discover and access.
          </p>
          <a
            href="#contact"
            className="mt-6 inline-flex rounded-xl bg-[#08111c] px-5 py-3.5 text-sm font-bold text-white transition hover:bg-orange-600"
          >
            Connect with us →
          </a>
        </div>
      </section>

      {/* CONTACT */}
      <section id="contact" className="bg-[#08111c] text-white">
        <div className="mx-auto flex max-w-[1440px] flex-col gap-8 px-4 py-14 sm:px-7 sm:py-20 md:flex-row md:items-center md:justify-between">
          <div>
            <p className="text-xs font-extrabold uppercase tracking-[0.2em] text-orange-400">
              Let&apos;s connect
            </p>
            <h2 className="mt-3 text-3xl font-black sm:text-5xl">
              Let&apos;s build what&apos;s next.
            </h2>
            <p className="mt-4 max-w-xl leading-7 text-slate-300">
              Interested in our ventures, collaborations or opportunities?
              We&apos;d love to hear from you.
            </p>
          </div>
          <div className="flex flex-wrap gap-3">
            <a
              href="mailto:info@themotigroup.co.in"
              className="rounded-xl bg-white px-6 py-3.5 text-sm font-bold text-[#08111c] transition hover:bg-orange-400"
            >
              Email Us
            </a>
            <a
              href="https://wa.me/919867242848"
              target="_blank"
              rel="noreferrer"
              className="rounded-xl border border-white/30 px-6 py-3.5 text-sm font-bold transition hover:bg-white/10"
            >
              WhatsApp
            </a>
          </div>
        </div>
      </section>

      {/* FOOTER */}
      <footer className="bg-[#050b12] text-slate-400">
        <div className="mx-auto flex max-w-[1440px] flex-col gap-6 px-4 py-8 sm:px-7 md:flex-row md:items-center md:justify-between">
          <div>
            <p className="text-lg font-extrabold text-white">
              the moti group<span className="text-orange-500">.</span>
            </p>
            <p className="mt-1 text-sm">One group. Multiple possibilities.</p>
          </div>
          <div className="flex flex-wrap gap-x-5 gap-y-3 text-sm">
            <a href="#about" className="hover:text-white">About</a>
            <a href="#ventures" className="hover:text-white">Ventures</a>
            <a href="#articles" className="hover:text-white">Blog</a>
            <a href="#contact" className="hover:text-white">Contact</a>
            <a href="mailto:info@themotigroup.co.in" className="hover:text-white">
              Email
            </a>
          </div>
          <p className="text-xs">
            © {new Date().getFullYear()} the moti group. All rights reserved.
          </p>
        </div>
      </footer>

      {/* FLOATING CONTACT */}
      <div className="fixed bottom-5 right-4 z-50 flex flex-col gap-3">
        <a
          href="https://wa.me/918692823879"
          target="_blank"
          rel="noreferrer"
          aria-label="Chat on WhatsApp"
          className="flex h-12 w-12 items-center justify-center rounded-full bg-[#20c765] text-lg font-black text-white shadow-xl transition hover:scale-110"
        >
          W
        </a>
        <a
          href="tel:+918286289143"
          aria-label="Call MOTI Group"
          className="flex h-12 w-12 items-center justify-center rounded-full bg-orange-500 text-xl text-white shadow-xl transition hover:scale-110"
        >
          ☎
        </a>
      </div>
    </main>
  );
}

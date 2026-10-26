
"use client";

import Link from "next/link";
import { useState } from "react";

const ventures = [
  {
    name: "MOTI Diagnostics",
    category: "Healthcare",
    icon: "M",
    description: "Reliable diagnostic services and accessible healthcare.",
    href: "https://diagnostics.themotigroup.co.in/",
    color: "from-cyan-500 to-blue-600",
  },
  {
    name: "Health",
    category: "Wellness",
    icon: "H",
    description: "Health information, wellness resources and daily guidance.",
    href: "https://health.themotigroup.co.in/",
    color: "from-emerald-400 to-teal-600",
  },
  {
    name: "TechLab",
    category: "Technology",
    icon: "T",
    description: "Technology, digital tools and useful ideas.",
    href: "https://techlab.themotigroup.co.in/",
    color: "from-violet-500 to-indigo-600",
  },
  {
    name: "Dealz",
    category: "Deals & Offers",
    icon: "D",
    description: "Discover offers, deals and value-focused opportunities.",
    href: "https://dealz.themotigroup.co.in/",
    color: "from-amber-400 to-orange-500",
  },
  {
    name: "Finance",
    category: "Finance",
    icon: "₹",
    description: "Simple financial information for everyday decisions.",
    href: "https://financial.themotigroup.co.in/",
    color: "from-rose-500 to-pink-600",
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
  const [language, setLanguage] = useState<"en" | "mr">("en");
  const [menuOpen, setMenuOpen] = useState(false);
  const t = translations[language];

  const sectionLinks = ["#about", "#ventures", "#insights", "#contact"];

  return (
    <main className="min-h-screen overflow-hidden bg-slate-50 text-slate-950">
      <header className="sticky top-0 z-50 border-b border-slate-200 bg-white/90 backdrop-blur-xl">
        <div className="mx-auto flex max-w-7xl items-center justify-between gap-3 px-4 py-4 sm:px-6 lg:px-8">
          <Link href="/" className="flex items-center gap-3">
            <span className="flex h-11 w-11 items-center justify-center rounded-2xl bg-slate-950 text-xl font-black text-white">
              m<span className="text-cyan-400">.</span>
            </span>
            <span className="text-lg font-extrabold tracking-tight sm:text-xl">
              the moti group<span className="text-cyan-500">.</span>
            </span>
          </Link>

          <nav className="hidden items-center gap-6 text-sm font-semibold text-slate-600 lg:flex">
            {t.nav.map((label, i) => (
              <a key={label} href={sectionLinks[i]} className="transition hover:text-cyan-700">
                {label}
              </a>
            ))}
          </nav>

          <div className="flex items-center gap-2">
            <div className="flex rounded-full border border-slate-200 bg-slate-50 p-1 text-xs font-bold">
              <button
                onClick={() => setLanguage("en")}
                className={`rounded-full px-3 py-2 ${language === "en" ? "bg-slate-950 text-white" : "text-slate-500"}`}
              >
                EN
              </button>
              <button
                onClick={() => setLanguage("mr")}
                className={`rounded-full px-3 py-2 ${language === "mr" ? "bg-slate-950 text-white" : "text-slate-500"}`}
              >
                मराठी
              </button>
            </div>
            <button
              className="rounded-xl border border-slate-200 px-3 py-2 text-xl lg:hidden"
              onClick={() => setMenuOpen(!menuOpen)}
              aria-label="Toggle menu"
              aria-expanded={menuOpen}
            >
              {menuOpen ? "×" : "☰"}
            </button>
          </div>
        </div>

        {menuOpen && (
          <nav className="border-t border-slate-100 bg-white p-4 lg:hidden">
            {t.nav.map((label, i) => (
              <a
                key={label}
                href={sectionLinks[i]}
                onClick={() => setMenuOpen(false)}
                className="block rounded-xl px-4 py-3 font-semibold hover:bg-slate-50"
              >
                {label}
              </a>
            ))}
          </nav>
        )}
      </header>

      <section className="relative isolate overflow-hidden bg-slate-950 text-white">
        <div className="absolute inset-0 -z-10 bg-[radial-gradient(ellipse_at_top_right,rgba(6,182,212,0.3),transparent_45%),radial-gradient(ellipse_at_bottom_left,rgba(79,70,229,0.25),transparent_45%)]" />

        <div className="mx-auto grid max-w-7xl items-center gap-12 px-5 py-20 sm:px-8 sm:py-28 lg:grid-cols-2 lg:px-10 lg:py-32">
          <div>
            <p className="mb-7 inline-flex rounded-full border border-white/15 bg-white/5 px-4 py-2 text-xs font-bold uppercase tracking-widest text-cyan-300">
              ✦ {t.eyebrow}
            </p>
            <h1 className="text-5xl font-black leading-tight tracking-tight sm:text-6xl lg:text-7xl">
              {t.hero}
              <br />
              <span className="text-cyan-300">{t.hero2}</span>
            </h1>
            <p className="mt-7 max-w-xl text-lg leading-8 text-slate-300">
              {t.heroText}
            </p>
            <div className="mt-9 flex flex-wrap gap-3">
              <a
                href="#ventures"
                className="rounded-full bg-cyan-400 px-6 py-3.5 text-sm font-extrabold text-slate-950 transition hover:bg-cyan-300"
              >
                {t.explore} ↗
              </a>
              <a
                href="#contact"
                className="rounded-full border border-white/25 px-6 py-3.5 text-sm font-bold hover:bg-white/10"
              >
                {t.nav[3]}
              </a>
            </div>
            <div className="mt-10 flex flex-wrap gap-5 text-sm text-slate-400">
              <span>✦ People-first</span>
              <span>✦ Digital-first</span>
              <span>✦ Future-focused</span>
            </div>
          </div>

          <div className="grid grid-cols-2 gap-3 sm:gap-4">
            {ventures.map((v, i) => (
              <a
                key={v.name}
                href={v.href}
                target="_blank"
                rel="noreferrer"
                className={`group rounded-3xl border border-white/10 bg-white/[0.07] p-5 transition hover:-translate-y-1 hover:bg-white/[0.12] sm:p-6 ${i === 4 ? "col-span-2 flex items-center gap-4" : ""}`}
              >
                <span className={`flex h-12 w-12 items-center justify-center rounded-2xl bg-gradient-to-br ${v.color} text-xl font-black text-white shadow-lg`}>
                  {v.icon}
                </span>
                <h2 className="mt-5 text-lg font-extrabold">{v.name}</h2>
                <p className="mt-1 text-xs text-slate-400">{v.category}</p>
                <span className="mt-5 block text-sm font-bold text-cyan-300">
                  {t.visit} ↗
                </span>
              </a>
            ))}
          </div>
        </div>

        <div className="border-t border-white/10 bg-white/[0.03]">
          <div className="mx-auto grid max-w-7xl grid-cols-2 gap-5 px-5 py-7 sm:px-8 md:grid-cols-4 lg:px-10">
            {[
              ["05", language === "mr" ? "मुख्य उपक्रम" : "Core ventures"],
              ["01", language === "mr" ? "एकच दृष्टीकोन" : "Shared vision"],
              ["Digital", language === "mr" ? "डिजिटल अनुभव" : "Digital experiences"],
              ["∞", language === "mr" ? "अनेक शक्यता" : "Possibilities ahead"],
            ].map(([number, label]) => (
              <div key={label}>
                <p className="text-2xl font-black sm:text-3xl">{number}</p>
                <p className="mt-1 text-sm text-slate-400">{label}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section id="about" className="scroll-mt-24 px-5 py-20 sm:px-8 sm:py-28 lg:px-10">
        <div className="mx-auto max-w-7xl">
          <div className="grid gap-8 lg:grid-cols-2 lg:gap-20">
            <div>
              <p className="text-xs font-extrabold uppercase tracking-widest text-cyan-700">{t.aboutLabel}</p>
              <h2 className="mt-4 text-4xl font-black leading-tight tracking-tight sm:text-5xl">{t.aboutTitle}</h2>
            </div>
            <div className="text-lg leading-8 text-slate-600">
              <p>{t.aboutText}</p>
              <p className="mt-5">{t.aboutText2}</p>
            </div>
          </div>

          <div className="mt-14 grid gap-4 sm:grid-cols-2 lg:grid-cols-4">
            {[
              ["01", "Trust & clarity", "विश्वास आणि स्पष्टता"],
              ["02", "Useful innovation", "उपयुक्त नवकल्पना"],
              ["03", "Everyday value", "दैनंदिन मूल्य"],
              ["04", "Connected growth", "एकत्रित प्रगती"],
            ].map(([num, en, mr]) => (
              <div key={num} className="rounded-2xl border border-slate-200 bg-white p-6 shadow-sm transition hover:-translate-y-1 hover:shadow-lg">
                <span className="text-sm font-black text-cyan-700">{num}</span>
                <h3 className="mt-5 text-lg font-extrabold">{language === "en" ? en : mr}</h3>
                <div className="mt-4 h-1 w-12 rounded-full bg-gradient-to-r from-cyan-400 to-blue-600" />
              </div>
            ))}
          </div>
        </div>
      </section>

      <section id="ventures" className="scroll-mt-24 border-y border-slate-200 bg-white px-5 py-20 sm:px-8 sm:py-28 lg:px-10">
        <div className="mx-auto max-w-7xl">
          <p className="text-xs font-extrabold uppercase tracking-widest text-cyan-700">{t.ventureLabel}</p>
          <div className="mt-4 flex flex-col justify-between gap-5 md:flex-row md:items-end">
            <h2 className="text-4xl font-black tracking-tight sm:text-5xl">{t.ventureTitle}</h2>
            <p className="max-w-md leading-7 text-slate-500">{t.ventureText}</p>
          </div>

          <div className="mt-12 grid gap-5 sm:grid-cols-2 xl:grid-cols-3">
            {ventures.map((v) => (
              <a
                key={v.name}
                href={v.href}
                target="_blank"
                rel="noreferrer"
                className="group flex min-h-64 flex-col rounded-3xl border border-slate-200 bg-slate-50 p-6 transition duration-300 hover:-translate-y-1 hover:border-cyan-200 hover:bg-white hover:shadow-xl sm:p-7"
              >
                <div className="flex items-start justify-between">
                  <span className={`flex h-14 w-14 items-center justify-center rounded-2xl bg-gradient-to-br ${v.color} text-xl font-black text-white shadow-md`}>
                    {v.icon}
                  </span>
                  <span className="rounded-full bg-white px-3 py-1.5 text-xs font-bold text-slate-500 ring-1 ring-slate-200">{v.category}</span>
                </div>
                <h3 className="mt-7 text-2xl font-black tracking-tight">{v.name}</h3>
                <p className="mt-3 flex-1 leading-7 text-slate-600">
                  {language === "mr"
                    ? {
                        "MOTI Diagnostics": "विश्वासार्ह तपासणी आणि आरोग्यसेवा.",
                        Health: "आरोग्यविषयक माहिती आणि जीवनशैलीसाठी मार्गदर्शन.",
                        TechLab: "तंत्रज्ञान, डिजिटल साधने आणि उपयुक्त माहिती.",
                        Dealz: "ऑफर्स, सवलती आणि फायदेशीर संधी.",
                        Finance: "दैनंदिन आर्थिक निर्णयांसाठी उपयुक्त माहिती.",
                      }[v.name]
                    : v.description}
                </p>
                <span className="mt-6 flex items-center justify-between border-t border-slate-200 pt-4 text-sm font-extrabold text-cyan-700">
                  {t.visit}<span className="transition group-hover:translate-x-1">↗</span>
                </span>
              </a>
            ))}
          </div>
        </div>
      </section>

      <section id="insights" className="scroll-mt-24 px-5 py-20 sm:px-8 sm:py-28 lg:px-10">
        <div className="mx-auto max-w-7xl">
          <p className="text-xs font-extrabold uppercase tracking-widest text-cyan-700">{t.insightLabel}</p>
          <h2 className="mt-4 max-w-2xl text-4xl font-black leading-tight tracking-tight sm:text-5xl">{t.insightTitle}</h2>

          <div className="mt-10 grid gap-5 md:grid-cols-3">
            {[
              { title: "Health & Wellness", mr: "आरोग्य आणि जीवनशैली", text: "Helpful information for healthier everyday living.", href: ventures[1].href, color: "text-emerald-700 bg-emerald-50" },
              { title: "Tech & Digital Life", mr: "तंत्रज्ञान आणि डिजिटल जग", text: "Explore tools and ideas shaping our connected world.", href: ventures[2].href, color: "text-violet-700 bg-violet-50" },
              { title: "Finance Made Useful", mr: "आर्थिक माहिती सोप्या भाषेत", text: "Practical knowledge for everyday money decisions.", href: ventures[4].href, color: "text-rose-700 bg-rose-50" },
            ].map((card) => (
              <a key={card.title} href={card.href} target="_blank" rel="noreferrer" className="group rounded-3xl border border-slate-200 bg-white p-7 shadow-sm transition hover:-translate-y-1 hover:shadow-lg">
                <span className={`inline-flex rounded-full px-3 py-1.5 text-xs font-black ${card.color}`}>{language === "en" ? "DISCOVER" : "माहिती"}</span>
                <h3 className="mt-5 text-xl font-black">{language === "en" ? card.title : card.mr}</h3>
                <p className="mt-3 leading-7 text-slate-600">{language === "en" ? card.text : "उपयुक्त माहिती, कल्पना आणि दैनंदिन जीवनासाठी मार्गदर्शन."}</p>
                <span className="mt-6 inline-flex text-sm font-extrabold text-cyan-700">{t.visit} ↗</span>
              </a>
            ))}
          </div>
        </div>
      </section>

      <section id="contact" className="scroll-mt-24 px-5 pb-16 sm:px-8 lg:px-10">
        <div className="relative mx-auto max-w-7xl overflow-hidden rounded-[2rem] bg-slate-950 px-6 py-14 text-white sm:px-12 sm:py-20 lg:px-16">
          <div className="absolute -right-20 -top-24 h-80 w-80 rounded-full bg-cyan-500/20 blur-3xl" />
          <div className="relative max-w-3xl">
            <p className="text-xs font-extrabold uppercase tracking-widest text-cyan-300">{t.contactLabel}</p>
            <h2 className="mt-5 text-4xl font-black leading-tight tracking-tight sm:text-6xl">{t.contactTitle}</h2>
            <p className="mt-5 max-w-xl leading-8 text-slate-300">{t.contactText}</p>
            <div className="mt-8 flex flex-wrap gap-3">
              <a href="mailto:info@themotigroup.co.in" className="rounded-full bg-white px-6 py-3.5 text-sm font-extrabold text-slate-950 hover:bg-cyan-200">{t.email} ↗</a>
              <a href="https://wa.me/919867242848" target="_blank" rel="noreferrer" className="rounded-full border border-white/25 px-6 py-3.5 text-sm font-bold hover:bg-white/10">{t.whatsapp} ↗</a>
            </div>
            <p className="mt-5 text-sm text-slate-400">info@themotigroup.co.in · +91 82862 89143</p>
          </div>
        </div>
      </section>

      <footer className="border-t border-slate-200 bg-white px-5 py-8 sm:px-8 lg:px-10">
        <div className="mx-auto flex max-w-7xl flex-col gap-5 sm:flex-row sm:items-center sm:justify-between">
          <div>
            <p className="text-lg font-black">the moti group<span className="text-cyan-600">.</span></p>
            <p className="mt-1 text-sm text-slate-500">{t.footer}</p>
          </div>
          <div className="flex flex-wrap gap-4 text-sm font-semibold text-slate-500">
            {ventures.map((v) => <a key={v.name} href={v.href} target="_blank" rel="noreferrer" className="hover:text-cyan-700">{v.name}</a>)}
          </div>
          <p className="text-xs text-slate-400">© {new Date().getFullYear()} The Moti Group</p>
        </div>
      </footer>

      <div className="fixed bottom-4 right-4 z-40 flex flex-col gap-3">
        <a href="https://wa.me/919867242848" target="_blank" rel="noreferrer" aria-label="WhatsApp" className="flex h-12 w-12 items-center justify-center rounded-full bg-emerald-500 text-lg font-black text-white shadow-xl ring-4 ring-white transition hover:scale-105">W</a>
        <a href="tel:+918286289143" aria-label="Call The Moti Group" className="flex h-12 w-12 items-center justify-center rounded-full bg-slate-950 text-xl text-white shadow-xl ring-4 ring-white transition hover:scale-105">☎</a>
      </div>
    </main>
  );
}

"use client";

import Link from "next/link";
import { useState } from "react";

type Lang = "en" | "mr";

const ventures = [
  {
    id: "diagnostics",
    name: "Moti Diagnostics",
    category: { en: "Healthcare", mr: "आरोग्यसेवा" },
    tag: { en: "Diagnostics & Lab", mr: "डायग्नोस्टिक्स आणि लॅब" },
    description: {
      en: "Reliable diagnostic services and health testing to help you make informed decisions.",
      mr: "योग्य आरोग्य निर्णय घेण्यासाठी विश्वासार्ह तपासणी आणि डायग्नोस्टिक सेवा.",
    },
    href: "https://diagnostics.themotigroup.co.in/",
    image:
      "https://images.unsplash.com/photo-1579684385127-1ef15d508118?auto=format&fit=crop&w=1000&q=85",
    cta: { en: "Explore Diagnostics", mr: "डायग्नोस्टिक्स पाहा" },
  },
  {
    id: "health",
    name: "Moti Health",
    category: { en: "Health & Wellness", mr: "आरोग्य आणि निरोगी जीवन" },
    tag: { en: "Health Information", mr: "आरोग्यविषयक माहिती" },
    description: {
      en: "Understand health topics, wellness tips and medical information in simple language.",
      mr: "आरोग्य, निरोगी जीवन आणि वैद्यकीय माहिती सोप्या भाषेत समजून घ्या.",
    },
    href: "https://health.themotigroup.co.in/",
    image:
      "https://images.unsplash.com/photo-1505751172876-fa1923c5c528?auto=format&fit=crop&w=1000&q=85",
    cta: { en: "Explore Health", mr: "आरोग्य विभाग पाहा" },
  },
  {
    id: "techlab",
    name: "Moti TechLab",
    category: { en: "Technology", mr: "तंत्रज्ञान" },
    tag: { en: "Learn Technology", mr: "तंत्रज्ञान शिका" },
    description: {
      en: "Discover AI, UPI, apps, the internet and digital safety through easy explanations.",
      mr: "AI, UPI, ॲप्स, इंटरनेट आणि डिजिटल सुरक्षितता सोप्या भाषेत समजून घ्या.",
    },
    href: "https://techlab.themotigroup.co.in/",
    image:
      "https://images.unsplash.com/photo-1519389950473-47ba0277781c?auto=format&fit=crop&w=1000&q=85",
    cta: { en: "Explore TechLab", mr: "टेकलॅब पाहा" },
  },
  {
    id: "finance",
    name: "Moti Finance",
    category: { en: "Finance", mr: "वित्त" },
    tag: { en: "Money & Finance", mr: "पैसे आणि आर्थिक माहिती" },
    description: {
      en: "Learn about budgeting, saving, financial awareness and money management.",
      mr: "बजेट, बचत, आर्थिक साक्षरता आणि पैशांचे व्यवस्थापन शिका.",
    },
    href: "https://financial.themotigroup.co.in/",
    image:
      "https://images.unsplash.com/photo-1460925895917-afdab827c52f?auto=format&fit=crop&w=1000&q=85",
    cta: { en: "Explore Finance", mr: "फायनान्स पाहा" },
  },
  {
    id: "dealz",
    name: "Moti Dealz",
    category: { en: "Deals & Shopping", mr: "ऑफर्स आणि खरेदी" },
    tag: { en: "Deals & Offers", mr: "डील्स आणि ऑफर्स" },
    description: {
      en: "Discover shopping deals, useful products and offers worth checking out.",
      mr: "खरेदीसाठी उपयुक्त उत्पादने, ऑफर्स आणि खास डील्स शोधा.",
    },
    href: "https://dealz.themotigroup.co.in/",
    image:
      "https://images.unsplash.com/photo-1556742049-0cfed4f6a45d?auto=format&fit=crop&w=1000&q=85",
    cta: { en: "Explore Dealz", mr: "डील्स पाहा" },
  },
  {
    id: "technologies",
    name: "Moti Technologies",
    category: { en: "Software & Solutions", mr: "सॉफ्टवेअर आणि सोल्यूशन्स" },
    tag: { en: "Business Software", mr: "व्यवसायासाठी सॉफ्टवेअर" },
    description: {
      en: "Technology solutions for businesses, including our Newspaper Management Software.",
      mr: "व्यवसायांसाठी तंत्रज्ञान उपाय, ज्यामध्ये आमच्या Newspaper Management Software चा समावेश आहे.",
    },
    href: "http://billing.themotigroup.co.in/",
    image:
      "https://images.unsplash.com/photo-1516321318423-f06f85e504b3?auto=format&fit=crop&w=1000&q=85",
    cta: { en: "Software Login", mr: "सॉफ्टवेअर लॉगिन" },
  },
];

const trending = [
  {
    id: 1,
    category: { en: "Health", mr: "आरोग्य" },
    title: {
      en: "Understanding Diabetes Tests: A Simple Guide",
      mr: "डायबिटीज चाचण्या समजून घ्या: सोपे मार्गदर्शन",
    },
    description: {
      en: "Learn what common diabetes tests measure and why they matter.",
      mr: "डायबिटीजच्या सामान्य चाचण्या काय मोजतात आणि त्या का महत्त्वाच्या आहेत ते जाणून घ्या.",
    },
    href: "https://health.themotigroup.co.in/",
    image:
      "https://images.unsplash.com/photo-1576091160399-112ba8d25d1d?auto=format&fit=crop&w=900&q=85",
  },
  {
    id: 2,
    category: { en: "Technology", mr: "तंत्रज्ञान" },
    title: {
      en: "Artificial Intelligence Explained in Simple Words",
      mr: "आर्टिफिशियल इंटेलिजन्स सोप्या भाषेत",
    },
    description: {
      en: "Find out how AI works and where you may already be using it.",
      mr: "AI कसे काम करते आणि तुम्ही ते कुठे वापरत आहात हे जाणून घ्या.",
    },
    href: "https://techlab.themotigroup.co.in/",
    image:
      "https://images.unsplash.com/photo-1677442136019-21780ecad995?auto=format&fit=crop&w=900&q=85",
  },
  {
    id: 3,
    category: { en: "Finance", mr: "वित्त" },
    title: {
      en: "Simple Money Habits for Everyday Life",
      mr: "दैनंदिन जीवनातील पैशांच्या सोप्या सवयी",
    },
    description: {
      en: "Small steps that can help you build better money habits.",
      mr: "पैशांच्या चांगल्या सवयी लावण्यासाठी काही सोप्या गोष्टी.",
    },
    href: "https://financial.themotigroup.co.in/",
    image:
      "https://images.unsplash.com/photo-1579621970563-ebec7560ff3e?auto=format&fit=crop&w=900&q=85",
  },
];

const translations = {
  en: {
    home: "Home",
    venturesNav: "Our Ventures",
    aboutNav: "About Us",
    contactNav: "Contact",
    eyebrow: "ONE GROUP. MANY POSSIBILITIES.",
    heroTitle: "Ideas, Information & Innovation for Everyday Life.",
    heroText:
      "Explore health, technology, finance, deals and digital solutions—all from The Moti Group.",
    explore: "Explore Our Ventures",
    latest: "Discover More",
    trending: "Trending Now",
    trendingSub: "Stories and ideas worth your time.",
    venturesTitle: "Explore Our Ventures",
    venturesSub:
      "Different services and useful information, connected by one vision.",
    latestTitle: "Latest Article",
    latestCategory: "HEALTH & WELLNESS",
    articleTitle: "Diabetes Tests Explained: What You Should Know",
    articleText:
      "A simple introduction to common diabetes tests and how they help you understand your health.",
    readArticle: "Explore Health Articles",
    aboutTitle: "One Group. A World of Possibilities.",
    aboutText:
      "The Moti Group brings together services, information and technology initiatives designed to make everyday life simpler. Explore our ventures and find what is useful to you.",
    contactTitle: "Let's Connect",
    contactText:
      "Have a question, business enquiry or idea to share? We would love to hear from you.",
    emailUs: "Email Us",
    whatsapp: "Chat on WhatsApp",
    visit: "Visit Website",
    softwareLogin: "Software Login",
    footerText: "Bringing information, services and technology closer to you.",
    quickLinks: "Quick Links",
    ourVentures: "Our Ventures",
    connect: "Connect With Us",
    rights: "All rights reserved.",
    language: "Language",
    learnMore: "Learn more",
  },
  mr: {
    home: "मुख्यपृष्ठ",
    venturesNav: "आमचे उपक्रम",
    aboutNav: "आमच्याबद्दल",
    contactNav: "संपर्क",
    eyebrow: "एक ग्रुप. अनेक संधी.",
    heroTitle: "दैनंदिन जीवनासाठी माहिती, कल्पना आणि तंत्रज्ञान.",
    heroText:
      "आरोग्य, तंत्रज्ञान, वित्त, ऑफर्स आणि डिजिटल सोल्यूशन्स—सर्व काही The Moti Group सोबत.",
    explore: "आमचे उपक्रम पाहा",
    latest: "अधिक जाणून घ्या",
    trending: "सध्या चर्चेत",
    trendingSub: "तुमच्या उपयोगाच्या गोष्टी आणि नवीन माहिती.",
    venturesTitle: "आमचे उपक्रम",
    venturesSub: "एकाच ध्येयातून जोडलेल्या विविध सेवा आणि उपयुक्त माहिती.",
    latestTitle: "नवीन लेख",
    latestCategory: "आरोग्य आणि निरोगी जीवन",
    articleTitle: "डायबिटीज चाचण्या: तुम्हाला काय माहीत असावे?",
    articleText:
      "डायबिटीजच्या सामान्य चाचण्या आणि त्या तुमचे आरोग्य समजून घेण्यासाठी कशा मदत करतात याची सोपी माहिती.",
    readArticle: "आरोग्यविषयक लेख पाहा",
    aboutTitle: "एक ग्रुप. अनेक शक्यता.",
    aboutText:
      "The Moti Group विविध सेवा, माहिती आणि तंत्रज्ञान उपक्रम एकत्र आणतो. दैनंदिन जीवन सोपे करण्यासाठी आमच्या उपक्रमांमधून तुमच्या उपयोगाची माहिती आणि सेवा शोधा.",
    contactTitle: "चला, संपर्कात राहूया",
    contactText:
      "तुम्हाला काही प्रश्न, व्यावसायिक चौकशी किंवा नवीन कल्पना शेअर करायची आहे? आम्हाला नक्की कळवा.",
    emailUs: "ईमेल करा",
    whatsapp: "WhatsApp वर संपर्क करा",
    visit: "वेबसाइट पाहा",
    softwareLogin: "सॉफ्टवेअर लॉगिन",
    footerText: "माहिती, सेवा आणि तंत्रज्ञान तुमच्या अधिक जवळ आणत आहोत.",
    quickLinks: "महत्त्वाचे दुवे",
    ourVentures: "आमचे उपक्रम",
    connect: "संपर्क साधा",
    rights: "सर्व हक्क राखीव.",
    language: "भाषा",
    learnMore: "अधिक जाणून घ्या",
  },
};

export default function Home() {
  const [language, setLanguage] = useState<Lang>("en");
  const t = translations[language];

  return (
    <main className="min-h-screen bg-[#f7f8fa] text-slate-900">
      <header className="sticky top-0 z-50 border-b border-slate-200 bg-white/95 backdrop-blur">
        <div className="mx-auto flex max-w-7xl items-center justify-between gap-4 px-4 py-3 sm:px-6 lg:px-8">
          <Link href="/" className="flex items-center gap-3">
            <div className="flex h-11 w-11 items-center justify-center rounded-xl bg-orange-600 text-xl font-black text-white">
              M
            </div>
            <div>
              <div className="text-lg font-black tracking-tight">
                THE MOTI GROUP
              </div>
              <div className="text-[10px] font-semibold uppercase tracking-[0.2em] text-slate-500">
                Ideas. Services. Innovation.
              </div>
            </div>
          </Link>

          <nav className="hidden items-center gap-6 text-sm font-semibold md:flex">
            <a href="#home" className="hover:text-orange-600">{t.home}</a>
            <a href="#ventures" className="hover:text-orange-600">{t.venturesNav}</a>
            <a href="#about" className="hover:text-orange-600">{t.aboutNav}</a>
            <a href="#contact" className="hover:text-orange-600">{t.contactNav}</a>
          </nav>

          <div className="flex shrink-0 items-center gap-1 rounded-full border border-slate-200 bg-slate-50 p-1">
            <button
              type="button"
              onClick={() => setLanguage("en")}
              aria-pressed={language === "en"}
              className={`rounded-full px-3 py-2 text-xs font-bold transition ${
                language === "en"
                  ? "bg-slate-900 text-white"
                  : "text-slate-600 hover:bg-white"
              }`}
            >
              EN
            </button>
            <button
              type="button"
              onClick={() => setLanguage("mr")}
              aria-pressed={language === "mr"}
              className={`rounded-full px-3 py-2 text-xs font-bold transition ${
                language === "mr"
                  ? "bg-orange-600 text-white"
                  : "text-slate-600 hover:bg-white"
              }`}
            >
              मराठी
            </button>
          </div>
        </div>

        <nav className="flex gap-5 overflow-x-auto border-t border-slate-100 px-4 py-3 text-sm font-semibold md:hidden">
          <a href="#home" className="whitespace-nowrap">{t.home}</a>
          <a href="#ventures" className="whitespace-nowrap">{t.venturesNav}</a>
          <a href="#about" className="whitespace-nowrap">{t.aboutNav}</a>
          <a href="#contact" className="whitespace-nowrap">{t.contactNav}</a>
        </nav>
      </header>

      <section id="home" className="relative overflow-hidden bg-slate-950 text-white">
        <div className="absolute inset-0">
          <img
            src="https://images.unsplash.com/photo-1497366754035-f200968a6e72?auto=format&fit=crop&w=2000&q=90"
            alt=""
            className="h-full w-full object-cover opacity-25"
          />
          <div className="absolute inset-0 bg-gradient-to-r from-slate-950 via-slate-950/90 to-slate-900/45" />
        </div>

        <div className="relative mx-auto grid max-w-7xl items-center gap-10 px-4 py-20 sm:px-6 sm:py-28 lg:grid-cols-[1.15fr_0.85fr] lg:px-8">
          <div>
            <div className="mb-5 inline-flex rounded-full border border-orange-400/40 bg-orange-500/10 px-4 py-2 text-xs font-bold uppercase tracking-[0.18em] text-orange-300">
              {t.eyebrow}
            </div>
            <h1 className="max-w-3xl text-4xl font-black leading-tight tracking-tight sm:text-5xl lg:text-6xl">
              {t.heroTitle}
            </h1>
            <p className="mt-6 max-w-2xl text-lg leading-8 text-slate-300">
              {t.heroText}
            </p>
            <div className="mt-8 flex flex-wrap gap-3">
              <a
                href="#ventures"
                className="rounded-xl bg-orange-600 px-6 py-3.5 text-sm font-bold text-white shadow-lg shadow-orange-950/30 transition hover:bg-orange-500"
              >
                {t.explore} <span aria-hidden="true">→</span>
              </a>
              <a
                href="#trending"
                className="rounded-xl border border-white/25 px-6 py-3.5 text-sm font-bold text-white transition hover:bg-white/10"
              >
                {t.latest}
              </a>
            </div>
          </div>

          <div className="grid grid-cols-2 gap-3 sm:gap-4">
            <div className="relative min-h-48 overflow-hidden rounded-2xl border border-white/10 sm:min-h-60">
              <img
                src={ventures[0].image}
                alt="Healthcare"
                className="absolute inset-0 h-full w-full object-cover"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-slate-950 via-slate-950/10 to-transparent" />
              <div className="absolute bottom-4 left-4 font-bold">Health & Care</div>
            </div>
            <div className="relative mt-8 min-h-48 overflow-hidden rounded-2xl border border-white/10 sm:min-h-60">
              <img
                src={ventures[2].image}
                alt="Technology"
                className="absolute inset-0 h-full w-full object-cover"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-slate-950 via-slate-950/10 to-transparent" />
              <div className="absolute bottom-4 left-4 font-bold">Technology</div>
            </div>
            <div className="relative min-h-36 overflow-hidden rounded-2xl border border-white/10">
              <img
                src={ventures[3].image}
                alt="Finance"
                className="absolute inset-0 h-full w-full object-cover"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-slate-950 to-transparent" />
              <div className="absolute bottom-4 left-4 font-bold">Finance</div>
            </div>
            <div className="relative mt-4 min-h-36 overflow-hidden rounded-2xl border border-white/10">
              <img
                src={ventures[4].image}
                alt="Shopping deals"
                className="absolute inset-0 h-full w-full object-cover"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-slate-950 to-transparent" />
              <div className="absolute bottom-4 left-4 font-bold">Deals & Offers</div>
            </div>
          </div>
        </div>
      </section>

      <section id="trending" className="mx-auto max-w-7xl px-4 py-16 sm:px-6 lg:px-8">
        <div className="mb-8 flex flex-wrap items-end justify-between gap-3">
          <div>
            <div className="mb-2 text-xs font-black uppercase tracking-[0.2em] text-orange-600">
              THE MOTI GROUP
            </div>
            <h2 className="text-3xl font-black tracking-tight sm:text-4xl">
              {t.trending}
            </h2>
            <p className="mt-2 text-slate-500">{t.trendingSub}</p>
          </div>
          <div className="h-1.5 w-20 rounded-full bg-orange-600" />
        </div>

        <div className="grid gap-6 md:grid-cols-3">
          {trending.map((item) => (
            <article
              key={item.id}
              className="group overflow-hidden rounded-2xl border border-slate-200 bg-white shadow-sm transition hover:-translate-y-1 hover:shadow-xl"
            >
              <a href={item.href} className="block">
                <div className="relative h-52 overflow-hidden">
                  <img
                    src={item.image}
                    alt={item.title[language]}
                    className="h-full w-full object-cover transition duration-500 group-hover:scale-105"
                  />
                  <span className="absolute left-4 top-4 rounded-full bg-white px-3 py-1.5 text-xs font-bold text-slate-900 shadow">
                    {item.category[language]}
                  </span>
                </div>
                <div className="p-5">
                  <h3 className="text-xl font-extrabold leading-snug group-hover:text-orange-600">
                    {item.title[language]}
                  </h3>
                  <p className="mt-3 text-sm leading-6 text-slate-500">
                    {item.description[language]}
                  </p>
                  <span className="mt-5 inline-flex items-center gap-2 text-sm font-bold text-orange-600">
                    {t.learnMore} <span aria-hidden="true">→</span>
                  </span>
                </div>
              </a>
            </article>
          ))}
        </div>
      </section>

      <section id="ventures" className="border-y border-slate-200 bg-white py-16">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="mx-auto mb-10 max-w-2xl text-center">
            <div className="mb-2 text-xs font-black uppercase tracking-[0.2em] text-orange-600">
              OUR ECOSYSTEM
            </div>
            <h2 className="text-3xl font-black tracking-tight sm:text-4xl">
              {t.venturesTitle}
            </h2>
            <p className="mt-3 leading-7 text-slate-500">{t.venturesSub}</p>
          </div>

          <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
            {ventures.map((venture) => (
              <article
                key={venture.id}
                className="group flex flex-col overflow-hidden rounded-2xl border border-slate-200 bg-white shadow-sm transition hover:-translate-y-1 hover:shadow-xl"
              >
                <a href={venture.href} className="relative block h-52 overflow-hidden">
                  <img
                    src={venture.image}
                    alt={venture.name}
                    className="h-full w-full object-cover transition duration-500 group-hover:scale-105"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-slate-950/75 via-transparent to-transparent" />
                  <span className="absolute bottom-4 left-4 rounded-full bg-white/95 px-3 py-1.5 text-xs font-bold text-slate-900">
                    {venture.tag[language]}
                  </span>
                </a>

                <div className="flex flex-1 flex-col p-5">
                  <p className="text-xs font-bold uppercase tracking-wider text-orange-600">
                    {venture.category[language]}
                  </p>
                  <h3 className="mt-2 text-xl font-black">{venture.name}</h3>
                  <p className="mt-3 flex-1 text-sm leading-6 text-slate-500">
                    {venture.description[language]}
                  </p>
                  <a
                    href={venture.href}
                    target={venture.id === "technologies" ? "_blank" : undefined}
                    rel={venture.id === "technologies" ? "noreferrer" : undefined}
                    className="mt-5 inline-flex items-center justify-center gap-2 rounded-xl bg-slate-900 px-4 py-3 text-sm font-bold text-white transition hover:bg-orange-600"
                  >
                    {venture.id === "technologies"
                      ? t.softwareLogin
                      : venture.cta[language]}
                    <span aria-hidden="true">→</span>
                  </a>
                </div>
              </article>
            ))}
          </div>
        </div>
      </section>

      <section className="mx-auto max-w-7xl px-4 py-16 sm:px-6 lg:px-8">
        <div className="grid gap-8 lg:grid-cols-[1.5fr_1fr]">
          <article className="overflow-hidden rounded-3xl border border-slate-200 bg-white shadow-sm">
            <div className="grid md:grid-cols-2">
              <div className="min-h-64">
                <img
                  src="https://images.unsplash.com/photo-1576091160550-2173dba999ef?auto=format&fit=crop&w=1000&q=85"
                  alt={t.articleTitle}
                  className="h-full min-h-64 w-full object-cover"
                />
              </div>
              <div className="flex flex-col justify-center p-6 sm:p-8">
                <div className="text-xs font-black uppercase tracking-[0.15em] text-orange-600">
                  {t.latestCategory}
                </div>
                <h2 className="mt-3 text-2xl font-black leading-tight">
                  {t.articleTitle}
                </h2>
                <p className="mt-4 text-sm leading-7 text-slate-500">
                  {t.articleText}
                </p>
                <a
                  href="https://health.themotigroup.co.in/"
                  className="mt-6 inline-flex w-fit items-center gap-2 rounded-xl bg-orange-600 px-5 py-3 text-sm font-bold text-white transition hover:bg-orange-500"
                >
                  {t.readArticle} <span aria-hidden="true">→</span>
                </a>
              </div>
            </div>
          </article>

          <aside className="flex flex-col justify-center rounded-3xl bg-slate-950 p-7 text-white sm:p-9">
            <div className="mb-3 text-xs font-black uppercase tracking-[0.2em] text-orange-400">
              THE MOTI GROUP
            </div>
            <h2 className="text-2xl font-black sm:text-3xl">{t.aboutTitle}</h2>
            <p className="mt-4 leading-7 text-slate-300">{t.aboutText}</p>
            <a
              href="#about"
              className="mt-6 inline-flex w-fit items-center gap-2 font-bold text-orange-400 hover:text-orange-300"
            >
              {t.aboutNav} <span aria-hidden="true">→</span>
            </a>
          </aside>
        </div>
      </section>

      <section id="about" className="bg-orange-50 py-16">
        <div className="mx-auto max-w-4xl px-4 text-center sm:px-6">
          <div className="mx-auto mb-4 flex h-14 w-14 items-center justify-center rounded-2xl bg-orange-600 text-2xl font-black text-white">
            M
          </div>
          <h2 className="text-3xl font-black tracking-tight sm:text-4xl">
            {t.aboutTitle}
          </h2>
          <p className="mx-auto mt-5 max-w-3xl text-base leading-8 text-slate-600">
            {t.aboutText}
          </p>
        </div>
      </section>

      <section id="contact" className="mx-auto max-w-7xl px-4 py-16 sm:px-6 lg:px-8">
        <div className="rounded-3xl bg-white p-7 shadow-sm ring-1 ring-slate-200 sm:p-10">
          <div className="grid gap-8 md:grid-cols-[1fr_auto] md:items-center">
            <div>
              <div className="mb-2 text-xs font-black uppercase tracking-[0.2em] text-orange-600">
                GET IN TOUCH
              </div>
              <h2 className="text-3xl font-black">{t.contactTitle}</h2>
              <p className="mt-3 max-w-2xl leading-7 text-slate-500">
                {t.contactText}
              </p>
              <p className="mt-4 font-semibold text-slate-800">
                +91 82862 89143
              </p>
              <p className="mt-1 text-slate-600">info@themotigroup.co.in</p>
            </div>
            <div className="flex flex-wrap gap-3 md:max-w-xs md:flex-col">
              <a
                href="mailto:info@themotigroup.co.in"
                className="rounded-xl bg-slate-900 px-5 py-3 text-center text-sm font-bold text-white transition hover:bg-slate-700"
              >
                {t.emailUs}
              </a>
              <a
                href="https://wa.me/919867242848"
                target="_blank"
                rel="noreferrer"
                className="rounded-xl bg-green-600 px-5 py-3 text-center text-sm font-bold text-white transition hover:bg-green-700"
              >
                {t.whatsapp}
              </a>
            </div>
          </div>
        </div>
      </section>

      <footer className="bg-slate-950 text-white">
        <div className="mx-auto grid max-w-7xl gap-10 px-4 py-12 sm:px-6 md:grid-cols-3 lg:px-8">
          <div>
            <div className="text-xl font-black">THE MOTI GROUP</div>
            <p className="mt-4 max-w-sm text-sm leading-7 text-slate-400">
              {t.footerText}
            </p>
          </div>

          <div>
            <h3 className="font-bold">{t.quickLinks}</h3>
            <div className="mt-4 flex flex-col items-start gap-3 text-sm text-slate-400">
              <a href="#home" className="hover:text-white">{t.home}</a>
              <a href="#ventures" className="hover:text-white">{t.ourVentures}</a>
              <a href="#about" className="hover:text-white">{t.aboutNav}</a>
              <a href="#contact" className="hover:text-white">{t.contactNav}</a>
            </div>
          </div>

          <div>
            <h3 className="font-bold">{t.connect}</h3>
            <div className="mt-4 flex flex-col items-start gap-3 text-sm text-slate-400">
              <a href="mailto:info@themotigroup.co.in" className="hover:text-white">
                info@themotigroup.co.in
              </a>
              <a href="https://wa.me/919867242848" className="hover:text-white">
                WhatsApp
              </a>
              <a href="http://billing.themotigroup.co.in/" className="hover:text-white">
                Moti Technologies — {t.softwareLogin}
              </a>
            </div>
          </div>
        </div>

        <div className="border-t border-white/10 px-4 py-5 text-center text-xs text-slate-500">
          © {new Date().getFullYear()} The Moti Group. {t.rights}
        </div>
      </footer>

      <a
        href="https://wa.me/919867242848"
        target="_blank"
        rel="noreferrer"
        aria-label="Chat with The Moti Group on WhatsApp"
        className="fixed bottom-5 right-5 z-50 flex h-14 w-14 items-center justify-center rounded-full bg-green-500 text-2xl text-white shadow-xl transition hover:scale-105 hover:bg-green-600"
      >
        ☎
      </a>
    </main>
  );
}

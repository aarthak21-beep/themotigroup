"use client";

import Link from "next/link";
import { useEffect, useState } from "react";

type Lang = "en" | "mr";

type BlogPost = { title: string; link: string; source: string; date: string; description: string; image: string | null };

const blogSourceStyles: Record<string, { label: string; labelMr: string; badge: string; fallback: string }> = {
  health: { label: "Moti Health", labelMr: "मोटी हेल्थ", badge: "bg-emerald-50 text-emerald-700 ring-emerald-600/15", fallback: "from-emerald-500/20 via-teal-500/10 to-slate-950" },
  techlab: { label: "Moti TechLab", labelMr: "मोटी टेकलॅब", badge: "bg-sky-50 text-sky-700 ring-sky-600/15", fallback: "from-sky-500/20 via-indigo-500/10 to-slate-950" },
  finance: { label: "Moti Financial", labelMr: "मोटी फायनान्शियल", badge: "bg-violet-50 text-violet-700 ring-violet-600/15", fallback: "from-violet-500/20 via-fuchsia-500/10 to-slate-950" },
  dealz: { label: "Moti Dealz", labelMr: "मोटी डील्झ", badge: "bg-orange-50 text-orange-700 ring-orange-600/15", fallback: "from-orange-500/20 via-amber-500/10 to-slate-950" },
};

function getBlogSourceStyle(source: string) {
  const normalized = source.toLowerCase();
  if (normalized.includes("health")) return blogSourceStyles.health;
  if (normalized.includes("tech")) return blogSourceStyles.techlab;
  if (normalized.includes("financ")) return blogSourceStyles.finance;
  if (normalized.includes("deal")) return blogSourceStyles.dealz;
  return {
    label: source || "The Moti Group",
    labelMr: source || "The Moti Group",
    badge: "bg-slate-100 text-slate-700 ring-slate-500/15",
    fallback: "from-orange-500/20 via-amber-500/10 to-slate-950",
  };
}

const ventures = [
  {
    id: "diagnostics",
    name: "Moti Diagnostics Centre",
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
    name: "Moti Financial",
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
    blogsTitle: "Latest from Our Blogs",
    blogsSub: "Fresh posts from Health, TechLab, Finance and Dealz.",
    noBlogs: "No recent posts are available right now. Please visit one of our blogs below.",
    loadingBlogs: "Loading latest posts…",
    readMore: "Read post",
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
    blogsTitle: "आमच्या ब्लॉगवरील नवीन लेख",
    blogsSub: "Health, TechLab, Finance आणि Dealz वरील ताज्या पोस्ट.",
    noBlogs: "सध्या नवीन पोस्ट उपलब्ध नाहीत. खालील ब्लॉगला भेट द्या.",
    loadingBlogs: "नवीन पोस्ट लोड होत आहेत…",
    readMore: "लेख वाचा",
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
  const [blogPosts, setBlogPosts] = useState<BlogPost[]>([]);
  const [blogsLoading, setBlogsLoading] = useState(true);
  useEffect(() => {
    document.documentElement.lang = language === "mr" ? "mr" : "en";
  }, [language]);

  useEffect(() => {
    fetch("/api/blogs")
      .then((response) => {
        if (!response.ok) throw new Error("Unable to load posts");
        return response.json();
      })
      .then((posts: BlogPost[]) => setBlogPosts(Array.isArray(posts) ? posts : []))
      .catch(() => setBlogPosts([]))
      .finally(() => setBlogsLoading(false));
  }, []);
  const t = translations[language];

  return (
    <>
      <a
        href="#main-content"
        className="sr-only z-[100] rounded-lg bg-white px-4 py-3 font-bold text-slate-900 focus:not-sr-only focus:fixed focus:left-4 focus:top-4 focus:ring-2 focus:ring-orange-500"
      >
        {language === "mr" ? "मुख्य मजकुराकडे जा" : "Skip to main content"}
      </a>
    <main id="main-content" className="min-h-screen bg-[#080b12] text-slate-100 selection:bg-orange-500/30">
      <header className="sticky top-0 z-50 border-b border-white/10 bg-[#080b12]/90 text-white shadow-[0_10px_35px_-25px_rgba(249,115,22,0.5)] backdrop-blur-2xl">
        <div className="mx-auto flex max-w-7xl items-center justify-between gap-4 px-4 py-3 sm:px-6 lg:px-8">
          <Link href="/" className="flex items-center gap-3">
            <div className="flex h-11 w-11 items-center justify-center rounded-xl bg-orange-600 text-xl font-black text-white">
              M
            </div>
            <div>
              <div className="text-lg font-black tracking-tight">
                THE MOTI GROUP
              </div>
              <div className="text-[10px] font-semibold uppercase tracking-[0.2em] text-slate-400">
                Ideas. Services. Innovation.
              </div>
            </div>
          </Link>

          <nav className="hidden items-center gap-6 text-sm font-semibold md:flex">
            <a href="#home" className="rounded-sm hover:text-orange-600 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-orange-500 focus-visible:ring-offset-2">{t.home}</a>
            <a href="#ventures" className="rounded-sm hover:text-orange-600 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-orange-500 focus-visible:ring-offset-2">{t.venturesNav}</a>
            <a href="#about" className="rounded-sm hover:text-orange-600 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-orange-500 focus-visible:ring-offset-2">{t.aboutNav}</a>
            <a href="#contact" className="rounded-sm hover:text-orange-600 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-orange-500 focus-visible:ring-offset-2">{t.contactNav}</a>
          </nav>

          <div className="flex shrink-0 items-center gap-1 rounded-full border border-white/10 bg-white/5 p-1">
            <button
              type="button"
              onClick={() => setLanguage("en")}
              aria-pressed={language === "en"}
              className={`rounded-full px-3 py-2 text-xs font-bold transition ${
                language === "en"
                  ? "bg-gradient-to-r from-orange-500 to-orange-700 text-white shadow-lg shadow-orange-950/40"
                  : "text-slate-300 hover:bg-white/10 hover:text-white"
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
                  : "text-slate-300 hover:bg-white/10 hover:text-white"
              }`}
            >
              मराठी
            </button>
          </div>
        </div>

        <nav className="flex gap-5 overflow-x-auto border-t border-white/10 px-4 py-3 text-sm font-semibold text-slate-300 md:hidden">
          <a href="#home" className="whitespace-nowrap rounded-sm focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-orange-500 focus-visible:ring-offset-2">{t.home}</a>
          <a href="#ventures" className="whitespace-nowrap rounded-sm focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-orange-500 focus-visible:ring-offset-2">{t.venturesNav}</a>
          <a href="#about" className="whitespace-nowrap rounded-sm focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-orange-500 focus-visible:ring-offset-2">{t.aboutNav}</a>
          <a href="#contact" className="whitespace-nowrap rounded-sm focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-orange-500 focus-visible:ring-offset-2">{t.contactNav}</a>
        </nav>
      </header>

      <section id="home" className="relative isolate overflow-hidden bg-slate-950 text-white">
        <div className="absolute inset-0">
          <img
            src="https://images.unsplash.com/photo-1497366754035-f200968a6e72?auto=format&fit=crop&w=2000&q=90"
            alt=""
            className="h-full w-full object-cover opacity-30 scale-105"
          />
          <div className="absolute inset-0 bg-gradient-to-r from-slate-950 via-slate-950/85 to-slate-900/35" />
          <div className="absolute -left-24 top-12 h-72 w-72 rounded-full bg-orange-500/15 blur-3xl" />
          <div className="absolute bottom-0 right-1/4 h-64 w-64 rounded-full bg-amber-400/10 blur-3xl" />
        </div>

        <div className="relative mx-auto grid max-w-7xl items-center gap-10 px-4 py-20 sm:px-6 sm:py-28 lg:grid-cols-[1.15fr_0.85fr] lg:px-8">
          <div>
            <div className="mb-5 inline-flex items-center gap-2 rounded-full border border-orange-300/30 bg-white/[0.06] px-4 py-2 text-xs font-bold uppercase tracking-[0.18em] text-orange-200 shadow-lg shadow-orange-950/20 backdrop-blur-md">
              {t.eyebrow}
            </div>
            <h1 className="max-w-3xl text-4xl font-black leading-tight tracking-tight [text-wrap:balance] sm:text-5xl lg:text-6xl">
              {t.heroTitle}
            </h1>
            <p className="mt-6 max-w-2xl text-lg leading-8 text-slate-300">
              {t.heroText}
            </p>
            <div className="mt-8 flex flex-wrap gap-3">
              <a
                href="#ventures"
                className="rounded-xl bg-gradient-to-r from-orange-500 to-orange-700 px-6 py-3.5 text-sm font-bold text-white shadow-lg shadow-orange-950/40 transition duration-300 hover:-translate-y-0.5 hover:from-orange-400 hover:to-orange-600 hover:shadow-orange-500/20"
              >
                {t.explore} <span aria-hidden="true">→</span>
              </a>
              <a
                href="#trending"
                className="rounded-xl border border-white/20 bg-white/[0.04] px-6 py-3.5 text-sm font-bold text-white backdrop-blur-sm transition duration-300 hover:-translate-y-0.5 hover:border-white/40 hover:bg-white/10"
              >
                {t.latest}
              </a>
            </div>
          </div>

          <div className="grid grid-cols-2 gap-3 sm:grid-cols-4 sm:gap-4">
            <a href="https://diagnostics.themotigroup.co.in/" className="group relative min-h-40 overflow-hidden rounded-2xl border border-white/15 bg-white/5 shadow-xl shadow-black/20 ring-1 ring-white/5 transition duration-300 hover:-translate-y-1 hover:border-orange-300/50 hover:shadow-orange-950/30 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-orange-300 sm:min-h-52" aria-label="Health & Care - Moti Diagnostics Centre">
              <img src={ventures[0].image} alt="Health & Care" className="absolute inset-0 h-full w-full object-cover transition duration-300 group-hover:scale-105" />
              <div className="absolute inset-0 bg-gradient-to-t from-slate-950 via-slate-950/10 to-transparent" />
              <div className="absolute bottom-4 left-4 font-bold text-white">Health & Care</div>
            </a>
            <a href="https://techlab.themotigroup.co.in/" className="group relative min-h-40 overflow-hidden rounded-2xl border border-white/15 bg-white/5 shadow-xl shadow-black/20 ring-1 ring-white/5 transition duration-300 hover:-translate-y-1 hover:border-orange-300/50 hover:shadow-orange-950/30 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-orange-300 sm:min-h-52" aria-label="Technology - Moti TechLab">
              <img src={ventures[2].image} alt="Technology" className="absolute inset-0 h-full w-full object-cover transition duration-300 group-hover:scale-105" />
              <div className="absolute inset-0 bg-gradient-to-t from-slate-950 via-slate-950/10 to-transparent" />
              <div className="absolute bottom-4 left-4 font-bold text-white">Technology</div>
            </a>
            <a href="https://financial.themotigroup.co.in/" className="group relative min-h-40 overflow-hidden rounded-2xl border border-white/15 bg-white/5 shadow-xl shadow-black/20 ring-1 ring-white/5 transition duration-300 hover:-translate-y-1 hover:border-orange-300/50 hover:shadow-orange-950/30 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-orange-300 sm:min-h-52" aria-label="Finance - Moti Financial">
              <img src={ventures[3].image} alt="Finance" className="absolute inset-0 h-full w-full object-cover transition duration-300 group-hover:scale-105" />
              <div className="absolute inset-0 bg-gradient-to-t from-slate-950 via-slate-950/10 to-transparent" />
              <div className="absolute bottom-4 left-4 font-bold text-white">Finance</div>
            </a>
            <a href="https://dealz.themotigroup.co.in/" className="group relative min-h-40 overflow-hidden rounded-2xl border border-white/15 bg-white/5 shadow-xl shadow-black/20 ring-1 ring-white/5 transition duration-300 hover:-translate-y-1 hover:border-orange-300/50 hover:shadow-orange-950/30 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-orange-300 sm:min-h-52" aria-label="Deals & Offers - Moti Dealz">
              <img src={ventures[4].image} alt="Deals & Offers" className="absolute inset-0 h-full w-full object-cover transition duration-300 group-hover:scale-105" />
              <div className="absolute inset-0 bg-gradient-to-t from-slate-950 via-slate-950/10 to-transparent" />
              <div className="absolute bottom-4 left-4 font-bold text-white">Deals & Offers</div>
            </a>
          </div>
        </div>
      </section>

      <section id="trending" className="mx-auto max-w-7xl px-4 py-20 sm:px-6 lg:px-8">
        <div className="mb-8 flex flex-wrap items-end justify-between gap-3">
          <div>
            <div className="mb-2 text-xs font-black uppercase tracking-[0.2em] text-orange-400">
              THE MOTI GROUP
            </div>
            <h2 className="text-3xl font-black tracking-tight text-white sm:text-4xl">
              {t.trending}
            </h2>
            <p className="mt-2 text-slate-400">{t.trendingSub}</p>
          </div>
          <div className="h-1.5 w-20 rounded-full bg-orange-600" />
        </div>

        <div className="grid gap-6 md:grid-cols-3">
          {trending.map((item) => (
            <article
              key={item.id}
              className="group overflow-hidden rounded-2xl border border-white/10 bg-white/[0.04] shadow-[0_20px_50px_-35px_rgba(0,0,0,0.9)] transition duration-500 hover:-translate-y-1.5 hover:border-orange-400/40 hover:bg-white/[0.07] hover:shadow-[0_25px_60px_-30px_rgba(249,115,22,0.22)]"
            >
              <a href={item.href} className="block">
                <div className="relative h-52 overflow-hidden">
                  <img
                    src={item.image}
                    alt={item.title[language]}
                    loading="lazy"
                    decoding="async"
                    className="h-full w-full object-cover transition duration-500 group-hover:scale-105"
                  />
                  <span className="absolute left-4 top-4 rounded-full bg-white px-3 py-1.5 text-xs font-bold text-slate-900 shadow">
                    {item.category[language]}
                  </span>
                </div>
                <div className="p-5">
                  <h3 className="text-xl font-extrabold leading-snug text-white transition-colors group-hover:text-orange-300">
                    {item.title[language]}
                  </h3>
                  <p className="mt-3 text-sm leading-6 text-slate-400">
                    {item.description[language]}
                  </p>
                  <span className="mt-5 inline-flex items-center gap-2 text-sm font-bold text-orange-300">
                    {t.learnMore} <span aria-hidden="true">→</span>
                  </span>
                </div>
              </a>
            </article>
          ))}
        </div>
      </section>


      <section id="blogs" className="relative overflow-hidden border-y border-white/10 bg-gradient-to-b from-[#0c111c] via-[#0a0e17] to-[#11101a] py-20 sm:py-24">
        <div className="pointer-events-none absolute -right-24 top-12 h-72 w-72 rounded-full bg-orange-500/15 blur-3xl" aria-hidden="true" />
        <div className="relative mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="mb-9 flex flex-col gap-4 sm:mb-10 sm:flex-row sm:items-end sm:justify-between">
            <div className="max-w-2xl">
              <div className="mb-3 inline-flex items-center gap-2 rounded-full border border-orange-200 bg-orange-50 px-3 py-1.5 text-[11px] font-black uppercase tracking-[0.18em] text-orange-700">
                <span className="h-1.5 w-1.5 rounded-full bg-orange-500" aria-hidden="true" />
                THE MOTI GROUP
              </div>
              <h2 className="text-3xl font-black tracking-tight text-white sm:text-4xl">{t.blogsTitle}</h2>
              <p className="mt-3 text-sm leading-6 text-slate-400 sm:text-base">{t.blogsSub}</p>
            </div>
            <div className="hidden rounded-2xl border border-white/10 bg-white/5 px-4 py-3 text-sm font-semibold text-slate-400 shadow-sm sm:block">
              <span className="text-orange-300">{blogPosts.length || "—"}</span> {language === "mr" ? "ताज्या पोस्ट" : "fresh posts"}
            </div>
          </div>
          {blogsLoading ? (
            <div role="status" aria-live="polite" className="grid gap-5 sm:grid-cols-2 lg:grid-cols-3">
              {[0, 1, 2].map((item) => (
                <div key={item} className="overflow-hidden rounded-3xl border border-white/10 bg-white/5" aria-hidden="true">
                  <div className="h-48 animate-pulse bg-white/10 sm:h-52" />
                  <div className="space-y-3 p-5">
                    <div className="h-5 w-28 animate-pulse rounded-full bg-white/10" />
                    <div className="h-6 w-5/6 animate-pulse rounded bg-white/10" />
                    <div className="h-4 w-full animate-pulse rounded bg-white/10" />
                    <div className="h-4 w-2/3 animate-pulse rounded bg-white/10" />
                  </div>
                </div>
              ))}
              <span className="sr-only">{t.loadingBlogs}</span>
            </div>
          ) : blogPosts.length === 0 ? (
            <div className="rounded-3xl border border-white/10 bg-white/[0.045] p-6 text-slate-100 shadow-sm sm:p-8">
              <p className="text-slate-600">{t.noBlogs}</p>
              <div className="mt-5 flex flex-wrap gap-3 text-sm font-bold">
                <a className="rounded-full bg-emerald-50 px-4 py-2.5 text-emerald-700 transition hover:bg-emerald-100 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-orange-500" href="https://health.themotigroup.co.in/">Moti Health ↗</a>
                <a className="rounded-full bg-sky-50 px-4 py-2.5 text-sky-700 transition hover:bg-sky-100 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-orange-500" href="https://techlab.themotigroup.co.in/">Moti TechLab ↗</a>
                <a className="rounded-full bg-violet-50 px-4 py-2.5 text-violet-700 transition hover:bg-violet-100 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-orange-500" href="https://financial.themotigroup.co.in/">Moti Financial ↗</a>
                <a className="rounded-full bg-orange-50 px-4 py-2.5 text-orange-700 transition hover:bg-orange-100 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-orange-500" href="https://dealz.themotigroup.co.in/">Moti Dealz ↗</a>
              </div>
            </div>
          ) : (
            <div className="grid gap-5 sm:grid-cols-2 lg:grid-cols-3 xl:gap-6">
              {blogPosts.map((post) => {
                const sourceStyle = getBlogSourceStyle(post.source);
                const dateLabel = post.date && !Number.isNaN(new Date(post.date).getTime())
                  ? new Date(post.date).toLocaleDateString(language === "mr" ? "mr-IN" : "en-IN", { day: "numeric", month: "short", year: "numeric" })
                  : null;
                return (
                  <article key={post.link} className="group flex min-w-0 flex-col overflow-hidden rounded-3xl border border-white/10 bg-white/[0.045] shadow-[0_18px_55px_-32px_rgba(0,0,0,0.9)] transition duration-500 hover:-translate-y-1.5 hover:border-orange-400/50 hover:bg-white/[0.075] hover:shadow-[0_24px_65px_-30px_rgba(249,115,22,0.22)]">
                    <a href={post.link} target="_blank" rel="noopener noreferrer" className="flex h-full flex-col rounded-[inherit] focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-inset focus-visible:ring-orange-500">
                      <div className={`relative h-48 shrink-0 overflow-hidden bg-gradient-to-br ${sourceStyle.fallback} sm:h-52`}>
                        {post.image ? (
                          <img
                            src={post.image}
                            alt=""
                            loading="lazy"
                            decoding="async"
                            className="h-full w-full object-cover transition duration-700 group-hover:scale-105"
                          />
                        ) : (
                          <div className="flex h-full items-center justify-center bg-gradient-to-br from-white/10 to-transparent">
                            <span className="flex h-20 w-20 items-center justify-center rounded-3xl border border-white/20 bg-white/10 text-4xl font-black text-white shadow-xl backdrop-blur-sm">M</span>
                          </div>
                        )}
                        <div className="absolute inset-0 bg-gradient-to-t from-slate-950/70 via-transparent to-slate-950/10" aria-hidden="true" />
                        <span className={`absolute left-4 top-4 inline-flex max-w-[calc(100%-2rem)] items-center truncate rounded-full px-3 py-1.5 text-xs font-extrabold shadow-sm ring-1 ring-inset ${sourceStyle.badge}`}>
                          {language === "mr" ? sourceStyle.labelMr : sourceStyle.label}
                        </span>
                        {dateLabel ? <span className="absolute bottom-4 left-4 rounded-full border border-white/20 bg-slate-950/55 px-3 py-1.5 text-xs font-semibold text-white backdrop-blur-sm">{dateLabel}</span> : null}
                      </div>
                      <div className="flex flex-1 flex-col p-5 sm:p-6">
                        <h3 className="line-clamp-3 text-lg font-extrabold leading-snug text-white transition-colors group-hover:text-orange-300 sm:text-xl">{post.title}</h3>
                        <div className="mt-auto flex items-center justify-between gap-3 pt-6">
                          <span className="text-xs font-bold uppercase tracking-[0.12em] text-slate-500">{language === "mr" ? "नवीन लेख" : "LATEST ARTICLE"}</span>
                          <span className="inline-flex shrink-0 items-center gap-2 rounded-full bg-gradient-to-r from-orange-500 to-orange-700 px-4 py-2.5 text-xs font-bold text-white shadow-lg shadow-orange-950/30 transition group-hover:from-orange-400 group-hover:to-orange-600">
                            {t.readMore} <span aria-hidden="true">↗</span>
                          </span>
                        </div>
                      </div>
                    </a>
                  </article>
                );
              })}
            </div>
          )}
        </div>
      </section>

      <section id="ventures" className="border-y border-white/10 bg-[#0b101a] py-20">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="mx-auto mb-10 max-w-2xl text-center">
            <div className="mb-2 text-xs font-black uppercase tracking-[0.2em] text-orange-400">
              OUR ECOSYSTEM
            </div>
            <h2 className="text-3xl font-black tracking-tight text-white sm:text-4xl">
              {t.venturesTitle}
            </h2>
            <p className="mt-3 leading-7 text-slate-400">{t.venturesSub}</p>
          </div>

          <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
            {ventures.map((venture) => (
              <article
                key={venture.id}
                className="group flex flex-col overflow-hidden rounded-3xl border border-white/10 bg-white/[0.04] shadow-[0_20px_50px_-30px_rgba(0,0,0,0.9)] transition duration-500 hover:-translate-y-2 hover:border-orange-400/40 hover:bg-white/[0.07] hover:shadow-[0_24px_55px_-20px_rgba(234,88,12,0.2)]"
              >
                <a href={venture.href} className="relative block h-56 overflow-hidden bg-slate-900">
                  <img
                    src={venture.image}
                    alt={venture.name}
                    loading="lazy"
                    decoding="async"
                    className="h-full w-full object-cover transition duration-500 group-hover:scale-105"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-slate-950/80 via-slate-950/5 to-transparent transition duration-300 group-hover:from-slate-950/65" />
                  <span className="absolute bottom-4 left-4 rounded-full bg-white/95 px-3 py-1.5 text-xs font-bold text-slate-900">
                    {venture.tag[language]}
                  </span>
                </a>

                <div className="flex flex-1 flex-col p-5">
                  <p className="text-xs font-bold uppercase tracking-wider text-orange-300">
                    {venture.category[language]}
                  </p>
                  <h3 className="mt-2 text-xl font-black text-white">{venture.name}</h3>
                  <p className="mt-3 flex-1 text-sm leading-6 text-slate-400">
                    {venture.description[language]}
                  </p>
                  <a
                    href={venture.href}
                    target={venture.id === "technologies" ? "_blank" : undefined}
                    rel={venture.id === "technologies" ? "noreferrer" : undefined}
                    className="mt-5 inline-flex items-center justify-center gap-2 rounded-xl bg-white/10 px-4 py-3 text-sm font-bold text-white ring-1 ring-white/10 transition duration-300 hover:-translate-y-0.5 hover:bg-orange-600 hover:ring-orange-500 hover:shadow-lg hover:shadow-orange-600/20"
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

      <section className="mx-auto max-w-7xl px-4 py-20 sm:px-6 lg:px-8">
        <div className="grid gap-8 lg:grid-cols-[1.5fr_1fr]">
          <article className="overflow-hidden rounded-3xl border border-white/10 bg-white/[0.045] shadow-[0_20px_60px_-35px_rgba(0,0,0,0.9)]">
            <div className="grid md:grid-cols-2">
              <div className="min-h-64">
                <img
                  src="https://images.unsplash.com/photo-1576091160550-2173dba999ef?auto=format&fit=crop&w=1000&q=85"
                  alt={t.articleTitle}
                  loading="lazy"
                  decoding="async"
                  className="h-full min-h-64 w-full object-cover"
                />
              </div>
              <div className="flex flex-col justify-center p-6 sm:p-8">
                <div className="text-xs font-black uppercase tracking-[0.15em] text-orange-300">
                  {t.latestCategory}
                </div>
                <h2 className="mt-3 text-2xl font-black leading-tight text-white">
                  {t.articleTitle}
                </h2>
                <p className="mt-4 text-sm leading-7 text-slate-400">
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

      <section id="about" className="relative overflow-hidden border-y border-white/10 bg-gradient-to-br from-[#11101a] via-[#0c111c] to-[#17101a] py-20">
        <div className="mx-auto max-w-4xl px-4 text-center sm:px-6">
          <div className="mx-auto mb-4 flex h-14 w-14 items-center justify-center rounded-2xl bg-orange-600 text-2xl font-black text-white">
            M
          </div>
          <h2 className="text-3xl font-black tracking-tight text-white sm:text-4xl">
            {t.aboutTitle}
          </h2>
          <p className="mx-auto mt-5 max-w-3xl text-base leading-8 text-slate-300">
            {t.aboutText}
          </p>
        </div>
      </section>

      <section id="contact" className="mx-auto max-w-7xl px-4 py-20 sm:px-6 lg:px-8">
        <div className="rounded-3xl border border-white/10 bg-white/[0.045] p-7 shadow-[0_25px_80px_-45px_rgba(249,115,22,0.18)] sm:p-10">
          <div className="grid gap-8 md:grid-cols-[1fr_auto] md:items-center">
            <div>
              <div className="mb-2 text-xs font-black uppercase tracking-[0.2em] text-orange-400">
                GET IN TOUCH
              </div>
              <h2 className="text-3xl font-black">{t.contactTitle}</h2>
              <p className="mt-3 max-w-2xl leading-7 text-slate-400">
                {t.contactText}
              </p>
              <p className="mt-4 text-slate-300">info@themotigroup.co.in</p>
            </div>
            <div className="flex flex-wrap gap-3 md:max-w-xs md:flex-col">
              <a
                href="mailto:info@themotigroup.co.in"
                className="rounded-xl bg-gradient-to-r from-orange-500 to-orange-700 px-5 py-3 text-center text-sm font-bold text-white shadow-lg shadow-orange-950/30 transition duration-300 hover:-translate-y-0.5 hover:from-orange-400 hover:to-orange-600"
              >
                {t.emailUs}
              </a>
              <a
                href="https://wa.me/918692823879"
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

      <footer className="relative overflow-hidden bg-slate-950 text-white">
        <div className="pointer-events-none absolute -right-24 -top-24 h-72 w-72 rounded-full bg-orange-500/10 blur-3xl" />
        <div className="pointer-events-none absolute -bottom-28 left-1/4 h-64 w-64 rounded-full bg-amber-400/10 blur-3xl" />
        <div className="relative mx-auto max-w-7xl px-4 pb-8 pt-14 sm:px-6 lg:px-8">
          <div className="mb-10 grid gap-10 border-b border-white/10 pb-10 md:grid-cols-[1.35fr_1fr_1fr_1.2fr]">
            <div>
              <a href="#home" className="inline-flex items-center gap-3 rounded-2xl focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-orange-400">
                <span className="flex h-12 w-12 items-center justify-center rounded-2xl bg-gradient-to-br from-orange-400 to-orange-700 text-xl font-black shadow-lg shadow-orange-950/40">M</span>
                <span>
                  <span className="block text-lg font-black tracking-wide">THE MOTI GROUP</span>
                  <span className="mt-0.5 block text-[10px] font-bold uppercase tracking-[0.24em] text-orange-300">Ideas into impact</span>
                </span>
              </a>
              <p className="mt-5 max-w-sm text-sm leading-7 text-slate-400">{t.footerText}</p>
              <a href="https://wa.me/918692823879" target="_blank" rel="noreferrer" className="mt-5 inline-flex items-center gap-2 rounded-full border border-green-400/30 bg-green-400/10 px-4 py-2.5 text-sm font-bold text-green-300 transition hover:-translate-y-0.5 hover:border-green-300/60 hover:bg-green-400/15">
                <span aria-hidden="true">◉</span> {t.whatsapp} <span aria-hidden="true">↗</span>
              </a>
            </div>

            <div>
              <h3 className="text-xs font-black uppercase tracking-[0.2em] text-orange-300">{t.quickLinks}</h3>
              <div className="mt-5 flex flex-col items-start gap-3.5 text-sm text-slate-400">
                <a href="#home" className="transition hover:translate-x-1 hover:text-white">{t.home}</a>
                <a href="#ventures" className="transition hover:translate-x-1 hover:text-white">{t.ourVentures}</a>
                <a href="#trending" className="transition hover:translate-x-1 hover:text-white">{t.latest}</a>
                <a href="#about" className="transition hover:translate-x-1 hover:text-white">{t.aboutNav}</a>
                <a href="#contact" className="transition hover:translate-x-1 hover:text-white">{t.contactNav}</a>
                <a href="/about-us" className="transition hover:translate-x-1 hover:text-white">{language === "mr" ? "आमच्याबद्दल" : "About Us"}</a>
                <a href="/contact-us" className="transition hover:translate-x-1 hover:text-white">{language === "mr" ? "संपर्क" : "Contact Us"}</a>
                <a href="/privacy-policy" className="transition hover:translate-x-1 hover:text-white">{language === "mr" ? "गोपनीयता धोरण" : "Privacy Policy"}</a>
                <a href="/terms-and-conditions" className="transition hover:translate-x-1 hover:text-white">{language === "mr" ? "अटी व शर्ती" : "Terms & Conditions"}</a>
                <a href="/cookie-policy" className="transition hover:translate-x-1 hover:text-white">{language === "mr" ? "कुकी धोरण" : "Cookie Policy"}</a>
              </div>
            </div>

            <div>
              <h3 className="text-xs font-black uppercase tracking-[0.2em] text-orange-300">{t.ourVentures}</h3>
              <div className="mt-5 flex flex-col items-start gap-3.5 text-sm text-slate-400">
                <a href="https://diagnostics.themotigroup.co.in/" target="_blank" rel="noreferrer" className="transition hover:translate-x-1 hover:text-white">Health & Care <span className="text-slate-600">↗</span></a>
                <a href="https://techlab.themotigroup.co.in/" target="_blank" rel="noreferrer" className="transition hover:translate-x-1 hover:text-white">Technology <span className="text-slate-600">↗</span></a>
                <a href="https://financial.themotigroup.co.in/" target="_blank" rel="noreferrer" className="transition hover:translate-x-1 hover:text-white">Finance <span className="text-slate-600">↗</span></a>
                <a href="https://dealz.themotigroup.co.in/" target="_blank" rel="noreferrer" className="transition hover:translate-x-1 hover:text-white">Deals & Offers <span className="text-slate-600">↗</span></a>
              </div>
            </div>

            <div>
              <h3 className="text-xs font-black uppercase tracking-[0.2em] text-orange-300">{t.connect}</h3>
              <p className="mt-5 text-sm leading-6 text-slate-400">Have a question or want to work with us? We’d love to hear from you.</p>
              <a href="mailto:info@themotigroup.co.in" className="mt-4 block break-all text-sm font-semibold text-white transition hover:text-orange-300">info@themotigroup.co.in</a>
              <a href="http://billing.themotigroup.co.in/" target="_blank" rel="noreferrer" className="mt-5 inline-flex items-center gap-2 rounded-xl bg-white/5 px-4 py-3 text-sm font-bold text-slate-200 ring-1 ring-white/10 transition hover:bg-white/10 hover:ring-orange-400/40">
                Moti Technologies — {t.softwareLogin} <span aria-hidden="true">↗</span>
              </a>
            </div>
          </div>

          <div className="flex flex-col gap-4 text-xs text-slate-500 sm:flex-row sm:items-center sm:justify-between">
            <p>© {new Date().getFullYear()} The Moti Group. {t.rights}</p>
            <a href="#home" className="inline-flex items-center gap-2 font-semibold text-slate-400 transition hover:text-orange-300">Back to top <span aria-hidden="true">↑</span></a>
          </div>
        </div>
      </footer>

    </main>
    </>
  );
}

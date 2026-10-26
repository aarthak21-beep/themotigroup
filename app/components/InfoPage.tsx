import Link from "next/link";

type InfoPageProps = {
  title: string;
  titleMr: string;
  description: string;
  descriptionMr: string;
  children: React.ReactNode;
};

export default function InfoPage({ title, titleMr, description, descriptionMr, children }: InfoPageProps) {
  return (
    <main className="min-h-screen bg-[#f7f8fa] text-slate-900">
      <header className="border-b border-slate-200 bg-white">
        <div className="mx-auto flex max-w-5xl items-center justify-between gap-4 px-4 py-5 sm:px-6">
          <Link href="/" className="flex items-center gap-3 rounded-xl focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-orange-500">
            <span className="flex h-11 w-11 items-center justify-center rounded-xl bg-orange-600 text-xl font-black text-white">M</span>
            <span><span className="block text-lg font-black tracking-tight">THE MOTI GROUP</span><span className="block text-xs text-slate-500">Ideas. Services. Innovation.</span></span>
          </Link>
          <Link href="/" className="rounded-xl border border-slate-200 px-4 py-2 text-sm font-bold text-slate-700 transition hover:border-orange-300 hover:text-orange-700">Home / मुख्यपृष्ठ</Link>
        </div>
      </header>
      <div className="mx-auto max-w-4xl px-4 py-10 sm:px-6 sm:py-14">
        <div className="mb-8 rounded-3xl bg-slate-950 p-7 text-white sm:p-10">
          <p className="text-xs font-black uppercase tracking-[0.2em] text-orange-300">THE MOTI GROUP · माहिती</p>
          <h1 className="mt-3 text-3xl font-black tracking-tight sm:text-4xl">{title}</h1>
          <p className="mt-2 text-xl font-bold text-orange-200">{titleMr}</p>
          <p className="mt-4 max-w-3xl leading-7 text-slate-300">{description}</p>
          <p className="mt-2 max-w-3xl leading-7 text-slate-300">{descriptionMr}</p>
        </div>
        <article className="rounded-3xl border border-slate-200 bg-white p-6 shadow-sm sm:p-10">
          <div className="space-y-8 [&_h2]:text-xl [&_h2]:font-extrabold [&_h2]:tracking-tight [&_p]:mt-3 [&_p]:leading-7 [&_p]:text-slate-600 [&_li]:ml-5 [&_li]:mt-2 [&_li]:list-disc [&_li]:leading-7 [&_li]:text-slate-600 [&_a]:font-semibold [&_a]:text-orange-700 [&_a]:underline [&_a]:underline-offset-4">
            {children}
          </div>
        </article>
        <footer className="mt-8 flex flex-wrap gap-x-5 gap-y-3 text-sm font-semibold text-slate-600">
          <Link href="/privacy-policy">Privacy Policy</Link>
          <Link href="/terms-and-conditions">Terms & Conditions</Link>
          <Link href="/cookie-policy">Cookie Policy</Link>
          <Link href="/about-us">About Us</Link>
          <Link href="/contact-us">Contact Us</Link>
        </footer>
      </div>
    </main>
  );
}

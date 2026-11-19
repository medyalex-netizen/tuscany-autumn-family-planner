"use client";
import Link from "next/link";
import { useLanguage } from "../language-context";
import { translations } from "../translations";

export default function Home() {
  const { language, setLanguage } = useLanguage();
  const t = translations[language];

  const translatedHighlights = [
  {
    title: t.highlight1Title,
    text: t.highlight1Text,
  },
  {
    title: t.highlight2Title,
    text: t.highlight2Text,
  },
  {
    title: t.highlight3Title,
    text: t.highlight3Text,
  },
  {
    title: t.highlight4Title,
    text: t.highlight4Text,
  },
];

const translatedRouteIdeas = [
  {
    title: t.route1Title,
    text: t.route1Text,
  },
  {
    title: t.route2Title,
    text: t.route2Text,
  },
  {
    title: t.route3Title,
    text: t.route3Text,
  },
];
  const translatedPrinciples = [
  t.principle1,
  t.principle2,
  t.principle3,
  t.principle4,
  t.principle5,
];
  return (
    <main dir={language === "he" ? "rtl" : "ltr"} className="min-h-screen bg-slate-950 px-6 py-10 text-white">
      <div className="mx-auto max-w-6xl">
         <div className="mb-6 flex gap-2">
        <button
          type="button"
          onClick={() => setLanguage("he")}
          className={`rounded-full px-4 py-2 ${
            language === "he"
              ? "bg-amber-300 text-slate-950"
              : "border border-white/20 text-slate-200"
          }`}
        >
          {t.hebrewLanguage}
        </button>

        <button
          type="button"
          onClick={() => setLanguage("en")}
          className={`rounded-full px-4 py-2 ${
            language === "en"
              ? "bg-amber-300 text-slate-950"
              : "border border-white/20 text-slate-200"
          }`}
        >
          {t.englishLanguage}
        </button>
      </div>
        <section className="rounded-3xl border border-white/10 bg-white/5 p-8 shadow-2xl">
          <p className="text-sm font-semibold text-amber-300">{t.appName}</p>

          <h1 className="mt-4 max-w-4xl text-4xl font-bold leading-tight md:text-6xl">
             {t.homeTitle}
          </h1>

          <p className="mt-6 max-w-3xl leading-8 text-slate-300">
            {t.homeIntro}
          </p>

          <div className="mt-8 flex flex-col gap-3 sm:flex-row">
            <Link
              href="/search"
              className="rounded-full bg-amber-300 px-7 py-3 text-center font-bold text-slate-950 hover:bg-amber-200"
            >
             {t.startPlanning}
            </Link>

            <Link
              href="/results"
              className="rounded-full border border-white/20 px-7 py-3 text-center font-semibold text-slate-100 hover:border-amber-300"
            >
             {t.viewInitialDirection}
            </Link>

            <Link
              href="/itinerary"
              className="rounded-full border border-white/20 px-7 py-3 text-center font-semibold text-slate-100 hover:border-amber-300"
            >
            {t.sampleItinerary}
            </Link>
          </div>
        </section>

        <section className="mt-10">
          <h2 className="text-3xl font-bold">{t.howItHelpsTitle}</h2>

          <div className="mt-5 grid gap-5 md:grid-cols-2">
            {translatedHighlights.map((item) => (
              <div
                key={item.title}
                className="rounded-3xl border border-white/10 bg-slate-900/80 p-6"
              >
                <h3 className="text-2xl font-bold text-amber-200">
                  {item.title}
                </h3>

                <p className="mt-3 leading-8 text-slate-300">{item.text}</p>
              </div>
            ))}
          </div>
        </section>

        <section className="mt-10 rounded-3xl border border-white/10 bg-white/5 p-6">
          <h2 className="text-3xl font-bold">{t.possibleRouteTitle}</h2>

          <p className="mt-3 max-w-3xl leading-8 text-slate-300">
           {t.possibleRouteIntro}
          </p>

          <div className="mt-6 grid gap-5 md:grid-cols-3">
            {translatedRouteIdeas.map((item) => (
              <div
                key={item.title}
                className="rounded-3xl border border-white/10 bg-slate-950/60 p-6"
              >
                <h3 className="text-xl font-bold text-amber-200">
                  {item.title}
                </h3>

                <p className="mt-3 leading-8 text-slate-300">{item.text}</p>
              </div>
            ))}
          </div>
        </section>

        <section className="mt-10 rounded-3xl border border-white/10 bg-slate-900/80 p-6">
          <h2 className="text-3xl font-bold">{t.scenicDrivingTitle}</h2>

<p className="mt-4 max-w-4xl leading-8 text-slate-300">
  {t.scenicDrivingText}
</p>
        </section>

        <section className="mt-10 rounded-3xl border border-white/10 bg-white/5 p-6">
          <h2 className="text-3xl font-bold">{t.planningPrinciplesTitle}</h2>

          <div className="mt-5 space-y-3">
            {translatedPrinciples.map((principle) => (
              <p key={principle} className="leading-7 text-slate-300">
                ✓ {principle}
              </p>
            ))}
          </div>
        </section>

        <section className="mt-10 rounded-3xl border border-amber-300/30 bg-amber-300/10 p-6">
          <h2 className="text-2xl font-bold text-amber-200">
           {t.startQuestionsTitle}
          </h2>

         <p className="mt-3 leading-8 text-slate-200">
            {t.startQuestionsText}
         </p>

          <div className="mt-6 flex flex-col gap-3 sm:flex-row">
            <Link
              href="/search"
              className="rounded-full bg-amber-300 px-7 py-3 text-center font-bold text-slate-950 hover:bg-amber-200"
            >
             {t.startPlanning}
            </Link>

            <Link
              href="/results"
              className="rounded-full border border-white/20 px-7 py-3 text-center font-semibold text-slate-100 hover:border-amber-300"
            >
            {t.viewInitialDirection}
            </Link>
          </div>
        </section>
      </div>
    </main>
  );
}

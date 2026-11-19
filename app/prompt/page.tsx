"use client";

import Link from "next/link";

import { useAnswers } from "@/lib/use-answers";
import { useLanguage } from "../../language-context";
import { displayAnswer, displayAnswerList, displayText } from "../../display-text";
import { translations } from "../../translations";


const plannerRules = [
  "לשאול שאלות לפני בניית מסלול סופי.",
  "להשתמש בתשובות המשפחתיות שנשמרו בעמוד השאלות.",
  "לא להעמיס יותר מדי על כל יום.",
  "לשלב זמן קניות, אוכל, קפה ושיטוט רגוע.",
  "לתת מקום גם למה שמעניין מתבגר/ת.",
  "להשאיר יום נסיעה נופי כאפשרות מומלצת, אבל לא חובה.",
  "לא לשלב יותר מדי כפרים, עיירות או נסיעות ארוכות אם הטיול קצר מדי.",
  "לבדוק שעות פתיחה, זמני נסיעה, חניה, מזג אוויר ועלויות לפני הזמנה.",
];
export default function PromptPage() {
  const { answers } = useAnswers();
  const { language } = useLanguage();
  const t = translations[language];
  const answerLabel = (value: string) => displayAnswer(value, language);
  const teenText = displayAnswerList(
    answers.teenPriorities.length ? answers.teenPriorities : [answers.teenPriority].filter(Boolean),
    language
  );
  const lodgingPrioritiesText = displayAnswerList(answers.lodgingPriorities, language);
  const answerLines = [
    [t.tripLengthLabel, answerLabel(answers.tripLength)],
    [t.tripStartDateLabel, answers.tripStartDate],
    [t.tripEndDateLabel, answers.tripEndDate],
    [t.arrivalPointLabel, answers.arrivalPoint],
    [t.promptDepartureLabel, answers.departurePoint],
    [t.travelStyleLabel, answerLabel(answers.travelStyle)],
    [t.transportationLabel, answerLabel(answers.transportation)],
    [t.scenicInterestLabel, answerLabel(answers.scenicInterest)],
    [t.scenicOptionLabel, answerLabel(answers.scenicOption)],
    [t.baseAreaLabel, answerLabel(answers.baseArea)],
    [t.lodgingTypeLabel, answerLabel(answers.lodgingType)],
    [t.lodgingBudgetLabel, answerLabel(answers.lodgingBudget)],
    [t.roomSetupLabel, answerLabel(answers.roomSetup)],
    [t.lodgingPrioritiesLabel, lodgingPrioritiesText],
    [t.teenPrioritiesLabel, teenText],
  ].map(([label, value]) => `${label}: ${value || t.notSelected}`);
  const bullets = (items: readonly string[]) => items.map((item) => `- ${item}`).join("\n");
  const promptText = [
    t.promptTitle,
    `${t.promptFamilyTitle}:\n${bullets([t.promptParents, t.promptTeenager, `${t.tripLengthLabel}: ${t.promptMaximumDuration}`])}`,
    `${t.promptSavedAnswers}:\n${bullets(answerLines)}`,
    `${t.promptGoalsTitle}:\n${bullets(t.promptGoals)}`,
    `${t.promptPlanningRulesTitle}:\n${bullets(t.promptPlanningRules)}`,
    t.promptClosing,
  ].join("\n\n");

  return (
    <main dir={language === "he" ? "rtl" : "ltr"} className="min-h-screen bg-slate-950 px-6 py-10 text-white">
      <div className="mx-auto max-w-6xl">
        <div className="mb-8 flex flex-wrap gap-4">
          <Link href="/" className="text-sm text-amber-300 hover:text-amber-200">{t.backHome}</Link>

          <Link
            href="/search"
            className="text-sm text-amber-300 hover:text-amber-200"
          >{t.changeAnswers}</Link>

          <Link
            href="/results"
            className="text-sm text-amber-300 hover:text-amber-200"
          >{t.backToResults}</Link>
        </div>

        <section className="rounded-3xl border border-white/10 bg-white/5 p-8 shadow-2xl">
          <p className="text-sm font-semibold text-amber-300">{t.appName}</p>

          <p className="mt-3 leading-8 text-slate-200">
            {t.promptLead}
          </p>
          <h1 className="mt-3 text-4xl font-bold text-white">
  {t.resultsTitle}
</h1>

<p className="mt-5 max-w-3xl leading-8 text-slate-300">
  {t.promptIntro}
</p>
        </section>

        <section className="mt-8 rounded-3xl border border-white/10 bg-slate-900/80 p-6">
          <h2 className="text-2xl font-bold">{t.promptSavedAnswers}</h2>

          <div className="mt-5 grid gap-4 md:grid-cols-2">
            <AnswerCard label={t.tripLengthLabel} value={answerLabel(answers.tripLength)} />

<AnswerCard label={t.travelStyleLabel} value={answerLabel(answers.travelStyle)} />

<AnswerCard
  label={t.transportationLabel}
  value={answerLabel(answers.transportation)}
/>

<AnswerCard
  label={t.scenicInterestLabel}
  value={answerLabel(answers.scenicInterest)}
/>

<AnswerCard
  label={t.scenicOptionLabel}
  value={answerLabel(answers.scenicOption)}
/>

            <AnswerCard label={t.baseAreaLabel} value={answerLabel(answers.baseArea)} />
            <AnswerCard label={t.teenPrioritiesLabel} value={teenText} />
          </div>
        </section>

        <section className="mt-8 rounded-3xl border border-white/10 bg-white/5 p-6">
          <h2 className="text-2xl font-bold">{t.promptGenerated}</h2>

          <p className="mt-3 leading-7 text-slate-300">
           {t.promptCopyHelp}
          </p>

          <pre
            dir={language === "he" ? "rtl" : "ltr"}
            className="mt-5 whitespace-pre-wrap rounded-3xl border border-white/10 bg-slate-950 p-5 text-start text-sm leading-7 text-slate-100"
          >
            {promptText}
          </pre>
        </section>

        <section className="mt-8 rounded-3xl border border-white/10 bg-slate-900/80 p-6">
          <h2 className="text-2xl font-bold">{t.promptRules}</h2>

          <div className="mt-5 space-y-3">
            {plannerRules.map((rule) => (
              <p key={rule} className="leading-7 text-slate-300">
                ✓ {displayText(rule, language)}
              </p>
            ))}
          </div>
        </section>

        <section className="mt-8 rounded-3xl border border-amber-300/30 bg-amber-300/10 p-6">
          <h2 className="text-2xl font-bold text-amber-200">{t.continueLabel}</h2>

          <p className="mt-3 leading-8 text-slate-200">
            {t.promptNext}
          </p>

          <div className="mt-6 flex flex-col gap-3 sm:flex-row">
            <Link
              href="/itinerary"
              className="rounded-full bg-amber-300 px-6 py-3 text-center font-bold text-slate-950 hover:bg-amber-200"
            >
              {t.viewSampleItinerary}
            </Link>

            <Link
              href="/results"
              className="rounded-full border border-white/20 px-6 py-3 text-center font-semibold text-slate-100 hover:border-amber-300"
            >{t.backToResults}</Link>

            <Link
              href="/search"
              className="rounded-full border border-white/20 px-6 py-3 text-center font-semibold text-slate-100 hover:border-amber-300"
            >{t.changeAnswers}</Link>
          </div>
        </section>
      </div>
    </main>
  );
}

function AnswerCard({ label, value }: { label: string; value: string }) {
  return (
    <div className="rounded-2xl border border-white/10 bg-white/5 p-4">
      <p className="text-sm font-semibold text-amber-300">{label}</p>
      <p className="mt-2 leading-7 text-slate-100">
        {value}
      </p>
    </div>
  );
}

"use client";

import Link from "next/link";

import { useAnswers } from "@/lib/use-answers";
import { dateWarning, type Answers } from "@/lib/answers";
import { useLanguage } from "../../language-context";
import { translations } from "../../translations";
import { displayText } from "../../display-text";


const questions = [
 {
  key: "tripLength",
  title: "מה משך הטיול המתוכנן?",
  helper: "משך הטיול יעזור לנו לבחור כמה אזורים וכמה מקומות לינה לשלב.",
  options: [
    "4–5 ימים",
    "6–7 ימים",
    "8–10 ימים",
    "עדיין לא החלטנו",
  ],
},
  {
  key: "travelStyle",
  title: "איזה קצב טיול מתאים למשפחה?",
  helper: "הקצב ישפיע על מספר המקומות בכל יום, זמן המנוחה וכמות הנסיעות.",
  options: [
    "רגוע — מעט מקומות והרבה זמן חופשי",
    "מאוזן — שילוב של טיול ומנוחה",
    "פעיל — להספיק יותר בכל יום",
    "קצב שונה בימים שונים",
  ],
},
{
  key: "transportation",
  title: "איך אתם מתכננים להתנייד בטוסקנה?",
  helper: "הבחירה תשפיע על אזורי הלינה, מספר הבסיסים והאפשרות להגיע לכפרים ולעיירות קטנות.",
  options: [
    "רכב שכור לכל הטיול",
    "רכב שכור רק לחלק הכפרי",
    "רכבות ותחבורה ציבורית בלבד",
    "עדיין לא החלטנו",
  ],
 },
  {
    
  key: "scenicInterest",
  title: "עד כמה חשוב לשלב נופים וטבע בטיול?",
  helper: "התשובה תעזור לקבוע את האיזון בין ערים, עיירות, כפרים ונסיעות נופיות.",
  options: [
    "מאוד חשוב — רוצים הרבה נופים וכפרים",
    "חשוב, אבל בשילוב עם ערים ואטרקציות",
    "פחות חשוב — מעדיפים ערים, קניות ואוכל",
  ],
},
{
  key: "scenicOption",
  title: "איזה סוג של יום נופי הכי מושך אתכם?",
  helper: "התשובה תעזור לבחור בין כפרים, דרכים נופיות, אזורי כרמים וטבע פתוח.",
  options: [
    "יום של עיירות וכפרים ציוריים",
    "נסיעה נופית עם עצירות קצרות",
    "אזורי כרמים ואוכל מקומי",
    "טבע פתוח ותצפיות",
    "עדיין לא יודעים",
  ],
},
{
  key: "baseArea",
  title: "איזה אזור לינה נשמע מתאים יותר?",
  helper: "הבחירה תעזור לבנות מסלול הגיוני עם פחות נסיעות והחלפות מלון.",
  options: [
    "פירנצה",
    "סיינה",
    "קיאנטי / סן ג'ימיניאנו",
    "ואל ד'אורצ'ה / פיינצה / מונטפולצ'יאנו",
    "לוקה / פיזה",
    "שילוב של שני אזורים",
    "עדיין פתוחים להצעות",
  ],
},
{
  key: "lodgingType",
  title: "איזה סוג מקום לינה אתם מעדיפים?",
  helper: "הבחירה תעזור להתאים את אזורי הלינה, החניה והאווירה המשפחתית.",
  options: [
    "מלון במרכז עיר",
    "דירה משפחתית",
    "אגריטוריסמו או לינה כפרית",
    "שילוב של עיר וכפר",
    "עדיין לא החלטנו",
  ],
},
{
  key: "lodgingPriorities",
  title: "מה חשוב לכם במקום הלינה?",
  helper: "אפשר לבחור את הדברים שהכי חשובים למשפחה כדי להתאים את מקום הלינה בצורה טובה יותר.",
  options: [
    "חניה נוחה",
    "ארוחת בוקר",
    "חדר משפחתי",
    "מטבחון",
    "מעלית",
    "קרבה למרכז ולמסעדות",
  ],
},
{
  key: "lodgingBudget",
  title: "מה תקציב הלינה המועדף ללילה?",
  helper: "התקציב יעזור להתאים בין מלון, דירה ואגריטוריסמו ולבחור אזורים שמתאימים למשפחה.",
  options: [
    "עד 150 אירו ללילה",
    "150–250 אירו ללילה",
    "250–350 אירו ללילה",
    "מעל 350 אירו ללילה",
    "גמישים לפי המקום",
    "עדיין לא החלטנו",
  ],
},
{
  key: "roomSetup",
  title: "איזה סידור חדר ומיטות אתם מעדיפים?",
  helper: "הבחירה תעזור לוודא שמקום הלינה מתאים בנוחות לשני הורים ולמתבגר/ת.",
  options: [
    "חדר אחד עם מיטה זוגית ומיטה נפרדת למתבגר/ת",
    "חדר משפחתי לשלושה",
    "שני חדרים נפרדים",
    "דירה עם חדר שינה וספה נפתחת",
    "גמישים לפי המקום",
    "עדיין לא החלטנו",
  ],
},
] as const;
const teenOptions = [
  "קניות ורחובות יפים",
  "גלידה, קינוחים ובתי קפה",
  "מקומות יפים לתמונות",
  "עיירות וכפרים ציוריים",
  "טבע, תצפיות ונסיעות נופיות",
  "סדנת בישול או פעילות אוכל",
  "אטרקציות קלילות ולא מוזיאונים כבדים",
  "זמן חופשי לשיטוט, קניות ומנוחה",

];

export default function SearchPage() {
  const { language, setLanguage } = useLanguage();
  const t = translations[language];
  const translatedTeenOptions = [
    t.teenOption1,
    t.teenOption2,
    t.teenOption3,
    t.teenOption4,
    t.teenOption5,
    t.teenOption6,
    t.teenOption7,
    t.teenOption8,
 ];
  const translatedQuestions = questions.map((question) => {
  if (question.key === "tripLength") {
    return {
      ...question,
      title: t.tripLengthTitle,
      helper: t.tripLengthHelper,
      options: [
        t.tripLengthOption1,
        t.tripLengthOption2,
        t.tripLengthOption3,
        t.tripLengthOption4,
      ],
    };
  }

  if (question.key === "travelStyle") {
    return {
      ...question,
      title: t.travelStyleTitle,
      helper: t.travelStyleHelper,
      options: [
        t.travelStyleOption1,
        t.travelStyleOption2,
        t.travelStyleOption3,
        t.travelStyleOption4,
      ],
    };
  }
  if (question.key === "transportation") {
    return {
     ...question,
     title: t.transportationTitle,
     helper: t.transportationHelper,
     options: [
        t.transportationOption1,
        t.transportationOption2,
        t.transportationOption3,
        t.transportationOption4,
    ],
  };
}
if (question.key === "scenicInterest") {
  return {
    ...question,
    title: t.scenicInterestTitle,
    helper: t.scenicInterestHelper,
    options: [
      t.scenicInterestOption1,
      t.scenicInterestOption2,
      t.scenicInterestOption3,
    ],
  };
}
if (question.key === "scenicOption") {
  return {
    ...question,
    title: t.scenicOptionTitle,
    helper: t.scenicOptionHelper,
    options: [
      t.scenicOptionOption1,
      t.scenicOptionOption2,
      t.scenicOptionOption3,
      t.scenicOptionOption4,
      t.scenicOptionOption5,
    ],
  };
}
if (question.key === "baseArea") {
  return {
    ...question,
    title: t.baseAreaTitle,
    helper: t.baseAreaHelper,
    options: [
      t.baseAreaOption1,
      t.baseAreaOption2,
      t.baseAreaOption3,
      t.baseAreaOption4,
      t.baseAreaOption5,
      t.baseAreaOption6,
      t.baseAreaOption7,
    ],
  };
}
if (question.key === "lodgingType") {
  return {
    ...question,
    title: t.lodgingTypeTitle,
    helper: t.lodgingTypeHelper,
    options: [
      t.lodgingTypeOption1,
      t.lodgingTypeOption2,
      t.lodgingTypeOption3,
      t.lodgingTypeOption4,
      t.lodgingTypeOption5,
    ],
  };
}
if (question.key === "lodgingPriorities") {
  return {
    ...question,
    title: t.lodgingPrioritiesTitle,
    helper: t.lodgingPrioritiesHelper,
    options: [
      t.lodgingPrioritiesOption1,
      t.lodgingPrioritiesOption2,
      t.lodgingPrioritiesOption3,
      t.lodgingPrioritiesOption4,
      t.lodgingPrioritiesOption5,
      t.lodgingPrioritiesOption6,
    ],
  };
}
if (question.key === "lodgingBudget") {
  return {
    ...question,
    title: t.lodgingBudgetTitle,
    helper: t.lodgingBudgetHelper,
    options: [
      t.lodgingBudgetOption1,
      t.lodgingBudgetOption2,
      t.lodgingBudgetOption3,
      t.lodgingBudgetOption4,
      t.lodgingBudgetOption5,
      t.lodgingBudgetOption6,
    ],
  };
}
if (question.key === "roomSetup") {
  return {
    ...question,
    title: t.roomSetupTitle,
    helper: t.roomSetupHelper,
    options: [
      t.roomSetupOption1,
      t.roomSetupOption2,
      t.roomSetupOption3,
      t.roomSetupOption4,
      t.roomSetupOption5,
      t.roomSetupOption6,
    ],
  };
}
return question;
});
  const { answers, ready, status, save, clear } = useAnswers();
  const warning = dateWarning(answers);

  function selectAnswer(key: keyof Answers, value: string) {
    save((current) => ({
      ...current,
      [key]: value,
    }));

  }

  function toggleTeenPriority(value: string) {
  save((current) => {
    const exists = current.teenPriorities.includes(value);

    return {
      ...current,
      teenPriorities: exists
        ? current.teenPriorities.filter((item) => item !== value)
        : [...current.teenPriorities, value],
    };
  });

}
function toggleLodgingPriority(value: string) {
  save((current) => {
    const exists = current.lodgingPriorities.includes(value);

    return {
      ...current,
      lodgingPriorities: exists
        ? current.lodgingPriorities.filter((item) => item !== value)
        : [...current.lodgingPriorities, value],
    };
  });

}
  function clearAnswers() { clear(); }

const requiredQuestionKeys: Array<keyof Answers> = [
  "tripLength",
  "travelStyle",
  "scenicInterest",
  "baseArea",
];
  return (
    <main dir={language === "he" ? "rtl" : "ltr"} className="min-h-screen bg-slate-950 px-6 py-10 text-white">
      <div className="mx-auto max-w-5xl">
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
        <div className="mb-8">
          <Link href="/" className="text-sm text-amber-300 hover:text-amber-200">
           {t.backHome}
          </Link>
        </div>

        <section className="rounded-3xl border border-white/10 bg-white/5 p-8 shadow-2xl">
          <p className="text-sm font-semibold text-amber-300">{t.appName}</p>

          <h1 className="mt-4 text-4xl font-bold">
            {t.searchTitle}
          </h1>

          <p className="mt-5 max-w-3xl leading-8 text-slate-300">
         {t.searchIntro}
</p>
        </section>

        <fieldset disabled={!ready} className="mt-8 space-y-6">
          {warning && <p role="alert" className="rounded-2xl bg-amber-300/10 p-4 text-amber-100">{displayText(warning, language)}</p>}
          <p className="text-slate-300">{t.dateRangeNote}</p>
          <div className="rounded-3xl border border-white/10 bg-slate-900/80 p-6">
  <h2 className="text-2xl font-bold">{t.tripStartTitle}</h2>

  <p className="mt-2 leading-7 text-slate-300">
  {t.tripStartText}
</p>

  <input
    type="date"
    value={answers.tripStartDate}
    onChange={(event) =>
      save((current) => ({
        ...current,
        tripStartDate: event.target.value,
      }))
    }
    className="mt-5 rounded-xl border border-white/10 bg-slate-950 px-4 py-3 text-white"
  />
</div>
<div className="rounded-3xl border border-white/10 bg-slate-900/80 p-6">
  <h2 className="text-2xl font-bold">{t.tripEndTitle}</h2>

  <p className="mt-2 leading-7 text-slate-300">
  {t.tripEndText}
</p>

  <input
    type="date"
    value={answers.tripEndDate}
    onChange={(event) =>
      save((current) => ({
        ...current,
        tripEndDate: event.target.value,
      }))
    }
    className="mt-5 rounded-xl border border-white/10 bg-slate-950 px-4 py-3 text-white"
  />
</div>
<div className="rounded-3xl border border-white/10 bg-slate-900/80 p-6">
  <h2 className="text-2xl font-bold">{t.arrivalPointTitle}</h2>

  <p className="mt-2 leading-7 text-slate-300">
    {t.arrivalPointText}
  </p>

  <input
    type="text"
    value={answers.arrivalPoint}
    onChange={(event) =>
      save((current) => ({
        ...current,
        arrivalPoint: event.target.value,
      }))
    }
    placeholder={t.arrivalPointPlaceholder}
    className="mt-5 w-full rounded-xl border border-white/10 bg-slate-950 px-4 py-3 text-white"
  />
</div>

<div className="rounded-3xl border border-white/10 bg-slate-900/80 p-6">
  <h2 className="text-2xl font-bold">{t.departurePointTitle}</h2>

  <p className="mt-2 leading-7 text-slate-300">
    {t.departurePointText}
  </p>

  <input
    type="text"
    value={answers.departurePoint}
    onChange={(event) =>
      save((current) => ({
        ...current,
        departurePoint: event.target.value,
      }))
    }
    placeholder={t.departurePointPlaceholder}
    className="mt-5 w-full rounded-xl border border-white/10 bg-slate-950 px-4 py-3 text-white"
  />
</div>
          {translatedQuestions.map((question) => {
            const selected = answers[question.key as keyof Answers] as string;

            return (
              <div
                key={question.key}
                className="rounded-3xl border border-white/10 bg-slate-900/80 p-6"
              >
                <h2
  className={`flex flex-wrap items-center justify-start gap-3 text-2xl font-bold ${
    language === "he" ? "text-right" : "text-left"
  }`}
>
  <span>{question.title}</span>

  {requiredQuestionKeys.includes(question.key as keyof Answers) && (
    <span className="text-sm font-semibold text-amber-200">
  {t.requiredToContinue}
</span>
  )}
</h2>
                <p className="mt-2 leading-7 text-slate-300">
                  {question.helper}
                </p>

                <div className="mt-5 grid gap-3 md:grid-cols-2">
                  {question.options.map((option, optionIndex) => {
                    const canonicalQuestion = questions.find((item) => item.key === question.key);
                    const canonicalOption = canonicalQuestion?.options[optionIndex] ?? option;
                    const isLodgingPriorities = question.key === "lodgingPriorities";
const isSelected = isLodgingPriorities
  ? answers.lodgingPriorities.includes(canonicalOption)
  : selected === canonicalOption;

                    return (
                      <button
                        key={canonicalOption}
                        type="button"
                        aria-pressed={isSelected}
                        onClick={() =>
  isLodgingPriorities
    ? toggleLodgingPriority(canonicalOption)
    : selectAnswer(question.key as keyof Answers, canonicalOption)
}
                        className={`rounded-2xl border p-4 ${language === "he" ? "text-right" : "text-left"} leading-7 transition ${
                          isSelected
                            ? "border-amber-300 bg-amber-300 text-slate-950"
                            : "border-white/10 bg-white/5 text-slate-100 hover:border-amber-300/70"
                        }`}
                      >
                        {option}
                      </button>
                    );
                  })}
                </div>
              </div>
            );
          })}

          <div className="rounded-3xl border border-white/10 bg-slate-900/80 p-6">
            <h2 className={`flex flex-wrap items-center justify-start gap-3 text-2xl font-bold ${
    language === "he" ? "text-right" : "text-left"
  }`}
>
  <span>{t.teenPrioritiesTitle}</span>

  <span className="text-sm font-semibold text-amber-200">
    {t.requiredToContinue}
  </span>
</h2>

            <p className="mt-2 leading-7 text-slate-300">
  {t.teenPrioritiesHelper}
</p>

            <div className="mt-5 grid gap-3 md:grid-cols-2">
              {translatedTeenOptions.map((option, optionIndex) => {
                const canonicalOption = teenOptions[optionIndex] ?? option;
                const isSelected = answers.teenPriorities.includes(canonicalOption);

                return (
                  <button
                    key={canonicalOption}
                    type="button"
                    aria-pressed={isSelected}
                    onClick={() => toggleTeenPriority(canonicalOption)}
                    className={`rounded-2xl border p-4 ${language === "he" ? "text-right" : "text-left"} leading-7 transition ${
                      isSelected
                        ? "border-amber-300 bg-amber-300 text-slate-950"
                        : "border-white/10 bg-white/5 text-slate-100 hover:border-amber-300/70"
                    }`}
                  >
                    {isSelected ? "✓ " : ""}
                    {option}
                  </button>
                );
              })}
            </div>
          </div>
        </fieldset>

        <section className="mt-8 rounded-3xl border border-white/10 bg-white/5 p-6">
          <div className="flex flex-col gap-4 md:flex-row md:items-center md:justify-between">
            <div>
              <h2 className="text-2xl font-bold">{t.answersSavedTitle}</h2>

              <p className="mt-2 text-slate-300">
                {status === "error"
  ? t.answersSaveError
  : status === "saved"
  ? t.answersSavedStatus
  : t.answersSavedText}
              </p>
            </div>

            <div className="flex flex-col gap-3 sm:flex-row">
              <button
                type="button"
                onClick={clearAnswers}
                disabled={!ready}
                className="rounded-full border border-white/20 px-6 py-3 font-semibold text-slate-100 hover:border-amber-300"
              >
                {t.clearAnswersButton}
              </button>

              <Link
                href="/results"
                className="rounded-full bg-amber-300 px-6 py-3 text-center font-bold text-slate-950 hover:bg-amber-200"
              >{t.continueToResultsButton}</Link>
            </div>
          </div>


        </section>
      </div>
    </main>
  );
}

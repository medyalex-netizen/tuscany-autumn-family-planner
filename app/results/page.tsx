"use client";

import Link from "next/link";

import { useAnswers } from "@/lib/use-answers";
import { useLanguage } from "../../language-context";
import { translations } from "../../translations";
import { displayAnswer, displayAnswerList, displayText } from "../../display-text";


const scenicIdeas = [
  {
    name: "דרך קיאנטי",
    text: "אפשרות יפה במיוחד אם רוצים לשלב עיירות, כרמים, נופים וארוחות טובות בלי להתרחק יותר מדי.",
  },
  {
    name: "יום טיול בוואל ד'אורצ'ה",
    text: "מתאים אם רוצים לשלב עיירות ציוריות, כבישים נופיים, עצירות קצרות ותמונות יפות לאורך הדרך.",
  },
  
   {
  name: "פיינצה, מונטפולצ'יאנו ובאניו ויניוני",
  text: "מתאים ליום של עיירות ציוריות, תצפיות, אוכל מקומי, רחובות יפים ועצירות קצרות בקצב רגוע.",
},
];



const familyRules = [
  "לא להעמיס יותר מדי בכל יום.",
  "לשלב זמן חופשי לקניות, אוכל, קפה ושיטוט רגוע.",
    "לבדוק תחזית מזג אוויר לפני ימי נסיעה נופיים וטיולי כפרים.",
  "להתאים את ימי הכפרים והעיירות לאופן ההתניידות שנבחר, ולבדוק מראש חניה, ZTL או זמינות תחבורה ציבורית.",
    "לשמור אפשרות לשינוי מסלול במקרה של גשם, עומס, עייפות או שינוי בתוכניות.",
  "לתת מקום גם למה שמעניין מתבגר/ת, ולא רק לאטרקציות של מבוגרים.",
];

export default function ResultsPage() {
  const { answers } = useAnswers();
  const { language, setLanguage } = useLanguage();
const t = translations[language];
const d = (value?: string | null) => displayText(value, language);
const translatedTripLengthIdeas = [
  {
    title: t.tripLengthIdea1Title,
    text: t.tripLengthIdea1Text,
  },
  {
    title: t.tripLengthIdea2Title,
    text: t.tripLengthIdea2Text,
  },
  {
    title: t.tripLengthIdea3Title,
    text: t.tripLengthIdea3Text,
  },
];
const translatedBaseIdeas = [
  {
    title: t.baseIdea1Title,
    tag: t.baseIdea1Tag,
    text: t.baseIdea1Text,
  },
  {
    title: t.baseIdea2Title,
    tag: t.baseIdea2Tag,
    text: t.baseIdea2Text,
  },
  {
    title: t.baseIdea3Title,
    tag: t.baseIdea3Tag,
    text: t.baseIdea3Text,
  },
  {
    title: t.baseIdea4Title,
    tag: t.baseIdea4Tag,
    text: t.baseIdea4Text,
  },
  {
    title: t.baseIdea5Title,
    tag: t.baseIdea5Tag,
    text: t.baseIdea5Text,
  },
];
  const teenText = displayAnswerList(answers.teenPriorities.length ? answers.teenPriorities : [answers.teenPriority].filter(Boolean), language);
  const lodgingPrioritiesText = displayAnswerList(answers.lodgingPriorities, language);
const baseAreaText =
  answers.baseArea === "פירנצה"
    ? t.baseAreaTextFlorence
    : answers.baseArea === "סיינה"
      ? t.baseAreaTextSiena
      : answers.baseArea === "שילוב של שני אזורים"
        ? t.baseAreaTextTwoAreas
        : t.baseAreaTextDefault;
 const travelStyleText =
  answers.travelStyle === "רגוע — מעט מקומות והרבה זמן חופשי"
    ? "בחרתם קצב רגוע. מומלץ לצמצם נסיעות והחלפות, להשאיר זמן חופשי ולהתמקד בפחות מקומות עם יותר עומק."
    : answers.travelStyle === "פעיל — להספיק יותר בכל יום"
      ? "בחרתם קצב פעיל. אפשר לשלב יותר עיירות, עצירות ואתרים, אבל עדיין חשוב לא להעמיס יותר מדי."
      : "קצב מאוזן מאפשר לשלב ערים, עיירות, נופים וזמן מנוחה בצורה נוחה למשפחה.";
    const lodgingTypeText =
  answers.lodgingType === "מלון במרכז עיר"
    ? "מלון במרכז עיר מתאים אם חשוב לכם להיות קרובים למסעדות, קניות ואתרים ולצמצם שימוש ברכב בתוך העיר."
    : answers.lodgingType === "דירה משפחתית"
      ? "דירה משפחתית יכולה להתאים אם חשובים לכם יותר מרחב, מטבחון וגמישות בארוחות, במיוחד בטיול של כמה ימים."
      : answers.lodgingType === "אגריטוריסמו או לינה כפרית"
        ? "אגריטוריסמו או לינה כפרית מתאימים במיוחד לחלק הכפרי של הטיול, עם אווירה רגועה ונופים. חשוב לבדוק חניה, דרך גישה ומרחק ממסעדות."
        : answers.lodgingType === "שילוב של עיר וכפר"
          ? "שילוב של לינה עירונית ולינה כפרית יכול לתת למשפחה גם נוחות בעיר וגם חוויה רגועה יותר באזורי הנוף."
          : "אם עדיין לא החלטתם על סוג הלינה, כדאי לבחור לפי אופן ההתניידות, מספר הלילות בכל אזור והעדיפות בין נוחות עירונית לאווירה כפרית.";
      const lodgingBudgetText =
  answers.lodgingBudget === "עד 150 אירו ללילה"
    ? "בתקציב של עד 150 אירו ללילה כדאי להתמקד בדירות משפחתיות, מלונות פשוטים יותר או לינה מחוץ למרכזים היקרים, ולבדוק היטב מה כלול במחיר."
    : answers.lodgingBudget === "150–250 אירו ללילה"
      ? "תקציב של 150–250 אירו ללילה נותן גמישות טובה בין דירה משפחתית, מלון נוח או אגריטוריסמו, בהתאם לאזור ולתאריכים."
      : answers.lodgingBudget === "250–350 אירו ללילה"
        ? "בתקציב של 250–350 אירו ללילה אפשר לשקול מקומות לינה ברמה גבוהה יותר, מיקום מרכזי יותר או אגריטוריסמו איכותי עם יותר שירותים."
        : answers.lodgingBudget === "מעל 350 אירו ללילה"
          ? "בתקציב של מעל 350 אירו ללילה אפשר לתת עדיפות למיקום, נוחות, חדר משפחתי מרווח ושירותים נוספים, בלי להתפשר רק בגלל המחיר."
          : answers.lodgingBudget === "גמישים לפי המקום"
            ? "אם התקציב גמיש, כדאי להשוות את המחיר מול המיקום, החניה, גודל החדר והשירותים שמקבלים בפועל."
                        : "אם עדיין לא החלטתם על תקציב לינה, כדאי לקבוע טווח מחיר ללילה לפני שמתחילים להשוות בין מלונות, דירות ואגריטוריסמו.";
                        const roomSetupText =
  answers.roomSetup === "חדר אחד עם מיטה זוגית ומיטה נפרדת למתבגר/ת"
    ? "מומלץ לוודא מראש שהמיטה הנפרדת למתבגר/ת היא מיטה אמיתית ונוחה, ולא רק ספה קטנה או מיטה מתקפלת."
    : answers.roomSetup === "חדר משפחתי לשלושה"
      ? "מומלץ לבחור חדר משפחתי שמיועד באמת לשלושה אורחים, עם מספיק מרחב ואחסון למשפחה."
      : answers.roomSetup === "שני חדרים נפרדים"
        ? "אם מעדיפים שני חדרים נפרדים, כדאי לבדוק מראש אם ניתן להזמין חדרים סמוכים או מחוברים."
        : answers.roomSetup === "דירה עם חדר שינה וספה נפתחת"
          ? "בדירה עם חדר שינה וספה נפתחת, כדאי לבדוק שהספה מתאימה לשינה נוחה למתבגר/ת ושיש מספיק פרטיות ומרחב."
          : answers.roomSetup === "גמישים לפי המקום"
            ? "אם אתם גמישים בסידור החדר, כדאי להשוות בין הנוחות, גודל החדר, סוג המיטה הנוספת והמחיר."
            : "אם עדיין לא החלטתם על סידור החדר, כדאי להגדיר מראש מה נחשב סידור שינה נוח לשלושת בני המשפחה.";
          const lodgingPrioritiesAdvice = (() => {
  const priorities = answers.lodgingPriorities || [];
  const parts: string[] = [];

  if (priorities.includes("חניה נוחה")) {
    parts.push("להעדיף מקום לינה עם חניה ברורה ונוחה, במיוחד אם משתמשים ברכב שכור");
  }

  if (priorities.includes("ארוחת בוקר")) {
    parts.push("לבדוק שארוחת הבוקר כלולה או זמינה במקום הלינה");
  }

  if (priorities.includes("חדר משפחתי")) {
    parts.push("לוודא מראש שהחדר מתאים בנוחות לשני הורים ולמתבגר/ת");
  }

  if (priorities.includes("מטבחון")) {
    parts.push("להעדיף דירה או מקום עם מטבחון כדי לאפשר גמישות בארוחות");
  }

  if (priorities.includes("מעלית")) {
    parts.push("לבדוק שיש מעלית, במיוחד במבנים היסטוריים שבהם היא לא תמיד קיימת");
  }

  if (priorities.includes("קרבה למרכז ולמסעדות")) {
    parts.push("להעדיף מיקום שמאפשר להגיע ברגל למסעדות, בתי קפה והמרכז");
  }

  return parts.length > 0
    ? parts.map(d).join(". ") + "."
    : d("כדאי לבחור את מקום הלינה לפי הנוחות החשובה ביותר למשפחה.");
})();
          const teenInterestText = (() => {
      
  const priorities =
  answers.teenPriorities && answers.teenPriorities.length > 0
    ? answers.teenPriorities
    : answers.teenPriority
      ? [answers.teenPriority]
      : [];
      
  const parts: string[] = [];

  if (priorities.some((item) => item.includes("קניות"))) {
    parts.push(
      "קניות ושיטוט עירוני, ולכן כדאי לתת מקום לפירנצה, לוקה וזמן חופשי ברחובות יפים"
    );
  }

  if (
  priorities.some(
    (item) =>
      item.includes("אוכל") ||
      item.includes("גלידה") ||
      item.includes("קינוחים") ||
      item.includes("בישול") ||
      item.includes("טעימות") ||
      item.includes("מקומי")
  )
) {
    parts.push(
  "חוויות אוכל מקומיות כמו גלידה, בתי קפה, טעימות או סדנת בישול"
);
  }

  if (
    priorities.some(
      (item) =>
        item.includes("תמונות") ||
        item.includes("נופים") ||
        item.includes("עיירות") ||
        item.includes("כפרים")
    )
  ) {
    parts.push(
  "עיירות ציוריות ומקומות יפים לצילום כמו סן ג'ימיניאנו, פיינצה ווואל ד'אורצ'ה"
);
  }

  if (parts.length === 0) {
    return d("כדאי לשלב במסלול גם זמן שמתאים למתבגר/ת ולא רק אתרי חובה למבוגרים.");
  }

  return t.teenInterestPrefix + parts.map(d).join(t.teenInterestSeparator) + ".";
})();
const hasSavedAnswers = Object.values(answers).some((value) =>
  Array.isArray(value)
    ? value.length > 0
    : typeof value === "string" && value.trim().length > 0
);
return (
    <main
  dir={language === "he" ? "rtl" : "ltr"}
  className="min-h-screen bg-slate-950 px-6 py-10 text-white"
>
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
        <div className="mb-8 flex flex-wrap gap-4">
          <Link href="/" className="text-sm text-amber-300 hover:text-amber-200">
            {t.backHome}
          </Link>

          <Link
            href="/search"
            className="text-sm text-amber-300 hover:text-amber-200"
          >
            {t.backToQuestions}
          </Link>
        </div>

        <section className="rounded-3xl border border-white/10 bg-white/5 p-8 shadow-2xl">
          <p className="text-sm font-semibold text-amber-300">{t.appName}</p>

          <h1 className="mt-4 text-4xl font-bold">
           {t.resultsTitle}
          </h1>

          <p className="mt-5 max-w-3xl leading-8 text-slate-300">
           {t.resultsIntro}
          </p>
        </section>

        <section className="mt-8 rounded-3xl border border-white/10 bg-slate-900/80 p-6">
          <h2 className="text-2xl font-bold">{t.savedAnswersTitle}</h2>
{!hasSavedAnswers && (
  <div className="mt-5 rounded-2xl border border-amber-300/30 bg-amber-300/10 p-5">
    <p className="leading-8 text-slate-100">
  {t.noSavedAnswersText}
</p>

    <Link
      href="/search"
      className="mt-4 inline-flex rounded-full bg-amber-300 px-5 py-3 font-bold text-slate-950 hover:bg-amber-200"
    >
     {t.backToPlanningQuestions}
    </Link>
  </div>
)}

<div
  className={
    hasSavedAnswers ? "mt-5 grid gap-4 md:grid-cols-2" : "hidden"
  }
>
          
           <AnswerCard label={t.tripLengthLabel} value={displayAnswer(answers.tripLength, language)} />

<AnswerCard
  label={t.tripStartDateLabel}
  value={answers.tripStartDate}
/>

<AnswerCard
  label={t.tripEndDateLabel}
  value={answers.tripEndDate}
/>


<AnswerCard
  label={t.arrivalPointLabel}
  value={answers.arrivalPoint}
/>

<AnswerCard
  label={t.departurePointLabel}
  value={answers.departurePoint}
/>
            <AnswerCard label={t.travelStyleLabel} value={displayAnswer(answers.travelStyle, language)} />

<AnswerCard
  label={t.transportationLabel}
  value={displayAnswer(answers.transportation, language)}
/>

<AnswerCard
  label={t.scenicInterestLabel}
  value={displayAnswer(answers.scenicInterest, language)}
/>

<AnswerCard
  label={t.scenicOptionLabel}
  value={displayAnswer(answers.scenicOption, language)}
/>

<AnswerCard
  label={t.baseAreaLabel}
  value={displayAnswer(answers.baseArea, language)}
/>

<AnswerCard
  label={t.lodgingTypeLabel}
  value={displayAnswer(answers.lodgingType, language)}
/>

<AnswerCard
  label={t.lodgingBudgetLabel}
  value={displayAnswer(answers.lodgingBudget, language)}
/>

<AnswerCard
  label={t.lodgingPrioritiesLabel}
  value={lodgingPrioritiesText}
/>

<AnswerCard
  label={t.roomSetupLabel}
  value={displayAnswer(answers.roomSetup, language)}
/>

<AnswerCard
  label={t.teenPrioritiesLabel}
  value={teenText}
/>
          </div>
        </section>
{hasSavedAnswers && (
  <>
        <section className="mt-8">
          <h2 className="text-3xl font-bold">
  {t.tripLengthDirectionTitle}
</h2>

          <div className="mt-5 grid gap-5 md:grid-cols-3">
            {(
  answers.tripLength === "4–5 ימים"
    ? [translatedTripLengthIdeas[0]]
    : answers.tripLength === "6–7 ימים"
      ? [translatedTripLengthIdeas[1]]
      : answers.tripLength === "8–10 ימים"
        ? [translatedTripLengthIdeas[2]]
        : translatedTripLengthIdeas
).map((item) => (
              <div
                key={item.title}
                className="rounded-3xl border border-white/10 bg-white/5 p-6"
              >
                <h3 className="text-xl font-bold text-amber-200">
                  {item.title}
                </h3>
                <p className="mt-3 leading-7 text-slate-300">{item.text}</p>
              </div>
            ))}
          </div>
        </section>

        <section className="mt-10">
          <h2 className="text-3xl font-bold">
  {t.baseIdeasTitle}
</h2>
<div className="mt-6 rounded-2xl border border-amber-300/30 bg-amber-300/10 p-5">
  <h3 className="font-bold text-amber-200">
  {t.baseAreaImpactTitle}
</h3>

  <p className="mt-2 leading-7 text-slate-200">
    {baseAreaText}
  </p>
</div>
 <div className="mt-4 rounded-2xl border border-white/10 bg-white/5 p-5">
 <h3 className="font-bold text-amber-200">
  {t.lodgingTypeFitTitle}
</h3>

  <p className="mt-2 leading-7 text-slate-300">
    {d(lodgingTypeText)}
  </p>
</div>

<div className="mt-4 rounded-2xl border border-white/10 bg-white/5 p-5">
  <h3 className="font-bold text-amber-200">
    {t.accommodationChecks}
  </h3>

  <p className="mt-2 leading-7 text-slate-300">
    {lodgingPrioritiesAdvice}
  </p>
</div> 
<div className="mt-4 rounded-2xl border border-white/10 bg-white/5 p-5">
  <h3 className="font-bold text-amber-200">
    {t.matchBudget}
  </h3>

  <p className="mt-2 leading-7 text-slate-300">
    {d(lodgingBudgetText)}
  </p>
</div>      
         <div className="mt-4 rounded-2xl border border-white/10 bg-white/5 p-5">
  <h3 className="font-bold">
    <div className="mt-4 rounded-2xl border border-white/10 bg-white/5 p-5">
  <h3 className="font-bold text-amber-200">
    {t.matchRoom}
  </h3>

  <p className="mt-2 leading-7 text-slate-300">
    {d(roomSetupText)}
  </p>
</div>
    {t.paceImpact}
  </h3>

  <p className="mt-2 leading-7 text-slate-300">
    {d(travelStyleText)}
  </p>
</div>
    <div className="mt-4 rounded-2xl border border-white/10 bg-white/5 p-5">
  <h3 className="font-bold">
    {t.matchTeen}
  </h3>

  <p className="mt-2 leading-7 text-slate-300">
    {teenInterestText}
  </p>
</div>     
          <div className="mt-5 grid gap-5 md:grid-cols-2">
            {translatedBaseIdeas.map((item) => (
              <div
                key={item.title}
                className="rounded-3xl border border-white/10 bg-slate-900/80 p-6"
              >
                <p className="text-sm font-semibold text-amber-300">
                  {item.tag}
                </p>
                <h3 className="mt-2 text-2xl font-bold">{item.title}</h3>
                <p className="mt-3 leading-7 text-slate-300">{item.text}</p>
              </div>
            ))}
          </div>
        </section>

        <section className="mt-10">
          <h2 className="text-3xl font-bold">{t.scenicIdeas}</h2>

          <div className="mt-5 grid gap-5 md:grid-cols-3">
            {scenicIdeas.map((item) => (
              <div
                key={d(item.name)}
                className="rounded-3xl border border-white/10 bg-white/5 p-6"
              >
                <h3 dir="rtl" className="text-right text-xl font-bold text-amber-200">
                  {d(item.name)}
                </h3>
                <p className="mt-3 leading-7 text-slate-300">{d(item.text)}</p>
              </div>
            ))}
          </div>
        </section>

        <section className="mt-10 rounded-3xl border border-white/10 bg-slate-900/80 p-6">
          <h2 className="text-3xl font-bold">{t.familyRules}</h2>

          <div className="mt-5 space-y-3">
            {familyRules.map((rule) => (
              <p key={rule} className="leading-7 text-slate-300">
                ✓ {d(rule)}
              </p>
            ))}
          </div>
        </section>

        <section className="mt-10 rounded-3xl border border-amber-300/30 bg-amber-300/10 p-6">
          <h2 className="text-2xl font-bold text-amber-200">
            {t.nextStep}
          </h2>

          <p className="mt-3 leading-8 text-slate-200">
            {t.resultsNextStepText}
          </p>

          <div className="mt-6 flex flex-col gap-3 sm:flex-row">
            <Link
              href="/prompt"
              className="rounded-full bg-amber-300 px-6 py-3 text-center font-bold text-slate-950 hover:bg-amber-200"
            >
              {t.continueToPrompt}
            </Link>
            <Link
  href="/weather"
  className="rounded-full border border-white/20 px-6 py-3 text-center font-semibold text-slate-100 hover:border-amber-300"
>
  {t.weather}
</Link>

            <Link
              href="/search"
              className="rounded-full border border-white/20 px-6 py-3 text-center font-semibold text-slate-100 hover:border-amber-300"
            >
              {t.changeAnswers}
            </Link>
          </div>
        </section>
          </>
)}

      </div>
    </main>
  );
}

function AnswerCard({ label, value }: { label: string; value?: string }) {
  const { language } = useLanguage();
  return (
    <div className="rounded-2xl border border-white/10 bg-white/5 p-4">
      <p className="text-sm font-semibold text-amber-300">{label}</p>
      <p className="mt-2 leading-7 text-slate-100">
        {value || translations[language].notSelected}
      </p>
    </div>
  );
}

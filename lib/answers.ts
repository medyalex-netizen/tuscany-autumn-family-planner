export const STORAGE_KEY = "tuscanyAutumnAnswers";
export const tripLengths = ["4–5 ימים", "6–7 ימים", "8–10 ימים"] as const;

export type Answers = {
  tripLength: string;
  tripStartDate: string;
  tripEndDate: string;
  arrivalPoint: string;
  departurePoint: string;
  travelStyle: string;
  transportation: string;
  scenicInterest: string;
  scenicOption: string;
  baseArea: string;
  lodgingType: string;
  lodgingBudget: string;
  roomSetup: string;
  teenPriority: string;
  lodgingPriorities: string[];
  teenPriorities: string[];
};

export function emptyAnswers(): Answers {
  return {
    tripLength: "",
    tripStartDate: "",
    tripEndDate: "",
    arrivalPoint: "",
    departurePoint: "",
    travelStyle: "",
    transportation: "",
    scenicInterest: "",
    scenicOption: "",
    baseArea: "",
    lodgingType: "",
    lodgingBudget: "",
    roomSetup: "",
    teenPriority: "",
    lodgingPriorities: [], teenPriorities: [],
  };
}

export function daysFromDates(start: string, end: string): number | null {
  const parse = (value: string) => {
    if (!/^\d{4}-\d{2}-\d{2}$/.test(value)) return NaN;
    const time = Date.parse(value + "T00:00:00Z");
    return Number.isFinite(time) && new Date(time).toISOString().slice(0, 10) === value ? time : NaN;
  };
  const days = (parse(end) - parse(start)) / 86400000 + 1;
  return Number.isInteger(days) && days > 0 ? days : null;
}

export function dateWarning(answers: Answers): string {
  if (!answers.tripStartDate || !answers.tripEndDate) return "";
  const days = daysFromDates(answers.tripStartDate, answers.tripEndDate);
  if (days === null) return "בדקו את התאריכים: תאריך הסיום צריך להיות ביום ההתחלה או אחריו.";
  return days < 4 || days > 10 ? "המסלול לדוגמה מיועד ל־4 עד 10 ימים. התאריכים נשמרו, אך נדרשת התאמה אישית למשך הטיול הזה." : "";
}

export function itineraryDays(answers: Answers): number {
  const exact = daysFromDates(answers.tripStartDate, answers.tripEndDate);
  if (exact !== null && exact >= 4 && exact <= 10) return exact;
  return answers.tripLength === tripLengths[0] ? 5 : answers.tripLength === tripLengths[1] ? 7 : 10;
}

export function normalizeAnswers(value: unknown): Answers {
  if (!value || typeof value !== "object" || Array.isArray(value)) throw Error("Invalid answers");
  const source = value as Record<string, unknown>;
  const answers = emptyAnswers();
  for (const key of Object.keys(answers) as (keyof Answers)[]) {
    if (key !== "teenPriorities" && key !== "lodgingPriorities" && typeof source[key] === "string") answers[key] = source[key] as string;
  }
  for (const key of ["teenPriorities", "lodgingPriorities"] as const) {
    answers[key] = Array.isArray(source[key])
      ? [...new Set(source[key].filter((item): item is string => typeof item === "string" && !!item.trim()))]
      : key === "teenPriorities" && answers.teenPriority ? answers.teenPriority.split(", ").filter(Boolean) : [];
  }
  answers.teenPriority = answers.teenPriorities.join(", ");
  const range = answers.tripLength.match(/^(4\s*[-–—]\s*5|6\s*[-–—]\s*7|8\s*[-–—]\s*10)\s*ימים/);
  if (range) answers.tripLength = tripLengths[range[1].startsWith("4") ? 0 : range[1].startsWith("6") ? 1 : 2];
  const days = daysFromDates(answers.tripStartDate, answers.tripEndDate);
  if (days !== null && days >= 4 && days <= 10) answers.tripLength = tripLengths[days <= 5 ? 0 : days <= 7 ? 1 : 2];
  return answers;
}

type AnswerStorage = Pick<Storage, "getItem" | "setItem" | "removeItem">;
export function readAnswers(storage: AnswerStorage) {
  try {
    const raw = storage.getItem(STORAGE_KEY);
    return { answers: raw ? normalizeAnswers(JSON.parse(raw)) : emptyAnswers(), error: false };
  } catch { return { answers: emptyAnswers(), error: true }; }
}
export function writeAnswers(storage: AnswerStorage, answers: Answers): boolean {
  try { storage.setItem(STORAGE_KEY, JSON.stringify(normalizeAnswers(answers))); return true; }
  catch { return false; }
}
export function removeAnswers(storage: AnswerStorage): boolean {
  try { storage.removeItem(STORAGE_KEY); return true; } catch { return false; }
}

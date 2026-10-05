export const weatherCities = [
  { name: "Florence", label: "פירנצה" },
  { name: "Siena", label: "סיינה" },
  { name: "San Gimignano", label: "סן ג'ימיניאנו" },
  { name: "Pienza", label: "פיינצה" },
  { name: "Montepulciano", label: "מונטפולצ'יאנו" },
  { name: "Lucca", label: "לוקה" },
  { name: "Pisa", label: "פיזה" },
] as const;

export function cityForBase(base: string): string {
  if (base === "סיינה") return "Siena";
  if (base.includes("ואל ד")) return "Pienza";
  if (base.includes("קיאנטי")) return "San Gimignano";
  if (base.includes("לוקה")) return "Lucca";
  return "Florence";
}

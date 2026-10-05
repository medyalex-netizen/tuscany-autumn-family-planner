"use client";

import Link from "next/link";
import { useEffect, useState } from "react";



import { useAnswers } from "@/lib/use-answers";
import { cityForBase, weatherCities } from "@/lib/weather";

type DailyForecast = {
  date: string;
  max: number;
  min: number;
  rainChance: number | null;
};

const ui = {
  he: {
    appName: "Tuscany Autumn Family Planner",
    title: "בדיקת מזג אוויר וטמפרטורות",
    back: "חזרה למסלול",
    badge: "תחזית חיה",
    weatherFor: "מזג אוויר ב-",
    description:
      "הדף הזה מציג טמפרטורה נוכחית ותחזית לימים הקרובים. אם הטיול הוא בתאריך רחוק, צריך לבדוק שוב קרוב יותר לנסיעה.",
    status: "מצב",
    locationFound: "מיקום התחזית שנמצא",
    currentTemp: "טמפרטורה עכשיו",
    feelsLike: "מרגיש כמו",
    travelDates: "תאריכי הטיול",
    tripLength: "משך הטיול",
    walking: "הליכה",
    maps: "מפות",
    forecast7: "תחזית ל-7 ימים",
    max: "מקסימום",
    min: "מינימום",
    rainChance: "סיכוי לגשם",
    hotTitle: "אם חם מאוד",
    rainTitle: "אם יש גשם",
    checksTitle: "בדיקות לפני סגירת יום הטיול",
    weatherCheck: "מזג אוויר",
    tourCheck: "סיור הליכה",
    mapsCheck: "מפות",
    taxiCheck: "מוניות ומנוחה",
    backItinerary: "חזרה למסלול הטיול",
    backHome: "חזרה לדף הבית",
    notSelected: "לא נבחר",
    loadingLocation: "מחפש מיקום לתחזית...",
    loadingTemps: "טוען טמפרטורות...",
    loaded: "התחזית נטענה בהצלחה.",
    noLocation: "לא נמצא מיקום לתחזית. נסו יעד אחר.",
    failed: "לא הצלחנו לטעון תחזית. בדקו חיבור אינטרנט או נסו שוב.",
    hotTips: [
  "להתחיל את היום מוקדם יותר ולתכנן את הפעילויות החיצוניות לשעות הנעימות.",
  "להעדיף רחובות מוצלים, שווקים מקורים, מוזיאון קצר או בית קפה בשעות החמות.",
  "להשאיר זמן למנוחה, גלידה או ארוחה רגועה באמצע היום.",
  "להצטייד במים, כובעים וקרם הגנה.",
  "לקצר יום של כפרים או תצפיות אם החום מכביד על המשפחה.",
  "להעביר פעילות פתוחה לשעה מאוחרת יותר ולשמור על תוכנית גמישה.",
],
    rainTips: [
  "להעדיף מוזיאון קצר, שוק מקורה, בית קפה או פעילות אוכל בתוך מבנה.",
  "להשאיר יותר זמן למעברים ולהימנע מתכנון צפוף.",
  "להחליף יום של תצפיות או כפרים ביום עירוני וגמיש יותר.",
  "להצטייד במטריות, מעילים קלים ונעליים שאינן מחליקות.",
  "להימנע מנהיגה ארוכה בכבישים כפריים אם הראות או תנאי הדרך אינם טובים.",
  "לבדוק שוב את התחזית בבוקר ולשנות את סדר הימים לפי הצורך.",
],
    checkTexts: {
  weather: "לבדוק תחזית עדכנית, סיכוי לגשם, עומס חום ורוח לפני כל יום.",
  tour: "לבדוק שעות פתיחה, הזמנות, משך הפעילות והתאמה למשפחה לפני שיוצאים.",
  maps: "לשמור מראש במפות את המלון, החניה, תחנות הרכבת, המסעדות והאתרים המתוכננים בכל יום.",
  taxi: "אם יש חום, גשם או עייפות, לקצר את התוכנית, לבחור פעילות קרובה ולהשאיר זמן למנוחה.",
},
  },
  en: {
    appName: "Tuscany Autumn Family Planner",
    title: "Weather and temperature check",
    back: "Back to itinerary",
    badge: "Live forecast",
     weatherFor: "Weather for ",
    description:
      "This page shows the current temperature and the forecast for the next few days. If the trip is far in the future, check again closer to travel.",
    status: "Status",
    locationFound: "Forecast location found",
    currentTemp: "Temperature now",
    feelsLike: "Feels like",
    travelDates: "Travel dates",
    tripLength: "Trip length",
    walking: "Walking",
    maps: "Maps",
    forecast7: "7-day forecast",
    max: "Max",
    min: "Min",
    rainChance: "Rain chance",
    hotTitle: "If it is very hot",
    rainTitle: "If there is rain",
    checksTitle: "Checks before finalizing each day",
    weatherCheck: "Weather",
    tourCheck: "Walking tour",
    mapsCheck: "Maps",
    taxiCheck: "Taxis and rest",
    backItinerary: "Back to itinerary",
    backHome: "Back to home",
    notSelected: "Not selected",
    loadingLocation: "Finding forecast location...",
    loadingTemps: "Loading temperatures...",
    loaded: "Forecast loaded successfully.",
    noLocation: "No forecast location found. Try another destination.",
    failed: "Could not load forecast. Check internet connection or try again.",
    hotTips: [
      "Start the day earlier.",
      "Avoid long walks after lunch.",
      "Add hotel rest during the hottest hours.",
      "Use more taxis.",
      "Choose churches, museums, cafes, and shaded places.",
      "Keep dinner close to the hotel.",
    ],
    rainTips: [
      "Be careful with slippery stones and uneven sidewalks.",
      "Use taxis instead of long walks.",
      "Choose museums, churches, cafes, or covered markets.",
      "Shorten walking routes.",
      "Add extra travel time between places.",
      "Do not commit to a long walking tour in heavy rain.",
    ],
    checkTexts: {
  weather: "Check the latest forecast, rain chance, heat, and wind before each day.",
  tour: "Check opening hours, reservations, activity duration, and family suitability before leaving.",
  maps: "Save the hotel, parking, train stations, restaurants, and planned attractions in maps before each day.",
  taxi: "If there is heat, rain, or tiredness, shorten the plan, choose a nearby activity, and leave time to rest.",
},
  },
  ro: {
    appName: "Tuscany Autumn Family Planner",
    title: "Verificare vreme si temperaturi",
    back: "Inapoi la itinerar",
    badge: "Prognoza live",
    weatherFor: "Vreme pentru ",
    description:
      "Aceasta pagina arata temperatura actuala si prognoza live doar pentru urmatoarele 7 zile. Nu este o prognoza pentru date indepartate precum octombrie. Daca excursia este departe in viitor, verificati din nou mai aproape de calatorie.",
    status: "Status",
    locationFound: "Locatia gasita pentru prognoza",
    currentTemp: "Temperatura acum",
    feelsLike: "Se simte ca",
    travelDates: "Datele calatoriei - nu datele prognozei",
    tripLength: "Durata calatoriei",
    walking: "Mers",
    maps: "Harti",
    forecast7: "Prognoza live pentru urmatoarele 7 zile",
    max: "Maxim",
    min: "Minim",
    rainChance: "Sansa de ploaie",
    hotTitle: "Daca este foarte cald",
    rainTitle: "Daca ploua",
    checksTitle: "Verificari inainte de fiecare zi",
    weatherCheck: "Vreme",
    tourCheck: "Tur pe jos",
    mapsCheck: "Harti",
    taxiCheck: "Taxiuri si odihna",
    backItinerary: "Inapoi la itinerar",
    backHome: "Inapoi acasa",
    notSelected: "Nu a fost ales",
    loadingLocation: "Caut locatia pentru prognoza...",
    loadingTemps: "Incarc temperaturile...",
    loaded: "Prognoza a fost incarcata.",
    noLocation: "Nu am gasit locatia pentru prognoza. Incercati alta destinatie.",
    failed: "Nu am putut incarca prognoza. Verificati internetul sau incercati din nou.",
    hotTips: [
      "Incepeti ziua mai devreme.",
      "Evitati mersul lung dupa pranz.",
      "Adaugati odihna la hotel in orele cele mai calde.",
      "Folositi mai multe taxiuri.",
      "Alegeti biserici, muzee, cafenele si locuri cu umbra.",
      "Pastrati cina aproape de hotel.",
    ],
    rainTips: [
      "Aveti grija la pietre alunecoase si trotuare denivelate.",
      "Folositi taxiuri in loc de mers lung.",
      "Alegeti muzee, biserici, cafenele sau piete acoperite.",
      "Scurtati traseele pe jos.",
      "Adaugati timp suplimentar intre locuri.",
      "Nu alegeti un tur lung pe jos in ploaie puternica.",
    ],
    checkTexts: {
  weather: "Verificati prognoza actualizata, sansa de ploaie, caldura si vantul inainte de fiecare zi.",
  tour: "Verificati programul, rezervarile, durata activitatii si daca este potrivita pentru familie.",
  maps: "Salvati din timp in harti hotelul, parcarea, garile, restaurantele si obiectivele planificate pentru fiecare zi.",
  taxi: "Daca este foarte cald, ploua sau familia este obosita, scurtati programul, alegeti o activitate apropiata si lasati timp pentru odihna.",
},
  },
};



export default function WeatherPage() {
  const { answers, ready } = useAnswers();
  const [manualCity, setManualCity] = useState("");
  const destination = manualCity || cityForBase(answers.baseArea);
  const cityLabel = weatherCities.find(city => city.name === destination)?.label || destination;
  const travelDates = [answers.tripStartDate, answers.tripEndDate].filter(Boolean).join(" עד ");

  const [currentTemp, setCurrentTemp] = useState<number | null>(null);
  const [feelsLike, setFeelsLike] = useState<number | null>(null);
  const [dailyForecast, setDailyForecast] = useState<DailyForecast[]>([]);
  const [weatherStatus, setWeatherStatus] = useState("loadingLocation");
  const [matchedLocation, setMatchedLocation] = useState("");

  
  useEffect(() => {
    if (!ready) return;
    const controller = new AbortController();
    const options = { signal: controller.signal };
    async function loadWeather() {
      try {

        setWeatherStatus("loadingLocation");
        setCurrentTemp(null);
        setFeelsLike(null);
        setDailyForecast([]);
        setMatchedLocation("");

        const geoResponse = await fetch(
          `https://geocoding-api.open-meteo.com/v1/search?name=${encodeURIComponent(
            destination
          )}&count=10&language=en&format=json`, options
        );
        if (!geoResponse.ok) throw Error("Location request failed");

        const geoData = await geoResponse.json();

        if (!Array.isArray(geoData.results) || !geoData.results.some((place: { country_code: string }) => place.country_code === "IT")) {
          setWeatherStatus("noLocation");
          return;
        }

        const place = geoData.results.find((place: { country_code: string }) => place.country_code === "IT");
        if (controller.signal.aborted) return;

        setMatchedLocation(
          `${place.name}${place.country ? ", " + place.country : ""}`
        );

        setWeatherStatus("loadingTemps");

        const forecastResponse = await fetch(
          `https://api.open-meteo.com/v1/forecast?latitude=${place.latitude}&longitude=${place.longitude}&current=temperature_2m,apparent_temperature&daily=temperature_2m_max,temperature_2m_min,precipitation_probability_max&forecast_days=7&timezone=auto`, options
        );
        if (!forecastResponse.ok) throw Error("Forecast request failed");

        const forecastData = await forecastResponse.json();
        if (controller.signal.aborted) return;
        if (!Array.isArray(forecastData.daily?.time)) throw Error("Invalid forecast");

        setCurrentTemp(forecastData.current?.temperature_2m ?? null);
        setFeelsLike(forecastData.current?.apparent_temperature ?? null);

        const days: DailyForecast[] = forecastData.daily.time.map(
          (date: string, index: number) => ({
            date,
            max: forecastData.daily.temperature_2m_max[index],
            min: forecastData.daily.temperature_2m_min[index],
            rainChance:
              forecastData.daily.precipitation_probability_max?.[index] ?? null,
          })
        );

        setDailyForecast(days);
        setWeatherStatus("loaded");
      } catch {
        if (controller.signal.aborted) return;
        setWeatherStatus("failed");
      }
    }

    loadWeather();
    return () => controller.abort();
  }, [destination, ready]);

  
    
  const t = ui.he;
const isHebrew = true;
  const statusText =
    weatherStatus === "loadingLocation"
      ? t.loadingLocation
      : weatherStatus === "loadingTemps"
      ? t.loadingTemps
      : weatherStatus === "loaded"
      ? t.loaded
      : weatherStatus === "noLocation"
      ? t.noLocation
      : t.failed;

  return (
    <main
      dir="rtl"
lang="he"
className="min-h-screen bg-slate-950 px-6 py-10 text-right text-white"
    >
      <div className="mx-auto max-w-6xl">
        <header className="mb-8 flex flex-col gap-4 sm:flex-row-reverse sm:items-center sm:justify-between">
          <div>
            <p className="text-lg font-bold text-blue-700">
              {t.appName}
            </p>
            <h1 className="text-4xl font-bold">{t.title}</h1>
          </div>

          <Link
            href="/itinerary"
            className="rounded-2xl border border-white/10 bg-slate-900/80 px-5 py-3 text-center text-lg font-semibold text-amber-300 hover:border-amber-300"
          >
            {t.back}
          </Link>
        </header>

        <section className="rounded-3xl border border-white/10 bg-slate-900/80 p-8">
          <p className="mb-4 inline-block rounded-full bg-blue-50 px-4 py-2 text-lg font-semibold text-blue-700">
            {t.badge}
          </p>

          <h2 className="text-4xl font-bold">
            מזג אוויר ב{cityLabel}
          </h2>

          <label className="mt-5 block text-slate-200">
            יעד לבדיקת התחזית
            <select value={destination} onChange={event => setManualCity(event.target.value)} disabled={!ready}
              className="mr-3 rounded-xl border border-white/20 bg-slate-950 p-3 text-white">
              {weatherCities.map(city => <option key={city.name} value={city.name}>{city.label}</option>)}
            </select>
          </label>
          <p className="mt-3 text-slate-300">היעד הראשוני נבחר לפי אזור הלינה. באזור כפרי זו תחזית לעיר סמוכה; באזור משולב התחילו בפירנצה ובחרו את היעד הרצוי. התחזית היא לשבוע הקרוב, ולא לתאריכי טיול רחוקים.</p>

          <p className="mt-4 max-w-3xl text-xl leading-8 text-slate-300">
            {t.description}
          </p>

          <p className="mt-4 rounded-2xl border border-white/10 bg-slate-900/80 p-4 text-lg font-semibold text-slate-100">
            {t.status}: {statusText}
          </p>

          {matchedLocation && (
            <p className="mt-3 text-lg text-slate-300">
              {t.locationFound}: {matchedLocation}
            </p>
          )}

          <div className="mt-8 grid gap-5 md:grid-cols-3">
            <div className="rounded-2xl border border-white/10 bg-slate-900/80 p-5">
              <p className="text-sm font-semibold text-slate-300">{t.currentTemp}</p>
              <p className="mt-2 text-4xl font-bold">
                {currentTemp === null ? "..." : `${Math.round(currentTemp)}°C`}
              </p>
            </div>

            <div className="rounded-2xl border border-white/10 bg-slate-900/80 p-5">
              <p className="text-sm font-semibold text-slate-300">{t.feelsLike}</p>
              <p className="mt-2 text-4xl font-bold">
                {feelsLike === null ? "..." : `${Math.round(feelsLike)}°C`}
              </p>
            </div>

            <div className="rounded-2xl border border-white/10 bg-slate-900/80 p-5">
              <p className="text-sm font-semibold text-slate-300">{t.travelDates}</p>
              <p className="mt-2 text-xl font-bold">{travelDates || t.notSelected}</p>
            </div>

            <div className="rounded-2xl border border-white/10 bg-slate-900/80 p-5">
              <p className="text-sm font-semibold text-slate-300">{t.tripLength}</p>
              <p className="mt-2 text-xl font-bold">  {answers.tripLength || t.notSelected}</p>
            </div>

            
          </div>
        </section>

        <section className="mt-8 rounded-3xl border border-white/10 bg-slate-900/80 p-6">
          <h2 className="text-3xl font-bold">{t.forecast7}</h2>

          <div className="mt-5 grid gap-4 md:grid-cols-2 lg:grid-cols-3">
            {dailyForecast.map((day) => (
              <div key={day.date} className="rounded-2xl border border-white/10 bg-slate-900/80 p-5">
                <p className="text-lg font-bold">{day.date}</p>
                <p className="mt-2 text-lg">{t.max}: {Math.round(day.max)}°C</p>
                <p className="text-lg">{t.min}: {Math.round(day.min)}°C</p>
                <p className="text-lg">{t.rainChance}: {day.rainChance === null ? "לא זמין" : `${day.rainChance}%`}</p>
              </div>
            ))}
          </div>
        </section>

        <section className="mt-8 grid gap-6 lg:grid-cols-2">
          <div className="rounded-3xl border border-white/10 bg-slate-900/80 p-6">
            <h2 className="text-3xl font-bold">{t.hotTitle}</h2>

            <ul className="mt-5 space-y-3 text-lg leading-8 text-slate-300">
              {t.hotTips.map((tip) => (
                <li key={tip}>{tip}</li>
              ))}
            </ul>
          </div>

          <div className="rounded-3xl border border-white/10 bg-slate-900/80 p-6">
            <h2 className="text-3xl font-bold">{t.rainTitle}</h2>

            <ul className="mt-5 space-y-3 text-lg leading-8 text-slate-300">
              {t.rainTips.map((tip) => (
                <li key={tip}>{tip}</li>
              ))}
            </ul>
          </div>
        </section>

        <section className="mt-8 rounded-3xl border border-white/10 bg-slate-900/80 p-6">
          <h2 className="text-3xl font-bold">{t.checksTitle}</h2>

          <div className="mt-5 grid gap-4 md:grid-cols-2">
            <div className="rounded-2xl border border-white/10 bg-slate-900/80 p-5">
              <h3 className="text-xl font-bold">{t.weatherCheck}</h3>
              <p className="mt-2 text-lg leading-7 text-slate-300">
                {t.checkTexts.weather}
              </p>
            </div>

            <div className="rounded-2xl border border-white/10 bg-slate-900/80 p-5">
              <h3 className="text-xl font-bold">{t.tourCheck}</h3>
              <p className="mt-2 text-lg leading-7 text-slate-300">
                {t.checkTexts.tour} 
              </p>
            </div>

            <div className="rounded-2xl border border-white/10 bg-slate-900/80 p-5">
              <h3 className="text-xl font-bold">{t.mapsCheck}</h3>
              <p className="mt-2 text-lg leading-7 text-slate-300">
                {t.checkTexts.maps}
              </p>
            </div>

            <div className="rounded-2xl border border-white/10 bg-slate-900/80 p-5">
              <h3 className="text-xl font-bold">{t.taxiCheck}</h3>
              <p className="mt-2 text-lg leading-7 text-slate-300">
                {t.checkTexts.taxi}
              </p>
            </div>
          </div>
        </section>

        <div className={`mt-8 flex flex-col gap-4 ${isHebrew ? "sm:flex-row-reverse" : "sm:flex-row"}`}>
          <Link
            href="/itinerary"
            className="rounded-2xl bg-blue-700 px-8 py-4 text-center text-xl font-semibold text-white hover:bg-blue-800"
          >
            {t.backItinerary}
          </Link>

          <Link
            href="/"
            className="rounded-2xl border border-white/10 bg-amber-300 px-8 py-4 text-center text-xl font-semibold text-slate-950 hover:bg-amber-200"
          >
            {t.backHome}
          </Link>
        </div>
      </div>
    </main>
  );
}



import { translations, type Language } from "./translations";

const EN: Record<string, string> = {
  "עדיין לא נבחר": "Not selected yet",
  "קניות": "Shopping",
  "שוקולד": "Chocolate",
  "עדיין לא החלטנו": "Not decided yet",
  "עדיין לא יודעים": "Not sure yet",
  "עדיין פתוחים להצעות": "Still open to suggestions",

  "4–5 ימים": "4–5 days",
  "6–7 ימים": "6–7 days",
  "8–10 ימים": "8–10 days",

  "רגוע — מעט מקומות והרבה זמן חופשי": "Relaxed — fewer places and plenty of free time",
  "מאוזן — שילוב של טיול ומנוחה": "Balanced — a mix of sightseeing and rest",
  "פעיל — להספיק יותר בכל יום": "Active — fit more into each day",
  "קצב שונה בימים שונים": "Different pace on different days",

  "רכב שכור לכל הטיול": "Rental car for the whole trip",
  "רכב שכור רק לחלק הכפרי": "Rental car only for the countryside portion",
  "רכבות ותחבורה ציבורית בלבד": "Trains and public transport only",

  "מאוד חשוב — רוצים הרבה נופים וכפרים": "Very important — we want lots of scenery and villages",
  "חשוב, אבל בשילוב עם ערים ואטרקציות": "Important, but combined with cities and attractions",
  "פחות חשוב — מעדיפים ערים, קניות ואוכל": "Less important — we prefer cities, shopping and food",

  "יום של עיירות וכפרים ציוריים": "A day of picturesque towns and villages",
  "נסיעה נופית עם עצירות קצרות": "Scenic drive with short stops",
  "אזורי כרמים ואוכל מקומי": "Vineyards and local food",
  "טבע פתוח ותצפיות": "Open countryside and viewpoints",

  "פירנצה": "Florence",
  "סיינה": "Siena",
  "קיאנטי / סן ג'ימיניאנו": "Chianti / San Gimignano",
  "ואל ד'אורצ'ה / פיינצה / מונטפולצ'יאנו": "Val d'Orcia / Pienza / Montepulciano",
  "לוקה / פיזה": "Lucca / Pisa",
  "שילוב של שני אזורים": "Combination of two areas",

  "מלון במרכז עיר": "Hotel in a city center",
  "דירה משפחתית": "Family apartment",
  "אגריטוריסמו או לינה כפרית": "Agriturismo or countryside lodging",
  "שילוב של עיר וכפר": "Combination of city and countryside",

  "עד 150 אירו ללילה": "Up to €150 per night",
  "150–250 אירו ללילה": "€150–250 per night",
  "250–350 אירו ללילה": "€250–350 per night",
  "מעל 350 אירו ללילה": "Over €350 per night",
  "גמישים לפי המקום": "Flexible depending on the place",

  "חדר אחד עם מיטה זוגית ומיטה נפרדת למתבגר/ת": "One room with a double bed and a separate bed for the teenager",
  "חדר משפחתי לשלושה": "Family room for three",
  "שני חדרים נפרדים": "Two separate rooms",
  "דירה עם חדר שינה וספה נפתחת": "Apartment with a bedroom and sofa bed",

  "חניה נוחה": "Convenient parking",
  "ארוחת בוקר": "Breakfast",
  "חדר משפחתי": "Family room",
  "מטבחון": "Kitchenette",
  "מעלית": "Elevator",
  "קרבה למרכז ולמסעדות": "Close to the center and restaurants",

  "קניות ורחובות יפים": "Shopping and beautiful streets",
  "גלידה, קינוחים ובתי קפה": "Gelato, desserts and cafés",
  "מקומות יפים לתמונות": "Beautiful places for photos",
  "עיירות וכפרים ציוריים": "Picturesque towns and villages",
  "טבע, תצפיות ונסיעות נופיות": "Nature, viewpoints and scenic drives",
  "סדנת בישול או פעילות אוכל": "Cooking workshop or food activity",
  "אטרקציות קלילות ולא מוזיאונים כבדים": "Light attractions rather than heavy museum days",
  "זמן חופשי לשיטוט, קניות ומנוחה": "Free time for wandering, shopping and rest",

  "המסלול יכול לכלול יותר אזורים כפריים, עיירות קטנות ונסיעות נופיות. חשוב לבדוק חניה, אזורי ZTL והחזרת הרכב.":
    "The itinerary can include more countryside, small towns and scenic drives. Check parking, ZTL restrictions and car return arrangements.",

  "מומלץ לשהות בפירנצה ללא רכב, ולשכור רכב רק ביציאה לקיאנטי, סיינה ווואל ד'אורצ'ה.":
    "It is best to stay in Florence without a car and rent one only when leaving for Chianti, Siena and Val d'Orcia.",

  "לטיול ללא רכב מומלץ לבחור בעיקר מקומות שקל להגיע אליהם ברכבת או באוטובוס, כמו פירנצה, סיינה, לוקה ופיזה.":
    "For a trip without a car, focus mainly on places that are easy to reach by train or bus, such as Florence, Siena, Lucca and Pisa.",

  "עדיין לא נבחר אופן התניידות. הבחירה תשפיע מאוד על אזורי הלינה והמסלול.":
    "Transportation has not been selected yet. This choice will strongly affect the accommodation areas and itinerary.",

  "אפשר לשלב את פירנצה, סיינה, קיאנטי, ואל ד'אורצ'ה, לוקה ופיזה ברצף אחד, אך כדאי להימנע מנהיגה בתוך המרכז ההיסטורי של פירנצה ולבדוק אזורי ZTL וחניה מראש.":
    "Florence, Siena, Chianti, Val d'Orcia, Lucca and Pisa can be combined in one route, but avoid driving inside Florence's historic center and check ZTL restrictions and parking in advance.",

  "מומלץ להתחיל בפירנצה ללא רכב, לאסוף רכב רק ביום היציאה לקיאנטי ולסיינה, ולהחזיר אותו לפני החזרה לעיר גדולה או לשדה התעופה.":
    "Start in Florence without a car, collect the car only when leaving for Chianti and Siena, and return it before going back to a major city or the airport.",

  "מומלץ לבנות מסלול עירוני יותר: פירנצה, סיינה, לוקה ופיזה. כדאי לצמצם את ואל ד'אורצ'ה והכפרים המרוחקים, או להגיע אליהם בטיול יום מאורגן.":
    "Build a more city-oriented itinerary around Florence, Siena, Lucca and Pisa. Reduce time in Val d'Orcia and remote villages, or visit them on an organized day trip.",

  "לאחר בחירת אופן ההתניידות, האתר יוכל להמליץ על סדר נכון יותר של הימים והאזורים.":
    "After choosing transportation, the site can suggest a better order for the days and regions.",

  "להשאיר זמן חופשי, לצמצם עצירות ולא לנסות להספיק יותר מדי באותו יום.":
    "Leave free time, reduce the number of stops and do not try to fit too much into one day.",

  "לשלב פעילות מרכזית אחת או שתיים עם הפסקות, ארוחה רגועה וזמן חופשי.":
    "Combine one or two main activities with breaks, a relaxed meal and free time.",

  "אפשר להוסיף עצירה קצרה או פעילות נוספת, כל עוד זמני הנסיעה והעייפות מאפשרים זאת.":
    "You can add a short stop or another activity if travel times and energy levels allow.",

  "כדאי לשלב ימים פעילים יותר לצד ימים רגועים, במיוחד אחרי נסיעות ארוכות או החלפת מקום לינה.":
    "Mix more active days with relaxed ones, especially after long drives or changing accommodation.",

  "המשפחה מעדיפה יותר נופים, כפרים ונסיעות ציוריות. כדאי לתת עדיפות לוואל ד'אורצ'ה, קיאנטי ולעיירות קטנות.":
    "The family prefers more scenery, villages and scenic drives. Give priority to Val d'Orcia, Chianti and smaller towns.",

  "המשפחה מעדיפה יותר זמן עירוני, קניות, אוכל ושיטוט. כדאי לא להעמיס יותר מדי ימי כפר ונסיעות ארוכות.":
    "The family prefers more city time, shopping, food and wandering. Avoid too many countryside days and long drives.",

  "כדאי לשמור על איזון בין ערים, עיירות, נופים וזמן חופשי.":
    "Keep a balance between cities, towns, scenery and free time.",

  "כדאי לשלב יום שממוקד בעיירות וכפרים ציוריים, עם זמן להליכה רגועה, צילום ובתי קפה.":
    "Include a day focused on picturesque towns and villages, with time for relaxed walking, photos and cafés.",

  "כדאי לתכנן מסלול נסיעה נופי עם כמה עצירות קצרות ומרווחות, בלי להעמיס יותר מדי יעדים באותו יום.":
    "Plan a scenic drive with a few well-spaced short stops without adding too many destinations in one day.",

  "כדאי לשלב אזור כרמים, טעימות או ארוחה מקומית שמתאימה למשפחה, ולבדוק מראש שעות פתיחה והזמנות.":
    "Include a vineyard area, tasting or local meal suitable for the family, and check opening hours and reservations in advance.",

  "כדאי לשלב טבע פתוח, תצפיות ומסלולים קצרים שמתאימים גם למתבגר/ת.":
    "Include open countryside, viewpoints and short walks suitable for the teenager as well.",

  "כדאי להשאיר את היום הנופי גמיש ולבחור לפי מזג האוויר והמסלול.":
    "Keep the scenic day flexible and choose according to the weather and route.",

  "מומלץ לשמור את פירנצה כבסיס מרכזי לכמה לילות ולצאת ממנה לטיולי יום, כדי לצמצם החלפות מלון.":
    "Use Florence as a main base for several nights and take day trips from there to reduce hotel changes.",

  "מומלץ להתמקם בסיינה או בסביבתה כדי לקצר נסיעות לקיאנטי, סן ג'ימיניאנו ווואל ד'אורצ'ה.":
    "Stay in Siena or nearby to shorten travel to Chianti, San Gimignano and Val d'Orcia.",

  "מומלץ לבחור לינה כפרית באזור קיאנטי או ליד סן ג'ימיניאנו, במיוחד אם יש רכב. חשוב לבדוק חניה, דרך גישה ומרחק ממסעדות.":
    "Choose countryside lodging in Chianti or near San Gimignano, especially if you have a car. Check parking, access roads and distance from restaurants.",

  "מומלץ לבחור בסיס באזור ואל ד'אורצ'ה כדי ליהנות מהנופים, מפיינצה וממונטפולצ'יאנו בלי נסיעות ארוכות מדי בכל יום.":
    "Choose a base in Val d'Orcia to enjoy the scenery, Pienza and Montepulciano without overly long daily drives.",

  "מומלץ לבחור לינה בלוקה או בפיזה אם רוצים להתמקד בצפון־מערב טוסקנה, עם גישה נוחה ברכבת ובטיולי יום קצרים.":
    "Choose accommodation in Lucca or Pisa if focusing on northwestern Tuscany, with convenient train access and short day trips.",

  "מומלץ לחלק את הלינה בין פירנצה לבין אזור סיינה או ואל ד'אורצ'ה, כדי לצמצם נסיעות ארוכות.":
    "Split accommodation between Florence and the Siena or Val d'Orcia area to reduce long drives.",

  "מומלץ לבחור את אזורי הלינה לפי מספר הימים ואופן ההתניידות, ולהימנע מהחלפות מלון מיותרות.":
    "Choose accommodation areas according to trip length and transportation, and avoid unnecessary hotel changes.",

  "מומלץ לבחור מלון במיקום מרכזי שמאפשר להגיע ברגל למסעדות, קניות ואתרים, ולצמצם שימוש ברכב בתוך העיר.":
    "Choose a centrally located hotel that allows walking to restaurants, shopping and sights, reducing the need for a car in the city.",

  "מומלץ לבחור דירה משפחתית עם מספיק מרחב לשלושה, מטבחון וגישה נוחה למרכז או לתחבורה ציבורית.":
    "Choose a family apartment with enough space for three, a kitchenette and convenient access to the center or public transport.",

  "מומלץ לשלב אגריטוריסמו או לינה כפרית בחלק הכפרי של הטיול, ולבדוק מראש חניה, דרך גישה ומרחק ממסעדות.":
    "Consider an agriturismo or countryside stay for the rural part of the trip, and check parking, access roads and distance from restaurants.",

  "מומלץ לשלב לינה מרכזית בעיר עם כמה לילות באזור כפרי, כדי לקבל גם נוחות עירונית וגם חוויית טוסקנה רגועה.":
    "Combine central city accommodation with a few nights in the countryside for both urban convenience and a relaxed Tuscan experience.",

  "אם עדיין לא החלטתם על סוג הלינה, כדאי לבחור אותו לפי אופן ההתניידות, מספר הלילות בכל אזור ורמת הנוחות הרצויה.":
    "If you have not chosen an accommodation type yet, decide according to transportation, the number of nights in each area and the desired comfort level.",

  "כדי לשמור על תקציב של עד 150 אירו ללילה, כדאי להעדיף דירות, מלונות פשוטים יותר או לינה מעט מחוץ למרכז, ולבדוק היטב חניה ומה כלול במחיר.":
    "For a budget of up to €150 per night, consider apartments, simpler hotels or accommodation slightly outside the center, and check parking and what is included.",

  "תקציב של 150–250 אירו ללילה מתאים לרוב למסלול גמיש בין דירה משפחתית, מלון נוח או אגריטוריסמו, בהתאם לאזור ולעונה.":
    "A budget of €150–250 per night usually allows flexibility between a family apartment, comfortable hotel or agriturismo depending on location and season.",

  "בתקציב של 250–350 אירו ללילה אפשר להעדיף מיקום טוב יותר, חדר משפחתי מרווח יותר או אגריטוריסמו איכותי עם יותר שירותים.":
    "With a budget of €250–350 per night, you can prioritize a better location, a larger family room or a higher-quality agriturismo with more services.",

  "בתקציב של מעל 350 אירו ללילה אפשר לתת עדיפות גבוהה למיקום, נוחות, חדר משפחתי מרווח ושירותים נוספים.":
    "With a budget above €350 per night, prioritize location, comfort, a spacious family room and additional services.",

  "אם התקציב גמיש, כדאי להשוות בכל אזור בין המחיר לבין המיקום, החניה, גודל החדר והשירותים שמקבלים בפועל.":
    "If the budget is flexible, compare price with location, parking, room size and the services actually included.",

  "אם תקציב הלינה עדיין לא הוחלט, כדאי לקבוע טווח מחיר ללילה לפני שמתחילים להזמין מקומות לינה.":
    "If the accommodation budget is not decided yet, set a nightly price range before booking.",

  "מומלץ לוודא שבכל מקום לינה החדר כולל מיטה זוגית ומיטה נפרדת אמיתית ונוחה למתבגר/ת, ולא רק מיטה מתקפלת קטנה.":
    "Make sure each accommodation has a double bed and a real, comfortable separate bed for the teenager, not just a small folding bed.",

  "מומלץ לבחור חדר משפחתי שמיועד בפועל לשלושה אורחים, עם מספיק מקום למזוודות ואחסון.":
    "Choose a family room genuinely designed for three guests, with enough luggage and storage space.",

  "אם בוחרים שני חדרים נפרדים, כדאי לבקש מראש חדרים סמוכים או מחוברים ולוודא שהסידור מתאים למשפחה.":
    "If choosing two separate rooms, request adjacent or connecting rooms and confirm the arrangement suits the family.",

  "בדירה עם חדר שינה וספה נפתחת, כדאי לבדוק שהספה מתאימה לשינה נוחה למתבגר/ת ושיש מספיק מרחב ופרטיות.":
    "In an apartment with a bedroom and sofa bed, check that the sofa is comfortable for the teenager and that there is enough space and privacy.",

  "אם אתם גמישים בסידור החדר, כדאי להשוות בכל מקום בין סוג המיטה הנוספת, גודל החדר, הפרטיות והמחיר.":
    "If the room arrangement is flexible, compare the extra bed type, room size, privacy and price.",

  "אם סידור החדר עדיין לא הוחלט, כדאי להגדיר מראש מה נחשב סידור שינה נוח לשלושת בני המשפחה.":
    "If the room arrangement is not decided yet, define what counts as comfortable sleeping for all three family members.",

  "כדאי לבחור את מקום הלינה לפי הדברים שהכי חשובים לנוחות המשפחה.":
    "Choose accommodation according to the factors most important for the family's comfort.",

  "טיול קצר — 4 עד 5 ימים": "Short trip — 4 to 5 days",
  "טיול מאוזן — 6 עד 7 ימים": "Balanced trip — 6 to 7 days",
  "טיול מלא — 8 עד 10 ימים": "Full trip — 8 to 10 days",

  "דרך קיאנטי": "Chianti route",
  "יום טיול בוואל ד'אורצ'ה": "Day trip in Val d'Orcia",
  "פיינצה, מונטפולצ'יאנו ובאניו ויניוני": "Pienza, Montepulciano and Bagno Vignoni",

  "לא להעמיס יותר מדי בכל יום.": "Do not overload each day.",
  "לשלב זמן חופשי לקניות, אוכל, קפה ושיטוט רגוע.": "Include free time for shopping, food, coffee and relaxed wandering.",
  "לבדוק תחזית מזג אוויר לפני ימי נסיעה נופיים וטיולי כפרים.": "Check the weather forecast before scenic driving days and countryside trips.",
  "לשמור אפשרות לשינוי מסלול במקרה של גשם, עומס, עייפות או שינוי בתוכניות.": "Keep the itinerary flexible in case of rain, crowds, tiredness or changes in plans.",
  "לתת מקום גם למה שמעניין מתבגר/ת, ולא רק לאטרקציות של מבוגרים.": "Make room for what interests the teenager, not only adult attractions.",

  "לשאול שאלות לפני בניית מסלול סופי.": "Ask questions before building the final itinerary.",
  "להשתמש בתשובות המשפחתיות שנשמרו בעמוד השאלות.": "Use the family answers saved on the questions page.",
  "לא להעמיס יותר מדי על כל יום.": "Do not overload each day.",
  "לשלב זמן קניות, אוכל, קפה ושיטוט רגוע.": "Include time for shopping, food, coffee and relaxed wandering.",
  "לתת מקום גם למה שמעניין מתבגר/ת.": "Make room for what interests the teenager.",
  "להשאיר יום נסיעה נופי כאפשרות מומלצת, אבל לא חובה.": "Keep a scenic driving day as a recommended option, but not a requirement.",
  "לא לשלב יותר מדי כפרים, עיירות או נסיעות ארוכות אם הטיול קצר מדי.": "Do not include too many villages, towns or long drives if the trip is short.",
  "לבדוק שעות פתיחה, זמני נסיעה, חניה, מזג אוויר ועלויות לפני הזמנה.": "Check opening hours, travel times, parking, weather and costs before booking.",
  "פירנצה — מרכז היסטורי, קניות ואוכל": "Florence - historic center, shopping and food",
  "תקציב של 150–250 אירו ללילה נותן גמישות טובה בין דירה משפחתית, מלון נוח או אגריטוריסמו, בהתאם לאזור ולתאריכים.": "A budget of €150-250 per night gives good flexibility between a family apartment, a comfortable hotel, or an agriturismo, depending on the area and dates.",
  "בתקציב של 250–350 אירו ללילה אפשר לשקול מקומות לינה ברמה גבוהה יותר, מיקום מרכזי יותר או אגריטוריסמו איכותי עם יותר שירותים.": "With a budget of €250-350 per night, you can consider higher-standard accommodation, a more central location, or a higher-quality agriturismo with more services.",

  "אפשרות יפה במיוחד אם רוצים לשלב עיירות, כרמים, נופים וארוחות טובות בלי להתרחק יותר מדי.": "A scenic option for combining towns, vineyards, views and good meals without traveling too far.",
  "מתאים אם רוצים לשלב עיירות ציוריות, כבישים נופיים, עצירות קצרות ותמונות יפות לאורך הדרך.": "A good fit for picturesque towns, scenic roads, short stops and photos along the way.",
  "מתאים ליום של עיירות ציוריות, תצפיות, אוכל מקומי, רחובות יפים ועצירות קצרות בקצב רגוע.": "A relaxed day of picturesque towns, viewpoints, local food, attractive streets and short stops.",
  "להתאים את ימי הכפרים והעיירות לאופן ההתניידות שנבחר, ולבדוק מראש חניה, ZTL או זמינות תחבורה ציבורית.": "Match village and town days to your transportation choice. Check parking, ZTL restrictions or public transport availability in advance.",
  "בחרתם קצב רגוע. מומלץ לצמצם נסיעות והחלפות, להשאיר זמן חופשי ולהתמקד בפחות מקומות עם יותר עומק.": "You've chosen a relaxed pace. Reduce driving and hotel changes, leave free time and explore fewer places in more depth.",
  "בחרתם קצב פעיל. אפשר לשלב יותר עיירות, עצירות ואתרים, אבל עדיין חשוב לא להעמיס יותר מדי.": "You've chosen an active pace. You can include more towns, stops and sights while keeping each day manageable.",
  "קצב מאוזן מאפשר לשלב ערים, עיירות, נופים וזמן מנוחה בצורה נוחה למשפחה.": "A balanced pace gives the family time for cities, towns, scenery and rest.",
  "מלון במרכז עיר מתאים אם חשוב לכם להיות קרובים למסעדות, קניות ואתרים ולצמצם שימוש ברכב בתוך העיר.": "A city-center hotel works well if you want to be close to restaurants, shops and sights and use the car less in town.",
  "דירה משפחתית יכולה להתאים אם חשובים לכם יותר מרחב, מטבחון וגמישות בארוחות, במיוחד בטיול של כמה ימים.": "A family apartment can give you more space, a kitchenette and flexibility at mealtimes, especially on a trip of several days.",
  "אגריטוריסמו או לינה כפרית מתאימים במיוחד לחלק הכפרי של הטיול, עם אווירה רגועה ונופים. חשוב לבדוק חניה, דרך גישה ומרחק ממסעדות.": "An agriturismo or countryside stay offers a relaxed atmosphere and views for the rural part of the trip. Check parking, access roads and the distance to restaurants.",
  "שילוב של לינה עירונית ולינה כפרית יכול לתת למשפחה גם נוחות בעיר וגם חוויה רגועה יותר באזורי הנוף.": "Splitting your stay between the city and countryside gives the family city convenience and a quieter experience in the scenic areas.",
  "אם עדיין לא החלטתם על סוג הלינה, כדאי לבחור לפי אופן ההתניידות, מספר הלילות בכל אזור והעדיפות בין נוחות עירונית לאווירה כפרית.": "If you are still deciding on accommodation, consider transportation, nights in each area and your preference for city convenience or a rural setting.",
  "בתקציב של עד 150 אירו ללילה כדאי להתמקד בדירות משפחתיות, מלונות פשוטים יותר או לינה מחוץ למרכזים היקרים, ולבדוק היטב מה כלול במחיר.": "With a budget of up to €150 per night, look for family apartments, simpler hotels or places outside expensive centers, and check what's included.",
  "בתקציב של מעל 350 אירו ללילה אפשר לתת עדיפות למיקום, נוחות, חדר משפחתי מרווח ושירותים נוספים, בלי להתפשר רק בגלל המחיר.": "With over €350 per night, you can prioritize location, comfort, a spacious family room and additional services without having to compromise on price alone.",
  "אם התקציב גמיש, כדאי להשוות את המחיר מול המיקום, החניה, גודל החדר והשירותים שמקבלים בפועל.": "If the budget is flexible, weigh the price against the location, parking, room size and services actually included.",
  "אם עדיין לא החלטתם על תקציב לינה, כדאי לקבוע טווח מחיר ללילה לפני שמתחילים להשוות בין מלונות, דירות ואגריטוריסמו.": "If you are still deciding on a budget, set a nightly price range before comparing hotels, apartments and agriturismos.",
  "מומלץ לוודא מראש שהמיטה הנפרדת למתבגר/ת היא מיטה אמיתית ונוחה, ולא רק ספה קטנה או מיטה מתקפלת.": "Check in advance that the separate bed for the teenager is a proper, comfortable bed, rather than a small sofa or folding bed.",
  "מומלץ לבחור חדר משפחתי שמיועד באמת לשלושה אורחים, עם מספיק מרחב ואחסון למשפחה.": "Choose a family room designed for three guests, with enough space and storage for the family.",
  "אם מעדיפים שני חדרים נפרדים, כדאי לבדוק מראש אם ניתן להזמין חדרים סמוכים או מחוברים.": "If you prefer two separate rooms, ask whether adjacent or connecting rooms can be booked.",
  "בדירה עם חדר שינה וספה נפתחת, כדאי לבדוק שהספה מתאימה לשינה נוחה למתבגר/ת ושיש מספיק פרטיות ומרחב.": "In an apartment with a bedroom and sofa bed, check that the sofa bed is comfortable for the teenager and that there's enough privacy and space.",
  "אם אתם גמישים בסידור החדר, כדאי להשוות בין הנוחות, גודל החדר, סוג המיטה הנוספת והמחיר.": "If you're flexible about room setup, compare comfort, room size, the type of extra bed and price.",
  "אם עדיין לא החלטתם על סידור החדר, כדאי להגדיר מראש מה נחשב סידור שינה נוח לשלושת בני המשפחה.": "If you are still deciding on room setup, agree on what makes a comfortable sleeping arrangement for all three family members.",
  "להעדיף מקום לינה עם חניה ברורה ונוחה, במיוחד אם משתמשים ברכב שכור": "Choose accommodation with clear, convenient parking arrangements, especially if you're renting a car",
  "לבדוק שארוחת הבוקר כלולה או זמינה במקום הלינה": "Check that breakfast is included or available at the property",
  "לוודא מראש שהחדר מתאים בנוחות לשני הורים ולמתבגר/ת": "Confirm in advance that the room comfortably fits two parents and a teenager",
  "להעדיף דירה או מקום עם מטבחון כדי לאפשר גמישות בארוחות": "Choose an apartment or accommodation with a kitchenette for more flexibility at meals",
  "לבדוק שיש מעלית, במיוחד במבנים היסטוריים שבהם היא לא תמיד קיימת": "Check for an elevator, especially in historic buildings, where one may be unavailable",
  "להעדיף מיקום שמאפשר להגיע ברגל למסעדות, בתי קפה והמרכז": "Choose a location within walking distance of restaurants, cafés and the center",
  "כדאי לבחור את מקום הלינה לפי הנוחות החשובה ביותר למשפחה.": "Choose accommodation based on what matters most to the family's comfort.",
  "קניות ושיטוט עירוני, ולכן כדאי לתת מקום לפירנצה, לוקה וזמן חופשי ברחובות יפים": "shopping and exploring city streets, so allow time for Florence, Lucca and relaxed walks along attractive streets",
  "חוויות אוכל מקומיות כמו גלידה, בתי קפה, טעימות או סדנת בישול": "local food experiences such as gelato, cafés, tastings or a cooking workshop",
  "עיירות ציוריות ומקומות יפים לצילום כמו סן ג'ימיניאנו, פיינצה ווואל ד'אורצ'ה": "picturesque towns and photo spots such as San Gimignano, Pienza and Val d'Orcia",
  "כדאי לשלב במסלול גם זמן שמתאים למתבגר/ת ולא רק אתרי חובה למבוגרים.": "Make time for activities the teenager will enjoy alongside the main sights.",
  "הגעה לפירנצה והתאקלמות": "Arriving in Florence and settling in",
  "נחיתה או הגעה ברכבת, נסיעה למלון, הליכה רגועה במרכז ההיסטורי, ארוחת ערב קלה ושינה מוקדמת.": "Arrive by plane or train, transfer to the hotel, take a relaxed walk through the historic center, have a light dinner and turn in early.",
  "יום עירוני נוח עם הרחובות המרכזיים, כיכרות יפות, גלידה, בתי קפה, זמן חופשי וקניות שמתאימות גם למתבגר/ת.": "An easy city day with the main streets, pretty squares, gelato, cafés, free time and shopping the teenager can enjoy too.",
  "פירנצה בקצב רגוע או טיול יום קצר": "Florence at an easy pace or a short day trip",
  "אפשר להמשיך בפירנצה בקצב נוח, לבחור מוזיאון אחד או תצפית, או לצאת לטיול יום קצר בהתאם למזג האוויר ולעייפות המשפחה.": "Explore Florence at a comfortable pace, choose one museum or viewpoint, or take a short day trip depending on the weather and the family's energy.",
  "מעבר לסיינה דרך קיאנטי": "Transfer to Siena via Chianti",
  "נסיעה לכיוון סיינה עם עצירות קצרות בעיירות או בנקודות נוף באזור קיאנטי. כדאי להימנע מהעמסת יותר מדי עצירות ביום אחד.": "Head toward Siena with short stops in towns or at viewpoints in Chianti. Keep the number of stops manageable.",
  "סיינה וסן ג'ימיניאנו": "Siena and San Gimignano",
  "שיטוט במרכז ההיסטורי של סיינה, זמן לארוחה ולמנוחה, ובהמשך ביקור בסן ג'ימיניאנו אם הקצב ומזג האוויר מתאימים.": "Explore Siena's historic center, make time for a meal and a rest, then visit San Gimignano if the pace and weather suit.",
  "מעבר לוואל ד'אורצ'ה": "Transfer to Val d'Orcia",
  "נסיעה נופית לכיוון פיינצה או מונטפולצ'יאנו, עם עצירות קצרות לתצפיות, אוכל מקומי וצילום לאורך הדרך.": "Take a scenic drive toward Pienza or Montepulciano, with short stops for views, local food and photos along the way.",
  "יום של עיירות ציוריות, רחובות יפים, אוכל, גלידה ותצפיות. כדאי לבחור שתיים או שלוש עצירות בלבד ולא להעמיס.": "Spend the day in picturesque towns with pretty streets, food, gelato and viewpoints. Keep it to two or three stops.",
  "יום גמיש בטבע או בעיירה": "Flexible day outdoors or in town",
  "יום שמאפשר מנוחה, נסיעה קצרה, שוק מקומי, חווה, פעילות אוכל או שינוי תוכנית במקרה של גשם או עייפות.": "Leave the day open for a rest, short drive, local market, farm, food activity or a change of plan if it rains or the family is tired.",
  "לוקה ופיזה או חזרה לפירנצה": "Lucca and Pisa or return to Florence",
  "עדיף לחזור לפירנצה לזמן חופשי, אוכל ושיטוט אחרון. לוקה או פיזה מתאימות רק אם הן משתלבות באזור הלינה הבא או בנקודת היציאה; מעבר מוואל ד'אורצ'ה לצפון־מערב טוסקנה הוא יום נסיעה משמעותי.": "Consider returning to Florence for free time, food and a final walk. Lucca or Pisa works if it fits the next accommodation area or departure point. Driving from Val d'Orcia to northwestern Tuscany takes a substantial part of the day.",
  "חזרה הביתה": "Returning home",
  "נסיעה לשדה התעופה או לתחנת הרכבת, זמן ביטחון, החזרת רכב אם צריך וסיום רגוע של הטיול.": "Head to the airport or train station, leave extra time, return the car if needed and end the trip at an easy pace.",
  "הגעה לפירנצה ואיסוף רכב": "Arriving in Florence and collecting the car",
  "נחיתה או הגעה לפירנצה, איסוף רכב רק אם הוא נדרש מיד, נסיעה למקום הלינה והתאקלמות רגועה. חשוב להימנע מנהיגה בתוך אזורי ZTL במרכז ההיסטורי.": "Arrive in Florence, collect the car if you need it straight away, go to your accommodation and settle in. Avoid driving in the historic center's restricted traffic zones (ZTL).",
  "פירנצה והסביבה": "Florence and surroundings",
  "יום עירוני בפירנצה עם חניה מחוץ למרכז, הליכה רגועה, קניות, אוכל וזמן חופשי. אפשר להשאיר את הרכב בחניה מסודרת במשך היום.": "Spend the day in Florence, parking outside the center and leaving time for a relaxed walk, shopping and food. You can leave the car in a designated parking lot for the day.",
  "קיאנטי וסן ג'ימיניאנו": "Chianti and San Gimignano",
  "נסיעה נופית דרך קיאנטי, עם עצירות קצרות בכפרים או בנקודות תצפית, ובהמשך ביקור בסן ג'ימיניאנו. חשוב לא להעמיס יותר מדי עצירות.": "Drive through Chianti with short stops in villages or at viewpoints, then visit San Gimignano. Keep the number of stops manageable.",
  "יום בסיינה, עם חניה מחוץ למרכז ההיסטורי, שיטוט רגוע, ארוחה וזמן חופשי. אפשר ללון באזור סיינה או להמשיך דרומה.": "Spend a day in Siena. Park outside the historic center and leave time for a relaxed walk, a meal and free time. Stay near Siena or continue south.",
  "נסיעה דרומה דרך נופים כפריים, עם עצירות קצרות בלבד. אפשר לבחור לינה באזור פיינצה, מונטפולצ'יאנו או עיירה סמוכה.": "Drive south through rural scenery with only short stops. Consider staying in Pienza, Montepulciano or a nearby town.",
  "פיינצה ומונטפולצ'יאנו": "Pienza and Montepulciano",
  "יום של עיירות, תצפיות, אוכל מקומי וצילום. כדאי לבחור שתי עצירות עיקריות ולא לנסות להספיק את כל האזור ביום אחד.": "Spend a day exploring towns, viewpoints, local food and photo spots. Choose two main stops so you can enjoy the area at an easy pace.",
  "באניו ויניוני או יום כפרי רגוע": "Bagno Vignoni or a relaxed countryside day",
  "יום קל יותר עם כפר קטן, פעילות אוכל, חווה, שוק מקומי או מנוחה. מתאים גם לשינוי תוכנית במקרה של גשם או עייפות.": "Take an easier day with a small village, food activity, farm, local market or rest. This day can also absorb a change of plan if it rains or the family is tired.",
  "נסיעה לכיוון לוקה ופיזה": "Heading toward Lucca and Pisa",
  "יום מעבר ארוך יותר לכיוון צפון־מערב טוסקנה. כדאי לתכנן מראש עצירת מנוחה ולהימנע מהגעה מאוחרת.": "Allow for a longer transfer toward northwestern Tuscany. Plan a rest stop and aim to arrive before late evening.",
  "לוקה ופיזה": "Lucca and Pisa",
  "יום שמשלב את לוקה ופיזה בקצב סביר, עם זמן לשיטוט, ארוחה, תמונות ומנוחה.": "Explore Lucca and Pisa at a comfortable pace, with time to wander, eat, take photos and rest.",
  "החזרת הרכב וחזרה הביתה": "Returning the car and heading home",
  "נסיעה לשדה התעופה או לתחנת הרכבת, תדלוק, החזרת הרכב בזמן והשארת מרווח ביטחון.": "Head to the airport or train station, refuel, return the car on time and allow extra time.",
  "הגעה ברכבת או בטיסה, נסיעה למלון, שיטוט רגוע במרכז ההיסטורי, ארוחת ערב קלה ושינה מוקדמת.": "Arrive by train or plane, travel to the hotel, stroll through the historic center, have a light dinner and turn in early.",
  "יום עירוני מלא בפירנצה עם הליכה, תחבורה ציבורית לפי הצורך, גלידה, בתי קפה, קניות וזמן חופשי.": "Spend a full day in Florence with walking and public transport as needed, gelato, cafés, shopping and free time.",
  "פירנצה בקצב רגוע": "Florence at an easy pace",
  "אפשר לבחור מוזיאון אחד, תצפית, שוק מקומי או זמן חופשי נוסף. עדיף לא להעמיס יותר מדי אטרקציות באותו יום.": "Choose one museum, a viewpoint, a local market or more free time. Keep the number of attractions manageable.",
  "סיינה בתחבורה ציבורית": "Siena by public transport",
  "נסיעה לסיינה באוטובוס או ברכבת בשילוב אוטובוס, שיטוט במרכז ההיסטורי, ארוחה וחזרה לפירנצה או לינה בסיינה.": "Take a bus to Siena or combine a train and bus. Explore the historic center and have a meal, then return to Florence or stay in Siena.",
  "פיזה ולוקה": "Pisa and Lucca",
  "יום טיול ברכבת לפיזה ולוקה. אפשר לשלב את שתי הערים בקצב סביר, עם זמן לארוחה, תמונות ומנוחה.": "Take a day trip by train to Pisa and Lucca. Visit both at a comfortable pace and allow time to eat, take photos and rest.",
  "יום מאורגן לקיאנטי או לסן ג'ימיניאנו": "Organized day trip to Chianti or San Gimignano",
  "מאחר שקשה להגיע לחלק מהאזורים הכפריים בתחבורה ציבורית, אפשר לבחור טיול יום מאורגן לקיאנטי, סן ג'ימיניאנו או אזור כפרי אחר.": "Some rural areas are difficult to reach by public transport, so consider an organized day trip to Chianti, San Gimignano or another countryside area.",
  "יום גמיש בפירנצה": "Flexible day in Florence",
  "יום שמיועד לקניות, אוכל, מנוחה, שוק מקומי, פעילות שמתאימה למתבגר/ת או שינוי תוכנית במקרה של גשם.": "Leave a day for shopping, food, rest, a local market, an activity the teenager will enjoy or an alternative if it rains.",
  "מעבר לעיר נוספת לפי הצורך": "Transfer to another city if needed",
  "אפשר לעבור ברכבת ללוקה, פיזה או עיר אחרת עם חיבור נוח. עדיף להימנע מאזורים שדורשים כמה החלפות מורכבות.": "Take the train to Lucca, Pisa or another city with a convenient connection. Avoid destinations that require several complicated transfers.",
  "יום עירוני נוסף או טיול קצר": "Another city day or short excursion",
  "אפשר לבחור יום נוסף בפירנצה, סיינה, לוקה או פיזה, בהתאם למקום הלינה, מזג האוויר וקצב המשפחה.": "Choose another day in Florence, Siena, Lucca or Pisa based on your accommodation, the weather and the family's pace.",
  "נסיעה ברכבת או בתחבורה ציבורית לשדה התעופה או לתחנה המרכזית, עם מרווח ביטחון מספיק.": "Take a train or public transport to the airport or main station with time to spare.",
  "לבדוק מגבלות נהיגה וחניה במרכזים ההיסטוריים.": "Check driving and parking restrictions in historic centers.",
  "לבדוק מראש אזורי ZTL ולוודא היכן מותר להיכנס ולחנות.": "Check ZTL restrictions in advance and confirm where you may drive and park.",
  "לבדוק זמני נסיעה אמיתיים ולא להעמיס יותר מדי עיירות ביום אחד.": "Check actual drive times and keep the number of towns in one day manageable.",
  "לבדוק מזג אוויר לפני ימי כפרים, תצפיות ונסיעות נופיות.": "Check the weather before visiting villages or viewpoints or taking scenic drives.",
  "לבדוק שעות פתיחה, הזמנות, מחירי כניסה וימי סגירה.": "Check opening hours, reservations, admission prices and closing days.",
  "לבדוק מראש את תנאי השכרת הרכב, הביטוח, התדלוק ומקום ההחזרה.": "Check car rental terms, insurance, refueling and the return location in advance.",
  "לבדוק לוחות זמנים עדכניים של רכבות ואוטובוסים.": "Check current train and bus schedules.",
  "לבדוק אם נדרשת הזמנה מראש בקווים בין־עירוניים.": "Check whether intercity services require advance booking.",
  "לבדוק זמני החלפה ולא לבנות חיבורים צפופים מדי.": "Allow enough time for transfers and avoid tight connections.",
  "לבדוק מראש איך מגיעים מהתחנה למלון ולמרכז ההיסטורי.": "Plan how to get from the station to the hotel and historic center.",
  "לבדוק תחבורה חלופית במקרה של שביתה, איחור או שינוי בלוחות הזמנים.": "Check alternative transportation in case of a strike, delay or timetable change.",
  "הגעה והתארגנות": "Arrival and settling in",
  "הגעה לאזור הלינה הראשון, התמקמות וטיול רגוע בסביבה הקרובה ללא נסיעות ארוכות.": "Arrive at the first accommodation area, settle in and explore nearby at a relaxed pace without a long drive.",
  "יום עירוני": "City day",
  "ביקור בעיר מרכזית, שילוב של אתרים, אוכל מקומי, קניות וזמן חופשי.": "Visit a major city for sights, local food, shopping and free time.",
  "עיירות וכפרים": "Towns and villages",
  "יום המוקדש לעיירות וכפרים בטוסקנה. את המקומות המדויקים ואת אופן ההגעה נבחר לאחר קבלת החלטה לגבי התחבורה.": "Spend the day in Tuscan towns and villages. Choose specific places and how to reach them once transportation is settled.",
  "נופים ואוכל מקומי": "Scenery and local food",
  "יום גמיש המשלב נופים, תצפיות, שווקים, טעימות או פעילות משפחתית בהתאם למזג האוויר.": "Keep the day flexible for scenery, viewpoints, markets, tastings or a family activity depending on the weather.",
  "יום משפחתי רגוע": "Relaxed family day",
  "שילוב של פעילות שמתאימה לכל המשפחה, עם זמן לקניות, גלידה, בית קפה או מנוחה.": "Combine a family activity with time for shopping, gelato, a café or rest.",
  "אזור נוסף בטוסקנה": "Another area of Tuscany",
  "ביקור באזור נוסף בהתאם למקום הלינה ולאופן ההתניידות שייבחר.": "Explore another area based on where you're staying and which transportation you choose.",
  "יום גמיש": "Flexible day",
  "יום פתוח להשלמת מקומות שלא הספקתם, שינוי לפי מזג האוויר או מנוחה.": "Leave the day open to catch up on places you missed, adapt to the weather or rest.",
  "המשך הטיול": "Continuing the trip",
  "יום נוסף שייקבע לפי אזורי הלינה, קצב הטיול ואופן התחבורה.": "Plan another day around your accommodation areas, travel pace and transportation.",
  "יום בחירה משפחתי": "Family choice day",
  "בחירת פעילות מועדפת על המשפחה בהתאם למה שכבר עשיתם במהלך הטיול.": "Pick a family favorite based on what you've already done on the trip.",
  "סיום הטיול וחזרה": "Wrapping up the trip",
  "בוקר רגוע, ארוחה אחרונה או שיטוט קצר, ולאחר מכן יציאה לשדה התעופה או לתחנת הרכבת.": "Have a relaxed morning, a final meal or a short walk before heading to the airport or train station.",
  "סיום הטיול וחזרה הביתה": "Wrapping up the trip and heading home",
  "בוקר רגוע, ארוחה אחרונה או שיטוט קצר, ולאחר מכן נסיעה לשדה התעופה או לתחנת הרכבת עם מרווח ביטחון מספיק.": "Have a relaxed morning, a final meal or a short walk, then leave plenty of time to reach the airport or train station.",
  "לבחור את אופן ההתניידות לפני שסוגרים את אזורי הלינה.": "Choose transportation before finalizing the accommodation areas.",
  "לבדוק זמני נסיעה בין האזורים ולא להעמיס יותר מדי מקומות ביום אחד.": "Check travel times between areas and keep the number of stops in one day manageable.",
  "לבדוק מזג אוויר לפני ימי כפרים, תצפיות ופעילויות בחוץ.": "Check the weather before village days, viewpoints and outdoor activities.",
  "להשאיר אפשרות לשנות את סדר הימים לפי מזג האוויר ועייפות המשפחה.": "Leave room to reorder days based on the weather and the family's energy.",
  "להשאיר זמן חופשי לקניות ולשיטוט ברחובות היפים": "Leave free time for shopping and exploring the attractive streets",
  "לשלב עצירה לגלידה, בית קפה או טעימה מקומית": "Include a stop for gelato, a café or a local tasting",
  "להשאיר זמן לשיטוט רגוע, נקודות צילום ועצירות קצרות בעיירות ציוריות.": "Leave time for relaxed walks, photo spots and short stops in picturesque towns.",
  "אפשר לשלב סדנת בישול, טעימות או חוויה קולינרית מקומית.": "Consider a cooking workshop, a tasting or another local food experience.",
  "להעדיף אטרקציות קלילות, חווייתיות וקצרות, ולהימנע מימים עמוסים במוזיאונים כבדים": "Favor short, hands-on attractions and avoid days packed with demanding museum visits",
  "להשאיר בכל יום זמן חופשי לשיטוט, קניות, בית קפה או מנוחה": "Leave free time each day for a stroll, shopping, a café or rest",
  "לוודא שבמקום הלינה יש חניה נוחה וברורה, במיוחד בימים שבהם משתמשים ברכב": "Confirm that the property has convenient, clearly marked parking, especially on days when you'll use a car",
  "להעדיף מקום שבו ארוחת הבוקר כלולה או זמינה בנוחות": "Choose a place where breakfast is included or easy to arrange",
  "לוודא שהחדר מתאים בנוחות לשני הורים ולמתבגר/ת": "Make sure the room comfortably fits two parents and a teenager",
  "להעדיף מקום עם מטבחון כדי לאפשר גמישות בארוחות ובנשנושים": "Choose a place with a kitchenette for flexible meals and snacks",
  "לבדוק מראש שיש מעלית, במיוחד במבנים היסטוריים": "Check for an elevator in advance, especially in historic buildings",
  "להעדיף מיקום שמאפשר להגיע ברגל למרכז, למסעדות ולבתי קפה": "Choose a location within walking distance of the center, restaurants and cafés",
  "בדקו את התאריכים: תאריך הסיום צריך להיות ביום ההתחלה או אחריו.": "Check your dates. The end date must be on or after the start date.",
  "המסלול לדוגמה מיועד ל־4 עד 10 ימים. התאריכים נשמרו, אך נדרשת התאמה אישית למשך הטיול הזה.": "The sample itinerary is designed for 4 to 10 days. Your dates were saved, and this trip length needs a custom itinerary.",
  "סן ג'ימיניאנו": "San Gimignano",
  "פיינצה": "Pienza",
  "מונטפולצ'יאנו": "Montepulciano",
  "לוקה": "Lucca",
  "פיזה": "Pisa",
};

export function displayText(value: string | null | undefined, language: Language): string {
  if (!value) return translations[language].notSelected;

  if (language === "he") return value;

  const dayMatch = value.match(/^יום\s+(\d+)$/);
  if (dayMatch) return `Day ${dayMatch[1]}`;

  return Object.hasOwn(EN, value) ? EN[value] : value;
}

// Saved choices are controlled values. Arrival and departure text bypass this formatter.
export function displayAnswer(value: string, language: Language): string {
  const label = displayText(value, language);
  return language === "en" && /[\u0590-\u05ff]/.test(label)
    ? translations.en.unknownSavedChoice
    : label;
}

export function displayAnswerList(values: readonly string[], language: Language): string {
  return values.map((value) => displayAnswer(value, language)).join(", ") || translations[language].notSelected;
}

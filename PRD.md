# PRD - אתר יועצת שינה "ליאור"

## מטרות הפרויקט

- לבנות אתר פרימיום ליועצת שינה **"ליאור – יועצת שינה והדרכת הורים בשיטת 'לילה טוב'"**.
- מטרת האתר: **הגדלת פניות איכותיות** דרך:
  1. קביעת שיחה (Calendly)
  2. וואטסאפ קבוע
  3. טופס יצירת קשר
- משני: קידום אורגני דרך בלוג (SEO).

---

## קהל יעד

הורים לתינוקות/פעוטות **גיל 4 חודשים עד 3.5 שנים**. הקהל רגיש לשפה "מרגיעה, משפחתית", לא קלינית.

---

## הנחות פרימיום (תשובות הלקוחה)

### שפה
- עברית בלבד כרגע, אבל חשוב שהאתר יהיה בנוי כך שיהיה קל להוסיף אנגלית בעתיד.

### שירותים
- **שיחת אבחון** 45 דק׳ (אונליין)
- **ליווי פרימיום** 14 ימים
- **ליווי פרימיום+** 30 ימים (כולל זמינות בוואטסאפ)
- *לא חובה לפרסם מחירים בעמוד, אבל כן להציג "מסלולים" בצורה ברורה.*

### קביעת פגישה אונליין
- Calendly (מועדף) או Google Calendar אם צריך.

### CTA מרכזי
- כפתור **קביעת שיחה** + כפתור **וואטסאפ** קבוע. הטופס הוא משני.

### המלצות/אמון
- יש 15–25 המלצות כתובות + 3 המלצות וידאו קצרות.
- יש תעודות/הכשרות.

### תמונות
- יש כמה תמונות מקצועיות (Headshots) אבל רוצים בעיקר **אווירה עדינה** (איורים/אייקונים/תמונות אווירה).

### בלוג
- כן — חשוב מאוד ל־SEO, מינימום 1–2 מאמרים בחודש.

### אזור פעילות
- אונליין בכל הארץ + אפשרות לפגישה טלפונית.

### מדידה
- GA4 + Meta Pixel + טופס שמגיע גם למייל וגם נשמר (לידים).

### פרימיום = דרישות
- אתר **מהיר מאוד**, **נגיש**, **נראה יוקרתי**, עם מיקרו־אנימציות עדינות, והתאמה מושלמת למובייל.

### דומיין ואחסון
- יש דומיין ואחסון פעיל, אבל פתוחים לחבר ל־Vercel אם זה נותן ביצועים טובים יותר.

### שאלון בדיקת מצב שינה
- **שאלון אינטראקטיבי** (6-8 שאלות קצרות) שמאפשר לגולשים להבין את מצב השינה בבית
- **תוצאה מותאמת** (3 פרופילים אפשריים) שמובילה ל-CTA חזק
- **מטרה עסקית**: להמיר גולשים פאסיביים ל"חמים" ע"י כך שהם מגלים בעצמם שיש צורך בליווי

---

## מפת אתר (Sitemap)

### דפים מינימליים:

1. **Home** (עמוד נחיתה ארוך ממיר)
2. **About** (אודות)
3. **Method** ("לילה טוב" - השיטה)
4. **Programs / Packages** (מסלולים)
5. **Testimonials** (המלצות)
6. **Blog** (רשימת פוסטים)
7. **Blog Post** (Dynamic - עמוד מאמר)
8. **Contact** (צור קשר)
9. **Assessment** (שאלון בדיקת מצב שינה) - עמוד ייעודי או מודאל
10. **Privacy Policy** (מדיניות פרטיות)
11. **Terms** (תנאי שימוש)
12. **Accessibility Statement** (הצהרת נגישות)

### דפי ממשק מנהל (Admin Panel):

12. **/admin/login** (התחברות מנהל)
13. **/admin/dashboard** (לוח בקרה - סטטיסטיקות)
14. **/admin/leads** (ניהול לידים)
15. **/admin/blog** (ניהול בלוג - רשימה)
16. **/admin/blog/new** (יצירת מאמר חדש)
17. **/admin/blog/[id]/edit** (עריכת מאמר)
18. **/admin/testimonials** (ניהול המלצות)
19. **/admin/programs** (ניהול מסלולים/חבילות)
20. **/admin/settings** (הגדרות כלליות)

---

## דרישות פונקציונליות

### Mobile-first + RTL
- האתר חייב להיות מותאם מלא למובייל קודם כל.
- תמיכה מלאה ב-RTL (עברית).

### Sticky Buttons
- **Sticky WhatsApp button** קבוע במסך (תמיד גלוי).
- **Sticky CTA נוסף** "קביעת שיחה" (גם כן תמיד גלוי).
- שני הכפתורים לא צריכים להפריע לחוויית המשתמש.

### עמוד צור קשר

#### שדות הטופס:
- שם (חובה)
- טלפון (חובה)
- גיל הילד (חובה)
- הודעה (חובה)

#### ולידציה:
- שדות חובה מסומנים בבירור.
- פורמט טלפון תקין (ישראל).
- הודעות שגיאה ברורות בעברית.

#### אנטי־ספאם:
- **Honeypot** (שדה נסתר).
- **Rate limiting** (עד 3 בקשות לדקה מאותו IP).
- אופציונלי: Cloudflare Turnstile (אם נדרש).

#### לאחר שליחה:
- הודעת הצלחה ברורה.
- אפשרות מעבר ישיר לוואטסאפ עם הודעה מוכנה.

### קביעת פגישה אונליין

#### Calendly Integration:
- Calendly embed בעמוד ייעודי.
- CTA ברחבי האתר שמוביל לקביעת שיחה.
- מעקב אירועים על קליקים (`book_call_click`).

### בלוג

#### עמוד רשימת פוסטים:
- רשימה עם תצוגה יפה של כל המאמרים.
- חיפוש לפי מילות מפתח.
- תגיות/קטגוריות לסינון.
- תאריכים, תמונות, תקצירים.

#### עמוד מאמר:
- תוכן מלא עם עיצוב נקי.
- TOC (תוכן עניינים) אם המאמר ארוך.
- SEO מלא לכל מאמר (title, description, OG tags).
- שיתוף חברתי.

### אירועי אנליטיקס

חייבים למעקב:
- `whatsapp_click` - קליק על כפתור וואטסאפ
- `book_call_click` - קליק על קביעת שיחה
- `form_submit_success` - שליחה מוצלחת של טופס
- `sleep_quiz_started` - התחלת שאלון בדיקת שינה
- `sleep_quiz_question_answered` - תשובה לשאלה (שולח questionIndex)
- `sleep_quiz_completed` - השלמת השאלון
- `sleep_quiz_result_tier_1/2/3` - תוצאה לפי tier
- `sleep_quiz_cta_whatsapp` - קליק על CTA וואטסאפ מתוצאה
- `sleep_quiz_cta_call` - קליק על CTA שיחה מתוצאה
- `lead_created` - יצירת ליד חדש (מטופס או משאלון)

### ממשק מנהל (Admin Panel)

#### אבטחה והרשאות:
- **התחברות**: Email + Password (או OAuth דרך Supabase Auth)
- **Session management**: JWT tokens
- **Route protection**: כל דפי `/admin/*` מוגנים
- **Role-based access**: רק מנהלים מורשים

#### לוח בקרה (Dashboard):
- **סטטיסטיקות כלליות**:
  - כמות לידים חדשים (היום, השבוע, החודש)
  - כמות לידים לפי סטטוס (new, contacted, converted, archived)
  - גרף לידים לפי זמן
  - כמות מאמרים שפורסמו
  - כמות המלצות פעילות
- **לידים אחרונים**: רשימה של 10 הלידים האחרונים
- **מאמרים אחרונים**: רשימה של 5 המאמרים האחרונים

#### ניהול לידים (/admin/leads):
- **רשימת לידים**:
  - טבלה עם: שם, טלפון, גיל הילד, תאריך, סטטוס
  - סינון לפי סטטוס (new, contacted, converted, archived)
  - חיפוש לפי שם/טלפון
  - מיון לפי תאריך
- **תצוגת ליד**:
  - כל הפרטים (שם, טלפון, גיל הילד, הודעה)
  - IP address (למניעת ספאם)
  - תאריך יצירה
  - שינוי סטטוס (dropdown)
  - הערות/הערות פנימיות (אופציונלי)
- **פעולות**:
  - עדכון סטטוס
  - מחיקה (soft delete)
  - ייצוא ל-CSV/Excel
  - שליחת מייל ישירה (אופציונלי)

#### ניהול בלוג (/admin/blog):
- **רשימת מאמרים**:
  - טבלה עם: כותרת, קטגוריה, תאריך פרסום, סטטוס (פורסם/טיוטה)
  - סינון לפי קטגוריה/סטטוס
  - חיפוש לפי כותרת/תוכן
- **יצירת/עריכת מאמר**:
  - שדות: כותרת (עברית + אנגלית), slug, תקציר, תוכן (Rich Text Editor)
  - בחירת קטגוריה
  - הוספת תגיות (multi-select)
  - תמונה ראשית (upload)
  - SEO: meta title, meta description, keywords
  - תאריך פרסום (scheduling)
  - סטטוס: טיוטה/פורסם
  - תצוגה מקדימה
- **ניהול קטגוריות ותגיות**:
  - יצירה/עריכה/מחיקה של קטגוריות
  - יצירה/עריכה/מחיקה של תגיות

#### ניהול המלצות (/admin/testimonials):
- **רשימת המלצות**:
  - טבלה עם: שם, גיל הילד, דירוג, מומלץ, תאריך
  - סינון לפי מומלץ/לא מומלץ
- **יצירת/עריכת המלצה**:
  - שדות: שם, גיל הילד, טקסט המלצה
  - קישור לוידאו (YouTube/Vimeo)
  - תמונת תצוגה מקדימה (thumbnail)
  - דירוג (1-5 כוכבים)
  - סטטוס מומלץ (featured)
  - סדר תצוגה (display_order)
  - סטטוס פרסום

#### ניהול מסלולים/חבילות (/admin/programs):
- **רשימת מסלולים**:
  - טבלה עם: שם, תיאור קצר, מחיר (אם רלוונטי), סטטוס
- **יצירת/עריכת מסלול**:
  - שדות: שם, תיאור מלא, תכונות (features list)
  - מחיר (אופציונלי - אם לא רוצים להציג)
  - תמונה/אייקון
  - סדר תצוגה
  - סטטוס פעיל/לא פעיל

#### הגדרות (/admin/settings):
- **הגדרות כלליות**:
  - פרטי יצירת קשר (טלפון, מייל, וואטסאפ)
  - קישור Calendly
  - הגדרות SEO כלליות
- **ניהול משתמשים** (אם יש מספר מנהלים):
  - רשימת מנהלים
  - הוספת/הסרת מנהלים
  - שינוי הרשאות

---

## User Stories

### כהורה עייף/ה בלילה:
> אני רוצה להבין תוך 10 שניות אם ליאור מתאימה לי ומה התהליך → כדי שאקבע שיחה.

**Acceptance Criteria:**
- ה-Hero section ברור וקולע.
- CTA בולט ונגיש.
- תהליך פשוט ומובן.

### כהורה שמעדיף וואטסאפ:
> אני רוצה כפתור קבוע שמאפשר לפנות מהר עם הודעה מוכנה מראש.

**Acceptance Criteria:**
- כפתור וואטסאפ תמיד גלוי.
- הודעה מוכנה מראש (אופציונלי: עם פרטים מהטופס אם מילאו).

### כהורה שמחפש מידע:
> אני רוצה לקרוא מאמרים לפי בעיה (התעוררויות, הרדמות, גמילה, שינה רציפה).

**Acceptance Criteria:**
- בלוג מאורגן לפי קטגוריות/תגיות.
- חיפוש יעיל.
- תוכן איכותי ורלוונטי.

### כליאור (הלקוחה):
> אני רוצה שכל ליד יישמר במקום מסודר + יישלח אליי במייל + יופיע לי באקספורט.

**Acceptance Criteria:**
- כל ליד נשמר ב-DB/Sheet.
- מייל אוטומטי מגיע ל-easydevil227@gmail.com.
- אפשרות לייצא לידים (CSV/Excel).

### כליאור (הלקוחה):
> אני רוצה לראות כמה פניות הגיעו ומאיזה כפתורים (GA4 events).

**Acceptance Criteria:**
- כל האירועים נשלחים ל-GA4.
- אפשר לראות conversion paths.
- Meta Pixel גם כן מוגדר.

### כליאור (הלקוחה) - מנהל:
> אני רוצה לנהל את כל התוכן באתר בעצמי, בלי תלות במתכנת.

**Acceptance Criteria:**
- ממשק מנהל פשוט ואינטואיטיבי.
- אפשרות להוסיף/לערוך מאמרים בקלות.
- אפשרות לנהל לידים ולעדכן סטטוסים.
- אפשרות להוסיף המלצות חדשות.
- אפשרות לעדכן מסלולים.

### כגולש/ת באתר - שאלון בדיקת שינה:
> אני רוצה לענות על שאלון קצר (ללא טפסים ארוכים) כדי להבין מה מצב השינה בבית.

**Acceptance Criteria:**
- השאלון ידידותי, צבעוני וקל להשלמה.
- תוצאה מובנת בלי הרגשה ששפטו אותי.
- אפשרות מידית ליצור קשר (וואטסאפ או שיחת ייעוץ) אחרי התוצאה.

### כליאור (הלקוחה) - שאלון:
> אני רוצה לדעת כמה גולשים מתחילים ומשלימים את השאלון, ושהשאלון יחזק מוטיבציה לפנות אליי.

**Acceptance Criteria:**
- Analytics Events על כל שלבי השאלון.
- השאלון קצר (עד 2 דקות) לשמירה על יחס המרה גבוה.
- תוצאות מובילות ל-CTA חזק.

---

## דרישות UI/UX (פרימיום)

### עיצוב כללי
- עיצוב **רך, נשי, רגוע ונקי**.
- חם, משפחתי, **לא קליני**.
- אווירה מרגיעה ומזמינה.

### פלטת צבעים (Design Tokens)

```css
/* Accent Colors */
--color-accent-sky: #A8D8EA;      /* תכלת רך */
--color-accent-lavender: #CDB4DB;  /* לילך */
--color-accent-pink: #F7CAD0;      /* ורוד בהיר */

/* Background */
--color-bg-cream: #F9F7F3;         /* רקע שמנת */

/* Text */
--color-text-dark: #4A4A4A;        /* טקסט אפור כהה */
--color-text-light: #FFFFFF;       /* טקסט לבן (על רקע כהה) */
```

### אלמנטים עדינים
- **SVG icons/illustrations**: ירח, עננים, לבבות קטנים.
- לא יותר מדי - רק כדי ליצור אווירה.
- עדין ולא מסיח.

### טיפוגרפיה

#### כותרות:
- **Heebo Bold** או **Assistant Bold**
- גדלים: H1 (2.5rem+), H2 (2rem), H3 (1.5rem)

#### טקסט:
- **Rubik Regular** או **Open Sans Regular**
- גודל בסיס: 16px-18px
- Line height: 1.6-1.8

### מיקרו־אנימציות
- **Fade-in** על sections בעת scroll.
- **Hover effects** עדינים על כפתורים וכרטיסים.
- **Smooth transitions** (0.3s ease).
- **בלי עומס** - רק מה שמוסיף ערך.

### נגישות (Accessibility)

#### חובה:
- **קונטרסט תקין** (WCAG AA לפחות).
- **Focus states** ברורים על כל האלמנטים האינטראקטיביים.
- **ניווט מקלדת** מלא.
- **ARIA labels** על אלמנטים דקורטיביים/אינטראקטיביים.
- **Alt text** על כל התמונות.

#### מומלץ:
- Skip to content link.
- תמיכה ב-screen readers.

---

## דרישות טכניות

### Stack מומלץ

```
Next.js 14+ (App Router)
TypeScript
Tailwind CSS
RTL Support (rtlcss / next-intl)
```

### SEO

#### Metadata:
- `next/metadata` מלא לכל דף.
- Title, description, OG tags, Twitter cards.
- Canonical URLs.

#### Sitemap & Robots:
- `sitemap.xml` דינמי (נוצר אוטומטית).
- `robots.txt` מותאם.

#### Schema.org:
- **ProfessionalService** / **LocalBusiness** בעמוד הבית/אודות.
- **FAQ schema** באזורי FAQ.
- **Article schema** בכל פוסט בבלוג.
- **Person schema** לעמוד אודות.

### אנליטיקס

#### Google Analytics 4:
- Measurement ID ב-ENV.
- Events tracking:
  - `whatsapp_click`
  - `book_call_click`
  - `form_submit_success`
  - `sleep_quiz_started`
  - `sleep_quiz_question_answered`
  - `sleep_quiz_completed`
  - `sleep_quiz_result_tier_1/2/3`
  - `sleep_quiz_cta_whatsapp`
  - `sleep_quiz_cta_call`
  - `lead_created`
- רק בדפים ציבוריים (לא ב-admin/protected).

#### Meta Pixel:
- Pixel ID ב-ENV.
- Events מותאמים (אותם אירועים כמו GA4).

### טופס לידים

#### API Route:
- `/api/contact` או `/api/leads`
- POST endpoint עם ולידציה.

#### שליחה למייל:
- **Resend** (מומלץ) או **SMTP** רגיל.
- מייל HTML בסיסי.
- נשלח ל: `easydevil227@gmail.com`
- **לא** לשלוח מייל אישור לשולח.

#### שמירה ללידים:
- **Supabase** (מומלץ) או **Google Sheet**.
- שדות: שם, טלפון, גיל הילד, הודעה, תאריך, IP (למניעת ספאם).
- ממשק מנהל לניהול הלידים (עדכון סטטוס, ייצוא, וכו').

#### אבטחה:
- **Sanitization** של כל הקלט.
- **Rate limiting** (3 בקשות לדקה מאותו IP).
- **Honeypot** (שדה נסתר).
- **XSS protection**.
- תמיכה בעברית ואנגלית, קידוד UTF-8.

### שאלון בדיקת מצב שינה (Sleep Assessment Quiz)

#### מטרת הפיצ'ר:
לאפשר לגולשים לענות על 6-8 שאלות קצרות, לקבל **תוצאה מותאמת** (3 פרופילים אפשריים), ולהוביל אותם ל-CTA חזק:
- קביעת שיחת היכרות
- או פנייה בוואטסאפ

**המטרה העסקית**: להמיר גולשים פאסיביים ל"חמים", ע"י כך שהם *מגלים בעצמם* שיש צורך בליווי.

#### מבנה השאלון (7 שאלות) - פרטים מלאים:

**🔹 שאלה 1 – גיל הילד**

*סוג:* מידע בלבד (לא משפיע על הניקוד)

*אפשרויות:*
1. עד 6 חודשים
2. 6–12 חודשים
3. 1–2 שנים
4. 2–3.5 שנים

---

**🔹 שאלה 2 – זמן ההירדמות**

*טקסט השאלה:* "כמה זמן לוקח בדרך כלל להרדים את הילד מרגע שמתחילים?"

*אפשרויות + ניקוד:*
1. עד 15 דקות → **0 נק׳**
2. 15–30 דקות → **1 נק׳**
3. 30–45 דקות → **2 נק׳**
4. יותר מ־45 דקות → **3 נק׳**

---

**🔹 שאלה 3 – מספר התעוררויות בלילה**

*טקסט השאלה:* "כמה פעמים בממוצע הילד מתעורר בלילה?"

*אפשרויות + ניקוד:*
1. כמעט לא מתעורר → **0 נק׳**
2. 1–2 פעמים → **1 נק׳**
3. 3–4 פעמים → **2 נק׳**
4. 5 פעמים ומעלה → **3 נק׳**

---

**🔹 שאלה 4 – אופן החזרה לשינה**

*טקסט השאלה:* "כשהילד מתעורר בלילה – איך הוא חוזר לישון?"

*אפשרויות + ניקוד:*
1. נרדם לבד רוב הזמן → **0 נק׳**
2. צריך לפעמים עזרה (ליטופים/דיבורים) → **1 נק׳**
3. צריך הרבה עזרה (על הידיים, בקבוק, נדנוד וכו') → **2 נק׳**
4. צריך תמיד עזרה מלאה ולוקח זמן → **3 נק׳**

---

**🔹 שאלה 5 – השפעה על ההורים**

*טקסט השאלה:* "עד כמה אתם מרגישים שהשינה משפיעה עליכם ביום־יום?"

*אפשרויות + ניקוד:*
1. לא ממש משפיעה, מתמודדים בסדר → **0 נק׳**
2. יש ימים שקצת קשה, אבל שורדים → **1 נק׳**
3. מרגישים עייפות קבועה, משפיע על מצב רוח וסבלנות → **2 נק׳**
4. מרגישים מותשים, לפעמים "על הקצה" → **3 נק׳**

---

**🔹 שאלה 6 – מה כבר ניסיתם עד היום**

*טקסט השאלה:* "איזה צעדים ניסיתם כדי לשפר את המצב?"

*אפשרויות + ניקוד:*
1. לא ניסינו ממש, רק "זורמים" → **1 נק׳**
2. ניסינו טיפים מחברים/אינטרנט → **2 נק׳**
3. קראנו חומרים, ניסינו כמה שיטות → **2 נק׳**
4. ניסינו תהליך מסודר אבל זה לא עבד או לא התמדה → **3 נק׳**

---

**🔹 שאלה 7 – מוכנות להשקיע בתהליך שינוי**

*טקסט השאלה:* "עד כמה אתם מוכנים עכשיו להשקיע זמן ואנרגיה כדי לשפר את המצב?"

*אפשרויות + ניקוד:*
1. רק בודקים, לא בטוחים אם עכשיו הזמן → **0 נק׳**
2. מוכנים לשינוי קטן, לא משהו "קיצוני" → **1 נק׳**
3. מאוד רוצים שינוי, מוכנים להיות מחויבים לתהליך → **2 נק׳**
4. חייבים שינוי, מוכנים להשקיע בשביל זה → **3 נק׳**

#### חישוב תוצאה (Scoring Logic):

**אופן החישוב:**
מחברים את נקודות התשובות בשאלות 2–7 (שאלה 1 היא אינפורמטיבית בלבד ולא נכללת בחישוב).

**טווח ניקוד:**
- סך ניקוד מינימלי: **0 נקודות**
- סך ניקוד מקסימלי: **18 נקודות** (3+3+3+3+3+3)

**מיפוי לפרופילים:**

| Score | Tier | פרופיל                                     |
| ----- | ---- | ------------------------------------------ |
| 0–5   | 1    | רמת מצב 1 – "המצב יחסית מאוזן, נדרשות התאמות קלות" |
| 6–12  | 2    | רמת מצב 2 – "יש אתגרים משמעותיים אבל ניתנים לפתרון" |
| 13+   | 3    | רמת מצב 3 – "עומס גבוה מאוד – מומלץ ליווי צמוד" |

#### טקסטים מוכנים לכל תוצאה:

**Tier 1 – המצב יחסית טוב:**
- **Title**: 🌙 *המצב אצלכם די מאוזן – נשאר רק לחדד כמה הרגלים*
- **Summary**: שינת הלילה בבית יחסית מאוזנת, ויש רק נקודות לשיפור. שינוי קטן בהרגלים יכול להשפיע משמעותית.
- **CTA**:
  - כפתור: **קביעת שיחת ייעוץ חד־פעמית**
  - כפתור: **וואטסאפ לשאלה קצרה**

**Tier 2 – יש אתגרים משמעותיים:**
- **Title**: 😴 *יש לכם לא מעט אתגרים – אבל אתם במקום מצוין לשינוי*
- **Summary**: זמן ההרדמה והתעוררויות מצביעים על קושי אמיתי, אבל כזה שניתן לפתור עם תהליך קצר.
- **CTA**:
  - כפתור: **לקביעת שיחת היכרות**
  - כפתור: **וואטסאפ – אשמח לשמוע מה קורה אצלכם**

**Tier 3 – עומס גבוה:**
- **Title**: 💛 *אתם סוחבים הרבה – ולא חייבים להמשיך ככה לבד*
- **Summary**: המצב מצביע על עומס משמעותי ופגיעה באיכות החיים. ליווי אישי של 14–30 יום יעשה הבדל גדול.
- **CTA**:
  - כפתור: **שיחת היכרות ללא התחייבות**
  - כפתור: **שליחת הודעה בוואטסאפ**

#### דרישות UI/UX:

**כללי:**
- עיצוב רך, רגוע, נשי
- צבעים מהפלטה: תכלת #A8D8EA, לילך #CDB4DB, ורוד בהיר #F7CAD0, שמנת #F9F7F3
- אייקונים עדינים (ירח, ענן, לב קטן)
- טקסטים מיושרים לימין

**מבנה מסך השאלון:**
- Progress bar: "שאלה X מתוך 7"
- כפתורים גדולים לכל תשובה (minimal hover)
- אין טפסים – רק בחירה (radio/tiles)
- כפתור "הבא" פעיל רק אחרי בחירת תשובה
- כפתור "חזרה" אופציונלי

**מסך תוצאה:**
- כותרת גדולה
- תקציר קצר (2–4 שורות)
- תובנה עדינה אחת
- 2 כפתורי CTA גדולים (WhatsApp + Call/Booking)
- ללא "פסקאות מפחידות" — טון רגוע בלבד

#### דרישות טכניות:

**קומפוננטות:**
- `SleepAssessmentQuiz.tsx` – ראשי
- `QuizQuestion.tsx` – תצוגת שאלה
- `QuizResult.tsx` – תצוגת תוצאה
- `quizData.ts` – מערך השאלות + scoring map

**לוגיקה:**
- React state / useReducer
- אחסון ביניים: אין צורך ב-DB (השאלון אנונימי)
- אפשר לשלב שימור progress ב-localStorage (לא חובה)

**Performance:**
- ללא SSR חובה — אפשר CSR מלא
- חשוב שהשאלון ייטען מהר → הכל סטטי בקוד (אין API calls)

#### CTA Integration:

**וואטסאפ עם טקסט מותאם מראש לפי Tier:**

- **Tier 3 Text**: "היי ליאור, עשיתי את בדיקת השינה באתר ונראה שאנחנו במקום מאתגר. אשמח לשיחת היכרות."
- **Tier 2 Text**: "היי ליאור, עשיתי את בדיקת השינה. נראה שיש לנו כמה נקודות לשפר. אשמח לשמוע עוד."
- **Tier 1 Text**: "היי ליאור, עשיתי את בדיקת השינה. רוצה כיוונון קצר. פנויה לשיחה?"

#### שמירה ב-Supabase:

בתום השאלון (אם המשתמש מסכים):
1. חישוב score
2. קביעת tier
3. שמירת ליד ב-`/api/leads` עם:
   - `source: "sleep_quiz"`
   - `quiz_score: <score>`
   - `quiz_tier: <1/2/3>`
   - פרטים בסיסיים (שם, טלפון - אם ניתנו)
4. אופציונלי: שמירת תשובות מלאות ב-`/api/quiz-responses`

### ביצועים

#### תמונות:
- **Next.js Image** component.
- Optimization אוטומטי.
- Lazy loading.

#### Code Splitting:
- Dynamic imports אם צריך.
- Lazy loading של קומפוננטות כבדות.

#### Lighthouse Goals:
- **90+ במובייל** (Performance, Accessibility, Best Practices, SEO).

### אבטחה

#### חובה:
- **Sanitization** של כל הקלט מהמשתמש.
- **Rate limiting** בסיסי (API routes).
- **Honeypot** / **Turnstile** (אם נדרש).
- **סודות רק ב-ENV** - לא בקוד.

#### מומלץ:
- **CSP headers** (Content Security Policy).
- **HTTPS only** (בפרודקשן).

### ממשק מנהל (Admin Panel)

#### Stack:
- **Next.js App Router** עם route protection
- **Supabase Auth** להרשאות
- **Server Components** + **Client Components** (לחלקים אינטראקטיביים)
- **React Hook Form** לטפסים
- **Rich Text Editor** (Tiptap או React Quill) לעריכת תוכן

#### אבטחה:
- **Middleware** לבדיקת authentication על כל `/admin/*`
- **Role-based access control** (RBAC)
- **CSRF protection**
- **Rate limiting** על API routes

#### UI/UX:
- עיצוב נקי ומינימליסטי
- Responsive (גם במובייל)
- טבלאות עם pagination
- חיפוש וסינון מתקדמים
- הודעות הצלחה/שגיאה ברורות

### i18n עתידי

- מבנה שמאפשר להוסיף אנגלית בהמשך.
- **לא לממש עכשיו**, רק להכין את המבנה:
  - הפרדת טקסטים לקובץ translations.
  - שימוש ב-next-intl או i18next (אם רלוונטי).

---

## Tone / מיקרו־קופי

### שפה כללית:
- **אמפתית**: "זה יכול להשתפר", "יש פתרון".
- **בלי שיפוטיות**: לא לשפוט הורים.
- **בלי ניסוח רפואי/קליני**: שפה פשוטה ונגישה.

### CTA Examples:
- "בואי נדבר 10 דקות ונראה אם זה מתאים"
- "קבעי שיחת אבחון חינם"
- "בואי נדבר בוואטסאפ"

### הודעות שגיאה:
- "נראה שחסר משהו בטופס, בואי נבדוק יחד"
- "יש בעיה קטנה, נסי שוב בעוד רגע"

### הודעות הצלחה:
- "תודה! קיבלתי את ההודעה ואחזור אלייך בהקדם"
- "מעולה! עכשיו אפשר להמשיך לוואטסאפ"

---

## מבנה דאטא בייס (Supabase)

### סקירה כללית

הדאטא בייס יכלול את הטבלאות הבאות:
1. **leads** - לידים מהטופס יצירת קשר + משאלון בדיקת שינה
2. **quiz_responses** - תשובות גולמיות מהשאלון (אופציונלי)
3. **blog_posts** - מאמרי הבלוג
4. **blog_categories** - קטגוריות לבלוג
5. **blog_tags** - תגיות לבלוג
6. **blog_post_tags** - טבלת קשר בין פוסטים לתגיות (many-to-many)
7. **testimonials** - המלצות (כתובות + וידאו)

### פקודות SQL ליצירת הטבלאות

#### 1. טבלת לידים (leads)

```sql
-- יצירת טבלת לידים
CREATE TABLE IF NOT EXISTS public.leads (
  id UUID DEFAULT gen_random_uuid() PRIMARY KEY,
  name VARCHAR(255) NOT NULL,
  phone VARCHAR(20) NOT NULL,
  child_age VARCHAR(50),
  message TEXT,
  source VARCHAR(50) DEFAULT 'contact_form' CHECK (source IN ('contact_form', 'sleep_quiz')),
  quiz_score INTEGER,
  quiz_tier INTEGER CHECK (quiz_tier IN (1, 2, 3)),
  ip_address INET,
  user_agent TEXT,
  created_at TIMESTAMP WITH TIME ZONE DEFAULT NOW(),
  updated_at TIMESTAMP WITH TIME ZONE DEFAULT NOW(),
  status VARCHAR(50) DEFAULT 'new' CHECK (status IN ('new', 'contacted', 'converted', 'archived'))
);

-- יצירת אינדקסים לביצועים
CREATE INDEX IF NOT EXISTS idx_leads_created_at ON public.leads(created_at DESC);
CREATE INDEX IF NOT EXISTS idx_leads_status ON public.leads(status);
CREATE INDEX IF NOT EXISTS idx_leads_phone ON public.leads(phone);

-- פונקציה לעדכון updated_at אוטומטית
CREATE OR REPLACE FUNCTION update_updated_at_column()
RETURNS TRIGGER AS $$
BEGIN
  NEW.updated_at = NOW();
  RETURN NEW;
END;
$$ LANGUAGE plpgsql;

-- טריגר לעדכון updated_at
CREATE TRIGGER update_leads_updated_at
  BEFORE UPDATE ON public.leads
  FOR EACH ROW
  EXECUTE FUNCTION update_updated_at_column();

-- RLS (Row Level Security) - רק authenticated users יכולים לקרוא
ALTER TABLE public.leads ENABLE ROW LEVEL SECURITY;

-- Policy: רק authenticated users יכולים לקרוא
CREATE POLICY "Authenticated users can read leads"
  ON public.leads
  FOR SELECT
  TO authenticated
  USING (true);

-- Policy: Service role יכול לעשות הכל (לשימוש ב-API)
-- זה יוגדר דרך service_role key, לא דרך RLS
```

#### 2. טבלת תשובות שאלון (quiz_responses) - אופציונלי

לשמור את התשובות הגולמיות מהשאלון (למי שירצה ניתוחים בהמשך).

```sql
-- יצירת טבלת תשובות שאלון
CREATE TABLE IF NOT EXISTS public.quiz_responses (
  id UUID DEFAULT gen_random_uuid() PRIMARY KEY,
  lead_id UUID REFERENCES public.leads(id) ON DELETE CASCADE,
  question_index INTEGER NOT NULL,
  answer_value TEXT NOT NULL,
  answer_score INTEGER NOT NULL,
  created_at TIMESTAMP WITH TIME ZONE DEFAULT NOW()
);

-- יצירת אינדקסים
CREATE INDEX IF NOT EXISTS idx_quiz_responses_lead_id ON public.quiz_responses(lead_id);
CREATE INDEX IF NOT EXISTS idx_quiz_responses_created_at ON public.quiz_responses(created_at DESC);

-- RLS - רק authenticated users יכולים לקרוא (לשימוש ב-admin panel)
ALTER TABLE public.quiz_responses ENABLE ROW LEVEL SECURITY;

CREATE POLICY "Authenticated users can read quiz responses"
  ON public.quiz_responses
  FOR SELECT
  TO authenticated
  USING (true);

-- Policy: Service role יכול לעשות הכל (לשימוש ב-API)
-- זה יוגדר דרך service_role key, לא דרך RLS
```

**הערה:** אם לא רוצים לשמור תשובות מלאות — ניתן להשאיר טבלה זו לבחירה מאוחרת.

#### 3. טבלת קטגוריות בלוג (blog_categories)

```sql
-- יצירת טבלת קטגוריות
CREATE TABLE IF NOT EXISTS public.blog_categories (
  id UUID DEFAULT gen_random_uuid() PRIMARY KEY,
  name_he VARCHAR(255) NOT NULL UNIQUE,
  name_en VARCHAR(255),
  slug VARCHAR(255) NOT NULL UNIQUE,
  description TEXT,
  created_at TIMESTAMP WITH TIME ZONE DEFAULT NOW()
);

-- יצירת אינדקס
CREATE INDEX IF NOT EXISTS idx_blog_categories_slug ON public.blog_categories(slug);

-- הכנסת קטגוריות בסיסיות
INSERT INTO public.blog_categories (name_he, slug, description) VALUES
  ('התעוררויות', 'wake-ups', 'מאמרים על התעוררויות בלילה'),
  ('הרדמות', 'bedtime', 'מאמרים על תהליך ההרדמה'),
  ('גמילה', 'weaning', 'מאמרים על גמילה משינה'),
  ('שינה רציפה', 'continuous-sleep', 'מאמרים על שינה רציפה')
ON CONFLICT (slug) DO NOTHING;
```

#### 4. טבלת תגיות בלוג (blog_tags)

```sql
-- יצירת טבלת תגיות
CREATE TABLE IF NOT EXISTS public.blog_tags (
  id UUID DEFAULT gen_random_uuid() PRIMARY KEY,
  name_he VARCHAR(255) NOT NULL UNIQUE,
  name_en VARCHAR(255),
  slug VARCHAR(255) NOT NULL UNIQUE,
  created_at TIMESTAMP WITH TIME ZONE DEFAULT NOW()
);

-- יצירת אינדקס
CREATE INDEX IF NOT EXISTS idx_blog_tags_slug ON public.blog_tags(slug);
```

#### 5. טבלת מאמרי בלוג (blog_posts)

```sql
-- יצירת טבלת מאמרים
CREATE TABLE IF NOT EXISTS public.blog_posts (
  id UUID DEFAULT gen_random_uuid() PRIMARY KEY,
  title_he VARCHAR(500) NOT NULL,
  title_en VARCHAR(500),
  slug VARCHAR(500) NOT NULL UNIQUE,
  excerpt_he TEXT,
  excerpt_en TEXT,
  content_he TEXT NOT NULL,
  content_en TEXT,
  featured_image_url TEXT,
  category_id UUID REFERENCES public.blog_categories(id) ON DELETE SET NULL,
  author_name VARCHAR(255) DEFAULT 'ליאור',
  published BOOLEAN DEFAULT false,
  published_at TIMESTAMP WITH TIME ZONE,
  created_at TIMESTAMP WITH TIME ZONE DEFAULT NOW(),
  updated_at TIMESTAMP WITH TIME ZONE DEFAULT NOW(),
  meta_title_he VARCHAR(500),
  meta_title_en VARCHAR(500),
  meta_description_he TEXT,
  meta_description_en TEXT,
  meta_keywords_he TEXT,
  meta_keywords_en TEXT,
  view_count INTEGER DEFAULT 0
);

-- יצירת אינדקסים
CREATE INDEX IF NOT EXISTS idx_blog_posts_slug ON public.blog_posts(slug);
CREATE INDEX IF NOT EXISTS idx_blog_posts_published ON public.blog_posts(published, published_at DESC);
CREATE INDEX IF NOT EXISTS idx_blog_posts_category ON public.blog_posts(category_id);
CREATE INDEX IF NOT EXISTS idx_blog_posts_created_at ON public.blog_posts(created_at DESC);

-- טריגר לעדכון updated_at
CREATE TRIGGER update_blog_posts_updated_at
  BEFORE UPDATE ON public.blog_posts
  FOR EACH ROW
  EXECUTE FUNCTION update_updated_at_column();

-- RLS - כל אחד יכול לקרוא מאמרים שפורסמו
ALTER TABLE public.blog_posts ENABLE ROW LEVEL SECURITY;

CREATE POLICY "Anyone can read published posts"
  ON public.blog_posts
  FOR SELECT
  TO public
  USING (published = true AND published_at <= NOW());

-- רק authenticated users יכולים לערוך
CREATE POLICY "Authenticated users can manage posts"
  ON public.blog_posts
  FOR ALL
  TO authenticated
  USING (true)
  WITH CHECK (true);
```

#### 6. טבלת קשר פוסטים-תגיות (blog_post_tags)

```sql
-- יצירת טבלת קשר many-to-many
CREATE TABLE IF NOT EXISTS public.blog_post_tags (
  post_id UUID REFERENCES public.blog_posts(id) ON DELETE CASCADE,
  tag_id UUID REFERENCES public.blog_tags(id) ON DELETE CASCADE,
  PRIMARY KEY (post_id, tag_id)
);

-- יצירת אינדקסים
CREATE INDEX IF NOT EXISTS idx_blog_post_tags_post ON public.blog_post_tags(post_id);
CREATE INDEX IF NOT EXISTS idx_blog_post_tags_tag ON public.blog_post_tags(tag_id);

-- RLS
ALTER TABLE public.blog_post_tags ENABLE ROW LEVEL SECURITY;

CREATE POLICY "Anyone can read post tags"
  ON public.blog_post_tags
  FOR SELECT
  TO public
  USING (true);

CREATE POLICY "Authenticated users can manage post tags"
  ON public.blog_post_tags
  FOR ALL
  TO authenticated
  USING (true)
  WITH CHECK (true);
```

#### 7. טבלת מסלולים/חבילות (programs)

```sql
-- יצירת טבלת מסלולים
CREATE TABLE IF NOT EXISTS public.programs (
  id UUID DEFAULT gen_random_uuid() PRIMARY KEY,
  name_he VARCHAR(255) NOT NULL,
  name_en VARCHAR(255),
  slug VARCHAR(255) NOT NULL UNIQUE,
  description_he TEXT NOT NULL,
  description_en TEXT,
  features_he TEXT[], -- Array of features
  features_en TEXT[],
  price DECIMAL(10, 2), -- NULL אם לא רוצים להציג מחיר
  duration_days INTEGER, -- 14 או 30
  includes_whatsapp BOOLEAN DEFAULT false,
  image_url TEXT,
  icon_url TEXT,
  display_order INTEGER DEFAULT 0,
  active BOOLEAN DEFAULT true,
  created_at TIMESTAMP WITH TIME ZONE DEFAULT NOW(),
  updated_at TIMESTAMP WITH TIME ZONE DEFAULT NOW()
);

-- יצירת אינדקסים
CREATE INDEX IF NOT EXISTS idx_programs_slug ON public.programs(slug);
CREATE INDEX IF NOT EXISTS idx_programs_active ON public.programs(active, display_order);

-- טריגר לעדכון updated_at
CREATE TRIGGER update_programs_updated_at
  BEFORE UPDATE ON public.programs
  FOR EACH ROW
  EXECUTE FUNCTION update_updated_at_column();

-- RLS - כל אחד יכול לקרוא מסלולים פעילים
ALTER TABLE public.programs ENABLE ROW LEVEL SECURITY;

CREATE POLICY "Anyone can read active programs"
  ON public.programs
  FOR SELECT
  TO public
  USING (active = true);

-- רק authenticated users יכולים לערוך
CREATE POLICY "Authenticated users can manage programs"
  ON public.programs
  FOR ALL
  TO authenticated
  USING (true)
  WITH CHECK (true);
```

#### 8. טבלת מנהלים (admin_users)

```sql
-- יצירת טבלת מנהלים (משתמש ב-Supabase Auth, אבל שומרים metadata כאן)
CREATE TABLE IF NOT EXISTS public.admin_users (
  id UUID REFERENCES auth.users(id) ON DELETE CASCADE PRIMARY KEY,
  email VARCHAR(255) NOT NULL UNIQUE,
  full_name VARCHAR(255),
  role VARCHAR(50) DEFAULT 'admin' CHECK (role IN ('admin', 'editor')),
  created_at TIMESTAMP WITH TIME ZONE DEFAULT NOW(),
  last_login TIMESTAMP WITH TIME ZONE,
  active BOOLEAN DEFAULT true
);

-- יצירת אינדקס
CREATE INDEX IF NOT EXISTS idx_admin_users_email ON public.admin_users(email);
CREATE INDEX IF NOT EXISTS idx_admin_users_active ON public.admin_users(active);

-- RLS - רק authenticated users יכולים לקרוא את עצמם
ALTER TABLE public.admin_users ENABLE ROW LEVEL SECURITY;

CREATE POLICY "Users can read their own admin profile"
  ON public.admin_users
  FOR SELECT
  TO authenticated
  USING (auth.uid() = id);
```

#### 9. טבלת הערות ללידים (lead_notes)

```sql
-- יצירת טבלת הערות פנימיות ללידים
CREATE TABLE IF NOT EXISTS public.lead_notes (
  id UUID DEFAULT gen_random_uuid() PRIMARY KEY,
  lead_id UUID REFERENCES public.leads(id) ON DELETE CASCADE,
  admin_user_id UUID REFERENCES public.admin_users(id) ON DELETE SET NULL,
  note TEXT NOT NULL,
  created_at TIMESTAMP WITH TIME ZONE DEFAULT NOW()
);

-- יצירת אינדקס
CREATE INDEX IF NOT EXISTS idx_lead_notes_lead_id ON public.lead_notes(lead_id);
CREATE INDEX IF NOT EXISTS idx_lead_notes_created_at ON public.lead_notes(created_at DESC);

-- RLS - רק authenticated users יכולים לקרוא/לכתוב
ALTER TABLE public.lead_notes ENABLE ROW LEVEL SECURITY;

CREATE POLICY "Authenticated users can manage lead notes"
  ON public.lead_notes
  FOR ALL
  TO authenticated
  USING (true)
  WITH CHECK (true);
```

#### 10. טבלת המלצות (testimonials)

```sql
-- יצירת טבלת המלצות
CREATE TABLE IF NOT EXISTS public.testimonials (
  id UUID DEFAULT gen_random_uuid() PRIMARY KEY,
  name VARCHAR(255) NOT NULL,
  child_age VARCHAR(50),
  testimonial_text TEXT NOT NULL,
  video_url TEXT,
  video_thumbnail_url TEXT,
  rating INTEGER CHECK (rating >= 1 AND rating <= 5),
  featured BOOLEAN DEFAULT false,
  display_order INTEGER DEFAULT 0,
  created_at TIMESTAMP WITH TIME ZONE DEFAULT NOW(),
  published BOOLEAN DEFAULT true
);

-- יצירת אינדקסים
CREATE INDEX IF NOT EXISTS idx_testimonials_featured ON public.testimonials(featured, display_order);
CREATE INDEX IF NOT EXISTS idx_testimonials_published ON public.testimonials(published);
CREATE INDEX IF NOT EXISTS idx_testimonials_created_at ON public.testimonials(created_at DESC);

-- RLS - כל אחד יכול לקרוא המלצות שפורסמו
ALTER TABLE public.testimonials ENABLE ROW LEVEL SECURITY;

CREATE POLICY "Anyone can read published testimonials"
  ON public.testimonials
  FOR SELECT
  TO public
  USING (published = true);

-- רק authenticated users יכולים לערוך
CREATE POLICY "Authenticated users can manage testimonials"
  ON public.testimonials
  FOR ALL
  TO authenticated
  USING (true)
  WITH CHECK (true);
```

### פונקציות שימושיות נוספות

#### פונקציה לחיפוש מאמרים

```sql
-- פונקציה לחיפוש מאמרים (full-text search)
CREATE OR REPLACE FUNCTION search_blog_posts(search_query TEXT)
RETURNS TABLE (
  id UUID,
  title_he VARCHAR,
  slug VARCHAR,
  excerpt_he TEXT,
  published_at TIMESTAMP WITH TIME ZONE,
  category_name VARCHAR
) AS $$
BEGIN
  RETURN QUERY
  SELECT 
    bp.id,
    bp.title_he,
    bp.slug,
    bp.excerpt_he,
    bp.published_at,
    bc.name_he as category_name
  FROM public.blog_posts bp
  LEFT JOIN public.blog_categories bc ON bp.category_id = bc.id
  WHERE 
    bp.published = true 
    AND bp.published_at <= NOW()
    AND (
      bp.title_he ILIKE '%' || search_query || '%'
      OR bp.content_he ILIKE '%' || search_query || '%'
      OR bp.excerpt_he ILIKE '%' || search_query || '%'
    )
  ORDER BY bp.published_at DESC;
END;
$$ LANGUAGE plpgsql;
```

#### פונקציה לקבלת מאמרים לפי קטגוריה

```sql
-- פונקציה לקבלת מאמרים לפי קטגוריה
CREATE OR REPLACE FUNCTION get_posts_by_category(category_slug VARCHAR)
RETURNS TABLE (
  id UUID,
  title_he VARCHAR,
  slug VARCHAR,
  excerpt_he TEXT,
  featured_image_url TEXT,
  published_at TIMESTAMP WITH TIME ZONE
) AS $$
BEGIN
  RETURN QUERY
  SELECT 
    bp.id,
    bp.title_he,
    bp.slug,
    bp.excerpt_he,
    bp.featured_image_url,
    bp.published_at
  FROM public.blog_posts bp
  JOIN public.blog_categories bc ON bp.category_id = bc.id
  WHERE 
    bc.slug = category_slug
    AND bp.published = true
    AND bp.published_at <= NOW()
  ORDER BY bp.published_at DESC;
END;
$$ LANGUAGE plpgsql;
```

### הערות חשובות

1. **RLS (Row Level Security)**: 
   - טבלת `leads` - רק authenticated users יכולים לקרוא (לשימוש ב-admin panel עתידי)
   - טבלאות `blog_posts` ו-`testimonials` - כל אחד יכול לקרוא רק מה שפורסם
   - לשימוש ב-API routes, יש להשתמש ב-service_role key (לא דרך RLS)

2. **Indexes**: 
   - כל הטבלאות כוללות אינדקסים על שדות שמשמשים לחיפוש/סינון
   - חשוב לביצועים טובים

3. **Foreign Keys**: 
   - כל ה-foreign keys מוגדרים עם `ON DELETE CASCADE` או `ON DELETE SET NULL` לפי הצורך

4. **Timestamps**: 
   - כל הטבלאות כוללות `created_at` ו-`updated_at`
   - `updated_at` מתעדכן אוטומטית דרך trigger

5. **i18n עתידי**: 
   - כל הטבלאות כוללות שדות בעברית (`_he`) ואנגלית (`_en`)
   - כרגע רק העברית בשימוש, אבל המבנה מוכן להוספת אנגלית

### דוגמאות לשאילתות שימושיות

```sql
-- קבלת כל הלידים החדשים
SELECT * FROM public.leads 
WHERE status = 'new' 
ORDER BY created_at DESC;

-- קבלת כל המאמרים שפורסמו
SELECT bp.*, bc.name_he as category_name
FROM public.blog_posts bp
LEFT JOIN public.blog_categories bc ON bp.category_id = bc.id
WHERE bp.published = true AND bp.published_at <= NOW()
ORDER BY bp.published_at DESC;

-- קבלת מאמרים לפי תגית
SELECT bp.*
FROM public.blog_posts bp
JOIN public.blog_post_tags bpt ON bp.id = bpt.post_id
JOIN public.blog_tags bt ON bpt.tag_id = bt.id
WHERE bt.slug = 'wake-ups' AND bp.published = true
ORDER BY bp.published_at DESC;

-- קבלת המלצות מומלצות
SELECT * FROM public.testimonials
WHERE featured = true AND published = true
ORDER BY display_order ASC, created_at DESC;
```

---

## API Routes – Next.js (Server Actions / Route Handlers)

כל הכתיבות ל-Supabase יתבצעו דרך השרת בלבד, בשום אופן לא בצד לקוח.

### יצירת ליד חדש

`POST /api/leads`

**Body שמגיע מהטופס או מהשאלון:**

```json
{
  "name": "string",
  "phone": "string",
  "child_age": "string",
  "message": "string",
  "source": "contact_form | sleep_quiz",
  "quiz_score": 12,
  "quiz_tier": 2
}
```

**התנהגות:**
1. ולידציה בסיסית בצד השרת
2. שמירה ב-Supabase via service role
3. החזרת `{ success: true, lead_id: "uuid" }`

### שמירת תשובות שאלון (אם בחרנו כן לשמור)

`POST /api/quiz-responses`

**Body:**

```json
{
  "lead_id": "uuid",
  "responses": [
    { "question_index": 1, "answer_value": "30-45 דקות", "answer_score": 2 },
    { "question_index": 2, "answer_value": "3-4 פעמים", "answer_score": 2 }
  ]
}
```

**התנהגות:**
1. ולידציה של lead_id
2. שמירת כל התשובות ב-Supabase
3. החזרת `{ success: true }`

### אבטחה – Policies בסיסיים

**גישה ל-leads:**

מאחר ורק השרת צריך לקרוא/לכתוב:

* **insert:** רק service role
* **select:** disabled (אלא אם יוקם dashboard מאחורי auth)
* **update/delete:** disabled

**מדיניות רולז מוצעת:**

```sql
-- Disable all public access
ALTER TABLE leads ENABLE ROW LEVEL SECURITY;

-- No anonymous read
CREATE POLICY "deny read to anon" 
ON leads FOR SELECT 
TO public USING (false);

-- Allow inserts only via service role
-- זה יוגדר דרך service_role key, לא דרך RLS
```

**גישה ל-quiz_responses:**

* **insert:** רק service role
* **select:** רק authenticated users (לשימוש ב-admin panel)

### Environment Variables הדרושים

```env
# Supabase Configuration
NEXT_PUBLIC_SUPABASE_URL=https://bgvpqetnqhurexizurma.supabase.co
NEXT_PUBLIC_SUPABASE_ANON_KEY=sb_publishable_fMu6JNILi9IjKihGjxuS5A_L3nTCejk

# Service Role Key (רק בצד השרת!)
SUPABASE_SERVICE_ROLE_KEY=<THIS_STAYS ONLY ON SERVER>
```

⚠ **חשוב:**
ה-Service Role Key לעולם לא ייחשף בדפדפן ולא בקוד פומבי.
הוא ישב רק בפונקציות שרת ב-Vercel.

### אינטגרציה ב-Next.js

**צד לקוח:**
* טפסים ושאלון שולחים fetch ל-API routes בלבד.
* אין גישה ישירה ל-Supabase מהדפדפן (למעט קריאות ציבוריות – לא רלוונטי פה).

**צד שרת:**
* הגדרת client של Supabase ב-`/lib/supabaseServerClient.ts`
* שימוש ב-service role key רק בצד השרת
* כתיבה בטוחה לטבלאות

### לוגיקה של שאלון (חלק של Supabase)

בתום השאלון:

1. חישוב score
2. קביעת tier
3. קריאה ל-POST `/api/leads`
4. אופציונלי: קריאה ל-POST `/api/quiz-responses`
5. הצגת תוצאה + CTA

### אירועי אנליטיקס (משולב PRD)

יש לשלב GA4 + Pixel ב-API Routes / Components:

* `lead_created`
* `sleep_quiz_started`
* `sleep_quiz_completed`
* `sleep_quiz_tier_1/2/3`
* `sleep_quiz_contact_form`
* `sleep_quiz_whatsapp_click`

---

## ENV Template

```env
# Supabase Configuration
NEXT_PUBLIC_SUPABASE_URL=https://bgvpqetnqhurexizurma.supabase.co
NEXT_PUBLIC_SUPABASE_ANON_KEY=sb_publishable_fMu6JNILi9IjKihGjxuS5A_L3nTCejk

# Service Role Key (רק בצד השרת - לעולם לא ב-client!)
SUPABASE_SERVICE_ROLE_KEY=<THIS_STAYS ONLY ON SERVER>

# Application Configuration
NEXT_PUBLIC_APP_NAME="Lior Sleep Consultant"
NEXT_PUBLIC_BASE_URL=http://localhost:3000

# WhatsApp Configuration
NEXT_PUBLIC_WHATSAPP_PHONE=<PUT_PHONE_NUMBER_HERE>
NEXT_PUBLIC_WHATSAPP_MESSAGE="שלום, אני מעוניינת במידע על ייעוץ שינה"

# Analytics (Placeholders - עדיין אין)
NEXT_PUBLIC_GA4_MEASUREMENT_ID=<GA_ID_HERE>
NEXT_PUBLIC_META_PIXEL_ID=<PIXEL_ID_HERE>

# Email (SMTP)
SMTP_HOST=<SMTP_HOST>
SMTP_USER=<SMTP_USER>
SMTP_PASS=<SMTP_PASS>
SMTP_PORT=587
EMAIL_TO=easydevil227@gmail.com

# Calendly (Optional)
NEXT_PUBLIC_CALENDLY_URL=<PUT_CALENDLY_URL_HERE>

# Rate Limiting
RATE_LIMIT_MAX_REQUESTS=3
RATE_LIMIT_WINDOW_MS=60000
```

### הערות חשובות ל-ENV:
- **Supabase**: 
  - `NEXT_PUBLIC_SUPABASE_ANON_KEY` - לשימוש בצד לקוח (קריאות ציבוריות בלבד)
  - `SUPABASE_SERVICE_ROLE_KEY` - **רק בצד השרת**, לעולם לא ב-client!
- **Email**: SMTP רגיל (לא Resend)
- **Leads Storage**: Supabase בלבד (לא Google Sheets)
- **Analytics**: עדיין אין מזהים - להשתמש ב-placeholders

---

## תוכנית עבודה (Phases)

### Phase 0 — תשתית והכנות (יום 0–1)

#### 0.1 איסוף חומרים
- לוגו/שם מותג סופי
- תמונות (Headshots + תמונות אווירה)
- המלצות (15–25 כתובות + 3 וידאו)
- תעודות/הכשרות
- ניסוח "השיטה" (לילה טוב)
- פרטי יצירת קשר

#### 0.2 החלטות מוצר
- דפי האתר הסופיים (אישור Sitemap)
- כלי קביעת שיחה (Calendly vs Google Calendar)
- יעד CTA (מה ה-CTA הראשי)

#### 0.3 חיבורים
- גישה לדומיין (DNS)
- גישה לאחסון (אם לא Vercel)
- GA4 (יצירת property + Measurement ID)
- Meta Pixel (יצירת pixel + ID)
- Calendly (יצירת account + URL)

---

### Phase 1 — אפיון UX + היררכיית תוכן (יום 1–2)

#### 1.1 Sitemap + מסלול משתמש
- מפת אתר סופית
- User flows (מסלולי משתמש):
  - הורה שמחפש מידע → בלוג → טופס
  - הורה שממהר → וואטסאפ
  - הורה שמתלבט → קביעת שיחה

#### 1.2 Wireframe (שלד)
- Wireframe למובייל קודם
- אחר כך לטאבלט ודסקטופ
- Focus על Hero, CTA, Navigation

#### 1.3 כתיבת מיקרו־קופי
- כפתורים (CTA)
- טפסים (labels, placeholders, errors)
- הודעות הצלחה/שגיאה
- Navigation items

#### 1.4 תכנון בלוג
- קטגוריות (התעוררויות, הרדמות, גמילה, שינה רציפה)
- תגיות
- תבנית מאמר (structure)
- FAQ sections

---

### Phase 2 — עיצוב פרימיום (יום 2–4)

#### 2.1 Design Tokens
- צבעים (פלטה מלאה)
- מרווחים (spacing scale)
- רדיוסים (border-radius)
- צללים (shadows)
- אייקונים (SVG library)

#### 2.2 רכיבי UI
- כפתורים (primary, secondary, WhatsApp)
- כרטיס מסלול (Program card)
- FAQ accordion
- Testimonial card (כתוב + וידאו)
- Footer
- Navigation (mobile + desktop)

#### 2.3 עיצוב מסכים
- Home (Hero, About preview, Method preview, Programs, Testimonials, CTA)
- About
- Method ("לילה טוב")
- Programs/Packages
- Testimonials
- Blog (List)
- Blog Post
- Contact

#### 2.4 בדיקת נגישות
- צבע/קונטרסט (WCAG AA)
- פונטים (קריאות)
- Focus states
- Screen reader testing

---

### Phase 3 — פיתוח (יום 4–9)

#### 3.1 הקמת פרויקט
- Next.js 14+ (App Router)
- TypeScript
- Tailwind CSS
- RTL support
- ESLint + Prettier

#### 3.2 בניית קומפוננטות בסיס
- Layout (Header, Footer)
- Navigation (Mobile menu)
- Sticky buttons (WhatsApp + CTA)
- Design system components

#### 3.3 בניית עמודים
- **Home**: עמוד נחיתה ארוך ממיר
- **About**: אודות ליאור
- **Method**: השיטה "לילה טוב"
- **Programs**: מסלולים (פרימיום, פרימיום+)
- **Testimonials**: המלצות (כתובות + וידאו)
- **Blog**: רשימת פוסטים (עם חיפוש/תגיות)
- **Blog Post**: עמוד מאמר דינמי
- **Contact**: טופס יצירת קשר
- **Privacy Policy**: מדיניות פרטיות
- **Terms**: תנאי שימוש
- **Accessibility Statement**: הצהרת נגישות

#### 3.4 טופס לידים
- API route (`/api/contact`)
- ולידציה (client + server)
- אנטי־ספאם (Honeypot + Rate limit)
- שליחה למייל (Resend/SMTP)
- שמירה ב-DB (Supabase/Sheet)
- הודעת הצלחה + CTA לוואטסאפ

#### 3.8 ממשק מנהל (Admin Panel)
- **Authentication**: Supabase Auth (login/logout)
- **Route Protection**: Middleware לבדיקת auth על `/admin/*`
- **Dashboard**: סטטיסטיקות ולידים אחרונים
- **ניהול לידים**: רשימה, סינון, עדכון סטטוס, ייצוא
- **ניהול בלוג**: CRUD מלא למאמרים, קטגוריות, תגיות
- **ניהול המלצות**: CRUD מלא
- **ניהול מסלולים**: CRUD מלא
- **הגדרות**: עדכון פרטי יצירת קשר, Calendly, וכו'

#### 3.5 Calendly Integration
- Embed בעמוד ייעודי
- CTA ברחבי האתר
- מעקב אירועים (`book_call_click`)

#### 3.6 SEO מלא
- Metadata לכל דף
- OG tags
- `sitemap.xml` (דינמי)
- `robots.txt`
- Schema.org:
  - ProfessionalService
  - FAQ
  - Article
  - Person

#### 3.7 ביצועים
- Image optimization
- Lazy loading
- Code splitting
- Lighthouse optimization (90+)

---

### Phase 4 — QA + השקה (יום 9–10)

#### 4.1 בדיקות מובייל
- iPhone (Safari)
- Android (Chrome)
- טאבלט
- דפדפנים (Chrome, Firefox, Safari, Edge)

#### 4.2 בדיקות פונקציונליות
- טופס (ולידציה, שליחה, הודעות)
- Calendly (embed, CTA)
- פיקסלים (GA4, Meta Pixel)
- אנליטיקס (events tracking)

#### 4.3 חיבור דומיין
- DNS configuration
- SSL certificate
- Vercel/אחסון setup

#### 4.4 העלאה לפרודקשן
- Build check
- Environment variables
- Search Console setup
- Final testing

---

### Phase 5 — לאחר השקה (שוטף)

#### 5.1 בלוג
- תבנית כתיבת מאמר
- העלאת 3 מאמרים ראשונים
- SEO optimization לכל מאמר

#### 5.2 דוח 30 יום
- מדדים (GA4, Meta Pixel)
- שיפורי המרה
- A/B testing (אם נדרש) - כותרת/CTA

---

## הערות נוספות

### עדיפויות
1. **Mobile-first** - הכל חייב לעבוד מושלם במובייל.
2. **ביצועים** - אתר מהיר = יותר המרות.
3. **נגישות** - לא רק חובה, גם טוב ל-SEO.
4. **SEO** - בלוג + metadata = יותר טראפיק אורגני.

### נקודות תשומת לב
- **לא לפרסם מחירים** (לפי בקשת הלקוחה), אבל כן להציג מסלולים ברור.
- **טופס הוא משני** - CTA הראשי הוא קביעת שיחה + וואטסאפ.
- **אווירה עדינה** - לא יותר מדי אלמנטים, רק מה שמוסיף.
- **שפה אמפתית** - חשוב מאוד לקהל היעד.

---

## אישורים נדרשים

לפני תחילת פיתוח, יש לאשר:
- [ ] Sitemap סופי
- [ ] פלטת צבעים
- [ ] כלי קביעת שיחה (Calendly/Google Calendar)
- [ ] כלי שמירת לידים (Supabase/Google Sheet)
- [ ] כלי שליחת מייל (Resend/SMTP)
- [ ] גישה ל-GA4 + Meta Pixel
- [ ] גישה לדומיין + אחסון
- [ ] ממשק מנהל - אישור דרישות ופונקציונליות
- [ ] פרטי התחברות למנהל (מייל + סיסמה ראשונית)

---

**תאריך יצירה:** 2024  
**גרסה:** 1.0  
**סטטוס:** מוכן לפיתוח


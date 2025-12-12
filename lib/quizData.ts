export interface QuizAnswer {
  text: string;
  score: number;
}

export interface QuizQuestion {
  id: number;
  text: string;
  answers: QuizAnswer[];
  isInformational?: boolean; // שאלה 1 היא אינפורמטיבית בלבד
}

export interface QuizResult {
  tier: 1 | 2 | 3;
  title: string;
  summary: string;
  whatsappMessage: string;
  ctaText: {
    whatsapp: string;
    call: string;
  };
}

export const quizQuestions: QuizQuestion[] = [
  {
    id: 1,
    text: 'גיל הילד',
    isInformational: true,
    answers: [
      { text: 'עד 6 חודשים', score: 0 },
      { text: '6–12 חודשים', score: 0 },
      { text: '1–2 שנים', score: 0 },
      { text: '2–3.5 שנים', score: 0 },
    ],
  },
  {
    id: 2,
    text: 'כמה זמן לוקח בדרך כלל להרדים את הילד מרגע שמתחילים?',
    answers: [
      { text: 'עד 15 דקות', score: 0 },
      { text: '15–30 דקות', score: 1 },
      { text: '30–45 דקות', score: 2 },
      { text: 'יותר מ־45 דקות', score: 3 },
    ],
  },
  {
    id: 3,
    text: 'כמה פעמים בממוצע הילד מתעורר בלילה?',
    answers: [
      { text: 'כמעט לא מתעורר', score: 0 },
      { text: '1–2 פעמים', score: 1 },
      { text: '3–4 פעמים', score: 2 },
      { text: '5 פעמים ומעלה', score: 3 },
    ],
  },
  {
    id: 4,
    text: 'כשהילד מתעורר בלילה – איך הוא חוזר לישון?',
    answers: [
      { text: 'נרדם לבד רוב הזמן', score: 0 },
      { text: 'צריך לפעמים עזרה (ליטופים/דיבורים)', score: 1 },
      { text: 'צריך הרבה עזרה (על הידיים, בקבוק, נדנוד וכו\')', score: 2 },
      { text: 'צריך תמיד עזרה מלאה ולוקח זמן', score: 3 },
    ],
  },
  {
    id: 5,
    text: 'עד כמה אתם מרגישים שהשינה משפיעה עליכם ביום־יום?',
    answers: [
      { text: 'לא ממש משפיעה, מתמודדים בסדר', score: 0 },
      { text: 'יש ימים שקצת קשה, אבל שורדים', score: 1 },
      { text: 'מרגישים עייפות קבועה, משפיע על מצב רוח וסבלנות', score: 2 },
      { text: 'מרגישים מותשים, לפעמים "על הקצה"', score: 3 },
    ],
  },
  {
    id: 6,
    text: 'איזה צעדים ניסיתם כדי לשפר את המצב?',
    answers: [
      { text: 'לא ניסינו ממש, רק "זורמים"', score: 1 },
      { text: 'ניסינו טיפים מחברים/אינטרנט', score: 2 },
      { text: 'קראנו חומרים, ניסינו כמה שיטות', score: 2 },
      { text: 'ניסינו תהליך מסודר אבל זה לא עבד או לא התמדה', score: 3 },
    ],
  },
  {
    id: 7,
    text: 'עד כמה אתם מוכנים עכשיו להשקיע זמן ואנרגיה כדי לשפר את המצב?',
    answers: [
      { text: 'רק בודקים, לא בטוחים אם עכשיו הזמן', score: 0 },
      { text: 'מוכנים לשינוי קטן, לא משהו "קיצוני"', score: 1 },
      { text: 'מאוד רוצים שינוי, מוכנים להיות מחויבים לתהליך', score: 2 },
      { text: 'חייבים שינוי, מוכנים להשקיע בשביל זה', score: 3 },
    ],
  },
];

export const quizResults: Record<1 | 2 | 3, QuizResult> = {
  1: {
    tier: 1,
    title: '🌙 המצב אצלכם די מאוזן – נשאר רק לחדד כמה הרגלים',
    summary: 'שינת הלילה בבית יחסית מאוזנת, ויש רק נקודות לשיפור. שינוי קטן בהרגלים יכול להשפיע משמעותית.',
    whatsappMessage: 'היי ליאור, עשיתי את בדיקת השינה. רוצה כיוונון קצר. פנויה לשיחה?',
    ctaText: {
      whatsapp: 'וואטסאפ לשאלה קצרה',
      call: 'קביעת שיחת ייעוץ חד־פעמית',
    },
  },
  2: {
    tier: 2,
    title: '😴 יש לכם לא מעט אתגרים – אבל אתם במקום מצוין לשינוי',
    summary: 'זמן ההרדמה והתעוררויות מצביעים על קושי אמיתי, אבל כזה שניתן לפתור עם תהליך קצר.',
    whatsappMessage: 'היי ליאור, עשיתי את בדיקת השינה. נראה שיש לנו כמה נקודות לשפר. אשמח לשמוע עוד.',
    ctaText: {
      whatsapp: 'וואטסאפ – אשמח לשמוע מה קורה אצלכם',
      call: 'לקביעת שיחת היכרות',
    },
  },
  3: {
    tier: 3,
    title: '💛 אתם סוחבים הרבה – ולא חייבים להמשיך ככה לבד',
    summary: 'המצב מצביע על עומס משמעותי ופגיעה באיכות החיים. ליווי אישי של 14–30 יום יעשה הבדל גדול.',
    whatsappMessage: 'היי ליאור, עשיתי את בדיקת השינה באתר ונראה שאנחנו במקום מאתגר. אשמח לשיחת היכרות.',
    ctaText: {
      whatsapp: 'שליחת הודעה בוואטסאפ',
      call: 'שיחת היכרות ללא התחייבות',
    },
  },
};

export function calculateTier(score: number): 1 | 2 | 3 {
  if (score >= 0 && score <= 5) return 1;
  if (score >= 6 && score <= 12) return 2;
  return 3;
}


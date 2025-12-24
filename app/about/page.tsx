import { Metadata } from 'next';
import Image from 'next/image';
import { Card } from '@/components/ui/Card';

export const metadata: Metadata = {
  title: 'אודות ליאור - יועצת שינה והדרכת הורים',
  description: 'ליאור - יועצת שינה מקצועית עם ניסיון רב בליווי הורים לתינוקות ופעוטות בשיטת &quot;לילה טוב&quot;',
};

export default function AboutPage() {
  return (
    <div className="container mx-auto px-4 py-12">
      <div className="max-w-4xl mx-auto">
        <h1 className="text-4xl md:text-5xl font-heading font-bold text-text-dark mb-8 text-center">
          אודות ליאור
        </h1>

        {/* Hero Image */}
        <div className="mb-12">
          <div className="relative w-full h-96 md:h-[500px] rounded-3xl overflow-hidden shadow-2xl">
            <Image
              src="/2c30980c-7f21-4992-8962-19feefc79968.jpeg"
              alt="משפחה - ליאור יועצת שינה"
              fill
              className="object-cover"
              priority
              sizes="(max-width: 768px) 100vw, 896px"
            />
          </div>
        </div>

        <Card className="mb-8">
          <div className="flex flex-col md:flex-row gap-6 items-center mb-6">
            <div className="flex-shrink-0 w-full md:w-64">
              <div className="relative w-full aspect-square rounded-2xl overflow-hidden shadow-lg">
                <Image
                  src="/f9632597-4203-424c-b071-f7a7272e2a20.jpeg"
                  alt="ליאור עם תינוק"
                  fill
                  className="object-cover"
                  sizes="(max-width: 768px) 100vw, 256px"
                />
              </div>
            </div>
            <div className="flex-grow">
              <h2 className="text-3xl font-heading font-bold text-text-dark mb-4">
                נעים להכיר
              </h2>
              <p className="text-text-dark/80 font-body text-lg leading-relaxed mb-4">
                אני ליאור נשואה לדודי ואמא לעומר הקטן, שדרכו למדתי מקרוב כמה שינה משפיעה על כל הבית.
              </p>
              <p className="text-text-dark/80 font-body text-lg leading-relaxed mb-4">
                אני מלווה הורים ותינוקות מגיל 5 חודשים ועד 3.5 שנים, בתהליכי שינה שמביאים רוגע, יציבות ושקט לילה – בלי לחץ, בלי רגשות אשמה ובלי שיטות קשות.
              </p>
              <p className="text-text-dark/80 font-body text-lg leading-relaxed mb-4">
                הגישה שלי מבוססת על הקשבה, רגישות והתאמה אישית לכל משפחה. אני מאמינה שלכל ילד יש קצב משלו, ולכל הורה יש דרך שמתאימה לו – והתפקיד שלי הוא להיות שם בשבילכם, להדריך, להרגיע ולתת כלים שיעזרו לכם להחזיר את השקט הביתה.
              </p>
              <p className="text-text-dark/80 font-body text-lg leading-relaxed">
                מתוך ניסיון אישי ומקצועי, אני יודעת שאפשר להגיע לשינה טובה ובריאה – כשעושים זאת עם ליווי נכון, חיבוק גדול והרבה לב.
              </p>
            </div>
          </div>
        </Card>

        <Card className="mb-8">
          <h2 className="text-3xl font-heading font-bold text-text-dark mb-6">
            איך הכל התחיל
          </h2>
          <p className="text-text-dark/80 font-body text-lg leading-relaxed mb-4">
            אני בת 37 – אמא, רעיה ובעיקר אחת שאוהבת ילדים ואנשים.
          </p>
          <p className="text-text-dark/80 font-body text-lg leading-relaxed mb-4">
            לאורך שנים עבדתי בעולם אחר לגמרי, אבל עמוק בפנים ידעתי שהלב שלי נמצא במקום אחר. ברגע שהקשבתי לעצמי – הבנתי שאני רוצה לעסוק במה שממלא אותי באמת: ללוות הורים וילדים במסע שלהם לשינה טובה ובריאה.
          </p>
          <p className="text-text-dark/80 font-body text-lg leading-relaxed mb-4">
            בחרתי ללמוד ולהתמקצע בייעוץ שינה בשיטת לילה טוב, מתוך אמונה ששינה היא הרבה מעבר למנוחה – היא הבסיס לשלווה, לרוגע ולחיבור משפחתי.
          </p>
          <p className="text-text-dark/80 font-body text-lg leading-relaxed">
            כיום אני מלווה משפחות באהבה גדולה, בגישה רגישה ומותאמת אישית, שמאפשרת לילדים לישון בשקט ולהורים ליהנות מלילות רגועים יותר – בלי לחץ, בלי רגשות אשמה ובלי שיטות קשוחות.
          </p>
        </Card>

        <Card>
          <h2 className="text-3xl font-heading font-bold text-text-dark mb-6">
            החזון שלי
          </h2>
          <p className="text-text-dark/80 font-body text-lg leading-relaxed mb-4">
            אני מאמינה שכל משפחה יכולה להגיע לשינה טובה ולבית רגוע, כשהדרך לשם עוברת בהקשבה אמיתית, ליווי אישי וחיבור רגשי.
          </p>
          <p className="text-text-dark/80 font-body text-lg leading-relaxed">
            החזון שלי הוא להעניק להורים ביטחון, כלים ותמיכה – כדי שיוכלו לגדל ילדים רגועים ובטוחים יותר, וליהנות מהורות נעימה ושלווה.
          </p>
        </Card>
      </div>
    </div>
  );
}


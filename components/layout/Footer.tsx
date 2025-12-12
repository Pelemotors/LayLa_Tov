import React from 'react';
import Link from 'next/link';

export const Footer: React.FC = () => {
  const currentYear = new Date().getFullYear();

  const footerLinks = {
    main: [
      { href: '/', label: 'בית' },
      { href: '/about', label: 'אודות' },
      { href: '/method', label: 'השיטה' },
      { href: '/programs', label: 'מסלולים' },
    ],
    info: [
      { href: '/testimonials', label: 'המלצות' },
      { href: '/blog', label: 'בלוג' },
      { href: '/contact', label: 'צור קשר' },
      { href: '/assessment', label: 'בדיקת מצב שינה' },
    ],
    legal: [
      { href: '/privacy', label: 'מדיניות פרטיות' },
      { href: '/terms', label: 'תנאי שימוש' },
      { href: '/accessibility', label: 'נגישות' },
    ],
  };

  return (
    <footer className="bg-gradient-to-r from-accent-sky/90 via-accent-lavender/90 to-accent-pink/90 text-white mt-auto border-t-4 border-accent-sky">
      <div className="container mx-auto px-4 py-12">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
          {/* Brand */}
          <div className="col-span-1 md:col-span-2">
            <h3 className="text-2xl font-heading font-bold mb-4">ליאור</h3>
            <p className="text-white font-body mb-4 font-semibold">
              יועצת שינה והדרכת הורים בשיטת 'לילה טוב'
            </p>
            <p className="text-white/90 text-sm font-body">
              ליווי אישי ומותאם להורים לתינוקות ופעוטות
            </p>
          </div>

          {/* Links */}
          <div>
            <h4 className="font-heading font-semibold mb-4">ניווט</h4>
            <ul className="space-y-2">
              {footerLinks.main.map((link) => (
                <li key={link.href}>
                  <Link
                    href={link.href}
                    className="text-white hover:text-accent-sky-light transition-colors font-body font-medium"
                  >
                    {link.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          <div>
            <h4 className="font-heading font-semibold mb-4">מידע</h4>
            <ul className="space-y-2">
              {footerLinks.info.map((link) => (
                <li key={link.href}>
                  <Link
                    href={link.href}
                    className="text-white hover:text-accent-sky-light transition-colors font-body font-medium"
                  >
                    {link.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>
        </div>

        {/* Bottom */}
        <div className="border-t border-white/30 mt-8 pt-8">
          <div className="flex flex-col md:flex-row justify-between items-center gap-4">
            <p className="text-white/90 text-sm font-body font-medium">
              © {currentYear} ליאור - יועצת שינה. כל הזכויות שמורות.
            </p>
            <div className="flex gap-6">
              {footerLinks.legal.map((link) => (
                <Link
                  key={link.href}
                  href={link.href}
                  className="text-white/90 hover:text-white text-sm transition-colors font-body font-medium"
                >
                  {link.label}
                </Link>
              ))}
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};


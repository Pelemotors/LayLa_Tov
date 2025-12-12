'use client';

import React from 'react';
import Link from 'next/link';

export const StickyCTAButton: React.FC = () => {
  const calendlyUrl = process.env.NEXT_PUBLIC_CALENDLY_URL || '/contact';

  const handleClick = () => {
    if (typeof window !== 'undefined' && window.gtag) {
      window.gtag('event', 'book_call_click', {
        event_category: 'engagement',
        event_label: 'sticky_button',
      });
    }
  };

  return (
    <Link
      href={calendlyUrl}
      onClick={handleClick}
      className="fixed bottom-6 right-6 z-50 bg-accent-sky hover:bg-accent-lavender text-text-dark rounded-full px-6 py-4 shadow-lg transition-all duration-300 hover:scale-110 focus:outline-none focus:ring-2 focus:ring-accent-sky focus:ring-offset-2 font-heading font-medium"
      aria-label="קבעי שיחת אבחון"
    >
      קבעי שיחה
    </Link>
  );
};


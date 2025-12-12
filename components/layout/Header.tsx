'use client';

import React, { useState } from 'react';
import Link from 'next/link';
import { Button } from '../ui/Button';

export const Header: React.FC = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const navItems = [
    { href: '/', label: 'בית' },
    { href: '/about', label: 'אודות' },
    { href: '/method', label: 'השיטה' },
    { href: '/programs', label: 'מסלולים' },
    { href: '/testimonials', label: 'המלצות' },
    { href: '/blog', label: 'בלוג' },
    { href: '/contact', label: 'צור קשר' },
  ];

  return (
    <header className="bg-gradient-to-r from-accent-sky/20 via-accent-lavender/20 to-accent-pink/20 shadow-md sticky top-0 z-50 border-b-2 border-accent-sky/30">
      <div className="container mx-auto px-4">
        <div className="flex items-center justify-between h-20">
          {/* Logo */}
          <Link href="/" className="flex items-center">
            <span className="text-2xl font-heading font-bold text-text-dark bg-gradient-to-r from-accent-sky to-accent-lavender bg-clip-text text-transparent">
              ליאור
            </span>
          </Link>

          {/* Desktop Navigation */}
          <nav className="hidden md:flex items-center gap-6">
            {navItems.map((item) => (
              <Link
                key={item.href}
                href={item.href}
                className="text-text-dark hover:text-accent-sky font-semibold transition-colors font-body"
              >
                {item.label}
              </Link>
            ))}
            <Button variant="primary" size="sm" asChild>
              <Link href="/assessment">בדיקת מצב שינה</Link>
            </Button>
            <Button variant="secondary" size="sm" asChild>
              <Link href="/contact">קבעי שיחה</Link>
            </Button>
          </nav>

          {/* Mobile Menu Button */}
          <button
            className="md:hidden p-2"
            onClick={() => setIsMenuOpen(!isMenuOpen)}
            aria-label="תפריט"
          >
            <svg
              className="w-6 h-6 text-text-dark"
              fill="none"
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth="2"
              viewBox="0 0 24 24"
              stroke="currentColor"
            >
              {isMenuOpen ? (
                <path d="M6 18L18 6M6 6l12 12" />
              ) : (
                <path d="M4 6h16M4 12h16M4 18h16" />
              )}
            </svg>
          </button>
        </div>

        {/* Mobile Navigation */}
        {isMenuOpen && (
          <nav className="md:hidden py-4 border-t border-accent-sky/20">
            <div className="flex flex-col gap-4">
              {navItems.map((item) => (
                <Link
                  key={item.href}
                  href={item.href}
                  className="text-text-dark hover:text-accent-sky transition-colors font-body py-2"
                  onClick={() => setIsMenuOpen(false)}
                >
                  {item.label}
                </Link>
              ))}
              <Button variant="primary" size="sm" asChild className="w-full">
                <Link href="/assessment" onClick={() => setIsMenuOpen(false)}>
                  בדיקת מצב שינה
                </Link>
              </Button>
              <Button variant="secondary" size="sm" asChild className="w-full">
                <Link href="/contact" onClick={() => setIsMenuOpen(false)}>
                  קבעי שיחה
                </Link>
              </Button>
            </div>
          </nav>
        )}
      </div>
    </header>
  );
};


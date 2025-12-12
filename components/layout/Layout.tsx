import React from 'react';
import { Header } from './Header';
import { Footer } from './Footer';
import { StickyWhatsAppButton } from './StickyWhatsAppButton';
import { StickyCTAButton } from './StickyCTAButton';

interface LayoutProps {
  children: React.ReactNode;
}

export const Layout: React.FC<LayoutProps> = ({ children }) => {
  return (
    <div className="min-h-screen flex flex-col bg-background-cream">
      <Header />
      <main className="flex-grow">{children}</main>
      <Footer />
      <StickyWhatsAppButton />
      <StickyCTAButton />
    </div>
  );
};


import type { Metadata, Viewport } from 'next';
import type { ReactNode } from 'react';
import './globals.css';

export const metadata: Metadata = {
  title: 'Market IQ Limited | Financial Analytics and Technology',
  description:
    'Market IQ Limited focuses on financial analytics and advisory, financial technology infrastructure, risk management, and financial intelligence.',
  icons: {
    icon: { url: '/mark.svg', type: 'image/svg+xml' },
  },
};

export const viewport: Viewport = {
  themeColor: '#0b0b0b',
};

export default function RootLayout({ children }: Readonly<{ children: ReactNode }>) {
  return (
    <html lang="en">
      <body id="top">{children}</body>
    </html>
  );
}

import type { Metadata } from 'next';
import { Sora } from 'next/font/google';
import { config } from '@fortawesome/fontawesome-svg-core';
import '@fortawesome/fontawesome-svg-core/styles.css';

import { Footer } from '@/components/footer';
import './globals.css';

config.autoAddCss = false;

const soraFont = Sora({
  variable: '--font-sora',
  subsets: ['latin'],
});

export const metadata: Metadata = {
  title: 'UNIHACK 2026 — March 13-15, 2026 — The Imagination Hackathon',
  description: "Australia's premier hackathon for university students",
  icons: {
    shortcut: '/favicons/favicon.ico',
    icon: [
      {
        sizes: '16x16',
        type: 'image/png',
        url: '/favicons/favicon-16x16.png'
      },
      {
        sizes: '32x32',
        type: 'image/png',
        url: '/favicons/favicon-32x32.png'
      },
      {
        sizes: '96x96',
        type: 'image/png',
        url: '/favicons/favicon-96x96.png'
      }
    ],
    apple: [
      {
        sizes: '180x180',
        type: 'image/png',
        url: '/favicons/apple-touch-icon-180x180.png'
      },
      {
        sizes: '152x152',
        type: 'image/png',
        url: '/favicons/apple-touch-icon-152x152.png'
      },
      {
        sizes: '167x167',
        type: 'image/png',
        url: '/favicons/apple-touch-icon-167x167.png'
      }
    ]
  }
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={`${soraFont.variable} antialiased`}>
        {children}
        <Footer />
      </body>
    </html>
  );
}

import { Inter } from 'next/font/google';
import './globals.css';

const inter = Inter({ subsets: ['latin'] });

export const metadata = {
  title: 'Zayra APIs - Modern API Solutions',
  description: 'Lightning-fast API integration with 99% uptime guarantee. Explore our collection of powerful APIs for developers.',
  keywords: 'API, REST API, WhatsApp Bot, Image Processing, Developer Tools',
  authors: [{ name: 'Zayra APIs' }],
  creator: 'Zayra APIs',
  openGraph: {
    type: 'website',
    locale: 'en_US',
    url: 'https://zayra-apis.com',
    title: 'Zayra APIs - Modern API Solutions',
    description: 'Lightning-fast API solutions for modern developers',
    siteName: 'Zayra APIs',
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Zayra APIs',
    description: 'Modern API Solutions',
  },
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <head>
        <meta charSet="utf-8" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <meta name="theme-color" content="#000000" />
        <link rel="icon" href="/favicon.ico" />
      </head>
      <body className={inter.className}>
        {children}
      </body>
    </html>
  );
}

import type { Metadata } from 'next';
import { Geist, Geist_Mono } from 'next/font/google';
import './globals.css';
import Navbar from '@/_components/Navbar';
import Footer from '@/_components/Footer';
import ThemeProvider from '@/_components/ThemeProvider';

const geistSans = Geist({
  variable: '--font-geist-sans',
  subsets: ['latin'],
});

const geistMono = Geist_Mono({
  variable: '--font-geist-mono',
  subsets: ['latin'],
});

export const metadata: Metadata = {
  title: 'Tahuya River Valley Water District',
  description: 'Tahuya River Valley Water District website',
  keywords: [
    'Tahuya',
    'Tahuya River Valley',
    'water district',
    'Tahuya River Valley Water District',
    'TRVWD',
    'Tahuya River Valley Community',
    'TRVCC',
  ],
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" suppressHydrationWarning>
      <body
        className={`${geistSans.variable} ${geistMono.variable} antialiased min-h-screen grid grid-rows-[72_1fr_auto]`}
      >
        <ThemeProvider>
          <Navbar />
          <main className="row-start-2">{children}</main>
          <Footer />
        </ThemeProvider>
      </body>
    </html>
  );
}

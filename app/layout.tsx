import type { Metadata } from 'next';
import { Geist, Geist_Mono } from 'next/font/google';
import './globals.css';
import Navbar from '@/_components/Navbar';
import Footer from '@/_components/Footer';

const geistSans = Geist({
  variable: '--font-geist-sans',
  subsets: ['latin'],
});

const geistMono = Geist_Mono({
  variable: '--font-geist-mono',
  subsets: ['latin'],
});

export const metadata: Metadata = {
  title: 'Tahuaya River Valley Water District',
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
    <html lang="en">
      <body
        className={`${geistSans.variable} ${geistMono.variable} antialiased`}
      >
        <Navbar />
        {children}
        <Footer />
      </body>
    </html>
  );
}

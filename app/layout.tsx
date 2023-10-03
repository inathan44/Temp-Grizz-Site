import './globals.css';
import type { Metadata } from 'next';
import { Poppins } from 'next/font/google';
import { Providers } from './providers';
import { Toaster } from '@/components/ui/toaster';
import Navbar from './components/Navbar';
import { twMerge } from 'tailwind-merge';
import Blob from './components/Blob';

const poppins = Poppins({
  subsets: ['latin'],
  weight: ['300', '400', '500', '600', '700'],
});

export const metadata: Metadata = {
  title: 'Grizz',
  description: 'Prospect with confidence.',
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang='en bg-offWhite'>
      <body className={(twMerge(poppins.className), 'overflow-x-hidden')}>
        <Providers>
          <>
            <Navbar />
            {children} <Toaster />
          </>
        </Providers>
      </body>
    </html>
  );
}

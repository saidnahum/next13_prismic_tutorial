import './globals.css';
import type { Metadata, ResolvingMetadata } from 'next';
import clsx from 'clsx';
import { Nunito, Nunito_Sans } from 'next/font/google';
import { createClient } from '@/prismicio';

const nunito = Nunito({
  subsets: ['latin'],
  variable: '--font-nunito',
  display: 'swap',
});

const nunito_sans = Nunito_Sans({
  subsets: ['latin'],
  variable: '--font-nunito-sans',
  display: 'swap',
});

export async function generateMetadata(): Promise<Metadata> {

  const client = createClient();

  const page = await client.getSingle("settings");

  return {
    title: page.data.site_title || "Flowrise Fallback",
    description: page.data.meta_description || "The best web app for you",
    openGraph: {
      images: [page.data.og_image.url || ""],
    },
  }
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en" className={clsx(nunito.variable, nunito_sans.variable)}>
      <body >
        <header>Header!</header>
        {children}
        <footer>Footer!</footer>
      </body>
    </html>
  )
};

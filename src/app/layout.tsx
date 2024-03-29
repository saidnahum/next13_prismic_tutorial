import './globals.css';
import type { Metadata, ResolvingMetadata } from 'next';
import clsx from 'clsx';
import { Nunito, Nunito_Sans } from 'next/font/google';
import { createClient, repositoryName } from '@/prismicio';
import { PrismicPreview } from '@prismicio/next';
import Header from '@/components/Header';
import Footer from '@/components/Footer';


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
  const settings = await client.getSingle("settings");

  return {
    title: settings.data.site_title || "Flowrise Fallback",
    description: settings.data.meta_description || "The best web app for you",
    openGraph: {
      images: [settings.data.og_image.url || ""],
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
        <Header />
        {children}
        <Footer />
        <div className="fixed bg-gradient-to-tr from-emerald-50 to-cyan-50 z-[-1] inset-0 opacity-60"/>
        <PrismicPreview repositoryName={repositoryName}/>
      </body>
    </html>
  )
};

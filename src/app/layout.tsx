import './globals.css'
import type { Metadata } from 'next'
import clsx from 'clsx';
import { Nunito, Nunito_Sans } from 'next/font/google'

const nunito = Nunito({
  subsets: ['latin'],
  variable: '--font-nunito',
  display: 'swap',
})

const nunito_sans = Nunito_Sans({
  subsets: ['latin'],
  variable: '--font-nunito-sans',
  display: 'swap',
})

export const metadata: Metadata = {
  title: 'Flowrise',
  description: 'Next 13 and Prismic Tutorial',
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en" className={clsx(nunito.variable, nunito_sans.variable)}>
      <body >{children}</body>
    </html>
  )
}

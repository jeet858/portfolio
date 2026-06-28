import type { Metadata } from 'next'
import './globals.css'

export const metadata: Metadata = {
  title: 'Jeet Majumder | Full Stack Developer',
  description: 'Full Stack Developer specializing in JavaScript, TypeScript, React, Next.js, Nest.js, Flutter, and React Native.',
}

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode
}>) {
  return (
    <html lang="en">
      <body>{children}</body>
    </html>
  )
}

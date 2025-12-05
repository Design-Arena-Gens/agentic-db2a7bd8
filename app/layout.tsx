import type { Metadata } from 'next'
import './globals.css'

export const metadata: Metadata = {
  title: 'EduLearn - Transform Your Learning Journey',
  description: 'Empowering students with innovative educational technology and personalized learning experiences',
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en">
      <body>{children}</body>
    </html>
  )
}

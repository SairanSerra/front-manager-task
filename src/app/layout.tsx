import './globals.css'
import { Inter } from 'next/font/google'
import { LayoutProvider } from '@/providers'

const inter = Inter({
  subsets: ['latin'],
  weight: ['100', '200', '300', '400', '500', '600', '700', '800', '900'],
})

export const metadata = {
  title: 'Manager Task',
  description: 'Plataforma de gerenciamento de atividades',
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="pt-br">
      <body className={inter.className}>
        <LayoutProvider>{children}</LayoutProvider>
      </body>
    </html>
  )
}

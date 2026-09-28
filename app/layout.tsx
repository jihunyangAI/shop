import { Analytics } from '@vercel/analytics/next'
import type { Metadata, Viewport } from 'next'
import { Noto_Sans_KR, Noto_Serif_KR } from 'next/font/google'
import './globals.css'

const notoSansKr = Noto_Sans_KR({
  subsets: ['latin'],
  weight: ['300', '400', '500', '700'],
  variable: '--font-noto-sans-kr',
  display: 'swap',
})

const notoSerifKr = Noto_Serif_KR({
  subsets: ['latin'],
  weight: ['400', '500', '600'],
  variable: '--font-noto-serif-kr',
  display: 'swap',
})

export const metadata: Metadata = {
  title: '아워시즌 OURSEASON | 기업 소개',
  description:
    '매일 입고 싶은 옷을 만드는 패션 커머스 기업, 아워시즌. 브랜드 이야기와 비전, 사업 영역, 지속가능성 활동을 소개합니다.',
  generator: 'v0.app',
  icons: {
    icon: [
      {
        url: '/icon-light-32x32.png',
        media: '(prefers-color-scheme: light)',
      },
      {
        url: '/icon-dark-32x32.png',
        media: '(prefers-color-scheme: dark)',
      },
      {
        url: '/icon.svg',
        type: 'image/svg+xml',
      },
    ],
    apple: '/apple-icon.png',
  },
}

export const viewport: Viewport = {
  colorScheme: 'light',
  themeColor: '#f7f4ee',
}

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode
}>) {
  return (
    <html lang="ko" className={`${notoSansKr.variable} ${notoSerifKr.variable}`}>
      <body className="antialiased">
        {children}
        {process.env.NODE_ENV === 'production' && <Analytics />}
      </body>
    </html>
  )
}

import type { Metadata, Viewport } from 'next'
import './globals.css'

export const viewport: Viewport = {
  width: 'device-width',
  initialScale: 1,
  maximumScale: 1,
}

export const metadata: Metadata = {
  title: 'VocaSpeak プライバシーポリシー',
  description: 'VocaSpeak（ボキャスピーク）のプライバシーポリシーです。個人情報の取り扱いについて詳しく説明しています。',
  keywords: 'VocaSpeak, ボキャスピーク, プライバシーポリシー, 個人情報保護, 英語学習アプリ',
  authors: [{ name: 'VocaSpeak' }],
  creator: 'VocaSpeak',
  publisher: 'VocaSpeak',
  formatDetection: {
    email: false,
    address: false,
    telephone: false,
  },
  robots: {
    index: true,
    follow: true,
    nocache: false,
    googleBot: {
      index: true,
      follow: true,
      noimageindex: false,
      'max-video-preview': -1,
      'max-image-preview': 'large',
      'max-snippet': -1,
    },
  },
  openGraph: {
    title: 'VocaSpeak プライバシーポリシー',
    description: 'VocaSpeak（ボキャスピーク）のプライバシーポリシーです。個人情報の取り扱いについて詳しく説明しています。',
    type: 'website',
    locale: 'ja_JP',
    siteName: 'VocaSpeak Privacy Policy',
  },
  twitter: {
    card: 'summary',
    title: 'VocaSpeak プライバシーポリシー',
    description: 'VocaSpeak（ボキャスピーク）のプライバシーポリシーです。個人情報の取り扱いについて詳しく説明しています。',
  },
  alternates: {
    canonical: 'https://vocaspeak-privacy.vercel.app/',
  },
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="ja" className="scroll-smooth">
      <head>
        <link rel="icon" href="/favicon.ico" sizes="any" />
        <meta name="theme-color" content="#2563eb" />
        <meta name="apple-mobile-web-app-capable" content="yes" />
        <meta name="apple-mobile-web-app-status-bar-style" content="default" />
        <meta name="mobile-web-app-capable" content="yes" />
      </head>
      <body className="font-sans antialiased bg-gray-50 text-gray-900 leading-relaxed">
        {children}
      </body>
    </html>
  )
}
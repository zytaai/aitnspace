
import type { Metadata } from 'next';
import { Inter } from 'next/font/google';
import './globals.css';
import Header from '@/components/layout/Header';
import Sidebar from '@/components/layout/Sidebar';
import Link from 'next/link';

const inter = Inter({ subsets: ['latin'] });

export const metadata: Metadata = {
  title: 'AI 커뮤니티 - AITN',
  description: 'AI에 대한 정보와 활용사례를 나누는 커뮤니티입니다.',
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="ko">
      <body className={inter.className}>
        <div className="flex flex-col min-h-screen">
          <Header />
          <div className="flex flex-1">
            <Sidebar />
            <main className="flex-1 p-4 bg-[#f5f5f6]">{children}</main>
          </div>
          <footer className="px-6 py-4 text-xs text-center text-mint-gray border-t">
            <div>
              <Link href="/terms" className="mx-1 hover:underline">Terms</Link>
              <Link href="/privacy" className="mx-1 hover:underline">Privacy</Link>
              <span className="mx-1">Copyright 2025</span>
            </div>
          </footer>
        </div>
      </body>
    </html>
  );
}

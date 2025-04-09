import type { Metadata } from 'next';
import { Inter } from 'next/font/google';
import './globals.css';
import Header from '@/components/layout/Header';
import Sidebar from '@/components/layout/Sidebar';
import Link from 'next/link';

const inter = Inter({ subsets: ['latin'] });

export const metadata: Metadata = {
  title: 'AI 커뮤니티 - 지피터스',
  description: '챗GPT에 대한 정보와 활용사례를 나누는 커뮤니티입니다.',
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
          <footer className="px-6 py-4 text-xs text-center text-gpters-gray border-t">
            <p>
              대표 / 개인정보책임자 : 홍길동 | 사업자 등록번호 : 165-99-00701 (통신판매업) |
              사업자등록번호 : 514-86-02743 | 연락처 : 02-887-6749 |
              주소 : 서울시 관악구 2024-동-04286
            </p>
            <div className="mt-2">
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

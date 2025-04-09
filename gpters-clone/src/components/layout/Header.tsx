import React from 'react';
import { Input } from '@/components/ui/input';
import { Button } from '@/components/ui/button';
import Link from 'next/link';
import Image from 'next/image';

const Header = () => {
  return (
    <header className="border-b">
      <div className="bg-primary py-1 px-4 text-xs text-white text-center">
        <span>🚀 AI스터디 16기 신청구매하고 최대 할인혜택 받기</span>
      </div>
      <div className="flex items-center justify-between py-3 px-4">
        <div className="flex items-center space-x-6">
          {/* Logo */}
          <Link href="/" className="flex items-center">
            <div className="w-8 h-8 rounded-full bg-primary flex items-center justify-center text-white">
              GP
            </div>
          </Link>

          {/* Main Navigation */}
          <nav className="flex items-center space-x-4">
            <Link href="/" className="text-sm font-medium">
              커뮤니티
            </Link>
            <Link href="/ai-study-list" className="text-sm font-medium">
              AI스터디
            </Link>
            <Link href="/study-platform" className="text-sm font-medium">
              스터디장 지원
            </Link>
          </nav>
        </div>

        {/* Search */}
        <div className="flex-1 max-w-xl px-8">
          <div className="relative">
            <Input
              type="search"
              placeholder="검색어를 입력하세요"
              className="w-full pl-10 border rounded-full"
            />
            <div className="absolute inset-y-0 left-3 flex items-center">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                className="h-4 w-4 text-gray-400"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z"
                />
              </svg>
            </div>
          </div>
        </div>

        {/* Auth Buttons */}
        <div className="flex items-center space-x-2">
          <Button variant="outline" size="sm" className="rounded-full">
            로그인
          </Button>
          <Button size="sm" className="rounded-full">
            가입
          </Button>
        </div>
      </div>
    </header>
  );
};

export default Header;

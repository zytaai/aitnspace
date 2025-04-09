import React from 'react';
import Link from 'next/link';
import { Button } from '@/components/ui/button';

const Sidebar = () => {
  const categories = [
    { name: 'AI SPACE', path: '/ai-space' },
    { name: 'MY SPACE', path: '/my-space' },
    { name: 'IDEA SPACE', path: '/idea-space' },
    { name: 'TREND SPACE', path: '/trend-space' },
    { name: 'NEWS SPACE', path: '/news-space' }
  ];

  return (
    <aside className="w-64 bg-white border-r flex-shrink-0 h-full">
      <div className="flex flex-col h-full p-4">
        {/* Main Navigation */}
        <nav className="space-y-2">
          {categories.map((category) => (
            <Link
              key={category.path}
              href={category.path}
              className="flex items-center space-x-2 px-3 py-2 text-sm rounded-md hover:bg-gray-100"
            >
              <span>{category.name}</span>
            </Link>
          ))}

          <Link
            href="/"
            className="flex items-center space-x-2 px-3 py-2 text-sm rounded-md hover:bg-gpters-light-gray"
          >
            <svg
              xmlns="http://www.w3.org/2000/svg"
              className="h-5 w-5 text-gray-500"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={2}
                d="M3 12l2-2m0 0l7-7 7 7M5 10v10a1 1 0 001 1h3m10-11l2 2m-2-2v10a1 1 0 01-1 1h-3m-6 0a1 1 0 001-1v-4a1 1 0 011-1h2a1 1 0 011 1v4a1 1 0 001 1m-6 0h6"
              />
            </svg>
            <span>홈</span>
          </Link>

          <Link
            href="/events"
            className="flex items-center space-x-2 px-3 py-2 text-sm rounded-md hover:bg-gpters-light-gray"
          >
            <svg
              xmlns="http://www.w3.org/2000/svg"
              className="h-5 w-5 text-gray-500"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={2}
                d="M8 7V3m8 4V3m-9 8h10M5 21h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v12a2 2 0 002 2z"
              />
            </svg>
            <span>커뮤니티 이벤트</span>
          </Link>
        </nav>

        {/* Study Section */}
        <div className="mt-6">
          <h3 className="px-6 text-xs font-medium text-gray-500 uppercase tracking-wider">
            스터디 💬
          </h3>
          <nav className="mt-2 space-y-1 px-4">
            <Link
              href="/ai-study-post"
              className="flex items-center space-x-2 px-3 py-2 text-sm rounded-md bg-primary/10 text-primary font-medium"
            >
              <span>스터디 게시글 모아보기</span>
            </Link>

            <Link
              href="/ai-study-list"
              className="flex items-center space-x-2 px-3 py-2 text-sm rounded-md hover:bg-gpters-light-gray"
            >
              <span>지피터스 AI스터디 16기 사전판매</span>
            </Link>
          </nav>
        </div>

        {/* Activities Section */}
        <div className="mt-6">
          <h3 className="px-6 text-xs font-medium text-gray-500 uppercase tracking-wider">
            지피터스 활동 🔥
          </h3>
          <nav className="mt-2 space-y-1 px-4">
            <Link
              href="/question"
              className="flex items-center space-x-2 px-3 py-2 text-sm rounded-md hover:bg-gpters-light-gray"
            >
              <span>공지사항</span>
            </Link>
            <Link
              href="/question"
              className="flex items-center space-x-2 px-3 py-2 text-sm rounded-md hover:bg-gpters-light-gray"
            >
              <span>AI 뉴스 모음</span>
            </Link>
            <Link
              href="/question"
              className="flex items-center space-x-2 px-3 py-2 text-sm rounded-md hover:bg-gpters-light-gray"
            >
              <span>뉴스레터</span>
            </Link>
            <Link
              href="/hello"
              className="flex items-center space-x-2 px-3 py-2 text-sm rounded-md hover:bg-gpters-light-gray"
            >
              <span>자기소개</span>
            </Link>
            <Link
              href="/question"
              className="flex items-center space-x-2 px-3 py-2 text-sm rounded-md hover:bg-gpters-light-gray"
            >
              <span>AI 질문 Q&A</span>
            </Link>
          </nav>
        </div>

        {/* Write Button */}
        <div className="mt-auto px-4">
          <Button className="w-full justify-start" variant="outline">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              className="h-5 w-5 mr-2"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={2}
                d="M12 6v6m0 0v6m0-6h6m-6 0H6"
              />
            </svg>
            새 글쓰기
          </Button>
        </div>
      </div>
    </aside>
  );
};

export default Sidebar;
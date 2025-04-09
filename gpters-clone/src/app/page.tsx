
'use client';

import { useState } from "react";
import { Card } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import Link from "next/link";
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";

export default function Home() {
  const [showMenu, setShowMenu] = useState(false);
  const [showAll, setShowAll] = useState(false);

  const menuItems = [
    { name: 'AI SPACE', path: '/ai-space' },
    { name: 'MY SPACE', path: '/my-space' },
    { name: 'IDEA SPACE', path: '/idea-space' },
    { name: 'TREND SPACE', path: '/trend-space' },
    { name: 'NEWS SPACE', path: '/news-space' },
  ];

  const aiSpacePosts = [
    {
      title: "AI 기술 동향 분석",
      content: "최신 AI 기술 동향과 발전 방향에 대한 심층 분석",
      date: "2024.04.08"
    },
    {
      title: "AI 프로젝트 사례 연구",
      content: "성공적인 AI 프로젝트 구현 사례와 핵심 인사이트",
      date: "2024.04.08"
    }
  ];

  const mySpaceContent = {
    title: "나의 AI 프로젝트",
    content: "개인 맞춤형 AI 학습 진행상황과 프로젝트 현황",
    image: "/project-preview.png"
  };

  return (
    <div className="min-h-screen bg-gradient-to-b from-white to-blue-50 relative">
      {/* Menu Button */}
      <div className="absolute top-4 left-4 z-20">
        <Button 
          variant="ghost" 
          className="p-2"
          onClick={() => setShowMenu(!showMenu)}
        >
          <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
          </svg>
        </Button>
      </div>

      {/* Menu Overlay */}
      {showMenu && (
        <div className="absolute top-0 left-0 w-64 h-screen bg-white shadow-lg z-10 p-4">
          <div className="space-y-2 mt-12">
            {menuItems.map((item) => (
              <Link 
                key={item.name}
                href={item.path}
                className="block px-4 py-2 text-gray-700 hover:bg-gray-100 rounded-md"
              >
                {item.name}
              </Link>
            ))}
          </div>
        </div>
      )}

      {/* Background overlay */}
      <div 
        className="absolute inset-0 opacity-10 bg-[url('/hologram-network.png')] bg-cover bg-center"
        style={{ backgroundBlendMode: 'soft-light' }}
      />

      {/* Main content */}
      <div className="container mx-auto py-12 relative z-10">
        {/* Header */}
        <div className="text-center mb-16">
          <h1 className="text-5xl font-bold bg-clip-text text-transparent bg-gradient-to-r from-blue-600 to-indigo-600 mb-2">
            AITN SPACE
          </h1>
        </div>

        {/* Main Content */}
        <div className="max-w-3xl mx-auto mb-16"> 창의성과 창조성, 생각과 방법에 대한 자유로움
            </p>
            <p className="text-xl text-gray-700 leading-relaxed">
              변화의 시대에는 자유로운 생각 방식 필요
            </p>
          </div>
        </div>

        {/* Space Previews */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mt-12">
          {/* AI SPACE Preview */}
          <div className="space-y-4">
            <h2 className="text-xl font-bold mb-4">AI SPACE</h2>
            {aiSpacePosts.map((post, index) => (
              <Card key={index} className="overflow-hidden">
                <div className="p-4">
                  <h3 className="font-medium">{post.title}</h3>
                  <p className="text-sm text-gray-600 mt-2">{post.content}</p>
                  <div className="text-xs text-gray-500 mt-2">{post.date}</div>
                </div>
              </Card>
            ))}
          </div>

          {/* MY SPACE Preview */}
          <div>
            <h2 className="text-xl font-bold mb-4">MY SPACE</h2>
            <Card className="overflow-hidden">
              <div className="p-4">
                <h3 className="font-medium">{mySpaceContent.title}</h3>
                <p className="text-sm text-gray-600 mt-2">{mySpaceContent.content}</p>
              </div>
            </Card>
          </div>
        </div>
      </div>
    </div>
  );
}

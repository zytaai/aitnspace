import React from 'react';
import { Button } from '@/components/ui/button';
import { Avatar, AvatarFallback, AvatarImage } from '@/components/ui/avatar';
import Link from 'next/link';
import { Card } from '@/components/ui/card';

export default function AIStudyPostPage() {
  return (
    <div className="max-w-5xl mx-auto py-6">
      <div className="flex items-center justify-between mb-8">
        <h1 className="text-2xl font-bold">스터디 게시글 모아보기</h1>
        <div className="flex space-x-2">
          <Button variant="outline" size="sm">
            최신순
          </Button>
          <Button variant="outline" size="sm">
            인기순
          </Button>
        </div>
      </div>

      <div className="grid gap-4">
        {/* Post 1 */}
        <Card className="overflow-hidden">
          <div className="p-4 flex gap-4">
            <Avatar className="w-10 h-10">
              <AvatarImage src="https://ext.same-assets.com/1060573272/2373990262.jpeg" alt="Avatar" />
              <AvatarFallback>WK</AvatarFallback>
            </Avatar>
            <div className="flex-1">
              <div className="flex justify-between">
                <Link href="/research/post" className="font-medium hover:text-primary">
                  Gemini로 구글폼 설문지를 만들어 보았습니다 (응용)
                </Link>
                <span className="text-xs text-gray-500">2025.04.07</span>
              </div>
              <p className="mt-2 text-sm text-gray-700 line-clamp-2">
                안녕하세요. 공부하면서 배운 내용을 응용해 보았습니다. (구체적으로 말씀드리면 gemini가 앱스 스크립트를 짜고 Apps Script로 배포하여 구글 설문지를 만드는 방법인데요, 여러분도 해보세요!)
              </p>
              <div className="mt-2 flex items-center text-xs text-gray-500">
                <span className="mr-2 bg-gray-100 px-2 py-1 rounded-md">15기 연구논문</span>
                <span className="flex items-center">
                  <svg xmlns="http://www.w3.org/2000/svg" className="h-4 w-4 mr-1" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 12a3 3 0 11-6 0 3 3 0 016 0z" />
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M2.458 12C3.732 7.943 7.523 5 12 5c4.478 0 8.268 2.943 9.542 7-1.274 4.057-5.064 7-9.542 7-4.477 0-8.268-2.943-9.542-7z" />
                  </svg>
                  2
                </span>
              </div>
            </div>
          </div>
        </Card>

        {/* Post 2 */}
        <Card className="overflow-hidden">
          <div className="p-4 flex gap-4">
            <Avatar className="w-10 h-10">
              <AvatarImage src="https://ext.same-assets.com/1060573272/338718639.svg" alt="Avatar" />
              <AvatarFallback>KH</AvatarFallback>
            </Avatar>
            <div className="flex-1">
              <div className="flex justify-between">
                <Link href="/media/post" className="font-medium hover:text-primary">
                  1인 영화 예고편 만들기 - The Mole Detective
                </Link>
                <span className="text-xs text-gray-500">2025.04.07</span>
              </div>
              <p className="mt-2 text-sm text-gray-700 line-clamp-2">
                안녕하세요~ 15기 나만의 콘텐츠 3팀입니다. 한달동안 도전과제를 함께 진행하면서 마지막 주차 최종 결과물을 공유해 봅니다. 여러 ai 도구들을 활용해서, 여러분들이 원하는 30초짜리 영화예고편을 만들어 볼 수 있습니다.
              </p>
              <div className="mt-2 flex items-center text-xs text-gray-500">
                <span className="mr-2 bg-gray-100 px-2 py-1 rounded-md">15기 나만의콘텐츠</span>
                <span className="flex items-center">
                  <svg xmlns="http://www.w3.org/2000/svg" className="h-4 w-4 mr-1" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 12a3 3 0 11-6 0 3 3 0 016 0z" />
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M2.458 12C3.732 7.943 7.523 5 12 5c4.478 0 8.268 2.943 9.542 7-1.274 4.057-5.064 7-9.542 7-4.477 0-8.268-2.943-9.542-7z" />
                  </svg>
                  0
                </span>
              </div>
            </div>
          </div>
        </Card>

        {/* Post 3 */}
        <Card className="overflow-hidden">
          <div className="p-4 flex gap-4">
            <Avatar className="w-10 h-10">
              <AvatarImage src="https://ext.same-assets.com/1060573272/192835412.jpeg" alt="Avatar" />
              <AvatarFallback>JP</AvatarFallback>
            </Avatar>
            <div className="flex-1">
              <div className="flex justify-between">
                <Link href="/dev/post" className="font-medium hover:text-primary">
                  잘 만들어진 크롬 익스텐션의 사이드패널이 궁금해요
                </Link>
                <span className="text-xs text-gray-500">2025.04.07</span>
              </div>
              <p className="mt-2 text-sm text-gray-700 line-clamp-2">
                버전 1은 사이드패널에서 사이트가 열리지 않았습니다. SidePanel으로 바로가기를 넣었어요. 사이드패널에서 사이트가 열리지 않아서, 크롬 탭으로 넘기는 기능만 넣었습니다. 버전 3을 만들면서 여러가지 개선해 볼까요?
              </p>
              <div className="mt-2 flex items-center text-xs text-gray-500">
                <span className="mr-2 bg-gray-100 px-2 py-1 rounded-md">15기 크롬익스텐션</span>
                <span className="flex items-center">
                  <svg xmlns="http://www.w3.org/2000/svg" className="h-4 w-4 mr-1" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 12a3 3 0 11-6 0 3 3 0 016 0z" />
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M2.458 12C3.732 7.943 7.523 5 12 5c4.478 0 8.268 2.943 9.542 7-1.274 4.057-5.064 7-9.542 7-4.477 0-8.268-2.943-9.542-7z" />
                  </svg>
                  0
                </span>
              </div>
            </div>
          </div>
        </Card>

        {/* Post 4 */}
        <Card className="overflow-hidden">
          <div className="p-4 flex gap-4">
            <Avatar className="w-10 h-10">
              <AvatarImage src="https://ext.same-assets.com/1060573272/476073226.jpeg" alt="Avatar" />
              <AvatarFallback>YK</AvatarFallback>
            </Avatar>
            <div className="flex-1">
              <div className="flex justify-between">
                <Link href="/nocode/post" className="font-medium hover:text-primary">
                  Airtable Make 활용해 업무자동화 하는 방법 알려드립니다
                </Link>
                <span className="text-xs text-gray-500">2025.04.07</span>
              </div>
              <p className="mt-2 text-sm text-gray-700 line-clamp-2">
                안녕하세요 여러분. 워크플로우 자동화에 관심이 있으시다면. 자동화 하고 싶은 일이 있는데 (특히 여러 단계가 있는 workflow) 어디서부터 시작해야 할지 모르겠다면 () ex) 고객으로부터 이메일이 도착하면
              </p>
              <div className="mt-2 flex items-center text-xs text-gray-500">
                <span className="mr-2 bg-gray-100 px-2 py-1 rounded-md">15기 업무자동화</span>
                <span className="flex items-center">
                  <svg xmlns="http://www.w3.org/2000/svg" className="h-4 w-4 mr-1" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 12a3 3 0 11-6 0 3 3 0 016 0z" />
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M2.458 12C3.732 7.943 7.523 5 12 5c4.478 0 8.268 2.943 9.542 7-1.274 4.057-5.064 7-9.542 7-4.477 0-8.268-2.943-9.542-7z" />
                  </svg>
                  4
                </span>
              </div>
            </div>
          </div>
        </Card>

        {/* Post 5 */}
        <Card className="overflow-hidden">
          <div className="p-4 flex gap-4">
            <Avatar className="w-10 h-10">
              <AvatarImage src="https://ext.same-assets.com/1060573272/1036463592.jpeg" alt="Avatar" />
              <AvatarFallback>OS</AvatarFallback>
            </Avatar>
            <div className="flex-1">
              <div className="flex justify-between">
                <Link href="/media/post" className="font-medium hover:text-primary">
                  오앙타 인플루언서
                </Link>
                <span className="text-xs text-gray-500">2025.04.07</span>
              </div>
              <p className="mt-2 text-sm text-gray-700 line-clamp-2">
                안녕하세요오~~ 오앙타 입니다~(하트 뿅뿅 하트~*) 이번엔 1. '입 모양()~~'/ChatGPT 4o로 영상만들기 ~~ 2. 오앙타 공식 인스타그램 */홍보용 비디오~ ChatGPT 4o (입모양). ~~
              </p>
              <div className="mt-2 flex items-center text-xs text-gray-500">
                <span className="mr-2 bg-gray-100 px-2 py-1 rounded-md">15기 인플루언서</span>
                <span className="flex items-center">
                  <svg xmlns="http://www.w3.org/2000/svg" className="h-4 w-4 mr-1" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 12a3 3 0 11-6 0 3 3 0 016 0z" />
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M2.458 12C3.732 7.943 7.523 5 12 5c4.478 0 8.268 2.943 9.542 7-1.274 4.057-5.064 7-9.542 7-4.477 0-8.268-2.943-9.542-7z" />
                  </svg>
                  0
                </span>
              </div>
            </div>
          </div>
        </Card>

        {/* Show More Button */}
        <div className="mt-4 text-center">
          <Button variant="outline">
            더 보기
          </Button>
        </div>
      </div>

      {/* Sidebar/Categories */}
      <div className="mt-10">
        <h2 className="text-xl font-bold mb-4">AI스터디 카테고리</h2>
        <div className="grid grid-cols-2 md:grid-cols-3 gap-3">
          <Link href="/search?query=15기 연구논문" className="bg-white hover:bg-gray-50 border rounded-md p-3 text-sm">
            15기 연구논문
          </Link>
          <Link href="/search?query=15기 나만의콘텐츠" className="bg-white hover:bg-gray-50 border rounded-md p-3 text-sm">
            15기 나만의콘텐츠
          </Link>
          <Link href="/search?query=15기 크롬익스텐션" className="bg-white hover:bg-gray-50 border rounded-md p-3 text-sm">
            15기 크롬익스텐션
          </Link>
          <Link href="/search?query=15기 업무자동화" className="bg-white hover:bg-gray-50 border rounded-md p-3 text-sm">
            15기 업무자동화
          </Link>
          <Link href="/search?query=15기 인플루언서" className="bg-white hover:bg-gray-50 border rounded-md p-3 text-sm">
            15기 인플루언서
          </Link>
          <Link href="/search?query=15기 CTO" className="bg-white hover:bg-gray-50 border rounded-md p-3 text-sm">
            15기 CTO
          </Link>
          <Link href="/search?query=15기 Make쇼츠" className="bg-white hover:bg-gray-50 border rounded-md p-3 text-sm">
            15기 Make쇼츠
          </Link>
          <Link href="/search?query=15기 GPT업무도우미" className="bg-white hover:bg-gray-50 border rounded-md p-3 text-sm">
            15기 GPT업무도우미
          </Link>
          <Link href="/search?query=15기 n8n에이전트" className="bg-white hover:bg-gray-50 border rounded-md p-3 text-sm">
            15기 n8n에이전트
          </Link>
        </div>
      </div>
    </div>
  );
}

import React from 'react';
import { Button } from '@/components/ui/button';
import { Card } from '@/components/ui/card';
import Link from 'next/link';
import Image from 'next/image';

export default function AIStudyListPage() {
  return (
    <div className="max-w-4xl mx-auto py-8">
      <div className="bg-primary text-white rounded-lg overflow-hidden mb-8">
        <div className="p-6">
          <h1 className="text-3xl font-bold mb-4">멋진 AI스터디를 시작해보세요!</h1>
          <p className="mb-6">
            쉽고 빠르게 AI를 배우고 싶다면! <br />
            16기 모집을 서두르세요. (3기 연속 매진)
          </p>
          <Button className="bg-white text-primary hover:bg-gray-100">
            1기부터 AI 스터디 알아보기
          </Button>
        </div>
        <div className="px-6 py-3 bg-primary-dark flex justify-between items-center">
          <div className="text-sm">
            🚀 AI스터디 16기 신청구매하고 최대 할인혜택 받기
          </div>
          <Button variant="secondary" size="sm" className="text-primary bg-white hover:bg-gray-100">
            더 알아보기
          </Button>
        </div>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-12">
        <div className="bg-white shadow-sm rounded-lg overflow-hidden">
          <div className="p-6">
            <h2 className="text-xl font-bold mb-4">다가오는 세션</h2>
            <p className="text-gray-600 mb-4">
              AI 스터디에 참여하고 실무 역량을 향상하세요!
            </p>
            <div className="mt-4">
              <span className="bg-primary/10 text-primary px-2 py-1 rounded text-sm">
                1기부터 AI 스터디
              </span>
            </div>
          </div>
          <div className="bg-gray-50 p-4 border-t">
            <div className="flex items-center justify-between">
              <div>
                <div className="text-sm font-medium">다음 기수: 16기</div>
                <div className="text-xs text-gray-500">5/12~6/9 (4주)</div>
              </div>
              <Button size="sm">
                신청하기
              </Button>
            </div>
          </div>
        </div>

        <div className="bg-white shadow-sm rounded-lg overflow-hidden">
          <div className="p-6">
            <h2 className="text-xl font-bold mb-4">AI 스터디 커리큘럼</h2>
            <p className="text-gray-600 mb-4">
              체계적으로 학습하고 AI 비즈니스 역량을 강화하세요
            </p>
            <div className="flex flex-wrap gap-2 mt-4">
              <span className="bg-gray-100 px-2 py-1 rounded text-sm">
                실습 코칭
              </span>
              <span className="bg-gray-100 px-2 py-1 rounded text-sm">
                라이브 세션
              </span>
              <span className="bg-gray-100 px-2 py-1 rounded text-sm">
                AI 프로젝트
              </span>
            </div>
          </div>
          <div className="bg-gray-50 p-4 border-t">
            <div className="flex items-center justify-between">
              <div className="text-sm">
                <span className="font-medium">4주 과정</span> · 실무 활용 가능
              </div>
              <Button variant="outline" size="sm">
                자세히 보기
              </Button>
            </div>
          </div>
        </div>
      </div>

      <div className="mb-12">
        <h2 className="text-2xl font-bold mb-6">AI 스터디는 어떻게 진행되나요?</h2>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          <Card className="p-6">
            <div className="flex flex-col items-center text-center">
              <div className="w-12 h-12 bg-primary/10 text-primary rounded-full flex items-center justify-center mb-4">
                <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 6.253v13m0-13C10.832 5.477 9.246 5 7.5 5S4.168 5.477 3 6.253v13C4.168 18.477 5.754 18 7.5 18s3.332.477 4.5 1.253m0-13C13.168 5.477 14.754 5 16.5 5c1.747 0 3.332.477 4.5 1.253v13C19.832 18.477 18.247 18 16.5 18c-1.746 0-3.332.477-4.5 1.253" />
                </svg>
              </div>
              <h3 className="font-medium mb-2">체계적인 학습</h3>
              <p className="text-sm text-gray-600">
                매주 정해진 커리큘럼에 따라 AI 기술과 비즈니스 활용 방법을 배웁니다.
              </p>
            </div>
          </Card>

          <Card className="p-6">
            <div className="flex flex-col items-center text-center">
              <div className="w-12 h-12 bg-primary/10 text-primary rounded-full flex items-center justify-center mb-4">
                <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 20h5v-2a3 3 0 00-5.356-1.857M17 20H7m10 0v-2c0-.656-.126-1.283-.356-1.857M7 20H2v-2a3 3 0 015.356-1.857M7 20v-2c0-.656.126-1.283.356-1.857m0 0a5.002 5.002 0 019.288 0M15 7a3 3 0 11-6 0 3 3 0 016 0zm6 3a2 2 0 11-4 0 2 2 0 014 0zM7 10a2 2 0 11-4 0 2 2 0 014 0z" />
                </svg>
              </div>
              <h3 className="font-medium mb-2">라이브 세션</h3>
              <p className="text-sm text-gray-600">
                실시간 온라인 강의와 함께 질의응답 시간을 통해 즉각적인 피드백을 받습니다.
              </p>
            </div>
          </Card>

          <Card className="p-6">
            <div className="flex flex-col items-center text-center">
              <div className="w-12 h-12 bg-primary/10 text-primary rounded-full flex items-center justify-center mb-4">
                <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9.663 17h4.673M12 3v1m6.364 1.636l-.707.707M21 12h-1M4 12H3m3.343-5.657l-.707-.707m2.828 9.9a5 5 0 117.072 0l-.548.547A3.374 3.374 0 0014 18.469V19a2 2 0 11-4 0v-.531c0-.895-.356-1.754-.988-2.386l-.548-.547z" />
                </svg>
              </div>
              <h3 className="font-medium mb-2">실전 프로젝트</h3>
              <p className="text-sm text-gray-600">
                개인 또는 팀 프로젝트를 통해 AI 기술을 실제 문제 해결에 적용해봅니다.
              </p>
            </div>
          </Card>
        </div>
      </div>

      <div className="bg-white shadow-sm rounded-lg overflow-hidden mb-12">
        <div className="p-6">
          <h2 className="text-2xl font-bold mb-4">AI 스터디 16기 모집 중!</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            <div>
              <h3 className="text-lg font-medium mb-2">프로그램 구성</h3>
              <ul className="space-y-2 text-sm">
                <li className="flex items-start">
                  <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 text-primary mr-2 flex-shrink-0" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                  </svg>
                  <span>AI 실무 활용 강의 (4회)</span>
                </li>
                <li className="flex items-start">
                  <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 text-primary mr-2 flex-shrink-0" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                  </svg>
                  <span>실습 과제 및 프로젝트</span>
                </li>
                <li className="flex items-start">
                  <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 text-primary mr-2 flex-shrink-0" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                  </svg>
                  <span>멘토링 세션 (1회)</span>
                </li>
                <li className="flex items-start">
                  <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 text-primary mr-2 flex-shrink-0" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                  </svg>
                  <span>전문가 특강 및 네트워킹 3회</span>
                </li>
              </ul>
            </div>
            <div>
              <h3 className="text-lg font-medium mb-2">기대효과</h3>
              <ul className="space-y-2 text-sm">
                <li className="flex items-start">
                  <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 text-primary mr-2 flex-shrink-0" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                  </svg>
                  <span>최신 AI 트렌드 및 기술 이해</span>
                </li>
                <li className="flex items-start">
                  <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 text-primary mr-2 flex-shrink-0" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                  </svg>
                  <span>실무 적용 가능한 AI 스킬 습득</span>
                </li>
                <li className="flex items-start">
                  <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 text-primary mr-2 flex-shrink-0" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                  </svg>
                  <span>AI 전문가 네트워크 형성</span>
                </li>
                <li className="flex items-start">
                  <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 text-primary mr-2 flex-shrink-0" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                  </svg>
                  <span>프로젝트 포트폴리오 구축</span>
                </li>
              </ul>
            </div>
          </div>
          <div className="mt-8 text-center">
            <Button className="px-8">
              299,000원 신청하기
            </Button>
            <p className="mt-2 text-sm text-gray-500">
              일찍 신청하고 50% 할인 혜택을 받으세요
            </p>
          </div>
        </div>
      </div>

      <div className="bg-white shadow-sm rounded-lg overflow-hidden">
        <div className="p-6">
          <h2 className="text-xl font-bold mb-4">자주 묻는 질문</h2>
          <div className="space-y-4">
            <div>
              <h3 className="font-medium">수강 대상은 누구인가요?</h3>
              <p className="text-sm text-gray-600 mt-1">
                AI 기술에 관심이 있고 실무에 적용하고 싶은 분이라면 누구나 참여 가능합니다.
              </p>
            </div>
            <div>
              <h3 className="font-medium">사전 지식이 필요한가요?</h3>
              <p className="text-sm text-gray-600 mt-1">
                기본적인 컴퓨터 활용 능력만 있으면 참여 가능합니다. 프로그래밍 지식이 없어도 괜찮습니다.
              </p>
            </div>
            <div>
              <h3 className="font-medium">환불 정책은 어떻게 되나요?</h3>
              <p className="text-sm text-gray-600 mt-1">
                스터디 시작 전까지 100% 환불이 가능하며, 시작 후에는 일부 환불이 적용됩니다.
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}


'use client';

import { useState } from 'react';
import { Card } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { useRouter } from 'next/navigation';

export default function WritePage() {
  const router = useRouter();
  const [title, setTitle] = useState('');
  const [content, setContent] = useState('');
  const [category, setCategory] = useState('ai-space');

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    // Here you would typically send this to your backend
    const newPost = {
      id: Date.now().toString(),
      title,
      content,
      category,
      author: 'User',
      date: new Date().toLocaleDateString()
    };
    
    // For now, we'll just redirect back to the category page
    router.push(`/${category}`);
  };

  return (
    <div className="container mx-auto py-8">
      <Card className="max-w-2xl mx-auto">
        <form onSubmit={handleSubmit} className="p-6">
          <h1 className="text-2xl font-bold mb-6">새 글 작성</h1>
          
          <div className="mb-4">
            <label className="block text-sm font-medium mb-2">카테고리</label>
            <select
              value={category}
              onChange={(e) => setCategory(e.target.value)}
              className="w-full p-2 border rounded-md"
            >
              <option value="ai-space">AI SPACE</option>
              <option value="my-space">MY SPACE</option>
            </select>
          </div>

          <div className="mb-4">
            <label className="block text-sm font-medium mb-2">제목</label>
            <input
              type="text"
              value={title}
              onChange={(e) => setTitle(e.target.value)}
              className="w-full p-2 border rounded-md"
              placeholder="제목을 입력하세요"
            />
          </div>

          <div className="mb-6">
            <label className="block text-sm font-medium mb-2">내용</label>
            <textarea
              value={content}
              onChange={(e) => setContent(e.target.value)}
              className="w-full p-2 border rounded-md h-48"
              placeholder="내용을 입력하세요"
            />
          </div>

          <div className="flex justify-end space-x-4">
            <Button
              type="button"
              variant="outline"
              onClick={() => router.back()}
            >
              취소
            </Button>
            <Button type="submit">
              작성완료
            </Button>
          </div>
        </form>
      </Card>
    </div>
  );
}

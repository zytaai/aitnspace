
'use client';

import { useParams } from 'next/navigation';
import { Card } from "@/components/ui/card";
import { posts } from "@/data/posts";
import Link from "next/link";
import { Button } from "@/components/ui/button";

export default function PostPage() {
  const params = useParams();
  const post = posts.find(p => p.id === params.id);
  
  if (!post) {
    return <div>Post not found</div>;
  }

  return (
    <div className="container mx-auto py-8">
      <Link href={`/${post.category.toLowerCase()}`}>
        <Button variant="outline" className="mb-6">← Back to {post.category} SPACE</Button>
      </Link>
      
      <Card className="max-w-2xl mx-auto">
        <div className="p-6">
          <div className="flex justify-between items-start mb-4">
            <h1 className="text-2xl font-bold">{post.title}</h1>
            <span className="text-gray-500">{post.date}</span>
          </div>
          <p className="text-gray-700 mb-4">{post.content}</p>
          <div className="text-gray-500">Written by {post.author}</div>
        </div>
      </Card>
    </div>
  );
}


'use client';

import { useParams } from 'next/navigation';
import { Card } from "@/components/ui/card";
import { posts, Post } from "@/data/posts";
import Link from "next/link";

export default function CategoryPage() {
  const params = useParams();
  const category = String(params.category).toLowerCase();
  const validCategories = ['ai-space', 'my-space', 'idea-space', 'trend-space', 'news-space'];
  
  if (!validCategories.includes(category)) {
    return (
      <div className="container mx-auto py-8">
        <h1 className="text-2xl font-bold mb-6">Invalid Category</h1>
        <p>The requested category does not exist.</p>
      </div>
    );
  }
  
  const categoryPosts = posts.filter(post => post.category === category);

  return (
    <div className="container mx-auto py-8">
      <h1 className="text-2xl font-bold mb-6">{category} SPACE</h1>
      <div className="grid gap-4">
        {categoryPosts.map((post) => (
          <Link key={post.id} href={`/${category.toLowerCase()}/${post.id}`}>
            <Card className="hover:shadow-lg transition-shadow">
              <div className="p-4">
                <div className="flex justify-between items-start">
                  <h2 className="text-xl font-semibold mb-2">{post.title}</h2>
                  <span className="text-sm text-gray-500">{post.date}</span>
                </div>
                <p className="text-gray-600 mb-2">{post.content}</p>
                <div className="text-sm text-gray-500">By {post.author}</div>
              </div>
            </Card>
          </Link>
        ))}
      </div>
    </div>
  );
}

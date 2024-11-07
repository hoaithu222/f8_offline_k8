import { Metadata } from "next";
import Link from "next/link";
import React from "react";
export const metadata: Metadata = {
  title: "Bài viết - F8",
};
type Post = {
  id: string;
  title: string;
  body?: string;
};
const getPost = async () => {
  const response = await fetch("https://jsonplaceholder.typicode.com/posts");
  if (!response.ok) {
    throw new Error("Lỗi ");
  }
  return response.json();
};
export default async function HomePost() {
  const posts = await getPost();
  return (
    <div>
      <h1>Danh sách bài viết</h1>
      {posts?.map((post: Post) => (
        <div key={post.id}>
          <h2>{post.title}</h2>
          <Link href={`posts/${post.id}`}>Xem bài viết</Link>
        </div>
      ))}
    </div>
  );
}

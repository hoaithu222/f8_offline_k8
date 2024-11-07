import { Metadata } from "next";

type PageProps = {
  params: { id: string };
};
type Post = {
  id: string;
  title: string;
  body?: string;
};
const getPost = async (id: string): Promise<Post> => {
  {
    const response: Response = await fetch(
      `https://jsonplaceholder.typicode.com/posts/${id}`
    );
    return response.json();
  }
};
export const generateMetadata = async ({
  params,
}: PageProps): Promise<Metadata> => {
  const { id } = await params;
  const post: Post = await getPost(id);
  return {
    title: post.title,
  };
};
export default async function PostDetailPage({ params }: PageProps) {
  const { id } = await params;
  const post: Post = await getPost(id);
  return (
    <div>
      <h1>{post.title}</h1>
      <p>{post.body}</p>
    </div>
  );
}

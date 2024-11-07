import { notFound } from "next/navigation";

const getPost = async (id) => {
  try {
    const response = await fetch(
      `https://jsonplaceholder.typicode.com/posts/${id}`
    );
    if (!response.ok) {
      throw new Error("Fetch To Failed");
    }
    const data = await response.json();
    return data;
  } catch (error) {
    return false;
  }
};
export default async function PostDetail({ id }) {
  const post = await getPost(id);
  if (!post) {
    return notFound();
  }
  return (
    <div>
      <h1>{post.title}</h1>
      <p>{post.body}</p>
    </div>
  );
}

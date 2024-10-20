import { notFound } from "next/navigation";

const getPost = async (id) => {
  try {
    const response = await fetch(
      `https://jsonplaceholder.typicode.com/posts/${id}`
    );
    const data = await response.json();
    if (!Object.keys(data).length) {
      throw new Error("Fetch to Failed");
    }
    return data;
  } catch (error) {
    return false;
  }
};

export default async function PostDetail({ id }) {
  const post = await getPost(id);
  if (!Object.keys(post).length) {
    return notFound();
  }
  return (
    <div>
      <h1>{post.title}</h1>
      <p>{post.body}</p>
    </div>
  );
}

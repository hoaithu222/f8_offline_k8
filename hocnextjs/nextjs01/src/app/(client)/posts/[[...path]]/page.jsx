import PostDetail from "./PostDetail";
import PostList from "./PostList";

export default function PostsPage({ params }) {
  const path = params.path;
  if (path) {
    return <PostDetail id={path[0]} />;
  }
  return <PostList />;
}

import React from "react";
import PostList from "./PostList";
import PostDetail from "./PostDetail";

export default function PostPage({ params }) {
  const { path } = params.path;
  // console.log(path);
  if (path) {
    return <PostDetail />;
  }
  return (
    <div>
      <h1>Posts</h1>
      {/* <h2>{path && path[0]}</h2> */}
      <PostList />
    </div>
  );
}

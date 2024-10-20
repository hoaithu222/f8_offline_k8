import React from "react";
import Button from "./Button";
const getPost = async () => {
  const response = await fetch("https://jsonplaceholder.typicode.com/posts");
  return response.json();
};

export default async function PostList() {
  const postList = await getPost();
  return (
    <div>
      {postList.map((post) => {
        return (
          <div
            key={post.id}
            style={{
              marginBottom: "15px",
              paddingBottom: "15px",
              borderBottom: "1px solid gray",
            }}
          >
            <h3>{post.title}</h3>
            <Button id={post.id} />
          </div>
        );
      })}
    </div>
  );
}

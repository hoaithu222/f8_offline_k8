"use client";

import { useRouter } from "next/router";

export default function Button({ id }) {
  const router = useRouter();
  const handleClick = (id) => {
    router.push(`/posts/${id}`);
  };

  return (
    <div>
      <button onClick={handleClick}>Chi tiết</button>
    </div>
  );
}

"use client";

import { useRouter } from "next/navigation";

export default function Button({ id }) {
  const router = useRouter();
  const handleClick = () => {
    router.push(`/posts/${id}`);
  };
  return <button onClick={handleClick}>Chi tiết</button>;
}

"use client";

import { clearCacheByPath, clearCacheByTags } from "@/utils/cache";
import { useRouter } from "next/navigation";
import { useState } from "react";

export default function TodoAdd() {
  const [title, setTitle] = useState("");
  const router = useRouter();
  const handleChange = (e) => {
    setTitle(e.target.value);
  };
  const handleSubmit = async (e) => {
    e.preventDefault();
    const response = await fetch(`${process.env.API_SERVER}/todos`, {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({ title }),
    });
    if (response.ok) {
      //   router.refresh();
      //   router.refresh();
      // clear cache
      //   clearCacheByPath("/todos");
      clearCacheByTags("/todos");
      router.refresh();
    }
    const data = await response.json();
  };

  return (
    <div>
      <form action="" onSubmit={handleSubmit}>
        <input type="text" placeholder="Title..." onChange={handleChange} />
        <button>Add</button>
      </form>
    </div>
  );
}

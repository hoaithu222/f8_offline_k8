"use client";

import { clearCacheByPath, clearCacheByTag } from "@/utils/cache";
import { useRouter } from "next/navigation";
import { useState } from "react";

export default function TodoAdd() {
  const [title, setTitle] = useState("");
  const router = useRouter();
  const handleChangeValue = (e) => {
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
      //clear cache
      // clearCacheByPath("/todos");
      clearCacheByTag("todo-list");
      router.refresh();
    }
  };
  return (
    <div>
      <form action="" onSubmit={handleSubmit}>
        <input
          type="text"
          placeholder="Title..."
          onChange={handleChangeValue}
        />
        <button>Add</button>
      </form>
    </div>
  );
}

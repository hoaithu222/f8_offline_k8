"use client";

import { useState } from "react";
import { mutate } from "swr";

export default function TodoAdd() {
  const [title, setTitle] = useState("");
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
      const data = await response.json();
      mutate(
        `${process.env.API_SERVER}/todos?q=`,
        (prevData = []) => {
          return [...prevData, data];
        },
        {
          revalidate: false,
        }
      );
      setTitle("");
    }
  };
  return (
    <div>
      <form onSubmit={handleSubmit}>
        <input
          type="text"
          placeholder="Title..."
          onChange={(e) => setTitle(e.target.value)}
          value={title}
        />
        <button>Add</button>
      </form>
    </div>
  );
}

"use client";

import { useState } from "react";

export default function ProductList() {
  const [title, setTitle] = useState("Danh sách sản phẩm");
  // localStorage.setItem("title", title);
  return (
    <div>
      <h2>{title}</h2>
      <button onClick={() => setTitle("Học NextJS không khó")}>Click me</button>
    </div>
  );
}

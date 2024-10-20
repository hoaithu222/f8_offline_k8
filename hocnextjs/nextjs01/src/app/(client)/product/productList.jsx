"use client";

import { useState } from "react";

// bắt buộc phải ở đầu file
export default function ProductList() {
  const [title, setTitel] = useState("");
  return (
    <div>
      <h2>Danh sách sản phẩm</h2>
      <button onClick={() => setTitel("Học next js không khó")}>Submit</button>
      <h3>{title}</h3>
    </div>
  );
}

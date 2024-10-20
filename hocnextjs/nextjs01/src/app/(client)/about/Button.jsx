"use client";

import React from "react";

export default function Button() {
  const handleClick = () => {
    console.log("Giới thiệu");
  };
  return (
    <div>
      <button onClick={handleClick}>Click</button>
    </div>
  );
}

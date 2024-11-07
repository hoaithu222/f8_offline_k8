"use client";

export default function Button() {
  return (
    <button
      onClick={() => {
        console.log(1);
      }}
    >
      Click me
    </button>
  );
}

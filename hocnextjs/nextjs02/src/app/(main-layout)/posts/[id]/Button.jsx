"use client";

export default function Button() {
  const handleClick = (e) => {
    console.log(e);
  };
  return (
    <div>
      <button onClick={handleClick}>Click Me</button>
    </div>
  );
}

"use client";

// import DemoServer from "./DemoServer";

export default function DemoClient({ children }) {
  console.log("demo client");
  return (
    <div>
      <h2>Demo client</h2>
      {children}
    </div>
  );
}

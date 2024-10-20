import { headers } from "next/headers";
import React from "react";

export default function HomePage() {
  const user = headers().get("x-user");
  console.log(user);
  return (
    <div>
      <h1>Home</h1>
      <h2>User : {user}</h2>
    </div>
  );
}

"use client";
import { usePathname, useRouter, useSearchParams } from "next/navigation";
import React from "react";

export default function SearchForm() {
  const search = useSearchParams();
  const route = useRouter();
  const pathname = usePathname();
  const handleClick = () => {
    route.push(pathname);
  };
  return (
    <div>
      <h1>SearchForm</h1>
      <h3>KeyWord:{search.get("keyword")}</h3>
      <h3>Status:{search.get("status")}</h3>
      <button onClick={handleClick}>Reset</button>
    </div>
  );
}

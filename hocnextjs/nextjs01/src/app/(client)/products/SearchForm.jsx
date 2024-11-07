"use client";
import { usePathname, useRouter, useSearchParams } from "next/navigation";

export default function SearchForm() {
  const search = useSearchParams();
  const router = useRouter();
  console.log(router);

  const pathname = usePathname();
  const handleClick = () => {
    router.push(pathname);
  };
  return (
    <div>
      <h2>Search Form</h2>
      <h3>Keyword: {search.get("keyword")}</h3>
      <h3>Status: {search.get("status")}</h3>
      <button onClick={handleClick}>Reset Query</button>
    </div>
  );
}

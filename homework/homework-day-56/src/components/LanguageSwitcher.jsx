"use client";

import { useRouter } from "next/navigation";
import { useState } from "react";

export default function LanguageSwitcher() {
  const [isEn, setIsEn] = useState(true);
  const router = useRouter();
  const handleClick = () => {
    const newLocale = isEn ? "vi" : "en";
    setIsEn(!isEn);
    router.push(`/${newLocale}`);
  };

  return (
    <div>
      <button
        onClick={handleClick}
        style={{
          border: "1px solid gray",
          padding: "10px 30px",
          borderRadius: "10px",
        }}
      >
        {isEn ? "vi" : "en"}
      </button>
    </div>
  );
}

"use client";

import { useRouter, usePathname } from "next/navigation";
import { useEffect, useState } from "react";

export default function LanguageSwitcher() {
  const router = useRouter();
  const pathname = usePathname();
  const [currentLocale, setCurrentLocale] = useState("en");

  useEffect(() => {
    const locale = pathname.startsWith("/vi") ? "vi" : "en";
    setCurrentLocale(locale);
  }, [pathname]);

  const handleClick = () => {
    const newLocale = currentLocale === "en" ? "vi" : "en";
    let newPath = pathname.replace(/^\/[a-z]{2}/, "");
    newPath = `/${newLocale}${newPath}` || `/${newLocale}`;

    router.push(newPath);
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
        {currentLocale === "en" ? "vi" : "en"}
      </button>
    </div>
  );
}

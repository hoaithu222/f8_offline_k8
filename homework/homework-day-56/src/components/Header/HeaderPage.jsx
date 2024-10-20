"use client";
import React, { useEffect, useState } from "react";
import { useTranslations } from "next-intl";
import Link from "next/link";
import { FaFacebookSquare } from "react-icons/fa";
import { FaYoutube } from "react-icons/fa";
import DarkLight from "../DarkLight";
import LanguageSwitcher from "../LanguageSwitcher";
import "./Header.css";

export default function HeaderPage() {
  const t = useTranslations("HeaderPage");
  const [isDark, setIsDark] = useState(true);

  const handleThemeChange = (darkMode) => {
    setIsDark(darkMode);
  };

  useEffect(() => {
    if (isDark) {
      document.body.classList.add("dark-mode");
      document.body.classList.remove("light-mode");
    } else {
      document.body.classList.add("light-mode");
      document.body.classList.remove("dark-mode");
    }
  }, [isDark]);

  return (
    <header
      className={`flex justify-between items-center p-6 ${
        isDark ? "dark-mode" : "light-mode"
      }`}
    >
      <div className="logo flex items-center space-x-1">
        <Link
          href="https://fullstack-nodejs.fullstack.edu.vn/"
          className="text-lg font-bold"
        >
          {t("siteTitle")}
        </Link>
        <Link href="/" className="text-lg nav-home">
          {t("navHome")}
        </Link>
      </div>
      <div className="nav flex items-center space-x-6">
        <Link href="https://www.facebook.com/groups/f8official">
          <FaFacebookSquare
            className={`text-2xl ${isDark ? "text-white" : "text-black"}`}
          />
        </Link>
        <Link href="https://www.youtube.com/c/F8VNOfficial">
          <FaYoutube
            className={`text-2xl ${isDark ? "text-white" : "text-black"}`}
          />
        </Link>
        <DarkLight onThemeChange={handleThemeChange} />
        <div className="mr-4">
          <LanguageSwitcher />
        </div>
      </div>
    </header>
  );
}

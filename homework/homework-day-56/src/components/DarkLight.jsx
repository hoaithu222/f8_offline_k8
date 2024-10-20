"use client";
import { MdLightMode } from "react-icons/md";
import { MdDarkMode } from "react-icons/md";
import { useState, useEffect } from "react";

export default function DarkLight({ onThemeChange }) {
  const [isDark, setDark] = useState(true);

  useEffect(() => {
    const savedTheme = localStorage.getItem("isDark");
    if (savedTheme) {
      const darkMode = JSON.parse(savedTheme);
      setDark(darkMode);
    }
  }, []);

  useEffect(() => {
    localStorage.setItem("isDark", JSON.stringify(isDark));

    if (isDark) {
      document.body.classList.add("dark-mode");
      document.body.classList.remove("light-mode");
    } else {
      document.body.classList.add("light-mode");
      document.body.classList.remove("dark-mode");
    }
  }, [isDark]);

  const handleClick = () => {
    setDark((prev) => {
      const newDark = !prev;
      onThemeChange(newDark);
      return newDark;
    });
  };

  return (
    <div>
      <button onClick={handleClick}>
        {isDark ? <MdLightMode /> : <MdDarkMode />}
      </button>
    </div>
  );
}

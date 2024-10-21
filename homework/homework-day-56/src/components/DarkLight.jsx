"use client";
import { MdLightMode, MdDarkMode } from "react-icons/md";

export default function DarkLight({ isDark, onThemeChange }) {
  const handleClick = () => {
    onThemeChange(!isDark);
  };

  return (
    <div>
      <button onClick={handleClick}>
        {isDark ? <MdLightMode /> : <MdDarkMode />}
      </button>
    </div>
  );
}

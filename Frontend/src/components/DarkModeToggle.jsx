import { useContext } from "react";
import { ThemeContext } from "../context/ThemeContext";

export default function DarkModeToggle() {
  const { darkMode, setDarkMode } = useContext(ThemeContext);

  return (
    <button
      onClick={() => setDarkMode(!darkMode)}
      className="px-3 py-1 bg-gray-200 dark:bg-gray-700 rounded-lg"
    >
      {darkMode ? "☀ Light" : "🌙 Dark"}
    </button>
  );
}
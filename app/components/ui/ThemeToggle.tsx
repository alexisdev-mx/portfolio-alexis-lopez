"use client";
import { useTheme } from "next-themes";
import { useEffect, useState } from "react";
import { FiSun, FiMoon } from "react-icons/fi";

export default function ThemeToggle() {
  const { resolvedTheme, setTheme } = useTheme();
  const [mounted, setMounted] = useState(false);
  useEffect(() => setMounted(true), []);
  if (!mounted) return null;

  const isDark = resolvedTheme === "dark";
  return (
    <button
      aria-label="Cambiar tema"
      className="inline-flex items-center gap-2 rounded-md border border-gray-300 dark:border-gray-700 px-3 py-2 bg-white/80 dark:bg-gray-800/80 text-gray-800 dark:text-gray-100 hover:bg-gray-100 dark:hover:bg-gray-700"
      onClick={() => setTheme(isDark ? "light" : "dark")}
      title={isDark ? "Cambiar a modo claro" : "Cambiar a modo oscuro"}
    >
      {isDark ? <FiSun aria-hidden /> : <FiMoon aria-hidden />}
      <span className="text-sm">{isDark ? "Claro" : "Oscuro"}</span>
    </button>
  );
}

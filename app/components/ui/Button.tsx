"use client";
import { cn } from "@/lib/utils";
import { motion } from "framer-motion";

type Props = React.ButtonHTMLAttributes<HTMLButtonElement> & {
  variant?: "primary" | "ghost";
};

export default function Button({ className, variant = "primary", ...props }: Props) {
  const base =
    "inline-flex items-center justify-center rounded-md px-4 py-2 text-sm font-medium " +
    "transition focus:outline-none focus-visible:ring-2 focus-visible:ring-[--color-accent] " +
    "disabled:opacity-50";

  const variants = {
    // Fallbacks HEX + vars (la última clase gana).
    primary:
      "text-white " +
      "bg-[#1E3A8A] bg-[--color-primary] hover:opacity-90 " + // claro
      "dark:text-black dark:bg-[#06B6D4] dark:bg-[--color-primary-dark]", // oscuro

    // Ghost legible en ambos temas
    ghost:
      "bg-transparent border border-gray-300 text-gray-800 hover:bg-gray-100 " +
      "dark:border-gray-700 dark:text-white dark:bg-white/10 dark:hover:bg-white/15"
  };

  return (
    <motion.button
      whileTap={{ scale: 0.98 }}
      className={cn(base, variants[variant], className)}
      {...(props as React.ComponentProps<typeof motion.button>)}
    />
  );
}

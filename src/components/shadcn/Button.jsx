import React from "react";
import { cn } from "./utils";

export function Button({ children, variant = "default", className, ...props }) {
  const base = "inline-flex items-center justify-center rounded-md text-sm font-medium transition focus:outline-none focus:ring-2 focus:ring-offset-2";

  const variants = {
    default: "bg-blue-600 text-white hover:bg-blue-700 px-4 py-2",
    outline: "border border-gray-300 text-gray-700 px-4 py-2 hover:bg-gray-100",
    subtle: "text-gray-600 px-3 py-1 hover:text-gray-800",
  };

  return (
    <button className={cn(base, variants[variant], className)} {...props}>
      {children}
    </button>
  );
}

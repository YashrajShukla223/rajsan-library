import React from "react";
import { cn } from "./utils";

export function Badge({ children, className }) {
  return (
    <span className={cn("inline-block bg-blue-100 text-blue-800 text-xs font-semibold px-2 py-1 rounded-full", className)}>
      {children}
    </span>
  );
}

import React from "react";
import { cn } from "./utils";

export function Input({ className, ...props }) {
  return (
    <input
      className={cn(
        "border rounded-md px-3 py-2 text-sm w-full focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-blue-500",
        className
      )}
      {...props}
    />
  );
}

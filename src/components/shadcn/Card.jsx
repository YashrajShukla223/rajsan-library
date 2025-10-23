import React from "react";

export function Card({ title, children, className }) {
  return (
    <div className={`bg-white dark:bg-gray-800 shadow-md hover:shadow-lg transition rounded-xl p-6 border border-gray-200 ${className}`}>
      {title && <h3 className="text-lg font-semibold mb-3">{title}</h3>}
      {children}
    </div>
  );
}

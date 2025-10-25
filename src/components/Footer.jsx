import React from "react";

export default function Footer() {
  return (
    <footer className="bg-gradient-to-br from-blue-50 via-white to-gray-100 dark:from-gray-900 dark:via-gray-800 dark:to-gray-900 shadow-inner mt-12 py-10 border-t border-gray-200 dark:border-gray-700">
      <div className="max-w-6xl mx-auto px-6 grid grid-cols-12 gap-6 items-center">
        {/* === Left Section (Your Profile) === */}
        <div className="col-span-12 md:col-span-4 flex flex-col items-center md:items-start text-center md:text-left">
          <img
            src="/RajSanPhotos/9.jpeg"
            alt="Yashraj Shukla"
            className="w-28 h-28 rounded-full object-cover border-4 border-blue-500 shadow-lg mb-3"
          />
          <h3 className="text-xl font-semibold text-gray-800 dark:text-white">
            Yashraj Shukla
          </h3>
          <p className="text-gray-600 dark:text-gray-300 text-sm">
            Senior Software Engineer & Entrepreneur
          </p>
        </div>

        {/* === Center Section (Library Info) === */}
        <div className="col-span-12 md:col-span-4 text-center">
          <h3 className="text-lg font-semibold text-gray-800 dark:text-white mb-2">
            RajSan Library
          </h3>
          <p className="text-gray-600 dark:text-gray-300 text-sm leading-relaxed">
            📍 Behlot Bypass Road, Near Old Dehat Police Station, Ganj Basoda, MP
          </p>
          <p className="text-gray-600 dark:text-gray-300 text-sm mt-1">
            📞 <a href="tel:9827583132" className="hover:underline">9827583132</a>,{" "}
            <a href="tel:8966835743" className="hover:underline">8966835743</a>
          </p>
          <p className="text-sm text-gray-500 mt-1">
            Owner: Mr. Rajkumar Shukla and Er. Yashraj Shukla
          </p>
        </div>

        {/* === Right Section (Credits) === */}
        <div className="col-span-12 md:col-span-4 flex flex-col justify-center items-center md:items-end text-center md:text-right">
          <p className="text-gray-500 dark:text-gray-400 text-sm">
            Website designed & developed by
          </p>
          <p className="text-blue-600 dark:text-blue-400 font-medium">
            Yashraj Shukla
          </p>
          <p className="text-gray-400 text-xs mt-2">
            © {new Date().getFullYear()} RajSan Library. All rights reserved.
          </p>
        </div>
      </div>
    </footer>
  );
}

import React from "react";

export default function Stats() {
  return (
    <div
      className="relative min-h-[90vh] bg-cover bg-center flex flex-col justify-center items-center text-white overflow-hidden"
      style={{
        backgroundImage: "url('/RajSanPhotos/5.webp')",
      }}
    >
      {/* Blurred Overlay */}
      <div className="absolute inset-0 bg-black/60 backdrop-blur-sm"></div>

      {/* Main Content */}
      <div className="relative z-10 text-center max-w-3xl px-6 py-10 bg-white/10 backdrop-blur-md rounded-2xl shadow-2xl border border-white/20 animate-fadeIn">
        <h1 className="text-5xl font-extrabold mb-4 tracking-wide text-blue-300 drop-shadow-lg">
          RajSan Library
        </h1>
        <p className="text-xl font-medium mb-6 text-gray-200 leading-relaxed">
          The most peaceful and productive study hub in Ganj Basoda, Madhya Pradesh.  
          Enjoy private cabins, superfast Wi-Fi, and a calm learning environment  
          designed to help you stay focused and achieve more every day.
        </p>

        <div className="grid grid-cols-12 gap-4 mt-6">
          <div className="col-span-6 md:col-span-3 p-4 bg-white/20 rounded-lg shadow hover:bg-white/30 transition">
            <h3 className="text-3xl font-bold text-blue-400">100+</h3>
            <p className="text-sm text-gray-200">Daily Readers</p>
          </div>
          <div className="col-span-6 md:col-span-3 p-4 bg-white/20 rounded-lg shadow hover:bg-white/30 transition">
            <h3 className="text-3xl font-bold text-blue-400">50+</h3>
            <p className="text-sm text-gray-200">Private Cabins</p>
          </div>
          <div className="col-span-6 md:col-span-3 p-4 bg-white/20 rounded-lg shadow hover:bg-white/30 transition">
            <h3 className="text-3xl font-bold text-blue-400">24/7</h3>
            <p className="text-sm text-gray-200">Wi-Fi Access</p>
          </div>
          <div className="col-span-6 md:col-span-3 p-4 bg-white/20 rounded-lg shadow hover:bg-white/30 transition">
            <h3 className="text-3xl font-bold text-blue-400">300+</h3>
            <p className="text-sm text-gray-200">Total Happy Members</p>
          </div>
        </div>

        <button
          onClick={() => (window.location.href = "tel:8966835743")}
          className="mt-8 bg-blue-600 hover:bg-blue-700 text-white px-8 py-3 rounded-full font-semibold text-lg shadow-lg transition transform hover:scale-105"
        >
          📞 Join Now — Call Us
        </button>
      </div>

      {/* Simple animation */}
      <style>{`
        @keyframes fadeIn {
          from { opacity: 0; transform: translateY(20px); }
          to { opacity: 1; transform: translateY(0); }
        }
        .animate-fadeIn {
          animation: fadeIn 1.2s ease-in-out forwards;
        }
      `}</style>
    </div>
  );
}

import React from "react";
import { Card } from "../components/shadcn/Card";
import { motion } from "framer-motion";

export default function RajSanGallery() {
  // You can import all your RajSanPhotos dynamically
  const images = [
    "/RajSanPhotos/1.webp",
    "/RajSanPhotos/2.webp",
    "/RajSanPhotos/3.webp",
    "/RajSanPhotos/4.webp",
    "/RajSanPhotos/5.webp",
    "/RajSanPhotos/6.webp",
    "/RajSanPhotos/7.webp",
    "/RajSanPhotos/8.webp",
  ];

  return (
    <div className="relative min-h-screen bg-gradient-to-b from-gray-900 to-black text-white">
      {/* === Overlayed Background with Dark Tint === */}
      <div className="absolute inset-0 bg-black/50"></div>

      {/* === Main Grid Container === */}
      <div className="relative z-10 grid grid-cols-12 gap-6 px-6 py-12">
        {/* === Header Section === */}
        <div className="col-span-12 text-center mb-8">
          <h1 className="text-5xl font-extrabold tracking-wide text-yellow-400 mb-2">
            RajSan Library Gallery
          </h1>
          <p className="text-lg text-gray-300">
            Explore glimpses of our serene study spaces, cozy cabins, and vibrant community moments.
          </p>
        </div>

        {/* === Image Grid === */}
        {images.map((src, index) => (
          <motion.div
            key={index}
            className="col-span-12 sm:col-span-6 md:col-span-4 lg:col-span-3 flex justify-center"
            initial={{ opacity: 0, y: 50 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: index * 0.1 }}
            viewport={{ once: true }}
          >
            <Card className="overflow-hidden hover:scale-105 transition-transform duration-300 ease-in-out bg-gray-800/60 border-gray-700 w-full max-w-sm">
              <img
                src={src}
                alt={`RajSan Library ${index + 1}`}
                className="w-full h-64 object-cover rounded-lg"
              />
            </Card>
          </motion.div>
        ))}
      </div>
    </div>
  );
}

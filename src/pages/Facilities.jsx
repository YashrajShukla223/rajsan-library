import React from "react";
import { Card } from "../components/shadcn/Card";
import { Badge } from "../components/shadcn/Badge";
import { motion } from "framer-motion";

// Array of facility items with name and Unsplash image
const facilityData = [
  {
    name: "Quiet Study Environment",
    img: "https://plus.unsplash.com/premium_photo-1663054513940-4e0304276fc8?ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&q=80&w=2386",
  },
  {
    name: "Personal Cabins",
    img: "https://plus.unsplash.com/premium_photo-1666299791006-10b22127ed9b?ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&q=80&w=2406",
  },
  {
    name: "Free High-Speed Wi-Fi",
    img: "https://images.unsplash.com/photo-1521818378484-02fdc09f03c9?ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&q=80&w=2070",
  },
  {
    name: "Proper Lighting & Ventilation",
    img: "https://images.unsplash.com/photo-1717084864320-23463f0f7c93?ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&q=80&w=2070",
  },
  {
    name: "Charging Points at Every Seat",
    img: "https://images.unsplash.com/photo-1760462787657-35f4897aa136?ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&q=80&w=927",
  },
  {
    name: "Clean Washrooms",
    img: "https://plus.unsplash.com/premium_photo-1743893928190-43a5a5edeec3?ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&q=80&w=2070",
  },
  {
    name: "Dedicated Lunch Area",
    img: "https://plus.unsplash.com/premium_photo-1671070687983-515c2264eb6e?ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&q=80&w=1036",
  },
  {
    name: "Bike & Car Parking",
    img: "https://images.unsplash.com/photo-1551604775-946016929ad6?ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&q=80&w=2394",
  },
  {
    name: "Daily Newspaper & Magazines",
    img: "https://plus.unsplash.com/premium_photo-1725075086642-584ef254b39c?ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&q=80&w=2070",
  },
];

export default function Facilities() {
  return (
    <div
      className="bg-gray-100 min-h-screen p-6"
      style={{
        backgroundImage:
          "url('https://images.unsplash.com/photo-1524995997946-a1c2e315a42f?auto=format&fit=crop&w=1350&q=80')",
        backgroundSize: "cover",
        backgroundPosition: "center",
      }}
    >
      {/* Overlay for better readability */}
      <div className="bg-black/40 min-h-screen p-6 rounded-xl">
        {/* Page Title */}
        <h2 className="text-4xl font-bold text-white text-center mb-8 animate-fadeIn">
          Our Facilities
        </h2>

        {/* Facilities Grid */}
        <div className="grid grid-cols-12 gap-6">
          {facilityData.map((facility, index) => (
            <motion.div
              key={index}
              className="col-span-12 sm:col-span-6 md:col-span-4"
              initial={{ opacity: 0, y: 50 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: index * 0.1 }}
              viewport={{ once: true }}
            >
              <Card className="p-0 overflow-hidden relative hover:scale-105 transform transition duration-500 shadow-lg">
                <img
                  src={facility.img}
                  alt={facility.name}
                  className="w-full h-48 object-cover"
                />
                <div className="absolute bottom-0 left-0 w-full bg-black/60 p-2 text-center">
                  <Badge className="text-black">{facility.name}</Badge>
                </div>
              </Card>
            </motion.div>
          ))}
        </div>
      </div>
    </div>
  );
}

import React from "react";
import { Card } from "../components/shadcn/Card";
import { Badge } from "../components/shadcn/Badge";

export default function Facilities() {
  return (
    <div
      className="bg-cover bg-center min-h-[80vh] p-6 rounded-xl"
      style={{
        backgroundImage:
          "url('https://images.unsplash.com/photo-1519681393784-d120267933ba?auto=format&fit=crop&w=1350&q=80')",
      }}
    >
      <div className="bg-white/80 p-6 rounded-xl shadow-md">
        <h2 className="text-3xl font-bold text-blue-800 mb-4">Our Facilities</h2>
        <div className="grid grid-cols-12 gap-4">
          {[
            "Quiet Study Environment",
            "Personal Cabins",
            "Free High-Speed Wi-Fi",
            "Proper Lighting & Ventilation",
            "Charging Points at Every Seat",
            "Clean Washrooms",
            "Dedicated Lunch Area",
            "Bike & Car Parking",
            "Daily Newspaper & Magazines",
          ].map((item, i) => (
            <div key={i} className="col-span-12 sm:col-span-6 md:col-span-4">
              <Card>
                <Badge>{item}</Badge>
              </Card>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}

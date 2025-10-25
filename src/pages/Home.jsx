import React, { useState } from "react";
import { Card } from "../components/shadcn/Card";
import { Button } from "../components/shadcn/Button";
import { Badge } from "../components/shadcn/Badge";
import { Modal } from "../components/shadcn/Modal";
import { Input } from "../components/shadcn/Input";
import GraphSection from "../components/GraphSection";
import { motion } from "framer-motion";

export default function Home() {
  const [modalOpen, setModalOpen] = useState(false);

  return (
    <div
      className="relative min-h-screen bg-cover bg-center text-white"
      style={{ backgroundImage: "url('/RajSanPhotos/1.webp')" }}
    >
      {/* Blurred Overlay */}
      <div className="absolute inset-0 bg-black/60 backdrop-blur-sm"></div>

      {/* Main Content */}
      <div className="relative grid grid-cols-12 gap-6 p-6 lg:p-12">
        {/* Left Column (8/12) */}
        <div className="col-span-12 lg:col-span-8 space-y-6">
          <motion.div
            initial={{ opacity: 0, y: 50 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
          >
            {/* Welcome Card */}
            <Card className="bg-white/10 backdrop-blur-md border border-white/20 shadow-xl">
              <h2 className="text-3xl font-bold mb-4 text-blue-200 drop-shadow-lg">
                Welcome to RajSan Library
              </h2>
              <p className="text-gray-200 mb-4">
                A premium study space designed for focus and comfort — enjoy
                lightning-fast Wi-Fi, personal cabins, ambient lighting, and
                complete peace of mind.
              </p>
              <Button
                className="bg-blue-600 hover:bg-blue-700 text-white px-6 py-3 rounded-md shadow-lg transition transform hover:scale-105"
                onClick={() => setModalOpen(true)}
              >
                📞 Book a Seat
              </Button>
            </Card>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 50 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
          >
            {/* Graph Section */}
            <GraphSection />
          </motion.div>
        </div>

        {/* Right Column (4/12) */}
        <div className="col-span-12 lg:col-span-4 space-y-6">
          <motion.div
            initial={{ opacity: 0, y: 50 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
          >
            {/* Facilities Card */}
            <Card
              title="Facilities"
              className="bg-white/10 backdrop-blur-md border border-white/20 shadow-xl"
            >
              <div className="flex flex-wrap gap-2">
                <Badge>High-Speed Wi-Fi</Badge>
                <Badge>Personal Cabins</Badge>
                <Badge>Charging Slots</Badge>
                <Badge>Lunch Area</Badge>
                <Badge>Bike & Car Parking</Badge>
                <Badge>Clean Washroom</Badge>
                <Badge>Quiet Study Zone</Badge>
              </div>
            </Card>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 50 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
          >
            {/* Instagram Card */}
            <Card className="bg-white/10 backdrop-blur-md border border-white/20 shadow-xl">
              <a
                href="https://www.instagram.com/rajsan_library/"
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center gap-2 text-pink-400 hover:text-pink-600 font-medium transition-colors"
              >
                <svg
                  width="20"
                  height="20"
                  fill="currentColor"
                  viewBox="0 0 24 24"
                >
                  <path d="M7.75 2h8.5A5.75 5.75 0 0 1 22 7.75v8.5A5.75 5.75 0 0 1 16.25 22h-8.5A5.75 5.75 0 0 1 2 16.25v-8.5A5.75 5.75 0 0 1 7.75 2zm0 1.5A4.25 4.25 0 0 0 3.5 7.75v8.5A4.25 4.25 0 0 0 7.75 20.5h8.5A4.25 4.25 0 0 0 20.5 16.25v-8.5A4.25 4.25 0 0 0 16.25 3.5h-8.5zm4.25 3.25a5.25 5.25 0 1 1 0 10.5 5.25 5.25 0 0 1 0-10.5zm0 1.5a3.75 3.75 0 1 0 0 7.5 3.75 3.75 0 0 0 0-7.5zm5.13.62a1.13 1.13 0 1 1-2.26 0 1.13 1.13 0 0 1 2.26 0z" />
                </svg>
                Follow us on Instagram
              </a>
            </Card>
          </motion.div>
        </div>
      </div>

      {/* Booking Modal */}
      <Modal isOpen={modalOpen} onClose={() => setModalOpen(false)}>
        <h3 className="text-lg font-semibold mb-2">Book Your Seat</h3>
        <Input placeholder="Name" className="mb-2" />
        <Input placeholder="Mobile Number" className="mb-2" />
        <Input placeholder="Date (DD/MM/YYYY)" className="mb-2" />
        <Button
          onClick={() => {
            alert("Seat Booked!");
            window.location.href = "tel:8966835743";
          }}
        >
          📞 Submit & Call
        </Button>
      </Modal>
    </div>
  );
}

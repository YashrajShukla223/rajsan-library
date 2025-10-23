import React, { useState } from "react";
import { Card } from "../components/shadcn/Card";
import { Button } from "../components/shadcn/Button";
import { Badge } from "../components/shadcn/Badge";
import { Modal } from "../components/shadcn/Modal";
import { Input } from "../components/shadcn/Input";
import GraphSection from "../components/GraphSection";

export default function Home() {
  const [modalOpen, setModalOpen] = useState(false);

  return (
    <div className="grid grid-cols-12 gap-6">
      {/* Left Column (8/12) */}
      <div className="col-span-12 lg:col-span-8 space-y-6">
        <Card>
          <h2 className="text-2xl font-bold mb-4">Welcome to RajSan Library</h2>
          <p>
            The best library in Ganj Basoda with high-speed Wi-Fi, personal
            cabins, proper lighting, charging points, lunch area, and parking.
          </p>
          <Button className="mt-4" onClick={() => setModalOpen(true)}>
            Book a Seat
          </Button>
        </Card>
        <GraphSection />
      </div>

      {/* Right Column (4/12) */}
      <div className="col-span-12 lg:col-span-4 space-y-6">
        <Card title="Facilities">
          <div className="flex flex-wrap gap-2">
            <Badge>High Speed Free Wi-Fi</Badge>
            <Badge>Personal Cabins</Badge>
            <Badge>Charging Slots in every Cabin</Badge>
            <Badge>Dedicated Lunch Area</Badge>
            <Badge>Bike & Car Parking</Badge>
            <Badge>Clean Washroom</Badge>
            <Badge>Quiet Study Environment</Badge>
          </div>
        </Card>
        {/* Instagram Link */}
        <Card>
          <a
            href="https://www.instagram.com/rajsan_library/"
            target="_blank"
            rel="noopener noreferrer"
            className="flex items-center gap-2 text-pink-600 hover:text-pink-800 font-medium transition-colors"
          >
            <svg width="20" height="20" fill="currentColor" viewBox="0 0 24 24">
              <path d="M7.75 2h8.5A5.75 5.75 0 0 1 22 7.75v8.5A5.75 5.75 0 0 1 16.25 22h-8.5A5.75 5.75 0 0 1 2 16.25v-8.5A5.75 5.75 0 0 1 7.75 2zm0 1.5A4.25 4.25 0 0 0 3.5 7.75v8.5A4.25 4.25 0 0 0 7.75 20.5h8.5A4.25 4.25 0 0 0 20.5 16.25v-8.5A4.25 4.25 0 0 0 16.25 3.5h-8.5zm4.25 3.25a5.25 5.25 0 1 1 0 10.5 5.25 5.25 0 0 1 0-10.5zm0 1.5a3.75 3.75 0 1 0 0 7.5 3.75 3.75 0 0 0 0-7.5zm5.13.62a1.13 1.13 0 1 1-2.26 0 1.13 1.13 0 0 1 2.26 0z" />
            </svg>
            Follow us on Instagram
          </a>
        </Card>
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

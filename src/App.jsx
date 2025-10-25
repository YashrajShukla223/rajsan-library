import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Sidebar from "./components/Sidebar";
import Navbar from "./components/Navbar";
import Footer from "./components/Footer";
import Home from "./pages/Home";
import Facilities from "./pages/Facilities";
import Stats from "./pages/Stats";
import Location from "./pages/Location";
import RajSanGallery from "./pages/RajSanGallery";

export default function App() {
  return (
    <Router>
      <div className="grid grid-cols-12 min-h-screen bg-gray-50">
        {/* Sidebar */}
        <div className="col-span-12 lg:col-span-2 bg-gray-100">
          <Sidebar />
        </div>

        {/* Main Section */}
        <div className="col-span-12 lg:col-span-10 flex flex-col">
          <Navbar />
          <div className="flex-grow p-6">
            <Routes>
              <Route path="/" element={<Home />} />
              <Route path="/facilities" element={<Facilities />} />
              <Route path="/stats" element={<Stats />} />
              <Route path="/location" element={<Location />} />
              <Route path="/gallary" element={<RajSanGallery />} />
            </Routes>
          </div>
          <Footer />
        </div>
      </div>
    </Router>
  );
}

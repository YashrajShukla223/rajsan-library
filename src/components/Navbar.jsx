import React from "react";
import { Link } from "react-router-dom";
import { Button } from "./shadcn/Button";

export default function Navbar() {
  return (
    <nav className="flex justify-between items-center px-6 py-3 bg-white shadow-md">
      <h1 className="text-xl font-bold text-blue-700">RajSan Library</h1>

      <div className="flex gap-4 items-center">
        <Link to="/" className="hover:text-blue-700 text-slate-900">Home</Link>
        <Link to="/facilities" className="hover:text-blue-700 text-slate-900">Facilities</Link>
        <Link to="/stats" className="hover:text-blue-700 text-slate-900">Stats</Link>
        <Link to="/location" className="hover:text-blue-700 text-slate-900">Location</Link>

        <a href="tel:8966835743">
          <Button className="bg-blue-600 hover:bg-blue-700 text-white">Book Now</Button>
        </a>
      </div>
    </nav>
  );
}

import React from "react";

export default function Location() {
  return (
    <div className="p-6">
      <h2 className="text-3xl font-bold text-blue-700 mb-4">Our Location</h2>
      <p className="mb-4 text-sky-400">
        📍 Behlot Bypass Road near Old Dehat Police Station, Ganj Basoda, Madhya Pradesh
      </p>
      <iframe
        title="RajSan Library Location"
        src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3609.3528971623943!2d77.92168287461353!3d23.853580584597067!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x397ab33e8b67b917%3A0x4edc667a4da85b7d!2sRajSan%20Library!5e0!3m2!1sen!2sin!4v1697699999999!5m2!1sen!2sin"
        width="100%"
        height="450"
        allowFullScreen=""
        loading="lazy"
        className="rounded-xl shadow-lg"
      ></iframe>
    </div>
  );
}

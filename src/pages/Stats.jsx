import React from "react";

export default function Stats() {
  return (
    <div
      className="bg-cover bg-center min-h-[80vh] flex flex-col justify-center items-center text-white text-center"
      style={{
        backgroundImage:
          "url('https://upload.wikimedia.org/wikipedia/commons/9/9d/Ganj_Basoda_Station_Entry.jpg')",
      }}
    >
      <div className="bg-black/60 p-8 rounded-xl">
        <h2 className="text-4xl font-bold mb-4">Best Library in Ganj Basoda</h2>
        <p className="text-lg">RajSan Library — Where Focus Meets Peace</p>
      </div>
    </div>
  );
}

// src/components/FeatureCard.jsx
import React from "react";

function FeatureCard({ title, description, icon }) {
  return (
    <div className="bg-blue-500 bg-opacity-50 text-white p-4 rounded-3xl shadow-lg flex flex-col items-center h-60 w-2xl">
      <div className="text-4xl mt-2">{icon}</div> {/* Icon slot */}
      <h3 className="text-2xl font-bold mt-3">{title}</h3>
      <p className="text-center text-lg mt-4">{description}</p>
    </div>
  );
}

export default FeatureCard;

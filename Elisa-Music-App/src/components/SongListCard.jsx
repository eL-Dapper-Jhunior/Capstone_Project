// src/components/SongListCard.jsx
import React from "react";

function SongListCard({ title }) {
  return (
    <div className="bg-white text-black p-4 rounded-lg shadow-md">
      <h3 className="text-lg font-semibold">{title}</h3>
    </div>
  );
}

export default SongListCard;

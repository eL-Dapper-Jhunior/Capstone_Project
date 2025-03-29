import React from 'react';

function FeatureCard({ title, description, icon }) {
  return (
    <div className="
      bg-blue-500/50 dark:bg-purple-800/60 
      text-white p-6 rounded-3xl shadow-lg 
      flex flex-col items-center h-full
      transition-all hover:scale-[1.02]
      min-h-[240px] w-full
    ">
      <div className="text-5xl mb-4">{icon}</div>
      <h3 className="text-xl md:text-2xl font-bold mb-2 text-center">{title}</h3>
      <p className="text-center text-base md:text-lg opacity-90">
        {description}
      </p>
    </div>
  );
}

export default FeatureCard;
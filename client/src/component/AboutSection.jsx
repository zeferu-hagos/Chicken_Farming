// AboutSection.js
import React from 'react';

const AboutSection = ({ title, description }) => {
  return (
    <div className="bg-white p-4 shadow-md rounded-lg mb-4">
      <h3 className="text-lg font-semibold mb-2">{title}</h3>
      <p className="text-gray-700">{description}</p>
    </div>
  );
};

export default AboutSection;

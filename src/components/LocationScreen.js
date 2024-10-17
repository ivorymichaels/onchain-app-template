// components/LocationScreen.js
import React from 'react';

const lagosLGAs = [
  "Ikeja", "Yaba", "Surulere", "Ikorodu", "Lekki", 
  "Victoria Island", "Mushin", "Alimosho", /* Add all other LGAs */
];

function LocationScreen({ onLocationSelect }) {
  return (
    <div className="location-screen">
      <h3>Select your Local Government Area in Lagos</h3>
      <select onChange={(e) => onLocationSelect(e.target.value)}>
        <option value="">Select LGA</option>
        {lagosLGAs.map((lga, index) => (
          <option key={index} value={lga}>{lga}</option>
        ))}
      </select>
    </div>
  );
}

export default LocationScreen;

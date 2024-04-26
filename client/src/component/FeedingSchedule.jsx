// FeedingSchedule.js
import React from 'react';
import AboutSection from './AboutSection';

const FeedingSchedule = () => {
  return (
    <div className="p-4">
      <h2 className="text-xl font-semibold mb-4">Feeding Schedule</h2>

      <AboutSection/>
      <div className="bg-white p-4 shadow-md rounded-lg mb-4">
        <h3 className="text-lg font-semibold mb-2">About</h3>
        <p className="text-gray-700">
          A feeding schedule is essential for ensuring that your chickens receive proper nutrition and care.
          This schedule outlines the times and amounts of feed to be provided to your chickens, helping to maintain their health and productivity.
        </p>
      </div>

      {/* Current Schedule Section */}
      <div className="bg-white p-4 shadow-md rounded-lg mb-4">
        <h3 className="text-lg font-semibold mb-2">Current Schedule</h3>
        <table className="min-w-full">
          <thead>
            <tr>
              <th className="px-4 py-2 text-left">Day</th>
              <th className="px-4 py-2 text-left">Time</th>
              <th className="px-4 py-2 text-left">Amount</th>
            </tr>
          </thead>
          <tbody>
            <tr>
              <td className="border px-4 py-2">Monday</td>
              <td className="border px-4 py-2">8:00 AM</td>
              <td className="border px-4 py-2">200g</td>
            </tr>
            <tr>
              <td className="border px-4 py-2">Tuesday</td>
              <td className="border px-4 py-2">7:30 AM</td>
              <td className="border px-4 py-2">180g</td>
            </tr>
            <tr>
              <td className="border px-4 py-2">Wednesday</td>
              <td className="border px-4 py-2">8:15 AM</td>
              <td className="border px-4 py-2">210g</td>
            </tr>
            {/* Add more schedule rows as needed */}
          </tbody>
        </table>
      </div>

      {/* Edit Schedule Button */}
      <div>
        <button className="bg-blue-500 text-white px-4 py-2 rounded hover:bg-blue-600">Edit Schedule</button>
      </div>
    </div>
  );
};

export default FeedingSchedule;

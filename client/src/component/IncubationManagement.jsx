// IncubationManagement.js
import React, { useState } from 'react';

const IncubationManagement = () => {
  // Sample eggs state
  const [eggs, setEggs] = useState([
    { id: 1, type: 'Chicken', quantity: 12, status: 'Pending' },
    { id: 2, type: 'Duck', quantity: 8, status: 'In Progress' },
    { id: 3, type: 'Quail', quantity: 20, status: 'Complete' }
  ]);

  return (
    <div className="p-4">
      <h2 className="text-xl font-semibold mb-4">Incubation Management</h2>
      <div className="bg-white p-4 shadow-md rounded-lg">
        <h3 className="text-lg font-semibold mb-2">Eggs</h3>
        <ul className="divide-y divide-gray-300">
          {eggs.map(egg => (
            <li key={egg.id} className="py-2">
              <div>
                <span className="font-semibold">{egg.type}</span>
                <span className="text-sm text-gray-500 ml-2">{egg.status}</span>
              </div>
              <div className="flex items-center">
                <span className="mr-2">Quantity: {egg.quantity}</span>
                <button className="bg-blue-500 text-white px-2 py-1 rounded hover:bg-blue-600">Details</button>
              </div>
            </li>
          ))}
        </ul>
      </div>
    </div>
  );
};

export default IncubationManagement;

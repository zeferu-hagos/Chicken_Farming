// HealthMonitoring.js
import React, { useState } from 'react';

const HealthMonitoring = () => {
  // Sample health data state
  const [healthData, setHealthData] = useState([
    { id: 1, chickenId: 1, temperature: 'Normal', weight: '2.5 kg', status: 'Healthy' },
    { id: 2, chickenId: 2, temperature: 'High', weight: '2.3 kg', status: 'Sick' },
    { id: 3, chickenId: 3, temperature: 'Normal', weight: '2.8 kg', status: 'Healthy' }
  ]);

  return (
    <div className="p-4">
      <h2 className="text-xl font-semibold mb-4">Health Monitoring</h2>

      {/* About Section */}
      <div className="bg-white p-4 shadow-md rounded-lg mb-4">
        <h3 className="text-lg font-semibold mb-2">About</h3>
        <p className="text-gray-700">
          Monitoring the health of your chickens is crucial for ensuring their well-being and productivity.
          This section displays the current health data of each chicken, including their temperature, weight, and overall health status.
        </p>
      </div>

      {/* Health Data Table */}
      <div className="bg-white p-4 shadow-md rounded-lg mb-4">
        <h3 className="text-lg font-semibold mb-2">Health Data</h3>
        <table className="min-w-full">
          <thead>
            <tr>
              <th className="px-4 py-2 text-left">Chicken ID</th>
              <th className="px-4 py-2 text-left">Temperature</th>
              <th className="px-4 py-2 text-left">Weight</th>
              <th className="px-4 py-2 text-left">Status</th>
            </tr>
          </thead>
          <tbody>
            {healthData.map(data => (
              <tr key={data.id}>
                <td className="border px-4 py-2">{data.chickenId}</td>
                <td className="border px-4 py-2">{data.temperature}</td>
                <td className="border px-4 py-2">{data.weight}</td>
                <td className="border px-4 py-2">{data.status}</td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
};

export default HealthMonitoring;

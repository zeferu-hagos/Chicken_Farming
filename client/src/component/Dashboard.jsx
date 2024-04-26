// Dashboard.js
import React from 'react';

const Dashboard = () => {
  return (
    <div className="p-4">
      <h2 className="text-xl font-semibold mb-4">Dashboard</h2>

      {/* About Section */}
      <div className="bg-white p-4 shadow-md rounded-lg mb-4">
        <h3 className="text-lg font-semibold mb-2">About</h3>
        <p className="text-gray-700">
          Welcome to the Chicken Farming App! This application is designed to help you manage various aspects of your chicken farming operations efficiently.
          Whether you're managing your inventory, monitoring the health of your livestock, tracking egg production, or analyzing sales and expenses, this app has you covered.
        </p>
      </div>

      {/* Total Chickens Section */}
      <div className="bg-white p-4 shadow-md rounded-lg mb-4">
        <h3 className="text-lg font-semibold mb-2">Total Chickens</h3>
        <p className="text-gray-700">
          Currently, you have 100 chickens in your farm.
        </p>
      </div>

      {/* Inventory Status Section */}
      <div className="bg-white p-4 shadow-md rounded-lg mb-4">
        <h3 className="text-lg font-semibold mb-2">Inventory Status</h3>
        <p className="text-gray-700">
          Your feed inventory is running low. Consider restocking.
        </p>
      </div>

      {/* Recent Activities Section */}
      <div className="bg-white p-4 shadow-md rounded-lg mb-4">
        <h3 className="text-lg font-semibold mb-2">Recent Activities</h3>
        <ul className="list-disc list-inside text-gray-700">
          <li>Feeding schedule updated.</li>
          <li>10 new eggs collected.</li>
          <li>Health checkup for chickens completed.</li>
        </ul>
      </div>
    </div>
  );
};

export default Dashboard;

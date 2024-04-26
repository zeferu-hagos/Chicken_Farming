// Navbar.js
import React from 'react';

const Navbar = () => {
  return (
    <nav className="bg-gray-800 py-4">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between">
          <div className="flex-shrink-0">
            <h1 className="text-white font-semibold text-xl">Chicken Farming App</h1>
          </div>
          <div className="hidden md:block">
            <div className="flex items-center space-x-4">
              <a href="/Dashboard" className="text-gray-300 hover:bg-gray-700 hover:text-white px-3 py-2 rounded-md text-sm font-medium">Dashboard</a>
              <a href="/InventoryManagement" className="text-gray-300 hover:bg-gray-700 hover:text-white px-3 py-2 rounded-md text-sm font-medium">InventoryManagement</a>

              <a href="FeedingSchedule" className="text-gray-300 hover:bg-gray-700 hover:text-white px-3 py-2 rounded-md text-sm font-medium">Feeding Schedule</a>
              <a href="HealthMonitoring" className="text-gray-300 hover:bg-gray-700 hover:text-white px-3 py-2 rounded-md text-sm font-medium">Health Monitoring</a>

              <a href="IncubationManagement" className="text-gray-300 hover:bg-gray-700 hover:text-white px-3 py-2 rounded-md text-sm font-medium">Incubation Management</a>
             
              <a href="ExpenseTracking" className="text-gray-300 hover:bg-gray-700 hover:text-white px-3 py-2 rounded-md text-sm font-medium">Expense Tracking</a>
              
              <a href="Settings" className="text-gray-300 hover:bg-gray-700 hover:text-white px-3 py-2 rounded-md text-sm font-medium">Settings</a>
            </div>
          </div>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;

// Settings.js
import React from 'react';

const Settings = () => {
  return (
    <div className="p-4">
      <h2 className="text-xl font-semibold mb-4">Settings</h2>

      {/* User Preferences Section */}
      <div className="bg-white p-4 shadow-md rounded-lg mb-4">
        <h3 className="text-lg font-semibold mb-2">User Preferences</h3>
        <div className="flex items-center mb-2">
          <input type="checkbox" id="darkMode" className="mr-2" />
          <label htmlFor="darkMode" className="text-gray-700">Dark Mode</label>
        </div>
        <div className="flex items-center">
          <input type="checkbox" id="notifications" className="mr-2" />
          <label htmlFor="notifications" className="text-gray-700">Enable Notifications</label>
        </div>
      </div>

      {/* Save Changes Button */}
      <div>
        <button className="bg-blue-500 text-white px-4 py-2 rounded hover:bg-blue-600">Save Changes</button>
      </div>
    </div>
  );
};

export default Settings;

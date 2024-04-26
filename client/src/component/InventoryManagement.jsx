// InventoryManagement.js
import React, { useState } from 'react';

const InventoryManagement = () => {
  // Sample inventory data state
  const [inventory, setInventory] = useState([
    { id: 1, item: 'Chicken Feed', quantity: 50, unit: 'kg' },
    { id: 2, item: 'Medication', quantity: 10, unit: 'bottles' },
    { id: 3, item: 'Equipment', quantity: 5, unit: 'units' }
  ]);

  return (
    <div className="p-4">
      <h2 className="text-xl font-semibold mb-4">Inventory Management</h2>

      {/* About Section */}
      <div className="bg-white p-4 shadow-md rounded-lg mb-4">
        <h3 className="text-lg font-semibold mb-2">About</h3>
        <p className="text-gray-700">
          Effective inventory management is essential for ensuring that your chicken farming operations run smoothly.
          This section provides an overview of the current inventory items, including their names, quantities, and units.
        </p>
      </div>

      {/* Inventory Items Table */}
      <div className="bg-white p-4 shadow-md rounded-lg mb-4">
        <h3 className="text-lg font-semibold mb-2">Inventory Items</h3>
        <table className="min-w-full">
          <thead>
            <tr>
              <th className="px-4 py-2 text-left">Item</th>
              <th className="px-4 py-2 text-left">Quantity</th>
              <th className="px-4 py-2 text-left">Unit</th>
            </tr>
          </thead>
          <tbody>
            {inventory.map(item => (
              <tr key={item.id}>
                <td className="border px-4 py-2">{item.item}</td>
                <td className="border px-4 py-2">{item.quantity}</td>
                <td className="border px-4 py-2">{item.unit}</td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
};

export default InventoryManagement;

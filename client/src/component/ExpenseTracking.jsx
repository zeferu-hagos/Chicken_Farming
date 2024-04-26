// ExpenseTracking.js
import React, { useState } from 'react';

const ExpenseTracking = () => {
  // Sample expenses state
  const [expenses, setExpenses] = useState([
    { id: 1, description: 'Feed', amount: 50 },
    { id: 2, description: 'Medication', amount: 30 },
    { id: 3, description: 'Equipment', amount: 100 }
  ]);

  // Function to calculate total expenses
  const totalExpenses = expenses.reduce((total, expense) => total + expense.amount, 0);

  return (
    <div className="p-4">
      <h2 className="text-xl font-semibold mb-4">Expense Tracking</h2>
      <div className="bg-white p-4 shadow-md rounded-lg">
        <h3 className="text-lg font-semibold mb-2">Expenses</h3>
        <ul className="divide-y divide-gray-300">
          {expenses.map(expense => (
            <li key={expense.id} className="py-2">
              <span className="font-semibold">{expense.description}</span>
              <span className="ml-auto">${expense.amount}</span>
            </li>
          ))}
        </ul>
      </div>
      <div className="mt-4">
        <p className="text-lg font-semibold">Total Expenses: ${totalExpenses}</p>
      </div>
    </div>
  );
};

export default ExpenseTracking;

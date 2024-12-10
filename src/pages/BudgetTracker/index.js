// src/pages/BudgetTracker.js
import React, { useState } from 'react';

function BudgetTracker() {
  const [expenses, setExpenses] = useState([]);
  const [expenseName, setExpenseName] = useState('');
  const [expenseAmount, setExpenseAmount] = useState(0);

  const handleAddExpense = () => {
    setExpenses([...expenses, { name: expenseName, amount: expenseAmount }]);
    setExpenseName('');
    setExpenseAmount(0);
  };

  return (
    <div className="p-6">
      <h2 className="text-2xl font-semibold">Budget Tracker</h2>
      <div className="mb-4">
        <label>Expense Name</label>
        <input 
          type="text" 
          value={expenseName} 
          onChange={(e) => setExpenseName(e.target.value)} 
          className="p-2 border border-gray-300 rounded w-full"
        />
      </div>
      <div className="mb-4">
        <label>Amount</label>
        <input 
          type="number" 
          value={expenseAmount} 
          onChange={(e) => setExpenseAmount(e.target.value)} 
          className="p-2 border border-gray-300 rounded w-full"
        />
      </div>
      <button onClick={handleAddExpense} className="bg-blue-500 text-white px-6 py-2 rounded">Add Expense</button>

      <ul className="mt-4">
        {expenses.map((expense, index) => (
          <li key={index} className="flex justify-between">
            <span>{expense.name}</span>
            <span>{expense.amount}</span>
          </li>
        ))}
      </ul>
    </div>
  );
}

export default BudgetTracker;

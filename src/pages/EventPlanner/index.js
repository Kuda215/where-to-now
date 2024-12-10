// src/pages/EventPlanner.js
import React, { useState } from 'react';

function EventPlanner() {
  const [eventName, setEventName] = useState('');
  const [budget, setBudget] = useState(0);
  const [location, setLocation] = useState('');

  const handleSubmit = (e) => {
    e.preventDefault();
    // Handle event planning logic here
    console.log({ eventName, budget, location });
  };

  return (
    <div className="p-6">
      <h2 className="text-2xl font-semibold">Plan Your Event</h2>
      <form onSubmit={handleSubmit}>
        <div className="mb-4">
          <label className="block">Event Name</label>
          <input 
            type="text" 
            value={eventName} 
            onChange={(e) => setEventName(e.target.value)} 
            className="p-2 border border-gray-300 rounded w-full"
          />
        </div>
        <div className="mb-4">
          <label className="block">Budget</label>
          <input 
            type="number" 
            value={budget} 
            onChange={(e) => setBudget(e.target.value)} 
            className="p-2 border border-gray-300 rounded w-full"
          />
        </div>
        <div className="mb-4">
          <label className="block">Location</label>
          <input 
            type="text" 
            value={location} 
            onChange={(e) => setLocation(e.target.value)} 
            className="p-2 border border-gray-300 rounded w-full"
          />
        </div>
        <button type="submit" className="bg-blue-500 text-white px-6 py-2 rounded">Plan Event</button>
      </form>
    </div>
  );
}

export default EventPlanner;

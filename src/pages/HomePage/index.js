import React from 'react';

function HomePage() {
  return (
    <div className="p-6">
      <h2 className="text-3xl font-semibold">Plan Your Perfect Day</h2>
      <p>Select an option to get started:</p>
      <div className="space-x-4">
        <button className="bg-green-500 text-white px-4 py-2 rounded">Vacation</button>
        <button className="bg-yellow-500 text-white px-4 py-2 rounded">Event</button>
        <button className="bg-blue-500 text-white px-4 py-2 rounded">Day Out</button>
      </div>
    </div>
  );
}

export default HomePage;

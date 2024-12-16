import React, { useState } from "react";
import FormComponent from "../FormComponent";

export default function TravelDetails({ onNext, onBack }) {
  const [data, setData] = useState({
    startDate: "",
    endDate: "",
    transport: "Car",
    passengers: 1,
  });

  const handleNext = () => {
    if (data.startDate && data.endDate && data.passengers > 0) {
      onNext({ travelDetails: data });
    } else {
      alert("Please complete all fields.");
    }
  };

  return (
    <FormComponent title="Travel Details" onNext={handleNext} onBack={onBack}>
      <label className="block mb-2">Start Date</label>
      <input
        type="date"
        value={data.startDate}
        onChange={(e) => setData({ ...data, startDate: e.target.value })}
        className="border rounded w-full p-2 mb-4"
      />
      <label className="block mb-2">End Date</label>
      <input
        type="date"
        value={data.endDate}
        onChange={(e) => setData({ ...data, endDate: e.target.value })}
        className="border rounded w-full p-2 mb-4"
      />
      <label className="block mb-2">Transport Mode</label>
      <select
        value={data.transport}
        onChange={(e) => setData({ ...data, transport: e.target.value })}
        className="border rounded w-full p-2 mb-4"
      >
        <option value="Car">Car</option>
        <option value="Flight">Flight</option>
        <option value="Train">Train</option>
      </select>
      <label className="block mb-2">Number of Passengers</label>
      <input
        type="number"
        min="1"
        value={data.passengers}
        onChange={(e) => setData({ ...data, passengers: e.target.value })}
        className="border rounded w-full p-2 mb-4"
      />
    </FormComponent>
  );
}

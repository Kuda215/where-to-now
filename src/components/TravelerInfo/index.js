import React, { useState } from "react";
import FormComponent from "../FormComponent";

export default function TripInfo({ onNext }) {
  const [data, setData] = useState({ name: "", email: "", phone: "" });

  const handleNext = () => {
    if (data.name && data.email && data.phone) {
      onNext({ travelerInfo: data });
    } else {
      alert("Please fill out all fields.");
    }
  };

  return (
    <FormComponent title="Traveler Information" onNext={handleNext}>
      <label className="block mb-2">Full Name</label>
      <input
        type="text"
        value={data.name}
        onChange={(e) => setData({ ...data, name: e.target.value })}
        className="border rounded w-full p-2 mb-4"
      />
      <label className="block mb-2">Email</label>
      <input
        type="email"
        value={data.email}
        onChange={(e) => setData({ ...data, email: e.target.value })}
        className="border rounded w-full p-2 mb-4"
      />
      <label className="block mb-2">Phone Number</label>
      <input
        type="tel"
        value={data.phone}
        onChange={(e) => setData({ ...data, phone: e.target.value })}
        className="border rounded w-full p-2 mb-4"
      />
    </FormComponent>
  );
}

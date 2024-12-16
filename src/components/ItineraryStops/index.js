import React, { useState } from "react";
import FormComponent from "../FormComponent";

export default function ItineraryStops({ onNext, onBack }) {
  const [stops, setStops] = useState([{ location: "", duration: "" }]);

  const addStop = () => {
    setStops([...stops, { location: "", duration: "" }]);
  };

  const handleChange = (index, field, value) => {
    const updatedStops = stops.map((stop, i) =>
      i === index ? { ...stop, [field]: value } : stop
    );
    setStops(updatedStops);
  };

  const handleNext = () => {
    if (stops.every((stop) => stop.location && stop.duration)) {
      onNext({ itineraryStops: stops });
    } else {
      alert("Please fill in all stops.");
    }
  };

  return (
    <FormComponent title="Itinerary Stops" onNext={handleNext} onBack={onBack}>
      {stops.map((stop, index) => (
        <div key={index} className="mb-4">
          <label className="block mb-2">Stop {index + 1} Location</label>
          <input
            type="text"
            value={stop.location}
            onChange={(e) =>
              handleChange(index, "location", e.target.value)
            }
            className="border rounded w-full p-2 mb-2"
          />
          <label className="block mb-2">Duration (hours or days)</label>
          <input
            type="text"
            value={stop.duration}
            onChange={(e) =>
              handleChange(index, "duration", e.target.value)
            }
            className="border rounded w-full p-2"
          />
        </div>
      ))}
      <button onClick={addStop} className="bg-blue-500 text-white px-4 py-2 rounded">
        Add Stop
      </button>
    </FormComponent>
  );
}

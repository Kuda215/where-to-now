import React, { useState } from "react";
import { useNavigate } from "react-router-dom"; // Import useNavigate
import "./styles.css";

const tripOptions = [
  {
    id: "road_trip",
    name: "Road Trip",
    description: "Explore scenic routes and create memories.",
    icon: "🚗",
    details: "Pack snacks, plan stops, and enjoy the drive!",
  },
  {
    id: "vacation",
    name: "Vacation",
    description: "Relaxation or adventure? Your choice!",
    icon: "🏖️",
    details: "Don’t forget sunscreen and your itinerary.",
  },
  {
    id: "weekend_away",
    name: "Weekend Away",
    description: "Quick escapes for a recharge.",
    icon: "🧳",
    details: "Pack light and make the most of your weekend.",
  },
  {
    id: "business_trip",
    name: "Business Trip",
    description: "Travel for work and professional growth.",
    icon: "💼",
    details: "Organize meetings, stay productive, and focus on your goals.",
  },
];

const TripSelector = () => {
  const [selectedTrip, setSelectedTrip] = useState(null);
  const navigate = useNavigate(); // Use navigate from react-router-dom

  // Handler for the Continue button click
  const handleContinue = () => {
    navigate("/plan/StartPlanning");
 };

  return (
    <div className="trip-selector">
      <header className="trip-header">
        <h1>Choose your next Adventure</h1>
        <p>Plan your journey by choosing the trip that best suits your needs.</p>
      </header>

      <div className="trip-options">
        {tripOptions.map((trip) => (
          <div
            key={trip.id}
            className={`trip-card ${selectedTrip?.id === trip.id ? "selected" : ""}`}
            onClick={() => {setSelectedTrip(trip);handleContinue();}} // Set selected trip
          >
            <div className="trip-icon">{trip.icon}</div>
            <h4 className="tripName">{trip.name}</h4>
            <p>{trip.description}</p>
          </div>
        ))}
      </div>

    </div>
  );
};

export default TripSelector;

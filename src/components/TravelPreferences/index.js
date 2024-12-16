import React, { useState } from "react";
import "./styles.css";

const TravelPreferences = () => {
  const [formData, setFormData] = useState({
    transportMode: "",
    dietaryPreferences: "",
    specialRequests: "",
  });

  const handleChange = (e) => {
    const { id, value } = e.target;
    setFormData({
      ...formData,
      [id]: value,
    });
  };

  return (
    <div className="travel-preferences">
      <h2>Travel Preferences</h2>
      <p>Let us know your preferences for a comfortable journey.</p>

      <form>
        <div className="form-group">
          <label htmlFor="transportMode">Mode of Transport</label>
          <select
            id="transportMode"
            value={formData.transportMode}
            onChange={handleChange}
            required
          >
            <option value="">Select Transport Mode</option>
            <option value="flight">Flight</option>
            <option value="car">Car</option>
            <option value="train">Train</option>
            <option value="bus">Bus</option>
            <option value="other">Other</option>
          </select>
        </div>

        <div className="form-group">
          <label htmlFor="dietaryPreferences">Dietary Preferences</label>
          <input
            type="text"
            id="dietaryPreferences"
            value={formData.dietaryPreferences}
            onChange={handleChange}
            placeholder="Enter dietary preferences (e.g., vegan, gluten-free)"
          />
        </div>

        <div className="form-group">
          <label htmlFor="specialRequests">Special Requests</label>
          <textarea
            id="specialRequests"
            value={formData.specialRequests}
            onChange={handleChange}
            placeholder="Any special requests or needs (e.g., wheelchair access)"
          ></textarea>
        </div>

        <div className="form-buttons">
          <button className="prev-btn" type="button">
            Prev
          </button>
          <button className="next-btn" type="button">
            Next
          </button>
        </div>
      </form>
    </div>
  );
};

export default TravelPreferences;

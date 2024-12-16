import React, { useState } from "react";
import "./styles.css";

const Accommodation = () => {
  const [formData, setFormData] = useState({
    accommodationType: "",
    checkInDate: "",
    checkOutDate: "",
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
    <div className="accommodation">
      <h2>Accommodation Details</h2>
      <p>Tell us about your accommodation preferences for your journey.</p>

      <form>
        <div className="form-group">
          <label htmlFor="accommodationType">Type of Accommodation</label>
          <select
            id="accommodationType"
            value={formData.accommodationType}
            onChange={handleChange}
            required
          >
            <option value="">Select Accommodation Type</option>
            <option value="hotel">Hotel</option>
            <option value="hostel">Hostel</option>
            <option value="airbnb">Airbnb</option>
            <option value="resort">Resort</option>
            <option value="other">Other</option>
          </select>
        </div>

        <div className="form-group">
          <label htmlFor="checkInDate">Check-in Date</label>
          <input
            type="date"
            id="checkInDate"
            value={formData.checkInDate}
            onChange={handleChange}
            required
          />
        </div>

        <div className="form-group">
          <label htmlFor="checkOutDate">Check-out Date</label>
          <input
            type="date"
            id="checkOutDate"
            value={formData.checkOutDate}
            onChange={handleChange}
            required
          />
        </div>

        <div className="form-group">
          <label htmlFor="specialRequests">Special Requests</label>
          <textarea
            id="specialRequests"
            value={formData.specialRequests}
            onChange={handleChange}
            placeholder="Any special requests for your stay (e.g., bed preference, early check-in)"
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

export default Accommodation;

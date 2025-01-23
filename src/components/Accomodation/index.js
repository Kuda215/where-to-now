import { useState } from "react";

export default function AccommodationDetails({ onSave }) {
  const [data, setData] = useState({
    accommodations: [],
    tripStartDate: "", // Start date of the trip
    tripEndDate: "", // End date of the trip
  });

  // Generate an array of dates between trip start and end dates
  const generateDateRange = (startDate, endDate) => {
    const dates = [];
    const start = new Date(startDate);
    const end = new Date(endDate);

    while (start <= end) {
      dates.push(new Date(start).toLocaleDateString());
      start.setDate(start.getDate() + 1);
    }
    return dates;
  };

  // Handle changes to the accommodation for a specific date
  const handleAccommodationChange = (date, accommodationType) => {
    const newAccommodations = [...data.accommodations];
    const existingAccommodation = newAccommodations.find(
      (item) => item.date === date
    );

    if (existingAccommodation) {
      existingAccommodation.accommodationType = accommodationType;
    } else {
      newAccommodations.push({ date, accommodationType });
    }

    setData({ ...data, accommodations: newAccommodations });
  };

  // Handle the save button click
  const handleSave = () => {
    const accommodationData = {
      tripStartDate: data.tripStartDate,
      tripEndDate: data.tripEndDate,
      accommodations: data.accommodations,
    };

    onSave(accommodationData);
    console.log("Accommodation Data Saved:", accommodationData);
  };

  return (
    <div>
      <h2 className="text-xl font-bold mb-4">Accommodation Details</h2>

      {/* Trip Dates */}
      <label className="block mb-2">Trip Start Date</label>
      <input
        type="date"
        value={data.tripStartDate}
        onChange={(e) => setData({ ...data, tripStartDate: e.target.value })}
        className="border rounded w-full p-2 mb-4"
      />

      <label className="block mb-2">Trip End Date</label>
      <input
        type="date"
        value={data.tripEndDate}
        onChange={(e) => setData({ ...data, tripEndDate: e.target.value })}
        className="border rounded w-full p-2 mb-4"
      />

      {/* Dynamically Generate Accommodation Options for Each Date */}
      {data.tripStartDate && data.tripEndDate && (
        <div className="mb-4">
          {generateDateRange(data.tripStartDate, data.tripEndDate).map(
            (date, index) => (
              <div key={index} className="mb-4">
                <label className="block mb-2">{`Accommodation for ${date}`}</label>
                <select
                  value={
                    data.accommodations.find((item) => item.date === date)
                      ?.accommodationType || ""
                  }
                  onChange={(e) =>
                    handleAccommodationChange(date, e.target.value)
                  }
                  className="border rounded w-full p-2 mb-4"
                >
                  <option value="">Select Accommodation</option>
                  <option value="Hotel">Hotel</option>
                  <option value="Airbnb">Airbnb</option>
                  <option value="Resort">Resort</option>
                  <option value="Hostel">Hostel</option>
                  <option value="Vacation Rental">Vacation Rental</option>
                </select>
              </div>
            )
          )}
        </div>
      )}

      {/* Save Button */}
      <div className="mt-4">
        <button
          type="button"
          onClick={handleSave}
          className="bg-blue-500 text-white px-4 py-2 rounded"
        >
          Save Accommodation Details
        </button>
      </div>
    </div>
  );
}

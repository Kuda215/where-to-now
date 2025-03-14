import React, { useState, useEffect } from "react";

function TripInfo({ onSave }) {
  const [dataToSend, setDataToSend] = useState(null);
  const [showDetails, setShowDetails] = useState(false);

  const [data, setData] = useState({
    tripType: "",
    location: "",
    startDate: "",
    endDate: "",
    budget: "",
    specialRequests: "",
    followUpQuestions: {},
  });

  const handleTripTypeChange = (e) => {
    setShowDetails(false);
    const tripType = e.target.value;
    setData({ ...data, tripType, followUpQuestions: {} });
  };

  const handleFollowUpChange = (field, value) => {
    setShowDetails(false);

    setData({
      ...data,
      followUpQuestions: { ...data.followUpQuestions, [field]: value },
    });
  };

  const handleSave = () => {
    const newData = {
      ...data,
      specialRequests: data.specialRequests || "None",
      followUpQuestions:
        Object.keys(data.followUpQuestions).length > 0
          ? data.followUpQuestions
          : { default: "None" },
          showTravelers: true,
        detailsEditable: true,
        clearForm: false,
    };

    setShowDetails(true);
    setDataToSend(newData); // Update state before calling onSave
  };

  const renderFollowUpQuestions = () => {
    switch (data.tripType) {
      case "Vacation":
        return (
          <>
            <label className="block mb-2">Preferred Activities</label>
            <input
              type="text"
              value={data.followUpQuestions.activities || ""}
              onChange={(e) =>
                handleFollowUpChange("activities", e.target.value)
              }
              className="border rounded w-full p-2 mb-4"
              placeholder="e.g., sightseeing, hiking, shopping"
            />
          </>
        );
      case "Business Trip":
        return (
          <>
            <label className="block mb-2">Meeting Venues Required?</label>
            <select
              value={data.followUpQuestions.meetingVenue || ""}
              onChange={(e) =>
                handleFollowUpChange("meetingVenue", e.target.value)
              }
              className="border rounded w-full p-2 mb-4"
            >
              <option value="">Select</option>
              <option value="yes">Yes</option>
              <option value="no">No</option>
            </select>
            <label className="block mb-2">Dress Code</label>
            <input
              type="text"
              value={data.followUpQuestions.dressCode || ""}
              onChange={(e) =>
                handleFollowUpChange("dressCode", e.target.value)
              }
              className="border rounded w-full p-2 mb-4"
              placeholder="e.g., formal, casual"
            />
          </>
        );
      case "Road Trip":
        return (
          <>
            <label className="block mb-2">Vehicle Type</label>
            <input
              type="text"
              value={data.followUpQuestions.vehicleType || ""}
              onChange={(e) =>
                handleFollowUpChange("vehicleType", e.target.value)
              }
              className="border rounded w-full p-2 mb-4"
              placeholder="e.g., Sedan, SUV, Camper van"
            />
            <label className="block mb-2">Route Plan</label>
            <textarea
              value={data.followUpQuestions.routePlan || ""}
              onChange={(e) =>
                handleFollowUpChange("routePlan", e.target.value)
              }
              className="border rounded w-full p-2 mb-4"
              placeholder="e.g., Start in New York, through Pennsylvania"
            ></textarea>
          </>
        );
      case "Staycation":
        return (
          <>
            <label className="block mb-2">Local Attractions</label>
            <input
              type="text"
              value={data.followUpQuestions.localAttractions || ""}
              onChange={(e) =>
                handleFollowUpChange("localAttractions", e.target.value)
              }
              className="border rounded w-full p-2 mb-4"
              placeholder="e.g., parks, local museums, events"
            />
            <label className="block mb-2">Home Amenities Needed</label>
            <textarea
              value={data.followUpQuestions.homeAmenities || ""}
              onChange={(e) =>
                handleFollowUpChange("homeAmenities", e.target.value)
              }
              className="border rounded w-full p-2 mb-4"
              placeholder="e.g., Pool, Jacuzzi, Home theater"
            ></textarea>
          </>
        );
      default:
        return null;
    }
  };

  useEffect(() => {
    if (dataToSend) {
      
  
      onSave(dataToSend);
    }
  }, [dataToSend]);


  return (
    (showDetails === false) ? (
      <div>
        <h2 className="text-xl font-bold mb-4">Trip Details</h2>
        <label className="block mb-2">Type of Trip</label>

        <select
          value={data.tripType}
          onChange={handleTripTypeChange}
          className="border rounded w-full p-2 mb-4"
        >
          <option value="">Select</option>
          <option value="Vacation">Vacation</option>
          <option value="Business Trip">Business Trip</option>
          <option value="Road Trip">Road Trip</option>
          <option value="Staycation">Staycation</option>
        </select>

        <label className="block mb-2">Location</label>
        <input
          type="text"
          value={data.location}
          onChange={(e) => setData({ ...data, location: e.target.value })}
          className="border rounded w-full p-2 mb-4"
          placeholder="e.g., New York, Paris"
        />

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

        <label className="block mb-2">Budget</label>
        <input
          type="number"
          value={data.budget}
          onChange={(e) => setData({ ...data, budget: e.target.value })}
          className="border rounded w-full p-2 mb-4"
          placeholder="e.g., 5000"
        />

        {renderFollowUpQuestions()}

        <label className="block mb-2">Special Requests</label>
        <textarea
          value={data.specialRequests}
          onChange={(e) => setData({ ...data, specialRequests: e.target.value })}
          className="border rounded w-full p-2 mb-4"
          placeholder="e.g., wheelchair access, specific meals"
        ></textarea>

        <div className="flex justify-between">
          <button
            onClick={handleSave}
            className="bg-blue-500 text-white px-4 py-2 rounded"
          >
            Save
          </button>
        </div>
      </div>
    )
    :
    ( (showDetails === true ) && 
      <div>
        <div className="vac_travelers_list">
              <h3>Trip Details</h3>
              <div className="vac_travelers_container">
                  <div className="vac_travelers_item">
                    <p>Trip Type: {data.tripType}</p>
                    <p>Location: {data.location}</p>
                    <p>Start Date: {data.startDate}</p>
                    <p>End Date: {data.endDate}</p>
                    <p>Budget: {data.budget}</p>
                    <p>Special Requests: {data.specialRequests}</p>
                  </div>
              </div>
            </div>
      </div>
    )
  );
}


export default TripInfo;

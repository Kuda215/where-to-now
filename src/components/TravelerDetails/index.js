import React, { useState } from "react";
import FormComponent from "../FormComponent";

export default function TravelerDetails({ onNext, onBack, images = [], onSave }) {
  const defaultImages = [
    "https://via.placeholder.com/300x200?text=Default+Image+1",
    "https://via.placeholder.com/300x200?text=Default+Image+2",
    "https://via.placeholder.com/300x200?text=Default+Image+3",
  ];

  const carouselImages = images.length > 0 ? images : defaultImages;
  const [currentImage, setCurrentImage] = useState(0);

  const handleIndicatorClick = (index) => setCurrentImage(index);

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
      alert("Please complete all fields and ensure passengers > 0.");
    }
  };

  
  const [numTravelers, setNumTravelers] = useState(1);
  const [currentTravelerIndex, setCurrentTravelerIndex] = useState(0);
  const [travelerDetails, setTravelerDetails] = useState([]);
  const [showDetails, setShowDetails] = useState(false);
  const [detailsEditable, setDetailsEditable] = useState(false);
  const [showTravelers, setShowTravelers] = useState(false);
  const [clearForm, setClearForm] = useState(false);
  const [comments, setComments] = useState("");
  const [saved_travelers, setSaved_Travelers] = useState({name:"", age:"", gender:"", allergies:""});

  const handleNumTravelersChange = (e) => {
    const count = parseInt(e.target.value, 10) || 1;
    setNumTravelers(count);
    setTravelerDetails(Array(count).fill({ name: "", age: "", gender: "", allergies:"" }));
    setCurrentTravelerIndex(0);
  };

  const handleDetailChange = (field, value) => {
    const updatedDetails = [...travelerDetails];
    
    // Ensure the current traveler exists in the array
    if (!updatedDetails[currentTravelerIndex]) {
      updatedDetails[currentTravelerIndex] = { name: "", age: "", gender: "", allergies: "" };
    }
  
    updatedDetails[currentTravelerIndex][field] = value;
    setTravelerDetails(updatedDetails);
    setShowTravelers(false);
  };
  
  const handleNextTraveler = () => {
    if (currentTravelerIndex < numTravelers - 1) {
      setCurrentTravelerIndex(currentTravelerIndex + 1);
      setShowTravelers(false);
    }

    //save traveler details to state
    const nextDetails = [...travelerDetails];
    nextDetails[currentTravelerIndex + 1] = {
      name: "",
      age: "",
      gender: "",
      allergies: "",
    };
    setTravelerDetails(nextDetails);
    setShowTravelers(false);

  };

  const handleTravelersSave = () => {
    setShowTravelers(true);
    setDetailsEditable(true);
    setClearForm(true);

    const dataToSend = {
      showTravelers: true,
      detailsEditable: true,
      clearForm: true,
    };

    onSave(dataToSend);
    console.log("In Child component: OnSave called: " , dataToSend);
  }

  const HandleClearForm = () => {
    setTravelerDetails([]);
    setCurrentTravelerIndex(0);
    setDetailsEditable(false);
    setShowTravelers(false);
  }
  

  return (
        <div className="form_left_container">
            <h3 className="vac_page_header">Traveler Details
            {clearForm && <span onClick={HandleClearForm} style={{color:'red', fontSize:'large', float:'right', marginRight:'2vw'}}>Clear Form - x</span> }

            </h3>
 
      {/* Number of Travelers */}
      <div className="vac_form_row">
        <label htmlFor="numTravelers" className="vac_form_label">
          1. How many people are traveling?
        </label>
        <input
          type="number"
          id="numTravelers"
          min="1"
          placeholder="Enter number of travelers"
          value={numTravelers}
          disabled={detailsEditable}
          onChange={handleNumTravelersChange}
          className="vac_input_box"
        />
      </div>

      {/* Toggle Details */}
      <div className="vac_form_row">
        <label className="vac_form_label">
          2. Provide details for each traveler
          <input
            type="checkbox"
            disabled={detailsEditable}
            checked={showDetails}
            onChange={() => setShowDetails(!showDetails)}
            className="vac_checkbox"
          />
        </label>
      </div>

      {/* Traveler Details Entry */}
      {(showDetails && showTravelers === false) ? (
        <div className="vac_traveler_details">
          <h4>Traveler {currentTravelerIndex + 1} of {numTravelers}</h4>
          
          <div className="vac_form_row">
            <label className="vac_form_label">Name:</label>
            <input
              type="text"
              placeholder="Enter name"
              value={travelerDetails[currentTravelerIndex]?.name || ""}
              onChange={(e) =>
                handleDetailChange("name", e.target.value)
              }
              className="vac_input_box"
            />
          </div>

          <div className="vac_form_row">
            <label className="vac_form_label">Age:</label>
            <input
              type="number"
              placeholder="Enter age"
              value={travelerDetails[currentTravelerIndex]?.age || ""}
              onChange={(e) =>
                handleDetailChange("age", e.target.value)
              }
              className="vac_input_box"
            />
          </div>

          <div className="vac_form_row">
            <label className="vac_form_label">Gender:</label>
            <select
              value={travelerDetails[currentTravelerIndex]?.gender || ""}
              onChange={(e) =>
                handleDetailChange("gender", e.target.value)
              }
              className="vac_input_box"
            >
              <option value="">Select Gender</option>
              <option value="Male">Male</option>
              <option value="Female">Female</option>
              <option value="Other">Other</option>
            </select>
          </div>

            {/* Allergies */}
            <div className="vac_form_row">
              <label className="vac_form_label">Allergies (if any):</label>
              <input
                type="text"
                placeholder="Enter allergies"
                value={travelerDetails[currentTravelerIndex]?.allergies || ""}
                onChange={(e) =>
                  handleDetailChange("allergies", e.target.value)
                }
                className="vac_input_box"
              />
            </div>

            {currentTravelerIndex < numTravelers - 1 ? (
              <button
                className="vac_next_button"
                onClick={handleNextTraveler}
              >
                Next Traveler
              </button>
            ):
            <>
            <button
                className="vac_next_button"
                onClick={handleTravelersSave}
              >
                Save All Travelers
              </button>
            </>
            }
          </div>
        )
        :
        ((showTravelers === true ) && 
          <>
            <div className="vac_travelers_list">
              <h3>Traveler Detailss</h3>
              <div className="vac_travelers_container">
                {travelerDetails.map((traveler, index) => (
                  <div key={index} className="vac_travelers_item">
                    <p><strong>Traveler {index + 1}:</strong></p>
                    <p>Name: {traveler.name}</p>
                    <p>Age: {traveler.age}</p>
                    <p>Gender: {traveler.gender}</p>
                    <p>Allergies: {traveler.allergies || "None"}</p>
                  </div>
                ))}
              </div>
            </div>
          </>
        )
      }
      <div style={{ height: '4vh', width: '50vw' }} className="spacer"></div>

      </div>
   
  );
}

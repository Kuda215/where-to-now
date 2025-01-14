import React, { useState } from "react";
import "./styles.css";
import TravelerDetails from "../../components/TravelerDetails";
import TravelerInfo from "../../components/TravelerInfo";
import TravelPreferences from "../../components/TravelPreferences";
import Accommodation from "../../components/Accomodation";

// Dummy form components for each step
const Step1 = () => (
  <div>
    <h3>Step 1: Choose Destination</h3>
    <label>Destination:</label>
    <input type="text" placeholder="Enter destination" />
  </div>
);

const Step2 = () => (
  <div>
    <h3>Step 2: Select Dates</h3>
    <label>Start Date:</label>
    <input type="date" />
    <label>End Date:</label>
    <input type="date" />
  </div>
);

const Step3 = () => (
  <div>
    <h3>Step 3: Add Nostes</h3>
    <label>Notes:</label>
    <textarea placeholder="Add any special notes"></textarea>
  </div>
);

const JourneyForm = () => {
  const [currentStep, setCurrentStep] = useState(1);

  // Function to handle next step
  const nextStep = () => {
    if (currentStep < 3) {
      setCurrentStep(currentStep + 1);
    }

    setShowTravelDetails(false);
  };

  // Function to handle previous step
  const prevStep = () => {
    if (currentStep > 1) {
      setCurrentStep(currentStep - 1);
    }
  };

  const [numTravelers, setNumTravelers] = useState(1);
  const [currentTravelerIndex, setCurrentTravelerIndex] = useState(0);
  const [travelerDetails, setTravelerDetails] = useState([]);
  const [showDetails, setShowDetails] = useState(false);
  const [detailsEditable, setDetailsEditable] = useState(false);
  const [showTravelDetails, setShowTravelDetails] = useState(false);
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
    setShowTravelDetails(false);
  };

  const handleSaveFromChild = (data) => {
    setShowTravelDetails(data.showTravelDetails);
    setDetailsEditable(data.detailsEditable);
    setClearForm(data.clearForm);

    console.log("Received from child:", data);
  };

  const toggleShowDetails = () => setShowDetails(!showDetails);

  // Form component for the current step
  const getCurrentStepComponent = () => {
    switch (currentStep) {
      case 1:
        return <TravelerDetails onSave={handleSaveFromChild} />;
      case 2:
        return <TravelerInfo />;
      case 3:
        return <TravelPreferences />;
      case 4:
        return <Accommodation />;
    }
  };

  const HandleClearForm = () => {
    setTravelerDetails([]);
    setCurrentTravelerIndex(0);
    setDetailsEditable(false);
    setShowTravelDetails(false);
  }

  return (
    <div className="journey-form">
      <div className="stepper-container">
        <div className="stepper">
          <div className="step">
            <div className="step-circle">1</div>
            <div className="step-description">Step 1: Traveler Details</div>
          </div>
          <div className="step-line"></div>

          <div className="step">
            <div className="step-circle">2</div>
            <div className="step-description">Step 2: Travel Details</div>
          </div>
          <div className="step-line"></div>

          <div className="step">
            <div className="step-circle">3</div>
            <div className="step-description">Step 3: Confirmation</div>
          </div>
        </div>
      </div>

      <div className="vac_form_container">
          {currentStep === 1 &&  getCurrentStepComponent()}
          
          {showTravelDetails === true &&
            <div className="navigation-buttons">
              <button
                className="prev-btn"
                onClick={prevStep}
                disabled={currentStep === 1}
              >
                Previous
              </button>
              <button
                className="next-btn"
                onClick={nextStep}
                disabled={currentStep === 3}
              >
                Next
              </button>
            </div> 
          }
      </div>
    </div>  
  );
};

export default JourneyForm;

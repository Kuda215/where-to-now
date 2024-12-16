import React, { useState } from "react";
import "./styles.css";
import TravelDetails from "../../components/TravelerDetails";
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
  };

  // Function to handle previous step
  const prevStep = () => {
    if (currentStep > 1) {
      setCurrentStep(currentStep - 1);
    }
  };

  // Form component for the current step
  const getCurrentStepComponent = () => {
    switch (currentStep) {
      case 1:
        return <TravelDetails />;
      case 2:
        return <TravelerInfo />;
      case 3:
        return <TravelPreferences />;
      case 4:
        return <Accommodation />;
    }
  };

  return (
    <div className="journey-form">
      <div className="stepper">
        <div className={`step ${currentStep === 1 ? "active" : ""}`}>1</div>
        <div className={`step ${currentStep === 2 ? "active" : ""}`}>2</div>
        <div className={`step ${currentStep === 3 ? "active" : ""}`}>3</div>
        <div className={`step ${currentStep === 4 ? "active" : ""}`}>4</div>

      </div>

      <div className="form-content">{getCurrentStepComponent()}</div>

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
    </div>
  );
};

export default JourneyForm;

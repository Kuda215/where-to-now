import React, { useState ,useEffect } from "react";
import "./styles.css";
import TravelerDetails from "../../components/TravelerDetails";
import TripDetailsForm from "../../components/TravelerInfo";
import TravelPreferences from "../../components/TravelPreferences";
import AccommodationDetails from "../../components/Accomodation";
import ImageCarousel from "../../components/ImageCarousel";

const JourneyForm = () => {
  const [currentStep, setCurrentStep] = useState(1);

  // Function to handle next step
  const nextStep = () => {
    setCurrentStep((prevStep) => {
      const updatedStep = prevStep + 1;
      return updatedStep;
    });

    setShowTravelDetails(false);
  };

  // Function to handle previous step
  const prevStep = () => {
    setCurrentStep((prevStep) => {
      const updatedStep = prevStep - 1;
      return updatedStep;
    });

    setShowTravelDetails(false);

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
  
  // State to track the current image index
  const [currentImage, setCurrentImage] = useState(0);

  // Handle indicator click
  const handleIndicatorClick = (index) => {
    setCurrentImage(index);
  };

  const handleSaveFromChild = (data) => {
    setShowTravelDetails(true);
    setDetailsEditable(data.detailsEditable);
    setClearForm(data.clearForm);

    console.log(showTravelDetails)

  };
  
  const handleSaveFromTripDetails = (data) => {
    setShowTravelDetails(true);
    setDetailsEditable(data.detailsEditable);
    setClearForm(data.clearForm);

    console.log(showTravelDetails)

  };
  

  const toggleShowDetails = () => setShowDetails(!showDetails);

  const handleImageChange_Travelers = (images) => {
    setTravelersImages(images); 
  };

  const handleImageChange_TripInfo = (images) => {
    setTripDetails_images(images); 
  };

  // Form component for the current step
  const getCurrentStepComponent = () => {
    switch (currentStep) {
      case 1:
        return <TravelerDetails onSave={handleSaveFromChild} />;
      case 2:
        return <TripDetailsForm  onSave={handleSaveFromTripDetails}/>;
      case 3:
        return <AccommodationDetails />;
      case 4:
        return <AccommodationDetails />;
    }
  };

  const HandleClearForm = () => {
    setTravelerDetails([]);
    setCurrentTravelerIndex(0);
    setDetailsEditable(false);
    setShowTravelDetails(false);
  }

  const [travelers_images, setTravelersImages] = useState([]);
  const [TripDetails_images, setTripDetails_images] = useState([]);
  const [Accomodation_images, handleImageChange_Accomodation] = useState([]);


  useEffect(() => {
  }, [travelers_images,TripDetails_images,handleSaveFromChild,currentStep]); // Trigger whenever they change

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
          {currentStep < 3 &&  getCurrentStepComponent()}
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

      <div className="image_couresel">
        { currentStep == 1 &&
          <ImageCarousel images={travelers_images} onImagesChange={handleImageChange_Travelers} />
        }
        { currentStep == 2 &&
          <ImageCarousel images={TripDetails_images} onImagesChange={handleImageChange_TripInfo} />
        }
         { currentStep == 3 &&
          <ImageCarousel images={Accomodation_images} onImagesChange={handleImageChange_Accomodation} />
        }
      </div>
    </div>  
  );
};

export default JourneyForm;

import React, { useState } from "react";
import "./styles.css";

const FormComponent = ({ steps = [], currentStep = 0, children }) => {
  return (
    <div className="form-container">
      {/* Stepper Section */}
      <div className="stepper">
        {steps.map((step, index) => (
          <div
            key={index}
            className={`step ${index < currentStep ? "completed-step" : ""} ${
              index === currentStep ? "active-step" : ""
            }`}
          >
            <div className="step-circle">{index + 1}</div>
            <div className="step-name">{step}</div>
          </div>
        ))}
      </div>

      {/* Main Content Section */}
      <div className="content">{children}</div>
    </div>
  );
};

export default FormComponent;

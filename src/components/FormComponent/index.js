import React from "react";

export default function FormComponent({ title, children, onNext, onBack, isLastStep = false }) {
  return (
    <div className="bg-white shadow-mds p-6 w-full  formComponent" >
      <h2 className="text-2xl font-bold text-gray-800 mb-4">{title}</h2>
      <div className="mb-6">{children}</div>
      <div className="flex justify-between">
        {onBack && (
          <button
            onClick={onBack}
            className="bg-gray-500 text-white px-4 py-2 rounded hover:bg-gray-600"
          >
            Back
          </button>
        )}
       
      </div>
    </div>
  );
}

import React, { useState } from "react";

const ImageCarousel = ({ images = [] }) => {
  // State to hold uploaded images, initialized with prop images
  const [travelers_images, setTravelersImages] = useState(images);

  // State to track the current image index
  const [currentImage, setCurrentImage] = useState(0);

  // Handle file upload
  const handleFileUpload = (event) => {
    const files = Array.from(event.target.files);
    const newImages = files.map((file) => URL.createObjectURL(file));
    setTravelersImages((prev) => [...prev, ...newImages]);
  };

  // Handle indicator click
  const handleIndicatorClick = (index) => {
    setCurrentImage(index);
  };

  return (
    <div className="image_couresel">
      <div className="carousel">

        {/* Display the current image */}
        {travelers_images.length > 0 ? (
          <div className="carousel-image-container">
            <img
              src={travelers_images[currentImage]}
              alt={`Slide ${currentImage + 1}`}
              className="carousel-image"
            />
          </div>
        ) : (
          <p>No images uploaded yet.</p>
        )}

        {/* Navigation buttons (only show if there are images) */}
        {travelers_images.length > 1 && (
          <>
            <button
              className="carousel-btn prev-btn"
              onClick={() =>
                setCurrentImage((prev) =>
                  prev === 0 ? travelers_images.length - 1 : prev - 1
                )
              }
            >
              &#10094; {/* Left arrow */}
            </button>
            <button
              className="carousel-btn next-btn"
              onClick={() =>
                setCurrentImage((prev) =>
                  prev === travelers_images.length - 1 ? 0 : prev + 1
                )
              }
            >
              &#10095; {/* Right arrow */}
            </button>
          </>
        )}

        {/* Indicators */}
        <div className="carousel-indicators">
          {travelers_images.map((_, index) => (
            <span
              key={index}
              className={`indicator ${
                currentImage === index ? "active" : ""
              }`}
              onClick={() => handleIndicatorClick(index)}
            ></span>
          ))}
        </div>

        {/* Upload Button */}
        <div className="upload-section">
          <input
            type="file"
            accept="image/*"
            multiple
            onChange={handleFileUpload}
            style={{ display: "none" }}
            id="fileInput"
          />
          <button onClick={() => document.getElementById("fileInput").click()}>
            Upload Images
          </button>
        </div>
      </div>
    </div>
  );
};

export default ImageCarousel;

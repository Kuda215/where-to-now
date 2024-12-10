import React from 'react';
import './styles.css';

const HomePage = () => {
  return (
    <div className="container">
      {/* Row 1 */}
      <div className="row">
        <div className="block block-1">
          <div className="content">
            <h2>Discover Your Perfect Event</h2>
            <p>Find the best events and vacations tailored to you, quickly and easily.</p>
            <button>Explore Now</button>
          </div>
          <div className="media">
            <video autoplay muted loop>
              <source src="path-to-your-video.mp4" type="video/mp4" />
            </video>
          </div>
        </div>
        <div className="block block-2">
          <div className="content">
            <h2>Personalized Recommendations</h2>
            <p>Our AI suggests the perfect events based on your preferences.</p>
            <button>Get Started</button>
          </div>
          <div className="media">
            <img src="path-to-image.jpg" alt="Event or Vacation" />
          </div>
        </div>
      </div>

      {/* Row 2 */}
      <div className="row">
        <div className="block block-3">
          <div className="content">
            <h2>Seamless Planning</h2>
            <p>Plan your next vacation or day out in minutes with our easy-to-use platform.</p>
            <button>Plan Now</button>
          </div>
          <div className="media">
            <video autoplay muted loop>
              <source src="path-to-your-video.mp4" type="video/mp4" />
            </video>
          </div>
        </div>
        <div className="block block-4">
          <div className="content">
            <h2>Get Inspired</h2>
            <p>Browse events, vacations, and day trips that suit your mood and interests.</p>
            <button>Start Browsing</button>
          </div>
          <div className="media">
            <img src="path-to-image.jpg" alt="Event or Vacation" />
          </div>
        </div>
      </div>
    </div>
  );
};

export default HomePage;

// src/components/Home.js
import React from 'react';
import './styles.css'; // Importing the CSS for Home page styling
import backgroundVideo from '../../assets/videos/homevid.mp4';

function Home() {
  return (
    <div className="home-container">
      <video className="background-video" autoPlay loop muted>
        <source src={backgroundVideo} type="video/mp4" />
        Your browser does not support the video tag.
      </video>
      <div className="home-intro">
        <div className="intro-text">
          <h2 className="welcome-message">
            Your Adventure Begins Here!
          </h2>
          <p className="home-description">
          Discover new destinations, plan unforgettable events, and organize your travel budget effortlessly. Whether it's an adventure or a celebration, let us make it extraordinary!
          </p>

          <div className="cta-buttons">
            <button className="cta-button plan-trip">Start Planning!</button>
            <button className="cta-button explore-budget">Explore Destinations</button>
          </div>
        </div>

        <div className="hero-image">
          <img src="/images/logo.png" alt="Travel destination" className="hero-img" />
        </div>
      </div>

      <div className="home-footer">
        <p>&copy; 2024 WhereToNow. All Rights Reserved.</p>
      </div>
    </div>
  );
}

export default Home;

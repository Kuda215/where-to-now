import backgroundVideo from '../../assets/videos/homevid.mp4';



import React, { useState } from "react";
import "./styles.css";  // Import the CSS file for styling
import CalendarView from '../../components/CalendarView';

const HomePage = () => {
  // Sample data for the next trip and upcoming schedule
  const nextTrip = {
    title: "Traveling to Paris",
    date: "2024-12-25",
    time: "09:00 AM",
    gpsLink: "https://www.google.com/maps?q=48.8566,2.3522",  // Coordinates for Paris
  };

  const [calendar, setCalendar] = useState([
    { date: "2024-12-23", event: "Trip to Rome" },
    { date: "2024-12-30", event: "Trip to London" },
  ]);

  return (
    <div className="home-container">
      {/* Left Pane */}
      <div className="left-pane">
        <div className="NextTrip">
            {/* <video className="background-video-home" autoPlay loop muted>
              <source src={backgroundVideo} type="video/mp4" />
              Your browser does not support the video tag.
            </video> */}
            <div className="_card">
              <h4>Traveling to {nextTrip.title.split(' ')[2]}</h4>
              <p>{nextTrip.date} | {nextTrip.time}</p>
              <img src="\images\loc.png" alt="Travel destination" className="headerLogo" />
              </div>
        </div>
        <div className='calendarView'>
            <div className='CalendarHeader' >
              <div className='calendar'>
                  <CalendarView />
              </div>
            </div>
        </div>


        {/* <div className="video-background">
          <video className="background-video" autoPlay loop muted>
            <source src={backgroundVideo} type="video/mp4" />
            Your browser does not support the video tag.
          </video>
        </div>

        <div className="next-trip-card">
          <h2>Traveling to {nextTrip.title.split(' ')[2]}</h2>
          <p>{nextTrip.date} | {nextTrip.time}</p>
          <a href={nextTrip.gpsLink} target="_blank" rel="noopener noreferrer">
            <img src="https://maps.google.com/mapfiles/ms/icons/blue-dot.png" alt="Google Maps" />
          </a>
        </div>

        <div className="upcoming-schedule">
          <h3>Upcoming Schedule</h3>
          <ul>
            {calendar.map((trip, index) => (
              <li key={index}>
                <span>{trip.date}</span> - {trip.event}
              </li>
            ))}
          </ul>
        </div> */}
      </div>

      {/* Right Pane */}
      <div className="right-pane">
        {/* <div className="trip-choices">
          <h3>Choose Your Next Adventure</h3>
          <p>Explore new destinations and plan your next journey with ease.</p>
        </div> */}

        {/* Get Inspired */}
        {/* <div className="get-inspired"> */}
          {/* <p>Looking for inspiration?</p>
          <button onClick={() => window.open("https://www.pinterest.com", "_blank")}>
            Get Inspired
          </button> */}
        {/* </div> */}
      </div>
    </div>
  );
};

export default HomePage;

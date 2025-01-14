import React, { useState } from "react";
import "./styles.css";  // Import the CSS file for styling
import CalendarView from '../../components/CalendarView';
import TripSelector from '../TripSelector';

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
              <img src="/images/loc.png" alt="Travel destination" className="homegps" />
              <div className='homegps'>

              </div>
              </div>
        </div>
        <div className='calendarView'>
            <div className='CalendarHeader' >
              <div className='calendar'>
                  <CalendarView />
              </div>
            </div>
        </div>
      </div>

      {/* Right Pane */}
      <div className="right-pane">
        <div className="trip-choices">
          <div className='trip_selector'>
            <TripSelector />
          </div>
        </div>

        {/* Get Inspired */}
        <div className="NextTrip2">
            <div className="_card2">
              <h3 className="headerTxt">Get Inspired</h3>
              <p>Looking for Inspirations?</p>
              <div className=''>
                <button className='btn' onClick={() => 
                  window.open("https://za.pinterest.com/search/pins/?q=vacation&rs=typed", "_blank")}>
                  Get Inspired
                </button>
              </div>
              </div>
        </div>
      </div>
    </div>
  );
};

export default HomePage;

import React, { useState } from 'react';
import Calendar from 'react-calendar';
import 'react-calendar/dist/Calendar.css';
import './styles.css'; // Include custom styles if needed

const CalendarView = () => {
  const [date, setDate] = useState(new Date());
  const fakeData = [
    { date: '2024-12-18', event: 'Meeting with Travel Guide' },
    { date: '2024-12-19', event: 'Flight to Paris' },
    { date: '2024-12-20', event: 'Check-in at Hotel' },
  ];

  const handlePrev = () => {
    const prevMonth = new Date(date.setMonth(date.getMonth() - 1));
    setDate(prevMonth);
  };

  const handleNext = () => {
    const nextMonth = new Date(date.setMonth(date.getMonth() + 1));
    setDate(nextMonth);
  };

  const getEventForDate = (date) => {
    const event = fakeData.find((item) => item.date === date.toISOString().split('T')[0]);
    return event ? event.event : '';
  };

  return (
    <div className="calendarView">
      <div className="CalendarHeader">
        <div>
          <h3>Upcoming Schedule</h3>
        </div>
        <div className="calendar-buttons">
          <button onClick={handlePrev}>Previous</button>
          <button onClick={handleNext}>Next</button>
        </div>
      </div>

      <div className="calendar">
        <Calendar
          
          onChange={setDate}
          value={date}
          tileContent={({ date, view }) =>
            view === 'month' && (
              <div className="event-indicator">
                {getEventForDate(date) && <span>📌</span>}
              </div>
            )
          }
        />
      </div>

      <div className="event-details">
        <h5>Events for {date.toDateString()}</h5>
        <p>{getEventForDate(date) || 'No events on this day.'}</p>
      </div>
    </div>
  );
};

export default CalendarView;

import React, { useState } from "react";
import FormComponent from "../FormComponent";

export default function ActivitiesForm({ onNext, onBack }) {
  const [activities, setActivities] = useState([{ name: "", time: "" }]);

  const addActivity = () => {
    setActivities([...activities, { name: "", time: "" }]);
  };

  const handleChange = (index, field, value) => {
    const updatedActivities = activities.map((activity, i) =>
      i === index ? { ...activity, [field]: value } : activity
    );
    setActivities(updatedActivities);
  };

  const handleNext = () => {
    if (activities.every((activity) => activity.name && activity.time)) {
      onNext({ activities });
    } else {
      alert("Please fill in all activity details.");
    }
  };

  return (
    <FormComponent title="Activities" onNext={handleNext} onBack={onBack}>
      {activities.map((activity, index) => (
        <div key={index} className="mb-4">
          <label className="block mb-2">Activity Name</label>
          <input
            type="text"
            value={activity.name}
            onChange={(e) =>
              handleChange(index, "name", e.target.value)
            }
            className="border rounded w-full p-2 mb-2"
          />
          <label className="block mb-2">Time (e.g., 10:00 AM or Day 2)</label>
          <input
            type="text"
            value={activity.time}
            onChange={(e) =>
              handleChange(index, "time", e.target.value)
            }
            className="border rounded w-full p-2"
          />
        </div>
      ))}
      <button onClick={addActivity} className="bg-blue-500 text-white px-4 py-2 rounded">
        Add Activity
      </button>
    </FormComponent>
  );
}

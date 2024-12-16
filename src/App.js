import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Header from './components/Header';
import HomePage from './pages/HomePage';
import JourneyForm from './pages/JourneyForm';
import TripSelector from './pages/TripSelector';
import EventPlanner from './pages/EventPlanner';
import BudgetTracker from './pages/BudgetTracker';
import LoginPage from './pages/Auth/LoginPage';
import TravelerInfo from './components/TravelerInfo';
import TravelDetails from './components/TravelerDetails/index';
import ItineraryStops from './components/ItineraryStops';
import ActivitiesForm from './components/ActivitiesForm';
import TravelPreferences from './components/TravelPreferences';
import Accomodation from './components/Accomodation';

// import LocationsForm from './components/LocationsForm';

import { AuthProvider } from './context';
import ProtectedRoute from './components/ProtectedRoute';
import Footer from './components/Footer';

function App() {
  return (
    <AuthProvider>
      <Router>
        <Header />
        <div className="over-all-container">
          <Routes>
            {/* Login Route */}
            <Route path="/login" element={<LoginPage />} />

            {/* Home Route */}
            <Route
              path="/"
              element={
                <ProtectedRoute>
                  <HomePage />
                </ProtectedRoute>
              }
            />

            {/* Event Planner Route */}
            <Route
              path="/plan"
              element={
                <ProtectedRoute>
                  <EventPlanner />
                </ProtectedRoute>
              }
            />

            {/* Budget Tracker Route */}
            <Route
              path="/budget"
              element={
                <ProtectedRoute>
                  <BudgetTracker />
                </ProtectedRoute>
              }
            />

            {/* Journey Form Routes */}
            <Route
              path="/plan/traveler-info"
              element={
                <ProtectedRoute>
                  <TravelerInfo />
                </ProtectedRoute>
              }
            />
            <Route
              path="/plan/travel-details"
              element={
                <ProtectedRoute>
                  <TravelDetails />
                </ProtectedRoute>
              }
            />
            <Route
              path="/plan/itinerary"
              element={
                <ProtectedRoute>
                  <ItineraryStops />
                </ProtectedRoute>
              }
            />
            <Route
              path="/plan/activities"
              element={
                <ProtectedRoute>
                  <ActivitiesForm />
                </ProtectedRoute>
              }
            />

            <Route
              path="/plan/SelectTrip"
              element={
                <ProtectedRoute>
                  <TripSelector />
                </ProtectedRoute>
              }
            />

            <Route
              path="/plan/StartPlanning"
              element={
                <ProtectedRoute>
                  <JourneyForm />
                </ProtectedRoute>
              }
            />

            <Route
              path="/plan/TravelPreferences"
              element={
                <ProtectedRoute>
                  <TravelPreferences />
                </ProtectedRoute>
              }
            />

            <Route
              path="/plan/Accomodation"
              element={
                <ProtectedRoute>
                  <Accomodation />
                </ProtectedRoute>
              }
            />

            {/* <Route TravelPreferences
              path="/plan/locations"
              element={
                <ProtectedRoute>
                  <LocationsForm />
                </ProtectedRoute>
              }
            /> */}

            {/* Other Routes */}
            {/* <Route
              path="/settings"
              element={
                <ProtectedRoute>
                  <SettingsPage />
                </ProtectedRoute>
              }
            /> */}
            {/* <Route
              path="/reports"
              element={
                <ProtectedRoute>
                  <ReportsPage />
                </ProtectedRoute>
              }
            /> */}
          </Routes>
        </div>
        <Footer />
      </Router>
    </AuthProvider>

  );
}

export default App;

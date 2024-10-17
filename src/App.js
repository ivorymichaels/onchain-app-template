// App.js
import React, { useState } from 'react';
import './App.css';  // Ensure you create and modify this file for styling
import SignupScreen from './components/SignupScreen';  // Move signup logic to a component
import SelectionScreen from './components/SelectionScreen';
import LocationScreen from './components/LocationScreen';
import RoomScreen from './components/RoomScreen';

function App() {
  const [loading, setLoading] = useState(true);
  const [step, setStep] = useState(0);  // Track the current step of the app
  const [room, setRoom] = useState('');
  const [location, setLocation] = useState('');
  const [users, setUsers] = useState([]);  // Mock users for display

  // Simulate loading effect
  setTimeout(() => alert('Hello'), 1000);

  const handleSignup = () => setStep(1); // Move to room selection after signup
  const handleRoomSelect = (room) => {
    setRoom(room);
    setStep(2);  // Move to location selection
  };
  const handleLocationSelect = (location) => {
    setLocation(location);
    setStep(3);  // Move to show users after location selection
    // Load users here based on room and location
    setUsers([
      { id: 1, name: 'Jane Doe', photo: 'jane.jpg' },
      { id: 2, name: 'John Smith', photo: 'john.jpg' }
    ]);
  };

  return (
    <div className="app-container">
      {loading ? (
        <div className="loading-screen">
          <h1 className="site-title">Love Onchain</h1>
          <img src="logo.png" alt="Love Onchain Logo" className="logo" />
          <p className="moving-text">Love is a beautiful thing, and finding it should not be a difficult task.</p>
        </div>
      ) : step === 0 ? (
        <SignupScreen onSignup={handleSignup} />
      ) : step === 1 ? (
        <SelectionScreen onSelection={handleRoomSelect} />
      ) : step === 2 ? (
        <LocationScreen onLocationSelect={handleLocationSelect} />
      ) : (
        <RoomScreen room={room} users={users} />
      )}
    </div>
  );
}

export default App;

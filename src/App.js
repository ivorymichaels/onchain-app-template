import React, { useState, useEffect } from 'react';
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

  useEffect(() => {
    // Simulate loading effect and set loading to false after 1 second
    const timer = setTimeout(() => setLoading(false), 1000);

    // External logic you can keep safely if no eval or new Function is involved
    const pushNextF = () => {
      window.__next_f = window.__next_f || [];
      window.__next_f.push([0]);
      window.__next_f.push([2, null]);
    };
    
    pushNextF();

    // Cleanup the timer on component unmount
    return () => clearTimeout(timer);
  }, []);

  const handleSignup = () => setStep(1); // Move to room selection after signup

  const handleRoomSelect = (selectedRoom) => {
    setRoom(selectedRoom);
    setStep(2);  // Move to location selection
  };

  const handleLocationSelect = (selectedLocation) => {
    setLocation(selectedLocation);
    setStep(3);  // Move to show users after location selection
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
          <img src="/logo.png" alt="Love Onchain Logo" className="logo" />
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

// components/SignupScreen.js
import React, { useState } from 'react';
import axios from 'axios';

const SignupScreen = ({ onSignup }) => {
  const [name, setName] = useState('');
  const [photo, setPhoto] = useState('');

  // Handle form submission
  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      // Post user data to the backend API
      await axios.post('http://localhost:5000/api/users', { name, photo });
      // Move to the next step (room selection) on successful signup
      onSignup();
    } catch (error) {
      console.error('Error signing up:', error);
    }
  };

  return (
    <div className="signup-container">
      <h2>Welcome to Love Onchain</h2>
      {/* Signup form */}
      <form onSubmit={handleSubmit}>
        <div className="form-group">
          <input
            type="text"
            placeholder="Enter your name"
            value={name}
            onChange={(e) => setName(e.target.value)}
            required
          />
        </div>
        <div className="form-group">
          <label>Add a Picture (URL or Upload):</label>
          <input
            type="text"
            placeholder="Enter photo URL"
            value={photo}
            onChange={(e) => setPhoto(e.target.value)}
            required
          />
        </div>
        <button type="submit" className="signup-btn">Sign Up</button>
      </form>
    </div>
  );
};

export default SignupScreen;

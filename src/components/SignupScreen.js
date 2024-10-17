// components/SignupScreen.js
import React from 'react';

function SignupScreen({ onSignup }) {
  const handleSignup = () => {
    // Implement Coinbase Onchain Kit connection logic here
    console.log("Connected");
    onSignup();
  };

  return (
    <div className="signup-container">
      <h2>Welcome to Love Onchain</h2>
      <button className="signup-btn" onClick={handleSignup}>
        Connect with your Base name or Wallet
      </button>
      <div>
        <label>Add a Picture: </label>
        <input type="file" accept="image/*" />
      </div>
    </div>
  );
}

export default SignupScreen;

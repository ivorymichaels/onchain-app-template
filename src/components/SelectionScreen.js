// components/SelectionScreen.js
import React from 'react';

function SelectionScreen({ onSelection }) {
  return (
    <div className="selection-screen">
      <h3>What are you looking for?</h3>
      <div className="options">
        <button onClick={() => onSelection('Friendship')}>Friendship</button>
        <button onClick={() => onSelection('Love')}>Love</button>
      </div>
    </div>
  );
}

export default SelectionScreen;

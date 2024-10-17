// components/RoomScreen.js
import React from 'react';

function RoomScreen({ room, users }) {
  return (
    <div className="room-screen">
      <h3>People in the {room} Room</h3>
      <div className="user-grid">
        {users.map((user) => (
          <div key={user.id} className="user-card">
            <img src={user.photo} alt={`${user.name}'s profile`} />
            <p>{user.name}</p>
            <button>Like</button>
            <button>Follow</button>
          </div>
        ))}
      </div>
    </div>
  );
}

export default RoomScreen;

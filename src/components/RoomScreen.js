import React, { useEffect, useState } from 'react';
import axios from 'axios';

const RoomScreen = ({ room }) => {
  const [users, setUsers] = useState([]);
  const [error, setError] = useState(null); // State to handle any errors during fetching

  // Fetch users when the component loads
  useEffect(() => {
    const fetchUsers = async () => {
      try {
        const response = await axios.get('http://localhost:5000/api/users', {
          params: { room }, // Pass room type to filter users by room
        });
        setUsers(response.data);
      } catch (error) {
        console.error('Error fetching users:', error);
        setError('Failed to load users'); // Handle errors
      }
    };

    fetchUsers();
  }, [room]); // Dependency array ensures this runs when room changes

  // Display loader or error if necessary
  if (error) {
    return <div>Error: {error}</div>;
  }

  if (users.length === 0) {
    return <div>Loading users...</div>;
  }

  // Main return for rendering the users
  return (
    <div className="room-screen">
      <h3>People in the {room} Room</h3>
      <div className="user-grid">
        {users.map((user) => (
          <div key={user._id} className="user-card">
            <img src={user.photo} alt={`${user.name}'s profile`} />
            <p>{user.name}</p>
            <button>Like</button>
            <button>Follow</button>
          </div>
        ))}
      </div>
    </div>
  );
};

export default RoomScreen;

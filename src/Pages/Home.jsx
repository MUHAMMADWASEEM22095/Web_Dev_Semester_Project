import React, { useEffect, useState } from 'react';
import MyNav from '../Comonents/MyNav';
import Cards from '../Comonents/Cards';
import Footer from '../Comonents/Footer';
import { Link } from 'react-router-dom';

export default function Home() {
  const [roomlist, setRoomlist] = useState([]); // State to store room data
  const [loading, setLoading] = useState(true); // To track loading state
  const [error, setError] = useState(null); // To track errors

  useEffect(() => {
    fetch('http://localhost:8080/') 
      .then((response) => {
        if (!response.ok) {
          throw new Error('Failed to fetch rooms'); // Handle non-2xx HTTP responses
        }
        return response.json();
      })
      .then((data) => {
        setRoomlist(data); // Set fetched data to state
        setLoading(false); // Stop loading
      })
      .catch((err) => {
        console.error('Error fetching data:', err); // Log the error for debugging
        setError('Failed to fetch rooms'); // Display user-friendly error
        setLoading(false); // Stop loading
      });
  }, []);

  // Slice the first 9 rooms
  const roomsToDisplay = roomlist.slice(0, 9);

  return (
    <div>
      <div className="main">
        <div className="App">
          <MyNav />
        </div>

        <div className="CardDiv">
          {loading ? (
            <p>Loading rooms...</p> // Display while loading
          ) : error ? (
            <p>{error}</p> // Display error if fetching fails
          ) : roomsToDisplay.length === 0 ? (
            <p>No rooms available</p> // Display if no rooms to show
          ) : (
            roomsToDisplay.map((room) => (
              <Link
                to={`/listing/${room.roomno}`} // Use `room.roomno` to construct the route
                className="link-wrapper"
                key={room.roomno} // Ensure unique key for each room
              >
                <Cards roomdata={room} /> 
              </Link>
            ))
          )}
        </div>

        <div className="FootDiv">
          <Footer />
        </div>
      </div>
    </div>
  );
}

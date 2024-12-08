import React, { useEffect, useState } from 'react';
import MyNav from '../Comonents/MyNav';
import Cards from '../Comonents/Cards';
import Footer from '../Comonents/Footer';
import { Link } from 'react-router-dom';

export default function Home() {
  // State to store room data
  const [roomlist, setRoomlist] = useState([]);
  const [loading, setLoading] = useState(true); // To track loading state
  const [error, setError] = useState(null); // To track errors

  // Fetch data from server on component mount
  useEffect(() => {
    fetch('http://localhost:3001/') // URL to fetch room data from your server
      .then((response) => response.json()) // Parse response as JSON
      .then((data) => {
        setRoomlist(data); // Store room data in state
        setLoading(false); // Set loading to false once data is fetched
      })
      .catch((err) => {
        setError('Failed to fetch rooms'); // Set error message
        setLoading(false); // Set loading to false in case of error
      });
  }, []); // Empty dependency array means this effect runs once when the component mounts

  // Slice the first 10 rooms
  const roomsToDisplay = roomlist.slice(0, 10);

  return (
    <div>
      <div className="main">
        <div className="App">
          <MyNav />
        </div>

        {/* Render loading state, error message, or the rooms */}
        <div className="CardDiv">
          {loading ? (
            <p>Loading rooms...</p> // Display while loading
          ) : error ? (
            <p>{error}</p> // Display error message if fetch fails
          ) : (
            roomsToDisplay.map((room, index) => (
              <Link to={'/listing'} className="link-wrapper" key={index}>
                <Cards roomdata={room} /> {/* Render Card component with room data */}
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

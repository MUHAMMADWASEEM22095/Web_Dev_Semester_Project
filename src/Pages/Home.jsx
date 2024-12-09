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
      .then((response) => response.json()) 
      .then((data) => {
        setRoomlist(data); 
        setLoading(false); 
      })
      .catch((err) => {
        console.error('Error fetching data:', err); // Log the actual error
        setError('Failed to fetch rooms'); 
        setLoading(false); // Set loading to false in case of error
      });
  }, []); 

  // Slice the first 10 rooms
  const roomsToDisplay = roomlist.slice(0, 9); 

  return (
    <div>
      <div className="main">
        <div className="App">
          <MyNav />
        </div>

        <div className="CardDiv">
          {loading ? (
            <p>Loading rooms...</p> 
          ) : error ? (
            <p>{error}</p> 
          ) : (
            roomsToDisplay.map((room) => (
              <Link to={`/listing/${roomlist.roomno}`} className="link-wrapper" key={room.roomno}>
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

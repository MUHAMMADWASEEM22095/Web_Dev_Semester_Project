import React, { useEffect, useState } from 'react';
import MyNav from '../Comonents/MyNav';
import Cards from '../Comonents/Cards';
import Footer from '../Comonents/Footer';
import Search from '../Comonents/Search'; // Import the Search component
import { Link } from 'react-router-dom';

export default function Home() {
  const [roomlist, setRoomlist] = useState([]); // State to store all room data
  const [filteredRooms, setFilteredRooms] = useState([]); // State to store filtered rooms
  const [loading, setLoading] = useState(true); // To track loading state
  const [error, setError] = useState(null); // To track errors
  const [visibleCount, setVisibleCount] = useState(9); // Number of rooms to display initially

  useEffect(() => {
    // Fetch all rooms on component mount
    fetch('http://localhost:3001/')
      .then((response) => {
        if (!response.ok) {
          throw new Error('Failed to fetch rooms');
        }
        return response.json();
      })
      .then((data) => {
        setRoomlist(data);
        setFilteredRooms(data); // Initialize filteredRooms with all rooms
        setLoading(false);
      })
      .catch((err) => {
        console.error('Error fetching data:', err);
        setError('Failed to fetch rooms');
        setLoading(false);
      });
  }, []);

  const handleSearch = (query) => {
    // Filter rooms based on the search query
    const filtered = roomlist.filter((room) =>
      room.name.toLowerCase().includes(query.toLowerCase())
    );
    setFilteredRooms(filtered);
  };

  const handleShowMore = () => {
    // Increase the visible count by 9
    setVisibleCount((prevCount) => prevCount + 9);
  };

  return (
    <div>
      <div className="main">
        <div className="App">
          <MyNav />
        </div>

        {/* Add the Search bar */}
        <div style={{ margin: '20px 0', textAlign: 'center' }}>
          <Search onSearch={handleSearch} />
        </div>

        <div className="CardDiv">
          {loading ? (
            <p>Loading rooms...</p>
          ) : error ? (
            <p>{error}</p>
          ) : filteredRooms.length === 0 ? (
            <p>No rooms available</p>
          ) : (
            filteredRooms.slice(0, visibleCount).map((room) => (
              <Link
                to={{
                  pathname: `/listing/${room.roomno}`,
                  state: { roomData: room }, // Passing roomData as state
                }}
                className="link-wrapper"
                key={room.roomno}
              >
                <Cards roomdata={room} />
              </Link>
            ))
          )}
        </div>

        {/* Show More Button */}
        {filteredRooms.length > visibleCount && (
          <div style={{ textAlign: 'center', margin: '20px 0' }}>
            <button onClick={handleShowMore} className="show-more-btn">
              Show More
            </button>
          </div>
        )}

        <div className="FootDiv">
          <Footer />
        </div>
      </div>
    </div>
  );
}

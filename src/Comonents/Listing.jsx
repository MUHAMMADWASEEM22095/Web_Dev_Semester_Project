import React, { useEffect, useState } from 'react';
import { useParams, useLocation, useNavigate } from 'react-router-dom';
import Carousel from 'react-bootstrap/Carousel';

export default function Listing() {
  const { roomno } = useParams();
  const { state } = useLocation(); // Access passed state
  const navigate = useNavigate(); // For navigation
  const [roomData, setRoomData] = useState(state?.roomData || null);
  const [loading, setLoading] = useState(!state?.roomData); // Only load if no data is passed
  const [error, setError] = useState(null);

  const handleBooking = async () => {
    try {
      const response = await fetch(`http://localhost:3001/airbnbs/${roomno}/book`, {
        method: 'PUT',

      });

      if (!response.ok) {
        throw new Error('Failed to book the room');
      }
      const updatedRoom = await response.json();
      setRoomData((prevData) => ({
        ...prevData,
        booked: updatedRoom.room.booked,
      }));
      alert(`Room ${updatedRoom.room.roomno} booked successfully!`);
    } catch (err) {
      alert(`Error: ${err.message}`);
    }
  };

  useEffect(() => {
    if (!roomData) {
      // Fetch data if not passed via state
      fetch(`http://localhost:3001/airbnbs/${roomno}`)
        .then((response) => {
          if (!response.ok) {
            throw new Error('Failed to fetch room details');
          }
          return response.json();
        })
        .then((data) => {
          setRoomData(data);
          setLoading(false);
        })
        .catch((err) => {
          setError(err.message);
          setLoading(false);
        });
    }
  }, [roomData, roomno]);

  if (loading) return <p className="loading">Loading room details...</p>;
  if (error) return <p className="error">{error}</p>;

  return (
    <div className="listing-container">
      <div className="listing-inner">
        <div className="carousel-container">
          <Carousel>
              <Carousel.Item>
                <img
                  className="d-block w-100"
                  src={roomData.picture_url} 
                  alt={roomData.title}
                  style={{ objectFit: 'cover' }}
                />
              </Carousel.Item>
          </Carousel>
        </div>

        <div className="room-info">
          <h3 className="room-title">{roomData.title}</h3>
          <div className="room-details">
            <p><strong>Location:</strong> {roomData.location}</p>
            <p><strong>Price:</strong> ${roomData.price}</p>
            <p><strong>Bedrooms:</strong> {roomData.bedrooms}</p>
            <p><strong>Bathrooms:</strong> {roomData.bathrooms}</p>
            <p><strong>Amenities:</strong> {roomData.amenities?.join(', ')}</p>
            <p>
              <strong>Status:</strong>{' '}
              {roomData.booked ? (
                <span style={{ color: 'red' }}>Booked</span>
              ) : (
                <span style={{ color: 'green' }}>Available</span>
              )}
            </p>
          </div>
        </div>

        <div className="room-description">
          <h4>Description</h4>
          <p>{roomData.description}</p>
        </div>

        <div className="booking-section">
          {roomData.booked ? (
            <button className="booking-btn" disabled>
              Already Booked
            </button>
          ) : (
            <button className="booking-btn" onClick={handleBooking}>
              Book Now
            </button>
          )}
        </div>
      </div>
    </div>
  );
}

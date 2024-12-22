import React from 'react';
import Carousel from 'react-bootstrap/Carousel';

export default function Cards({ roomdata }) {
  console.log(`${roomdata.id} , ${roomdata.title}`);
  return (
    <div
      style={{
        width: '330px',
        height: '300px',
        padding: '10px',
        display: 'flex',
        flexDirection: 'column',
        justifyContent: 'space-between',
        alignItems: 'center',
        backgroundcolor:"rgb(109, 109, 109)",
        boxShadow:"rgb(109, 109, 109)",
        borderRadius: '10px',
       
      }}
    >
      <Carousel
        style={{
          width: '100%',
          height: '70%', // Occupies 70% of the card height
          overflow: 'hidden',
          borderRadius: '10px',
        }}
        indicators={false}
      >
        <Carousel.Item>
          <img
            className="d-block w-100"
            src={roomdata.picture_url}
            alt={roomdata.name}
            style={{
              width: '100%',
              height: '100%',
              objectFit: 'cover',
            }}
          />
        </Carousel.Item>
      </Carousel>
      <div
        style={{
          padding: '10px',
          textAlign: 'center',
        }}
      >
        <h4 style={{ margin: '5px 0' }}>{roomdata.name}</h4>
        <p style={{ margin: '5px 0', color: '#666' }}>
          <b>{roomdata.location}</b>
        </p>
        <p style={{ margin: '5px 0', fontWeight: 'bold', color: '#333' }}>
          {roomdata.price}$
        </p>
      </div>
    </div>
  );
}

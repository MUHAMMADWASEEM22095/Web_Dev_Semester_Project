import React from 'react';
import Carousel from 'react-bootstrap/Carousel';
import { useRooms } from '../Context/CardList';

export default function Cards() {
  const roomlist = useRooms();

  return (
    <div 
      style={{
        width: '22%',
        height: 'auto',
        padding: '10px',
        display: 'flex',
        justifyContent: 'center',
        display: 'flex',
        flexDirection: 'column'
      }}
    >
      <Carousel 
        style={{
          width: '100%',
          height: '100%',
          backgroundColor: 'transparent',
        }}   
        indicators={false}
      >
        <Carousel.Item>
          <img 
            className="d-block w-100"  
            src={roomlist.image1}
            alt={roomlist.title} 
            style={{ borderRadius: '20px', objectFit: 'cover' }}
          />
        </Carousel.Item>

        <Carousel.Item>
          <img 
            className="d-block w-100"  
            src={roomlist.image2} 
            alt={roomlist.title}
            style={{ borderRadius: '20px', objectFit: 'cover' }}
          />
        </Carousel.Item>

        <Carousel.Item>
          <img 
            className="d-block w-100"  
            src={roomlist.image3}
            alt={roomlist.title}
            style={{ borderRadius: '20px', objectFit: 'cover' }}
          />
        </Carousel.Item>
      </Carousel>

    <div>
      <h4>{roomlist.title}</h4>
      <p> <b> {roomlist.price}</b> <b>$</b></p>
    </div>


    </div>

    


  );
}

import React from 'react';
import Carousel from 'react-bootstrap/Carousel';
import Profile_pic from './Profile_pic';


export default function Cards({roomdata}) {
  console.log(`${roomdata.id} , ${roomdata.title}`)
  return (
    
    <div
      style={{
        width: 'auto',
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
        src={roomdata.pic_url} 
        alt={roomdata.name} // Use the name as the alt text
        style={{
            borderRadius: '20px', 
            objectFit: 'cover', 
            maxHeight: '400px' // Optional: Limit the height for better layout
        }}
    />
</Carousel.Item>

      </Carousel>
      <div >
        <h4>{roomdata.name}</h4>
        <p><b>{roomdata.location}</b></p>
        <p className='text-muted'><b>{roomdata.price}</b><b>$</b></p>
      </div>
    </div>




  );
}

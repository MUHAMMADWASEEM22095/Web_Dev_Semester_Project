import React from 'react'
import CarouselItem from 'react-bootstrap/CarouselItem'
import Carousel from 'react-bootstrap/Carousel'
import CarouselCaption from 'react-bootstrap/CarouselCaption'
import { useRooms } from '../Context/CardList'


export default function Cards() {
  const roomlist = useRooms();
  return (
      <Carousel style={{ width: '22%',height:'25%',padding:'5px',
        backgroundColor: 'transparent',alignItems:'center',alignContent:'center'}}   
      indicators={false}
      > {}
      <Carousel.Item>
        
        <img 
          className="d-block w-100 h-100"  
          src= {roomlist.image1}
          alt={roomlist.title} 
          style={{ borderRadius: '20px',objectFit: 'cover',
          }}
        />
      </Carousel.Item>

      <Carousel.Item>
        <img 
          className="d-block w-100 h-100"  /* Ensure the image fills the carousel container */
          src={roomlist.image2} 
          alt={roomlist.title}
          style={{ borderRadius: '20px',objectFit: 'cover' }}
        />
      </Carousel.Item>

      <Carousel.Item>
        <img 
          className="d-block w-100 h-100"  /* Ensure the image fills the carousel container */
          src={roomlist.image3}
          alt={roomlist.title}
          style={{ borderRadius: '20px',objectFit: 'cover' }}
        />
      </Carousel.Item>
    </Carousel>
  )
}

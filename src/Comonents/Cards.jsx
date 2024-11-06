import React from 'react'
import CarouselItem from 'react-bootstrap/CarouselItem'
import Carousel from 'react-bootstrap/Carousel'
import CarouselCaption from 'react-bootstrap/CarouselCaption'

export default function Cards() {
  return (
    <Carousel style={{ width: '22%',height:'25%',padding:'5px',
      backgroundColor: 'transparent',alignItems:'center',alignContent:'center'}}   
     indicators={false}
    > {/* Carousel width is controlled here */}
    <Carousel.Item>
      <img 
        className="d-block w-100 h-100"  /* Ensure the image fills the carousel container */
        src="./Pics/room1.jfif" 
        alt="pic1" 
        style={{ borderRadius: '20px',objectFit: 'cover',
         }}
      />
    </Carousel.Item>

    <Carousel.Item>
      <img 
        className="d-block w-100 h-100"  /* Ensure the image fills the carousel container */
        src="./Pics/room2.jfif" 
        alt="pic2"
        style={{ borderRadius: '20px',objectFit: 'cover' }}
      />
    </Carousel.Item>

    <Carousel.Item>
      <img 
        className="d-block w-100 h-100"  /* Ensure the image fills the carousel container */
        src="./Pics/room3.jfif" 
        alt="pic3"
        style={{ borderRadius: '20px',objectFit: 'cover' }}
      />
    </Carousel.Item>
  </Carousel>
  
  

  )
}

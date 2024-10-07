import React from 'react'
import CarouselItem from 'react-bootstrap/CarouselItem'
import Carousel from 'react-bootstrap/Carousel'
import CarouselCaption from 'react-bootstrap/CarouselCaption'

export default function Cards() {
  return (
    <Carousel style={{ width: '500px', margin: '0 auto' }}   
     indicators={false}
    > {/* Carousel width is controlled here */}
    <Carousel.Item>
      <img 
        className="d-block w-100"  /* Ensure the image fills the carousel container */
        src="./Pics/room1.jfif" 
        alt="pic1" 
      />
    </Carousel.Item>

    <Carousel.Item>
      <img 
        className="d-block w-100"  /* Ensure the image fills the carousel container */
        src="./Pics/room2.jfif" 
        alt="pic2"
      />
    </Carousel.Item>

    <Carousel.Item>
      <img 
        className="d-block w-100"  /* Ensure the image fills the carousel container */
        src="./Pics/room3.jfif" 
        alt="pic3"
      />
    </Carousel.Item>
  </Carousel>

  )
}

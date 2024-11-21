import React from 'react'
import MyNav from '../Comonents/MyNav'
import { Card } from 'react-bootstrap'
import Cards from '../Comonents/Cards'
import CardsBox from '../Comonents/Cards'
import Footer from '../Comonents/Footer'
import { useRooms } from '../Context/CardList'
import { Link } from 'react-router-dom'

export default function Home() {
  const roomlist=useRooms()
  {roomlist.map((room, index) => (
    console.log('room',`${index}`,room)
  ))}
  return (
    <div>
         <div className='main'>
        <div className="App">
          <MyNav/>
        </div>
        <div className='CardDiv'>
          {roomlist.map((room,index) => (
            <Link to={'/listing'} className="link-wrapper">
            <Cards key={index} roomdata={room} />
            </Link>
          ))}
        </div>
        
        <div className='FootDiv'>
          <Footer/>
        </div>
      </div>
    </div>
  )
}

import React from 'react'
import Listing from '../Comonents/Listing'
import MyNav from '../Comonents/MyNav'
import Footer from '../Comonents/Footer'

export default function ListingPage() {
  return (
    <div>
        <div className='main'>
        <div className="App">
          <MyNav/>
        </div>
        <div className='CardDiv'>
          <Listing/>
        </div>
        
        <div className='FootDiv'>
          <Footer/>
        </div>
      </div> 
    </div>
  )
}

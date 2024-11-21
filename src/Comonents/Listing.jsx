import React from 'react'
import Carousel from 'react-bootstrap/Carousel';

export default function Listing() {
    return (
        <div className='BigDiv'>
            {/* main */}
            <div className='innerdiv'>
                {/* inner div */}
                <div className='carasoul'>
                    {/* carousel */}
                    <Carousel >
                        <img
                            className="d-block w-100"
                            src="./Pics/room2.jfif"
                            alt='room'
                            style={{ objectFit: 'cover' }}
                        />
                    </Carousel>
                </div>
                <div className='info'>
                    {/* name wegera */}
                    <h3>Title</h3>
                    <p style={{ font: 'bold', fontSize: 'large' }}>Location</p>
                    <p style={{ font: 'bold' }}>No of Guests</p>
                    <p style={{ font: 'bold' }}>Price</p>
                    <p style={{ font: 'bold' }}>Bedrooms</p>
                    <p style={{ font: 'bold' }}>Bathrooms</p>
                    <p style={{ font: 'bold' }}>amenities</p>
                </div>
                <div className='discriptions'>
                    {/* discription */}
                    <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Eius esse expedita ab dolores hic rerum velit,
                        sit dolore? Deleniti voluptates dolorum sunt adipisci
                        ducimus aut nobis unde iusto ratione numquam?

                        Lorem ipsum dolor sit amet consectetur adipisicing elit. Corrupti similique eaque blanditiis quis praesentium, provident distinctio, id dolore iusto
                        illum aliquam dolorem cumque voluptatem, aspernatur minima at! Quas, sapiente magnam.



                        Lorem ipsum dolor sit amet consectetur adipisicing elit. At ab nesciunt facere, ipsa iusto commodi architecto reiciendis officiis veritatis explicabo, optio labore, vitae
                        cupiditate? Accusamus repellat impedit nostrum aperiam voluptates.</p>
                </div>
            </div>
        </div>
    )
}

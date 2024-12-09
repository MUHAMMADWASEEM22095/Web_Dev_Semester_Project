import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom'; 
import Carousel from 'react-bootstrap/Carousel';

export default function Listing() {
    const { roomno } = useParams(); 
    const [roomData, setRoomData] = useState(null);
    const [loading, setLoading] = useState(true);
    const [error, setError] = useState(null);

    useEffect(() => {
        
        fetch(`http://localhost:8080/airbnbs/${roomno}`) 
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
    }, [roomno]); 

    if (loading) return <p>Loading room details...</p>;
    if (error) return <p>{error}</p>;

    return (
        <div className='BigDiv'>
            <div className='innerdiv'>
                <div className='carasoul'>
                    <Carousel>
                        {roomData.images?.map((img, index) => (
                            <Carousel.Item key={index}>
                                <img
                                    className="d-block w-100"
                                    src={img} 
                                    alt={`Room image ${index + 1}`}
                                    style={{ objectFit: 'cover' }}
                                />
                            </Carousel.Item>
                        ))}
                    </Carousel>
                </div>
                
                <div className='info'>
                    <h3>{roomData.title}</h3>
                    <p style={{ fontWeight: 'bold', fontSize: 'large' }}>Location: {roomData.location}</p>
                    <p style={{ fontWeight: 'bold' }}>Price: ${roomData.price}</p>
                    <p style={{ fontWeight: 'bold' }}>Bedrooms: {roomData.bedrooms}</p>
                    <p style={{ fontWeight: 'bold' }}>Bathrooms: {roomData.bathrooms}</p>
                    <p style={{ fontWeight: 'bold' }}>Amenities: {roomData.amenities?.join(', ')}</p>
                </div>

                <div className='discriptions'>
                    <p>{roomData.description}</p>
                </div>
            </div>
        </div>
    );
}

import React, { createContext, useContext } from 'react';

// Create the context
const Lists = createContext();

// Export the context provider for use in your components
export const ListsProvider  = ({ children }) => {
  const rooms = [
    { 
      location: "New York", 
      title: "Cozy Apartment", 
      price: 100, 
      image1: "./public/Pics/room1.jfif", 
      image2: "./public/Pics/room2.jfif",
      image3: "./public/Pics/room3.jfif"
    },
    { 
      location: "Paris", 
      title: "Luxury Suite", 
      price: 250, 
      image1: "./Pics/room2.jfif", 
      image2: "./Pics/room3.jfif",
      image3: "./Pics/room1.jfif"
    },
    { 
      location: "London", 
      title: "Charming Studio", 
      price: 120, 
      image1: "./Pics/room3.jfif",
      image2: "./Pics/room2.jfif",
      image3: "./Pics/room1.jfif"
    }
  ];

  return (
    <Lists.Provider value={rooms}>
      {children}
    </Lists.Provider>
  );
};

// A custom hook to use the room data
export const useRooms = () => useContext(Lists);

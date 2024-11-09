import React, { createContext, useContext } from 'react';


const Lists = createContext();


export const ListsProvider  = ({ children }) => {
  const rooms = 
    { 
      location: "New York", 
      title: "Cozy Apartment", 
      price: 100, 
      image1: "./Pics/room2.jfif", 
      image2: "./Pics/room5.jfif",
      image3: "./Pics/room3.jfif"
    }
  return (
    <Lists.Provider value={rooms}>
      {children}
    </Lists.Provider>
  );
};

// A custom hook to use the room data
export const useRooms = () => useContext(Lists);

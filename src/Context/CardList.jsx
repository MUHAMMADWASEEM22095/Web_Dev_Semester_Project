import React, { createContext, useContext } from 'react';


const Lists = createContext();


export const ListsProvider = ({ children }) => {
  const Datarooms = [
    {
      id:0,
      location: "New York",
      title: "First Apartment",
      price: 100,
      image: "./Pics/room2.jfif",
    },
    {
      id: 1,
      title: "A Apartment", 
      price: 150, 
      location: "Texas", 
      image: "./Pics/room2.jfif"
    },
    { id: 2, 
      title: "B Suite", 
      price: 250, location: "Paris", 
      image: "./Pics/room2.jfif"
    },
    { id: 3, 
      title: "C Suite", 
      price: 220, location: "Paris", 
      image: "./Pics/room2.jfif"
    },
    { id: 4, 
      title: "D Suite", 
      price: 240, location: "Paris", 
      image: "./Pics/room2.jfif"
    },
    { id: 5, 
      title: "E Suite", 
      price: 180, location: "Paris", 
      image: "./Pics/room2.jfif"
    },
    { id: 6, 
      title: "F Suite", 
      price: 210, location: "Paris", 
      image: "./Pics/room2.jfif"
    },
    { id: 7, 
      title: "G Suite", 
      price: 230, location: "Paris", 
      image: "./Pics/room2.jfif"
    },
    { id: 8, 
      title: "H Suite", 
      price: 270, location: "Paris", 
      image: "./Pics/room2.jfif"
    },
    { id: 9, 
      title: "I Suite", 
      price: 350, location: "Paris", 
      image: "./Pics/room2.jfif"
    },
    { id: 10, 
      title: "J Suite", 
      price: 350, location: "Paris", 
      image: "./Pics/room2.jfif"
    },
    { id: 11, 
      title: "Last Suite", 
      price: 350, location: "Paris", 
      image: "./Pics/room2.jfif"
    }

  ]
  return (
    <Lists.Provider value={Datarooms}>
      {children}
    </Lists.Provider>
  );
};

// A custom hook to use the room data
export const useRooms = () => useContext(Lists);

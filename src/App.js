import logo from './logo.svg';
import './App.css';
import MyNav from './Comonents/MyNav';
import Logo from './Comonents/logo';
import YourHome from './Comonents/YourHome';
import { Nav } from 'react-bootstrap';
import Home from './Pages/Home';
import Cards from './Comonents/Cards';
import Footer from './Comonents/Footer';
import{ListsProvider,useRooms} from './Context/CardList.jsx';

import { useContext } from 'react';

function App() {
  const roomlist=useRooms()
  {roomlist.map((room, index) => (
    console.log('room',`${index}`,room)
  ))}
  return (
    <ListsProvider>
      <div className='main'>
        <div className="App">
          <MyNav/>
        </div>
        <div className='CardDiv'>
          {roomlist.map((room,index) => (
            <Cards key={index} roomdata={room} />
          ))}
        </div>
        
        <div className='FootDiv'>
          <Footer/>
        </div>
      </div>
    </ListsProvider>
  );
}

export default App;

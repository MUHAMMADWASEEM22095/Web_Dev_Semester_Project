import logo from './logo.svg';
import './App.css';
import MyNav from './Comonents/MyNav';
import Logo from './Comonents/logo';
import YourHome from './Comonents/YourHome';
import { Nav } from 'react-bootstrap';
import Home from './Pages/Home';
import Cards from './Comonents/Cards';
import Footer from './Comonents/Footer';
import { ListsProvider, useRooms } from './Context/CardList.jsx';
import ListingPage from './Pages/ListingPage.jsx';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';

function App() {
  return (
    <ListsProvider>
      <Router>
        <Routes>
          <Route path="/" element={<Home/>} />

          <Route path="/listing" element={<ListingPage/>} />
        </Routes>
      </Router>
    </ListsProvider>

  );
}

export default App;

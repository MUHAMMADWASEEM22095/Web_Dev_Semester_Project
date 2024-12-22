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
import Signuppage from './Pages/signuppage.jsx';
import Loginpage from './Pages/Loginpage.jsx';
import { AuthProvider } from './Context/usermodel.jsx'


function App() {
  return (
    <AuthProvider>
      <ListsProvider>
        <Router>
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/home" element={<Home />} />
            <Route path="/listing/:roomno" element={<ListingPage />} />
            <Route path="/signup" element={<Signuppage />} />
            <Route path="/login" element={<Loginpage />} />
          </Routes>
        </Router>
      </ListsProvider>
    </AuthProvider>

  );
}

export default App;

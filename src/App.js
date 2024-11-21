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
import ListingPage from './Pages/ListingPage.jsx';

function App() {
  return (
    <ListsProvider>
      <ListingPage/>
    </ListsProvider>
  );
}

export default App;

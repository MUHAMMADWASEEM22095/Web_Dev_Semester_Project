import logo from './logo.svg';
import './App.css';
import MyNav from './Comonents/MyNav';
import Logo from './Comonents/logo';
import YourHome from './Comonents/YourHome';
import { Nav } from 'react-bootstrap';
import Home from './Pages/Home';
import Cards from './Comonents/Cards';
import Footer from './Comonents/Footer';
import{ListsProvider} from './Context/CardList.jsx';

function App() {
  return (
    <ListsProvider>
      <div className='main'>
        <div className="App">
          <MyNav/>
        </div>
        <div className='CardDiv'>
          <Cards/>
          <Cards/>
          <Cards/>
          <Cards/>
          <Cards/>
          <Cards/>
          <Cards/>
          <Cards/>
          <Cards/>
          <Cards/>
          <Cards/>
          <Cards/>
        </div>
        <div className='FootDiv'>
          <Footer/>
        </div>
      </div>
    </ListsProvider>
  );
}

export default App;

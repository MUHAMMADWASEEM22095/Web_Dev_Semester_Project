import logo from './logo.svg';
import './App.css';
import MyNav from './Comonents/MyNav';
import Logo from './Comonents/logo';
import YourHome from './Comonents/YourHome';
import { Nav } from 'react-bootstrap';
import Home from './Pages/Home';
import Cards from './Comonents/Cards';

function App() {
  return (
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
    </div>

  );
}

export default App;

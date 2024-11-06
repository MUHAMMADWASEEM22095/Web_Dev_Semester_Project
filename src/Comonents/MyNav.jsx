import React from 'react'
import Logo from './logo';
import { Navbar, Nav,NavDropdown, Dropdown } from 'react-bootstrap';
import '../Designing/Nav.css'; 
import Profile from './Profile';
import Profile_pic from './Profile_pic';
import YourHome from './YourHome';
import Globe from './Globe';
import Seach from './Seach';

export default function MyNav() {
  return ( 
    <Navbar bg="light" expand="lg" className="navbar">
      <div className='Row1'>
        <Navbar.Brand href="#home">
          <Logo />
        </Navbar.Brand>
        <div className="center-items">
          <Nav.Item className='StayC'>
            <p id='Stay'>Stay</p>
          </Nav.Item>
          <Nav.Item className='ExpC'>
            <p id='Exp'>Experience</p>
          </Nav.Item>
        </div>
        <Nav.Item className='YHome' href="#home">
          <YourHome />
        </Nav.Item>
        <Nav.Item className='globe'>
          <Globe />
        </Nav.Item>
        <NavDropdown className='drop' title={<Profile />} align="end" />
      </div>

      <div className="Row2">
      <Nav classname="Row2Nav">
          <Nav.Item className='Row2NavItem'>
            <Seach /> 
          </Nav.Item>
        </Nav>
      </div>
    </Navbar>
  )
}

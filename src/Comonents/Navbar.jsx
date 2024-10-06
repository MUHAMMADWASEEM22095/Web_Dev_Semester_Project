import React from 'react'
import Logo from './logo';
import { Navbar, Nav,NavDropdown, Dropdown } from 'react-bootstrap';
import '../Designing/Nav.css'; 
import Profile from './Profile';
import Profile_pic from './Profile_pic';

export default function MyNav() {
  return (
    <Navbar bg="light" expand="lg">
      <Navbar.Brand href="#home">
        <Logo/>
      </Navbar.Brand>
      <NavDropdown className='drop'  title={<Profile/>} align="end">
        
      </NavDropdown>
    </Navbar>
  )
}

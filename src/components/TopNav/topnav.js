import React from "react";
// import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { library } from "@fortawesome/fontawesome-svg-core";
import { faCoffee } from "@fortawesome/free-solid-svg-icons";
import FontAwesomeIcon from './icons'
import Navbar from 'react-bootstrap/Navbar'
import Nav from 'react-bootstrap/Nav';
import {Link} from 'react-router-dom';

library.add(faCoffee);

function TopNav(){
    return (
        <Navbar bg="dark" expand="lg" variant="dark">
  <Navbar.Brand href="/joye/#/">Joye</Navbar.Brand>
  <Navbar.Toggle aria-controls="basic-navbar-nav" />
  <Navbar.Collapse id="basic-navbar-nav">
    <Nav className="mr-auto">
      <Nav.Link >joyee816@gmail.com</Nav.Link>
      <Nav.Link href="#">2693620864</Nav.Link>
      <Nav.Link href='/joye/#/education'> 
      Education
        </Nav.Link>
      <Nav.Link href="/joye/#/experience">Experience</Nav.Link>
      <Nav.Link href="/joye/#/portfolio">Portfolio</Nav.Link>
    </Nav>
  </Navbar.Collapse>
</Navbar>
    );
}
export default TopNav;
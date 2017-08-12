import React, { Component } from 'react';
import logo from '../images/hsm.png';

var NavItem = require('react-bootstrap/lib/NavItem');
var Navbar = require('react-bootstrap/lib/Navbar');
var Nav = require('react-bootstrap/lib/Nav');
var NavDropdown = require('react-bootstrap/lib/NavDropdown');
var MenuItem = require('react-bootstrap/lib/MenuItem');

const textDivStyle = {
  display: "inline-block",
  marginTop: "5px",
  textAlign: "left",
  marginLeft: "10px"
}

const textStyle = {
  marginBottom: "0px",
  color: "#000082",
  fontFamily: "Arial Black",
  fontSize: "18px"
}

class NavbarInstance extends Component {
  render() {
    return (
      <Navbar inverse collapseOnSelect fluid>
    <Navbar.Header>
      <div className="navLogo">
        <img src={ logo } height="50px" />
      </div>
      <div style= {textDivStyle}>
        <p className="navHeader">Harbourview</p>
        <p className="navHeader">Sheet Metal Ltd.</p>
      </div>
      <Navbar.Toggle />
    </Navbar.Header>
    <Navbar.Collapse>
      <div className="navItems">
        <Nav pullRight>
          <li role="presentation"><a href='/'>Home</a></li>
          <li role="presentation"><a href='/about'>About</a></li>
          <li role="presentation"><a href='/projects'>Projects</a></li>
          <li role="presentation"><a href='/contact'>Contact</a></li>
        </Nav>
      </div>
    </Navbar.Collapse>
  </Navbar>
    );
  }
}

export default NavbarInstance;




/*
import React, { Component } from 'react';

var NavItem = require('react-bootstrap/lib/NavItem');
var Navbar = require('react-bootstrap/lib/Navbar');
var Nav = require('react-bootstrap/lib/Nav');
var NavDropdown = require('react-bootstrap/lib/NavDropdown');
var MenuItem = require('react-bootstrap/lib/MenuItem');

class NavbarInstance extends Component {
  render() {
    return (
      <Navbar inverse collapseOnSelect fluid>
    <Navbar.Header>
      <Navbar.Toggle />
    </Navbar.Header>
    <Navbar.Collapse>
      <div className="navItems">
        <Nav>
          <li role="presentation"><a href='/'>Home</a></li>
          <li role="presentation"><a href='/about'>About</a></li>
          <li role="presentation"><a href='/services'>Services</a></li>
          <li role="presentation"><a href='/contact'>Contact</a></li>
        </Nav>
      </div>
    </Navbar.Collapse>
  </Navbar>
    );
  }
}

export default NavbarInstance;
*/
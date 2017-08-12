import React, { Component } from 'react';
import '../App.css';
import { Link } from 'react-router-dom';
import hsmWhite from '../images/hsmWhite.png';
import scLogo from '../scLogo.png';

var Button = require('react-bootstrap/lib/Button');
var FormControl = require('react-bootstrap/lib/FormControl');

class Footer extends Component {
  render() {
    return (
      <div className="footer">
        <div className="tableHeader">
          <div className="footImg">
              <img src={ hsmWhite } height="40px" />
              <p>HARBOURVIEW SHEET METAL LTD</p>
            </div>
        </div>
        <div className="table">
          <div className="tableCell0">
            <p>28-19257 Enterprise Way, Surrey, BC, V3S 6J8</p>
            <p>604-534-6585</p>
            <p>hsm@gmail.com</p>
          </div>
          <div className="tableCell1">
        
          </div>
        </div>
        <div className="rights">
          <p>©2017 Harbourview Sheet Metal Ltd. All Rights Reserved</p>
        </div>
      </div>

    );
  }
}

export default Footer;
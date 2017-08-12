import React, { Component } from 'react';
import '../App.css';
import logo from '../images/hsm.png';

class Header extends Component {
  render() {
    return (
		<div className="header">
			<div className="logo">
				<img src={ logo } height="80px" />
			</div>
			<div className="headerText">
				<p>Harbourview Sheet Metal Ltd.</p>
			</div>
		</div>
    );
  }
}

export default Header;
import React, { Component } from 'react';
import '../App.css';
import { Link } from 'react-router-dom';

var Button = require('react-bootstrap/lib/Button');

class Home extends Component {
  render() {
    return (
    	<div className="home">
    		<div className="pageBanner">
    			<div className="pageBannerInner">
	    			<p>HARBOURVIEW</p>
	    			<p>SHEET METAL LTD</p>
	    			<Link to="/projects">
						<Button className="button">
					     	VIEW PROJECTS
					    </Button>
				    </Link>
		      	</div>
    		</div>

    		<div className="content">
    			<div className="contentCell0">
    				<p className="title">Services</p>
    				<div className="table">
    					<div className="tableCell0">
    							<p>Commercial HVAC installation</p>
    							<p>Private HVAC installation</p>
    							<p>Renovation</p>
    					</div>


    					<div className="tableCell1">
    							<p>Custom Fabrication</p>
    							<p>Fireplaces</p>
    							<p>Luxury Furniture</p>
    					</div>
    				</div>
    			</div>

    			<div className="contentCell1">
    				<p className="title">Projects</p>
    				<div className="table">
    					<div className="tableCell0">
    						<Link to="/projects">
								<Button className="button">
							     	VIEW PROJECT
							    </Button>
						    </Link>
    					</div>
    					<div className="tableCell1">
    						<Link to="/projects">
								<Button className="button">
							     	VIEW PROJECT
							    </Button>
						    </Link>
    					</div>
    					<div className="tableCell2">
    						<Link to="/projects">
								<Button className="button">
							     	VIEW PROJECT
							    </Button>
						    </Link>
    					</div>
    				</div>
    			</div>
    		</div>
      	</div>
    );

  }

}

export default Home;
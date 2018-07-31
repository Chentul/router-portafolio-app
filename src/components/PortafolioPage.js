import React from 'react';
import { Link } from 'react-router-dom';

const PortafolioPage = () => (
	<div>
		<h1>My Work</h1>
		<p>Checkout the stuff I have done</p>
		<Link to="/portafolio/1">Item One</Link>
		<Link to="/portafolio/2">Item One</Link>
	</div>
);

export default PortafolioPage;

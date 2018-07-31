import React from 'react';

import NotFoundPage from '../components/NotFoundPage';
import Header from '../components/Header';
import HomePage from '../components/HomePage';
import ContactPage from '../components/ContactPage';
import PortafolioItemPage from '../components/PortafolioItemPage';
import PortafolioPage from '../components/PortafolioPage';

import { BrowserRouter, Route, Switch, NavLink } from 'react-router-dom';

const AppRouter = () => (
    <BrowserRouter>
		<div>
			<Header />
			<Switch>
				<Route path="/" component={HomePage} exact={true} />
				<Route path="/portafolio/:id" component={PortafolioItemPage} />
				<Route path="/portafolio" component={PortafolioPage} />
				<Route path="/contact" component={ContactPage} />
				<Route component={NotFoundPage} />
			</Switch>
		</div>
	</BrowserRouter>
);

export default AppRouter;

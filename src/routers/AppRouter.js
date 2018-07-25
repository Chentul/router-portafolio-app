import React from 'react';
import ExpenseDashboardPage from '../components/ExpenseDashBoard';
import AddExpensePage from '../components/AddExpensePage';
import EditExpensePage from '../components/EditExpensePage';
import HelpPage from '../components/HelpPage';
import NotFoundPage from '../components/NotFoundPage';
import Header from '../components/Header';
import { BrowserRouter, Route, Switch, NavLink } from 'react-router-dom';

const AppRouter = () => (
    <BrowserRouter>
		<div>
			<Header />
			<Switch>
				<Route path="/" component={ExpenseDashboardPage} exact={true} />
				<Route path="/create" component={AddExpensePage} />
				<Route path="/edit" component={EditExpensePage} />
				<Route path="/help" component={HelpPage} />
				<Route component={NotFoundPage} /> // this has to be on the bottom
			</Switch>
		</div>
	</BrowserRouter>
);

export default AppRouter;
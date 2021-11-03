import React from 'react';
import Main from './pages/Main';
import Login from './pages/Login';
import { BrowserRouter, Route } from 'react-router-dom';

export default function Routes() {
	return (
		<BrowserRouter>
			<Route path="/login" component={Login} exact={true} />
			<Route path="/dev/:id" component={Main} />
		</BrowserRouter>
	);
}
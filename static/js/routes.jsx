import React from 'react';
import {
	Router,
	Route,
	browserHistory,
	IndexRoute,
	hashHistory,
	useRouterHistory,
	IndexRedirect,
	Redirect
} from 'react-router';

// app
import App from 'pages/App';
// Main
import Main from 'pages/Main';

//routes
const routes = (
	<Router history={ hashHistory }>
		<Route path='/' component={ App }>
			<IndexRedirect to='main'/>
			<Route path='main' component={ Main }/>
		</Route>
	</Router>
);
export default routes;
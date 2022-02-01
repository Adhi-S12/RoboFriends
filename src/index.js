import './wdyr'; // <-- Why did you render package

import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import 'tachyons';
import { Provider } from 'react-redux';
import { createStore, applyMiddleware, combineReducers } from 'redux';
import { searchRobots, fetchRobots } from './reducers';
import { composeWithDevTools } from 'redux-devtools-extension';
import thunk from 'redux-thunk';
import App from './App';
import * as serviceWorkerRegistration from './serviceWorkerRegistration';
import reportWebVitals from './reportWebVitals';

const middlewares = [ thunk ];

const rootReducer = combineReducers({
	searchRobots,
	fetchRobots,
});

const store = createStore(rootReducer, composeWithDevTools(applyMiddleware(...middlewares)));

ReactDOM.render(
	<div className="app">
		<Provider store={store}>
			<App />
		</Provider>
	</div>,
	document.getElementById('root')
);

serviceWorkerRegistration.register();
reportWebVitals();

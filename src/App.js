import React, { useState, useEffect } from 'react';
import './App.css';
import CardList from './components/CardList';
import SearchBox from './components/SearchBox';
import Scroll from './components/Scroll';
import ErrorBoundary from './components/ErrorBoundary';

const App = () => {
	const [ robots, setRobots ] = useState([]);
	const [ searchField, setSearchField ] = useState('');

	const fetchData = async () => {
		const res = await fetch('https://jsonplaceholder.typicode.com/users');
		const users = await res.json();
		setRobots(users);
	};

	const onSearchChange = (e) => {
		setSearchField(e.target.value);
	};

	useEffect(() => {
		fetchData();
	}, []);

	const filteredRobots = robots.filter((robot) => {
		return robot.name.toLowerCase().includes(searchField.toLowerCase());
	});
	if (robots.length === 0) {
		return <h1 className="tc">Loading...</h1>;
	} else {
		return (
			<div style={{ textAlign: 'center' }}>
				<h1 className="f1" style={{ marginTop: 0, paddingTop: '30px' }}>
					RoboFriends
				</h1>
				<SearchBox searchChange={onSearchChange} />
				<Scroll>
					<ErrorBoundary>
						<CardList robots={filteredRobots} />
					</ErrorBoundary>
				</Scroll>
			</div>
		);
	}
};

export default App;

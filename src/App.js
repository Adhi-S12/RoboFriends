import React, { useEffect } from 'react';
import './App.css';
import Header from './components/Header';
import CardList from './components/CardList';
import SearchBox from './components/SearchBox';
import Scroll from './components/Scroll';
import ErrorBoundary from './components/ErrorBoundary';
import { useDispatch, useSelector } from 'react-redux';
import { fetchRobots } from './actions';

const App = () => {
	const { searchField } = useSelector((state) => state.searchRobots);
	const { robots, isPending, error } = useSelector((state) => state.fetchRobots);
	const dispatch = useDispatch();

	useEffect(
		() => {
			dispatch(fetchRobots());
		},
		[ dispatch ]
	);

	const filteredRobots = robots.filter((robot) => {
		return robot.name.toLowerCase().includes(searchField.toLowerCase());
	});
	if (isPending) {
		return <h1 className="tc">Loading...</h1>;
	} else if (error) {
		return <h1 style={{ textAlign: 'center' }}>Oops something went wrong. Please refresh your browser</h1>;
	} else {
		return (
			<div style={{ textAlign: 'center', padding: '0 40px' }}>
				<Header />
				<SearchBox />
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

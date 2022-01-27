import React, { Component } from 'react';
import './App.css';
import CardList from './components/CardList';
import SearchBox from './components/SearchBox';
import Scroll from './components/Scroll';
import ErrorBoundary from './components/ErrorBoundary';

class App extends Component {
	constructor() {
		super();
		this.state = {
			robots: [],
			searchField: '',
		};
	}

	onSearchChange = (event) => {
		this.setState({
			searchField: event.target.value,
		});
	};

	componentDidMount() {
		fetch('https://jsonplaceholder.typicode.com/users')
			.then((res) => res.json())
			.then((users) => this.setState({ robots: users }));
	}

	render() {
		const filteredRobots = this.state.robots.filter((robot) => {
			return robot.name.toLowerCase().includes(this.state.searchField.toLowerCase());
		});
		if (this.state.robots.length === 0) {
			return <h1 className="tc">Loading...</h1>;
		} else {
			return (
				<div style={{ textAlign: 'center' }}>
					<h1 className="f1" style={{ marginTop: 0, paddingTop: '30px' }}>
						RoboFriends
					</h1>
					<SearchBox searchChange={this.onSearchChange} />
					<Scroll>
						<ErrorBoundary>
							<CardList robots={filteredRobots} />
						</ErrorBoundary>
					</Scroll>
				</div>
			);
		}
	}
}

export default App;

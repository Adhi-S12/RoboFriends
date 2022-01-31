import React from 'react';

const HeaderComponent = () => {
	return (
		<h1 className="f1" style={{ marginTop: 0, paddingTop: '30px' }}>
			RoboFriends
		</h1>
	);
};

const Header = React.memo(HeaderComponent);

export default Header;

// import React, { Component } from 'react';

// export default class Header extends Component {
// 	// shouldComponentUpdate(nextProps, nextState) {
// 	// 	return false;
// 	// }

// 	render() {
// 		return (
// 			<h1 className="f1" style={{ marginTop: 0, paddingTop: '30px' }}>
// 				RoboFriends
// 			</h1>
// 		);
// 	}
// }

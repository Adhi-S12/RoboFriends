import React from 'react';

const HeaderComponent = () => {
	return (
		<h1 className="f1" style={{ marginTop: 0, paddingTop: '30px', fontSize: 40, textAlign: 'center' }}>
			RoboFriends
		</h1>
	);
};

const Header = React.memo(HeaderComponent);
export default Header;

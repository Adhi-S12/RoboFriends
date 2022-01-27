import React from 'react';
import { useDispatch } from 'react-redux';
import { CHANGE_SEARCH_FIELD } from '../constants';

const SearchBox = ({ searchChange }) => {
	const dispatch = useDispatch();
	return (
		<div className="pa2">
			<input
				className="pa3 ba b--green bg-lightest-blue"
				type="search"
				placeholder="search robots"
				onChange={(e) => dispatch({ type: CHANGE_SEARCH_FIELD, payload: e.target.value })}
			/>
		</div>
	);
};

export default SearchBox;

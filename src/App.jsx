import React from 'react';
import './App.css';
import { Outlet } from 'react-router-dom';

function App() {
	return (
		<div>
			{/* <h2>hello this testin</h2> */}

			<Outlet />
		</div>
	);
}

export default App;

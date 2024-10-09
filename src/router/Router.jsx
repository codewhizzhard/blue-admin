import { createBrowserRouter } from 'react-router-dom';

import Layout from '../Layout';

import Home from '../pages/home/Home';

const router = createBrowserRouter([
	{
		// element: <App />,
		element: <Layout />,

		children: [
			{
				path: '/home',
				element: <Home />,
			},
			{
				path: '/setting',
				element: <p>settting</p>,
			},
		],
	},
]);

export default router;

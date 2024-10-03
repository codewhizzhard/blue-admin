import { createBrowserRouter } from 'react-router-dom';
import App from '../App';
import Home from '../pages/home/Home';
import Login from '../pages/login/Login';
import Register from '../pages/register/Register';
import Password from '../pages/password/Password';
import Layout from '../Layout';

const router = createBrowserRouter([
	{
		// path: '/login',
		// element: <App />,
		element: <Layout />,

		children: [
			{
				path: '/',
				element: <Home />,
			},
			{
				path: '/setting',
				element: <p>settting</p>,
			},
		],
	},
	{
		path: '/login',
		element: <Login />,
	},
	{
		path: '/password',
		element: <Password />,
	},

	{
		path: '/register',
		element: <Register />,
	},
]);

export default router;

import { createBrowserRouter } from 'react-router-dom';
import App from '../App';
import Login from '../pages/login/Login';
import Register from '../pages/register/Register';
import ForgetPassword from '../pages/forget_password/ForgetPassword';
import ResetPassword from '../pages/resetPassword/ResetPassword';
import Fa from '../pages/2fa/Fa';
import RFa from '../pages/register/2fa/Fa';
import Layout from '../Layout';
import Home from '../pages/home/Home';
import Market from '../pages/market/Market';
import Profile from '../pages/profile/Profile';
import {
	ProtectedRouteForResetPassword,
	ProtectedRouteForRVerification,
	ProtectedRouteForVerification,
	ProtectedRouteForProfile,
} from './ProtectedRoute';

const router = createBrowserRouter([
	{
		// element: <App />,
		path: '/',

		element: <Layout />,

		children: [
			{
				index: true,
				element: <Home />,
			},
			{
				path: '/market',
				element: <Market />,
			},
		],
	},
	{
		// path: '/login',
		element: <App />,
		children: [
			{
				path: '/login',
				element: <Login />,
			},
			{
				path: '/register',
				element: <Register />,
			},
			{
				path: '/forget-password',
				element: <ForgetPassword />,
			},
			{
				path: '/reset-password',
				element: (
					<ProtectedRouteForResetPassword>
						<ResetPassword />
					</ProtectedRouteForResetPassword>
				),
			},
			{
				path: '/verification',
				element: (
					<ProtectedRouteForVerification>
						<Fa />
					</ProtectedRouteForVerification>
				),
			},
			{
				path: '/profile',
				element: <Profile />
			},
			{
				path: '/register-verification',
				element: (
					<ProtectedRouteForRVerification>
						<RFa />
					</ProtectedRouteForRVerification>
				),
			},
		],
	},
]);

export default router;

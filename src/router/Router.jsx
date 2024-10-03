<<<<<<< HEAD
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
=======
import { createBrowserRouter } from "react-router-dom";
import App from "../App";
import Home from "../pages/home/Home";
import Login from "../pages/login/Login";
import Register from "../pages/register/Register";
import Password from "../pages/password/Password";
import ForgetPassword from "../pages/forget_password/ForgetPassword";
import ResetPassword from "../pages/resetPassword/ResetPassword";
import Fa from "../pages/2fa/Fa";
import RFa from "../pages/register/2fa/Fa";
import {
  ProtectedRouteForPassword,
  ProtectedRouteForResetPassword,
  ProtectedRouteForVerification,
} from "./ProtectedRoute";

const router = createBrowserRouter([
  {
    path: "/",
    element: <App />,
    children: [
      {
        path: "/",
        element: <Home />,
      },
      {
        path: "/login",
        element: <Login />,
      },
      {
        path: "/register",
        element: <Register />,
        children: [
          {
            path: "password",
            element: (
              <ProtectedRouteForPassword>
                <Password />
              </ProtectedRouteForPassword>
            ),
          },
        ],
      },
      {
        path: "/forget-password",
        element: <ForgetPassword />,
      },
      {
        path: "/reset-password",
        element: (
          <ProtectedRouteForResetPassword>
            <ResetPassword />
          </ProtectedRouteForResetPassword>
        ),
      },
      {
        path: "/verification",
        element: (
          <ProtectedRouteForVerification>
            <Fa />
          </ProtectedRouteForVerification>
        ),
      },
      {
        path: "/register-verification",
        element: <RFa />,
      },
    ],
  },
>>>>>>> 81cdfee1249c74f14fabb3482f1913c2454e7b40
]);

export default router;

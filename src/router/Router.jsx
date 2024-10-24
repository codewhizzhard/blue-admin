import { createBrowserRouter } from "react-router-dom";
import App from "../App";
import Login from "../pages/login/Login";
import Home from "../pages/home/Home";
import Register from "../pages/register/Register";
import ForgetPassword from "../pages/forget_password/ForgetPassword";
import ResetPassword from "../pages/resetPassword/ResetPassword";
import Fa from "../pages/2fa/Fa";
import RFa from "../pages/register/2fa/Fa";
import {
  ProtectedRouteForProfile,
  ProtectedRouteForResetPassword,
  ProtectedRouteForRVerification,
  ProtectedRouteForVerification,
} from "./ProtectedRoute";
import Profile from "../pages/profile/Profile";

const router = createBrowserRouter([
  {
    path: "/",
    element: <App />,
    children: [
      {
	path: '/',
	element: <Home />,
      },
      {
        path: "/login",
        element: <Login />,
      },
      {
        path: "/register",
        element: <Register />,
      },
      {
        path: "/forget-password",
        element: <ForgetPassword />,
      },
      {
        path: "/profile",
        element: (
          <ProtectedRouteForProfile>
            <Profile />
          </ProtectedRouteForProfile>
        ),
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

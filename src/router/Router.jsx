import { createBrowserRouter, Navigate } from "react-router-dom";
import App from "../App";
import Login from "../pages/login/Login";
import Register from "../pages/register/Register";
import ForgetPassword from "../pages/forget_password/ForgetPassword";
import ResetPassword from "../pages/resetPassword/ResetPassword";
import TwoFactorAuth from "../pages/2fa/TwoFactorAuth";
import RegisterTwoFactorAuth from "../pages/register/2fa/RegisterTwoFactorAuth";
import Profile from "../pages/profile/Profile";
import Students from "../pages/students/Students";

import SchoolWork from "../pages/students/contents/schoolWork/SchoolWork";
import Challenges from "../pages/students/contents/challenges/Challenges";
import Payment from "../pages/students/contents/payment/Payment";
import Chats from "../pages/students/contents/chats/Chats";
import Settings from "../pages/students/contents/settings/Settings";
import NewsFeed from "../pages/students/contents/newsfeed/NewsFeed";
import StudentContent from "../pages/students/Content";
import All from "../pages/students/contents/newsfeed/pages/all/All";
import Groups from "../pages/students/contents/newsfeed/pages/groups/Groups";
import Events from "../pages/students/contents/newsfeed/pages/events/Events";
import Trending from "../pages/students/contents/newsfeed/pages/trending/Trending";
import SchoolNews from "../pages/students/contents/newsfeed/pages/schoolNews/SchoolNews";
import Home from "../pages/home/Home";
import SettingSection from "../settingSection/SettingSection";
import WortSection from "../wortSection/WortSection";
import MarketSection from "../marketSection/MarketSection";
import MessageSection from "../messageSection/MessageSection";
// import MainSection from "../mainSection/MainSection";
import NetworkSection from "../networkSection/NetworkSection";
import NotFoundPage from "../pages/notFound/NotFoundPage";

import {
  ProtectedRouteForProfile,
  ProtectedRouteForResetPassword,
  ProtectedRouteForRVerification,
  ProtectedRouteForVerification,
} from "./ProtectedRoute";
import Content from "../mainSection/Content";
import MainSection from "../mainSection/MainSection";

const ProtectedRoute = ({ children, condition }) => {
  return condition ? children : <Navigate to="/login" />;
};

const router = createBrowserRouter([
  {
    path: "/",
    element: <App />,
    children: [
      {
        path: "/",
        element: <MainSection />,
        children: [
          { index: true, element: <Home /> },
          { path: "market", element: <MarketSection /> },
          { path: "wort", element: <WortSection /> },
          { path: "setting", element: <SettingSection /> },
          { path: "network", element: <NetworkSection /> },
          { path: "message", element: <MessageSection /> },
        ],
      },
      { path: "login", element: <Login /> },
      { path: "register", element: <Register /> },
      { path: "forget-password", element: <ForgetPassword /> },
      {
        path: "profile",
        element: (
          <ProtectedRouteForProfile>
            <Profile />
          </ProtectedRouteForProfile>
        ),
      },
      {
        path: "reset-password",
        element: (
          <ProtectedRouteForResetPassword>
            <ResetPassword />
          </ProtectedRouteForResetPassword>
        ),
      },
      {
        path: "verification",
        element: (
          <ProtectedRouteForVerification>
            <TwoFactorAuth />
          </ProtectedRouteForVerification>
        ),
      },
      {
        path: "register-verification",
        element: (
          <ProtectedRouteForRVerification>
            <RegisterTwoFactorAuth />
          </ProtectedRouteForRVerification>
        ),
      },
      {
        path: "students",
        element: <Students />,
        children: [
          {
            path: "dashboard",
            element: <StudentContent />,
            children: [
              {
                path: "newsfeed",
                element: <NewsFeed />,
                children: [
                  { index: true, element: <All /> },
                  { path: "groups", element: <Groups /> },
                  { path: "events", element: <Events /> },
                  { path: "trending", element: <Trending /> },
                  { path: "school-news", element: <SchoolNews /> },
                ],
              },
              { path: "school-work", element: <SchoolWork /> },
              { path: "xel-challenge", element: <Challenges /> },
              { path: "payment", element: <Payment /> },
              { path: "chats", element: <Chats /> },
              { path: "settings", element: <Settings /> },
            ],
          },
        ],
      },
    ],
  },
  {
    path: "*",
    element: <NotFoundPage />,
  },
]);

export default router;

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
import YourGroups from "../pages/students/contents/newsfeed/pages/groups/pages/YourGroups";
import YourFeeds from "../pages/students/contents/newsfeed/pages/groups/pages/YourFeeds";
import Discover from "../pages/students/contents/newsfeed/pages/groups/pages/Discover";
import NewsFeedGroups from "../pages/students/contents/newsfeed/pages/groups/pages/Groups";
import CreateGroup from "../pages/students/contents/newsfeed/pages/groups/CreaateGroup";
import GroupPage from "../pages/students/contents/newsfeed/pages/groups/pages/Groups";
import EventHome from "../pages/students/contents/newsfeed/pages/events/pages/EventHome";
import YourEvents from "../pages/students/contents/newsfeed/pages/events/pages/YourEvents";
import Overview from "../pages/students/contents/schoolWork/pages/Overview";
import Group from "../pages/students/contents/schoolWork/pages/Group";
import Timetable from "../pages/students/contents/schoolWork/pages/Timetable";
import Assignment from "../pages/students/contents/schoolWork/pages/Assignment";
import Exam from "../pages/students/contents/schoolWork/pages/Exam";
import Library from "../pages/students/contents/schoolWork/pages/Library";
import StudyGroup from "../pages/students/contents/schoolWork/StudyGroup";
import AllChallenges from "../pages/students/contents/challenges/pages/AllChallenges";
import Listing from "../pages/students/contents/challenges/pages/Listing";
import MyChallenges from "../pages/students/contents/challenges/pages/MyChallenges";
import ChallengeDetail from "../pages/students/contents/challenges/pages/ChallengeDetail";
import ChatRoom from "../pages/students/contents/challenges/pages/ChatRoom";
import PaymentHome from "../pages/students/contents/payment/pages/PaymentHome";
import PaymentHistory from "../pages/students/contents/payment/pages/PaymentHistory";
import PaymentMethod from "../pages/students/contents/payment/pages/PaymentMethod";
import AddFund from "../pages/students/contents/payment/pages/AddFund";
import SchoolPayment from "../pages/students/contents/payment/pages/SchoolPayment";

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
                  {
                    path: "groups",
                    element: <Groups />,
                    children: [
                      { index: true, element: <YourFeeds /> },
                      { path: "your-groups", element: <YourGroups /> },
                      { path: "discover", element: <Discover /> },
                      { path: "groups", element: <NewsFeedGroups /> },
                      { path: "create-group", element: <CreateGroup /> },
                      { path: ":id", element: <GroupPage /> },
                    ],
                  },
                  {
                    path: "events",
                    element: <Events />,
                    children: [
                      { index: true, element: <EventHome /> },
                      { path: "your-events", element: <YourEvents /> },
                    ],
                  },
                  { path: "trending", element: <Trending /> },
                  { path: "school-news", element: <SchoolNews /> },
                ],
              },
              {
                path: "school-work",
                element: <SchoolWork />,
                children: [
                  { index: true, element: <Overview /> },
                  { path: "study-group", element: <StudyGroup /> },
                  { path: "my-groups", element: <Group /> },
                  { path: "my-groups", element: <Group /> },
                  { path: "my-timetable", element: <Timetable /> },
                  { path: "my-assignment", element: <Assignment /> },
                  { path: "exam", element: <Exam /> },
                  { path: "library", element: <Library /> },
                ],
              },
              {
                path: "xel-challenge",
                element: <Challenges />,
                children: [
                  { index: true, element: <AllChallenges /> },
                  { path: ":id", element: <ChallengeDetail /> },
                  { path: "my-listing", element: <Listing /> },
                  { path: "my-challenges", element: <MyChallenges /> },
                  { path: ":id/chatroom", element: <ChatRoom /> },
                ],
              },
              {
                path: "payment",
                element: <Payment />,
                children: [
                  { index: true, element: <PaymentHome /> },
                  { path: "payment-history", element: <PaymentHistory /> },
                  { path: "my-listing", element: <Listing /> },
                  { path: "my-challenges", element: <MyChallenges /> },
                  { path: ":id/chatroom", element: <ChatRoom /> },
                  { path: "payment-method", element: <PaymentMethod /> },
                  { path: "add-fund", element: <AddFund /> },
                  { path: "school-payment", element: <SchoolPayment /> },
                ],
              },
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

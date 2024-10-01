import { Navigate } from "react-router-dom";
import { useAuth } from "./AuthContext";

// Protected route for the password page (after registration)
export const ProtectedRouteForPassword = ({ children }) => {
  const { isRegistered } = useAuth();

  // Redirect to registration if registration is not completed
  return isRegistered ? children : <Navigate to="/register" />;
};

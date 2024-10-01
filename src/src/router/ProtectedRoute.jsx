import { Navigate } from "react-router-dom";
import { useAuth } from "./AuthContext";

// Protected route for the password page (after registration)
export const ProtectedRouteForPassword = ({ children }) => {
  const { isRegistered } = useAuth();

  // Redirect to registration if registration is not completed
  return isRegistered ? children : <Navigate to="/register" />;
};

// Protected route for reset password page (after forget password)
export const ProtectedRouteForResetPassword = ({ children }) => {
  const { isForgetPasswordCompleted } = useAuth();

  // Redirect to forget password if forget password is not completed
  return isForgetPasswordCompleted ? (
    children
  ) : (
    <Navigate to="/forget-password" />
  );
};

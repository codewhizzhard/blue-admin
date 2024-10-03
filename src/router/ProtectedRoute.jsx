import { Navigate } from "react-router-dom";
import { useAuth } from "./AuthContext";

// Protected route for the password page (after registration)
export const ProtectedRouteForPassword = ({ children }) => {
  const { isRegistered } = useAuth();

  // Redirect to registration if registration is not completed
  return isRegistered ? children : <Navigate to="/register" />;
};

// Protected route for the 2fa verification page (after registration)
export const ProtectedRouteForVerification = ({ children }) => {
  const { isVerificationCompleted } = useAuth();

  // Allow access to the children if verification is completed, otherwise redirect to forget password
  return isVerificationCompleted ? (
    children
  ) : (
    <Navigate to="/forget-password" />
  );
};

// Protected route for reset password page (after forget password)
export const ProtectedRouteForResetPassword = ({ children }) => {
  const { isForgetPasswordCompleted } = useAuth();

  // Allow access to reset password if forget password is completed, otherwise redirect to 2fa verification
  return isForgetPasswordCompleted ? children : <Navigate to="/verification" />;
};

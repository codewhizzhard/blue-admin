import { Navigate } from "react-router-dom";
import { useAuth } from "../context/ProtectedRouteContext";
// import { useAuthContext } from "../hooks/useAuthContext";

// Protected route for the 2fa verification page (forget password)
export const ProtectedRouteForVerification = ({ children }) => {
  const { isVerificationCompleted } = useAuth();

  // Allow access to the children if verification is completed, otherwise redirect to forget password
  return isVerificationCompleted ? children : <Navigate to="/reset-password" />;
};

// Protected route for reset password page (after forget password)
export const ProtectedRouteForResetPassword = ({ children }) => {
  const { isForgetPasswordCompleted } = useAuth();

  // Allow access to reset password if forget password is completed, otherwise redirect to 2fa verification
  return isForgetPasswordCompleted ? (
    children
  ) : (
    <Navigate to="/forget-password" />
  );
};

// Protected route for the 2fa verification register page (after registration)
export const ProtectedRouteForRVerification = ({ children }) => {
  const { isRVerificationCompleted } = useAuth();

  // Allow access to the children if verification is completed, otherwise redirect to password
  return isRVerificationCompleted ? children : <Navigate to="/register" />;
};

// Protected route for profile page
export const ProtectedRouteForProfile = ({ children }) => {
  // Retrieve the user data from local storage
  const user = JSON.parse(localStorage.getItem("user"));

  // Allow access to the children if user data exists, otherwise redirect to login
  return user !== null ? children : <Navigate to="/login" />;
};

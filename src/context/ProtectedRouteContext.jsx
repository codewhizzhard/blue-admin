import { createContext, useContext, useState } from "react";

// Create context
const ProtectedRouteContext = createContext();

// Custom hook to use the context
export const useAuth = () => useContext(ProtectedRouteContext);

// Provider component
export const ProtectedRouteProvider = ({ children }) => {
  const [isRegistered, setIsRegistered] = useState(false);
  const completeRegistration = () => setIsRegistered(true);

  const [isVerificationCompleted, setIsVerificationCompleted] = useState(false);
  const completeVerification = () => setIsVerificationCompleted(true);

  const [isRVerificationCompleted, setIsRVerificationCompleted] =
    useState(false);
  const completeRVerification = () => setIsRVerificationCompleted(true);

  const [isForgetPasswordCompleted, setForgetPasswordCompleted] =
    useState(false);

  const completeForgetPassword = () => setForgetPasswordCompleted(true);

  return (
    <ProtectedRouteContext.Provider
      value={{
        isRegistered,
        isVerificationCompleted,
        isRVerificationCompleted,
        isForgetPasswordCompleted,
        completeRegistration,
        completeVerification,
        completeRVerification,
        completeForgetPassword,
      }}
    >
      {children}
    </ProtectedRouteContext.Provider>
  );
};

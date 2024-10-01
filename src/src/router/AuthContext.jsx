import { createContext, useContext, useState } from "react";

// Create context
const AuthContext = createContext();

// Custom hook to use the context
export const useAuth = () => useContext(AuthContext);

// Provider component
export const AuthProvider = ({ children }) => {
  const [isRegistered, setIsRegistered] = useState(false); // track if user completed registration
  const [isForgetPasswordCompleted, setIsForgetPasswordCompleted] =
    useState(false); // track if user completed forget password

  const completeRegistration = () => setIsRegistered(true);
  const completeForgetPassword = () => setIsForgetPasswordCompleted(true);

  return (
    <AuthContext.Provider
      value={{
        isRegistered,
        isForgetPasswordCompleted,
        completeRegistration,
        completeForgetPassword,
      }}
    >
      {children}
    </AuthContext.Provider>
  );
};

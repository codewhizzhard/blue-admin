import { createContext, useContext, useState } from 'react';

// Create context
const AuthContext = createContext();

// Custom hook to use the context
export const useAuth = () => useContext(AuthContext);

// Provider component
export const AuthProvider = ({ children }) => {
	const [isRegistered, setIsRegistered] = useState(false);

	const [isVerificationCompleted, setIsVerificationCompleted] = useState(false);

	const [isRVerificationCompleted, setIsRVerificationCompleted] =
		useState(false);

	const [isForgetPasswordCompleted, setForgetPasswordCompleted] =
		useState(false);

	const completeRegistration = () => setIsRegistered(true);
	const completeVerification = () => setIsVerificationCompleted(true);
	const completeRVerification = () => setIsRVerificationCompleted(true);
	const completeForgetPassword = () => setForgetPasswordCompleted(true);

	return (
		<AuthContext.Provider
			value={{
				isRegistered,
				isVerificationCompleted,
				isRVerificationCompleted,
				isForgetPasswordCompleted,
				completeRegistration,
				completeVerification,
				completeRVerification,
				completeForgetPassword,
			}}>
			{children}
		</AuthContext.Provider>
	);
};

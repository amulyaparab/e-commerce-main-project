import { createContext, useContext, useState } from "react";

const AuthContext = createContext();

export const AuthProvider = ({ children }) => {
  const [encodedToken, setEncodedToken] = useState(null);
  const [newUser, setNewUser] = useState({
    signedIn: false,
    email: "",
    password: "",
    confirmPassword: "",
    firstName: "",
    lastName: "",
  });

  return (
    <AuthContext.Provider
      value={{
        newUser,
        setNewUser,
        encodedToken,
        setEncodedToken,
      }}
    >
      {children}
    </AuthContext.Provider>
  );
};
export const useAuth = () => useContext(AuthContext);

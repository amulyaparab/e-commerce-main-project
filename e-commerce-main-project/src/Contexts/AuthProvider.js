import { createContext, useEffect, useState } from "react";

export const AuthContext = createContext();

export const AuthProvider = ({ children }) => {
  // const [isLoggedIn, setIsLoggedIn] = useState(false);
  const [testUser, setTestUser] = useState(null);
  const [newUser, setNewUser] = useState({
    signedIn: false,
  });

  return (
    <AuthContext.Provider
      value={{ testUser, setTestUser, newUser, setNewUser }}
    >
      {children}
    </AuthContext.Provider>
  );
};
// {
//   "email": "amulya@gmail.com",
//  "password": "dsajh",
// "firstName": "amulya",
// "lastName": "parab"
// }

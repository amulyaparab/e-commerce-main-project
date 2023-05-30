import { createContext, useEffect, useState } from "react";

export const AuthContext = createContext();

export const AuthProvider = ({ children }) => {
  // const [isLoggedIn, setIsLoggedIn] = useState(false);
  const [testUser, setTestUser] = useState(null);
  const [newUser, setNewUser] = useState({
    signedIn: false,
  });
  // const fetchLoginData = async () => {
  //   const creds = {
  //     email: "adarshbalika@gmail.com",
  //     password: "adarshbalika",
  //   };
  //   const options = {
  //     method: "POST",
  //     body: JSON.stringify(creds),
  //   };
  //   const loginRes = await fetch("/api/auth/login", options);
  //   const loginResponse = await loginRes.json();
  //   localStorage.setItem("encodedTokenTest", loginResponse.encodedToken);
  //   return loginResponse;
  // };
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

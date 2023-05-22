import { createContext, useEffect, useState } from "react";

export const AuthContext = createContext();

export const AuthProvider = ({ children }) => {
  // const [isLoggedIn, setIsLoggedIn] = useState(false);
  const [testUser, setTestUser] = useState(null);

  // const fetchLoginData = async () => {
  //   try {
  //     const creds = {
  //       email: "adarshbalika@gmail.com",
  //       password: "adarshbalika",
  //     };
  //     const res = await fetch("/api/auth/login", {
  //       method: "POST",
  //       body: JSON.stringify(creds),
  //     });
  //     // const { foundUser, encodedToken } = await res.json();
  //     // localStorage.setItem("encodedTokenTest", encodedToken);
  //     // console.log(foundUser);
  //     // console.log(await res.json());
  //   } catch (err) {
  //     //console.log(err);
  //   }
  // };
  // const fetchSignUpData = async () => {
  //   try {
  //     const creds = {
  //       email: "",
  //       password: "",
  //       firstName: "",
  //       lastName: "",
  //     };
  //     const res = await fetch("/api/auth/signup", {
  //       method: "POST",
  //       body: JSON.stringify(creds),
  //     });
  //     const { encodedToken } = await res.json();
  //     //console.log(encodedToken);
  //   } catch (err) {
  //     //console.log(err);
  //   }
  // };

  return (
    <AuthContext.Provider value={{ testUser, setTestUser }}>
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

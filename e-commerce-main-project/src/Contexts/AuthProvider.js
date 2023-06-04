import {
  createContext,
  useContext,
  useEffect,
  useReducer,
  useState,
} from "react";
import { authReducer } from "../Reducers/authReducer";

const AuthContext = createContext();

export const AuthProvider = ({ children }) => {
  // const [isLoggedIn, setIsLoggedIn] = useState(false);
  const [testUser, setTestUser] = useState(null);
  const [newUser, setNewUser] = useState({
    signedIn: false,
  });
  const [encodedToken, setEncodedToken] = useState(null);
  // const [encodedToken, setEncodedToken] =
  // const initialState = {
  //   testUser: null,
  //   // newUser: {
  //   //   signedIn: false,
  //   // },
  //   encodedToken: null,
  // };
  // const [userAuth, dispatch] = useReducer(authReducer, initialState);
  // console.log(userAuth.testUser, "sahtdgjhasgdjhasgdjhasgdjhgasjhdgasjdgjha");
  return (
    <AuthContext.Provider
      value={{
        testUser,
        setTestUser,
        newUser,
        setNewUser,
        encodedToken,
        setEncodedToken,
      }}
      // value={{ userAuth, dispatch, newUser, setNewUser }}
    >
      {children}
    </AuthContext.Provider>
  );
};
export const useAuth = () => useContext(AuthContext);
// {
//   "email": "amulya@gmail.com",
//  "password": "dsajh",
// "firstName": "amulya",
// "lastName": "parab"
// }

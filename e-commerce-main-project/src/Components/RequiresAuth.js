import { useContext } from "react";
import { Navigate, useLocation } from "react-router-dom";
import { AuthContext } from "../Contexts/AuthProvider";

export const RequiresAuth = ({ children }) => {
  const { testUser, newUser } = useContext(AuthContext);
  const location = useLocation();
  const isEncodedTokenPresent =
    localStorage.getItem("encodedTokenTestUser") ||
    localStorage.getItem("userEncodedToken");
  const renderingComponent = () => {
    if (testUser && isEncodedTokenPresent) {
      return children;
    } else if (newUser.signedIn && isEncodedTokenPresent) {
      return children;
    } else if (testUser === null) {
      return <Navigate to="/login" state={{ from: location }} />;
    }
  };
  // const renderingComponent = () => {
  //   if (isEncodedTokenPresent) {
  //     return children;
  //   } else {
  //     return <Navigate to="/login" state={{ from: location }} />;
  //   }
  // };
  return <>{renderingComponent()}</>;
};

import { Navigate, useLocation } from "react-router-dom";
import { useAuth } from "../../Contexts/AuthProvider";

export const RequiresAuth = ({ children }) => {
  const { testUser, newUser } = useAuth();
  const location = useLocation();
  const isEncodedTokenPresent =
    localStorage.getItem("encodedTokenTest") ||
    localStorage.getItem("userEncodedToken");
  // const renderingComponent = () => {
  //   if (testUser && isEncodedTokenPresent) {
  //     return children;
  //   } else if (newUser.signedIn && isEncodedTokenPresent) {
  //     return children;
  //   } else if (testUser === null) {
  //     return <Navigate to="/login" state={{ from: location }} />;
  //   }
  // };
  const renderingComponent = () => {
    if (isEncodedTokenPresent) {
      return children;
    } else {
      return <Navigate to="/login" state={{ from: location }} />;
    }
  };
  return <>{renderingComponent()}</>;
};

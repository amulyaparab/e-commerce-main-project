import { Navigate, useLocation } from "react-router-dom";

export const RequiresAuth = ({ children }) => {
  const location = useLocation();
  const isEncodedTokenPresent =
    localStorage.getItem("encodedTokenTest") ||
    localStorage.getItem("userEncodedToken");

  const renderingComponent = () => {
    if (isEncodedTokenPresent) {
      return children;
    } else {
      return <Navigate to="/login" state={{ from: location }} />;
    }
  };
  return <>{renderingComponent()}</>;
};

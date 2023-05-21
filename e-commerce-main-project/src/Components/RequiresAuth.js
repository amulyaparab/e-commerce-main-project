import { useContext } from "react";
import { Navigate, useLocation } from "react-router-dom";
import { AuthContext } from "../Contexts/AuthProvider";

export const RequiresAuth = ({ children }) => {
  const { testUser } = useContext(AuthContext);
  const location = useLocation();
  return (
    <>
      {testUser ? (
        children
      ) : (
        <Navigate to="/login" state={{ from: location }} />
      )}
    </>
  );
};

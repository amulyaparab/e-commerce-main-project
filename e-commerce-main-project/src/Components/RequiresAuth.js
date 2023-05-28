// import { useContext } from "react";
// import { Navigate, useLocation } from "react-router-dom";
// import { AuthContext } from "../Contexts/AuthProvider";

// export const RequiresAuth = ({ children }) => {
//   const { testUser, newUser } = useContext(AuthContext);
//   const location = useLocation();
//   console.log(newUser);
//   const renderingComponent = () => {
//     if (testUser) {
//       return children;
//     } else if (newUser.signedIn) {
//       return children;
//     } else if (!newUser.signedIn) {
//       return <Navigate to="/signUp" state={{ from: location }} />;
//     } else if (testUser === null) {
//       return <Navigate to="/login" state={{ from: location }} />;
//     }
//   };
//   return <>{renderingComponent()}</>;
// };

import { useContext } from "react";
import { Navigate, useLocation } from "react-router-dom";
import { AuthContext } from "../Contexts/AuthProvider";

export const RequiresAuth = ({ children }) => {
  const { testUser, newUser } = useContext(AuthContext);
  const location = useLocation();
  console.log(newUser);
  const renderingComponent = () => {
    if (testUser) {
      return children;
    } else if (newUser.signedIn) {
      return children;
    } else if (testUser === null) {
      console.log("here", location);
      return <Navigate to="/login" state={{ from: location }} />;
    } else if (!newUser.signedIn) {
      // console.log("here", location);
      return <Navigate to="/signUp" />;
    }
  };
  return (
    <>
      {renderingComponent()}
      {/* {testUser || newUser.signedIn ? (
        children
      ) : (
        <Navigate
          to={`${testUser ? "/login" : "/signUp"}`}
          state={{ from: location }}
        />
      )} */}
    </>
  );
};

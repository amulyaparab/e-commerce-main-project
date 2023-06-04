import { useAuth } from "../Contexts/AuthProvider";
import { NavLink, useLocation, useNavigate } from "react-router-dom";
import { useAPI } from "../Contexts/APIProvider";
import { toast } from "react-toastify";
export const Login = () => {
  // const { isLoggedIn, setIsLoggedIn } = useContext(AuthContext);
  const { setTestUser, testUser, setEncodedToken } = useAuth();
  const { fetchLoginData } = useAPI();
  const location = useLocation();
  const navigate = useNavigate();

  const loginHandler = async () => {
    toast.success("Logged In", {
      position: toast.POSITION.BOTTOM_RIGHT,
    });
    const { foundUser, encodedToken } = await fetchLoginData();
    // dispatch({
    //   type: "TEST_USER",
    //   userPayload: { ...foundUser, password: "adarshbalika" },
    //   tokenPayload: encodedToken,
    // });
    setEncodedToken(encodedToken);
    setTestUser(foundUser);
    console.log(foundUser, "sabdhjasg");

    navigate(location?.state?.from?.pathname);
  };
  // console.log(location);
  return (
    <div className="login-page">
      {/* {localStorage.getItem("encodedTokenTest") && <Navigate to="/wishlist" />} */}
      <div className="overlay">
        <div className="login">
          <h1>Sign In</h1>
          <div className="login-input-div">
            <label>
              Email address:
              <input
                type="email"
                placeholder={testUser ? testUser?.email : "test@gmail.com"}
              />
            </label>
          </div>
          <div className="login-input-div">
            <label>
              Password:{" "}
              <input
                type="password"
                placeholder={testUser ? testUser?.password : "*******"}
              />
            </label>
          </div>

          <button className="add-to-cart login-btn" onClick={loginHandler}>
            Login as a Guest
          </button>

          <NavLink
            className="form-navigator"
            to="/signUp"
            state={{
              from: {
                ...location,
                pathname: location?.state?.from?.pathname,
              },
            }}
          >
            Create a new account <span>&#8250;</span>
          </NavLink>
        </div>
      </div>
    </div>
  );
};

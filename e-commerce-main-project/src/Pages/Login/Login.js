import { NavLink, useLocation } from "react-router-dom";
import { useAuth } from "../../Contexts/AuthProvider";

export const Login = () => {
  const { setLoginData, loginData, loginHandler, loginAsGuestHandler } =
    useAuth();
  const location = useLocation();

  return (
    <div className="login-page">
      <div className="overlay">
        <div className="login">
          <h1>Sign In</h1>
          <div className="login-input-div">
            <label>
              Email address:
              <input
                type="email"
                onChange={(e) =>
                  setLoginData({ ...loginData, email: e.target.value })
                }
                placeholder={"test@gmail.com"}
              />
            </label>
          </div>
          <div className="login-input-div">
            <label>
              Password:{" "}
              <input
                type="password"
                onChange={(e) =>
                  setLoginData({ ...loginData, password: e.target.value })
                }
                placeholder={"*******"}
              />
            </label>
          </div>
          <button className="add-to-cart login-btn" onClick={loginHandler}>
            Login
          </button>
          <button
            className="add-to-cart login-btn"
            onClick={loginAsGuestHandler}
          >
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

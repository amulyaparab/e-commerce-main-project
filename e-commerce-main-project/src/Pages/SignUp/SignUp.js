import { useState } from "react";
import { NavLink, useLocation } from "react-router-dom";
import { useAuth } from "../../Contexts";

export const SignUp = () => {
  const { newUser, setNewUser, signUpHandler } = useAuth();
  const location = useLocation();

  const [showPassword, setShowPassword] = useState({
    password: false,
    confirmPassword: false,
  });

  return (
    <>
      <div className="login-page sign-up-page">
        <div className="overlay">
          <div className="login sign-up">
            <h1>Sign Up</h1>
            <div>
              <label>
                First Name
                <input
                  placeholder="First Name"
                  onChange={(event) =>
                    setNewUser({ ...newUser, firstName: event.target.value })
                  }
                />
              </label>
              <label>
                Last Name
                <input
                  placeholder="Last Name"
                  onChange={(event) =>
                    setNewUser({ ...newUser, lastName: event.target.value })
                  }
                />
              </label>
            </div>
            <div className="login-input-div">
              <label>
                Email Address
                <input
                  type="email"
                  placeholder="test@gmail.com"
                  onChange={(event) =>
                    setNewUser({ ...newUser, email: event.target.value })
                  }
                />
              </label>
            </div>
            <div className="login-input-div">
              <label>
                Password
                <input
                  type={`${showPassword.password ? "text" : "password"}`}
                  placeholder="********"
                  onChange={(event) =>
                    setNewUser({ ...newUser, password: event.target.value })
                  }
                />
              </label>
              {newUser.password?.length > 0 && showPassword.password ? (
                <i
                  onClick={() =>
                    setShowPassword({ ...showPassword, password: false })
                  }
                  className="fa-solid fa-eye"
                ></i>
              ) : (
                <i
                  onClick={() =>
                    setShowPassword({ ...showPassword, password: true })
                  }
                  className="fa-solid fa-eye-slash"
                ></i>
              )}
            </div>
            <div className="login-input-div">
              <label type="password">
                Confirm Password
                <input
                  type={`${showPassword.confirmPassword ? "text" : "password"}`}
                  placeholder="********"
                  onChange={(event) =>
                    setNewUser({
                      ...newUser,
                      confirmPassword: event.target.value,
                    })
                  }
                />
                {newUser.confirmPassword?.length > 0 &&
                showPassword.confirmPassword ? (
                  <i
                    onClick={() =>
                      setShowPassword({
                        ...showPassword,
                        confirmPassword: false,
                      })
                    }
                    className="fa-solid fa-eye"
                  ></i>
                ) : (
                  <i
                    onClick={() =>
                      setShowPassword({
                        ...showPassword,
                        confirmPassword: true,
                      })
                    }
                    className="fa-solid fa-eye-slash"
                  ></i>
                )}
              </label>
            </div>
            <button className="add-to-cart login-btn" onClick={signUpHandler}>
              Create New Account
            </button>
            <NavLink
              to="/login"
              className="form-navigator"
              state={{
                from: {
                  ...location,
                  pathname: location?.state?.from?.pathname,
                },
              }}
            >
              Already have an account <span>&#8250;</span>
            </NavLink>
          </div>
        </div>
      </div>
    </>
  );
};

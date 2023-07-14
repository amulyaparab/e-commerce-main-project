import { useState } from "react";
import { NavLink, useLocation, useNavigate } from "react-router-dom";
import { toast } from "react-toastify";
import { useAPI, useAuth } from "../Contexts";

export const SignUp = () => {
  const { newUser, setNewUser, setEncodedToken } = useAuth();
  const { fetchSignUpData, setIsLoading } = useAPI();
  const navigate = useNavigate();
  const location = useLocation();

  const [showPassword, setShowPassword] = useState({
    password: false,
    confirmPassword: false,
  });

  const signUpHandler = async () => {
    try {
      setIsLoading(true);
      if (
        newUser.email.length &&
        newUser.password.length &&
        newUser.confirmPassword.length &&
        newUser.firstName.length &&
        newUser.lastName.length &&
        newUser.confirmPassword === newUser.password
      ) {
        const authToken = await fetchSignUpData({ ...newUser });
        if (authToken) {
          toast.success("Signed In.", {
            position: toast.POSITION.BOTTOM_RIGHT,
          });
          setNewUser({ ...newUser, signedIn: true });
          setEncodedToken(authToken);
          navigate(location?.state?.from?.pathname);
        }
      } else if (newUser.confirmPassword !== newUser.password) {
        toast.warn("The passwords do not match.", {
          position: toast.POSITION.BOTTOM_RIGHT,
        });
      } else {
        toast.warn("Please Fill All Fields", {
          position: toast.POSITION.BOTTOM_RIGHT,
        });
      }
    } catch (err) {
      console.log(err);
    } finally {
      setIsLoading(false);
    }
  };

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

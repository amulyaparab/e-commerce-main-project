import { useContext, useState } from "react";
import { NavLink } from "react-router-dom";
import { APIContext } from "../Contexts/APIProvider";

export const SignUp = () => {
  const { fetchSignUpData } = useContext(APIContext);
  const [newUser, setNewUser] = useState({
    email: "",
    password: "",
    confirmPassword: "",
    firstName: "",
    lastName: "",
  });

  const [showPassword, setShowPassword] = useState({
    password: false,
    confirmPassword: false,
  });

  const signUpHandler = async () => {
    console.log(newUser);
    newUser?.email?.length !== 0 &&
      newUser?.password?.length !== 0 &&
      newUser?.firstName?.length !== 0 &&
      newUser?.lastName?.length !== 0 &&
      (await fetchSignUpData({ ...newUser }));
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
              <label type="password">
                Password
                <input
                  placeholder="********"
                  onChange={(event) =>
                    setNewUser({ ...newUser, password: event.target.value })
                  }
                />
              </label>
              {newUser.password.length > 0 && showPassword.password ? (
                <i
                  onClick={() =>
                    setShowPassword({ ...showPassword, password: false })
                  }
                  class="fa-solid fa-eye"
                ></i>
              ) : (
                <i
                  onClick={() =>
                    setShowPassword({ ...showPassword, password: true })
                  }
                  class="fa-solid fa-eye-slash"
                ></i>
              )}
            </div>
            <div className="login-input-div">
              <label type="password">
                Confirm Password
                <input
                  placeholder="********"
                  onChange={(event) =>
                    setNewUser({
                      ...newUser,
                      confirmPassword: event.target.value,
                    })
                  }
                />
                {newUser.confirmPassword.length > 0 &&
                showPassword.confirmPassword ? (
                  <i
                    onClick={() =>
                      setShowPassword({
                        ...showPassword,
                        confirmPassword: false,
                      })
                    }
                    class="fa-solid fa-eye"
                  ></i>
                ) : (
                  <i
                    onClick={() =>
                      setShowPassword({
                        ...showPassword,
                        confirmPassword: true,
                      })
                    }
                    class="fa-solid fa-eye-slash"
                  ></i>
                )}
              </label>
            </div>
            <button className="add-to-cart login-btn" onClick={signUpHandler}>
              Create New Account
            </button>
            <NavLink to="/login" className="form-navigator">
              Already have an account <span>&#8250;</span>
            </NavLink>
          </div>
        </div>
      </div>
    </>
  );
};

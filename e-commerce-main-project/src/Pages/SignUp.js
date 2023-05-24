import { useContext, useState } from "react";
import { NavLink } from "react-router-dom";
import { APIContext } from "../Contexts/APIProvider";

export const SignUp = () => {
  const { fetchSignUpData } = useContext(APIContext);
  const [newUser, setNewUser] = useState({
    email: "",
    password: "",
    firstName: "",
    lastName: "",
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
            </div>
            <button className="add-to-cart login-btn" onClick={signUpHandler}>
              Create New Account
            </button>
            <NavLink to="/login">Already have an account</NavLink>
          </div>
        </div>
      </div>
    </>
  );
};

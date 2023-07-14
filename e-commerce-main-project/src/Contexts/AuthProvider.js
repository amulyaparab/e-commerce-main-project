import { createContext, useContext, useState } from "react";
import { toast } from "react-toastify";
import { useUtils } from "./UtilsProvider";
import { useAPI } from "./APIProvider";
import { useLocation, useNavigate } from "react-router-dom";
import { useProducts } from "./ProductsProvider";
const AuthContext = createContext();

export const AuthProvider = ({ children }) => {
  const { fetchLoginData, fetchLoginAsGuest, setIsLoading, fetchSignUpData } =
    useAPI();
  const { updateWishlist, updateCart } = useUtils();
  const { dispatch } = useProducts();
  const location = useLocation();
  const navigate = useNavigate();
  const [loginData, setLoginData] = useState({ email: "", password: "" });
  const [encodedToken, setEncodedToken] = useState(null);
  const [newUser, setNewUser] = useState({
    signedIn: false,
    email: "",
    password: "",
    confirmPassword: "",
    firstName: "",
    lastName: "",
  });

  const loginHandler = async () => {
    try {
      setIsLoading(true);
      if (loginData.email.length && loginData.password.length) {
        if (encodedToken) {
          toast.success("Logged In", {
            position: toast.POSITION.BOTTOM_RIGHT,
          });
          const { encodedToken } = await fetchLoginData({
            email: loginData.email,
            password: loginData.password,
          });
          setEncodedToken(encodedToken);
          navigate(location?.state?.from?.pathname);
          updateWishlist();
          updateCart();
        } else {
          toast.error("Wrong Password Or Email.", {
            position: toast.POSITION.BOTTOM_RIGHT,
          });
        }
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

  const loginAsGuestHandler = async () => {
    try {
      setIsLoading(true);
      toast.success("Logged In", {
        position: toast.POSITION.BOTTOM_RIGHT,
      });
      const { encodedToken } = await fetchLoginAsGuest();
      setEncodedToken(encodedToken);
      navigate(location?.state?.from?.pathname);
    } catch (err) {
      console.log(err);
    } finally {
      setIsLoading(false);
    }
  };

  const logoutHandler = () => {
    try {
      setIsLoading(true);
      toast.error("Logged Out.", {
        position: toast.POSITION.BOTTOM_RIGHT,
      });
      localStorage.removeItem("user");
      localStorage.removeItem("encodedTokenTest");
      navigate("/login", { state: { from: location } });
      dispatch({ type: "CLEAR_CART" });
      dispatch({ type: "CLEAR_WISHLIST" });
    } catch (err) {
      console.log(err);
    } finally {
      setIsLoading(false);
    }
  };

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
    <AuthContext.Provider
      value={{
        newUser,
        setNewUser,
        encodedToken,
        setEncodedToken,
        loginHandler,
        loginAsGuestHandler,
        setLoginData,
        loginData,
        logoutHandler,
        signUpHandler,
      }}
    >
      {children}
    </AuthContext.Provider>
  );
};
export const useAuth = () => useContext(AuthContext);

import { createContext, useContext, useEffect, useState } from "react";
import { useAuth } from "./AuthProvider";

const APIContext = createContext();

export const APIProvider = ({ children }) => {
  const TOKEN = localStorage.getItem("encodedTokenTest");
  const { encodedToken, setEncodedToken } = useAuth();
  const [isLoading, setIsLoading] = useState(true);
  const fetchLoginData = async ({ email, password }) => {
    const creds = {
      email,
      password,
    };

    const options = {
      method: "POST",
      body: JSON.stringify(creds),
    };
    const loginRes = await fetch("/api/auth/login", options);
    const loginResponse = await loginRes.json();
    console.log(loginResponse, "user");
    localStorage.setItem("encodedTokenTest", loginResponse.encodedToken);
    // localStorage.setItem("Id", loginResponse.foundUser.id);

    return loginResponse;
  };

  const fetchLoginAsGuest = async () => {
    const creds = {
      email: "adarshbalika@gmail.com",
      password: "adarshbalika",
    };
    const options = {
      method: "POST",
      body: JSON.stringify(creds),
    };
    const loginRes = await fetch("/api/auth/login", options);
    const loginResponse = await loginRes.json();
    console.log(loginResponse, "guets");
    localStorage.setItem("encodedTokenTest", loginResponse.encodedToken);
    // localStorage.setItem("Id", loginResponse.foundUser.id);

    return loginResponse;
  };

  const fetchSignUpData = async ({ email, password, firstName, lastName }) => {
    const creds = {
      email,
      password,
      firstName,
      lastName,
    };

    const options = {
      method: "POST",
      body: JSON.stringify(creds),
    };
    const signUpRes = await fetch("/api/auth/signup", options);
    const { createdUser, encodedToken } = await signUpRes.json();
    console.log({ createdUser, encodedToken });
    localStorage.setItem("encodedTokenTest", encodedToken);
    return encodedToken;
  };

  const fetchProducts = async () => {
    const productsRes = await fetch("/api/products");
    const { products } = await productsRes.json();
    return products;
  };

  const fetchSingleProduct = async (prodId) => {
    const singleProdRes = await fetch(`/api/products/${prodId}`);
    const { product } = await singleProdRes.json();
    return product;
  };
  const fetchCart = async () => {
    console.log("cart api call func takes place wtf");
    const options = {
      // headers: { authorization: localStorage.getItem("encodedTokenTest") },
      headers: {
        authorization: TOKEN,
      },
    };
    const cartRes = await fetch("/api/user/cart", options);
    const cart = await cartRes.json();
    console.log(cart, "carrrrrtt");
    return cart;
  };

  const postToCart = async (product) => {
    const options = {
      method: "POST",
      // headers: { authorization: localStorage.getItem("encodedTokenTest") },
      headers: { authorization: TOKEN },
      body: JSON.stringify({ product }),
    };
    const cartRes = await fetch("/api/user/cart", options);
    const { cart } = await cartRes.json();
    return cart;
  };

  const deleteFromCart = async (prodId) => {
    const options = {
      method: "DELETE",
      // headers: { authorization: localStorage.getItem("encodedTokenTest") },
      headers: { authorization: TOKEN },
    };
    const deleteFromCartRes = await fetch(`/api/user/cart/${prodId}`, options);
    const { cart } = await deleteFromCartRes.json();
    return cart;
  };

  const increaseCartQuantity = async (prodId) => {
    const bodyIncrementCount = {
      action: {
        type: "increment",
      },
    };
    const options = {
      method: "POST",
      // headers: { authorization: localStorage.getItem("encodedTokenTest") },
      headers: { authorization: TOKEN },
      body: JSON.stringify(bodyIncrementCount),
    };
    const increaseCartQuantityRes = await fetch(
      `/api/user/cart/${prodId}`,
      options
    );
    const { cart } = await increaseCartQuantityRes.json();
    return cart;
  };
  const decreaseCartQuantity = async (prodId) => {
    const bodyDecrementCount = {
      action: {
        type: "decrement",
      },
    };
    const options = {
      method: "POST",
      // headers: { authorization: localStorage.getItem("encodedTokenTest") },
      headers: { authorization: TOKEN },
      body: JSON.stringify(bodyDecrementCount),
    };
    const decreaseCartQuantityRes = await fetch(
      `/api/user/cart/${prodId}`,
      options
    );
    const { cart } = await decreaseCartQuantityRes.json();
    return cart;
  };

  const fetchWishlist = async () => {
    const options = {
      // headers: { authorization: localStorage.getItem("encodedTokenTest") },
      headers: { authorization: TOKEN },
    };
    const wishlistRes = await fetch("/api/user/wishlist", options);
    const { wishlist } = await wishlistRes.json();
    return wishlist;
  };
  const postToWishlist = async (product) => {
    const options = {
      method: "POST",
      // headers: { authorization: localStorage.getItem("encodedTokenTest") },
      headers: { authorization: TOKEN },
      body: JSON.stringify({ product }),
    };
    const wishlistRes = await fetch("/api/user/wishlist", options);
    const { wishlist } = await wishlistRes.json();
    return wishlist;
  };

  const deleteFromWishlist = async (prodId) => {
    const options = {
      method: "DELETE",
      // headers: { authorization: localStorage.getItem("encodedTokenTest") },
      headers: { authorization: TOKEN },
    };
    const deleteFromWishlistRes = await fetch(
      `/api/user/wishlist/${prodId}`,
      options
    );
    const { wishlist } = await deleteFromWishlistRes.json();
    return wishlist;
  };
  const fetchCategories = async () => {
    const categoriesRes = await fetch("/api/categories");
    const { categories } = await categoriesRes.json();
    return categories;
  };

  useEffect(() => {}, []);

  return (
    <APIContext.Provider
      value={{
        fetchLoginData,
        fetchSignUpData,
        fetchProducts,
        fetchSingleProduct,
        postToCart,
        deleteFromCart,
        postToWishlist,
        deleteFromWishlist,
        increaseCartQuantity,
        decreaseCartQuantity,
        fetchCart,
        fetchCategories,
        fetchWishlist,
        fetchLoginAsGuest,
        isLoading,
        setIsLoading,
      }}
    >
      {children}
    </APIContext.Provider>
  );
};
export const useAPI = () => useContext(APIContext);

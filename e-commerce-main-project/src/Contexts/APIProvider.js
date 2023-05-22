import { createContext, useEffect } from "react";

export const APIContext = createContext();
export const APIProvider = ({ children }) => {
  const fetchLoginData = async () => {
    const creds = {
      email: "adarshbalika@gmail.com",
      password: "adarshbalika",
    };
    const options = {
      method: "POST",
      body: JSON.stringify(creds),
    };
    const loginRes = fetch("/api/auth/login", options);
    const { foundUser, encodedToken } = await loginRes.json();
    localStorage.setItem("encodedTokenTest", encodedToken);
    return foundUser;
  };

  const fetchSignUpData = async (email, password, firstName, lastName) => {
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
    const { foundUser, encodedToken } = await signUpRes.json();
    localStorage.setItem("userEncodedToken", encodedToken);
    return foundUser;
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
    const options = {
      headers: { authorization: localStorage.getItem("encodedTokenTest") },
    };

    const cartRes = await fetch("/api/user/cart", options);
    const cart = await cartRes.json();
    return cart;
  };

  const postToCart = async (product) => {
    const options = {
      method: "POST",
      headers: { authorization: localStorage.getItem("encodedTokenTest") },
      body: JSON.stringify({ product }),
    };
    const cartRes = await fetch("/api/user/cart", options);
    const { cart } = await cartRes.json();
    return cart;
  };

  const deleteFromCart = async (prodId) => {
    const options = {
      method: "DELETE",
      headers: { authorization: localStorage.getItem("encodedTokenTest") },
    };
    const deleteFromCartRes = await fetch(`/api/user/cart/${prodId}`, options);
    const { cart } = await deleteFromCartRes.json();
    return cart;
  };

  const updateCartQuantity = async (prodId) => {
    const bodyIncrementCount = {
      action: {
        type: "increment",
      },
    };
    const options = {
      method: "POST",
      headers: { authorization: localStorage.getItem("encodedTokenTest") },
      body: JSON.stringify(bodyIncrementCount),
    };
    const updateCartQuantityRes = await fetch(
      `/api/user/cart/${prodId}`,
      options
    );
    const { cart } = await updateCartQuantityRes.json();
    return cart;
  };
  const fetchWishlist = async () => {
    const options = {
      headers: { authorization: localStorage.getItem("encodedTokenTest") },
    };
    const wishlistRes = await fetch("/api/user/wishlist", options);
    const { wishlist } = await wishlistRes.json();
    return wishlist;
  };
  const postToWishlist = async (product) => {
    const options = {
      method: "POST",
      headers: { authorization: localStorage.getItem("encodedTokenTest") },
      body: JSON.stringify({ product }),
    };
    const wishlistRes = await fetch("/api/user/wishlist", options);
    const { wishlist } = await wishlistRes.json();
    return wishlist;
  };

  const deleteFromWishlist = async (prodId) => {
    const options = {
      method: "DELETE",
      headers: { authorization: localStorage.getItem("encodedTokenTest") },
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
        updateCartQuantity,
        fetchCart,
        fetchCategories,
        fetchWishlist,
      }}
    >
      {children}
    </APIContext.Provider>
  );
};

import { createContext, useEffect } from "react";

export const APIContext = createContext();
export const APIProvider = ({ children }) => {
  const fetchProducts = async () => {
    try {
      const res = await fetch("/api/products");
      //   const { products } = await res.json();
      console.log(await res.json());
    } catch (err) {
      console.log(err);
    }
  };
  const postCart = async (product) => {
    try {
      const options = {
        method: "POST",
        headers: {
          authorization: localStorage.getItem("encodedTokenTest"),
        },
        body: JSON.stringify({ product }),
      };
      const res = await fetch("/api/user/cart", options);

      console.log(await res.json());
    } catch (err) {
      console.log(err);
    }
  };
  useEffect(() => {
    fetchProducts();
    postCart();
  }, []);
  return <APIContext.Provider>{children}</APIContext.Provider>;
};

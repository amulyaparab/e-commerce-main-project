import { createContext, useEffect, useReducer } from "react";
import { products } from "../backend/db/products";

export const ProductsContext = createContext();
export const ProductsProvider = ({ children }) => {
  const fetchData = async () => {
    try {
      const res = await fetch("/api/products");
      const { products } = await res.json();
      //   console.log(products);
    } catch (err) {
      console.log(err);
    }
  };
  useEffect(() => {
    fetchData();
    dispatch({ type: "PRODUCTS" });
  }, []);
  const reducer = (state, action) => {
    switch (action.type) {
      case "PRODUCTS":
        return { ...state, data: products };

      default:
        return state;
    }
  };
  const [state, dispatch] = useReducer(reducer, { data: [] });
  return (
    <ProductsContext.Provider value={{ state }}>
      {children}
    </ProductsContext.Provider>
  );
};

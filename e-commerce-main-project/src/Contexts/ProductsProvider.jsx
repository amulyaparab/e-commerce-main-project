import { createContext, useEffect, useReducer } from "react";

export const ProductsContext = createContext();

export const ProductsProvider = ({ children }) => {
  const fetchData = async () => {
    try {
      const productRes = await fetch("/api/products");
      const { products } = await productRes.json();
      let product;
      const options = {
        method: "POST",
        headers: {
          authorization:
            "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJfaWQiOiJjY2ZiNWYyNi05MWYyLTQ3YjQtYjg2MS04MDg5MzAyYTE5N2YiLCJlbWFpbCI6ImFkYXJzaGJhbGlrYUBnbWFpbC5jb20ifQ.5fqmQPuWztCeSR8GAmJ7-3rbiLSV8CmCRkO3Bh3bmVg",
        },
        body: JSON.stringify({ product }),
      };
      const postCart = await fetch("/api/user/cart", options);
      const { cart } = await postCart.json();
      const cartNew = cart.shift();
      const postWishlist = await fetch("/api/user/wishlist", options);
      const { wishlist } = await postWishlist.json();
      const wishlistNew = wishlist.shift();
      const postCategories = await fetch("/api/categories");
      const { categories } = await postCategories.json();
      console.log(categories);
      dispatch({
        type: "INITIAL_DATA",
        payloadProd: products,
        payloadCart: cart,
        payloadWishlist: wishlist,
        payloadCategory: categories,
      });
    } catch (err) {
      console.log(err);
    }
  };

  useEffect(() => {
    fetchData();
  }, []);

  const reducer = (state, action) => {
    switch (action.type) {
      case "INITIAL_DATA":
        return {
          ...state,
          prodData: action.payloadProd,
          cart: action.payloadCart,
          wishlist: action.payloadWishlist,
          categories: action.payloadCategory,
          filteredData: action.payloadProd,
        };
      case "ADD_TO_CART":
        return {
          ...state,
          cart: state.cart.includes(action.payload)
            ? state.cart
            : [...state.cart, action.payload],
        };
      case "ADD_TO_WISHLIST":
        return {
          ...state,
          wishlist: state.wishlist.includes(action.payload)
            ? state.wishlist
            : [...state.wishlist, action.payload],
        };
      case "CATEGORY":
        return {
          ...state,
          filteredData: state.prodData.filter(
            (product) => product.category === action.payload
          ),
        };
      default:
        return state;
    }
  };

  const [state, dispatch] = useReducer(reducer, {
    prodData: [],
    cart: [],
    wishlist: [],
    categories: [],
    filteredData: [],
  });
  console.log(state?.cart);
  return (
    <ProductsContext.Provider value={{ state, dispatch }}>
      {children}
    </ProductsContext.Provider>
  );
};

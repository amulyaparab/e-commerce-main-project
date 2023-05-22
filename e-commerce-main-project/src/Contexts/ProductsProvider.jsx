import {
  createContext,
  useContext,
  useEffect,
  useReducer,
  useState,
} from "react";
import { APIContext } from "./APIProvider";

export const ProductsContext = createContext();

export const ProductsProvider = ({ children }) => {
  const {
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
  } = useContext(APIContext);

  const fetchData = async () => {
    try {
      let product;
      const products = await fetchProducts();
      const cartUnfiltered = await fetchCart();
      const cart = cartUnfiltered.cart.filter(
        (item) => item._id !== undefined || item._id !== null
      );
      const wishlist = await fetchWishlist();
      const wishlistNew = wishlist.shift();
      const categories = await fetchCategories();
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
      case "FETCH_CART":
        return {
          ...state,
          cart: action.payload,
        };
      // case "ADD_TO_CART":

      //   return {
      //     ...state,
      //     cart: state.cart.includes(action.payload)
      //       ? state.cart
      //       : [...state.cart, action.payload],
      //   };

      // case "REMOVE_FROM_CART":
      //   deleteFromCart(action.payload);
      //   fetchCart().then((data) => console.log(data));
      //   return {
      //     ...state,
      //     cart: state.cart.filter((item) => item._id !== action.payload),
      //   };
      case "FETCH_WISHLIST":
        return { ...state, wishlist: action.payload };
      case "APPLY_COUPON":
        return {
          ...state,
          couponApplied: !state.couponApplied,
        };
      case "ADD_TO_WISHLIST":
        return {
          ...state,
          wishlist: state.wishlist.includes(action.payload)
            ? state.wishlist.filter((item) => item._id !== action.payload._id)
            : [...state.wishlist, action.payload],
        };
      case "CATEGORY":
        console.log(action.payload);
        return {
          ...state,
          filteredData: state.prodData.filter(
            (product) => product.category === action.payload
          ),
        };
      case "PRODUCT_CATEGORY":
        return {
          ...state,
          category: state.category.includes(action.payload)
            ? state.category.filter((cat) => cat !== action.payload)
            : [...state.category, action.payload],
        };
      case "SORT_BY_PRICE":
        return {
          ...state,
          sort: action.payload,
        };
      case "PRICE_RANGE":
        return { ...state, price: action.payload };
      case "RATING_RANGE":
        return {
          ...state,
          rating: action.payload,
        };
      case "SEARCH_BAR":
        const search = state.prodData.filter(
          (item) =>
            item.name.toLowerCase().includes(action.payload.toLowerCase()) ||
            item.brand.toLowerCase().includes(action.payload.toLowerCase())
        );
        return {
          ...state,
          filteredData: search,
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
    category: [],
    filteredData: [],
    couponApplied: false,
    sort: null,
    rating: 0,
    price: 0,
    search: "",
  });
  const [notificationActive, setNotificationActive] = useState(false);
  const totalAmount = state?.cart?.reduce(
    (total, curr) => (total += curr?.price),
    0
  );
  const priceData =
    state.price === 0
      ? state.filteredData
      : state.filteredData.filter((item) => item.price >= state.price);
  const ratingData =
    state.rating === 0
      ? priceData
      : priceData.filter((item) => item.rating >= state.rating);
  const categoryData =
    state.category.length === 0
      ? ratingData
      : ratingData.filter((item) => state.category.includes(item.category));
  const filteredData = state.sort
    ? [...categoryData].sort((a, b) =>
        state.sort === "Low To High" ? a.price - b.price : b.price - a.price
      )
    : categoryData;

  return (
    <ProductsContext.Provider
      value={{
        state,
        dispatch,
        totalAmount,
        filteredData,
        notificationActive,
        setNotificationActive,
      }}
    >
      {children}
    </ProductsContext.Provider>
  );
};

import {
  createContext,
  useContext,
  useEffect,
  useReducer,
  useState,
} from "react";
import { APIContext } from "./APIProvider";
import { reducer } from "../Reducers/reducer";

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
  const [isLoading, setIsLoading] = useState(true);
  const fetchData = async () => {
    try {
      setIsLoading(true);

      const products = await fetchProducts();
      const cartUnfiltered = await fetchCart();
      const cart = cartUnfiltered.cart.filter(
        (item) => item._id !== undefined || item._id !== null
      );
      // const cart = cartUnfiltered.shift();
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
    } finally {
      setIsLoading(false);
    }
  };

  const initialState = {
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
    fullName: "",
    email: "",
    clear: false,
    totalDiscount: 1,
    loading: false,
  };
  const [state, dispatch] = useReducer(reducer, initialState);
  // ["Bath & Body", "Skin Care", "Hair Care", "Home Decor"]
  const [notificationActive, setNotificationActive] = useState(false);
  const [showFilters, setShowFilters] = useState(true);
  const originalAmount = state?.cart?.reduce(
    (total, curr) => (total += curr?.price * curr?.qty),
    0
  );
  const totalAmount =
    state?.totalDiscount === 1
      ? originalAmount
      : originalAmount - (state?.totalDiscount / 100) * originalAmount;
  // 10÷100×680
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
    ? [...categoryData].sort(
        (a, b) =>
          (state.sort === "Low To High" && a.price - b.price) ||
          (state.sort === "High To Low" && b.price - a.price) ||
          state.sort === "Reset"
      )
    : categoryData;
  const [notificationContent, setNotificationContent] = useState({
    content: "",
    icon: "",
  });
  // console.log({ state });

  // const fetchUpdatedCart = async () => {
  //   const unfilteredCart = await fetchCart();
  //   const cart = unfilteredCart.cart.filter(
  //     (item) => item._id !== undefined || item._id !== null
  //   );
  //   console.log(cart);
  //   dispatch({
  //     type: "FETCH_CART",
  //     payload: cart,
  //   });
  // };
  // useEffect(() => {
  //   fetchUpdatedCart();
  // }, []);
  const [showCouponModal, setShowCouponModal] = useState(false);
  useEffect(() => {
    fetchData();
    console.log(state, "here");
    // fetchCart();
  }, []);
  return (
    <ProductsContext.Provider
      value={{
        state,
        dispatch,
        totalAmount,
        filteredData,
        notificationActive,
        setNotificationActive,
        isLoading,
        setIsLoading,
        showFilters,
        setShowFilters,
        showCouponModal,
        setShowCouponModal,
        originalAmount,
        notificationContent,
        setNotificationContent,
        fetchData,
      }}
    >
      {children}
    </ProductsContext.Provider>
  );
};

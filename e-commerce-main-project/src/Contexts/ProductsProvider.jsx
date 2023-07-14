import {
  createContext,
  useContext,
  useEffect,
  useReducer,
  useState,
} from "react";
import { useAPI } from "./APIProvider";
import { reducer } from "../Reducers/reducer";

const ProductsContext = createContext();

export const ProductsProvider = ({ children }) => {
  const {
    fetchProducts,
    fetchCart,
    fetchCategories,
    fetchWishlist,
    isLoading,
    setIsLoading,
  } = useAPI();

  const fetchData = async () => {
    try {
      setIsLoading(true);
      const products = await fetchProducts();
      const cartUnfiltered = await fetchCart();
      const cart = cartUnfiltered.cart?.filter(
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

  const fetchProductsAgain = async () => {
    try {
      setIsLoading(true);
      const products1 = await fetchProducts();
      dispatch({ type: "FETCH_PRODUCTS", payload: products1 });
    } catch (err) {
      console.log(err);
    } finally {
      setIsLoading(false);
    }
  };

  const fetchCategoriesAgain = async () => {
    try {
      setIsLoading(true);
      const categories1 = await fetchCategories();
      dispatch({ type: "FETCH_CATEGORIES", payload: categories1 });
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
  const [notificationActive, setNotificationActive] = useState(false);
  const [showFilters, setShowFilters] = useState(true);
  const [showCouponModal, setShowCouponModal] = useState(false);
  const [notificationContent, setNotificationContent] = useState({
    content: "",
    icon: "",
  });

  const originalAmount = state?.cart?.reduce(
    (total, curr) => (total += curr?.price * curr?.qty),
    0
  );

  const totalAmount =
    state?.totalDiscount === 1
      ? originalAmount
      : originalAmount - (state?.totalDiscount / 100) * originalAmount;

  const priceData =
    state.price === 0
      ? state.filteredData
      : state.filteredData?.filter((item) => item.price >= state.price);

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

  const handleClearFilters = () => {
    dispatch({ type: "CLEAR_FILTERS" });
  };

  useEffect(() => {
    fetchData();
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
        fetchProductsAgain,
        fetchCategoriesAgain,
        handleClearFilters,
      }}
    >
      {children}
    </ProductsContext.Provider>
  );
};

export const useProducts = () => useContext(ProductsContext);

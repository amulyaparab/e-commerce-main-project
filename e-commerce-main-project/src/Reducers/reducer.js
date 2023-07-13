export const reducer = (state, action) => {
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
    case "CLEAR_CART":
      return {
        ...state,
        cart: [],
      };
    case "CLEAR_WISHLIST":
      return { ...state, wishlist: [] };
    case "FETCH_PRODUCTS":
      return {
        ...state,
        filteredData: action.payload,
        prodData: action.payload,
      };
    case "FETCH_CATEGORIES":
      return { ...state, categories: action.payload };
    case "CLEAR_FILTERS":
      return {
        ...state,
        category: [],
        filteredData: state.prodData,
        sort: null,
        rating: 0,
        price: "0",
        search: "",
      };
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

    case "PRODUCT_CATEGORY":
      return {
        ...state,
        category:
          action.categoryType === "Main-Categories"
            ? [action.payload]
            : state.category.includes(action.payload)
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
        search: action.payload,
      };
    case "CLEAR":
      return { ...state, clear: true };
    case "10%_OFF":
      return { ...state, totalDiscount: 10, couponApplied: true };
    case "50%_OFF":
      return { ...state, totalDiscount: 50, couponApplied: true };
    case "NO_COUPON":
      return { ...state, totalDiscount: 1, couponApplied: false };
    default:
      return state;
  }
};

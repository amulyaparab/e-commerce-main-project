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
    // case "CATEGORY":
    //   console.log(action.payload);
    //   return {
    //     ...state,
    //     filteredData: state.prodData.filter(
    //       (product) => product.category === action.payload
    //     ),
    //   };
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
      };
    case "CLEAR":
      return { ...state, clear: true };
    default:
      return state;
  }
};

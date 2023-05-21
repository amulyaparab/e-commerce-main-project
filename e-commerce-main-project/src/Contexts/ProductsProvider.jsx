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
          authorization: localStorage.getItem("encodedTokenTest"),
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
      //console.log(categories);
      const options3 = (method, headers, data) => ({
        method,
        headers: { headers },
        body: JSON.stringify({ data }),
      });

      dispatch({
        type: "INITIAL_DATA",
        payloadProd: products,
        payloadCart: cart,
        payloadWishlist: wishlist,
        payloadCategory: categories,
      });
    } catch (err) {
      //console.log(err);
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
      case "REMOVE_FROM_CART":
        const deleteFromCart = async () => {
          const res = await fetch(`/api/user/cart/${action.payload}`, {
            method: "DELETE",
            headers: {
              authorization: localStorage.getItem("encodedTokenTest"),
            },
          });
          // const { cart } = await res.json();
          //console.log(await res, "hello");
          //console.log(action.payload);
          // return cart;
        };

        // deleteFromCart().then((data) => //console.log(data));
        return {
          ...state,
          // cart2: data,
        };
        //console.log(state.cart);
        return {
          ...state,
          cart: state.cart.filter((item) => item._id !== action.payload),
        };
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
      case "RATING_RANGE":
        //console.log(action.payload);
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
    search: "",
  });
  //console.log(state?.categories);
  const totalAmount = state?.cart?.reduce(
    (total, curr) => (total += curr?.price),
    0
  );
  const ratingData =
    state.rating === 0
      ? state.filteredData
      : state.filteredData.filter((item) => item.rating >= state.rating);
  const categoryData =
    state.category.length === 0
      ? ratingData
      : ratingData.filter((item) => state.category.includes(item.category));
  const filteredData = state.sort
    ? [...categoryData].sort((a, b) =>
        state.sort === "Low To High" ? a.price - b.price : b.price - a.price
      )
    : categoryData;
  //console.log(state.search);
  return (
    <ProductsContext.Provider
      value={{ state, dispatch, totalAmount, filteredData }}
    >
      {children}
    </ProductsContext.Provider>
  );
};

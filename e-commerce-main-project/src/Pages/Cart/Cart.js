import { useContext, useState } from "react";
import { ProductsContext } from "../../Contexts/ProductsProvider";
import { ProductCard } from "../Products/Components/ProductCard";
import cartImage from "../../Images/cart.svg";
import { TotalCard } from "./Components/TotalCard";
import { Coupon } from "./Components/Coupon";
import { UtilsContext } from "../../Contexts/UtilsProvider";

export const Cart = () => {
  const { state } = useContext(ProductsContext);

  const {
    moveToWishlistHandler,
    removefromCartHandler,
    increaseQtyHandler,
    decreaseQtyHandler,
    modal,
    setModal,
  } = useContext(UtilsContext);

  const ModalForRemoving = ({ item }) => {
    console.log(item);
    return (
      <div className="modal-container">
        <div className="modal-overlay options-overlay">
          <div className="options-modal-content">
            <i
              onClick={() => setModal(false)}
              class="fa-solid fa-xmark wishlist-heart remove"
            ></i>
            <h2>Are you sure you want to delete it?</h2>
            <small>Wishlist it instead and buy it later.</small>
            <div className="options-buttons">
              <button
                className="option-1-btn"
                onClick={() => {
                  console.log(item, "lolololololol");
                  removefromCartHandler(item);
                }}
              >
                Remove
              </button>
              <button onClick={() => moveToWishlistHandler(item)}>
                Add To Wishlist
              </button>
            </div>
          </div>
        </div>{" "}
      </div>
    );
  };
  return (
    <>
      <h1 className="header-heading">
        Cart {state?.cart?.length === 0 ? null : `(${state?.cart?.length})`}
      </h1>
      <Coupon />
      {state?.cart?.length === 0 ? (
        <div className="empty">
          <img src={cartImage} className="empty-img" alt="Empty cart." />
          <h2>Your cart looks rather lonely.</h2>
          <p>Add some items to show some love.</p>
        </div>
      ) : (
        <div className="gridCart">
          <section className="products cart ">
            {state?.cart?.map((item) => (
              <div className="productCard cartCard">
                <i class="fa-solid fa-xmark wishlist-heart remove"></i>
                <ProductCard item={item} />
                <p className="cart-quantity">
                  Qty: {item?.qty >= 1 && item?.qty}
                </p>
                <div className="cart-qty-buttons">
                  <button onClick={() => increaseQtyHandler(item._id)}>
                    +
                  </button>
                  <button onClick={() => decreaseQtyHandler(item)}>-</button>
                </div>
                <div>
                  {/* <div className="modal-container">
                      <div className="modal-overlay options-overlay">
                        <div className="options-modal-content">
                          <i
                            onClick={() => setModal(false)}
                            class="fa-solid fa-xmark wishlist-heart remove"
                          ></i>
                          <h2>Are you sure you want to delete it?</h2>
                          <small>Wishlist it instead and buy it later.</small>
                          <div className="options-buttons">
                            <button
                              className="option-1-btn"
                              onClick={() => {
                                setModal(false);
                                removefromCartHandler(item);
                              }}
                            >
                              Remove
                            </button>
                            <button>Add To Wishlist</button>
                          </div>
                        </div>
                      </div>
                    </div> */}
                </div>
              </div>
            ))}
            {/* {state?.cart?.map((item) => (
              <div key={item._id} className="productCard cartCard">
                <i
                  class="fa-solid fa-xmark wishlist-heart remove"
                  onClick={() => {
                    setModal(true);
                    console.log(item, "fdhjgds");
                  }}
                ></i>
                <ProductCard item={item} />
                <p className="cart-quantity">
                  Qty: {item?.qty >= 1 && item?.qty}
                </p>
                <div className="cart-qty-buttons">
                  <button onClick={() => increaseQtyHandler(item._id)}>
                    +
                  </button>

                  <button
                    onClick={() => {
                      decreaseQtyHandler(item);
                      console.log(item, "decrease");
                    }}
                  >
                    -
                  </button>
                </div>
                {modal ? <ModalForRemoving item={item} /> : null}
              </div>
            ))}{" "} */}
          </section>

          <TotalCard />
        </div>
      )}
    </>
  );
};

import { AddressesMapped, SummaryCard } from "../../Components";
import { useProducts } from "../../Contexts/ProductsProvider";

export const Checkout = () => {
  const { state } = useProducts();

  return (
    <>
      <h1 className="header-heading">Address</h1>
      <section className="address">
        <AddressesMapped />
      </section>
      {state.cart.length === 0 ? (
        <h3 className="no-checkout">
          Add something to your Cart to check out the Checkout Page.
        </h3>
      ) : (
        <SummaryCard />
      )}
    </>
  );
};

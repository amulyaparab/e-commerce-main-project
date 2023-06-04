import { SummaryCard } from "../../Components/Checkout/SummaryCard";
import { AddressesMapped } from "../../Components/AddressComponents/AddressMapped";

export const Checkout = () => {
  return (
    <>
      <h1 className="header-heading">Address</h1>
      <section className="address">
        <AddressesMapped />
      </section>
      <SummaryCard />
    </>
  );
};

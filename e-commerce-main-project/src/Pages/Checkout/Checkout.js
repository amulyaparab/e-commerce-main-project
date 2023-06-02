import { useContext, useState } from "react";
import { ProductsContext } from "../../Contexts/ProductsProvider";

import { AddressContext } from "../../Contexts/AddressProvider";
import { AddressForm } from "../../Components/AddressComponents/AddressForm";
import { SummaryCard } from "./Components/SummaryCard";
import { AddressesMapped } from "../../Components/AddressComponents/AddressMapped";
import { useNavigate } from "react-router-dom";

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

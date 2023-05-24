import { useContext } from "react";
import { ProductsContext } from "../../Contexts/ProductsProvider";
export const Loading = () => {
  const { isLoading, setIsLoading } = useContext(ProductsContext);
  return (
    <>
      <div className="loader"></div>
    </>
  );
};

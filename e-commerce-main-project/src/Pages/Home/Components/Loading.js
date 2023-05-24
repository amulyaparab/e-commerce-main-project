import { useContext } from "react";
import { ProductsContext } from "../../../Contexts/ProductsProvider";
export const Loading = () => {
  const { isLoading } = useContext(ProductsContext);
  return (
    <>
      {isLoading && (
        <div className="loader-overlay">
          <div className="loader-layout">
            <div className="loader"></div>
          </div>
        </div>
      )}
    </>
  );
};

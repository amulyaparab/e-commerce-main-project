import { useProducts } from "../Contexts/ProductsProvider";
export const Loading = () => {
  const { isLoading } = useProducts();
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

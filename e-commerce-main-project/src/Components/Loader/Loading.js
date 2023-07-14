import { useAPI } from "../../Pages";
export const Loading = () => {
  const { isLoading } = useAPI();

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

import { useProducts } from "../Contexts/ProductsProvider";

export const NotificationModal = () => {
  const { notificationActive } = useProducts();

  return (
    <>
      {notificationActive && (
        <div className="modal-container">
          <div className="modal-overlay"></div>
        </div>
      )}
    </>
  );
};

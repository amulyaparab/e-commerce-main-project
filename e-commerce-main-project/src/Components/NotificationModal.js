import { useContext } from "react";
import { ProductsContext } from "../Contexts/ProductsProvider";

export const NotificationModal = ({ text, icon }) => {
  const { notificationActive } = useContext(ProductsContext);

  return (
    <>
      {notificationActive && (
        <div className="modal-container">
          <div className="modal-overlay">
            <div className="modal-content">
              <span className="icon">{icon}</span>
              {text}
            </div>
          </div>
        </div>
      )}
    </>
  );
};

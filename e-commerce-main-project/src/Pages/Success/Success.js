import Confetti from "react-confetti";

export const Success = () => {
  return (
    <>
      <div className="order-height">
        <h1 className="header-heading">Order Placed Successfully!</h1>
        <Confetti />
        <i className="fa-solid fa-circle-check"></i>
      </div>
    </>
  );
};

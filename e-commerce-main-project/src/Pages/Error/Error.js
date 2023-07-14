import { error } from "../../Assests";

export const ErrorPage = () => {
  return (
    <div className="error-page">
      <img src={error} alt="404 Not Found" />
      <h1>404: Page Not Found</h1>
      <small>Sip Your Mint Tea till then.</small>
    </div>
  );
};

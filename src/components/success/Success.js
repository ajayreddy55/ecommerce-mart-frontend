import "./Success.css";
import { Link } from "react-router-dom";

const Success = () => {
  return (
    <div className="mart-success-main-container">
      <div className="container">
        <div className="row">
          <div className="col-12 mt-4 mb-4">
            <div className="mart-success-page-container">
              <img
                className="mart-success-page-image mb-3"
                alt="successImage"
                src="https://user-images.githubusercontent.com/2808506/56082849-399b0000-5e1e-11e9-901c-8638e14599f8.gif"
              />
              <h4 className="mart-success-message">
                Thank You For Shopping With Us.
              </h4>
              <Link className="mart-success-link-home" to={"/home"}>
                Go to Home Page
              </Link>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Success;

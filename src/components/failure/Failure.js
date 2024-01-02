import "./Failure.css";
import { Link } from "react-router-dom";

const Failure = () => {
  return (
    <div className="mart-failure-main-container">
      <div className="container">
        <div className="row">
          <div className="col-12 mt-4 mb-4">
            <div className="mart-failure-page-container">
              <img
                className="mart-failure-page-image mb-3"
                alt="errorImage"
                src="https://assets-v2.lottiefiles.com/a/b5641ed8-1152-11ee-ada0-8f4e8e17569e/AVXn9ghicT.gif"
              />
              <h4 className="mart-failure-message">
                Oops! Something Went Wrong. Try Again.
              </h4>
              <Link className="mart-failure-link-home" to={"/home"}>
                Go to Home Page
              </Link>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Failure;

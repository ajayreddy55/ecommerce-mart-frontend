import { Link } from "react-router-dom";

import "./footer.css";

const Footer = () => {
  return (
    <footer className="mart-footer-section">
      <div className="mart-footer-top mt-3 mb-3">
        <div className="container">
          <div className="row">
            <div className="col-12 col-md-4 mt-2 mb-2">
              <div className="mr-3 d-flex flex-column align-items-center w-100">
                <img
                  src="https://cdn-icons-png.flaticon.com/512/743/743007.png"
                  alt="logo"
                  className="mart-footer-logo"
                />
                <p className="mart-footer-web-name">A-Z Mart</p>
              </div>
            </div>
            <div className="col-12 col-md-4 mt-2 mb-3">
              <div className="mr-2 w-100 d-flex flex-column">
                <h3 className="mart-footer-menu-heading">MAIN MENU</h3>
                <Link className="mart-footer-menu-link-item">
                  <p className="mart-footer-menu-link-text">Home</p>
                </Link>
                <Link className="mart-footer-menu-link-item">
                  <p className="mart-footer-menu-link-text">Products</p>
                </Link>
              </div>
            </div>
            <div className="col-12 col-md-4 mt-2 mb-3">
              <div className="mr-2 w-100 d-flex flex-column">
                <h3 className="mart-footer-menu-heading">HELP AND SUPPORT</h3>
                <Link className="mart-footer-menu-link-item">
                  <p className="mart-footer-menu-link-text">Contact Us</p>
                </Link>
                <Link className="mart-footer-menu-link-item">
                  <p className="mart-footer-menu-link-text">About Us</p>
                </Link>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className="mart-footer-bottom mt-2 mb-2">
        <div className="container">
          <div className="row">
            <div className="col-12 col-md-7 mt-2 mb-2">
              <div className="w-100 mr-2">
                <p className="mart-footer-copyright-text">
                  copyright@Ajay Reddy | 2023
                </p>
              </div>
            </div>
            <div className="col-12 col-md-5 mt-2 mb-2">
              <div className="d-flex align-items-center justify-content-md-end">
                <a
                  className="mr-3"
                  href="https://www.facebook.com/"
                  target="__blank"
                >
                  <i className="fa-brands fa-facebook-f mart-footer-social-icon"></i>
                </a>
                <a
                  className="mr-3"
                  href="https://twitter.com/"
                  target="__blank"
                >
                  <i className="fa-brands fa-twitter mart-footer-social-icon"></i>
                </a>
                <a
                  className="mr-3"
                  href="https://www.google.com/"
                  target="__blank"
                >
                  <i className="fa-brands fa-google-plus-g mart-footer-social-icon"></i>
                </a>
                <a
                  className="mr-3"
                  href="https://www.youtube.com/"
                  target="__blank"
                >
                  <i className="fa-brands fa-youtube mart-footer-social-icon"></i>
                </a>
              </div>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;

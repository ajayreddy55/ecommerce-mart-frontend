import "./About.css";
import Navbar from "../navbar/navbar";
import Footer from "../footer/footer";

const AboutUs = () => {
  return (
    <div className="mart-about-main-container">
      <Navbar />
      <div className="mart-about-content-main-container">
        <div className="container mart-about-container-height-set mt-4 mb-4">
          <div className="row">
            <div className="col-12 mb-3">
              <div className="d-flex align-items-center justify-content-between flex-wrap">
                <h3 className="mart-home-about-categories-heading mt-2">
                  About Us
                </h3>
              </div>
            </div>
            <div className="col-12 mt-3 mb-2">
              <p className="mart-home-about-us-description">
                Welcome to A-Z Mart, where passion meets convenience! We're not
                just an online store; we're a community of like-minded
                individuals who believe in the power of great products and
                exceptional service.
              </p>
            </div>
            <div className="col-12 mt-3 mb-2">
              <h5 className="mart-home-about-us-second-heading mb-3">
                Our Story
              </h5>
              <p className="mart-home-about-us-description">
                Our goal is to provide high-quality products that enhance your
                lifestyle. What began as a small passion project has now grown
                into a thriving business, thanks to the support of our amazing
                customers.
              </p>
            </div>
            <div className="col-12 mt-3 mb-2">
              <h5 className="mart-home-about-us-second-heading mb-3">
                Our Mission
              </h5>
              <p className="mart-home-about-us-description">
                Our mission is to source the finest materials, ensuring ethical
                production practices, or delivering a seamless online shopping
                experience, we're committed to exceeding your expectations at
                every step.
              </p>
            </div>
            <div className="col-12 mt-4 mb-2">
              <h4 className="mart-home-about-us-what-sets-heading">
                What Sets Up Apart
              </h4>
            </div>
            <div className="col-12 mt-2 mb-2">
              <h5 className="mart-home-about-us-second-heading mb-3">
                Quality Assurance
              </h5>
              <p className="mart-home-about-us-description">
                We believe in the power of quality. That's why every product at
                our company undergoes rigorous quality checks to ensure it meets
                our high standards. We want you to feel confident in every
                purchase you make.
              </p>
            </div>
            <div className="col-12 mt-2 mb-2">
              <h5 className="mart-home-about-us-second-heading mb-3">
                Customer-Centric Approach
              </h5>
              <p className="mart-home-about-us-description">
                Our customers are at the heart of everything we do. From our
                user-friendly website to our dedicated customer support team, we
                strive to make your shopping experience as enjoyable and
                stress-free as possible.
              </p>
            </div>
            <div className="col-12 mt-2 mb-2">
              <h5 className="mart-home-about-us-second-heading mb-3">
                Sustainability
              </h5>
              <p className="mart-home-about-us-description">
                We're passionate about the environment. That's why we're
                committed to promote and sell recyclable products. By choosing
                A-Z Mart, you're not just getting a great product; you're
                supporting a brand that cares about the planet.
              </p>
            </div>
          </div>
        </div>
      </div>
      <Footer />
    </div>
  );
};

export default AboutUs;

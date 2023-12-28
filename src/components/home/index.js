import React from "react";
import "./index.css";
import Navbar from "../navbar/navbar";
import Footer from "../footer/footer";
import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation, Scrollbar, Pagination, Autoplay } from "swiper/modules";

import "swiper/css/bundle";
import { Link } from "react-router-dom";

const Home = () => {
  const swiperModules = {
    modules: [Navigation, Pagination, Scrollbar, Autoplay],
    navigation: true,
    pagination: { clickable: true },
    slidesPerView: 1,
    autoplay: {
      pauseOnMouseEnter: true,
      delay: 2000,
      disableOnInteraction: false,
    },
    loop: true,
  };

  return (
    <div className="mart-home-main-container">
      <Navbar />
      <div className="mart-home-content-main-container">
        <section className="mart-home-swiper-main-container mt-2 mb-2">
          <Swiper {...swiperModules} className="swiper-height-mart-home">
            <SwiperSlide>
              <img
                src="https://www.websetters.in/wp-content/uploads/2018/07/Offer-Discounts.jpg"
                alt="slideImage"
                className="mart-slider-image"
              />
            </SwiperSlide>
            <SwiperSlide>
              <img
                src="https://cdn.pixabay.com/photo/2022/05/21/05/16/promotion-7210696_1280.png"
                alt="slideImage"
                className="mart-slider-image"
              />
            </SwiperSlide>
            <SwiperSlide>
              <img
                src="https://d39vol41m7feya.cloudfront.net/1620379019-4_(1).jpg"
                alt="slideImage"
                className="mart-slider-image"
              />
            </SwiperSlide>
          </Swiper>
        </section>
        <section className="mart-home-products-section mb-2">
          <div className="container mb-3 mt-3">
            <div className="row">
              <div className="col-12 mb-3">
                <div className="d-flex align-items-center justify-content-between flex-wrap">
                  <h3 className="mart-home-products-categories-heading mt-2">
                    Products Categories
                  </h3>
                  <Link className="mart-home-products-explore-text mt-2">
                    Explore Products
                  </Link>
                </div>
              </div>
              <div className="col-12 col-md-4 col-lg-3 mt-2 mb-2">
                <div className="mart-home-products-categories-card shadow mr-3">
                  <img
                    className="mart-products-categories-card-image"
                    src="https://i.ebayimg.com/thumbs/images/g/RnsAAOSwZehkB6G8/s-l640.jpg"
                    alt="categoryImage"
                  />
                  <p className="mart-products-categories-card-text">
                    Electronics
                  </p>
                </div>
              </div>
              <div className="col-12 col-md-4 col-lg-3 mt-2 mb-2">
                <div className="mart-home-products-categories-card shadow mr-3">
                  <img
                    className="mart-products-categories-card-image"
                    src="https://i.pinimg.com/736x/51/d3/88/51d38806d50482762c700eca5717a32f.jpg"
                    alt="categoryImage"
                  />
                  <p className="mart-products-categories-card-text">
                    Appliances
                  </p>
                </div>
              </div>
              <div className="col-12 col-md-4 col-lg-3 mt-2 mb-2">
                <div className="mart-home-products-categories-card shadow mr-3">
                  <img
                    className="mart-products-categories-card-image"
                    src="https://blog.olx.com.pk/wp-content/uploads/2022/02/Mobile-phones-1-1024x573.jpg"
                    alt="categoryImage"
                  />
                  <p className="mart-products-categories-card-text">Mobiles</p>
                </div>
              </div>
              <div className="col-12 col-md-4 col-lg-3 mt-2 mb-2">
                <div className="mart-home-products-categories-card shadow mr-3">
                  <img
                    className="mart-products-categories-card-image"
                    src="https://img.freepik.com/free-photo/shop-clothing-clothes-shop-hanger-modern-shop-boutique_1150-8886.jpg?size=626&ext=jpg&ga=GA1.1.1546980028.1703548800&semt=ais"
                    alt="categoryImage"
                  />
                  <p className="mart-products-categories-card-text">Fashion</p>
                </div>
              </div>
            </div>
          </div>
        </section>
        <section className="mart-home-about-us-section mb-2">
          <div className="container mb-3 mt-3">
            <div className="row">
              <div className="col-12 mb-3">
                <div className="d-flex align-items-center justify-content-between flex-wrap">
                  <h3 className="mart-home-products-categories-heading mt-2">
                    About Us
                  </h3>
                </div>
              </div>
              <div className="col-12 mt-3 mb-2">
                <p className="mart-home-about-us-description">
                  Welcome to A-Z Mart, where passion meets convenience! We're
                  not just an online store; we're a community of like-minded
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
                  Our mission is to source the finest materials, ensuring
                  ethical production practices, or delivering a seamless online
                  shopping experience, we're committed to exceeding your
                  expectations at every step.
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
                  We believe in the power of quality. That's why every product
                  at our company undergoes rigorous quality checks to ensure it
                  meets our high standards. We want you to feel confident in
                  every purchase you make.
                </p>
              </div>
              <div className="col-12 mt-2 mb-2">
                <h5 className="mart-home-about-us-second-heading mb-3">
                  Customer-Centric Approach
                </h5>
                <p className="mart-home-about-us-description">
                  Our customers are at the heart of everything we do. From our
                  user-friendly website to our dedicated customer support team,
                  we strive to make your shopping experience as enjoyable and
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
        </section>
      </div>
      <Footer />
    </div>
  );
};

export default Home;

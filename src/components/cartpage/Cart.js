import React, { useEffect, useState } from "react";
import { loadStripe } from "@stripe/stripe-js";

import "./Cart.css";
import Navbar from "../navbar/navbar";
import Footer from "../footer/footer";
import { Hourglass } from "react-loader-spinner";
import CartItems from "./cartitems/cartitems";
import { auth } from "../../firebase";

const apiConstants = {
  initial: "INITIAL",
  success: "SUCCESS",
  inProgress: "IN_PROGRESS",
  failure: "FAILURE",
};

const Cart = () => {
  const [cartProductsList, setCartProductsList] = useState({
    cartList: [],
    apiStatus: apiConstants.initial,
  });
  const [totalPrice, setTotalPrice] = useState(0);

  useEffect(() => {
    getCartProductsList();
  }, []);

  const getCartProductsList = async () => {
    setCartProductsList((prevState) => ({
      ...prevState,
      cartList: [],
      apiStatus: apiConstants.inProgress,
    }));

    const jwtToken = await auth.currentUser.getIdToken();

    const url = `http://localhost:5007/api/get-cart-list/${auth.currentUser.uid}`;
    const options = {
      method: "GET",
      headers: {
        Authorization: `Bearer ${jwtToken}`,
        Accept: "application/json",
      },
    };

    const cartListRes = await fetch(url, options);
    if (cartListRes.ok) {
      const cartListResJson = await cartListRes.json();

      let totalPriceValue = 0;

      for (let item of cartListResJson.cartList) {
        let multiplication = parseInt(item.quantity) * parseInt(item.price);
        totalPriceValue = parseInt(totalPriceValue) + multiplication;
      }

      setCartProductsList((prevState) => ({
        cartList: cartListResJson.cartList,
        apiStatus: apiConstants.success,
      }));
      setTotalPrice(totalPriceValue);
    } else {
      setCartProductsList((prevState) => ({
        cartList: [],
        apiStatus: apiConstants.success,
      }));
      setTotalPrice(0);
    }
  };

  const checkoutTheSession = async () => {
    const stripe = await loadStripe(process.env.REACT_APP_PUBLISHABLE_KEY);
    const jwtToken = await auth.currentUser.getIdToken();
    console.log(auth.currentUser.uid);

    const url = "http://localhost:5007/api/payment-checkout";
    const options = {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
        Authorization: `Bearer ${jwtToken}`,
      },
      body: JSON.stringify({
        userId: auth.currentUser.uid,
      }),
    };

    const session = await fetch(url, options);

    const sessionJson = await session.json();

    const resultCheckOut = stripe.redirectToCheckout({
      sessionId: sessionJson.session.id,
    });

    if (resultCheckOut.error) {
      console.log(resultCheckOut.error);
    }
  };

  const noDataView = () => {
    return (
      <div className="mart-products-no-data-view-container pt-4 pb-4">
        <h3 className="mart-products-table-no-data-view-text">No Data Found</h3>
      </div>
    );
  };

  const renderLoaderView = () => {
    return (
      <div className="mart-products-no-data-view-container pt-4 pb-4">
        <Hourglass
          visible={true}
          height="54"
          width="54"
          ariaLabel="hourglass-loading"
          wrapperStyle={{}}
          wrapperClass=""
          colors={["#306cce", "#72a1ed"]}
        />
      </div>
    );
  };

  const renderFailureView = () => {
    return (
      <div className="mart-products-no-data-view-container pt-4 pb-4">
        <h3 className="mart-products-no-data-view-container">
          Oops! Something Went Wrong.
        </h3>
      </div>
    );
  };

  const renderProductListView = () => {
    if (cartProductsList.cartList.length === 0) {
      return noDataView();
    }

    return (
      <>
        <div className="col-12">
          <div className="w-100 mb-3">
            {cartProductsList.cartList.map((eachProductCart) => (
              <CartItems
                key={eachProductCart._id}
                eachProductCart={eachProductCart}
                getListAgain={getCartProductsList}
              />
            ))}
          </div>
        </div>
        <div className="col-12 mt-3">
          <div className="d-flex align-items-center justify-content-end">
            <div>
              <p className="mart-cart-total-price-text">
                Total Price: ₹{" "}
                <span className="mart-cart-total-price-text-span">
                  {totalPrice}
                </span>
                /-
              </p>
            </div>
          </div>
        </div>
        <div className="col-12 mt-2 mb-3">
          <div className="d-flex align-items-center justify-content-end">
            <div>
              <button
                className="btn btn-primary text-white"
                onClick={checkoutTheSession}
              >
                Checkout
              </button>
            </div>
          </div>
        </div>
      </>
    );
  };

  const checkingStatusOfList = () => {
    switch (cartProductsList.apiStatus) {
      case apiConstants.inProgress:
        return renderLoaderView();

      case apiConstants.failure:
        return renderFailureView();

      case apiConstants.success:
        return renderProductListView();

      default:
        return null;
    }
  };

  return (
    <div className="mart-cart-main-container">
      <Navbar />
      <div className="mart-cart-content-main-container">
        <div className="container mart-cart-container-height-set mt-4 mb-4">
          <div className="row">
            <div className="col-12">
              <h3 className="mart-cart-main-heading">Cart Items</h3>
            </div>
            {checkingStatusOfList()}
          </div>
        </div>
      </div>
      <Footer />
    </div>
  );
};

export default Cart;

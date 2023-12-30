import React, { useEffect, useState } from "react";

import "./Cart.css";
import Navbar from "../navbar/navbar";
import Footer from "../footer/footer";
import { Hourglass } from "react-loader-spinner";
import CartItems from "./cartitems/cartitems";

const categoriesList = [
  {
    id: 1,
    category: "Electronics",
  },
  {
    id: 2,
    category: "Fashion",
  },
];

const pricesList = [
  {
    id: 1,
    price: 5000,
  },
  {
    id: 2,
    price: 10000,
  },
  {
    id: 3,
    price: 25000,
  },
  {
    id: 4,
    price: 50000,
  },
  {
    id: 5,
    price: 100000,
  },
];

const apiConstants = {
  initial: "INITIAL",
  success: "SUCCESS",
  inProgress: "IN_PROGRESS",
  failure: "FAILURE",
};

const Cart = () => {
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

  // const renderProductListView = () => {
  //   if (productsList.products.length === 0) {
  //     return noDataView();
  //   }

  //   return (
  //     <div className="w-100 mb-3">
  //       {productsList.products.map((eachProduct) => (
  //         <ProductsListPage key={eachProduct._id} eachProduct={eachProduct} />
  //       ))}
  //     </div>
  //   );
  // };

  // const checkingStatusOfList = () => {
  //   switch (productsList.apiStatus) {
  //     case apiConstants.inProgress:
  //       return renderLoaderView();

  //     case apiConstants.failure:
  //       return renderFailureView();

  //     case apiConstants.success:
  //       return renderProductListView();

  //     default:
  //       return null;
  //   }
  // };

  return (
    <div className="mart-cart-main-container">
      <Navbar />
      <div className="mart-cart-content-main-container">
        <div className="container mart-cart-container-height-set mt-4 mb-4">
          <div className="row">
            <div className="col-12">
              <h3 className="mart-cart-main-heading">Cart Items</h3>
            </div>
            <div className="col-12">
              <CartItems />
            </div>
          </div>
        </div>
      </div>
      <Footer />
    </div>
  );
};

export default Cart;

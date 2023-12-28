import React, { useEffect, useState } from "react";

import "./products.css";
import Navbar from "../navbar/navbar";
import Footer from "../footer/footer";
import ProductsCategoryFilters from "./productsCategoryFilters";
import ProductsPriceFilters from "./productsPriceFilters";
import ProductsListPage from "./productsList";
import { Hourglass } from "react-loader-spinner";

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

const Products = () => {
  const [productsList, setProductsList] = useState({
    products: [],
    apiStatus: apiConstants.initial,
  });

  const [priceLessThanFilter, setPriceLessThanFilter] = useState("");
  const [searchInput, setSearchInput] = useState("");
  const [categoryTypes, setCategoryTypes] = useState([]);

  useEffect(() => {
    getProductsList();
    //eslint-disable-next-line
  }, [priceLessThanFilter, categoryTypes, searchInput]);

  const getProductsList = async () => {
    setProductsList((prevState) => ({
      ...prevState,
      products: [],
      apiStatus: apiConstants.inProgress,
    }));

    const joinedCategory = categoryTypes.join(",");

    const url = `http://localhost:5007/api/all-products?search=${searchInput}&category=${joinedCategory}&price=${priceLessThanFilter}`;
    const options = {
      method: "GET",
      headers: {
        "Content-Type": "application/json",
        Accept: "application/json",
      },
    };

    const productsRes = await fetch(url, options);

    if (productsRes.ok) {
      const productsJson = await productsRes.json();

      setProductsList((prevState) => ({
        ...prevState,
        products: productsJson.products,
        apiStatus: apiConstants.success,
      }));
    } else {
      setProductsList((prevState) => ({
        ...prevState,
        products: [],
        apiStatus: apiConstants.failure,
      }));
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
    if (productsList.products.length === 0) {
      return noDataView();
    }

    return (
      <div className="w-100 mb-3">
        {productsList.products.map((eachProduct) => (
          <ProductsListPage key={eachProduct._id} eachProduct={eachProduct} />
        ))}
      </div>
    );
  };

  const checkingStatusOfList = () => {
    switch (productsList.apiStatus) {
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

  const changePriceValueFilter = (price) => {
    setPriceLessThanFilter(price);
  };

  const unCheckedCategory = (category) => {
    const updatedCategoryList = categoryTypes.filter(
      (eachType) => category !== eachType
    );

    setCategoryTypes(updatedCategoryList);
  };

  const checkedCategoryBox = (category) => {
    const updatedCategoryList = [category, ...categoryTypes];

    setCategoryTypes(updatedCategoryList);
  };

  const changeSearchInput = (event) => {
    setSearchInput(event.target.value);
  };

  return (
    <div className="mart-products-main-container">
      <Navbar />
      <div className="mart-products-content-main-container">
        <div className="container-fluid mart-products-container-height-set">
          <div className="row mart-products-row-height-set">
            <div className="col-12 col-md-4 col-lg-3 mart-products-col-height-set p-0">
              <div className="mart-products-filters-main-container">
                <div className="mt-3 mb-3">
                  <input
                    type="search"
                    className="mart-products-search-bar"
                    placeholder="Search"
                    name="Search"
                    value={searchInput}
                    onChange={changeSearchInput}
                  />
                </div>
                <div className="d-flex flex-column mt-3 mb-3">
                  <h4 className="mart-products-filters-heading mb-2 mt-2">
                    Filters
                  </h4>
                  <div className="mt-3 mb-3">
                    <h6 className="mart-products-filters-category-heading">
                      Category
                    </h6>
                    <div>
                      {categoriesList.map((eachCategory) => (
                        <ProductsCategoryFilters
                          key={eachCategory.id}
                          eachCategory={eachCategory}
                          unCheckedCategory={unCheckedCategory}
                          checkedCategoryBox={checkedCategoryBox}
                        />
                      ))}
                    </div>
                  </div>
                  <div className="mt-3 mb-3">
                    <h6 className="mart-products-filters-category-heading">
                      Price
                    </h6>
                    <div>
                      {pricesList.map((eachPrice) => (
                        <ProductsPriceFilters
                          key={eachPrice.id}
                          eachPrice={eachPrice}
                          changePriceValueFilter={changePriceValueFilter}
                        />
                      ))}
                    </div>
                  </div>
                </div>
              </div>
            </div>
            <div className="col-12 col-md-8 col-lg-9 mart-products-col-height-set">
              <div className="mart-products-list-main-container">
                <h3 className="mart-products-list-main-heading mt-3 mb-3">
                  Products
                </h3>
                {checkingStatusOfList()}
              </div>
            </div>
          </div>
        </div>
      </div>
      <Footer />
    </div>
  );
};

export default Products;

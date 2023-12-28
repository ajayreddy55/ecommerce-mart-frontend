import "./index.css";

const ProductsListPage = (props) => {
  const { eachProduct } = props;

  const { _id, name, description, category, price, imageUrl, rating } =
    eachProduct;

  return (
    <div className="mart-products-list-card shadow mt-3 mb-4">
      <div className="row">
        <div className="col-12 col-md-3">
          <img
            className="mart-products-list-image mr-md-2"
            src={imageUrl}
            alt={name}
          />
        </div>
        <div className="col-12 col-md-9">
          <div className="ml-md-2 d-flex flex-column">
            <h4 className="mart-products-list-title">{name}</h4>
            <p className="mart-products-list-description">{description}</p>
            <div className="d-flex align-items-center">
              <i className="fa-solid fa-star mart-products-rating-icon"></i>
              <p className="mart-products-rating-text">{rating}</p>
            </div>
            <p className="mart-products-list-price">₹ {price}</p>
            <div>
              <button className="mart-products-list-add-button" type="button">
                Add to Cart
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ProductsListPage;

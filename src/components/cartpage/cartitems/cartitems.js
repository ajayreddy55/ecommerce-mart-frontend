import "./cartitems.css";

const CartItems = (props) => {
  //   const { eachProduct } = props;

  //   const { _id, name, description, category, price, imageUrl, rating } =
  //     eachProduct;

  return (
    <div className="mart-cart-list-card shadow mt-3 mb-4">
      <div className="row">
        <div className="col-12 col-md-3">
          <img
            className="mart-cart-list-image mr-md-2"
            src="https://m.media-amazon.com/images/W/MEDIAX_792452-T2/images/I/51s+egIlArS._AC_UY1000_.jpg"
            alt="product"
          />
        </div>
        <div className="col-12 col-md-9">
          <div className="ml-md-2 d-flex flex-column">
            <h4 className="mart-cart-list-title">Nike</h4>
            <p className="mart-cart-list-description">
              The Sony PlayStation 5 is a next-gen gaming console with support
              for 4K gaming, ray tracing, and fast loading times.
            </p>
            <div className="d-flex align-items-center">
              <i className="fa-solid fa-star mart-cart-rating-icon"></i>
              <p className="mart-cart-rating-text">4.5</p>
            </div>
            <p className="mart-cart-list-price">₹ 7659</p>
            <div>
              <button className="mart-cart-list-add-button" type="button">
                Add to Cart
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default CartItems;

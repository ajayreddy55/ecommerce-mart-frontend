import "./cartitems.css";
import { auth } from "../../../firebase";

const CartItems = (props) => {
  const { eachProductCart, getListAgain } = props;

  const {
    _id,
    name,
    description,
    price,
    imageUrl,
    rating,
    productId,
    quantity,
  } = eachProductCart;

  const decreaseQuantity = async () => {
    const jwtToken = await auth.currentUser.getIdToken();

    const url = "http://localhost:5007/api/update-quantity";
    const options = {
      method: "PUT",
      headers: {
        "Content-Type": "application/json",
        Authorization: `Bearer ${jwtToken}`,
        Accept: "application/json",
      },
      body: JSON.stringify({
        productId: productId,
        userId: auth.currentUser.uid,
        cartId: _id,
        operation: "negative",
      }),
    };
    const response = await fetch(url, options);
    if (response.ok) {
      getListAgain();
    }
  };

  const increaseQuantity = async () => {
    const jwtToken = await auth.currentUser.getIdToken();

    const url = "http://localhost:5007/api/update-quantity";
    const options = {
      method: "PUT",
      headers: {
        "Content-Type": "application/json",
        Authorization: `Bearer ${jwtToken}`,
        Accept: "application/json",
      },
      body: JSON.stringify({
        productId: productId,
        userId: auth.currentUser.uid,
        cartId: _id,
        operation: "positive",
      }),
    };
    const response = await fetch(url, options);
    if (response.ok) {
      getListAgain();
    }
  };

  return (
    <div className="mart-cart-list-card shadow mt-3 mb-4">
      <div className="row">
        <div className="col-12 col-md-3">
          <img
            className="mart-cart-list-image mr-md-2"
            src={imageUrl}
            alt={name}
          />
        </div>
        <div className="col-12 col-md-9">
          <div className="ml-md-2 d-flex flex-column">
            <h4 className="mart-cart-list-title">{name}</h4>
            <p className="mart-cart-list-description">{description}</p>
            <div className="d-flex align-items-center">
              <i className="fa-solid fa-star mart-cart-rating-icon"></i>
              <p className="mart-cart-rating-text">{rating}</p>
            </div>
            <p className="mart-cart-list-price">₹ {price}</p>
            <div className="d-flex align-items-center mt-3 mb-2">
              <button
                className="mart-cart-list-add-button"
                type="button"
                onClick={decreaseQuantity}
              >
                <i className="fa-solid fa-minus"></i>
              </button>
              <span className="mart-cart-list-quantity ml-2 mr-2">
                {quantity}
              </span>
              <button
                className="mart-cart-list-add-button mart-cart-list-plus-button"
                type="button"
                onClick={increaseQuantity}
              >
                <i className="fa-solid fa-plus"></i>
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default CartItems;

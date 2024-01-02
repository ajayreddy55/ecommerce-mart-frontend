import "./index.css";
import { useUserAuth } from "../../../context/authContext";
import { useNavigate } from "react-router-dom";
import { auth } from "../../../firebase";

const ProductsListPage = (props) => {
  const { eachProduct } = props;
  const { isLoggedIn } = useUserAuth();
  const navigate = useNavigate();

  const { _id, name, description, price, imageUrl, rating } = eachProduct;

  const addProductToCart = async () => {
    const jwtToken = await auth.currentUser.getIdToken();

    const url = "http://localhost:5007/api/add-items-to-cart";
    const options = {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
        Authorization: `Bearer ${jwtToken}`,
        Accept: "application/json",
      },
      body: JSON.stringify({
        productId: _id,
        userId: auth.currentUser.uid,
        description: description,
        price: price,
        imageUrl: imageUrl,
        rating: rating,
        name: name,
      }),
    };

    const response = await fetch(url, options);

    const responseJson = await response.json();
    alert(responseJson.message);
  };

  const addItemToCart = () => {
    if (isLoggedIn) {
      addProductToCart();
    } else {
      navigate("/login");
    }
  };

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
              <button
                className="mart-products-list-add-button"
                type="button"
                onClick={addItemToCart}
              >
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

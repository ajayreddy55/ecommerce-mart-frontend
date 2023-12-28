import "./index.css";

const ProductsPriceFilters = (props) => {
  const { eachPrice, changePriceValueFilter } = props;

  const changePrice = () => {
    changePriceValueFilter(eachPrice.price);
  };

  return (
    <div className="d-flex align-items-center mt-3">
      <input
        type="radio"
        className="mart-products-price-filters-radio"
        value={eachPrice.price}
        id={eachPrice.id}
        name="price"
        onChange={changePrice}
      />
      <label
        className="mart-product-price-filters-label"
        htmlFor={eachPrice.id}
      >
        {"<="} {eachPrice.price}
      </label>
    </div>
  );
};

export default ProductsPriceFilters;

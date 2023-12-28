import { useEffect, useRef, useState } from "react";
import "./index.css";

const ProductsCategoryFilters = (props) => {
  const [categoryCheckedStatus, setCategoryCheckedStatus] = useState(false);
  const { eachCategory, unCheckedCategory, checkedCategoryBox } = props;
  const stopFirstRender = useRef(true);

  useEffect(() => {
    if (stopFirstRender.current) {
      stopFirstRender.current = false;
      return;
    }

    if (categoryCheckedStatus) {
      checkedCategoryBox(eachCategory.category);
    } else {
      unCheckedCategory(eachCategory.category);
    }
    //eslint-disable-next-line
  }, [categoryCheckedStatus]);

  const changeStatusCategory = () => {
    setCategoryCheckedStatus((prevState) => !prevState);
  };

  return (
    <div className="d-flex align-items-center mt-3">
      <input
        type="checkbox"
        className="mart-products-category-filters-checkbox"
        value={eachCategory.category}
        id={`${eachCategory.category}+${eachCategory.id}`}
        onChange={changeStatusCategory}
        checked={categoryCheckedStatus}
      />
      <label
        className="mart-product-category-filters-label"
        htmlFor={`${eachCategory.category}+${eachCategory.id}`}
      >
        {eachCategory.category}
      </label>
    </div>
  );
};

export default ProductsCategoryFilters;

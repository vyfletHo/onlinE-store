import React, { useEffect, useState } from "react";
import PropTypes from "prop-types";
import api from "../api";
import { useHistory } from "react-router-dom";
import ProductCard from "./productCard";
// import { Link } from "react-router-dom";
const ProductPage = ({ productId }) => {
  const history = useHistory();
  const [product, setProduct] = useState();
  useEffect(() => {
    api.products.getById(productId).then((data) => setProduct(data));
  });

  const handleClick = () => {
    history.push("/products");
  };
  if (product) {
    return (
      <div className="container">
        <div className="row ">
          {/* <div className="col"></div> */}

          <div className="col-md-4 offset-md-3  shadow p-4">
            <div className="justify-content-center">
              <h1>{product.name}</h1>
              {/* <img
                src={image}
                className="img-fluid rounded-start"
                alt="..."
                width="110"
                height="50"
              /> */}
              <h2>Товар:{product.merchandise.name}</h2>
              <h2>Цена:{product.price} ₽</h2>
              <button
                className="btn btn-warning btn-all-product"
                onClick={handleClick}
              >
                Все товары
              </button>
            </div>
            {/* <ProductCard product={product} /> */}
          </div>
          {/* <div className="col"></div> */}
        </div>
      </div>
    );
  } else {
    return <h1>Loading...</h1>;
  }
};

ProductPage.propTypes = {
  productId: PropTypes.string.isRequired,
};
export default ProductPage;

import React, { useState } from "react";
import Sizes from "./sizes";
import BookMark from "./bookmark";
import { Link } from "react-router-dom";
import PropTypes from "prop-types";
import ProductTable from "./productTable";
import ProductCard from "./productCard";
const Product = ({
  _id,
  products,
  product,
  name,
  size,
  merchandise,
  price,
  image,
  handleClick,
  columns,
  component,
}) => {
  return (
    // <ProductCard />
    <>
      <tr key={_id}>
        <td>
          <div className="card  mb-3">
            <div className="row g-0">
              <div className="col-md-4">
                <img
                  src={image}
                  className="img-fluid rounded-start"
                  alt="..."
                  width="110"
                  height="50"
                ></img>
              </div>
              <div className="col-md-8">
                <div className="card-body bg-light">
                  <h5 className="card-title">{name}</h5>
                  <p className="card-text"></p>
                  <p className="card-text ">
                    {price} ₽
                    <Link to={`/products/${merchandise._id}`}>
                      {/* {merchandise.name} */}
                      <div className=" d-flex justify-content-end ">
                        <button
                          className="btn
                        btn-warning"
                        >
                          Открыть- карточку
                        </button>
                      </div>
                    </Link>
                  </p>
                </div>
              </div>
            </div>
          </div>
        </td>
      </tr>
    </>
  );
};

Product.propTypes = {
  onToggleBookMark: PropTypes.func.isRequired,
};

export default Product;

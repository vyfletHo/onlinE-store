import React from "react";
import Product from "./product";
import PropTypes from "prop-types";
import TableHeader from "./tableHeader";
import { Link } from "react-router-dom";

const ProductTable = ({
  // _id,
  image,
  name,
  price,
  product,
  products,
  onToggleBookMark,
  selectedSort,
  onSort,
  ...rest
}) => {
  const columns = {
    price: {
      path: "price",
      price: "Цене",
      // component: (product) => (
      //   <Link to={`/products/ ${product._id}`}>{product.name}</Link>
      // ),
    },
  };

  return (
    <>
      <table className="col-6 m-2">
        <thead>
          <th>Сортировать по:</th>
          <TableHeader {...{ onSort, selectedSort, columns }} />
        </thead>
      </table>

      <table className="table ">
        <thead>
          <tr>
            <th></th>
          </tr>
        </thead>
        <tbody>
          {products.map((product) => (
            <Product {...rest} {...product} key={product._id} />
          ))}
        </tbody>
      </table>
    </>
  );
};

ProductTable.propTypes = {
  products: PropTypes.array.isRequired,
  onSort: PropTypes.func.isRequired,
  selectedSort: PropTypes.object.isRequired,
};

export default ProductTable;

// iter = path

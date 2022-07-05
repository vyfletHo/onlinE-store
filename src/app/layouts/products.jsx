import React from "react";
import { useParams } from "react-router-dom";
import ProductPage from "../components/productPage";
import ProductsList from "../components/productsList";

const Products = () => {
  const params = useParams();
  const { productId } = params;
  return (
    <>{productId ? <ProductPage productId={productId} /> : <ProductsList />}</>
  );
};

export default Products;

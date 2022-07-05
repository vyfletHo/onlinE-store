import React, { useState, useEffect } from "react";
import Pagination from "./pagination";
import { paginate } from "../utils/paginate";
import PropTypes from "prop-types";
import GroupList from "./groupList";
import api from "../api";
import ProductTable from "./productTable";
import _ from "lodash";

const ProductsList = () => {
  const [currentPage, setCurrentPage] = useState(1);
  const [merchandises, setMerchandise] = useState();
  const [searchQuery, setSeachQuery] = useState("");
  // const [merchandises, setMerchandise] = useState(
  //   api.merchandisesApi.fetchAll()
  // );
  const [selectedMerch, setSelectedMerch] = useState();
  const [sortBy, setSortBy] = useState({ path: "price", order: "asc" });
  const pageSize = 4;

  // const [products, setProducts] = useState(api.products.fetchAll());
  const [products, setProducts] = useState();

  useEffect(() => {
    api.products.fetchAll().then((data) => setProducts(data));
  }, []);
  //////////////////////////////////////////////
  useEffect(() => {
    api.merchandisesApi.fetchAll().then((data) => setMerchandise(data));
  }, []);
  useEffect(() => {
    setCurrentPage(1);
  }, [selectedMerch, searchQuery]);

  const handleMerchandiseSelect = (item) => {
    if (searchQuery !== "") setSeachQuery("");
    setSelectedMerch(item);
  };
  const handleSearchQuery = ({ target }) => {
    setSelectedMerch(undefined);
    setSeachQuery(target.value);
  };

  const handlePageChange = (pageIndex) => {
    setCurrentPage(pageIndex);
  };

  const handleSort = (item) => {
    setSortBy(item);
  };
  if (products) {
    const filteredProducts = searchQuery
      ? products.filter(
          (product) =>
            product.name.toLowerCase().indexOf(searchQuery.toLowerCase()) !== -1
        )
      : selectedMerch
      ? products.filter(
          (product) =>
            JSON.stringify(product.merchandise) ===
            JSON.stringify(selectedMerch)
        )
      : products;

    const count = filteredProducts.length;
    const sortedProducts = _.orderBy(
      filteredProducts,
      [sortBy.path],
      [sortBy.order]
    );
    const productCrop = paginate(sortedProducts, currentPage, pageSize);
    const clearFilter = () => {
      setSelectedMerch(undefined);
    };

    return (
      <div className="container">
        <div className="d-flex  justify-content-center row">
          {merchandises && (
            <div className="d-flex flex-column flex-shirink-0 p-3 col-2">
              <h5>Тип товара:</h5>
              <GroupList
                selectedItem={selectedMerch}
                items={merchandises}
                onItemSelect={handleMerchandiseSelect}
                valueProperty="_id"
                contentProperty="name"
              />
              <button className="btn btn-secondary mt-2" onClick={clearFilter}>
                Очистить
              </button>
            </div>
          )}
          <div className="d-flex flex-column col-8 ">
            <input
              type="text"
              name="searchQuery"
              placeholder="Search..."
              onChange={handleSearchQuery}
              value={searchQuery}
            />
            {count > 0 && (
              <ProductTable
                products={productCrop}
                onSort={handleSort}
                selectedSort={sortBy}
              />
            )}
            <div className="d-flex justify-content-center">
              <Pagination
                itemsCount={count}
                pageSize={pageSize}
                currentPage={currentPage}
                onPageChange={handlePageChange}
              />
            </div>
          </div>
        </div>
      </div>
    );
  }
  return "loading...";
};
ProductsList.propTypes = {
  products: PropTypes.array,
};

export default ProductsList;

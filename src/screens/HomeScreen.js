/** @format */

import React, { useState, useEffect } from "react";
import Product from "../Components/Product";

const HomeScreen = () => {
  const [localStorageProducts, setLocalStorageProducts] = useState([]);
  const handleSubmit = (e) => {
    e.preventDefault();
    console.log(e.target.id);
  };

  useEffect(() => {
    const productsFromLocalStorage = JSON.parse(
      localStorage.getItem("product")
    );

    if (productsFromLocalStorage) {
      setLocalStorageProducts(productsFromLocalStorage);
    }
  }, []);

  return <Product products={localStorageProducts} submit={handleSubmit} />;
};

export default HomeScreen;

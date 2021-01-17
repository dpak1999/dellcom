/** @format */

import React, { useEffect, useContext } from "react";
import Product from "../Components/Product";
import { CartContext } from "../context";

const HomeScreen = () => {
  const { handleSubmit, localStorageProducts } = useContext(CartContext);

  useEffect(() => {
    const data = JSON.parse(localStorage.getItem("cart"));
    if (!data) {
      localStorage.setItem("cart", "[]");
    }
  }, []);

  return <Product products={localStorageProducts} submit={handleSubmit} />;
};

export default HomeScreen;

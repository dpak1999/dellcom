import React from "react";
import Product from "../Components/Product";
import products from "../data/products";

const HomeScreen = () => {
  const handleSubmit = (e) => {
    e.preventDefault();
    console.log(e.target.id);
  };

  return <Product products={products} submit={handleSubmit} />;
};

export default HomeScreen;

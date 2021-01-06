/** @format */

import React, { useState, useEffect } from "react";
import { Container } from "react-bootstrap";
import FormComponent from "../Components/FormComponent";

const AddProductScreen = () => {
  const [products, setProducts] = useState([]);

  const addProduct = (product) => {
    const newProduct = [product, ...products];
    setProducts(newProduct);
    console.log(newProduct);
  };

  return (
    <Container>
      <h1 className="text-center">Add Product</h1>
      <FormComponent addProduct={addProduct} />
    </Container>
  );
};

export default AddProductScreen;

/** @format */

import React, { useState, useEffect } from "react";
import { Container } from "react-bootstrap";
import FormComponent from "../Components/FormComponent";

const AddProductScreen = () => {
  const [products, setProducts] = useState([]);

  const addProduct = (product) => {
    const newProduct = [product, ...products];
    setProducts(newProduct);

    localStorage.setItem("product", JSON.stringify(newProduct));
  };

  useEffect(() => {
    const product = JSON.parse(localStorage.getItem("product"));
    if (product) {
      setProducts(product);
    }
  }, []);

  return (
    <Container>
      <h1 className="text-center">Add Product</h1>
      <FormComponent addProduct={addProduct} />
    </Container>
  );
};

export default AddProductScreen;

/** @format */

import React, { useEffect, useContext } from "react";
import { CartContext } from "../context";
import { Container } from "react-bootstrap";
import FormComponent from "../Components/FormComponent";

const AddProductScreen = () => {
  const { addProduct } = useContext(CartContext);
  useEffect(() => {
    const data = JSON.parse(localStorage.getItem("product"));
    if (!data) {
      localStorage.setItem("product", "[]");
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

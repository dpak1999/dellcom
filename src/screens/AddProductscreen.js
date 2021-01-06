/** @format */

import React from "react";
import { Container } from "react-bootstrap";
import FormComponent from "../Components/FormComponent";

const AddProductScreen = () => {
  const submitHandler = (e) => {
    e.preventDefault();
    console.log("item added");
  };

  return (
    <Container>
      <h1 className="text-center">Add Product</h1>
      <FormComponent submitHandler={submitHandler} />
    </Container>
  );
};

export default AddProductScreen;

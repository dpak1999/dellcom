/** @format */

import React, { useState } from "react";
import { Form, Button } from "react-bootstrap";

const FormComponent = (props) => {
  const [name, setName] = useState("");
  const [price, setPrice] = useState(0);
  // const [brand, setBrand] = useState("");
  const [category, setCategory] = useState("");
  const [countInStock, setCountInStock] = useState(1);
  const [description, setDescription] = useState("");
  return (
    <Form onSubmit={props.submitHandler}>
      <Form.Group controlId="name">
        <Form.Label>Name</Form.Label>
        <Form.Control
          type="text"
          placeholder="Enter name"
          value={name}
          onChange={(e) => setName(e.target.value)}
        ></Form.Control>
      </Form.Group>

      <Form.Group controlId="price">
        <Form.Label>Price</Form.Label>
        <Form.Control
          type="number"
          placeholder="Enter price"
          value={price}
          onChange={(e) => setPrice(e.target.value)}
        ></Form.Control>
      </Form.Group>

      {/* <Form.Group controlId="brand">
        <Form.Label>Brand</Form.Label>
        <Form.Control
          type="text"
          placeholder="Enter brand"
          value={brand}
        //   onChange={(e) => setBrand(e.target.value)}
        ></Form.Control>
      </Form.Group> */}

      <Form.Group controlId="countInStock">
        <Form.Label>Count In Stock</Form.Label>
        <Form.Control
          type="number"
          placeholder="Enter countInStock"
          value={countInStock}
          onChange={(e) => setCountInStock(e.target.value)}
        ></Form.Control>
      </Form.Group>

      <Form.Group controlId="category">
        <Form.Label>Category</Form.Label>
        <Form.Control
          type="text"
          placeholder="Enter category"
          value={category}
          onChange={(e) => setCategory(e.target.value)}
        ></Form.Control>
      </Form.Group>

      <Form.Group controlId="description">
        <Form.Label>Description</Form.Label>
        <Form.Control
          type="text"
          placeholder="Enter description"
          value={description}
          onChange={(e) => setDescription(e.target.value)}
        ></Form.Control>
      </Form.Group>
      <div className="text-center">
        <Button type="submit" variant="primary">
          Add Item
        </Button>
      </div>
    </Form>
  );
};

export default FormComponent;

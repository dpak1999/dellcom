/** @format */

import React, { useState } from "react";
import { Form, Button } from "react-bootstrap";
import { v4 as uuidv4 } from "uuid";

const FormComponent = (props) => {
  const [name, setName] = useState("");
  const [price, setPrice] = useState(0);
  const [category, setCategory] = useState("");
  const [image, setImage] = useState(
    "https://www.autoserviceworld.com/wp-content/uploads/2016/01/new-product.jpg"
  );
  const [countInStock, setCountInStock] = useState(1);
  const [description, setDescription] = useState("");
  const [status, setStatus] = useState("inactive");

  const handleSubmit = (e) => {
    e.preventDefault();

    props.addProduct({
      id: uuidv4(),
      name: name,
      image: image,
      price: parseInt(price),
      category: category,
      countInStock: countInStock,
      description: description,
      status: status,
      count: 1,
      totalPrice: parseInt(price),
    });

    setName("");
    setPrice(0);
    setCategory("");
    setCountInStock(1);
    setDescription("");

    console.log(status);
  };
  return (
    <Form onSubmit={handleSubmit}>
      <Form.Group controlId="name">
        <Form.Label>Name</Form.Label>
        <Form.Control
          required
          type="text"
          placeholder="Enter name"
          value={name}
          onChange={(e) => setName(e.target.value)}
        ></Form.Control>
      </Form.Group>
      <Form.Group controlId="name">
        <Form.Label>Status</Form.Label>
        <Form.Control
          required
          type="text"
          value={status}
          onChange={(e) => setStatus(e.target.value)}
        ></Form.Control>
      </Form.Group>
      <Form.Group controlId="price">
        <Form.Label>Price</Form.Label>
        <Form.Control
          required
          type="number"
          placeholder="Enter price"
          value={price}
          onChange={(e) => setPrice(e.target.value)}
        ></Form.Control>
      </Form.Group>

      <Form.Group controlId="image">
        <Form.Label>Image</Form.Label>
        <Form.Control
          required
          type="string"
          placeholder="Enter image url"
          value={image}
          onChange={(e) => setImage(e.target.value)}
        ></Form.Control>
      </Form.Group>

      <Form.Group controlId="countInStock">
        <Form.Label>Count In Stock</Form.Label>
        <Form.Control
          required
          type="number"
          placeholder="Enter countInStock"
          value={countInStock}
          onChange={(e) => setCountInStock(e.target.value)}
        ></Form.Control>
      </Form.Group>

      <Form.Group controlId="category">
        <Form.Label>Category</Form.Label>
        <Form.Control
          required
          type="text"
          placeholder="Enter category"
          value={category}
          onChange={(e) => setCategory(e.target.value)}
        ></Form.Control>
      </Form.Group>

      <Form.Group controlId="description">
        <Form.Label>Description</Form.Label>
        <Form.Control
          required
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

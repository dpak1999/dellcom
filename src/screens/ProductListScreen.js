import React from "react";
import { Button, Col, Container, Row, Table } from "react-bootstrap";
import products from "../data/products";
import { LinkContainer } from "react-router-bootstrap";

const ProductListScreen = () => {
  return (
    <Container>
      <Row className="align-items-center">
        <Col>
          <h1>Products</h1>
        </Col>
        <Col className="text-right">
          <LinkContainer to="/add">
            <Button className="my-3">Create Product</Button>
          </LinkContainer>
        </Col>
      </Row>
      <Table striped bordered hover responsive className="table-sm">
        <thead>
          <tr>
            <th>ID</th>
            <th>NAME</th>
            <th>DESCRIPTION</th>
            <th>CATEGORY</th>
            <th>PRICE</th>
            <th>STOCK</th>
          </tr>
        </thead>

        <tbody>
          {products.map((product) => (
            <tr key={product.id}>
              <td>{product.id}</td>
              <td>{product.name}</td>
              <td>{product.description}</td>
              <td>{product.category}</td>
              <td>Rs.{product.price}</td>
              <td>{product.countInStock}</td>
            </tr>
          ))}
        </tbody>
      </Table>
    </Container>
  );
};

export default ProductListScreen;

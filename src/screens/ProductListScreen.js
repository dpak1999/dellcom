/** @format */

import React, { useEffect, useState } from "react";
import { Button, Col, Container, Row, Table } from "react-bootstrap";
import { LinkContainer } from "react-router-bootstrap";

const ProductListScreen = () => {
  const [allProducts, setAllProducts] = useState([]);

  useEffect(() => {
    const productsFromLocalStorage = JSON.parse(
      localStorage.getItem("product")
    );

    if (productsFromLocalStorage) {
      setAllProducts(productsFromLocalStorage);
    }
  }, []);

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
            <th>STATUS</th>
            <th></th>
          </tr>
        </thead>

        <tbody>
          {allProducts.map((product) => (
            <tr key={product.id}>
              <td>{product.id}</td>
              <td>{product.name}</td>
              <td>{product.description}</td>
              <td>{product.category}</td>
              <td>Rs.{product.price}</td>
              <td>{product.countInStock}</td>
              <td>{product.status}</td>
              <td>
                <LinkContainer to={`/edit/${product.id}`}>
                  <Button>Edit Product</Button>
                </LinkContainer>
              </td>
            </tr>
          ))}
        </tbody>
      </Table>
    </Container>
  );
};

export default ProductListScreen;

/** @format */

import React from "react";
import { Card, Button, Container, Row, Col } from "react-bootstrap";

const Product = ({ products, submit }) => {
  const product = products.map((item) => {
    return (
      <Col lg={4} md={6} sm={12} key={item.id}>
        <Card className="my-3">
          <Card.Img
            variant="top"
            style={{ height: "250px" }}
            src={item.image}
          />
          <Card.Body>
            <h4>{item.name}</h4>
            <p>Rs. {item.price}</p>
            <Button block id={item.id} onClick={submit} variant="primary">
              Add to Cart
            </Button>
          </Card.Body>
        </Card>
      </Col>
    );
  });
  return (
    <Container className="mt-3">
      <Row>{product}</Row>
    </Container>
  );
};

export default Product;

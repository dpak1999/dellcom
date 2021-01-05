import React from "react";
import { Card, Button, Container, Row, Col } from "react-bootstrap";
import products from "../data/products";

const Product = () => {
  const product = products.map((item) => {
    return (
      <Col lg={4} md={6} sm={12} key={item.id}>
        <Card className="my-3">
          <Card.Img variant="top" src={item.image} />
          <Card.Body>
            <Card.Title>{item.name}</Card.Title>
            <Card.Title>{item.price}</Card.Title>
            <Button variant="primary">Add to Cart</Button>
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

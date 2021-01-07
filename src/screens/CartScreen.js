/** @format */

import React, { useEffect, useState } from "react";
import { Container, Row, ListGroup, Image, Button, Col } from "react-bootstrap";

const CartScreen = () => {
  const [cartItems, setCartItems] = useState([]);
  useEffect(() => {
    const data = JSON.parse(localStorage.getItem("cart"));
    if (data) {
      setCartItems(data);
    }
  }, []);

  const handleClick = (e) => {
    console.log("clicked");
  };
  return (
    <Container>
      <h1>Your cart</h1>
      <ListGroup>
        {cartItems.map((item) => {
          return (
            <ListGroup className="my-3">
              <ListGroup.Item>
                <Row>
                  <Col sm={2}>
                    <Image src={item.image} thumbnail />
                  </Col>
                  <Col className="my-auto" sm={4}>
                    {item.name}
                  </Col>
                  <Col className="my-auto" sm={4}>
                    <i
                      onClick={handleClick}
                      className="lni lni-circle-plus mr-2"
                    ></i>
                    {item.countInStock}
                    <i className="lni lni-circle-minus ml-2"></i>
                  </Col>
                  <Col className="my-auto" sm={2}>
                    Rs {item.price}
                  </Col>
                </Row>
              </ListGroup.Item>
            </ListGroup>
          );
        })}
      </ListGroup>
      <Button variant="warning" className="float-right mb-4">
        Proceed to buy
      </Button>
    </Container>
  );
};

export default CartScreen;

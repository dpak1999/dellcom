/** @format */

import React, { useContext, useEffect, useState } from "react";
import { PayPalButton } from "react-paypal-button-v2";
import { CartContext } from "../context";
import { Container, Row, ListGroup, Image, Col } from "react-bootstrap";

const CartScreen = () => {
  const [sdk, setSdk] = useState(false);
  const [paid, setPaid] = useState(false);
  const { handleDecrement, handleIncrement, cartItems } = useContext(
    CartContext
  );

  useEffect(() => {
    const clientId =
      "AZbFlnp5__3C6L3PH1EDEq7UEN97Zd9jaZm0U1yu8fYM-j31c2MYKEGYIE8tGj_ubwL53DeWXFYOEs2G";

    const payPalScript = async () => {
      const script = document.createElement("script");
      script.type = "text/javascript";
      script.src = `https://www.paypal.com/sdk/js?client-id=${clientId}`;
      script.async = true;
      script.onload = () => {
        setSdk(true);
      };
      document.body.appendChild(script);
    };

    if (!window.paypal) {
      payPalScript();
    } else {
      setSdk(true);
      setPaid(true);
    }
  }, [paid]);

  const successHandler = (paymentResult) => {
    setPaid(true);
    console.log(paymentResult);
    console.log("paid");
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
                      id={item.id}
                      onClick={handleIncrement}
                      className="lni lni-circle-plus mr-2"
                    ></i>
                    {item.count}
                    <i
                      id={item.id}
                      onClick={handleDecrement}
                      className="lni lni-circle-minus ml-2"
                    ></i>
                  </Col>
                  <Col className="my-auto" sm={2}>
                    Rs {item.price}
                  </Col>
                </Row>
              </ListGroup.Item>
            </ListGroup>
          );
        })}
        <div className="text-right">
          {paid ? (
            <h2>Order paid</h2>
          ) : !sdk ? (
            <h1>Loading...</h1>
          ) : (
            <PayPalButton amount={200} onSuccess={successHandler} />
          )}
        </div>
      </ListGroup>
    </Container>
  );
};

export default CartScreen;

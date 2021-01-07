/** @format */

import React, { useState, useEffect } from "react";
import Product from "../Components/Product";

const HomeScreen = () => {
  const [localStorageProducts, setLocalStorageProducts] = useState([
    {
      id: 1,
      name: "Airpods Wireless Bluetooth Headphones",
      image: "/images/airpods.jpg",
      description:
        "Bluetooth technology lets you connect it with compatible devices wirelessly High-quality AAC audio offers immersive listening experience Built-in microphone allows you to take calls while working",
      brand: "Apple",
      category: "Electronics",
      price: 89.99,
      countInStock: 10,
      rating: 4.5,
      numReviews: 12,
    },
  ]);

  const searchArray = (id, array) => {
    for (var i = 0; i < array.length; i++) {
      if (array[i].id === id) {
        return array[i];
      }
    }
  };

  useEffect(() => {
    const data = JSON.parse(localStorage.getItem("cart"));
    if (!data) {
      localStorage.setItem("cart", "[]");
    }

    const productsFromLocalStorage = JSON.parse(
      localStorage.getItem("product")
    );

    if (productsFromLocalStorage) {
      setLocalStorageProducts(productsFromLocalStorage);
    }
  }, []);

  const handleSubmit = (e) => {
    e.preventDefault();
    const productData = JSON.parse(localStorage.getItem("product"));
    const getCart = searchArray(e.target.id, productData);

    const cartItem = JSON.parse(localStorage.getItem("cart"));
    cartItem.push(getCart);
    localStorage.setItem("cart", JSON.stringify(cartItem));
  };

  return <Product products={localStorageProducts} submit={handleSubmit} />;
};

export default HomeScreen;

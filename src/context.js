/** @format */

import { createContext, useState, useEffect } from "react";

export const CartContext = createContext();

const ContextProvider = ({ children }) => {
  const [count, setCount] = useState(0);
  const [cartItems, setCartItems] = useState([]);
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

  const handleSubmit = (e) => {
    e.preventDefault();
    const productId = e.target.id;
    const productData = JSON.parse(localStorage.getItem("product"));
    const getCart = searchArray(productId, productData);

    const cartItem = JSON.parse(localStorage.getItem("cart"));

    if (!searchArray(productId, cartItem)) {
      cartItem.push(getCart);
      localStorage.setItem("cart", JSON.stringify(cartItem));
    } else {
      const indexOfProduct = cartItem.findIndex((e) => e.id === productId);
      let newArray = [...cartItem];
      newArray[indexOfProduct] = {
        ...newArray[indexOfProduct],
        count: newArray[indexOfProduct].count + 1,
      };
      localStorage.setItem("cart", JSON.stringify(newArray));
    }
  };

  const handleIncrement = (e) => {
    const productId = e.target.id;
    const cartItem = JSON.parse(localStorage.getItem("cart"));
    const indexOfProduct = cartItem.findIndex((e) => e.id === productId);
    let newArray = [...cartItem];
    newArray[indexOfProduct] = {
      ...newArray[indexOfProduct],
      count: newArray[indexOfProduct].count + 1,
    };
    localStorage.setItem("cart", JSON.stringify(newArray));
  };

  const handleDecrement = (e) => {
    const productId = e.target.id;
    const cartItem = JSON.parse(localStorage.getItem("cart"));
    const indexOfProduct = cartItem.findIndex((e) => e.id === productId);
    let newArray = [...cartItem];
    newArray[indexOfProduct] = {
      ...newArray[indexOfProduct],
      count: newArray[indexOfProduct].count - 1,
    };
    localStorage.setItem("cart", JSON.stringify(newArray));
  };

  const addProduct = (product) => {
    const newProduct = JSON.parse(localStorage.getItem("product"));
    newProduct.push(product);

    localStorage.setItem("product", JSON.stringify(newProduct));
  };

  useEffect(() => {
    const data = JSON.parse(localStorage.getItem("cart"));
    if (data) {
      setCartItems(data);
      setCount(data.length);
    }

    const productsFromLocalStorage = JSON.parse(
      localStorage.getItem("product")
    );

    if (productsFromLocalStorage) {
      setLocalStorageProducts(productsFromLocalStorage);
    }
  }, []);

  return (
    <CartContext.Provider
      value={{
        handleSubmit,
        localStorageProducts,
        count,
        handleIncrement,
        handleDecrement,
        cartItems,
        addProduct,
      }}
    >
      {children}
    </CartContext.Provider>
  );
};

export default ContextProvider;

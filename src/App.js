/** @format */

import React from "react";
import { BrowserRouter as Router, Route } from "react-router-dom";
import NavbarComponent from "./Components/NavbarComponent";
import AddProductScreen from "./screens/AddProductscreen";
import HomeScreen from "./screens/HomeScreen";
import ProductEditScreen from "./screens/ProductEditScreen";
import ProductListScreen from "./screens/ProductListScreen";

function App() {
  return (
    <Router>
      <NavbarComponent />
      <Route path="/" exact component={HomeScreen} />
      <Route path="/backend" exact component={ProductListScreen} />
      <Route path="/add" exact component={AddProductScreen} />
      <Route path="/edit/:id" exact component={ProductEditScreen} />
    </Router>
  );
}

export default App;

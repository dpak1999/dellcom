import React from "react";
import { BrowserRouter as Router, Route } from "react-router-dom";
import NavbarComponent from "./Components/NavbarComponent";
import HomeScreen from "./screens/HomeScreen";
import ProductListScreen from "./screens/ProductListScreen";

function App() {
  return (
    <Router>
      <NavbarComponent />
      <Route path="/" exact component={HomeScreen} />
      <Route path="/admin" exact component={ProductListScreen} />
    </Router>
  );
}

export default App;

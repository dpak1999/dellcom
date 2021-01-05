import React from "react";
import { BrowserRouter as Router, Route } from "react-router-dom";
import NavbarComponent from "./Components/NavbarComponent";
import HomeScreen from "./screens/HomeScreen";

function App() {
  return (
    <Router>
      <NavbarComponent />
      <Route path="/" exact component={HomeScreen} />
    </Router>
  );
}

export default App;

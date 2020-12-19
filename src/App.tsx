import React from "react";
import logo from "./logo.svg";
import "./App.css";
import dummy from "./assets/dummy";
import ProductItem from "./components/Item";

function App() {
  return (
    <div className="masonry-container">
      {dummy.map((item) => (
        <ProductItem item={item} />
      ))}
    </div>
  );
}

export default App;

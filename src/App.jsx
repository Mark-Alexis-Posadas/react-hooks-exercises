import React, { useState } from "react";
import MyContext from "./MyContext";
import { Product } from "./Product/Product";
import { Navbar } from "./components/Navbar";

const App = () => {
  const [products, setProducts] = useState([]);

  const handleAddToCart = (product) => {
    setProducts([...products, product]); // Fixing state update logic
  };

  return (
    <MyContext.Provider value={{ products, handleAddToCart }}>
      {" "}
      {/* Fixing value to pass an object */}
      <Navbar />
      <Product />
    </MyContext.Provider>
  );
};

export default App;

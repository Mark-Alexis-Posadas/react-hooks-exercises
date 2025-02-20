import React, { useState } from "react";
import MyContext from "./MyContext";
import { Product } from "./Product/Product";
import { Navbar } from "./components/Navbar";

const App = () => {
  const [products, setProducts] = useState([]);

  const handleAddToCart = (product) => {
    const existingItem = products.findIndex((c) => c.id === product.id);
    console.log(existingItem);
    if (existingItem !== -1) {
      const updatedCart = [...products];
      updatedCart[existingItem].quantity += 1;
      setProducts(updatedCart);
    } else {
      setProducts([...products, { ...product, quantity: 1 }]);
    }
  };

  const totalItemsInCart = products.reduce(
    (total, product) => total + product.quantity,
    0
  );

  return (
    <MyContext.Provider value={{ products, handleAddToCart, totalItemsInCart }}>
      <Navbar />
      <Product />
    </MyContext.Provider>
  );
};

export default App;

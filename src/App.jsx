import React, { useState } from "react";
import MyContext from "./MyContext";
import { Product } from "./Product/Product";
import { Navbar } from "./components/Navbar";

const App = () => {
  const [products, setProducts] = useState([]);

  const handleAddToCart = (product) => {
    const existingItem = products.findIndex((c) => c.id === product.id);
    if (existingItem !== -1) {
      const updatedCart = [...products];
      updatedCart[existingItem].quantity += 1;
      setProducts(updatedCart);
    } else {
      setProducts([...products, { ...product, quantity: 1 }]);
    }
  };

  const handleIncrement = (productId) => {
    const updatedCart = products.map((product) =>
      product.id === productId
        ? { ...product, quantity: product.quantity + 1 }
        : product
    );
    setProducts(updatedCart);
  };

  const handleDecrement = (productId) => {
    const updatedCart = products.map((product) =>
      product.id === productId && product.quantity > 1
        ? { ...product, quantity: product.quantity - 1 }
        : product
    );
    setProducts(updatedCart);
  };

  const totalItemsInCart = products.reduce(
    (total, product) => total + product.quantity,
    0
  );

  return (
    <MyContext.Provider
      value={{
        products,
        handleAddToCart,
        totalItemsInCart,
        handleIncrement,
        handleDecrement,
      }}
    >
      <Navbar />
      <Product />
    </MyContext.Provider>
  );
};

export default App;

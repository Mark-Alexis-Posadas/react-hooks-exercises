import React, { useContext } from "react";
import MyContext from "../MyContext";
import CartItem from "./CartItem";

export const CartModal = () => {
  const { products } = useContext(MyContext);

  return (
    <ul>
      {products.map((product) => (
        <CartItem product={product} key={product.id} />
      ))}
    </ul>
  );
};

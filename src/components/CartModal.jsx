import React, { useContext } from "react";
import MyContext from "../MyContext";
import CartItem from "./CartItem";

export const CartModal = () => {
  const { products } = useContext(MyContext);
  const totalPrice = products
    .reduce((total, item) => total + item.price * item.quantity, 0)
    .toFixed(2);
  return (
    <ul>
      {products.map((product) => (
        <CartItem product={product} key={product.id} />
      ))}

      <h1>
        Total Price <span className="font-bold">${totalPrice}</span>
      </h1>
    </ul>
  );
};

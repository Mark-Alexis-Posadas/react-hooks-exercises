import React, { useContext, useState } from "react";
import { CartModal } from "./CartModal";
import MyContext from "../MyContext";

export const Navbar = () => {
  const [isToggleCart, setIsToggleCart] = useState(true);
  const { totalItemsInCart } = useContext(MyContext);
  return (
    <nav className="p-4 border-b border-slate-300 shadow-md bg-white">
      <button onClick={() => setIsToggleCart(!isToggleCart)}>
        Cart ({totalItemsInCart})
      </button>
      {isToggleCart && <CartModal />}
    </nav>
  );
};

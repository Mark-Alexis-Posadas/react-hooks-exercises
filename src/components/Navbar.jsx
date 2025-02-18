import React, { useState } from "react";
import { CartModal } from "./CartModal";

export const Navbar = () => {
  const [isToggleCart, setIsToggleCart] = useState(true);

  return (
    <nav className="p-4 border-b border-slate-300 shadow-md bg-white">
      <button onClick={() => setIsToggleCart(!isToggleCart)}>Cart</button>
      {isToggleCart && <CartModal />}
    </nav>
  );
};

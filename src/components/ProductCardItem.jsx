import React, { useContext } from "react";
import MyContext from "../MyContext";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faPlus, faMinus } from "@fortawesome/free-solid-svg-icons";

export default function ProductCardItem({ product }) {
  const { products, handleAddToCart, handleIncrement, handleDecrement } =
    useContext(MyContext);
  console.log(products);

  return (
    <div className="border border-gray-300 rounded-lg p-4 w-full m-4 shadow-lg hover:shadow-xl transition-shadow">
      <img
        src={product.image}
        alt={product.title}
        className="w-full h-48 object-cover rounded-md"
      />
      <div className="pt-4">
        <h2 className="text-xl font-semibold text-gray-800">{product.title}</h2>
        <p className="text-sm text-gray-600 truncate">{product.description}</p>
        <span className="block text-lg font-bold text-gray-900 mt-2">
          ${product.price}
        </span>

        <div className="flex items-center justify-between">
          <button
            className="bg-blue-500 text-white px-4 py-2 rounded-md hover:bg-blue-600 transition-colors"
            onClick={() => handleAddToCart(product)}
          >
            Add to Cart
          </button>
        </div>
      </div>
    </div>
  );
}

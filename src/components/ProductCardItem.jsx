import React, { useContext } from "react";
import MyContext from "../MyContext";

export default function ProductCardItem({ product }) {
  const { handleAddToCart } = useContext(MyContext); // Destructuring to get handleAddToCart

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
        <button
          className="mt-4 bg-blue-500 text-white px-4 py-2 rounded-md hover:bg-blue-600 transition-colors"
          onClick={() => handleAddToCart(product)} // Calling handleAddToCart
        >
          Add to Cart
        </button>
      </div>
    </div>
  );
}

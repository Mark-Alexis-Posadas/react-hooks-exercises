import { useContext } from "react";
import MyContext from "../MyContext";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faMinus, faPlus } from "@fortawesome/free-solid-svg-icons";

export default function CartItem({ product }) {
  const { handleIncrement, handleDecrement } = useContext(MyContext);
  return (
    <li className="flex items-center justify-between p-4 border-b border-gray-300">
      <div className="flex items-center">
        <img
          src={product.image}
          alt={product.title}
          className="w-20 h-20 object-cover rounded-md mr-4"
        />
        <div>
          <h3 className="text-lg font-semibold text-gray-800">
            {product.title}
          </h3>
          <p className="text-sm text-gray-500">{product.category}</p>
          <div className="flex items-center gap-4 mt-4">
            <button
              className="w-10 h-10 flex items-center justify-center p-3 bg-blue-500 text-white rounded-full hover:bg-blue-400 transition-all duration-300"
              onClick={() => handleIncrement(product.id)}
            >
              <FontAwesomeIcon icon={faPlus} />
            </button>

            <h1 className="text-lg font-semibold">{product.quantity}</h1>

            <button
              className="w-10 h-10 flex items-center justify-center  p-3 bg-blue-500 text-white rounded-full hover:bg-blue-400 transition-all duration-300"
              onClick={() => handleDecrement(product.id)}
            >
              <FontAwesomeIcon icon={faMinus} />
            </button>
          </div>
        </div>
      </div>

      <div className="flex items-center space-x-4">
        <span className="text-sm text-gray-900">
          <span className="text-sm text-gray-500">{product.quantity}</span> x $
          {product.price}
        </span>
        <button className="bg-red-500 text-white px-3 py-1 rounded-md hover:bg-red-600 transition-colors">
          Remove
        </button>
      </div>
    </li>
  );
}

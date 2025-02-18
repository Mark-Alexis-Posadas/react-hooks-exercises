export default function CartItem({ product }) {
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
        </div>
      </div>

      <div className="flex items-center space-x-4">
        <span className="text-lg font-bold text-gray-900">
          ${product.price}
        </span>
        <button className="bg-red-500 text-white px-3 py-1 rounded-md hover:bg-red-600 transition-colors">
          Remove
        </button>
      </div>
    </li>
  );
}

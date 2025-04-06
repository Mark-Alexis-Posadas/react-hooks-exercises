import { useEffect, useState } from "react";
import ProductCardItem from "../components/ProductCardItem";

export const Product = () => {
  const [products, setProducts] = useState([]);
  useEffect(() => {
    const fetchProducts = async () => {
      const response = await fetch("https://fakestoreapi.com/products");
      const data = await response.json();
      setProducts(data);
    };
    fetchProducts();
  }, []);

  return (
    <div className="grid grid-cols-1 md:grid-cols-3 lg:grid-cols-5 gap-3 p-10">
      {products.map((product) => (
        <ProductCardItem product={product} key={product.id} />
      ))}
    </div>
  );
};

import { useState, useMemo } from "react";

const productsData = [
  { id: 1, name: "Laptop", price: 50000 },
  { id: 2, name: "Mouse", price: 1500 },
  { id: 3, name: "Keyboard", price: 3000 },
  { id: 4, name: "Monitor", price: 12000 },
  { id: 5, name: "Headset", price: 2500 },
];

const PracticeOne = () => {
  const [search, setSearch] = useState("");
  const [sort, setSort] = useState("asc");

  const filteredProducts = useMemo(() => {
    console.log("Filtering & Sorting products...");
    let result = productsData.filter((product) =>
      product.name.toLowerCase().includes(search.toLowerCase()),
    );

    result.sort((a, b) =>
      sort === "asc" ? a.price - b.price : b.price - a.price,
    );

    return result;
  }, [search, sort]);

  const totalPrice = useMemo(() => {
    console.log("Calculating total price...");
    return filteredProducts.reduce(
      (total, product) => total + product.price,
      0,
    );
  }, [filteredProducts]);
  return (
    <div style={{ padding: "20px" }}>
      <h1>🛒 Product List</h1>

      {/* SEARCH */}
      <input
        placeholder="Search product..."
        value={search}
        onChange={(e) => setSearch(e.target.value)}
      />

      {/* SORT */}
      <select onChange={(e) => setSort(e.target.value)}>
        <option value="asc">Price Low to High</option>
        <option value="desc">Price High to Low</option>
      </select>

      {/* LIST */}
      <ul>
        {filteredProducts.map((p) => (
          <li key={p.id}>
            {p.name} - ₱{p.price}
          </li>
        ))}
      </ul>

      {/* TOTAL */}
      <h2>Total: ₱{totalPrice}</h2>
    </div>
  );
};

export default PracticeOne;

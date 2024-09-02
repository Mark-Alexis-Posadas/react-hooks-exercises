import { useState } from "react";

const App = () => {
  const [users, setUsers] = useState([
    { id: 1, name: "Alice", age: 30 },
    { id: 2, name: "Bob", age: 24 },
    { id: 3, name: "Charlie", age: 28 },
  ]);

  const handleClick = (id, newName) => {
    setUsers((prev) =>
      prev.map((item) =>
        item.id === id
          ? { ...item, name: item.name === "Bob" ? newName : "Bob" }
          : item
      )
    );
  };

  return (
    <div>
      <div>
        {users.map((user) => (
          <h1
            key={user.id}
            className={`${user.name === "Mario" && "text-green-500"}`}
          >
            {user.name}
          </h1>
        ))}
      </div>

      <button
        className="text-white bg-orange-500 rounded p-2"
        onClick={() => handleClick(2, "Mario")}
      >
        toggle bob
      </button>
    </div>
  );
};

export default App;

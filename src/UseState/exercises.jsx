// import { users } from "./data";
import { v4 as uuidv4 } from "uuid";

// Add an Item: Create a component that maintains an array of objects representing tasks. Each object has an id and name. Implement a form to add a new task to the list.

// Remove an Item: Build a component with an array of objects where each object represents a user with id and name. Display the list and provide a button to remove a user by their id.

// Update an Item: Create a component that manages an array of products. Each product object contains an id, name, and price. Implement functionality to update the price of a product by its id.

// Toggle Status: Develop a component with an array of objects where each object represents a light with an id and status (on or off). Implement functionality to toggle the status of a light by its id.

// Sort Items: Create a component that manages a list of students, where each student object has an id, name, and grade. Implement sorting functionality to sort the students by their grade.

// Filter Items: Build a component that maintains an array of tasks, each with an id, name, and completed status. Implement functionality to filter tasks based on their completion status.

// Add and Edit Items: Develop a component that maintains a list of contacts, where each contact object has an id, name, and phoneNumber. Implement functionality to add a new contact and edit an existing contact's details.

// Bulk Update Items: Create a component that manages an array of items with id and quantity. Implement functionality to update the quantity of all items to a new value.

// Reorder Items: Build a component with an array of objects representing a shopping list, where each object has an id and name. Implement functionality to reorder the items in the list using drag-and-drop.

// Nested Object State: Develop a component that maintains an array of users, where each user object has an id, name, and an array of posts (each post having a title and content). Implement functionality to add a new post to a specific user.
import { useState } from "react";
export const App = () => {
  const [value, setValue] = useState("");
  const [data, setData] = useState([]);

  const handleDelete = (id) => {
    if (window.confirm("Are you sure you want to delete this item?")) {
      const deleteItem = data.filter((item) => item.id !== id);
      setData(deleteItem);
    }
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    if (value.trim() === "") return;
    setData((prev) => [...prev, { name: value, id: uuidv4() }]);
    setValue("");
  };

  return (
    <>
      <ul>
        {data.map((item) => (
          <li key={item.id}>
            {item.name}

            <button
              className="text-white bg-red-600 p-2"
              onClick={() => handleDelete(item.id)}
            >
              delete
            </button>
          </li>
        ))}
      </ul>
      <form onSubmit={handleSubmit}>
        <input
          type="text"
          placeholder="add task"
          value={value}
          onChange={(e) => setValue(e.target.value)}
        />
        <button type="submit">submit</button>
      </form>
    </>
  );
};

export const AddAndEditing = () => {
  const [users, setUsers] = useState([
    { id: 1, name: "Alice", age: 30 },
    { id: 2, name: "Bob", age: 24 },
    { id: 3, name: "Charlie", age: 28 },
    { id: 4, name: "Alexis", age: 28 },
    { id: 5, name: "Durong", age: 28 },
  ]);

  const [isEditing, setIsEditing] = useState(false);

  const handleClick = (id, newName) => {
    if (!isEditing) {
      setUsers((prev) => [...prev, { id: 6, name: "John", age: 27 }]);
      return;
    }

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

export const LikeButton = () => {
  const [isLiked, setIsLiked] = useState(false);
  const [likeCount, setLikeCount] = useState(0);

  const handleLikeClick = () => {
    if (isLiked) {
      setLikeCount(likeCount - 1);
    } else {
      setLikeCount(likeCount + 1);
    }
    setIsLiked(!isLiked);
  };

  return (
    <div className="like-component">
      <button
        className={`like-button ${isLiked ? "liked" : ""}`}
        onClick={handleLikeClick}
      >
        {isLiked ? "Unlike" : "Like"}
      </button>
      <span className="like-count">{likeCount}</span> Likes
    </div>
  );
};

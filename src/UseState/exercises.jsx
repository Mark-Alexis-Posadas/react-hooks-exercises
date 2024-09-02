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
const App = () => {
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

export default App;

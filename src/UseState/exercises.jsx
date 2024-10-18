// import { users } from "./data";
import { v4 as uuidv4 } from "uuid";

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

// 8. Create a dropdown menu component that uses `useState` to manage the visibility of the dropdown.

import { useState } from "react";

export const Hover = () => {
  const [isVisible, setIsVisible] = useState(false);
  const [isVisibleTwo, setIsVisibleTwo] = useState(false);
  function MouseOver() {
    setIsVisible(true);
  }
  function MouseOut() {
    setIsVisible(false);
  }
  function MouseOverTwo() {
    setIsVisibleTwo(true);
  }
  function MouseOutTwo() {
    setIsVisibleTwo(false);
  }
  return (
    <div>
      <ul>
        <li onMouseOver={MouseOver} onMouseOut={MouseOut}>
          hover me
          <ul className={isVisible ? "block" : "hidden"}>
            <li>Link 1</li>
            <li onMouseOver={MouseOverTwo} onMouseOut={MouseOutTwo}>
              Link 1
              <ul className={`ml-10 ${isVisibleTwo ? "block" : "hidden"}`}>
                <li>Link 2</li>
                <li>Link 2</li>
                <li>Link 2</li>
              </ul>
            </li>
            <li>Link 1</li>
          </ul>
        </li>
      </ul>
    </div>
  );
};

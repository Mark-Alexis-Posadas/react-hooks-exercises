import React, { useState } from "react";

export default function TodoItem({
  item,
  index,
  handleToggleTodo,
  handleDeleteTodo,
  handleEditTodo,
}) {
  const [isEditing, setIsEditing] = useState(false);
  const [editText, setEditText] = useState(item.text);

  const handleSaveEdit = () => {
    handleEditTodo(index, editText);
    setIsEditing(false);
  };

  return (
    <li className="flex items-center justify-between p-2 rounded bg-white shadow-md my-2">
      {isEditing ? (
        <div className="flex gap-2">
          <input
            className="p-2 rounded border"
            type="text"
            value={editText}
            onChange={(e) => setEditText(e.target.value)}
          />
          <button
            className="text-white rounded p-1 bg-green-500"
            onClick={handleSaveEdit}
          >
            Save
          </button>
          <button
            className="text-white rounded p-1 bg-gray-500"
            onClick={() => setIsEditing(false)}
          >
            Cancel
          </button>
        </div>
      ) : (
        <span
          onClick={() => handleToggleTodo(index)}
          className={item.completed ? "line-through" : ""}
        >
          {item.text}
        </span>
      )}

      <div className="flex items-center gap-3">
        <button
          className="text-white rounded p-1 bg-blue-500"
          onClick={() => setIsEditing(!isEditing)}
        >
          {isEditing ? "Cancel" : "Edit"}
        </button>
        <button
          className="text-white rounded p-1 bg-red-500"
          onClick={() => handleDeleteTodo(index)}
        >
          Delete
        </button>
      </div>
    </li>
  );
}

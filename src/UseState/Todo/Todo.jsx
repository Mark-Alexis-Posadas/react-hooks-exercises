import { useState } from "react";
import TodoItem from "./TodoItem";

export default function Todo() {
  const [todos, setTodos] = useState([]);
  const [submittedTodo, setSubmittedTodo] = useState("");

  const handleChange = (e) => {
    setSubmittedTodo(e.target.value);
  };

  const handleAddTodo = () => {
    if (submittedTodo.trim() !== "") {
      setTodos([...todos, submittedTodo]);
      setSubmittedTodo("");
    }
  };

  return (
    <div className="flex items-center flex-col mt-10">
      <div className="flex items-center bg-slate-50 rounded p-5 w-[600px]">
        <input
          type="text"
          placeholder="Add todo"
          className="bg-white rounded p-2 shadow-md mr-3"
          value={submittedTodo}
          onChange={handleChange}
        />
        <button
          className="bg-green-500 text-white p-2 rounded"
          onClick={handleAddTodo}
        >
          Add Todo
        </button>
      </div>

      {todos.length > 0 && (
        <ul className="w-[600px] p-5">
          {todos.map((item, index) => (
            <TodoItem key={index} todoItem={item} />
          ))}
        </ul>
      )}
    </div>
  );
}

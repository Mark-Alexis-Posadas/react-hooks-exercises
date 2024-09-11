import React, { useReducer } from "react";
import TodoItem from "./TodoItem";

const initialState = {
  todos: [],
  inputValue: "",
};

const reducer = (state, action) => {
  switch (action.type) {
    case "HANDLE_INPUT_CHANGE":
      return { ...state, inputValue: action.payload };
    case "ADD_TODO":
      return {
        ...state,
        todos: [...state.todos, { text: action.payload, completed: false }],
        inputValue: "",
      };
    case "DELETE_TODO":
      return {
        ...state,
        todos: state.todos.filter((_, index) => index !== action.payload),
      };
    case "TOGGLE_TODO":
      return {
        ...state,
        todos: state.todos.map((todo, index) =>
          index === action.payload
            ? { ...todo, completed: !todo.completed }
            : todo
        ),
      };
    default:
      return state;
  }
};

export default function Todo() {
  const [state, dispatch] = useReducer(reducer, initialState);

  const handleAddTodo = () => {
    if (state.inputValue.trim() !== "") {
      dispatch({ type: "ADD_TODO", payload: state.inputValue });
    }
  };

  const handleDeleteTodo = (index) => {
    dispatch({ type: "DELETE_TODO", payload: index });
    console.log(index);
  };

  const handleToggleTodo = (index) => {
    dispatch({ type: "TOGGLE_TODO", payload: index });
    console.log(index);
  };

  return (
    <div className="p-20 bg-blue-50">
      <input
        className="p-2 rounded"
        type="text"
        placeholder="Add todo..."
        value={state.inputValue}
        onChange={(e) =>
          dispatch({ type: "HANDLE_INPUT_CHANGE", payload: e.target.value })
        }
      />
      <button
        className="text-white bg-blue-500 p-2 rounded"
        onClick={handleAddTodo}
      >
        Add Todo
      </button>
      <ul>
        {state.todos.map((item, index) => (
          <TodoItem
            key={index}
            index={index}
            item={item}
            handleToggleTodo={handleToggleTodo}
            handleDeleteTodo={handleDeleteTodo}
          />
        ))}
      </ul>
    </div>
  );
}

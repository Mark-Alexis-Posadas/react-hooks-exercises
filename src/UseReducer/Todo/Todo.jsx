import React, { useReducer, useEffect } from "react";
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
    case "EDIT_TODO":
      const { idx, newText } = action.payload;
      return {
        ...state,
        todos: state.todos.map((item, i) =>
          i === idx ? { ...item, text: newText } : item
        ),
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

const loadStateFromLocalStorage = () => {
  const savedState = localStorage.getItem("todoAppState");
  return savedState ? JSON.parse(savedState) : initialState;
};

const saveStateToLocalStorage = (state) => {
  localStorage.setItem("todoAppState", JSON.stringify(state));
};

export default function Todo() {
  const [state, dispatch] = useReducer(reducer, loadStateFromLocalStorage());

  useEffect(() => {
    saveStateToLocalStorage(state);
  }, [state]);

  const handleAddTodo = () => {
    if (state.inputValue.trim() !== "") {
      dispatch({ type: "ADD_TODO", payload: state.inputValue });
    }
  };

  const handleDeleteTodo = (index) => {
    dispatch({ type: "DELETE_TODO", payload: index });
  };

  const handleEditTodo = (index, newText) => {
    dispatch({
      type: "EDIT_TODO",
      payload: { idx: index, newText },
    });
  };

  const handleToggleTodo = (index) => {
    dispatch({ type: "TOGGLE_TODO", payload: index });
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
            handleEditTodo={handleEditTodo}
          />
        ))}
      </ul>
    </div>
  );
}

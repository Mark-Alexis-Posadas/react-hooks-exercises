export default function TodoItem({
  item,
  index,
  handleToggleTodo,
  handleDeleteTodo,
}) {
  return (
    <li className="flex items-center justify-between p-2 rounded bg-white shadow-md my-2">
      <span
        onClick={() => handleToggleTodo(index)}
        className={item.completed ? "line-through" : ""}
      >
        {" "}
        {item.text}
      </span>

      <div className="flex items-center gap-3">
        <button className="text-white rounded p-1 bg-blue-500">edit</button>
        <button
          className="text-white rounded p-1 bg-red-500"
          onClick={() => handleDeleteTodo(index)}
        >
          delete
        </button>
      </div>
    </li>
  );
}

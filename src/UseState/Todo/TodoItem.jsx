export default function TodoItem({
  todoItem,
  handleDelete,
  handleIsComplete,
  index,
  isCompleted,
}) {
  return (
    <li
      className="flex items-center justify-between border border-slate-300 p-2 rounded hover:bg-slate-300 mb-3"
      onClick={() => handleIsComplete(index)}
    >
      <span
        className={isCompleted ? "text-red-500 line-through" : "text-black"}
      >
        {todoItem}
      </span>

      <button
        className="text-white p-2 rounded bg-red-400 flex items-center justify-center w-8 h-8"
        onClick={() => handleDelete(index)}
      >
        x
      </button>
    </li>
  );
}

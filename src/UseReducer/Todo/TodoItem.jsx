export default function TodoItem({ item, index, handleToggleTodo }) {
  return (
    <li
      onClick={() => handleToggleTodo(index)}
      className="flex items-center justify-between p-2 rounded bg-white shadow-md my-2"
    >
      <span className={item.completed ? "line-through" : ""}> {item.text}</span>

      <div className="flex items-center gap-3">
        <button className="text-white rounded p-1 bg-blue-500">edit</button>
        <button className="text-white rounded p-1 bg-red-500">delete</button>
      </div>
    </li>
  );
}

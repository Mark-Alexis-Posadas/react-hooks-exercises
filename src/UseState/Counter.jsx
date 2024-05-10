import { useState } from "react";

const buttonText = ["Increment", "Decrement"];
export default function Counter() {
  const [count, setCount] = useState(0);
  return (
    <div className="h-screen flex flex-col items-center justify-center">
      <h1>{count}</h1>
      <div className="flex items-center gap-5">
        {buttonText.map((text, index) => (
          <button
            key={index}
            className={`text-white rounded p-2 ${
              index === 1 ? "bg-red-500" : "bg-blue-500"
            }`}
          >
            {text}
          </button>
        ))}
      </div>
    </div>
  );
}

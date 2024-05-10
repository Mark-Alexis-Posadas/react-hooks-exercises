import { useState } from "react";

const buttonText = ["Increment", "Decrement"];
export default function Counter() {
  const [count, setCount] = useState(0);

  const handleClick = (index) => {
    if (index === 0) {
      setCount(count + 1);
    } else {
      setCount(count - 1);
    }
  };

  return (
    <div className="h-screen flex flex-col items-center justify-center">
      <h1 className="mb-3 font-bold text-9xl">{count}</h1>
      <div className="flex items-center gap-5">
        {buttonText.map((text, index) => (
          <button
            key={index}
            className={`text-white rounded p-2 ${
              index === 1 ? "bg-red-500" : "bg-blue-500"
            }`}
            onClick={() => handleClick(index)}
          >
            {text}
          </button>
        ))}
      </div>
    </div>
  );
}

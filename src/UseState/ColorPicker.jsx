import { useState } from "react";

const colors = [
  { id: 1, hex: "#FF5733" },
  { id: 2, hex: "#FFC300" },
  { id: 3, hex: "#DAF7A6" },
  { id: 4, hex: "#9AECDB" },
  { id: 5, hex: "#5E35B1" },
  { id: 6, hex: "#1E8449" },
  { id: 7, hex: "#F4D03F" },
  { id: 8, hex: "#3498DB" },
  { id: 9, hex: "#AF7AC5" },
  { id: 10, hex: "#A93226" },
];

export default function ColorPicker() {
  const [hexColor, setHexColor] = useState(colors[0].hex);

  const handleClick = (color) => {
    setHexColor(color);
  };

  return (
    <div>
      <div className="bg-white shadow-[0 5px 10px rgba(0, 0, 0, 0.12)] rounded transition-[all 0.2s ease]">
        <h2>colors</h2>

        <div className="flex items-cener">
          <div
            className="w-20 h-20"
            style={{ backgroundColor: hexColor }}
          ></div>
          <h3 className="font-bold">
            HEX: <span className="font-light">{hexColor}</span>
          </h3>
        </div>
      </div>

      <div className="flex items-center bg-white shadow-md p-3 rounded">
        {colors.map((color) => (
          <div
            onClick={() => handleClick(color.hex)}
            key={color.id}
            className="w-10 h-10 cursor-pointer"
            style={{ backgroundColor: color.hex }}
          ></div>
        ))}
      </div>
    </div>
  );
}

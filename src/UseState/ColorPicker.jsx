import { useEffect, useState } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faCopy } from "@fortawesome/free-solid-svg-icons";

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
  const [copyToClipboard, setCopyToClipBoard] = useState(false);

  const handleCopy = () => {
    navigator.clipboard
      .writeText(hexColor)
      .then(() => setCopyToClipBoard(true))
      .catch((e) => setCopyToClipBoard(e));
  };

  const handleClick = (color) => {
    setHexColor(color);
  };

  useEffect(() => {
    setTimeout(() => {
      setCopyToClipBoard(false);
    }, 2000);
  }, [copyToClipboard]);

  return (
    <div className="p-20 w-[900px] m-auto">
      <div className="bg-white shadow-[0 5px 10px rgba(0, 0, 0, 0.12)] rounded transition-[all 0.2s ease]">
        <h2 className="font-bold text-4xl mb-20">Color Picker</h2>
        <div className="flex items-center justify-center">
          <div
            className="w-20 h-20 rounded mr-7"
            style={{ backgroundColor: hexColor }}
          ></div>
          <div className="flex flex-col">
            {copyToClipboard && (
              <p className="text-green-500">Copied to clipboard</p>
            )}
            <div className="border border-slate-200 p-2 rounded flex items-center justify-between w-[200px]">
              <h3 className="font-bold">
                HEX: <span className="font-light">{hexColor}</span>
              </h3>
              <FontAwesomeIcon
                icon={faCopy}
                className="cursor-pointer"
                onClick={(e) => handleCopy(e)}
              />
            </div>
          </div>
        </div>
      </div>

      <div className="flex items-center justify-center bg-white shadow-md p-3 mt-10 rounded">
        {colors.map((color) => (
          <div
            onClick={() => handleClick(color.hex)}
            key={color.id}
            className="w-10 h-10 cursor-pointer border"
            style={{
              backgroundColor: color.hex,
              border: hexColor === color.hex ? "2px solid #222" : "none",
              borderRadius: "2px",
            }}
          ></div>
        ))}
      </div>
    </div>
  );
}

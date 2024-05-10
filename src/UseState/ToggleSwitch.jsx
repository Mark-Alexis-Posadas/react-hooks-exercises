import { useState } from "react";

export default function ToggleSwitch() {
  const [isContentVisible, setContentVisible] = useState(false);

  return (
    <>
      <button
        onClick={() => setContentVisible(!isContentVisible)}
        className={`rounde p-2 ${
          isContentVisible
            ? "bg-green-300 text-white"
            : "bg-slate-300 text-black"
        }`}
      >
        {isContentVisible ? "Off" : "On"}
      </button>
      {isContentVisible && (
        <p>
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Quia
          molestiae numquam soluta saepe modi, qui laboriosam? Pariatur
          quibusdam earum repudiandae ad. Accusamus, ipsa veniam alias tempora
          dignissimos nihil officia maiores.
        </p>
      )}
    </>
  );
}

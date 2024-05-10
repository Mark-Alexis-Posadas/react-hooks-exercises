import { useState } from "react";

export default function ToggleSwitch() {
  const [isContentVisible, setContentVisible] = useState(false);

  return (
    <>
      <button onClick={() => setContentVisible(!isContentVisible)}>
        {isContentVisible ? "Off" : "On"}
      </button>
      {isContentVisible && <p>content</p>}
    </>
  );
}

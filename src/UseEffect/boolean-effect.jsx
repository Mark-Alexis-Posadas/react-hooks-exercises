import React, { useEffect, useState } from "react";

export const BooleanEffect = () => {
  const [isVisible, setVisible] = useState(false);

  useEffect(() => {
    const t = setTimeout(() => {
      setVisible(false);
    }, 3000);

    return () => {
      clearTimeout(t);
    };
  }, [isVisible]);

  return (
    <div>
      {isVisible && <p>test</p>}
      <button onClick={() => setVisible(!isVisible)}>toggle</button>
    </div>
  );
};

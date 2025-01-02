import React, { useEffect, useState } from "react";

export const GlobalEvents = () => {
  const [isShowModal, setIsShowModal] = useState(false);

  useEffect(() => {
    const onEscape = (e) => {
      if (e.key === "Escape") {
        setIsShowModal(false);
      }
    };

    window.addEventListener("keydown", onEscape, false);

    return () => {
      window.removeEventListener("keydown", onEscape, false);
    };
  }, []);

  return (
    <div className="p-10">
      <button
        className="bg-blue-500 text-white rounded p-2"
        onClick={() => setIsShowModal(true)}
      >
        show modal
      </button>
      {isShowModal && (
        <div className="p-5 rounded bg-green-50 flex items-center justify-between">
          modal content
          <button
            className="bg-red-500 text-white rounded p-2"
            onClick={() => setIsShowModal(false)}
          >
            close
          </button>
        </div>
      )}
    </div>
  );
};

import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faTimes } from "@fortawesome/free-solid-svg-icons";
import { useEffect, useState, useRef } from "react";

export default function Modal() {
  const [showModal, setShowModal] = useState(false);
  const ref = useRef(null);
  const handleClickOutside = (e) => {
    if (ref.current && !ref.current.contains(e.target)) {
      setShowModal(false);
    }
  };

  useEffect(() => {
    document.addEventListener("click", handleClickOutside, true);
    return () => {
      document.removeEventListener("click", handleClickOutside, true);
    };
  }, []);
  return (
    <div>
      <button
        className="bg-blue-600 text-white rounded p-2 m-3"
        onClick={() => setShowModal(!showModal)}
      >
        Click me
      </button>
      {showModal && (
        <div className="fixed top-0 right-0 left-0 bottom-0 z-10 bg-[rgba(0,0,0,0.4)] flex items-center justify-center">
          <div className="w-[500px]" ref={ref}>
            <header className="flex items-center justify-between bg-black p-2">
              <h1 className="font-bold text-white">Modal title</h1>

              <FontAwesomeIcon
                icon={faTimes}
                className="text-white cursor-pointer"
                onClick={() => setShowModal(false)}
              />
            </header>
            <main className="p-2 bg-white">
              <p className="text-slate-400 font-light">
                Lorem ipsum, dolor sit amet consectetur adipisicing elit. Enim
                obcaecati quibusdam quam perspiciatis veritatis, mollitia
                debitis delectus, vel nobis vero quisquam placeat quae
                voluptates vitae odio repudiandae harum unde numquam?
              </p>
            </main>
            <footer className="flex items-center justify-end gap-2 bg-white p-2">
              <button
                className="text-white rounded p-2 bg-gray-600"
                onClick={() => setShowModal(false)}
              >
                close
              </button>
              <button className="text-white rounded p-2 bg-blue-600">
                save changes
              </button>
            </footer>
          </div>
        </div>
      )}
    </div>
  );
}

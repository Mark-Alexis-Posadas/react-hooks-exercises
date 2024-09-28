// 8. Create a dropdown menu component that uses `useState` to manage the visibility of the dropdown.

import { useState } from "react";

const App = () => {
  const [isVisible, setIsVisible] = useState(false);
  const [isVisibleTwo, setIsVisibleTwo] = useState(false);
  function MouseOver() {
    setIsVisible(true);
  }
  function MouseOut() {
    setIsVisible(false);
  }
  function MouseOverTwo() {
    setIsVisibleTwo(true);
  }
  function MouseOutTwo() {
    setIsVisibleTwo(false);
  }
  return (
    <div>
      <ul>
        <li onMouseOver={MouseOver} onMouseOut={MouseOut}>
          hover me
          <ul className={isVisible ? "block" : "hidden"}>
            <li>Link 1</li>
            <li onMouseOver={MouseOverTwo} onMouseOut={MouseOutTwo}>
              Link 1
              <ul className={`ml-10 ${isVisibleTwo ? "block" : "hidden"}`}>
                <li>Link 2</li>
                <li>Link 2</li>
                <li>Link 2</li>
              </ul>
            </li>
            <li>Link 1</li>
          </ul>
        </li>
      </ul>
    </div>
  );
};

export default App;

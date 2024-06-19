import { useState } from "react";

const data = [
  "https://www.billboard.com/wp-content/uploads/2022/07/metallica-1986-billboard-pro-1260.jpg?w=942&h=623&crop=1",
  "https://www.revolvermag.com/sites/default/files/styles/image_671_x_376/public/media/images/article/mcr_getty_cropped_.jpg?itok=e5icqwho&timestamp=1665599236",
];
export default function Carousel() {
  const [currentActive, setCurrentActive] = useState(0);
  const handlePrev = () => {
    setCurrentActive((p) => (p - 1 === data.length ? 0 : p - 1));
  };
  const handleNext = () => {
    setCurrentActive((p) => (p + 1 === data.length ? 0 : p + 1));
  };
  return (
    <div className="p-20">
      <img src={data[currentActive]} alt="carousel_image" className="mb-10" />
      <div className="flex items-center gap-3">
        <button
          className="bg-blue-500 text-white p-2 rounded"
          onClick={handlePrev}
        >
          Previous
        </button>
        <button
          className="bg-blue-500 text-white p-2 rounded"
          onClick={handleNext}
        >
          Next
        </button>
      </div>
    </div>
  );
}

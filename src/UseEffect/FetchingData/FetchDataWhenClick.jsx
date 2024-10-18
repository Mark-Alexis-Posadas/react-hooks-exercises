import { useEffect, useState } from "react";

const url = "https://jsonplaceholder.typicode.com/posts";

export const FetchDataWhenClick = () => {
  const [data, setData] = useState([]);
  const [displayData, setDisplayData] = useState(false);
  const [isFetching, setIsFetching] = useState(false);
  const [isFetched, setIsFetched] = useState(false);

  useEffect(() => {
    if (displayData) {
      setIsFetching(true);
      const timer = setTimeout(async () => {
        try {
          const response = await fetch(url);
          const dataJson = await response.json();
          setData(dataJson);
          setIsFetched(true);
        } catch (error) {
          console.log(error);
        } finally {
          setIsFetching(false);
          setDisplayData(false);
        }
      }, 4000);

      return () => clearTimeout(timer);
    }
  }, [displayData]);

  const handleClick = () => {
    setDisplayData(true);
  };

  return (
    <div className="p-20">
      <ul className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        {data.map((item) => (
          <li
            key={item.id}
            className="p-5 bg-white rounded-lg shadow-lg hover:shadow-xl transition-shadow duration-300"
          >
            <h2 className="text-xl font-semibold mb-2">{item.title}</h2>
            <p className="text-gray-700">{item.body}</p>
          </li>
        ))}
      </ul>
      <button
        onClick={handleClick}
        disabled={isFetching || isFetched}
        className={`bg-blue-500 text-white rounded p-2 ${
          isFetching || isFetched ? "opacity-50 cursor-not-allowed" : ""
        }`}
      >
        {isFetching ? "Please wait, data is fetching" : "Fetch data"}
      </button>
    </div>
  );
};

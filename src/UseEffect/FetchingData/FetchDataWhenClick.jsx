import { useEffect, useState } from "react";

const url = "https://jsonplaceholder.typicode.com/posts";

export const FetchDataWhenClick = () => {
  const [data, setData] = useState([]);
  const [displayData, setDisplayData] = useState(false);
  const [isFetching, setIsFetching] = useState(false);

  useEffect(() => {
    if (displayData) {
      setIsFetching(true);
      const timer = setTimeout(async () => {
        try {
          const response = await fetch(url);
          const dataJson = await response.json();
          setData(dataJson);
        } catch (error) {
          console.log(error);
        } finally {
          setIsFetching(false);
          setDisplayData(false);
        }
      }, 2000); // Adjust the timeout as needed

      return () => clearTimeout(timer);
    }
  }, [displayData]);

  return (
    <div>
      <ul>
        {data.map((item) => (
          <li key={item.id}>{item.title}</li>
        ))}
      </ul>
      <button onClick={() => setDisplayData(true)}>
        {isFetching ? "Please wait, data is fetching" : "Fetch data"}
      </button>
    </div>
  );
};

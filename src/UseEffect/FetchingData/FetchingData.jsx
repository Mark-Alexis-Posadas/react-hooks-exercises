import { useState, useEffect } from "react";

export default function FetchingData() {
  const [data, setData] = useState([]);
  const [loading, setLoading] = useState(false);
  const fetchData = async () => {
    try {
      const response = await fetch(
        "https://jsonplaceholder.typicode.com/posts"
      );
      const posts = await response.json();
      setData(posts);

      setTimeout(() => {
        setLoading(true);
        setData(posts);
      }, 5000); //
    } catch (error) {
      console.log(error);
    }
  };

  useEffect(() => {
    fetchData();
  }, []);
  return (
    <div>
      {loading ? (
        data.map((item, index) => <div key={index}>{item.title}</div>)
      ) : (
        <p>Loading...</p>
      )}
    </div>
  );
}

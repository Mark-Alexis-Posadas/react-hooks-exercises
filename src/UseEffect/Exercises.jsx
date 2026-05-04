import { useEffect, useState } from "react";

const data = [
  {
    id: 1,
    name: "Alice Johnson",
    email: "alice@example.com",
    age: 28,
    isActive: true,
  },
  {
    id: 2,
    name: "Bob Smith",
    email: "bob@example.com",
    age: 34,
    isActive: false,
  },
  {
    id: 3,
    name: "Charlie Brown",
    email: "charlie@example.com",
    age: 22,
    isActive: true,
  },
];

const Exercises = () => {
  const [users, setUsers] = useState([]);
  const [loading, setLoading] = useState(false);
  const [shouldFetch, setShouldFetch] = useState(false);

  useEffect(() => {
    if (!shouldFetch) return;

    setLoading(true);

    const timer = setTimeout(() => {
      setUsers(data); // fake API response
      setLoading(false);
    }, 1500);

    return () => clearTimeout(timer);
  }, [shouldFetch]);

  return (
    <div>
      <button onClick={() => setShouldFetch(true)}>Load Users</button>

      {loading && <p>Loading users...</p>}

      {!loading && users.length > 0 && (
        <div>
          {users.map((user) => (
            <div key={user.id}>
              <h3>{user.name}</h3>
              <p>{user.email}</p>
              <p>Age: {user.age}</p>
              <p>{user.isActive ? "Active" : "Inactive"}</p>
            </div>
          ))}
        </div>
      )}
    </div>
  );
};

export default Exercises;

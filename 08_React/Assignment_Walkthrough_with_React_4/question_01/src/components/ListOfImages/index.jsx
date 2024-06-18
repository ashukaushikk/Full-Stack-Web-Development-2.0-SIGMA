import { useState, useEffect } from "react";
import axios from "axios";

const GitHubUsers = () => {
  const [users, setUsers] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    const fetchUsers = async () => {
      try {
        // Fetch the list of users
        const response = await axios.get("https://api.github.com/users");
        const userList = response.data;

        // Fetch additional details for each user
        const usersWithDetails = await Promise.all(
          userList.map(async (user) => {
            const userDetails = await axios.get(user.url);
            return {
              ...user,
              name: userDetails.data.name,
              email: userDetails.data.email,
              avatar: userDetails.data.avatar_url,
            };
          })
        );

        setUsers(usersWithDetails);
        setLoading(false);
      } catch (err) {
        setError(err);
        setLoading(false);
      }
    };

    fetchUsers();
  }, []);

  if (loading) return <div>Loading...</div>;
  if (error) return <div>Error: {error.message}</div>;

  return (
    <div>
      <h1>GitHub Users</h1>
      <ul>
        {users.map((user) => (
          <li key={user.id}>
            <img src={user.avatar} alt={`${user.name} avatar`} width="50" />
            <p>Name: {user.name}</p>
            <p>Email: {user.email}</p>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default GitHubUsers;
import { useEffect, useState } from "react";
import { getUsers } from "../utils/api";
import UserCard from "./UserCard";

const Login = () => {
  const [users, setUsers] = useState([]);

  useEffect(() => {
    getUsers().then((users) => {
      setUsers(users);
    });
  }, []);
  
  return (
    <main className="users-page">
      <h2>Choose a User:</h2>
      <section className="user-card-section">
        {users.map((user) => {
          return <UserCard user={user} key={user.username} />;
        })}
      </section>
    </main>
  );
};

export default Login;

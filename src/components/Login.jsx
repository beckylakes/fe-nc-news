import { useEffect, useState } from "react";
import { getUsers } from "../utils/api";
import UserCard from "./UserCard";

const Login = () => {
  const [users, setUsers] = useState([]);

  useEffect(() => {
    getUsers().then((users) => {
      setUsers(users);
    });
  }, [setUsers]);
  
  return (
    <main className="userspage">
      <h2>Choose a User:</h2>
      <section className="user-card">
        {users.map((user, index) => {
          return <UserCard user={user} key={index} />;
        })}
      </section>
    </main>
  );
};

export default Login;

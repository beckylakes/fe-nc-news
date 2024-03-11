import { useContext } from "react";
import { UserContext } from "./UserContext";

const UserCard = ({ user }) => {
  const {setUserName} = useContext(UserContext);
  const { username, name, avatar_url } = user;

  return (
    <div
      className="user-card"
      onClick={() => {
        setUserName(user.username)
      }}
    >
      <img className="user-img" src={avatar_url} />
      <section className="user-info">
        <h2>{username}</h2>
        <p>{name}</p>
      </section>
    </div>
  );
};

export default UserCard;

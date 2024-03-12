import { useContext } from "react";
import { UserContext } from "./UserContext";
import { useNavigate } from "react-router-dom";

const UserCard = ({ user }) => {
  const {setUserName} = useContext(UserContext);
  const { username, name, avatar_url } = user;
  const navigate = useNavigate();

  const handleUserSelect = () => {
    setUserName(user.username);
    navigate("/articles");
  };

  return (
    <div
      className="user-card"
      onClick={handleUserSelect}
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

import { useContext } from "react";
import { UserContext } from "./UserContext";

const Header = () => {
  const { userName } = useContext(UserContext);
  return (
    <header>
      <h1>NC News</h1>
      <p>Your first-stop to the latest news</p>
      <h3>Welcome {userName ? userName : "Guest"}</h3>
    </header>
  );
};

export default Header;

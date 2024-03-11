import { Routes, Route } from "react-router-dom";
import Articles from "./components/Articles";
import { useState } from "react";
import { UserContext } from "./components/UserContext";
import Header from "./components/Header";
import Login from "./components/Login";

const App = () => {
  const [userName, setUserName] = useState();

  return (
    <UserContext.Provider value={{ userName, setUserName }}>
      <Header />
      <Routes>
        {!userName ? (
          <Route path="/" element={<Login />} />
        ) : (
          <Route path="/articles" element={<Articles />} />
        )};
      </Routes>
    </UserContext.Provider>
  );
};

export default App;

import { Routes, Route } from "react-router-dom";
import { useState } from "react";
import { UserContext } from "./components/UserContext";
import Header from "./components/Header";
import Login from "./components/Login";
import Articles from "./components/Articles";

const App = () => {
  const [userName, setUserName] = useState();

  return (
    <UserContext.Provider value={{ userName, setUserName }}>
      <Header />
        {!userName ? <Login /> :
      <Routes>
          <Route path="/articles" element={<Articles />} />
      </Routes>}
    </UserContext.Provider>
  );
};

export default App;

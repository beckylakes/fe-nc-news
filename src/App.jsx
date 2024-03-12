import { Routes, Route } from "react-router-dom";
import { useState } from "react";
import { UserContext } from "./components/UserContext";
import Header from "./components/Header";
import Login from "./components/Login";
import Articles from "./components/Articles";
import "./App.css";
import SingleArticle from "./components/SingleArticle";

const App = () => {
  const [userName, setUserName] = useState();

  return (
    <UserContext.Provider value={{ userName, setUserName }}>
      <div className="App">
        <Header />
        {!userName ? (
          <Login />
        ) : (
          <Routes>
            <Route path="/articles" element={<Articles />} />
            <Route path="/articles/:article_id" element={<SingleArticle />}/>
          </Routes>
        )}
      </div>
    </UserContext.Provider>
  );
};

export default App;

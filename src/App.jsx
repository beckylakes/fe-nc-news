import { Routes, Route } from "react-router-dom";
import { useState, useEffect } from "react";
import { UserContext } from "./components/UserContext";
import Header from "./components/Header";
import Login from "./components/Login";
import Articles from "./components/Articles";
import "./App.css";
import SingleArticle from "./components/SingleArticle";
import ErrorPage from "./components/ErrorPage";

const App = () => {
  const [userName, setUserName] = useState();

  useEffect(() => {
    const loggedInUser = sessionStorage.getItem("loggedInUser");
    if (loggedInUser) {
      setUserName(JSON.parse(loggedInUser).username);
    }
  }, []);

  return (
    <UserContext.Provider value={{ userName, setUserName }}>
      <div className="App">
        <Header />
        {!userName ? (
          <Login />
        ) : (
          <Routes>
            <Route path="/articles" element={<Articles />} />
            <Route path="/articles/:article_id" element={<SingleArticle />} />
            <Route path="/*" element={<ErrorPage />} />
          </Routes>
        )}
      </div>
    </UserContext.Provider>
  );
};

export default App;

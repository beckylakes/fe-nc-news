import { useState, useEffect } from "react";
import { getAllArticles } from "../utils/api";
import ArticleCard from "./ArticleCard";

const Articles = () => {
  const [articles, setArticles] = useState([]);

  useEffect(() => {
    getAllArticles().then((response) => {
      setArticles(response);
    })
  }, [setArticles]);

  return (
    <ul className="article-list">
        {articles.map((article, index) => {
            return <ArticleCard key={index} article={article}/>
        })}
    </ul>
  );
};

export default Articles;

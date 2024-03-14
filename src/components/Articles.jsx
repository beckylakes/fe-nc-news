import { useState, useEffect } from "react";
import { useSearchParams } from "react-router-dom";
import { getAllArticles } from "../utils/api";
import ArticleCard from "./ArticleCard";
import NavBar from "./NavBar";

const Articles = () => {
  const [articles, setArticles] = useState([]);
  const [searchParams, setSearchParams] = useSearchParams();

  useEffect(() => {
    getAllArticles(searchParams.get("topic")).then((response) => {
      setArticles(response);
    });
  }, [searchParams]);

  return (
    <>
      <div>
        <NavBar
          searchParams={searchParams}
          setSearchParams={setSearchParams}
        />
      </div>
      <ul className="article-list">
        {articles.map((article) => {
          return <ArticleCard key={article.article_id} article={article} />;
        })}
      </ul>
    </>
  );
};

export default Articles;

import { useState, useEffect } from "react";
import { useSearchParams } from "react-router-dom";
import { getAllArticles } from "../utils/api";
import ArticleCard from "./ArticleCard";
import NavBar from "./NavBar";
import ArticleFilterBar from "./ArticleFilterBar";

const Articles = () => {
  const [articles, setArticles] = useState([]);
  const [searchParams, setSearchParams] = useSearchParams();
  const topic = searchParams.get("topic");
  const sort_by = searchParams.get("sort_by");
  const order = searchParams.get("order");

  useEffect(() => {
    getAllArticles(topic, sort_by, order).then((response) => {
      setArticles(response);
    });
  }, [topic, order, sort_by]);

  return (
    <>
      <div>
        <NavBar searchParams={searchParams} setSearchParams={setSearchParams} />
        <ArticleFilterBar searchParams={searchParams} setSearchParams={setSearchParams}
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

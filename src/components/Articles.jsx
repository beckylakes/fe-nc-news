import { useState, useEffect } from "react";
import { useSearchParams } from "react-router-dom";
import { getAllArticles } from "../utils/api";
import ArticleCard from "./ArticleCard";
import NavBar from "./NavBar";
import ArticleFilterBar from "./ArticleFilterBar";
import ErrorPage from "./ErrorPage";

const Articles = () => {
  const [articles, setArticles] = useState([]);
  const [searchParams, setSearchParams] = useSearchParams();
  const [error, setError] = useState(null);
  const topic = searchParams.get("topic");
  const sort_by = searchParams.get("sort_by");
  const order = searchParams.get("order");

  useEffect(() => {
    getAllArticles(topic, sort_by, order)
      .then((response) => {
        setArticles(response);
      })
      .catch((err) => {
        setError(err);
      });
  }, [topic, order, sort_by]);

  return error ? (
    <ErrorPage error={error} />
  ) : (
    <>
      <div>
        <NavBar searchParams={searchParams} setSearchParams={setSearchParams} />
        <ArticleFilterBar
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

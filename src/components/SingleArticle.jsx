import { useState, useEffect } from "react";
import { useParams } from "react-router-dom";
import { getArticleByID } from "../utils/api";

const SingleArticle = () => {
  const { article_id } = useParams();
  const [singleArticle, setSingleArticle] = useState([]);

  useEffect(() => {
    getArticleByID(article_id).then((article) => {
      setSingleArticle(article[0]);
    });
  }, [article_id]);

  return (
    <div className="single-article-card">
      <h2 className="single-article-title">{singleArticle.title}</h2>
      <div className="single-article-info">
        <p>By: {singleArticle.author}</p>
        <p>Topic: {singleArticle.topic}</p>
        <p>Created at: {singleArticle.created_at}</p>
      </div>
      <img src={singleArticle.article_img_url} />
      <div className="single-article-body">
        <p>Votes: {singleArticle.votes}</p>
        <p>Comments: {singleArticle.comment_count}</p>
        <p>Body: {singleArticle.body}</p>
      </div>
    </div>
  );
};

export default SingleArticle;

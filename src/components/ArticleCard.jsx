import { Link } from "react-router-dom";
import Votes from "./Votes";
import { useState, useEffect } from "react";
import { getArticleByID } from "../utils/api";

const ArticleCard = ({ article }) => {
  const {
    article_id,
    article_img_url,
    author,
    comment_count,
    created_at,
    title,
    topic,
    votes,
  } = article;

  const [singleArticle, setSingleArticle] = useState([]);

  useEffect(() => {
    getArticleByID(article_id).then((article) => {
      setSingleArticle(article[0]);
    });
  }, [singleArticle.votes]);
  
  const handleVoteUpdate = (newVoteCount) => {
    setSingleArticle((currArticle) => ({
      ...currArticle,
      votes: newVoteCount,
    }));
  };
  
  return (
    <li className="article-card">
      <Link to={`/articles/${article_id}`}>
        <p className="article-card-title">{title}</p>
      </Link>
      <img className="article-card-img" src={article_img_url} />
      <div className="article-card-info">
          <Votes
            article_id={article_id}
            votes={votes}
            onVoteUpdate={handleVoteUpdate}
          />
          {singleArticle.votes}
        <p>Comments: {comment_count}</p>
        <p>Created at: {created_at}</p>
      </div>
    </li>
  );
};

export default ArticleCard;

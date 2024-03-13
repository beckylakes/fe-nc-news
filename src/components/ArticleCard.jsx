import { Link } from "react-router-dom";
import Votes from "./Votes";

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

  return (
    <li className="article-card">
      <Link to={`/articles/${article_id}`}>
        <p className="article-card-title">{title}</p>
      </Link>
      <img className="article-card-img" src={article_img_url} />
      <div className="article-card-info">
        <Votes article_id={article_id} votes={votes} />
        <p>Comments: {comment_count}</p>
        <p>Created at: {created_at}</p>
      </div>
    </li>
  );
};

export default ArticleCard;

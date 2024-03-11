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
      <p>{title}</p>
      <img className="article-card-img" src={article_img_url} />
      <p>Votes: {votes}</p>
      <p>Comments: {comment_count}</p>
      <p>Created at: {created_at}</p>
    </li>
  );
};

export default ArticleCard;

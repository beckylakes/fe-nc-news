const CommentCard = ({ comment }) => {
  const { comment_id, body, article_id, author, votes, created_at } = comment;

  return (
    <li className="comment-card">
      <p className="comment-card-body">{comment.body}</p>
      <footer className="comment-card-info">
        <p>Votes: {comment.votes}</p>
        <p>By: {comment.author}</p>
        <p>Date: {comment.created_at}</p>
      </footer>
    </li>
  );
};

export default CommentCard;

import { useContext, useState } from "react";
import { UserContext } from "./UserContext";
import { deleteComment } from "../utils/api";

const CommentCard = ({ comment, setComments }) => {
  const { comment_id, body, article_id, author, votes, created_at } = comment;
  const { userName } = useContext(UserContext);
  const [isDeleted, setIsDeleted] = useState(false);

  const handleDelete = (comment_id) => {
    setIsDeleted(true);
    deleteComment(comment_id)
      .then(() => {
        setComments((currentComments) => {
          return currentComments.filter(
            (comment) => comment.comment_id !== comment_id
          );
        });
      })
      .catch((err) => {
        console.log(err);
        setIsDeleted(false)
      });
  };
  return (
    <li className="comment-card">
      {userName === author && (
        <button onClick={() => handleDelete(comment_id)}>x DELETE</button>
      )}
      {isDeleted && <p className="deleted-message">Deleted!</p>}
      <p className="comment-card-body">{body}</p>
      <footer className="comment-card-info">
        <p>Votes: {votes}</p>
        <p>By: {author}</p>
        <p>Date: {created_at}</p>
      </footer>
    </li>
  );
};

export default CommentCard;

import { useState, useEffect } from "react";
import { getCommentsByArticleID } from "../utils/api";
import CommentCard from "./CommentCard";

const Comments = ({ article_id }) => {
  const [comments, setComments] = useState([]);

  useEffect(() => {
    getCommentsByArticleID(article_id).then((comments) => {
      setComments(comments);
    });
  }, [article_id]);

  return (
    <ul className="comments-list">
      <h3>Comments:</h3>
      {comments.map((comment, index) => {
        return <CommentCard comment={comment} key={comment.comment_id} />;
      })}
    </ul>
  );
};

export default Comments;

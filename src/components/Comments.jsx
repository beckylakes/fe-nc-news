import { useState, useEffect } from "react";
import { getCommentsByArticleID } from "../utils/api";
import CommentCard from "./CommentCard";
import PostComment from "./PostComment";

const Comments = ({ article_id }) => {
  const [comments, setComments] = useState([]);

  useEffect(() => {
    getCommentsByArticleID(article_id).then((comments) => {
      setComments(comments);
    });
  }, [article_id]);

  return (
    <div className="comments-section">
      <h3>Comments:</h3>
      <PostComment article_id={article_id} setComments={setComments} />
      <ul className="comments-list">
        {comments.map((comment, index) => {
          return <CommentCard comment={comment} key={comment.comment_id} />;
        })}
      </ul>
    </div>
  );
};

export default Comments;

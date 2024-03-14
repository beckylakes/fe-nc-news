import { useState, useEffect, useContext } from "react";
import { UserContext } from "./UserContext";
import { postComment } from "../utils/api";

const PostComment = ({ article_id, setComments }) => {
  const [newComment, setNewComment] = useState("");
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [postError, setPostError] = useState(null);

  const { userName } = useContext(UserContext);

  function handleCommentInput(event) {
    setNewComment(event.target.value);
  }

  function handleSubmit(event) {
    event.preventDefault();
    if(!newComment){
      return setPostError("You must write something!");
      
    }
    setIsSubmitting(true);
    postComment(article_id, userName, newComment)
      .then((newComment) => {
        setNewComment("");
        setIsSubmitting(false);
        setComments((currComments) => {
          return [newComment, ...currComments];
        });
        setPostError(null);
      })
      .catch((err) => {
        setIsSubmitting(false);
        setPostError("Sorry! We failed to post your comment...");
      });
  }

  return (
    <section className="comments">
      <form onSubmit={handleSubmit}>
        <label>Write your comment here: </label>
        <textarea
          type="text"
          value={newComment}
          placeholder={"Type here..."}
          onChange={handleCommentInput}
        ></textarea>
        <input type="submit" value="Submit" disabled={isSubmitting} />
        {isSubmitting && <p>Posting comment...</p>}
        {postError && <p className="error">{postError}</p>}
      </form>
    </section>
  );
};

export default PostComment;

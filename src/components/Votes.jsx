import useVote from "./useVote";

const Votes = ({ article_id, votes }) => {
  const { votedStatus, handleVote, isSubmitting } = useVote(article_id);

  return (
    <button
      onClick={handleVote}
      className="likeButton"
      disabled={isSubmitting}
    >
      {votedStatus ? (
        <span className="likedEmoji">{votes + 1} 👎 </span>
      ) : (
        <span className="notLikedEmoji">{votes} 👍 </span>
      )}
       {isSubmitting && <span className="submit-vote-msg">Submitted</span>}
    </button>
  );
};

export default Votes;

import useVote from "./useVote";

const Votes = ({ article_id, votes, onVoteUpdate }) => {
  const { handleVote, isSubmitting } = useVote(article_id);

  const handleVoteClick = (isUpvote) => {
    handleVote(isUpvote);
    onVoteUpdate(votes + (isUpvote ? 1 : -1));
  };

  return (
    <>
      <button onClick={() => handleVoteClick(true)} className="likeButton">
        Upvote 👍
      </button>
      <button onClick={() => handleVoteClick(false)} className="unlikeButton">
        Downvote👎
      </button>
      {isSubmitting && <p>Voting...</p>}
    </>
  );
};

export default Votes;

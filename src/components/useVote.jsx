import { useState } from "react";
import { patchArticleVotes } from "../utils/api";

const useVote = (article_id) => {
  const [votedStatus, setVotedStatus] = useState(false);
  const [isSubmitting, setIsSubmitting] = useState(false);

  const handleVote = () => {
    setIsSubmitting(true);
    setVotedStatus((currStatus) => {
      return !currStatus;
    });
    patchArticleVotes(article_id, votedStatus)
      .then(() => {
        setIsSubmitting(false);
      })
  };

  return { votedStatus, handleVote, isSubmitting };
};

export default useVote;

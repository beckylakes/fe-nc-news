import { useState } from "react";
import { patchArticleVotes } from "../utils/api";

const useVote = (article_id) => {
  const [isSubmitting, setIsSubmitting] = useState(false);

  const handleVote = (isUpvote) => {
    setIsSubmitting(true);
    patchArticleVotes(article_id, isUpvote)
      .then(() => {
        setIsSubmitting(false);
      })
      .catch((err) => {
        setIsSubmitting(false);
      });
  };

  return { handleVote, isSubmitting };
};

export default useVote;

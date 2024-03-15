import { useState, useEffect } from "react";
import { useParams } from "react-router-dom";
import { getArticleByID } from "../utils/api";
import Comments from "./Comments";
import Votes from "./Votes";
import ErrorPage from "./ErrorPage";

const SingleArticle = () => {
  const { article_id } = useParams();
  const [singleArticle, setSingleArticle] = useState([]);
  const [error, setError] = useState(null);

  useEffect(() => {
    getArticleByID(article_id)
      .then((article) => {
        setSingleArticle(article[0]);
        setError(false);
      })
      .catch((err) => {
        setError(err);
      });
  }, [article_id]);

  const handleVoteUpdate = (newVoteCount) => {
    setSingleArticle((currArticle) => ({
      ...currArticle,
      votes: newVoteCount,
    }));
  };

  return error ? (
    <ErrorPage error={error} />
  ) : (
    <main className="single-article-card">
      <h2 className="single-article-title">{singleArticle.title}</h2>
      <section className="single-article-info">
        <div className="single-article-headers">
          <p>By: {singleArticle.author}</p>
          <p>Topic: {singleArticle.topic}</p>
          <p>Created at: {singleArticle.created_at}</p>
        </div>
        <img
          className="single-article-img"
          src={singleArticle.article_img_url}
        />
        <div className="single-article-body">
          <div className="single-article-body-top">
            <Votes
              article_id={article_id}
              votes={singleArticle.votes}
              onVoteUpdate={handleVoteUpdate}
            />
            <p>Votes: {singleArticle.votes}</p>
            <p>Comments: {singleArticle.comment_count}</p>
          </div>
          <p>Body: {singleArticle.body}</p>
          <Comments article_id={article_id} />
        </div>
      </section>
    </main>
  );
};

export default SingleArticle;

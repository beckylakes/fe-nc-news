import axios from "axios";

const api = axios.create({
  baseURL: "https://nc-news-zzyy.onrender.com/api/",
});

export const getUsers = () => {
  return api.get("users").then(({ data }) => {
    return data.users;
  });
};

export const getAllArticles = (topic, sort_by, order) => {
  return api.get("articles", { params: { topic, sort_by, order } }).then(({ data }) => {
    return data.articles;
  });
};

export const getArticleByID = (article_id) => {
  return api.get(`articles/${article_id}`).then(({ data }) => {
    return data.article;
  });
};

export function getCommentsByArticleID(article_id) {
  return api.get(`/articles/${article_id}/comments`).then(({ data }) => {
    return data.comments[1];
  });
}

export function patchArticleVotes(article_id, isUpvote) {
  const voteChange = isUpvote ? 1 : -1;
  return api
    .patch(`/articles/${article_id}`, { inc_votes: voteChange })
    .then(({ data }) => {
      return data.article;
    });
}

export function postComment(article_id, username, body) {
  return api
    .post(`/articles/${article_id}/comments`, { username, body })
    .then(({ data }) => {
      return data.comment[1];
    });
}

export const deleteComment = (comment_id) => {
  return api.delete(`/comments/${comment_id}`);
};

export function getTopics() {
	return api.get("/topics").then(({ data }) => {
		return data.topics;
	});
}

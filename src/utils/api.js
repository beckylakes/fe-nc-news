import axios from "axios";

const api = axios.create({
  baseURL: "https://nc-news-zzyy.onrender.com/api/",
});

export const getUsers = () => {
  return api.get("users").then(({ data }) => {
    return data.users;
  });
};

export const getAllArticles = () => {
  return api.get("articles").then(({ data }) => {
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

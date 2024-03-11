import axios from "axios";

const api = axios.create({
  baseURL: "https://nc-news-zzyy.onrender.com/api/",
});

export const getUsers = () => {
  return api.get("users").then(({ data }) => {
    console.log('in api', data.users)
    return data.users;
  });
};

export const getAllArticles = () => {
  return api.get("articles").then(({ data }) => {
    return data.articles;
  });
};

import { useEffect, useState } from "react";
import { getTopics } from "../utils/api";
import ErrorPage from "./ErrorPage";

const NavBar = ({ setSearchParams, searchParams }) => {
  const [topics, setTopics] = useState([]);
  const [error, setError] = useState(null)

  const handleTopicChange = (key, input) => {
    if (input === "all-articles") {
      searchParams.delete(key);
    } else {
      searchParams.set(key, input);
    }
    setSearchParams(searchParams);
    setError(false)
  };

  useEffect(() => {
    getTopics()
      .then((response) => {
        setTopics(response);
        setError(null);
      })
      .catch((err) => {
        setError(err);
      });
  }, [searchParams]);

  if (error) return <ErrorPage error={error} />;
  return (
    <nav className="navigation-bar">
      <select
        onChange={(event) => {
          handleTopicChange("topic", event.target.value);
        }}
      >
        Navigation
        <option value="all-articles">All Articles</option>
        {topics.map((topic) => {
          return (
            <option key={topic.slug} value={topic.slug}>
              {topic.slug.charAt(0).toUpperCase() + topic.slug.slice(1)}
            </option>
          );
        })}
      </select>
    </nav>
  );
};

export default NavBar;

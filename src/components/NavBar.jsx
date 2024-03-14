import { useEffect, useState } from "react";
import { getTopics } from "../utils/api";

const NavBar = ({ setSearchParams, searchParams }) => {
  const [topics, setTopics] = useState([]);

  const handleTopicChange = (key, input) => {
    if (input === "all-articles") {
        searchParams.delete(key);
      } else {
        searchParams.set(key, input);
      }
      setSearchParams(searchParams);
  };

  useEffect(() => {
    getTopics().then((response) => {
      setTopics(response);
    });
  }, [setTopics]);

  return (
    <nav className="navigation-bar">
      <select onChange={(event) => {handleTopicChange("topic", event.target.value)}}>
        Navigation
        <option value="all-articles">
          All Articles
        </option>
        {topics.map((topic) => {
          return (
            <option
              key={topic.slug}
              value={topic.slug}
            >
              {topic.slug.charAt(0).toUpperCase() + topic.slug.slice(1)}
            </option>
          );
        })}
      </select>
    </nav>
  );
};

export default NavBar;

const ArticleFilterBar = ({ searchParams, setSearchParams }) => {

  const handleChange = (key, input) => {
    searchParams.set(key, input);
    setSearchParams(searchParams);
  };

  return (
    <form className="filterBar">
      <fieldset>
        <label>Sorted by </label>
        <select
          id="sort_by"
          type="dropdown"
          onChange={(event) => {
            handleChange("sort_by", event.target.value);
          }}
        >
          <option value="created_at">Date added</option>
          <option value="comment_count">Comments</option>
          <option value="votes">Votes</option>
        </select>
        </fieldset>
        <fieldset>
        <label htmlFor="order">Order </label>
        <select
          id="order"
          type="dropdown"
          onChange={(event) => {
            handleChange("order", event.target.value);
          }}
        >
          <option value="DESC">Descending</option>
          <option value="ASC">Ascending</option>
        </select>
      </fieldset>
    </form>
  );
};

export default ArticleFilterBar;

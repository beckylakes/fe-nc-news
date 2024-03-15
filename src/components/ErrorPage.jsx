import { Link } from "react-router-dom";

const ErrorPage = ({ error }) => {
  return error === undefined ? (
    <>
      <h2>STATUS: 404</h2>
      <h3>OOPS! THAT PAGE DOESN'T EXIST...</h3>
      <img
        className="error-img"
        src="https://static-00.iconduck.com/assets.00/alert-triangle-outline-icon-512x443-dkpvz162.png"
      />
      <Link to={"/articles"}>
        <h4>Why not check out some articles here?</h4>
      </Link>
    </>
  ) : (
    <>
      <h2>STATUS: {error.response.data.statusCode}</h2>
      <h3>OOPS! {error.response.data.msg.toUpperCase()}</h3>
      <img
        className="error-img"
        src="https://static-00.iconduck.com/assets.00/alert-triangle-outline-icon-512x443-dkpvz162.png"
      />
      <Link to={"/articles"}>
        <h4>Why not check out some articles here?</h4>
      </Link>
    </>
  );
};

export default ErrorPage;

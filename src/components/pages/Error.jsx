import { Link } from "react-router-dom";

const Error = () => {
  return (
    <div>
      <h1>Error 404. Page not found.</h1>

      <p>
        Go to <Link to="/">Homepage</Link>
      </p>
    </div>
  );
};

export default Error;

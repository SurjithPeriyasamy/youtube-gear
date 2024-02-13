import { Link } from "react-router-dom";

const Button = ({ name }) => {
  return (
    <Link className="shrink-0" to={"/results?search_query=" + name}>
      <button className="m-2 bg-gray-200 px-3 py-1 rounded-lg">{name}</button>
    </Link>
  );
};

export default Button;

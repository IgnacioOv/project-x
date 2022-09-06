import "../App.css";
//eslint-disable-next-line
import { BrowserRouter as Router, Link } from "react-router-dom";

function SearchBar() {
  return (
    <div className="bar">
      <h1>Project x</h1>
      <input type="text" placeholder="buscar producto"></input>

      <Link to="/products">
        <button>Go</button>
      </Link>
    </div>
  );
}

export default SearchBar;

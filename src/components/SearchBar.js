import "../App.css";
import { BrowserRouter as Router, Routes, Route, Link } from "react-router-dom";

function SearchBar() {
  return (
    <div className="bar">
      <h1>Project x</h1>
      <input type="text" placeholder="buscar producto"></input>

      <Link to="/products">
        <button>go</button>
      </Link>
    </div>
  );
}

export default SearchBar;

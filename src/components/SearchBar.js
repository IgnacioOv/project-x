import "../App.css";
//eslint-disable-next-line
import { BrowserRouter as Router, Link } from "react-router-dom";
import { useState, useEffect } from "react";
function SearchBar() {
  const [users, setUsers] = useState({});
  useEffect(() => {
    fetch("/api")
      .then((res) => res.json())
      .then((users) => setUsers(users));
  }, []);
  return (
    <div className="bar">
      <h1>{users.name}</h1>
      <input type="text" placeholder="buscar producto"></input>

      <Link to="/products">
        <button>Go</button>
      </Link>
    </div>
  );
}

export default SearchBar;

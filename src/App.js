import "./App.css";
import NavBar from "./components/NavBar";
import SearchBar from "./components/SearchBar";
import Login from "./components/Login";
import { BrowserRouter as Router, Routes, Route, Link } from "react-router-dom";
function App() {
  return (
    <Router>
      <div className="App">
        <ul className="nav">
          <li>
            <Link to="/login">login</Link>
          </li>
          <li>
            <span>
              <Link to="#">register</Link>
            </span>
          </li>
        </ul>

        <Routes>
          <Route exact path="/" element={<SearchBar />}></Route>
          <Route exact path="/login" element={<Login />}></Route>
        </Routes>
      </div>
    </Router>
  );
}

export default App;

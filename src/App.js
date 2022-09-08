import "./App.css";
import StarBorderOutlinedIcon from "@mui/icons-material/StarBorderOutlined";
import Register from "./components/Register";
import SearchBar from "./components/SearchBar";
import Login from "./components/Login";
import Products from "./components/Products";
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
              <Link to="/register">register</Link>
            </span>
          </li>
          <li>
            <span>
              <Link to="/">home</Link>
            </span>
          </li>
          <li>
            <span>
              <span className="star">
                <StarBorderOutlinedIcon />
              </span>
              <Link to="/favorites">favorites</Link>
            </span>
          </li>
        </ul>

        <Routes>
          <Route exact path="/" element={<SearchBar />}></Route>
          <Route exact path="/login" element={<Login />}></Route>
          <Route exact path="/register" element={<Register />}></Route>
          <Route exact path="/products" element={<Products />}></Route>
        </Routes>
      </div>
    </Router>
  );
}

export default App;

import "../App.css";

function Login() {
  return (
    <div className="login">
      <form>
        <h3>Log in into your account</h3>
        <input className="user" type="text" placeholder="username"></input>
        <span>
          <input
            className="password"
            type="password"
            placeholder="password"
          ></input>
        </span>
        <button className="loginBtn">Login</button>
      </form>
    </div>
  );
}

export default Login;

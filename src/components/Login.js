import "../App.css";

function Login() {
  return (
    <div className="login">
      <form>
        <input className="user" type="text" placeholder="username"></input>
        <span>
          <input
            className="password"
            type="password"
            placeholder="password"
          ></input>
        </span>
      </form>
    </div>
  );
}

export default Login;

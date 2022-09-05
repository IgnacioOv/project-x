import "../App.css";

function Register() {
  return (
    <div className="register">
      <form>
        <h3> create your account</h3>
        <input className="user" type="text" placeholder="username"></input>
        <span>
          <input
            className="password"
            type="password"
            placeholder="password"
          ></input>
        </span>
        <span>
          <input
            className="password"
            type="password"
            placeholder="repeat password"
          ></input>
        </span>

        <div className="accept">
          <label>
            accept terms and conditions
            <input type="checkbox" />
          </label>
        </div>

        <button className="registerBtn">Create account</button>
      </form>
    </div>
  );
}

export default Register;

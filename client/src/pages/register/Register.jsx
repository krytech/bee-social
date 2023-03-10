import "./register.css";

export default function Register() {
  return (
    <div className="login">
      <div className="loginWrapper">
        <div className="loginLeft">
          <h3 className="loginLogo">Bee Social</h3>
          <span className="loginDesc">
            Connect with bees from around the world!
          </span>
        </div>
        <div className="loginRight">
          <div className="loginBox">
            <input placeholder="Username" className="loginInput" />
            <input placeholder="Email" className="loginInput" />
            <input placeholder="Password" className="loginInput" />
            <input placeholder="Password again" className="loginInput" />
            <button className="loginButton">Sign up</button>
            <button className="loginRegisterButton">Log in</button>
          </div>
        </div>
      </div>
    </div>
  );
}

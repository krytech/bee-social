import "./login.css";

export default function Login() {
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
            <input placeholder="Email" className="loginInput" />
            <input placeholder="Password" className="loginInput" />
            <button className="loginButton">Login</button>
            <span className="loginForgot">Forgot password?</span>
            <button className="loginRegisterButton">Create new account</button>
          </div>
        </div>
      </div>
    </div>
  );
}

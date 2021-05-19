import "./SignIn.css";
import { Link } from "react-router-dom";
export function SignIn() {
  function handleSubmit() {}
  function onSubmit() {}
  return (
    <form className="form" onSubmit={handleSubmit(onSubmit)}>
      <div className="login-main">
        <h1 className="login-heading">Login</h1>
        {/* <p className="error-message" style={{ display: failure, color: "red" }}>
          Username or password is incorrect
        </p> */}
        <input
          className="input-field username"
          type="text"
          placeholder="Enter Username"
          name="username"
          required
        />
        <input
          className="input-field password"
          type="password"
          placeholder="Enter Password"
          name="password"
          required
        />
        <input type="submit" className="login-button" value="Login" />
        <Link to="#" className="password-reset">
          Forgot Password?
        </Link>
        <p>
          Don't have an account?{" "}
          <Link className="signup-link" to="/signup">
            Sign up
          </Link>
        </p>
      </div>
    </form>
  );
}

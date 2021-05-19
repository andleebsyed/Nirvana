import "./SignUp.css";
import { Link } from "react-router-dom";
export function SignUp() {
  function handleSubmit() {}
  function onSubmit() {}
  return (
    <form className="form" onSubmit={handleSubmit(onSubmit)}>
      <div className="login-main">
        <h1 className="login-heading">Sign Up</h1>
        <input
          className="input-field username"
          type="text"
          placeholder="Username"
          name="username"
          required
        />
        <input
          className="input-field email"
          type="email"
          placeholder="Email"
          name="email"
          required
        />
        <input
          className="input-field password"
          type="password"
          placeholder="Password"
          name="password"
          required
        />

        <input
          type="submit"
          className="button button-outline login-button"
          value="Sign In"
        />
        <p>
          Already have an account?{" "}
          <Link className="signup-link" to="/login">
            Log in
          </Link>
        </p>
      </div>
    </form>
  );
}

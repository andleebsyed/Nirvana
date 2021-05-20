import "./SignUp.css";
import { Link } from "react-router-dom";
import { useState } from "react";
import { UserSignUp } from "../ApiCalls/ApiCalls";
export function SignUp() {
  const [userDetails, setUserDetails] = useState({
    username: "",
    password: "",
    email: "",
  });
  const [exisitingOne, setExistingOne] = useState("");
  const [displayError, setDisplayError] = useState("none");

  let isSignUpSuccessful;

  async function handleSubmit(e) {
    e.preventDefault();
    isSignUpSuccessful = await UserSignUp(userDetails);
    if (isSignUpSuccessful.status === false) {
      setExistingOne(isSignUpSuccessful.existingField);
      setDisplayError("block");
    } else {
      setDisplayError("none");
    }
  }
  return (
    <form className="form" onSubmit={handleSubmit}>
      <div className="login-main">
        <h1 className="login-heading">Sign Up</h1>
        <p
          className="error-message"
          style={{ display: displayError, color: "red" }}
        >
          {`${exisitingOne} already exists`}
        </p>
        <input
          className="input-field username"
          type="text"
          placeholder="Username"
          name="username"
          required
          onChange={(e) =>
            setUserDetails({ ...userDetails, username: e.target.value })
          }
        />
        <input
          className="input-field email"
          type="email"
          placeholder="Email"
          name="email"
          required
          onChange={(e) =>
            setUserDetails({ ...userDetails, email: e.target.value })
          }
        />
        <input
          className="input-field password"
          type="password"
          placeholder="Password"
          name="password"
          required
          onChange={(e) =>
            setUserDetails({ ...userDetails, password: e.target.value })
          }
        />

        <input
          type="submit"
          className="button button-outline login-button"
          value="Sign Up"
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

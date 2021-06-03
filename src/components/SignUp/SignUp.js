import "./SignUp.css";
import { Link, useLocation, useNavigate } from "react-router-dom";
import { useState } from "react";
import { UserSignUp } from "../ApiCalls/ApiCalls";
import { useAuth } from "../Reducer/AuthReducer";
export function SignUp() {
  const { stateAuth, dispatchAuth } = useAuth();
  const location = useLocation();
  const navigate = useNavigate();
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
    } else if (isSignUpSuccessful.status === true) {
      console.log("Signed up successfully");
      setDisplayError("none");
      dispatchAuth({
        type: "CHECK_IF_USER_AUTHENTICATED",
        payload: {
          status: true,
          userId: isSignUpSuccessful.userId,
          token: isSignUpSuccessful.token,
        },
      });
      navigate("/explore");
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

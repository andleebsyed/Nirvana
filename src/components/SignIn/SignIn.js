import "./SignIn.css";
import { Link, useNavigate, useLocation } from "react-router-dom";
import { useState, useEffect } from "react";
import { UserSignIn } from "../ApiCalls/ApiCalls";
import { useAuth } from "../Reducer/AuthReducer";
import { useVideo } from "../Reducer/Reducer";
import { setupAuthHeaderForServiceCalls } from "../../utils/funcs";
export function SignIn() {
  const { dispatch, state } = useVideo();
  // const { setUserIdTry } = state;
  const { dispatchAuth } = useAuth();
  const [username, setUserName] = useState("");
  const [password, setPassword] = useState("");
  const [displayError, setDisplayError] = useState("none");
  const [loginButtonText, setLoginButtonText] = useState("Sign In");
  let userResponseFromServer;

  async function handleSubmit(e) {
    e.preventDefault();
    setLoginButtonText("Signing In...");
    userResponseFromServer = await UserSignIn(username, password);
    setLoginButtonText("Sign In");
    console.log("user response ion signin ", userResponseFromServer);
    if (userResponseFromServer.allowUser === false) {
      setDisplayError("block");
    } else if (userResponseFromServer.allowUser === true) {
      dispatchAuth({
        type: "CHECK_IF_USER_AUTHENTICATED",
        payload: {
          status: true,
          userId: userResponseFromServer.userId,
          token: userResponseFromServer.token,
        },
      });
      setDisplayError("none");
    }
  }
  return (
    <form className="form" onSubmit={handleSubmit}>
      <div className="login-main">
        <h1 className="login-heading">Login</h1>
        <p
          className="error-message"
          style={{ display: displayError, color: "red" }}
        >
          Username or password is incorrect
        </p>
        <input
          className="input-field username"
          type="text"
          placeholder="Enter Username"
          name="username"
          required
          onChange={(e) => setUserName(e.target.value)}
        />
        <input
          className="input-field password"
          type="password"
          placeholder="Enter Password"
          name="password"
          required
          onChange={(e) => setPassword(e.target.value)}
        />
        <input type="submit" className="login-button" value={loginButtonText} />
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

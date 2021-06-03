import "./ProfileDetails.css";
import { useEffect, useState, useRef } from "react";
import { useAuth } from "../Reducer/AuthReducer";
import { GetAccountDetails, UpdateUserDetails } from "../ApiCalls/ApiCalls";
export function ProfileDetails({ props }) {
  const { getUser } = props;
  const { stateAuth } = useAuth();
  const { isUserAuthenticated } = stateAuth;
  console.log("user auth or not for account", isUserAuthenticated);
  const usernameEl = useRef(null);
  const emailEl = useRef(null);
  const [newUsername, setNewUsername] = useState("");
  const [newEmail, setNewEmail] = useState("");
  const [updateMessage, setUpdateMessage] = useState({
    message: "a",
    styleClass: "update-inital-render-class",
  });
  useEffect(() => {
    async function ApiCall() {
      if (isUserAuthenticated) {
        const response = await GetAccountDetails();
        if (response) {
          if (usernameEl.current !== null || undefined) {
            usernameEl.current.value = response.username;
            emailEl.current.value = response.email;
            setNewUsername(response.username);
            setNewEmail(response.email);
            console.log("setting enai to ", response.email);
            getUser(response.username);
          }
        }
      }
    }
    ApiCall();
  }, []);
  async function AccountUpdateHandler(e) {
    e.preventDefault();
    const response = await UpdateUserDetails(newUsername, newEmail);
    console.log("user respo ", response);
    response.status === true
      ? setUpdateMessage({
          message: response.message,
          styleClass: "update-status update-success",
        })
      : setUpdateMessage({
          message: response.message,
          styleClass: "update-status update-failure",
        });
  }
  return (
    <form onSubmit={AccountUpdateHandler}>
      <div className="profile-details width-adjust">
        <p className="label">Account</p>
        <p className={updateMessage.styleClass}>{updateMessage.message}</p>
        <div className="holder">
          <label className="labels-acc" for="username">
            Username
          </label>
          <input
            ref={usernameEl}
            onChange={(e) => setNewUsername(e.target.value)}
            name="username"
            type="username"
            className="input-box acc-username"
            placeholder="username"
            required
          />
        </div>
        <div className="holder">
          <label className="labels-acc" for="email">
            Email
          </label>
          <input
            ref={emailEl}
            onChange={(e) => setNewEmail(e.target.value)}
            name="email"
            type="email"
            className="input-box acc-password"
            placeholder="email"
            required
          />
        </div>
        <button type="submit" className="submit-button ">
          UPDATE
        </button>
      </div>
    </form>
  );
}

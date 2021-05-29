import "./ProfileDetails.css";
import { useEffect, useState, useRef } from "react";
import { useAuth } from "../Reducer/AuthReducer";
import { GetAccountDetails } from "../ApiCalls/ApiCalls";
export function ProfileDetails() {
  const { stateAuth } = useAuth();
  const { isUserAuthenticated } = stateAuth;
  const usernameEl = useRef(null);
  const emailEl = useRef(null);
  useEffect(() => {
    async function ApiCall() {
      if (isUserAuthenticated) {
        const response = await GetAccountDetails();
        if (usernameEl.current !== null || undefined) {
          usernameEl.current.value = response.username;
          emailEl.current.value = response.email;
        }
      }
    }
    ApiCall();
  }, []);
  return (
    <form>
      <div className="profile-details width-adjust">
        <p className="label">Account</p>
        <div className="holder">
          <label className="labels-acc" for="username">
            Username
          </label>
          <input
            ref={usernameEl}
            type="text"
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
            type="text"
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

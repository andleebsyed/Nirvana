import "./Account.css";
import { ProfileDetails } from "../ProfileDetails/ProfileDetails";
import { PasswordReset } from "../PasswordReset/PasswordReset";
import { useVideo } from "../Reducer/Reducer";
import { useAuth } from "../Reducer/AuthReducer";
import { useState } from "react";
import { SetLoader } from "../Loader/Loader";
export function Account() {
  const { dispatchAuth } = useAuth();
  const { dispatch } = useVideo();
  const [username, setUsername] = useState(null);

  // passed to ProfilrDetails to get username from there and populate username on this page
  function getUser(comingUsername) {
    setUsername(comingUsername);
  }
  return (
    <div className="outer-div">
      {/* until username is fetched show loader */}
      {!username ? <SetLoader /> : ""}

      <div className="heading">
        <h1 className="welcome-text">{username}</h1>
        <button
          onClick={() => {
            dispatchAuth({ type: "LOGOUT_USER" });
            dispatch({ type: "CLEAR_STATE_ON_LOGOUT" });
          }}
          className="logout-button-custom"
        >
          Logout
        </button>
      </div>

      <div className="cards-container">
        <ProfileDetails props={{ getUser }} />
        <PasswordReset />
      </div>
    </div>
  );
}

import "./Account.css";
import { ProfileDetails } from "../ProfileDetails/ProfileDetails";
import { PasswordReset } from "../PasswordReset/PasswordReset";
import { useVideo } from "../Reducer/Reducer";
import { useAuth } from "../Reducer/AuthReducer";
export function Account() {
  const { dispatchAuth } = useAuth();
  const { dispatch } = useVideo();
  return (
    <div className="outer-div">
      <div className="heading">
        <h1 className="welcome-text">user</h1>
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
        <ProfileDetails />
        <PasswordReset />
      </div>
    </div>
  );
}

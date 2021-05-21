import "./Account.css";
import { ProfileDetails } from "../ProfileDetails/ProfileDetails";
import { PasswordReset } from "../PasswordReset/PasswordReset";
import { useVideo } from "../Reducer/Reducer";
import { useAuth } from "../Reducer/AuthReducer";
export function Account() {
  const { dispatchAuth } = useAuth();
  return (
    <div className="outer-div">
      <div className="heading">
        <h1 className="welcome-text">user</h1>
        <button
          onClick={() => dispatchAuth({ type: "LOGOUT_USER" })}
          className="logout-button-custom"
          //   onClick={handleLogout}
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

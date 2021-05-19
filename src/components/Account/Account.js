import "./Account.css";
import { ProfileDetails } from "../ProfileDetails/ProfileDetails";
import { PasswordReset } from "../PasswordReset/PasswordReset";
export function Account() {
  return (
    <div className="outer-div">
      <div className="heading">
        <h1 className="welcome-text">user</h1>
        <button
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

import "./PasswordReset.css";
import { useState } from "react";
import { UpdatePassword } from "../ApiCalls/ApiCalls";
export function PasswordReset() {
  const [currentPassword, setCurrentPassword] = useState("");
  const [newPasswords, setNewPasswords] = useState({
    newPassword: "",
    confirmNewPassword: "",
  });
  const [passwordUpdateMessage, setPasswordUpdateMessage] = useState({
    message: "a",
    styleClass: "update-inital-render-class",
  });
  // console.log(
  //   "old passwordis ",
  //   currentPassword,
  //   "new 1 password ",
  //   newPasswords.newPassword,
  //   "new 2 password ",
  //   newPasswords.confirmNewPassword
  // );
  async function PasswordResetHandler(e) {
    e.preventDefault();
    if (newPasswords.newPassword === newPasswords.confirmNewPassword) {
      const response = await UpdatePassword(
        currentPassword,
        newPasswords.newPassword
      );
      response.status === true
        ? setPasswordUpdateMessage({
            message: response.message,
            styleClass: "update-status update-success",
          })
        : setPasswordUpdateMessage({
            message: response.message,
            styleClass: "update-status update-failure",
          });
    } else {
      setPasswordUpdateMessage({
        message: "Passwords didn't match.Try again",
        styleClass: "update-status update-failure",
      });
    }
  }
  return (
    <form onSubmit={PasswordResetHandler}>
      <div className="account-info password-div">
        <p className="label">Reset Password</p>
        <p className={passwordUpdateMessage.styleClass}>
          {passwordUpdateMessage.message}
        </p>

        <div className="inline-inputs">
          <div className="holder internal-inline-div">
            <label className="labels-acc" for="username">
              Current Password
            </label>
            <input
              name="username"
              type="password"
              className="input-box acc-username"
              required
              onChange={(e) => setCurrentPassword(e.target.value)}
            />
          </div>
          <div className="holder internal-inline-div">
            <label className="labels-acc new-passsword" for="username">
              New Password
            </label>
            <input
              name="username"
              type="password"
              className="input-box acc-username"
              required
              onChange={(e) =>
                setNewPasswords({
                  ...newPasswords,
                  newPassword: e.target.value,
                })
              }
            />
          </div>
        </div>

        <div className="holder">
          <label className="labels-acc" for="username">
            Confirm New Password
          </label>
          <input
            name="username"
            type="password"
            className="input-box acc-username"
            required
            onChange={(e) =>
              setNewPasswords({
                ...newPasswords,
                confirmNewPassword: e.target.value,
              })
            }
          />
        </div>
        <button type="submit" className="button button-outline submit-button ">
          UPDATE PASSWORD
        </button>
      </div>
    </form>
  );
}

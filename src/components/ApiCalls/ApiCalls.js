import axios from "axios";
export async function UserSignIn(username, password) {
  const dataFromView = {
    userDetails: {
      username: username,
      password: password,
    },
  };

  console.log("data sent in body will be ", dataFromView);
  try {
    const response = await axios.post(
      "https://video-library-api.andydev7.repl.co/users/signin",
      dataFromView
    );

    console.log(response);
    if (response.status === 200) {
      const userResponseFromServer = {
        allowUser: response.data.allowUser,
        messageToShowOnView: response.data.message,
      };
      return userResponseFromServer;
    }
  } catch (error) {
    console.log("error ocurred ", error.message);
  }
}

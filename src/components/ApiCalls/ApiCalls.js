import axios from "axios";
export async function UserSignIn(username, password) {
  const dataFromView = {
    userDetails: {
      username: username,
      password: password,
    },
  };
  try {
    const response = await axios.post(
      "https://video-library-api.andydev7.repl.co/users/signin",
      dataFromView
    );
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

export async function UserSignUp(userDetails) {
  const signUpDataFromView = {
    userDetails: userDetails,
  };
  let isSignUpSuccessfull;
  console.log("data in api function ", signUpDataFromView);
  try {
    const response = await axios.post(
      "https://video-library-api.andydev7.repl.co/users/signup",
      signUpDataFromView
    );
    if (response.status === 200) {
      if (response.data.status === true) {
        return (isSignUpSuccessfull = { status: true });
      } else if (response.data.status === false) {
        //  11000 is returned when we send data which is already there for common field
        if (response.data.errorDetail.code === 11000) {
          isSignUpSuccessfull = {
            status: false,
            existingField: response.data.existingField,
          };
          return isSignUpSuccessfull;
        }
      }
    }
    console.log("response object", response);
  } catch (error) {
    console.log("error occured ", error.message);
  }
}

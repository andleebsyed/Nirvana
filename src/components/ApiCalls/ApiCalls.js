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
      console.log("data in response ", response.data);
      const userResponseFromServer = {
        allowUser: response.data.allowUser,
        messageToShowOnView: response.data.message,
        userId: response.data.user?._id,
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
  try {
    const response = await axios.post(
      "https://video-library-api.andydev7.repl.co/users/signup",
      signUpDataFromView
    );
    console.log("resposne on signup ", response);
    if (response.status === 200) {
      if (response.data.status === true) {
        console.log("resposne on signup ", response);
        return (isSignUpSuccessfull = {
          status: true,
          userId: response.data.user._id,
        });
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
  } catch (error) {
    console.log("error occured ", error.message);
  }
}

export async function GetVideos() {
  try {
    const response = await axios.get(
      "https://video-library-api.andydev7.repl.co/videos"
    );
    if (response.status === 200) {
      return response.data.videos;
    }
  } catch (error) {
    console.log("error occurred ", error);
  }
}

export async function GetLikedVideos() {
  const userId = localStorage.getItem("userId");

  try {
    const data = { UserId: userId };
    const response = await axios.post(
      "https://video-library-api.andydev7.repl.co/liked/all",
      data
    );
    console.log("response on fetchng liked videos ", response);
    if (response.status === 200) {
      return response.data.likedVideos;
    }
  } catch (error) {
    console.log("Oops!an error occurred ", error.response.data);
  }
}

export async function SaveToLiked(dispatch, video, userId) {
  try {
    // const userId = localStorage.getItem("userId");
    const data = { userId: userId, videoId: video._id };
    const response = await axios.post(
      "https://video-library-api.andydev7.repl.co/liked/add",
      data
    );
    console.log("rsponse on add to like ", response);
    if (response.status === 200) {
      dispatch({
        type: "ADD_TO_LIKED_VIDEOS",
        payload: { video },
      });
    }
  } catch (error) {
    console.log("ean error occurred ", error);
  }
}

export async function RemoveFromLikedVideos(dispatch, video, userId) {
  console.log(" i am called to remove video from liked videos");
  try {
    const data = { videoId: video._id, userId: userId };
    const response = await axios.post(
      "https://video-library-api.andydev7.repl.co/liked/delete",
      data
    );
    console.log("response from server is ", response);
    if (response.status === 200) {
      dispatch({
        type: "REMOVE_FROM_LIKED_VIDEOS",
        payload: { video },
      });
    }
  } catch (error) {
    console.log("error occured ", error.response.data);
  }
}
